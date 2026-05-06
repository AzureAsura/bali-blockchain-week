import React from 'react'
import LogoLoop from '../LogoLoop'

const Sponsor = () => {

    const imageLogosSponsors = Array.from({ length: 5 }, (_, i) => ({
        id: i + 1,
        alt: 'sponsor',
        src: `/logo/sponsor/logo${i + 1}.webp`,
    }));

    const firstHalfSponsors = imageLogosSponsors.slice(0, 5); 

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
            {/* Sponsors */}
            <div className='container relative z-10 mb-5 md:mb-10'>
                <h2 className='text-4xl text-center md:text-5xl font-black text-white mb-4 uppercase tracking-tighter'>
                    OUR <span className='text-orange-500'>sponsors</span>
                </h2>
            </div>


            <div className='flex flex-wrap justify-center items-center gap-10 md:gap-14 py-6 border-y border-white/5'>
                {imageLogosSponsors.map((logo) => (
                    <div key={logo.id} className="flex justify-center items-center w-32 sm:w-36 md:w-44 h-28">
                    <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                    />
                    </div>
                ))}
            </div>

            {/* Partners */}
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