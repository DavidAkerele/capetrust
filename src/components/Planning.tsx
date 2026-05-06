import Image from "next/image";
import { BookOpen, Headphones, ArrowRight } from "lucide-react";

export default function Planning() {
  return (
    <section id="planning" className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Planning Ahead
        </span>
      </div>

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary)] font-bold mb-10 leading-tight">
        Peace of mind for<br/>you and your family.
      </h2>

      <p className="text-gray-600 font-light text-lg leading-relaxed mb-10">
        Pre-planning your arrangements relieves your family of difficult decisions during an emotional time. Secure your legacy today with our compassionate advisors.
      </p>

      <div className="relative w-full h-[300px] md:h-[400px] mb-14 rounded-2xl overflow-hidden shadow-2xl group">
        <Image src="/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg" alt="Planning Ahead" fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
      </div>

      <div className="space-y-6">
        <div className="group cursor-pointer p-8 bg-white border border-[var(--color-primary)]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-[var(--color-primary)]/5 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors">
              <BookOpen className="w-6 h-6 text-[var(--color-primary)] group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-[var(--color-primary)] mb-2">Free Planning Guide</h3>
              <p className="text-gray-500 font-light text-sm mb-4 leading-relaxed">Download our comprehensive checklist to understand your options and begin the process.</p>
              <span className="text-[var(--color-secondary)] font-bold text-xs uppercase tracking-widest flex items-center">
                Download PDF
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>

        <div className="group cursor-pointer p-8 bg-[var(--color-primary)] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-secondary)] transition-colors">
              <Headphones className="w-6 h-6 text-white group-hover:text-white transition-colors" />
            </div>
            <div>
              <h3 className="font-bold text-xl text-white mb-2">Consult an Advisor</h3>
              <p className="text-white/70 font-light text-sm mb-4 leading-relaxed">Speak confidentially with our pre-planning specialists to create a tailored arrangement.</p>
              <span className="text-[var(--color-secondary)] font-bold text-xs uppercase tracking-widest flex items-center">
                Schedule Call
                <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
