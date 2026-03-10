import React from 'react'

const speakersData = Array.from({ length: 8 }, (_, i) => ({
    name: `Speaker ${i + 1}`,
    role: "Co-Founder & CEO",
    image: `https://wojgrioccmbywgtruwfl.supabase.co/storage/v1/object/public/Media%20Folders/Coinfest%20Asia%202026/homepage-speakers/Speakers/Ben%20Zhou%201.png`
}));

const Speakers = () => {
    return (
        <div className='py-20' id='Speakers'>
            <div className='container'>
                <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                    upcoming <span className='text-orange-500'>SPEAKERS</span>
                </h2>



                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {speakersData.map((speaker, index) => (
                        <div key={index} className='relative group overflow-hidden rounded-3xl border bg-[#111] aspect-[3/4] transition-all duration-500 border-orange-500/50'>

                            <div className='absolute inset-0 z-0 flex items-end justify-center'>
                                <img
                                    src={speaker.image}
                                    className='w-full h-[80%] object-contain object-bottom group-hover:scale-105 transition-all duration-700  grayscale brightness-0 contrast-125 '
                                    alt={speaker.name}
                                />
                            </div>

                            <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                                <div className="rounded-full bg-white absolute w-40 h-40 blur-[80px] opacity-20 "/>
                            </div>

                            <div className='relative z-20 flex flex-col items-center pt-8 px-4 text-center'>
                                <h3 className='text-white font-bold text-2xl drop-shadow-md'>
                                    {speaker.name}
                                </h3>
                                <p className='text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em]'>
                                    {speaker.role}
                                </p>
                            </div>


                            <div className='absolute inset-0 z-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />


                            <div className='absolute bottom-0 left-0 w-full h-[4px] z-40 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-100 transition-transform duration-500 ease-out' />

                        </div>
                    ))}
                </div>



            </div>
        </div>



    )
}

export default Speakers


