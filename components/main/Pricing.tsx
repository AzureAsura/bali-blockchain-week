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
                    className='relative z-[2] -mt-12 flex flex-col lg:flex-row items-center lg:items-start xl:items-stretch justify-center gap-5 xl:gap-8 overflow-auto py-20 xl:overflow-visible xl:pt-0 '
                    style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
                >

                    {/* <div className='relative border-2 p-7 min-w-80 rounded-3xl xl:min-w-0 xl:w-[calc(33.33%+2px)] transition-all duration-300 bg-zinc-950 border-zinc-glow z-[3] xl:scale-105 shadow-2xl flex flex-col'>
                ... (kode lama yang di-comment tidak saya ubah)
            </div> */}

                    {/* PERBAIKAN 2: Mengganti 'min-w-80' menjadi 'w-[90%] max-w-[320px] sm:w-full sm:max-w-none sm:min-w-80' agar tidak overflow di mobile tapi tetap sama persis di desktop */}
                    <div className='relative border-2 p-7 w-[90%] max-w-[320px] sm:w-full sm:max-w-none sm:min-w-80 rounded-3xl xl:min-w-0 xl:w-[calc(33.33%+2px)] transition-all duration-300 g7 border-orange-500 z-[3] scale-105 shadow-2xl flex flex-col'>

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
                                    FREE
                                </div>
                            </div>
                        </div>

                        <div className='text-[22px] leading-[36px] font-medium relative z-[2] mb-10  text-center text-p4'>
                            Maximum exclusivity
                        </div>

                        <ul className='mx-auto space-y-4 xl:px-7 flex-1'>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                {/* Typo diperbaiki: Netowrking -> Networking */}
                                <p className='flex-1'>Networking</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Merch</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Doorprize Ticket</p>
                            </li>
                            <li className='flex relative items-center gap-5 font-semibold leading-5'>
                                <img src='/check.png' alt='check' className='size-10 object-contain' />
                                <p className='flex-1'>Knowledge</p>
                            </li>
                        </ul>

                        <div className='mt-10 flex w-full justify-center'>
                            <Link href={'https://luma.com/cj17xgai'} className='px-8 py-4 text-lg bg-orange-500 rounded-2xl font-black uppercase tracking-tight hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
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

