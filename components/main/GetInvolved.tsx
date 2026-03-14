import React from 'react';
import Image from 'next/image';
import { getInvolvedCard } from '@/constants';
import Link from 'next/link';
import GetInvolvedGrid from '../GetInvolvedGrid';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import GetInvolvedTickets from '../GetInvolvedTickets';



const GetInvolved = () => {
    return (
        <section className="bg-black py-10">
            <div className="container">

                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-7xl mx-auto h-[1000px] md:h-[600px]">
                    <GetInvolvedTickets/>
                    {getInvolvedCard.map((item, i) => (
                        <Link
                            href={item.href}
                            className={clsx(
                                "group relative border border-white/10 hover:border-orange-600/40 bg-neutral-900 overflow-hidden rounded-xl shadow-2xl",
                                item.className
                            )}
                            key={i}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 md:grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-orange-500 p-2 rounded-full">
                                    <ArrowUpRight className="text-white w-5 h-5" />
                                </div>

                                <h3 className={clsx(
                                    "font-black text-white mb-2 leading-none uppercase",
                                    item.id === 2 || item.id === 4 ? 'text-xl md:text-2xl' : 'text-xl md:text-4xl'
                                )}>
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2 overflow-hidden">
                                    <p className="text-gray-300 text-sm font-manrope">{item.description}</p>
                                </div>

                                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-4 md:hidden">
                                    Click to Register →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;