import React from 'react'
import LogoLoop from '../LogoLoop'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const Sponsor = () => {
    const imageLogos = [
        { src: "https://cryptologos.cc/logos/thumbs/bitcoin.png?v=040", alt: "bitcoin" },
        { src: "https://cryptologos.cc/logos/thumbs/ethereum.png?v=040", alt: "eth" },
        { src: "https://cryptologos.cc/logos/thumbs/bnb.png?v=040", alt: "bnb" },
        { src: "https://cryptologos.cc/logos/thumbs/xrp.png?v=040", alt: "xrp" },
        { src: "https://cryptologos.cc/logos/thumbs/sui.png?v=040", alt: "sui" },
        { src: "https://cryptologos.cc/logos/thumbs/usd-coin.png?v=040", alt: "usdt" },
    ];

    return (
        <section className='py-10 relative overflow-hidden bg-black'>
            <div className="absolute top-0 left-[-10%] w-[1000px] h-[500px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className='container relative z-10 mb-5 md:mb-10'>
                <h2 className='text-3xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter'>
                    OUR <span className='text-orange-500'>SPONSORS</span>
                </h2>
            </div>

            {/* <div className='block md:hidden space-y-3 px-4 relative z-10'>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {imageLogos.map((logo, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/3">
                                <div className="p-4 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 aspect-square">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="w-12 h-12"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
                <Carousel
                    opts={{ align: "start", loop: true }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-4">
                        {imageLogos.map((logo, index) => (
                            <CarouselItem key={index} className="pl-4 basis-1/3">
                                <div className="p-4 flex items-center justify-center bg-white/5 rounded-xl border border-white/10 aspect-square">
                                    <img
                                        src={logo.src}
                                        alt={logo.alt}
                                        className="w-12 h-12"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div> */}

            <div className='relative flex flex-col gap-2 z-10'>
                <div className='border-y border-white/5 py-10 '>
                    <LogoLoop
                        logos={imageLogos}
                        speed={40}
                        direction="right"
                        logoHeight={80}
                        gap={120}
                    />
                </div>
                <div className='border-y border-white/5 py-10'>
                    <LogoLoop
                        logos={imageLogos}
                        speed={60}
                        direction="left"
                        logoHeight={80}
                        gap={150}
                    />
                </div>
            </div>
        </section>
    )
}

export default Sponsor