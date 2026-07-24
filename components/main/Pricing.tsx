import Link from 'next/link'
import { Check } from 'lucide-react'

interface TicketTier {
  id: string
  title: string
  priceDisplay: string
  priceUSD: number
  caption: string
  isActive: boolean
  isFeatured: boolean
  megatixUrl: string
  features: string[]
}

interface TicketsConfig {
  megatixUrl: string
  tiers: TicketTier[]
}

async function getTickets(): Promise<TicketsConfig> {
  try {
    const API = process.env.ADMIN_API_URL || 'http://localhost:3001'
    const res = await fetch(`${API}/api/tickets`, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error('Failed')
    return await res.json()
  } catch {
    return {
      megatixUrl: 'https://megatix.co.id',
      tiers: [
        {
          id: 'general',
          title: 'General Pass',
          priceDisplay: 'IDR 500K',
          priceUSD: 50,
          caption: 'Entry level access',
          isActive: true,
          isFeatured: false,
          megatixUrl: 'https://megatix.co.id',
          features: ['Entrance ticket', 'F & B', 'Conference zone', 'Exhibition zone']
        },
        {
          id: 'vip',
          title: 'VIP Pass',
          priceDisplay: 'IDR 5M',
          priceUSD: 500,
          caption: 'Maximum exclusivity',
          isActive: true,
          isFeatured: true,
          megatixUrl: 'https://megatix.co.id',
          features: ['Fast lane registration', 'All General Pass benefits', 'VIP Zone access', 'VIP Networking session', 'Dedicated concierge']
        }
      ]
    }
  }
}

const Pricing = async () => {
  const { megatixUrl, tiers } = await getTickets()
  const activeTiers = tiers.filter(t => t.isActive)

  return (
    <section className='py-16 md:py-24 bg-black overflow-hidden' id='Pricing'>
      <div className="max-w-6xl mx-auto px-4">

        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <div className="text-xs font-bold uppercase tracking-[0.5em] text-orange-500 mb-4">
            Official Ticketing Partner
          </div>
          <h2 className='text-5xl md:text-6xl lg:text-7xl font-black text-white text-center uppercase tracking-tighter leading-none'>
            Get your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)]">
              tickets now
            </span>
          </h2>
          <p className="text-zinc-500 text-sm font-medium mt-4 text-center max-w-md">
            Secure your spot at Southeast Asia&apos;s premier Web3 & Blockchain event.
            All tickets available via <span className="text-orange-400 font-bold">Megatix</span>.
          </p>
        </div>

        {/* Ticket Cards */}
        <div className='flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-6 xl:gap-8'>
          {activeTiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative w-[90%] max-w-[360px] sm:w-full lg:w-auto lg:flex-1 lg:max-w-[360px] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col ${
                tier.isFeatured
                  ? 'border-2 border-orange-500 shadow-[0_0_60px_rgba(249,115,22,0.2)] scale-105 z-10'
                  : 'border border-white/10 hover:border-orange-500/30'
              }`}
            >
              {/* Background */}
              <div className={`absolute inset-0 ${tier.isFeatured ? 'bg-gradient-to-b from-zinc-950 to-black' : 'bg-zinc-950/80'}`} />

              {/* Featured glow */}
              {tier.isFeatured && (
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
              )}

              {/* Featured badge */}
              {tier.isFeatured && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="px-3 py-1 bg-orange-500 text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className='relative z-10 flex flex-col h-full p-7 pt-24'>
                {/* Logo */}
                <div className='absolute left-1/2 -translate-x-1/2 -top-6 z-20'>
                  <div className={`w-[100px] h-[100px] rounded-full bg-white p-3 shadow-2xl flex items-center justify-center ${
                    tier.isFeatured ? 'ring-2 ring-orange-500 ring-offset-2 ring-offset-black' : ''
                  }`}>
                    <img
                      src='/logo.png'
                      alt={tier.title}
                      className='object-contain w-full h-full'
                    />
                  </div>
                </div>

                {/* Tier badge */}
                <div className='flex justify-center mb-4'>
                  <div className={`text-[11px] font-black tracking-[0.3em] rounded-full px-4 py-1.5 uppercase border ${
                    tier.isFeatured
                      ? 'border-orange-500 text-orange-500 bg-orange-500/10'
                      : 'border-zinc-700 text-zinc-400'
                  }`}>
                    {tier.title}
                  </div>
                </div>

                {/* Price */}
                <div className='flex items-baseline justify-center gap-2 mb-1'>
                  <div className={`font-black text-5xl md:text-6xl leading-none ${
                    tier.isFeatured ? 'text-white' : 'text-white'
                  }`}>
                    {tier.priceDisplay}
                  </div>
                </div>

                {/* Caption */}
                <div className='text-center text-sm text-zinc-500 font-medium mb-8'>
                  {tier.caption}
                </div>

                {/* Features */}
                <ul className='space-y-3 mb-8 flex-1'>
                  {tier.features.map((feature, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                        tier.isFeatured ? 'bg-orange-500' : 'bg-zinc-800'
                      }`}>
                        <Check className='w-3 h-3 text-white' />
                      </div>
                      <span className='text-sm font-semibold text-zinc-300 leading-snug'>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href={tier.megatixUrl || megatixUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                  className={`group relative w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-black uppercase tracking-tight text-sm transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
                    tier.isFeatured
                      ? 'bg-orange-500 hover:bg-orange-600 text-black shadow-[0_4px_30px_rgba(249,115,22,0.4)]'
                      : 'bg-zinc-900 hover:bg-zinc-800 text-white border border-white/10 hover:border-orange-500/30'
                  }`}
                >
                  <span className="relative z-10">Beli Tiket via Megatix</span>
                  <span className="relative z-10 text-lg">→</span>
                  {tier.isFeatured && (
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </Link>

                {/* Megatix label */}
                <div className="flex items-center justify-center gap-1.5 mt-3">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-[10px] text-zinc-600 font-medium uppercase tracking-widest">
                    Powered by Megatix
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-12">
          <p className="text-zinc-600 text-xs font-medium">
            Butuh bantuan? Hubungi kami di{' '}
            <a href="mailto:info@baliblockchainweeks.com" className="text-orange-500 hover:underline">
              info@baliblockchainweeks.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Pricing
