import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from '@/constants'


const Faq = () => {
    return (
        <section className="bg-black py-10 min-h-screen" id='FAQ'>
            <div className="container">

                <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                    Frequently <span className='text-orange-500'>ask questions</span>

                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {faqData.map((section, idx) => (
                        <React.Fragment key={idx}>

                            <div className="lg:col-span-4">
                                <h3 className="sticky top-30 text-3xl font-black text-white mb-1 uppercase tracking-tighter">
                                    {section.category}
                                </h3>
                            </div>

                            <div className="lg:col-span-8 mb-6 lg:mb-16">
                                <Accordion type="single" collapsible className="w-full space-y-4 cursor-pointer">
                                    {section.questions.map((item, i) => (
                                        <AccordionItem
                                            key={i}
                                            value={`item-${idx}-${i}`}
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
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Faq