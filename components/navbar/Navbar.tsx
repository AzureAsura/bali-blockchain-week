import Link from "next/link"
import NavToggle from "./NavToggle"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className='w-full fixed px-[1rem] md:px-0 max-w-6xl z-50 py-0 md:py-4 left-1/2 -translate-x-1/2 top-6 md:top-3'>
      <div className='md:max-w-3xl xl:max-w-7xl mx-auto'>
        <div className='flex justify-between items-center px-6 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'>

          <div className='flex items-center'>
            <Link href={'/'}>
              <Image src={'/logo.png'} alt="logo" width={32} height={32} priority />
            </Link>
          </div>

          <NavToggle />



        </div>
      </div>
    </nav>
  )
}

export default Navbar