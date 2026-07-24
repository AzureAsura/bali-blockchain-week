import React from 'react'
import LogoLoop from '../LogoLoop'
import SponsorCard from '../SponsorCard';

const Sponsor = () => {


    const imageLogosPartners = Array.from({ length: 29 }, (_, i) => ({
        id: i + 1,
        alt: 'partner',
        src: `/logo/partner/logo${i + 1}.webp`,
    }));

    const firstHalf = imageLogosPartners.slice(0, 15);
    const secondHalf = imageLogosPartners.slice(15);


    return (
        <>
            <section className='py-10 relative overflow-hidden bg-black' id='Partners'>

                <div className='container relative z-10 mb-12'>
                    <h2 className='text-5xl md:text-7xl font-black text-white text-center uppercase tracking-tighter'>
                        OUR <span className='text-orange-500'>SPONSORS</span>
                    </h2>
                </div>

                <SponsorCard />


                <div className='container relative z-10 mb-5 md:mb-10'>
                    <h2 className='text-4xl center md:text-5xl font-black text-white mb-4 uppercase tracking-tighter'>
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
        </>
    )
}

export default Sponsor