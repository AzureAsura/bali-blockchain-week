import FloatingLines from '@/components/FloatingLines'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'

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

            <main className="relative z-10 min-h-screen flex flex-col justify-center w-full container">
                <div className="mb-4 md:mb-6">
                    <span className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                        The Premier Web3 Event in Asia
                    </span>
                </div>

                <h1 className="text-4xl md:text-8xl font-bold leading-none tracking-[-0.04em] mb-4 md:mb-6">
                    Bali <span className="text-orange-400">Blockchain</span> <br className="hidden md:block" />
                    Weeks 2026
                </h1>

                <p className="max-w-xl text-base md:text-xl text-gray-200 mb-8 md:mb-12 leading-relaxed opacity-80">
                    Join 5,000+ builders, investors, and visionaries in the heart of paradise
                    for a week of high-signal networking.
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

                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="group flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-2xl transition-all shadow-lg shadow-orange-500/20 w-full sm:w-auto">
                        Secure Your Spot
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button className="px-8 py-4 bg-orange-900/40 hover:bg-orange-800/60 backdrop-blur-md border border-white/20 font-bold rounded-2xl transition-all w-full sm:w-auto text-sm md:text-base">
                        View Agenda
                    </button>
                </div>
            </main>

        </div>
    )
}

export default Hero