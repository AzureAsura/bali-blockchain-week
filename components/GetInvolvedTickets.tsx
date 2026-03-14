'use client' 
import { Link as ScrollLink } from 'react-scroll'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'


const GetInvolvedTickets = () => {
    return (
        <ScrollLink
            to={'Pricing'}
            smooth={true}
            duration={900}
            offset={-80}
            className="group relative border border-white/10 hover:border-orange-600/40 bg-neutral-900 overflow-hidden rounded-xl shadow-2xl md:col-span-2 md:row-span-2 cursor-pointer">

            <Image
                src={'/gallery/img2.webp'}
                alt={'JOIN AS AN ATTENDEE'}
                fill
                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 md:grayscale group-hover:grayscale-0"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-orange-500 p-2 rounded-full">
                    <ArrowUpRight className="text-white w-5 h-5" />
                </div>

                <h3 className="font-black text-white mb-2 leading-none uppercase text-xl md:text-4xl">
                    JOIN AS AN ATTENDEE
                </h3>

                <div className="flex items-center gap-2 overflow-hidden">
                    <p className="text-gray-300 text-sm font-manrope">Network with industry leaders and gain exclusive global insights.</p>
                </div>

                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-4 md:hidden">
                    Click to Register →
                </span>
            </div>
        </ScrollLink>
    )
}

export default GetInvolvedTickets