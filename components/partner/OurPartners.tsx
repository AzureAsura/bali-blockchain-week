'use client'

import React, { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'motion/react'

type Category = 'sponsors' | 'media'

const sponsorLogos = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    alt: `Sponsor ${i + 1}`,
    src: `/logo/sponsor/logo${i + 1}.webp`,
}))

const mediaPartnerLogos = Array.from({ length: 29 }, (_, i) => ({
    id: i + 1,
    alt: `Media Partner ${i + 1}`,
    src: `/logo/partner/logo${i + 1}.webp`,
}))

const categories: { key: Category; label: string; count: number }[] = [
    { key: 'sponsors', label: 'Sponsors', count: sponsorLogos.length },
    { key: 'media', label: 'Media Partners', count: mediaPartnerLogos.length },
]

const OurPartners = () => {
    const [activeCategory, setActiveCategory] = useState<Category>('sponsors')

    const currentLogos = activeCategory === 'sponsors' ? sponsorLogos : mediaPartnerLogos

    const handleCategoryChange = useCallback((category: Category) => {
        setActiveCategory(category)
    }, [])

    return (
        <section className="relative py-20 md:py-32 bg-black overflow-hidden">
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* Ambient */}
            <div className="absolute bottom-0 left-1/3 w-[600px] h-[400px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 md:mb-16"
                >
                    <span className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                        Trusted By The Best
                    </span>
                    <h2 className="text-5xl md:text-7xl font-black text-white text-center uppercase tracking-tighter">
                        Our <span className="text-orange-500">Partners</span>
                    </h2>
                </motion.div>

                {/* Radio Button Switcher */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="flex justify-center mb-12 md:mb-16"
                >
                    <div className="inline-flex items-center p-1.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                        {categories.map((cat) => (
                            <button
                                key={cat.key}
                                onClick={() => handleCategoryChange(cat.key)}
                                className={`relative flex items-center gap-2.5 px-6 md:px-8 py-3 md:py-3.5 rounded-xl text-sm font-bold uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer ${
                                    activeCategory === cat.key
                                        ? 'text-black'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                            >
                                {/* Active background */}
                                {activeCategory === cat.key && (
                                    <motion.div
                                        layoutId="activeCategoryBg"
                                        className="absolute inset-0 bg-orange-500 rounded-xl shadow-lg shadow-orange-500/25"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                                    />
                                )}

                                {/* Radio dot */}
                                <span className="relative z-10 flex items-center justify-center w-4 h-4 rounded-full border-2 transition-colors duration-300"
                                    style={{
                                        borderColor: activeCategory === cat.key ? '#000' : 'rgba(255,255,255,0.2)',
                                    }}
                                >
                                    {activeCategory === cat.key && (
                                        <motion.span
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="w-2 h-2 rounded-full bg-black"
                                        />
                                    )}
                                </span>

                                <span className="relative z-10">{cat.label}</span>

                                {/* Count badge */}
                                <span className={`relative z-10 text-[10px] font-bold px-2 py-0.5 rounded-full transition-colors duration-300 ${
                                    activeCategory === cat.key
                                        ? 'bg-black/20 text-black'
                                        : 'bg-white/5 text-gray-500'
                                }`}>
                                    {cat.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Logo Cards Grid with AnimatePresence */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4, ease: 'easeOut' as const }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
                    >
                        {currentLogos.map((logo, index) => (
                            <motion.div
                                key={`${activeCategory}-${logo.id}`}
                                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                transition={{
                                    duration: 0.45,
                                    delay: Math.min(index * 0.04, 0.5),
                                    ease: 'easeOut' as const,
                                }}
                                className="group relative"
                            >
                                <div className="relative h-32 md:h-44 flex justify-center items-center rounded-2xl p-[1px] overflow-hidden">
                                    {/* Animated border gradient */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{
                                            duration: 6,
                                            repeat: Infinity,
                                            ease: 'linear',
                                        }}
                                        className="absolute inset-[-150%] z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: 'conic-gradient(from 0deg, transparent 0%, transparent 60%, #f97316 80%, #fb923c 100%)',
                                        }}
                                    />

                                    {/* Card inner */}
                                    <div className="relative z-10 w-full h-full bg-[#0a0a0a] rounded-2xl flex justify-center items-center border border-white/5 group-hover:border-transparent transition-colors duration-500">
                                        <div className="absolute inset-0 bg-orange-500/[0.03] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        {/* Lazy loaded image */}
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            loading="lazy"
                                            decoding="async"
                                            className="relative z-20 max-h-[55%] max-w-[70%] object-contain opacity-50 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Label */}
                                <p className="text-center text-[10px] text-gray-600 mt-2 font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {logo.alt}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    )
}

export default OurPartners
