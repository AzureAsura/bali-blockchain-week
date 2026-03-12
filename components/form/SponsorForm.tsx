'use client'

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
import { sponsorFunction } from "@/lib/actions/landing";

const checkBoxData = ["Side Event", "Programs", "Exhibition", "Branding & Activations"]

const SponsorForm = () => {

    const [state, formAction, isPending] = useActionState(sponsorFunction, null)

    return (
        <form className="space-y-6" action={formAction}>

            <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-lg font-black uppercase">First name <span className="text-orange-500">*</span></Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        className="input-landing" />
                    {state?.error.firstName && (
                        <p className="text-red-500 text-xs pt-1">{state.error.firstName}</p>
                    )}
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-lg font-black uppercase">Last name <span className="text-orange-500">*</span></Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        className="input-landing" />
                    {state?.error.lastName && (
                        <p className="text-red-500 text-xs pt-1">{state.error.lastName}</p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <Label htmlFor="email" className="text-lg font-black uppercase">Email <span className="text-orange-500">*</span></Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    className="input-landing" />
                {state?.error.email && (
                    <p className="text-red-500 text-xs pt-1">{state.error.email}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label htmlFor="telegram" className="text-lg font-black uppercase">Telegram username <span className="text-orange-500">*</span></Label>
                <Input
                    id="telegram"
                    name="telegram"
                    className="input-landing" />
                {state?.error.telegram && (
                    <p className="text-red-500 text-xs pt-1">{state.error.telegram}</p>
                )}
            </div>

            <div className="space-y-2">
                <Label className="text-lg font-black uppercase">Position <span className="text-orange-500">*</span></Label>
                <Select name="position">
                    <SelectTrigger className="bg-zinc-900 border-zinc-800 w-full py-[22px]">
                        <SelectValue placeholder="Choose a position..." />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800 text-white border-zinc-700">
                        <SelectItem value="manager">Manager</SelectItem>
                        <SelectItem value="director">Director</SelectItem>
                        <SelectItem value="developer">Developer</SelectItem>
                        <SelectItem value="vp">VP / C-Level</SelectItem>
                    </SelectContent>
                </Select>
                {state?.error.position && (
                    <p className="text-red-500 text-xs pt-1">{state.error.position}</p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div className="space-y-2">
                    <Label htmlFor="company" className="text-lg font-black uppercase">Company name <span className="text-orange-500">*</span></Label>
                    <Input
                        id="company"
                        name="company"
                        className="input-landing" />
                    {state?.error.company && (
                        <p className="text-red-500 text-xs pt-1">{state.error.company}</p>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="companyFocus" className="text-lg font-black uppercase">Company focus <span className="text-orange-500">*</span></Label>
                    <Input
                        id="companyFocus"
                        name="companyFocus"
                        className="input-landing" />
                    {state?.error.companyFocus && (
                        <p className="text-red-500 text-xs pt-1">{state.error.companyFocus}</p>
                    )}
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <Label className="text-lg font-black uppercase" >We are interested in <span className="text-orange-500">*</span></Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {checkBoxData.map((item) => (
                        <div key={item} className="flex items-center space-x-3 space-y-0 bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                            <Checkbox
                                id={item}
                                name="interests"
                                value={item}
                                className="border-zinc-600 data-[state=checked]:bg-orange-500 data-[state=checked]:border-orange-500" />
                            <label htmlFor={item} className="text-sm peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-zinc-200">
                                {item}
                            </label>
                        </div>
                    ))}
                </div>
                {state?.error.interests && (
                    <p className="text-red-500 text-xs pt-1">{state.error.interests}</p>
                )}
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4 border-t border-zinc-800 mt-10">
                <Link href={'/'} type="button" className="flex items-center text-zinc-400 hover:text-white transition-colors text-sm py-2">
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                </Link>
                <Button type="submit" disabled={isPending} className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold px-12 py-6 rounded-xl transition-all hover:scale-105 shadow-lg shadow-orange-500/20">
                    {isPending ? (
                        <p>Submiting ...</p>
                    ) : (
                        <p>Submit</p>
                    )}

                </Button>
            </div>
        </form>
    )
}

export default SponsorForm