import Products from "@/components/Products";
import { FloatingHeader } from "@/components/ui/floating-header";
import Footer from "@/components/Footer";
import { SubPageHero } from "@/components/SubPageHero";
import productsHeroImg from "../../../public/images/diego-lozano-wuCHIyWheSo-unsplash.jpg";
import Image from "next/image";
import gallery1 from "../../../public/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg";
import gallery2 from "../../../public/images/strauss-western-5a3eFHcGl9U-unsplash.jpg";
import gallery3 from "../../../public/images/eli-solitas-q6e4zwgtUcM-unsplash.jpg";

export default function ProductsPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <FloatingHeader />
      <SubPageHero 
        title="Memorial Products" 
        description="From architecturally stunning mausoleums to serene garden plots, we offer a diverse range of final resting places that reflect a life well-lived."
        image={productsHeroImg}
      />
      
      <Products />

      {/* Additional Content: Customization Section */}
      <section className="py-32 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--color-primary)] font-bold mb-8">Personalized to perfection.</h2>
          <p className="text-gray-600 font-light text-lg leading-relaxed mb-20 max-w-3xl mx-auto">
            We believe that every memorial should be as unique as the person it honors. Our team offers extensive customization options for all our products, from bespoke engravings to custom architectural details.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={gallery1} alt="Product Detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" placeholder="blur" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={gallery2} alt="Product Detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" placeholder="blur" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl group">
              <Image src={gallery3} alt="Product Detail" fill className="object-cover transition-transform duration-700 group-hover:scale-110" placeholder="blur" sizes="(max-width: 768px) 100vw, 33vw" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Content: Quality & Craftsmanship */}
      <section className="py-24 bg-[var(--color-primary)] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-2xl">
              <h2 className="font-serif text-4xl font-bold mb-6">Crafted with Reverence</h2>
              <p className="text-white/70 font-light leading-relaxed text-lg">We source only the finest materials—from premium granite to sustainable woods—ensuring that every memorial product we offer stands as a permanent, beautiful tribute for centuries to come.</p>
            </div>
            <button className="bg-[var(--color-secondary)] hover:bg-white text-white hover:text-[var(--color-primary)] px-10 py-5 rounded-full font-bold uppercase tracking-widest text-sm transition-all shadow-xl">
              Download Catalog
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
