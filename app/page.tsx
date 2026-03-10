import Hero from '@/components/main/Hero'
import Speakers from '@/components/main/Speakers'
import Navbar from '@/components/navbar/Navbar'
import About from '@/components/main/About'
import Gallery from '@/components/main/Gallery'
import Sponsor from '@/components/main/Sponsor'
import Footer from '@/components/Footer'
import { ReactLenis } from '@/lib/lenis'
import FullscreenNav from '@/components/navbar/FullscreenNav'
import GetInvolved from '@/components/main/GetInvolved'
import Faq from '@/components/main/Faq'


const page = () => {


  return (
    <ReactLenis root>

      <Navbar />
      <FullscreenNav/>
      <Hero />
      <Speakers />
      <About/>
      <Gallery/>
      <Sponsor/>
      <GetInvolved/>
      <Faq/>
      <Footer/>

    </ReactLenis>
  )
}

export default page