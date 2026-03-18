import React from 'react'
import LogoLoop from '../LogoLoop'

const Sponsor = () => {

    const imageLogos = Array.from({ length: 23 }, (_, i) => ({
        id: i + 1,
        alt: 'sponsor',
        src: `/logo/logo${i + 1}.webp`,
    }));

    const firstHalf = imageLogos.slice(0, 11); 
    const secondHalf = imageLogos.slice(11);


    return (
        <section className='py-10 relative overflow-hidden bg-black' id='Partners'>
         
            <div className='container relative z-10 mb-5 md:mb-10'>
                <h2 className='text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tighter'>
                    OUR <span className='text-orange-500'>partners</span>
                </h2>
            </div>


            <div className='relative flex flex-col gap-2 z-10'>
                <div className='border-y border-white/5 py-10 '>
                    <LogoLoop
                        logos={firstHalf}
                        speed={40}
                        direction="right"
                        logoHeight={80}
                        gap={120}
                    />
                </div>
                <div className='border-y border-white/5 py-10'>
                    <LogoLoop
                        logos={secondHalf}
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