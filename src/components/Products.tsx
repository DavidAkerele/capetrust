import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Premium Vaults",
    description: "Highly durable, structurally sound protective vaults designed to preserve the casket and maintain the beauty of the gravesite.",
    image: "/images/diego-lozano-wuCHIyWheSo-unsplash.jpg"
  },
  {
    title: "Traditional Graves",
    description: "Beautifully manicured plots in serene, highly-maintained sections of our associated cemeteries across Lagos.",
    image: "/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg"
  },
  {
    title: "Family Mausoleums",
    description: "Architecturally stunning private above-ground structures offering a prestigious, permanent legacy for your family.",
    image: "/images/panyawat-auitpol-eq254Cqvmk8-unsplash.jpg"
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 px-8 md:px-16 lg:px-24 bg-[var(--color-accent)] border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Product Offerings
        </span>
      </div>

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary)] font-bold mb-16 leading-tight">
        Grave Types & <br/> Memorial Products.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="group relative w-full h-[450px] md:h-[500px] rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Background Image */}
            <Image 
              src={product.image} 
              alt={product.title} 
              fill 
              className="object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary)] via-[var(--color-primary)]/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:-translate-y-4">
              <h3 className="font-serif text-3xl font-bold text-white mb-4">
                {product.title}
              </h3>
              
              <div className="h-[2px] w-12 bg-[var(--color-secondary)] mb-4 transition-all duration-500 group-hover:w-24"></div>
              
              {/* Description reveals smoothly on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-in-out">
                <p className="text-white/80 font-light text-sm md:text-base leading-relaxed pb-6">
                  {product.description}
                </p>
              </div>
              
              <div className="flex items-center text-[var(--color-secondary)] font-bold text-xs uppercase tracking-widest group-hover:text-white transition-colors duration-300">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
