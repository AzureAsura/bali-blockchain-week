

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
<<<<<<< HEAD
                    May 9, 2026
=======
                    Mid 2026
>>>>>>> prod/production
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

