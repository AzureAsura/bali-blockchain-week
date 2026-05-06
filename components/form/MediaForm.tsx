

'use client'

import { useActionState, useEffect } from "react";
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
import { mediaFunction } from "@/lib/actions/landing";
import { toast } from "sonner";

const mediaFocusData = ["Business", "Finance / Economy", "Lifestyle / Travel", "Tech", "Entertainment", "Gaming", "Sport", "Web3 & Crypto"];
const socialMediaData = ["Facebook", "LinkedIn", "X / Twitter", "Instagram", "TikTok", "YouTube"];
const distributionData = ["International", "National", "Regional", "Local"];

const MediaForm = () => {
    const [state, formAction, isPending] = useActionState(mediaFunction, {
        success: false,
        message: "",
    })

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

            <div className="pt-6 border-t border-zinc-800">
                <h3 className="text-2xl font-black uppercase text-orange-500 mb-6">Media Publication / Organization</h3>
            </div>

            <div className="space-y-2">
                <Label htmlFor="outletName" className="text-lg font-black uppercase">Outlet Name <span className="text-orange-500">*</span></Label>
                <Input id="outletName" name="outletName" className="input-landing" />
                {state?.error?.outletName && (
                    <p className="text-red-500 text-xs pt-1">{state.error.outletName}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label className="text-lg font-black uppercase">Position <span className="text-orange-500">*</span></Label>
                <Select name="position">
                    <SelectTrigger className="bg-zinc-900 border-zinc-800 w-full py-[22px]">
                        <SelectValue placeholder="Select position..." />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white">
                      <SelectItem value="Founder / C-level">Founder / C-level</SelectItem>
                        <SelectItem value="Corporate Executive">Corporate Executive (Business development / Marketing / Event / Agency)</SelectItem>
                        <SelectItem value="Developers">Developers / Software Engineer / Products</SelectItem>
                        <SelectItem value="Fund Manager">Fund Manager / Analyst</SelectItem>
                        <SelectItem value="Trader">Financial Advisor / Trader</SelectItem>
                        <SelectItem value="Creator">Artist / Creator</SelectItem>
                        <SelectItem value="Government Officials">Government Officials / Policy Makers</SelectItem>
                        <SelectItem value="Human Resources Department">Human Resources Department</SelectItem>
                        <SelectItem value="Journalist">Reporter / Journalist / Writer</SelectItem>
                        <SelectItem value="Student">Student</SelectItem>
                        <SelectItem value="Others">Others</SelectItem>
                    </SelectContent>
                </Select>
                {state?.error?.position && (
                    <p className="text-red-500 text-xs pt-1">{state.error.position}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="outletUrl" className="text-lg font-black uppercase">Outlet URL <span className="text-orange-500">*</span></Label>
                <Input id="outletUrl" name="outletUrl" className="input-landing" placeholder="https://" />
                {state?.error?.outletUrl && (
                    <p className="text-red-500 text-xs pt-1">{state.error.outletUrl}</p>
                )}
            </div>


            {[
                { label: "Media Focus", data: mediaFocusData, name: "mediaFocus" },
                { label: "Social Media", data: socialMediaData, name: "socialMedia" },
                { label: "Distribution", data: distributionData, name: "distribution" }
            ].map((group) => (
                <div key={group.label} className="space-y-4 pt-4">
                    <Label className="text-lg font-black uppercase">{group.label} <span className="text-orange-500">*</span></Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {group.data.map((item) => (
                            <div key={item} className="flex items-center space-x-3 bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                                <Checkbox
                                    id={`${group.name}-${item}`}
                                    name={group.name}
                                    value={item}
                                    className="border-zinc-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
                                <label htmlFor={`${group.name}-${item}`} className="text-sm text-zinc-200">{item}</label>
                            </div>
                        ))}
                    </div>
                    {state?.error?.[group.name as keyof typeof state.error] && (
                        <p className="text-red-500 text-xs pt-1">
                            {state.error[group.name as keyof typeof state.error]}
                        </p>
                    )}
                </div>
            ))}

            <div className="space-y-2">
                <Label htmlFor="audience" className="text-lg font-black uppercase">Tell us about your audience<span className="text-orange-500">*</span></Label>
                <Textarea id="audience" name="audience" className="input-landing min-h-[100px]" placeholder="Describe your audience (e.g., crypto enthusiasts) and size (e.g., 10k visitors/month, 100k page views/month)" />
                {state?.error?.audience && (
                    <p className="text-red-500 text-xs pt-1">{state.error.audience}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="logo" className="text-lg font-black uppercase">Link to your media partner logo <span className="text-orange-500">*</span></Label>
                <p className="text-xs text-zinc-500 italic lowercase">Min size 500x500px. Format SVG or PNG.</p>
                <Input id="logo" name="logo" className="input-landing" placeholder="https://example.com/logo.png" />
                {state?.error?.logo && (
                    <p className="text-red-500 text-xs pt-1">{state.error.logo}</p>
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
    )
}

export default MediaForm