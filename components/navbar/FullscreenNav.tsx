'use client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { X, Instagram, Mail, Phone, ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const menuItems = [
    { name: 'About', href: '/' },
    { name: 'Speaker', href: '/' },
    { name: 'Partners', href: '/' },
    { name: 'Gallery', href: '/' },
    // { name: 'Tickets', href: '/' },
    // { name: 'FAQ', href: '/' },
]

const FullscreenNav = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    if (!mounted) return null

    return createPortal(
        <div
            className={`
        md:hidden fixed inset-0 w-screen h-screen bg-black text-white z-[9999]
        transform transition-all duration-[800ms] ease-[cubic-bezier(0.23,1,0.32,1)]
        ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}
        >
            <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 blur-[150px] rounded-full -z-10" />

            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-end">
                <div className="flex flex-col group cursor-default">
                    <span className="text-[10px] md:text-xs tracking-[0.6em] uppercase text-white font-black mb-2 transition-all duration-500 group-hover:tracking-[0.8em] drop-shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                        Bali <span className='text-orange-500'>Blockchain</span>
                    </span>

                    <div className="relative overflow-hidden">
                        <span className="text-xl md:text-2xl font-bold tracking-[0.3em] uppercase text-white/90 leading-none block">
                            Weeks <span className="font-bold text-white">2026</span>
                        </span>
                    </div>
                </div>

                <button
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-3 transition-all duration-300"
                >
                    <span className="text-[10px] tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                    <div className="border border-white/10 rounded-full p-3 group-hover:bg-orange-500 group-hover:border-orange-500 transition-all">
                        <X className='size-5 group-hover:rotate-90 transition-transform duration-500' />
                    </div>
                </button>
            </div>

            <div className="h-full flex flex-col justify-center px-8">
                <nav className="flex flex-col space-y-2">
                    {menuItems.map((item, index) => (
                        <div key={item.name} className='group flex items-center gap-4 overflow-hidden'>
                            <Link
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-bold tracking-tighter hover:tracking-normal hover:text-orange-500 transition-all duration-500 uppercase flex items-center gap-4"
                            >
                                {item.name}
                            </Link>
                        </div>
                    ))}
                </nav>

                <div className="mt-10 gap-8 border-t border-white/5 pt-10">
                    <Link
                        href="/tickets"
                        className="group relative inline-flex items-center justify-between bg-orange-500 text-black px-8 py-5 rounded-sm overflow-hidden transition-all duration-300 hover:bg-orange-600"
                    >
                        <span className="text-sm font-bold uppercase tracking-[0.2em] mr-12">Get Your Tickets</span>
                        <ArrowRight className="size-5 group-hover:translate-x-2 transition-transform duration-300" />

                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
                    </Link>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
        </div>,
        document.body
    )
}

export default FullscreenNav