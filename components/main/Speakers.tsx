import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image';
import SpeakerSlider from '../SpeakerSlider';

const speakersData = Array.from({ length: 1 }, (_, i) => ({
    name: `GreenMan-Ron ${i + 1}`,
    role: "Community Manager & Educator Lead BlockDevId",
    image: `/speakers/speaker${i + 1}.webp`
}));



const Speakers = () => {
    return (
        <div className='py-10 md:py-20' id='Speakers'>
            <div className='container'>
                <h2 className='text-[33px] md:text-5xl font-black text-white mb-12 leading-8 uppercase tracking-tighter'>
                    upcoming <span className='text-orange-500'>SPEAKERS</span>
                </h2>

                <div className='grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 hidden md:grid'>
                    {speakersData.map((speaker, index) => (
                        <div key={index} className='relative group overflow-hidden rounded-3xl border bg-[#111] aspect-[3/4] transition-all duration-500 border-orange-500/50'>

                            <div className='absolute inset-0 z-0 flex items-end justify-center'>
                                <Image
                                    src={speaker.image}
                                    width={300}
                                    height={400}
                                    className='w-full h-[80%] object-contain object-bottom group-hover:scale-105 transition-all duration-700 pt-4'
                                    alt={speaker.name}
                                    priority
                                />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <div className="rounded-full bg-white absolute w-40 h-40 blur-[80px] opacity-20 will-change-auto" />
                            </div>

                            <div className='relative z-20 flex flex-col items-center pt-8 px-4 text-center'>
                                <h3 className='text-white font-bold text-2xl drop-shadow-md'>
                                    {speaker.name}
                                </h3>
                                <p className='text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]'>
                                    {speaker.role}
                                </p>
                            </div>


                            <div className='absolute inset-0 z-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />


                            <div className='absolute bottom-0 left-0 w-full h-[4px] z-40 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-100 transition-transform duration-500 ease-out' />

                        </div>
                    ))}
                </div>

                <SpeakerSlider/>



            </div>
        </div>



    )
}

export default Speakers


