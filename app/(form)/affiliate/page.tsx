import AffiliateForm from '@/components/form/AffiliateForm'
import React from 'react'

const page = () => {
    return (
        <div className="min-h-screen bg-black text-white relative">
            <div className="w-full h-[200px] md:h-[400px] overflow-hidden absolute">
                <img
                    src="gallery/img1.webp"
                    alt="Image"
                    className="object-cover w-full h-full opacity-70 relative"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black z-10" />
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-20">
                <div className="h-[150px]" />

                <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-2xl shadow-orange-500/5 relative z-20">
                    <div className="mb-10 space-y-4">
                        <h1 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9] uppercase">
                            Become an Affiliate
                        </h1>

                        <p className="text-zinc-400 text-sm md:text-base max-w-lg leading-relaxed">
                            Earn rewards and grow your influence by promoting the latest Web3 insights and updates in Asia
                        </p>

                        <div className="w-full h-px bg-gradient-to-r from-zinc-800 via-zinc-700 to-transparent mt-8" />
                    </div>

                    <AffiliateForm />
                </div>
            </div>


        </div>
    )
}

export default page