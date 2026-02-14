'use client'

import React, { useState } from 'react'
import { X, Menu, Wallet } from 'lucide-react'
import Link from 'next/link'
import FullscreenNav from './FullscreenNav'

const NavToggle = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 text-white outline-none"
      >
        <span className="text-[10px] font-bold tracking-[0.2em] uppercase not-italic opacity-70">Menu</span>
        <Menu size={20} />
      </button>

        
      <FullscreenNav isOpen={isOpen} setIsOpen={setIsOpen}/>

    </>
  )
}

export default NavToggle