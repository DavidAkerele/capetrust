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
    <section id="faq" className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Common Questions
        </span>
      </div>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] font-bold mb-12 leading-tight italic">
        Frequently Asked <br/> Questions.
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-[2rem] overflow-hidden transition-all duration-500 ${openIndex === index ? 'bg-white border-blue-500/20 shadow-2xl' : 'bg-transparent border-[var(--color-primary)]/10 hover:border-[var(--color-primary)]/30'}`}
          >
            <button 
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
            >
              <h3 className={`font-serif text-xl md:text-2xl transition-all duration-500 italic ${openIndex === index ? 'text-[var(--color-secondary)] font-bold' : 'text-[var(--color-primary)] font-medium'}`}>
                {faq.question}
              </h3>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-500 ${openIndex === index ? 'bg-[var(--color-secondary)] text-white rotate-180' : 'bg-[var(--color-primary)]/5 text-[var(--color-primary)]'}`}>
                {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="p-6 md:p-8 pt-0 text-gray-600 font-light leading-relaxed text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
