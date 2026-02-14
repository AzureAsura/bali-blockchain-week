import React from 'react'
import { Sprout, Zap, Shield, Globe } from 'lucide-react'

const About = () => {
    const stats = [
        { label: "Total Yield", value: "$420M+", icon: <Zap className="text-orange-500" /> },
        { label: "Active Builders", value: "12K+", icon: <Sprout className="text-orange-500" /> },
        { label: "Nodes Secured", value: "850+", icon: <Shield className="text-orange-500" /> },
        { label: "Countries", value: "45+", icon: <Globe className="text-orange-500" /> },
    ];

    return (
        <section className='relative py-10 bg-black overflow-hidden'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className='container relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    <div className='space-y-8'>
                        <div>
                            <span className='text-orange-500 font-bold uppercase tracking-[0.3em] text-sm'>
                                Bali Blockchain Weeks 2026
                            </span>
                            <h2 className='text-5xl lg:text-7xl font-black text-white mt-4 leading-none uppercase'>
                                WHY OUR EVENT <br />
                                <span className='text-orange-500'>MATTERS.</span>
                            </h2>
                        </div>

                        <p className='text-gray-400 text-lg md:text-xl leading-relaxed max-w-xl'>
                            Kami membangun ekosistem digital yang "subur" bagi para inovator.
                            Layaknya sebuah lahan pertanian yang dikelola secara terdesentralisasi,
                            kami menyemai ide-ide brilian hingga menjadi protokol raksasa yang mengubah dunia.
                        </p>

                    </div>

                    <div className='relative flex items-center justify-center'>

                        <div className="absolute w-[120%] h-[120%] bg-orange-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

                        <div className='relative z-10 w-full aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-orange-500/10 group'>
                            <img
                                src="https://coinfest.asia/_next/image?url=https%3A%2F%2Fwojgrioccmbywgtruwfl.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2FMedia%2520Folders%2FCoinfest%2520Asia%25202026%2Fhomepage-speakers%2Ftraders-card.png&w=1080&q=75" 
                                alt="Web3 Farm Ecosystem"
                                className='w-full h-full object-cover transition-transform duration-700'
                            />

                        </div>

                    </div>
                </div>

                <div className='mt-24 pt-12 border-t border-white/5 grid md:grid-cols-3 gap-8'>
                    <div className='flex gap-4 items-start'>
                        <div className='h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0 animate-pulse' />
                        <p className='text-sm text-gray-500'><strong className='text-white'>Decentralized Growth:</strong> Mekanisme voting komunitas yang memastikan ekosistem tetap sehat.</p>
                    </div>
                    <div className='flex gap-4 items-start'>
                        <div className='h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0 animate-pulse' />
                        <p className='text-sm text-gray-500'><strong className='text-white'>Sustainable Yield:</strong> Fokus pada ekonomi jangka panjang, bukan sekadar hype sesaat.</p>
                    </div>
                    <div className='flex gap-4 items-start'>
                        <div className='h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0 animate-pulse' />
                        <p className='text-sm text-gray-500'><strong className='text-white'>Security First:</strong> Lahan digital yang aman dengan audit smart contract berlapis.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About