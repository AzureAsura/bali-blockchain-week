import Hero from '@/components/main/Hero'
import Speakers from '@/components/main/Speakers'
import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import FloatingLines from '@/components/FloatingLines'
import About from '@/components/main/About'
import Gallery from '@/components/main/Gallery'
import Sponsor from '@/components/main/Sponsor'

const page = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Speakers />
      <About/>
      <Gallery/>
      <Sponsor/>
    </div>
  )
}

export default page