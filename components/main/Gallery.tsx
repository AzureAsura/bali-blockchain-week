import React from 'react'
import Link from 'next/link'

const items = [
    { id: 1, title: 'Network Hub', image: 'https://images.unsplash.com/photo-1601132359864-c974e79890ac?q=80&w=2071&auto=format&fit=crop' },
    { id: 2, title: 'AI Assistant', image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, title: 'Cyber Operator', image: 'https://cdn.leonardo.ai/users/41962954-1852-4708-9646-1cb88be192a1/generations/0b1d14b4-9f9d-4cb9-af22-f2ef836663cb/segments/4:4:1/Lucid_Origin_Upper_body_only_Operator_rising_from_dense_smoke__3.jpg' },
    { id: 4, title: 'Robotics', image: 'https://images.unsplash.com/photo-1625314887424-9f190599bd56?q=80&w=987&auto=format&fit=crop' },
    { id: 5, title: 'Droid Unit', image: 'https://images.unsplash.com/photo-1589254065909-b7086229d08c?q=80&w=987&auto=format&fit=crop' },
    { id: 6, title: 'Data Center', image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop' },
    { id: 7, title: 'Hardware', image: 'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1364&auto=format&fit=crop' },
    { id: 8, title: 'Tech Interface', image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=1364&auto=format&fit=crop' },
    { id: 9, title: 'Virtual Office', image: 'https://images.unsplash.com/photo-1580584126903-c17d41830450?q=80&w=1939&auto=format&fit=crop' },
    { id: 10, title: 'Code Base', image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop' },
];
const Gallery = () => {
    return (
        <div className='container py-10'>

            <div className='mb-12'>

                <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                    EVENT <span className='text-orange-500'>GALLERY</span>

                </h2>
            </div>

            <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="break-inside-avoid relative group cursor-pointer rounded-2xl overflow-hidden border border-white/5 bg-zinc-900/50 mb-3"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto group-hover:scale-105 transition-all duration-700 ease-in-out"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="absolute bottom-4 left-4">
                                <p className="text-orange-500 font-bold text-xs uppercase tracking-widest mb-1">
                                    #BBW2026
                                </p>
                                <h3 className="text-white font-bold text-lg uppercase italic">
                                    {item.title}
                                </h3>
                            </div>
                        </div>

                        <div className="absolute inset-0 border-2 border-orange-500/0 group-hover:border-orange-500/50 rounded-2xl transition-all duration-500 pointer-events-none"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery