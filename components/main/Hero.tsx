// import { ArrowRight, Calendar, MapPin } from 'lucide-react'
// import Link from 'next/link'
// import ComunitiesButton from '../ComunitiesButton'
// import { motion, useScroll, useTransform } from 'framer-motion';

// const Hero = () => {

//     return (
//         <div className='relative bg-black min-h-screen text-white overflow-hidden flex flex-col will-change-transform'>

//             <div className="absolute inset-0 z-0">
//                 <video
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute w-full h-full object-cover inset-0 pointer-events-none"
//                     poster="/hero-placeholder.png"
//                 >
//                     <source src="/hero.webm" type="video/webm" />
//                 </video>
//             </div>

//             <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/90 via-black/40 to-transparent [mask-image:linear-gradient(to_right,black_0%,black_50%,transparent_100%)]">
//             </div>

//             <main className="relative z-10 min-h-screen flex flex-col justify-center w-full container lg:py-32">
//                 <div className="mb-4 md:mb-6">
//                     <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-[8px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
//                         Southeast Asia’s Leading Web3 & Crypto Event
//                     </span>
//                 </div>

//                 <h1 className="text-[44px] sm:text-6xl md:text-8xl font-black md:font-bold leading-[0.8] sm:leading-[0.85] md:leading-[0.8] tracking-tighter mb-4 md:mb-6 uppercase max-w-none">
//                     <span className="block">Bali</span>
//                     <span className="block">Blockchain</span>
//                     <p className="block">Weeks <span className='text-orange-500'>2026</span></p>
//                 </h1>

//                 <p className="max-w-xl text-[15px] sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 leading-relaxed opacity-80">
//                     A national movement uniting builders, universities, policymakers, and investors to transform Bali into a global blockchain powerhouse
//                 </p>

//                 <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-4 mb-10">
//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
//                         <div className="p-2 md:p-3 bg-yellow-500/20 rounded-xl">
//                             <Calendar className="text-yellow-500 w-4 h-4 md:w-6 md:h-6" />
//                         </div>
//                         <div>
//                             <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Date</p>
//                             <p className="text-sm md:text-lg font-semibold leading-tight">August, 2026</p>
//                         </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
//                         <div className="p-2 md:p-3 bg-yellow-500/20 rounded-xl">
//                             <MapPin className="text-yellow-500 w-4 h-4 md:w-6 md:h-6" />
//                         </div>
//                         <div>
//                             <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold min-w-32">Location</p>
//                             <p className="text-sm md:text-lg font-semibold leading-tight">TBA</p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-4">
//                     <Link href={'https://x.com/BaliBlockchainW'} target='_blank' className="group flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-2xl transition-all shadow-lg shadow-orange-500/20 w-full sm:w-auto">
//                         Subscribe
//                         <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </Link>

//                     <ComunitiesButton />
//                 </div>
//             </main>

//         </div>
//     )
// }

// export default Hero



"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const frameCount = 192;
const images: HTMLImageElement[] = [];

const preloadImages = () => {
    for (let i = 15; i <= frameCount; i++) {
        const img = new Image();
        const formattedIndex = i.toString().padStart(3, "0");
        img.src = `/sequence/ezgif-frame-${formattedIndex}.jpg`;
        images.push(img);
    }
};

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

    useEffect(() => {
        preloadImages();

        setIsLoaded(true);
    }, []);

    const render = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const img = images[index - 1];
        if (img) {

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const imgRatio = img.width / img.height;
            const canvasRatio = canvasWidth / canvasHeight;

            let drawWidth, drawHeight, offsetX, offsetY;

            if (imgRatio > canvasRatio) {
                drawHeight = canvasHeight;
                drawWidth = canvasHeight * imgRatio;
                offsetX = (canvasWidth - drawWidth) / 2;
                offsetY = 0;
            } else {
                drawWidth = canvasWidth;
                drawHeight = canvasWidth / imgRatio;
                offsetX = 0;
                offsetY = (canvasHeight - drawHeight) / 2;
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            const currentFrame = Math.round(currentIndex.get());
            render(Math.max(1, Math.min(currentFrame, frameCount)));
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        const unsubscribe = currentIndex.on("change", (latest) => {
            const frameIndex = Math.round(latest);

            const clampedIndex = Math.max(1, Math.min(frameIndex, frameCount));
            requestAnimationFrame(() => render(clampedIndex));
        });

        return () => {
            window.removeEventListener("resize", handleResize);
            unsubscribe();
        };
    }, [currentIndex, isLoaded]);

    return (
        <div ref={containerRef} className="h-[300vh] md:h-[500vh] relative z-0">
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                <canvas ref={canvasRef} className="block w-full h-full object-cover" />

                <OverlayContent scrollYProgress={scrollYProgress} />
            </div>
        </div>
    );
}

function OverlayContent({ scrollYProgress }: { scrollYProgress: any }) {

    const opacityTitle = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);


    const opacitySlogan1 = useTransform(
        scrollYProgress,
        [0.25, 0.35, 0.45],
        [0, 1, 0],
    );
    const xSlogan1 = useTransform(scrollYProgress, [0.25, 0.35], [-50, 0]);

    const opacitySlogan2 = useTransform(
        scrollYProgress,
        [0.55, 0.65, 0.75],
        [0, 1, 0],
    );
    const xSlogan2 = useTransform(scrollYProgress, [0.55, 0.65], [50, 0]);

    return (
        <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center text-white mix-blend-difference">
            <motion.div
                style={{ opacity: opacityTitle }}
                className="absolute text-center"
            >
                <h1 className="text-[10vw] leading-none uppercase font-bold tracking-tighter">
                    Bali Blokchain Weeks
                </h1>
                <p className="text-xl tracking-[0.5em] mt-4 uppercase">
                    May 9, 2025
                </p>
            </motion.div>

            <motion.div
                style={{ opacity: opacityTitle }}
                className="absolute bottom-10 left-0 right-0 flex flex-col items-center"
            >
                <div className="animate-bounce text-sm uppercase tracking-[0.2em]">
                    Scroll to Explore
                </div>
            </motion.div>

            <motion.div
                style={{ opacity: opacitySlogan1, x: xSlogan1 }}
                className="absolute left-[10%] w-[40%] text-left hidden md:block"
            >
                <h2 className="text-[5vw] tracking-tighter leading-none uppercase font-bold">
                    MASS
                    <br />
                    ADOPTION
                </h2>
            </motion.div>

            <motion.div
                style={{ opacity: opacitySlogan2, x: xSlogan2 }}
                className="absolute right-[5%] w-[40%] text-right  hidden md:block"
            >
                <h2 className="text-[5vw] tracking-tighter leading-none uppercase font-bold">
                    SHAPING
                    <br />
                    THE FUTURE
                </h2>
            </motion.div>
        </div>
    );
}

