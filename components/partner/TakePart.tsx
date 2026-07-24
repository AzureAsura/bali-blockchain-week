'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, Newspaper, Users, Coins } from 'lucide-react'
import Link from 'next/link'

const partnerTypes = [
    {
        icon: Newspaper,
        title: 'Become Media Partner',
        description: 'Access exclusive press materials, cover groundbreaking Web3 news, and amplify your reach across the blockchain ecosystem.',
        image: '/gallery/img20.webp',
        href: '/media',
        accent: 'from-orange-600/80',
    },
    {
        icon: Users,
        title: 'Community Partner',
        description: 'Collaborate with BBW to strengthen your community presence, co-host side events, and gain visibility among thousands of Web3 enthusiasts.',
        image: '/gallery/img14.webp',
        href: '/sponsorship',
        accent: 'from-amber-600/80',
    },
    {
        icon: Coins,
        title: 'Become an Affiliate',
        description: 'Promote Southeast Asia\'s top blockchain event and earn premium commissions. Perfect for influencers, KOLs, and content creators.',
        image: '/gallery/img9.webp',
        href: '/affiliate',
        accent: 'from-red-600/80',
    },
]

const TakePart = () => {
    return (
        <section id="take-part" className="relative py-20 md:py-32 bg-black overflow-hidden">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Ambient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                        Get Involved
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Take <span className="text-orange-500">Part</span>
                    </h2>
                    <p className="mt-6 text-gray-500 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
                        Choose your partnership path and be part of the movement
                        shaping the future of blockchain in Southeast Asia.
                    </p>
                </motion.div>

                {/* CTA Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {partnerTypes.map((partner, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.15 }}
                        >
                            <Link
                                href={partner.href}
                                className="group relative block h-[420px] md:h-[480px] rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/30 transition-all duration-500"
                            >
                                {/* Background Image */}
                                <img
                                    src={partner.image}
                                    alt={partner.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700 ease-out"
                                />

                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${partner.accent} via-black/60 to-black/80`} />

                                {/* Arrow */}
                                <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-orange-500 p-2.5 rounded-full">
                                        <ArrowUpRight className="text-white w-5 h-5" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
                                    <div className="w-12 h-12 rounded-xl bg-orange-500/15 border border-orange-500/25 flex items-center justify-center mb-5 group-hover:bg-orange-500/25 transition-colors duration-300">
                                        <partner.icon className="w-6 h-6 text-orange-400" />
                                    </div>

                                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-none mb-3">
                                        {partner.title}
                                    </h3>

                                    <p className="text-gray-300/80 text-sm leading-relaxed mb-6">
                                        {partner.description}
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <span className="text-orange-500 text-xs font-bold uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
                                            Apply Now
                                        </span>
                                        <ArrowUpRight className="w-4 h-4 text-orange-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TakePart
