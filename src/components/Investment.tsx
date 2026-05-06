import { ShieldCheck, TrendingUp, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import investmentImg1 from "../../public/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg";
import investmentImg2 from "../../public/images/annie-spratt-38yKQLL11d8-unsplash.jpg";

export default function Investment() {
  return (
    <section id="investment" className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--color-primary)] relative overflow-hidden">
      
      {/* Background radial glow for premium feel */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-20">
        
        {/* Left: Text & Value Prop */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-[1px] bg-[var(--color-secondary)]"></div>
            <span className="text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-[0.25em]">
              Security & Wealth
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-[3.25rem] text-white font-bold mb-6 leading-tight italic">
            An investment in <br/> peace of mind.
          </h2>

          <p className="text-white/70 font-light text-lg leading-relaxed mb-12 max-w-xl">
            Pre-planning your arrangements is not just an emotional decision; it&apos;s a sound financial strategy. Protect your family from inflation and secure your legacy.
          </p>

          <div className="space-y-10">
            <div className="flex items-start group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-[var(--color-secondary)] transition-all duration-500 transform group-hover:scale-110">
                <TrendingUp className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 italic">Hedge Against Inflation</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm max-w-md">Secure your arrangements at today&apos;s rates, protecting your family from rising costs.</p>
              </div>
            </div>

            <div className="flex items-start group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mr-6 group-hover:bg-[var(--color-secondary)] transition-all duration-500 transform group-hover:scale-110">
                <ShieldCheck className="w-5 h-5 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 italic">Asset Protection</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm max-w-md">Safeguard your estate, ensuring your final wishes are funded without touching critical assets.</p>
              </div>
            </div>
          </div>

          <Link href="/investment" className="inline-flex items-center justify-center bg-[var(--color-secondary)] hover:bg-white text-white hover:text-[var(--color-primary)] px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[9px] mt-12 transition-all duration-300 shadow-xl hover:scale-105">
            Explore Planning Options
            <ArrowRight className="w-4 h-4 ml-3" />
          </Link>
        </div>

        {/* Right: Offset Image Grid */}
        <div className="w-full lg:w-1/2 relative h-[700px] hidden lg:block">
          <div className="absolute top-10 right-0 w-[85%] h-[450px] rounded-[3rem] overflow-hidden shadow-2xl z-10 border border-white/10 group">
            <Image 
              src={investmentImg1} 
              alt="Investment in Peace of Mind" 
              fill 
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
            />
          </div>
          <div className="absolute bottom-10 left-0 w-[65%] h-[350px] rounded-[3rem] overflow-hidden shadow-2xl z-20 border border-white/10 group">
            <Image 
              src={investmentImg2} 
              alt="Asset Protection" 
              fill 
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 30vw"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" 
            />
          </div>
          <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] z-0"></div>
        </div>

      </div>
    </section>
  );
}
