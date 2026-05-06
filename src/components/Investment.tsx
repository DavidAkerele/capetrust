import { ShieldCheck, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function Investment() {
  return (
    <section id="investment" className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--color-primary)] relative overflow-hidden">
      
      {/* Background radial glow for premium feel */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent z-0"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16">
        
        {/* Left: Text & Value Prop */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center space-x-4 mb-10">
            <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
            <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
              Security & Wealth
            </span>
          </div>

          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-8 leading-tight">
            An investment in <br/> peace of mind.
          </h2>

          <p className="text-white/70 font-light text-lg leading-relaxed mb-14 max-w-xl">
            Pre-planning your arrangements is not just an emotional decision; it's a sound financial strategy. By locking in today's prices, you protect your family from inflation and secure your legacy without leaving a financial burden.
          </p>

          <div className="space-y-10">
            <div className="flex items-start group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-6 group-hover:bg-[var(--color-secondary)] transition-colors duration-500">
                <TrendingUp className="w-6 h-6 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hedge Against Inflation</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base max-w-md">Secure your arrangements at today's rates, protecting your family from the inevitable rising costs of funeral services over time.</p>
              </div>
            </div>

            <div className="flex items-start group cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center shrink-0 mr-6 group-hover:bg-[var(--color-secondary)] transition-colors duration-500">
                <ShieldCheck className="w-6 h-6 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Asset Protection</h3>
                <p className="text-white/60 font-light leading-relaxed text-sm md:text-base max-w-md">Structured pre-planning allows you to safeguard your estate, ensuring your final wishes are funded without touching critical family assets.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Offset Image Grid */}
        <div className="w-full lg:w-1/2 relative h-[600px] hidden lg:block">
          <div className="absolute top-10 right-0 w-[80%] h-[400px] rounded-2xl overflow-hidden shadow-2xl z-10 border border-white/10 group">
            <Image src="/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg" alt="Investment in Peace of Mind" fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
          </div>
          <div className="absolute bottom-10 left-0 w-[60%] h-[300px] rounded-2xl overflow-hidden shadow-2xl z-20 border border-white/10 group">
            <Image src="/images/annie-spratt-38yKQLL11d8-unsplash.jpg" alt="Asset Protection" fill className="object-cover transition-transform duration-[2000ms] group-hover:scale-105" />
          </div>
          {/* Subtle gold accent element */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-[var(--color-secondary)]/20 rounded-full blur-3xl z-0"></div>
        </div>

      </div>
    </section>
  );
}
