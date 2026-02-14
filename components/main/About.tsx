import React from 'react'
import { Sprout, Zap, Shield, Globe } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const About = () => {
    const features = [
        {
            title: "Global Networking",
            desc: "Connect with industry leaders, developers, and investors from over 50 countries in an intimate setting."
        },
        {
            title: "Deep Dive Workshops",
            desc: "Hands-on sessions covering ZK-proofs, modular blockchains, and the future of decentralized finance."
        },
        {
            title: "Security Summit",
            desc: "Dedicated tracks for smart contract auditing and institutional-grade security infrastructure."
        }
    ]

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
                            Bali Blockchain Weeks is a flagship event to discover the future of blockchain. Founded and managed by brilliant individuals deeply immersed in the crypto space, our conference brings together industry leaders, innovators, and enthusiasts.
                        </p>

                    </div>

                    <div className='relative flex items-center justify-center'>

                        <div className="absolute w-[120%] h-[120%] bg-orange-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

                        <div className='relative z-10 w-full aspect-square lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-orange-500/10 group'>
                            <img
                                src="https://coinfest.asia/_next/image?url=https%3A%2F%2Fwojgrioccmbywgtruwfl.supabase.co%2Fstorage%2Fv1%2Fobject%2Fpublic%2FMedia%2520Folders%2FCoinfest%2520Asia%25202026%2Fhomepage-speakers%2Ftraders-card.png&w=1080&q=75"
                                alt="Web3 Farm Ecosystem"
                                className='w-full h-full object-cover'
                            />

                        </div>

                    </div>
                </div>

                <div className='mt-24 pt-12 border-t border-white/5'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4 flex md:grid md:grid-cols-3 md:gap-8 md:ml-0">
                            {features.map((feature, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 basis-[85%] md:basis-full md:pl-0"
                                >
                                    <div className='flex gap-4 items-start h-full'>
                                        <div className='h-2 w-2 rounded-full bg-orange-500 mt-2 shrink-0 animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.6)]' />
                                        <p className='text-sm text-gray-500 leading-relaxed'>
                                            <strong className='text-white block md:inline mb-1 md:mb-0'>
                                                {feature.title}:
                                            </strong>{" "}
                                            {feature.desc}
                                        </p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default About