import React from 'react'
import LogoLoop from '../LogoLoop'
import { Telescope } from 'lucide-react';

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
        <section className=' py-24 relative overflow-hidden'>
            <div className='container mb-20'>
                <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                    OUR <span className='text-orange-500'>SPONSORS</span>
                </h2>
            </div>

            <div className='relative flex flex-col gap-3'>

                <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-black via-black/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-black via-black/80 to-transparent z-20 pointer-events-none" />

                <div className='border-y border-white/5 py-8 bg-zinc-950/50 backdrop-blur-sm'>
                    <LogoLoop
                        logos={imageLogos}
                        speed={30}
                        direction="right"
                        logoHeight={75}
                        gap={100}
                        className=""
                    />
                </div>

                <div className='border-b border-white/5 py-8 bg-zinc-900/20'>
                    <LogoLoop
                        logos={imageLogos}
                        speed={50}
                        direction="left"
                        logoHeight={75}
                        gap={120}
                        className=" transition-all duration-500"
                    />
                </div>


            </div>

        </section>
    )
}

export default Sponsor