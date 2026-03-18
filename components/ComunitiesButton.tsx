'use client'

import React from 'react'
import { Link as ScrollLink } from 'react-scroll'


const ComunitiesButton = () => {
    return (


        <ScrollLink
            to={'Gallery'}
            smooth={true}
            duration={900}
            offset={-80}
            className="px-8 py-4 bg-orange-900/40 hover:bg-orange-800/60 backdrop-blur-md border border-white/20 font-bold rounded-2xl transition-all w-full sm:w-auto text-sm md:text-base cursor-pointer text-center"
        >
            Communities
        </ScrollLink>
    )
}

// keren banget
export default ComunitiesButton