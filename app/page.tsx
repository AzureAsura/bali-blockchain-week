import Navbar from '@/components/navbar/Navbar'
import Hero from '@/components/main/Hero'
import CountUpSection from '@/components/main/CountUpSection'

import { ReactLenis } from '@/lib/lenis'
import Sponsor from '@/components/main/Sponsor'
import Speakers from '@/components/main/Speakers'
import About from '@/components/main/About'
import Gallery from '@/components/main/Gallery'
import Faq from '@/components/main/Faq'
import GetInvolved from '@/components/main/GetInvolved'
import Pricing from '@/components/main/Pricing'
import Footer from '@/components/Footer'
import FullscreenNav from '@/components/navbar/FullscreenNav'
import Preloader from '@/components/Proloader'



const page = () => {


  return (
    <ReactLenis root>

      <main className="bg-black min-h-screen">
        <Navbar />
        <FullscreenNav/>

        <Preloader/>

        <Hero />


        <div className="relative z-10 -mt-[100vh] bg-black rounded-t-[50px] shadow-[0_-50px_100px_rgba(0,0,0,1)] border-t border-white/5">
          <CountUpSection />
          <About/>
          <Speakers/>
          <Sponsor/>
          <GetInvolved/>
          <Gallery/>
          <Faq/>
          <Pricing/>
          <Footer/>
        </div>
      </main>



    </ReactLenis>
  )
}

export default page