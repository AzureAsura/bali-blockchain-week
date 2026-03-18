import { aboutFeatures } from "@/constants"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const About = () => {
    return (
        <section className='relative py-10 bg-black overflow-hidden'>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-600/5 rounded-full blur-[120px] pointer-events-none z-0" />

            <div className='container relative z-10 flex flex-col items-center'>

                <div className='relative w-full rounded-2xl overflow-hidden border border-white/10 group shadow-2xl'>
                    <div className='aspect-video w-full'>
                        <img
                            src="/gallery/img5.webp"
                            alt="Victory Celebration"
                            className='w-full h-full object-cover'
                        />
                    </div>

                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 md:p-8'>
                        <h2 className=' text-[20px] md:text-[50px] font-black leading-none tracking-tight uppercase'>
                            Bali Blockchain Weeks <span className='text-orange-600'>2026</span>
                        </h2>
                    </div>
                </div>

                <div className='max-w-4xl mt-12 text-center px-4'>
                    <p className='text-gray-400 text-sm md:text-base leading-relaxed tracking-wide'>
                        Bali Blockchain Weeks is a multi-sector initiative to propel Indonesia's Digital 2045 vision into reality Based on four main pillars literacy, workforce development, startup innovation, and policy alignment. We unites a diverse ecosystem including students, tech founders, enterprises, and regulators under a single strategic roadmap
                    </p>
                </div>

                <div className='w-full mt-10 pt-8 md:mt-16 md:pt-12 border-t border-white/5'>
                    <Carousel
                        opts={{
                            align: "start",
                            loop: false,
                        }}
                        className="w-full"
                    >
                        <CarouselContent className="-ml-4">
                            {aboutFeatures.map((feature, index) => (
                                <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/3">
                                    <div className='relative group p-6 rounded-2xl border border-gray-600 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 h-full'>

                                        <div className='absolute -inset-px bg-gradient-to-br from-white/10 to-transparent  rounded-2xl transition-opacity duration-500' />

                                        <div className='relative z-10'>
                                            <h4 className='font-black text-xl md:text-2xl text-white uppercase tracking-tighter leading-tight mb-3'>
                                                {feature.title}
                                            </h4>

                                            <p className='text-sm text-gray-500 leading-relaxed font-medium tracking-tight'>
                                                {feature.desc}
                                            </p>
                                        </div>
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