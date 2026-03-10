import FloatingLines from '@/components/FloatingLines'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import Link from 'next/link'
import ComunitiesButton from '../ComunitiesButton'

const Hero = () => {
    return (
        <div className='relative bg-black min-h-screen text-white overflow-hidden flex flex-col'>

            <div className="absolute inset-0 z-0 ">
                <FloatingLines
                    linesGradient={["#ff8800", "#ff0000", "#ff9500"]}
                    animationSpeed={1}
                    interactive={false}
                    bendRadius={5}
                    bendStrength={-0.5}
                    mouseDamping={0.05}
                    parallax={false}
                    parallaxStrength={0.2}
                />
            </div>


            <div className="absolute inset-0 z-10 backdrop-blur-xl bg-gradient-to-r from-black/80 via-black/40 to-transparent [mask-image:linear-gradient(to_right,black_0%,black_50%,transparent_100%)]">
            </div>

            <main className="relative z-10 min-h-screen flex flex-col justify-center w-full container lg:py-32">
                <div className="mb-4 md:mb-6">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-[8px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        Southeast Asia’s Leading Web3 & Crypto Event
                    </span>
                </div>

                <h1 className="text-[40px] sm:text-6xl md:text-8xl font-black md:font-bold leading-[0.95] tracking-tighter md:leading-none mb-4 md:mb-6 uppercase">
                    Bali <span className="text-orange-400">Blockchain</span> <br className="hidden sm:block" />
                    Weeks 2026
                </h1>

                <p className="max-w-xl text-[15px] sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 leading-relaxed opacity-80">
                    A national movement uniting builders, universities, policymakers, and investors to transform Bali into a global blockchain powerhouse
                </p>

                <div className="grid grid-cols-2 md:flex md:flex-row gap-3 md:gap-4 mb-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                        <div className="p-2 md:p-3 bg-yellow-500/20 rounded-xl">
                            <Calendar className="text-yellow-500 w-4 h-4 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Date</p>
                            <p className="text-sm md:text-lg font-semibold leading-tight">August, 2026</p>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 md:gap-4 p-3 md:p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10">
                        <div className="p-2 md:p-3 bg-yellow-500/20 rounded-xl">
                            <MapPin className="text-yellow-500 w-4 h-4 md:w-6 md:h-6" />
                        </div>
                        <div>
                            <p className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-400 font-bold">Location</p>
                            <p className="text-sm md:text-lg font-semibold leading-tight">Coming Soon...</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4">
                    <Link href={'https://x.com/BaliBlockchainW'} target='_blank' className="group flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-2xl transition-all shadow-lg shadow-orange-500/20 w-full sm:w-auto">
                        Subscribe
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <ComunitiesButton />
                </div>
            </main>

        </div>
    )
}

export default Hero