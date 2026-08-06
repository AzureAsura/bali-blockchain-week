import { Metadata } from 'next'
import Navbar from '@/components/navbar/Navbar'
import FullscreenNav from '@/components/navbar/FullscreenNav'
import Footer from '@/components/Footer'
import PartnerHero from '@/components/partner/PartnerHero'
import WhyMarketing from '@/components/partner/WhyMarketing'
import TakePart from '@/components/partner/TakePart'
import OurPartners from '@/components/partner/OurPartners'
import { ReactLenis } from '@/lib/lenis'

export const metadata: Metadata = {
    title: "Partner With Us",
    description: "Partner with Bali Blockchain Weeks — Southeast Asia's premier Web3 event. Become a media partner, community partner, or affiliate and connect your brand with 5,000+ industry leaders.",
    openGraph: {
        title: "Partner With Us | Bali Blockchain Weeks",
        description: "Join as a partner and amplify your brand at Southeast Asia's largest blockchain event.",
        url: "https://baliblockchainweeks.com/partner",
    },
}

const PartnerPage = () => {
    return (
        <ReactLenis root>
            <main className="bg-black min-h-screen">
                <Navbar />
                <FullscreenNav />

                <PartnerHero />

                <div className="relative z-10 bg-black">
                    <WhyMarketing />
                    <TakePart />
                    <OurPartners />
                    <Footer />
                </div>
            </main>
        </ReactLenis>
    )
}

export default PartnerPage
