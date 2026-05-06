"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function Preloader() {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%",
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
                    }}
                    className="fixed inset-0 z-50 flex flex-col justify-between bg-black text-white p-10 font-bebas"
                >
                    <div className="flex justify-between items-start">
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3"
                        >
                            <img src="/logo.png" alt="logo" className="size-8 object-contain" />
                            <span className="text-sm font-sans font-semibold tracking-[0.3em] uppercase text-white/80">
                                Bali Blockchain Week
                            </span>
                        </motion.div>
                       
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <div className="relative overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, ease: "circOut" }}
                                className="text-[15vw] lg:text-[8vw] leading-none text-center font-bold"
                            >
                                LOADING
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="font-sans text-xs text-center tracking-[0.4em] uppercase text-white/80"
                        >
                            The Premier Web3 Event in Southeast Asia
                        </motion.p>
                    </div>

                    <div className="w-full">
                        <div className="flex justify-between mb-3 font-sans text-xs uppercase tracking-widest text-white/40">
                            <span>Preparing Experience</span>
                            <span className="text-orange-500">{progress}%</span>
                        </div>
                        <div className="w-full h-px bg-white/10 relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-600 to-orange-400"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}