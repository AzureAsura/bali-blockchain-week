import React from 'react'
import { Sprout, Zap, Shield, Globe } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { aboutFeatures } from '@/constants'

const About = () => {
    return (
        <section className='relative py-10 bg-black overflow-hidden' id='About'>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className='container relative z-10'>
                <div className='grid lg:grid-cols-2 gap-16 items-center'>

                    <div className='space-y-8'>
                        <div>
                            <span className='text-orange-500 font-bold uppercase tracking-[0.15em] md:tracking-[0.3em] text-xs md:text-sm block mb-2'>
                                Bali Blockchain Weeks 2026
                            </span>

                            <h2 className='text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[0.95] md:leading-none uppercase'>
                                WHY OUR EVENT <br />
                                <span className='text-orange-500 inline-block mt-1'>MATTERS.</span>
                            </h2>
                        </div>

                        <p className='text-gray-400 text-sm md:text-lg leading-relaxed max-w-xl mt-6 border-l-2 border-orange-500/30 pl-4 md:border-none md:pl-0'>
                            Bali Blockchain Weeks is a multi-sector initiative to propel Indonesia's Digital 2045 vision into reality Based on four main pillars literacy, workforce development, startup innovation, and policy alignment. We unites a diverse ecosystem including students, tech founders, enterprises, and regulators under a single strategic roadmap
                        </p>

                    </div>

                    <div className='relative flex items-center justify-center'>

                        <div className="absolute w-[120%] h-[120%] bg-orange-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />

                        <div className='relative z-10 w-full aspect-video lg:aspect-auto lg:h-[450px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-orange-500/10 group'>
                            <img
                                src="/gallery/img5.jpg"
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
                            {aboutFeatures.map((feature, index) => (
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