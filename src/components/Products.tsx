import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import prod1 from "../../public/images/diego-lozano-wuCHIyWheSo-unsplash.jpg";
import prod2 from "../../public/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg";
import prod3 from "../../public/images/panyawat-auitpol-eq254Cqvmk8-unsplash.jpg";

const products = [
  {
    title: "Premium Vaults",
    description: "Highly durable, structurally sound protective vaults designed to preserve the casket and maintain the beauty of the gravesite.",
    image: prod1
  },
  {
    title: "Traditional Graves",
    description: "Beautifully manicured plots in serene, highly-maintained sections of our associated cemeteries across Lagos.",
    image: prod2
  },
  {
    title: "Family Mausoleums",
    description: "Architecturally stunning private above-ground structures offering a prestigious, permanent legacy for your family.",
    image: prod3
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[1px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-[10px] font-bold uppercase tracking-[0.25em]">
          Product Offerings
        </span>
      </div>

      <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[var(--color-primary)] font-bold mb-12 leading-tight italic">
        Grave Types & <br/> Memorial Products.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group relative w-full h-[450px] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-700">
            {/* Background Image */}
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-[2000ms] group-hover:scale-110" 
            />
            
            {/* Gradient Overlay - Darker for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-700 group-hover:-translate-y-2">
              <h3 className="font-serif text-2xl font-bold text-white mb-4 italic">
                {product.title}
              </h3>
              
              <div className="h-[1px] w-10 bg-[var(--color-secondary)] mb-4 transition-all duration-700 group-hover:w-20"></div>
              
              <div className="max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out">
                <p className="text-white/80 font-light text-sm leading-relaxed pb-6">
                  {product.description}
                </p>
              </div>
              
              <Link href="/products" className="inline-flex items-center text-white/90 font-bold text-[9px] uppercase tracking-[0.2em] group-hover:text-[var(--color-secondary)] transition-colors duration-300">
                Learn More
                <ArrowRight className="w-3 h-3 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-500" />
              </Link>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
