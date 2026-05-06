"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What is the difference between a vault and a traditional grave?",
    answer: "A vault is a lined and sealed outer receptacle that houses the casket. It protects the casket from the weight of the earth and heavy maintenance equipment, whereas a traditional grave involves burying the casket directly in the soil."
  },
  {
    question: "Can I pre-purchase a family mausoleum?",
    answer: "Yes, pre-purchasing a mausoleum is an excellent way to secure your family's legacy. Our advisors can help you choose the design, location, and handle all financial structuring in advance."
  },
  {
    question: "Do you accommodate specific cultural traditions?",
    answer: "Absolutely. We are deeply rooted in Nigerian heritage and have extensive experience organizing services that respect and celebrate specific cultural, religious, and tribal customs."
  },
  {
    question: "Are payment plans available for your products?",
    answer: "Yes, we offer flexible, structured payment plans specifically designed for pre-planning investments, ensuring you can lock in today's prices without immediate financial strain."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 md:px-12 lg:px-24 bg-background border-b border-primary/10">
      <div className="w-full mx-auto space-y-16">
        <div className="space-y-4">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
            Common Questions
          </span>
          <h2 className="font-serif text-4xl md:text-7xl text-primary font-medium leading-tight italic">
            Frequently Asked <br/> Questions.
          </h2>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border-b border-primary/10 overflow-hidden transition-all duration-500 ${openIndex === index ? 'pb-10' : 'pb-6'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
              >
                <h3 className={`font-serif text-2xl md:text-4xl transition-all duration-500 italic ${openIndex === index ? 'text-secondary font-bold' : 'text-primary font-medium group-hover:text-secondary/70'}`}>
                  {faq.question}
                </h3>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ml-8 transition-all duration-500 ${openIndex === index ? 'bg-secondary text-white rotate-180' : 'bg-primary/5 text-primary group-hover:bg-primary/10'}`}>
                  {openIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="text-primary/80 font-light leading-relaxed text-xl max-w-4xl">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
