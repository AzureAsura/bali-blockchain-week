import Image from 'next/image'
import SpeakerSlider from '../SpeakerSlider'

interface Speaker {
  id: string
  name: string
  role: string
  image: string
  company: string
  twitter: string
  order: number
}

async function getSpeakers(): Promise<Speaker[]> {
  try {
    const API = process.env.ADMIN_API_URL || 'http://localhost:3001'
    const res = await fetch(`${API}/api/speakers`, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error('Failed to fetch')
    return await res.json()
  } catch {
    // Fallback to placeholder
    return [{
      id: '1',
      name: 'Coming Soon',
      role: 'Web3 & Crypto Speaker',
      image: '/speakers/quest.png',
      company: '',
      twitter: '',
      order: 1
    }]
  }
}

const Speakers = async () => {
  const speakersData = await getSpeakers()

  return (
    <div className='py-10 md:py-20' id='Speakers'>
      <div className='container mx-auto px-4'>
        <h2 className='text-[33px] md:text-5xl font-black text-white mb-12 leading-8 uppercase tracking-tighter text-center'>
          upcoming <span className='text-orange-500'>SPEAKERS</span>
        </h2>

        <div className='flex flex-wrap justify-center gap-6 md:gap-8 hidden md:flex'>
          {speakersData.map((speaker, index) => (
            <div
              key={speaker.id}
              className='flex flex-col gap-3 group cursor-pointer transition-all duration-300 w-full md:w-[calc(50%-16px)] lg:w-[calc(33.333%-22px)] max-w-[350px]'
            >
              <div className='relative overflow-hidden rounded-xl border-[1.5px] border-orange-500 bg-white aspect-[4/5] flex items-center justify-center'>
                <Image
                  src={speaker.image}
                  width={400}
                  height={450}
                  className='w-full h-full object-cover transition-transform duration-500'
                  alt={speaker.name}
                  priority={index < 4}
                />
              </div>

              <div className='rounded-xl bg-orange-500 px-4 py-4 text-left shadow-md min-h-[110px] flex flex-col justify-center'>
                <h3 className='text-white font-bold text-lg lg:text-xl leading-tight mb-1 tracking-tight uppercase'>
                  {speaker.name}
                </h3>
                <p className='text-white/90 text-xs md:text-sm font-medium leading-snug line-clamp-2'>
                  {speaker.role}
                </p>
                {speaker.company && (
                  <p className='text-white/70 text-xs font-medium mt-1'>{speaker.company}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <SpeakerSlider />
      </div>
    </div>
  )
}

export default Speakers
