"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SponsorLogo {
    id: number;
    alt: string;
    src: string;
}

const imageLogosSponsors: SponsorLogo[] = Array.from({ length: 8 }, (_, i) => ({
    id: i + 1,
    alt: 'sponsor',
    src: `/logo/sponsor/logo${i + 1}.webp`,
}));

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.8, ease: "easeOut" } 
    },
};

const SponsorCard: React.FC = () => {
    return (
        <div className='flex flex-wrap justify-center items-center gap-8 px-4 pb-24 max-w-7xl mx-auto'>
            {imageLogosSponsors.map((logo) => (
                <motion.div
                    key={logo.id}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative w-[45%] md:w-64 h-40 md:h-52 flex justify-center items-center rounded-2xl p-[1.5px] overflow-hidden"
                >
                    <motion.div
                        animate={{
                            rotate: 360,
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute inset-[-150%] z-0"
                        style={{
                            background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, #f97316 80%, #fb923c 100%)",
                        }}
                    />

                    <div className="relative z-10 w-full h-full bg-[#0a0a0a] rounded-2xl flex justify-center items-center">
                        <div className="absolute inset-0 bg-orange-500/5 rounded-2xl" />
                        <img
                            src={logo.src}
                            alt={logo.alt}
                            className="relative z-20 max-h-[65%] max-w-[75%] object-contain"
                        />
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default SponsorCard;