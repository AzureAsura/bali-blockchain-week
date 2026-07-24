import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image';
import SpeakerSlider from '../SpeakerSlider';

const speakersData = [
    {
    name: "Coming Soon",
    role: "Web 3 & Crypto Speaker",
    image: "/speakers/quest.png",
  }
];



const Speakers = () => {
    return (
        <div className='py-10 md:py-20' id='Speakers'>
            <div className='container mx-auto px-4'>

                <h2 className='text-[33px] md:text-5xl font-black text-white mb-12 leading-8 uppercase tracking-tighter text-center'>
                    upcoming <span className='text-orange-500'>SPEAKERS</span>
                </h2>

                <div className='flex flex-wrap justify-center gap-8 md:gap-10 hidden md:flex'>
    {speakersData.map((speaker, index) => (
        <div
            key={index}
            className='flex flex-col items-center group cursor-pointer transition-all duration-300 w-full md:w-[calc(50%-20px)] lg:w-[calc(33.333%-28px)] max-w-[300px]'
        >
            {/* --- Container Foto & Bingkai Miring --- */}
            {/* Padding luar (p-4 md:p-5) ditambahkan agar bingkai miring tidak terpotong */}
            <div className='relative w-full p-4 md:p-5 mb-2 flex items-center justify-center'>
                
                {/* Elemen Bingkai Miring (Parallelogram Border) */}
                <div className='absolute inset-2 border-[3px] border-[#E52322] -skew-x-[16deg] z-10 pointer-events-none transition-transform duration-300 group-hover:scale-105' />

                {/* Kotak Foto Persegi Panjang */}
                <div className='relative overflow-hidden bg-[#E52322] aspect-[3/4] w-full z-0'>
                    <Image
                        src={speaker.image}
                        width={400}
                        height={533}
                        className='w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500'
                        alt={speaker.name}
                        priority={index < 4}
                    />
                </div>
            </div>

            {/* --- Bagian Teks (Nama & Jabatan) --- */}
            <div className='text-center px-2 flex flex-col items-center justify-center mt-1'>
                <h3 className='text-white font-extrabold text-lg lg:text-xl leading-tight tracking-wider uppercase mb-1 group-hover:text-[#E52322] transition-colors'>
                    {speaker.name}
                </h3>
                <p className='text-gray-300 text-xs md:text-sm font-normal leading-relaxed max-w-[250px]'>
                    {speaker.role}
                </p>
            </div>
        </div>
    ))}
</div>

                <SpeakerSlider />

            </div>
        </div>


    )
}

export default Speakers


