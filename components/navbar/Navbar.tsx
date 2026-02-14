
import Link from 'next/link'
import { Wallet, Menu } from 'lucide-react'
import NavToggle from './NavToggle'

const Navbar = () => {
  return (
    <nav className='w-full fixed px-[1rem] md:px-0 max-w-6xl z-50 py-0 md:py-4 left-1/2 -translate-x-1/2 top-2 md:top-0'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'>

          <div className='flex items-center'>
            <img src="/vercel.svg" alt="logo" className='w-8' />
          </div>

          <div className='hidden md:flex items-center gap-8'>
            <ul className='flex gap-6 text-[11px] font-bold tracking-[0.2em] uppercase text-gray-300'>
              <li className='hover:text-orange-400 cursor-pointer transition-colors'>About</li>
              <li className='hover:text-orange-400 cursor-pointer transition-colors'>Speaker</li>
              <li className='hover:text-orange-400 cursor-pointer transition-colors'>Partners</li>
              <li className='hover:text-orange-400 cursor-pointer transition-colors'>Gallery</li>
              <li className='hover:text-orange-400 cursor-pointer transition-colors'>FAQ</li>
            </ul>

            <Link
              href={'/'}
              className='bg-orange-500 hover:bg-orange-600 text-black text-xs font-bold 
                             px-5 py-2.5 rounded-xl flex items-center gap-2 
                             transition-all duration-300 active:scale-95 shadow-lg shadow-orange-500/20'
            >
              <Wallet size={16} /> GET TICKETS
            </Link>
          </div>

          <div className='md:hidden text-white italic text-xs'>
            <NavToggle />
          </div>

        </div>
      </div>
    </nav>
  )
}

export default Navbar