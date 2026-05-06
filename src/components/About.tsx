import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 md:py-48 bg-white relative overflow-hidden">
      <div className="w-full px-6 md:px-12 lg:px-20">
        <div className="relative flex flex-col lg:flex-row items-center">

          {/* Background Image Block (Spans right side) */}
          <div className="w-full lg:w-[65%] lg:absolute lg:right-0 h-[400px] md:h-[500px] lg:h-[750px] rounded-3xl overflow-hidden shadow-2xl z-0">
            <Image
              src="/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg"
              alt="Capetrust Legacy"
              fill
              className="object-cover"
            />
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* Content Block (Floating over the image on the left) */}
          <div className="w-full lg:w-[45%] bg-[var(--color-primary)] text-white p-10 md:p-14 lg:p-20 rounded-3xl shadow-2xl z-10 relative mt-[-60px] lg:mt-0 border border-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-[var(--color-primary)]/95">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
              <span className="text-[var(--color-secondary)] uppercase tracking-widest font-bold text-sm">Our Legacy</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Honoring Life,<br /> Celebrating Legacy.
            </h2>

            <div className="prose prose-lg prose-blue max-w-none text-white/80 font-light leading-relaxed space-y-6">
              <p>
                At Capetrust Funeral Services, we understand that saying goodbye is one of life's most profound moments. As a proud Nigerian institution rooted deeply in Lagos, we have dedicated ourselves to providing compassionate, dignified care to families, with a special focus on our vibrant community in Ikorodu.
              </p>

              <div className="relative w-full h-[300px] md:h-[450px] my-12 rounded-2xl overflow-hidden shadow-2xl group">
                <Image 
                  src="/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg"
                  alt="Capetrust Legacy"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>

              <p>
                Our experienced team handles every detail with the utmost reverence—from deeply traditional Nigerian ceremonies to contemporary memorial services—ensuring your loved ones receive a farewell that beautifully reflects the life they lived.
              </p>
            </div>

            <button className="text-[var(--color-secondary)] hover:text-white font-bold text-sm uppercase tracking-widest flex items-center transition-colors duration-300 group mt-12">
              Discover Our History
              <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-500" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
