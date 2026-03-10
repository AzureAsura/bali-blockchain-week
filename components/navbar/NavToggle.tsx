'use client'

import Link from 'next/link'


import { Link as ScrollLink } from 'react-scroll'
import { X, Menu, Wallet, Contact } from 'lucide-react'
import { useNavStore } from '@/store/useNavStore'

export const navLink = [
  { name: 'Speakers', target: 'Speakers' },
  { name: 'About', target: 'About' },
  { name: 'Gallery', target: 'Gallery' },
  { name: 'Partners', target: 'Partners' },
  { name: 'FAQ', target: 'FAQ' },
]

const NavToggle = () => {
  const openNav = useNavStore((state) => state.openNav)


  return (
    <>
      <div className='hidden md:flex items-center gap-8'>
        <ul className='flex gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300'>
          {navLink.map((item) => (
            <ScrollLink
              to={item.target}
              smooth={true}
              duration={900}
              offset={-80}
              key={item.name} 
            >
              <li className='hover:text-orange-400 cursor-pointer transition-colors'>{item.name}</li>
            </ScrollLink>
          ))}
        </ul>

        <Link
          href={'https://x.com/BaliBlockchainW'}
          target='_blank'
          className='bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold 
                             px-5 py-2.5 rounded-xl flex items-center gap-2 
                             transition-all duration-300 active:scale-95 shadow-lg shadow-orange-500/20'
        >
          {/* <Wallet size={16} /> GET TICKETS */}
          <Contact size={16} /> CONTACT US
        </Link>
      </div>

      <div className='md:hidden text-white italic text-xs'>
        <button
          onClick={openNav}
          className="flex items-center gap-2 text-white outline-none"
        >
          <span className="text-[10px] font-bold tracking-[0.2em] uppercase not-italic opacity-70">Menu</span>
          <Menu size={20} />
        </button>
      </div>


    </>
  )
}

export default NavToggle