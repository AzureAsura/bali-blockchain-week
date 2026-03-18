import Link from 'next/link'
import React from 'react'

const Pricing = () => {
    return (
        <section className='py-10' id='Pricing'>
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex flex-col items-center">
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-black text-white mb-16 lg:mb-36 text-center uppercase tracking-tighter'>
                        Get your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">
                            tickets now
                        </span>
                    </h1>
                </div>

                <div
                    className='relative z-[2] -mt-12 flex items-start gap-5 overflow-auto py-20 xl:gap-0 xl:overflow-visible xl:pt-0'
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >

                    <div className='relative border-2 p-7 min-w-80 rounded-3xl xl:min-w-0 xl:w-[calc(33.33%+2px)] transition-all duration-300 xl:rounded-br-none xl:rounded-tr-none xl:border-r-0 xl:mt-12 bg-zinc-950 border-zinc-600'>

                        <div className='absolute left-0 right-0 z-[2] flex items-center justify-center -top-6 xl:-top-11'>
                            <img
                                src='/logo.png'
                                alt='General Pass'
                                className='object-contain drop-shadow-2xl bg-white rounded-full p-3 size-[88px]'
                            />
                        </div>

                        <div className='flex flex-col items-center pt-12'>
                            <div className='text-[12px] font-bold tracking-[0.3em] rounded-[20px] relative z-[2] mx-auto mb-6 border-2 px-4 py-1.5 uppercase border-zinc-700 text-zinc-400'>
                                General Pass
                            </div>
                            <div className='flex relative z-[2] items-center justify-center'>
                                <div className='font-inter text-[72px] font-bold leading-[84px] text-zinc-200'>
                                    $ 50
                                </div>
                            </div>
                        </div>

                        <div className='text-[22px] leading-[36px] font-medium relative z-[2] mb-10 pb-9 text-center text-p4'>
                            Entry level access
                        </div>

                        <ul className='mx-auto space-y-4 xl:px-7'>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Entrance ticket</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>F & B</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Conference zone</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Exhibition zone</p>
                            </li>
                        </ul>

                        <div className='mt-10 flex w-full justify-center'>
                            <Link href={'#'} className='px-8 py-4 text-lg bg-orange-500 rounded-2xl font-black uppercase tracking-tight hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                                Buy Tickets
                            </Link>
                        </div>
                    </div>

                    <div className='relative border-2 p-7 min-w-80 rounded-3xl xl:min-w-0 xl:w-[calc(33.33%+2px)] transition-all duration-300 g7 border-orange-500 z-[3] scale-105 shadow-2xl'>

                        <div className='g4 absolute h-[330px] left-0 right-0 top-0 z-[1] rounded-tl-3xl rounded-tr-3xl opacity-40' />

                        <div className='absolute left-0 right-0 z-[2] flex items-center justify-center -top-6'>
                            <img
                                src='/logo.png'
                                alt='VIP Pass'
                                className='object-contain drop-shadow-2xl bg-white rounded-full p-3 size-[120px]'
                            />
                        </div>

                        <div className='flex flex-col items-center pt-24'>
                            <div className='text-[12px] font-bold tracking-[0.3em] rounded-[20px] relative z-[2] mx-auto mb-6 border-2 px-4 py-1.5 uppercase border-orange-500 text-orange-500'>
                                VIP Pass
                            </div>
                            <div className='flex relative z-[2] items-center justify-center'>
                                <div className='font-inter text-[72px] font-bold leading-[84px] text-white'>
                                    $ 500
                                </div>
                            </div>
                        </div>

                        <div className='text-[22px] leading-[36px] font-medium relative z-[2] mb-10 pb-9 text-center text-p4'>
                            Maximum exclusivity
                        </div>

                        <ul className='mx-auto space-y-4 xl:px-7'>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Fast lane registration</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>All benefit general pass</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>VIP ZONE</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>VIP Networking</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Dedicated concierge</p>
                            </li>
                        </ul>

                        <div className='mt-10 flex w-full justify-center'>
                            <Link href={'#'} className='px-8 py-4 text-lg bg-orange-500 rounded-2xl font-black uppercase tracking-tight hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                               Buy Tickets
                            </Link>
                        </div>
                    </div>


                    <div className='relative border-2 p-7 min-w-80 rounded-3xl xl:min-w-0 xl:w-[calc(33.33%+2px)] transition-all duration-300 xl:rounded-bl-none xl:rounded-tl-none xl:border-l-0 xl:mt-12 bg-zinc-950 border-zinc-600'>

                        <div className='absolute left-0 right-0 z-[2] flex items-center justify-center -top-6 xl:-top-11'>
                            <img
                                src='/logo.png'
                                alt='Bali Blockchain Week'
                                className='object-contain drop-shadow-2xl bg-white rounded-full p-3 size-[88px]'
                            />
                        </div>

                        <div className='flex flex-col items-center pt-12'>
                            <div className='text-[12px] font-bold tracking-[0.3em] rounded-[20px] relative z-[2] mx-auto mb-6 border-2 px-4 py-1.5 uppercase border-zinc-700 text-zinc-400'>
                                The Event
                            </div>
                            <div className='relative z-[2] text-center mb-2'>
                                <p className='text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-1'>Save the date</p>
                                <p className='text-white text-3xl font-black tracking-tight uppercase'>9 May 2026</p>
                            </div>
                        </div>

                        <div className='text-[16px] leading-[28px] font-medium relative z-[2] mb-8 pb-6 text-center text-zinc-400 border-b border-zinc-800'>
                            Bali Blockchain Weeks
                        </div>

                        <ul className='mx-auto space-y-4 xl:px-7'>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>300+ Attendees</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>10+ Speakers</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>50+ Countries</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>100+ Companies</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>1000+ Potential Leads</p>
                            </li>
                        </ul>

                        <div className='mt-10 flex w-full justify-center'>
                            <Link href={'#'} className='px-8 py-4 text-lg bg-orange-500 rounded-2xl font-black uppercase tracking-tight hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                                Buy Tickets
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Pricing