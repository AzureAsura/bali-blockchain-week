'use client'

import { useActionState, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { affiliateFunction } from "@/lib/actions/landing";
import { toast } from "sonner";
import { countries } from "@/constants";

const platformsData = [
    "Twitter/X",
    "Facebook",
    "Linkedin",
    "Discord",
    "Telegram/WhatsApp Group",
    "Social Blogging (Newsletter, Medium, Blog, etc)",
    "Discussion Forums (Reddit, Quora, etc)",
    "Media Sharing Networks (Instagram, YouTube, TikTok, etc)",
];


const AffiliateForm = () => {
    const [state, formAction, isPending] = useActionState(affiliateFunction, {
        success: false,
        message: "",
    });

    useEffect(() => {
        if (state?.message) {
            if (state.success) {
                toast.success(state.message);
            } else {
                toast.error(state.message);
            }
        }
    }, [state]);

    return (
        <form className="space-y-6" action={formAction}>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-lg font-black uppercase">First name <span className="text-orange-500">*</span></Label>
                    <Input id="firstName" name="firstName" className="input-landing" />
                    {state?.error?.firstName && (
                        <p className="text-red-500 text-xs pt-1">{state.error.firstName}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-lg font-black uppercase">Last name <span className="text-orange-500">*</span></Label>
                    <Input id="lastName" name="lastName" className="input-landing" />
                    {state?.error?.lastName && (
                        <p className="text-red-500 text-xs pt-1">{state.error.lastName}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-black uppercase">Email <span className="text-orange-500">*</span></Label>
                <Input id="email" name="email" type="email" className="input-landing" />
                {state?.error?.email && (
                    <p className="text-red-500 text-xs pt-1">{state.error.email}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="phone" className="text-lg font-black uppercase">Phone number <span className="text-orange-500">*</span></Label>
                <Input id="phone" name="phone" className="input-landing" />
                {state?.error?.phone && (
                    <p className="text-red-500 text-xs pt-1">{state.error.phone}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="telegram" className="text-lg font-black uppercase">Telegram username <span className="text-orange-500">*</span></Label>
                <Input id="telegram" name="telegram" className="input-landing" />
                {state?.error?.telegram && (
                    <p className="text-red-500 text-xs pt-1">{state.error.telegram}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label className="text-lg font-black uppercase">Country <span className="text-orange-500">*</span></Label>
                <Select name="country">
                    <SelectTrigger className="bg-zinc-900 border-zinc-800 w-full py-[22px]">
                        <SelectValue placeholder="Select country..." />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                        {countries.map((c) => (
                            <SelectItem key={c.code} value={c.name}>{c.name}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
                {state?.error?.country && (
                    <p className="text-red-500 text-xs pt-1">{state.error.country}</p>
                )}
            </div>

            <div className="pt-6 border-t border-zinc-800">
                <h3 className="text-2xl font-black uppercase text-orange-500 mb-6">Affiliate Information</h3>
            </div>

            <div className="space-y-2">
                <Label htmlFor="companyName" className="text-lg font-black uppercase">Company Name <span className="text-orange-500">*</span></Label>
                <Input id="companyName" name="companyName" className="input-landing" />
                {state?.error?.companyName && (
                    <p className="text-red-500 text-xs pt-1">{state.error.companyName}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="companyWebsite" className="text-lg font-black uppercase">Company Website <span className="text-orange-500">*</span></Label>
                <Input id="companyWebsite" name="companyWebsite" className="input-landing" placeholder="https://" />
                {state?.error?.companyWebsite && (
                    <p className="text-red-500 text-xs pt-1">{state.error.companyWebsite}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="audience" className="text-lg font-black uppercase">
                    Tell us about your audience and who do you aim to reach? <span className="text-orange-500">*</span>
                </Label>
                <Textarea id="audience" name="audience" className="input-landing min-h-[100px]" />
                {state?.error?.audience && (
                    <p className="text-red-500 text-xs pt-1">{state.error.audience}</p>
                )}
            </div>

            <div className="space-y-4 pt-4">
                <Label className="text-lg font-black uppercase">
                    What platforms do you use to engage with your audience? Select all that apply <span className="text-orange-500">*</span>
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {platformsData.map((item) => (
                        <div key={item} className="flex items-center space-x-3 bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                            <Checkbox
                                id={`platforms-${item}`}
                                name="platforms"
                                value={item}
                                className="border-zinc-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500"
                            />
                            <label htmlFor={`platforms-${item}`} className="text-sm text-zinc-200">{item}</label>
                        </div>
                    ))}
                </div>
                {state?.error?.platforms && (
                    <p className="text-red-500 text-xs pt-1">{state.error.platforms}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="platformLinks" className="text-lg font-black uppercase">
                    Please provide the links to your platforms here <span className="text-orange-500">*</span>
                </Label>
                <Textarea id="platformLinks" name="platformLinks" className="input-landing min-h-[100px]" />
                {state?.error?.platformLinks && (
                    <p className="text-red-500 text-xs pt-1">{state.error.platformLinks}</p>
                )}
            </div>

            <div className="flex items-center justify-between pt-8 gap-4 border-t border-zinc-800 mt-10">
                <Link href={'/'} className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm py-2 shrink-0">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </Link>

                <Button
                    type="submit"
                    disabled={isPending}
                    className="cursor-pointer w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 md:px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/20 uppercase"
                >
                    {isPending ? 'Submiting ... ' : 'Submit'}
                </Button>
            </div>
        </form>
    );
};

export default AffiliateForm;