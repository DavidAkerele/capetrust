import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import legacyImg from "../../public/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="relative flex flex-col lg:flex-row items-center">
          
          {/* Left: Massive Edge-to-Edge Image */}
          <div className="w-full lg:w-2/3 h-[500px] lg:h-[700px] relative rounded-[2.5rem] overflow-hidden shadow-2xl z-0 group">
            <Image 
              src={legacyImg}
              alt="Capetrust Legacy"
              fill
              placeholder="blur"
              sizes="(max-width: 1024px) 100vw, 66vw"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-blue-900/10"></div>
          </div>

          {/* Right: Overlapping Glassmorphism Card */}
          <div className="w-full lg:w-1/2 relative z-10 lg:-ml-32 mt-[-100px] lg:mt-0">
            <div className="bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-xl p-10 md:p-16 shadow-2xl rounded-[2.5rem] border border-[var(--color-primary)]/5">
              
              <div className="flex items-center space-x-4 mb-10">
                <div className="w-12 h-[1px] bg-[var(--color-secondary)]"></div>
                <span className="text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-[0.25em]">
                  Our Legacy
                </span>
              </div>

              <h2 className="font-serif text-3xl md:text-4xl lg:text-[2.75rem] text-[var(--color-primary)] font-bold mb-6 leading-[1.15] italic">
                Honoring Life,<br /> Celebrating Legacy.
              </h2>

              <div className="space-y-5 text-gray-600 font-light leading-relaxed text-base mb-8">
                <p>
                  At Capetrust Funeral Services, we understand that saying goodbye is one of life&apos;s most profound moments. As a proud Nigerian institution rooted deeply in Lagos, we have dedicated ourselves to providing compassionate, dignified care to families.
                </p>
                <p>
                  Our experienced team handles every detail with the utmost reverence—ensuring your loved ones receive a farewell that beautifully reflects the life they lived.
                </p>
              </div>

              <Link href="/about" className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all duration-300 shadow-lg hover:scale-105">
                Discover Our History
                <ArrowRight className="w-4 h-4 ml-3" />
              </Link>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
