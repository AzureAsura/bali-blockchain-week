'use client'

import { motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'

const PartnerHero = () => {
    return (
        <section className="relative h-[90vh] md:h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/gallery/img3.webp"
                    alt="Bali Blockchain Weeks Partnership"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            </div>

            {/* Ambient Glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none z-0" />

            {/* Content */}
            <div className="relative z-10 container text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-sm mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    <span className="text-orange-400 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                        Open for Partners
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.15 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase tracking-tighter leading-[0.9]"
                >
                    Partner <br className="md:hidden" />
                    <span className="text-orange-500">With Us</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 text-gray-400 text-sm md:text-lg max-w-2xl leading-relaxed tracking-wide"
                >
                    Join Southeast Asia&apos;s premier blockchain event as a partner.
                    Connect your brand with 5,000+ industry leaders, developers, and visionaries
                    shaping the future of Web3.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.45 }}
                    className="mt-10 flex flex-col sm:flex-row gap-4"
                >
                    <a
                        href="#take-part"
                        className="group relative inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-black px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.15em] transition-all duration-300 active:scale-95 shadow-lg shadow-orange-500/25 overflow-hidden"
                    >
                        <span className="relative z-10">Become a Partner</span>
                        <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all duration-500" />
                    </a>
                    <a
                        href="#why-marketing"
                        className="group inline-flex items-center justify-center gap-3 border border-white/10 hover:border-orange-500/40 bg-white/5 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-[0.15em] transition-all duration-300 hover:bg-white/10"
                    >
                        Learn More
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">Scroll</span>
                <ChevronDown className="w-5 h-5 text-gray-500 animate-bounce" />
            </motion.div>

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent z-10" />
        </section>
    )
}

export default PartnerHero
