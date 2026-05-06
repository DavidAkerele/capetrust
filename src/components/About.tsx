import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative flex flex-col lg:flex-row items-center">
          
          {/* Left: Massive Edge-to-Edge Image */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-[700px] relative rounded-2xl overflow-hidden shadow-2xl z-0 group">
            <Image 
              src="/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg"
              alt="Capetrust Legacy"
              fill
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[var(--color-primary)]/10"></div>
          </div>

          {/* Right: Overlapping Glassmorphism Card */}
          <div className="w-full lg:w-1/2 relative z-10 lg:-ml-32 mt-[-100px] lg:mt-0">
            <div className="bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-xl p-10 md:p-16 shadow-2xl rounded-2xl border border-[var(--color-primary)]/5">
              
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
                <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
                  Our Legacy
                </span>
              </div>

              <h2 className="font-serif text-4xl md:text-5xl lg:text-[3.5rem] text-[var(--color-primary)] font-bold mb-8 leading-[1.1]">
                Honoring Life,<br /> Celebrating Legacy.
              </h2>

              <div className="space-y-6 text-gray-600 font-light leading-relaxed text-lg mb-10">
                <p>
                  At Capetrust Funeral Services, we understand that saying goodbye is one of life's most profound moments. As a proud Nigerian institution rooted deeply in Lagos, we have dedicated ourselves to providing compassionate, dignified care to families, with a special focus on our vibrant community in Ikorodu.
                </p>
                <p>
                  Our experienced team handles every detail with the utmost reverence—from deeply traditional Nigerian ceremonies to contemporary memorial services—ensuring your loved ones receive a farewell that beautifully reflects the life they lived.
                </p>
              </div>

              <button className="text-[var(--color-secondary)] hover:text-[var(--color-primary)] font-bold text-sm uppercase tracking-widest flex items-center transition-colors duration-300 group">
                Discover Our History
                <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
              </button>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
