import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqQuestion { id: string; q: string; a: string }
interface FaqCategory { id: string; category: string; questions: FaqQuestion[] }

async function getFaq(): Promise<FaqCategory[]> {
  try {
    const API = process.env.ADMIN_API_URL || 'http://localhost:3001'
    const res = await fetch(`${API}/api/faq`, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error('Failed')
    return await res.json()
  } catch {
    return []
  }
}

const Faq = async () => {
  const faqData = await getFaq()

  return (
    <section className="bg-black py-10 min-h-screen" id='FAQ'>
      <div className="container">

        <h2 className='text-4xl md:text-5xl font-black text-white mb-12 md:mb-20 uppercase tracking-tighter'>
          Frequently asked <span className='text-orange-500'>questions</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {faqData.map((section) => (
            <div key={section.id} className="contents">

              <div className="lg:col-span-4">
                <div className="sticky top-30 flex items-stretch gap-4">
                  <div className="w-[4px] bg-orange-500 rounded-full" />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-black text-white/90 leading-[0.9] uppercase tracking-tighter">
                      {section.category}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 mb-6">
                <Accordion type="single" collapsible className="w-full space-y-4 cursor-pointer">
                  {section.questions.map((item) => (
                    <AccordionItem
                      key={item.id}
                      value={item.id}
                      className="bg-zinc-900/70 border border-zinc-800 rounded-2xl px-6 transition-all duration-300 data-[state=open]:border-orange-500/50 data-[state=open]:bg-zinc-900 border-none mb-4 last:mb-0 shadow-sm cursor-pointer"
                    >
                      <AccordionTrigger className="text-white font-bold text-lg py-6 hover:no-underline hover:text-orange-500 transition-colors text-left cursor-pointer">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-zinc-400 text-base leading-relaxed pb-6">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq