import React from 'react';
import Image from 'next/image';
import { getInvolvedCard } from '@/constants';

const GetInvolvedElegan = () => {
    return (
        <section className="bg-black py-10">
            <div className="container">

                <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                    GET <span className='text-orange-500'>INVOLVED</span>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {getInvolvedCard.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 rounded-3xl overflow-hidden flex flex-col h-full border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            </div>

                            <div className="p-7 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-white font-extrabold text-xl md:text-3xl mb-2 leading-tight tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors duration-300 text-sm md:text-base flex items-center justify-center gap-2 group-hover:gap-3 cursor-pointer">
                                    {item.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolvedElegan;