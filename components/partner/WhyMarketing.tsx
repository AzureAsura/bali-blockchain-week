'use client'

import { motion } from 'motion/react'
import { Users, Globe, Mic2, Radio, TrendingUp, Eye, Network } from 'lucide-react'
import CountUp from 'react-countup'

const stats = [
    { icon: Users, value: 5000, suffix: '+', label: 'Expected Attendees' },
    { icon: Mic2, value: 50, suffix: '+', label: 'Industry Speakers' },
    { icon: Globe, value: 30, suffix: '+', label: 'Countries Represented' },
    { icon: Radio, value: 100, suffix: '+', label: 'Media Coverage' },
]

const features = [
    {
        icon: Eye,
        title: 'Maximum Brand Exposure',
        description: 'Get premium visibility across all event channels — from main-stage branding and exhibition booths to digital campaigns reaching 100K+ crypto-native audience.',
    },
    {
        icon: TrendingUp,
        title: 'Targeted Audience',
        description: 'Connect directly with decision-makers, investors, developers, and enterprise leaders actively building and investing in the Web3 ecosystem.',
    },
    {
        icon: Network,
        title: 'Strategic Networking',
        description: 'Exclusive access to VIP networking sessions, closed-door roundtables, and after-party events where the most impactful deals in Web3 are made.',
    },
]

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' as const }
    }
}

const WhyMarketing = () => {
    return (
        <section id="why-marketing" className="relative py-20 md:py-32 bg-black overflow-hidden">
            {/* Ambient Glow */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/5 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16 md:mb-20"
                >
                    <span className="text-orange-500 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase mb-4 block">
                        Why Partner With Us
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                        Why Marketing <br />
                        at <span className="text-orange-500">BBW</span>
                    </h2>
                    <p className="mt-6 text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                        Position your brand at the forefront of Indonesia&apos;s largest blockchain movement.
                        Reach thousands of engaged participants across multiple touchpoints.
                    </p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative group p-6 md:p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-orange-500/20 transition-all duration-500 text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-orange-500 mx-auto mb-4" />
                                <div className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                                    <CountUp
                                        end={stat.value}
                                        duration={2.5}
                                        enableScrollSpy
                                        scrollSpyOnce
                                    />
                                    <span className="text-orange-500">{stat.suffix}</span>
                                </div>
                                <p className="text-gray-500 text-xs md:text-sm mt-2 font-medium tracking-wide uppercase">
                                    {stat.label}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="relative group p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 overflow-hidden"
                        >
                            {/* Gradient border glow on hover */}
                            <div className="absolute -inset-px bg-gradient-to-br from-orange-500/20 via-transparent to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors duration-300">
                                    <feature.icon className="w-6 h-6 text-orange-500" />
                                </div>

                                <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tighter leading-tight mb-3">
                                    {feature.title}
                                </h3>

                                <p className="text-sm text-gray-500 leading-relaxed font-medium tracking-tight">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyMarketing
