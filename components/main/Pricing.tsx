import React from 'react'
import { Element } from 'react-scroll'
import { plans } from '@/constants'
import clsx from 'clsx'
import Link from 'next/link'



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
                    {plans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={clsx(
                                'relative border-2 p-7 min-w-80 rounded-3xl xl:min-w-0 xl:w-[calc(33.33%+2px)] transition-all duration-300',

                                index === 0 && 'xl:rounded-br-none xl:rounded-tr-none xl:border-r-0 xl:mt-12',

                                index === plans.length - 1 && 'xl:rounded-bl-none xl:rounded-tl-none xl:border-l-0 xl:mt-12',

                                index === 1
                                    ? 'g7 border-orange-500 z-[3] scale-105 shadow-2xl'
                                    : 'bg-zinc-950 border-zinc-600'
                            )}
                        >
                            {index === 1 && (
                                <div className='g4 absolute h-[330px] left-0 right-0 top-0 z-[1] rounded-tl-3xl rounded-tr-3xl opacity-40' />
                            )}

                            <div className={clsx(
                                'absolute left-0 right-0 z-[2] flex items-center justify-center',
                                index === 1 ? '-top-6' : '-top-6 xl:-top-11'
                            )}>
                                <img
                                    src={plan.logo}
                                    alt={plan.title}
                                    className={clsx('object-contain drop-shadow-2xl bg-white rounded-full p-3', index === 1 ? 'size-[120px]' : 'size-[88px]')}
                                />
                            </div>

                            <div className={clsx('flex flex-col items-center', index === 1 ? 'pt-24' : 'pt-12')}>
                                <div className={clsx(
                                    'text-[12px] font-bold tracking-[0.3em] rounded-[20px] relative z-[2] mx-auto mb-6 border-2 px-4 py-1.5 uppercase',
                                    index === 1 ? 'border-orange-500 text-orange-500' : 'border-zinc-700 text-zinc-400'
                                )}>
                                    {plan.title}
                                </div>

                                <div className='flex relative z-[2] items-center justify-center'>
                                    <div className={clsx(
                                        'font-inter text-[72px] font-bold leading-[84px]',
                                        index === 1 ? 'text-white' : 'text-zinc-200'
                                    )}>
                                        $ ??
                                    </div>
                                </div>
                            </div>

                            <div className={clsx(
                                'text-[22px] leading-[36px] font-medium relative z-[2] mb-10 pb-9 text-center text-p4',
                                // index === 1 && 'border-b border-b-s2'
                            )}>
                                {plan.caption}
                            </div>

                            <ul className='mx-auto space-y-4 xl:px-7'>
                                {plan.features.map((feature) => (
                                    <li key={feature} className='flex relative items-center gap-5 font-semibold leading-5' >
                                        <img src='/check.png' alt='check' className='size-10 object-contain' />
                                        <p className='flex-1'>{feature}</p>
                                    </li>
                                ))}
                            </ul>

                            <div className='mt-10 flex w-full justify-center'>
                                <button className='px-8 py-4 text-lg bg-orange-500 rounded-2xl font-black uppercase tracking-tight hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 cursor-pointer'>
                                    Coming Soon
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default Pricing