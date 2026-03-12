import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { galleryItems } from '@/constants';

const Gallery = () => {
    return (
        <div className='container py-10' id='Gallery'>


            <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                EVENT <span className='text-orange-500'>GALLERY</span>
            </h2>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50 mb-3"
                    >
                        <Image
                            src={item.image}
                            alt={item.title}
                            width={600}
                            height={800}
                            loading='lazy'
                            className="w-full h-auto group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />

                        <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery