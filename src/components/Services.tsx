import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Traditional Funerals",
    description: "Honoring cultural and religious traditions with dignity.",
    image: "/images/diego-lozano-wuCHIyWheSo-unsplash.jpg"
  },
  {
    title: "Cremation Services",
    description: "Flexible, personalized options for memorialization.",
    image: "/images/noah-silliman-EBB45rCSjrU-unsplash.jpg"
  },
  {
    title: "Cemetery Burial",
    description: "Serene, beautifully maintained resting places.",
    image: "/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-8 md:px-16 lg:px-24 bg-white border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Our Services
        </span>
      </div>

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary)] font-bold mb-16 leading-tight">
        Compassionate care<br/>for every family.
      </h2>

      <div className="space-y-16">
        {services.map((service, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden shadow-xl mb-6">
              <Image src={service.image} alt={service.title} fill className="object-cover group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-[var(--color-primary)]/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex justify-between items-center px-2">
              <div>
                <h3 className="font-serif text-3xl font-bold text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 font-light text-base pr-4">
                  {service.description}
                </p>
              </div>
              
              <div className="w-12 h-12 rounded-full border border-[var(--color-primary)]/10 flex items-center justify-center group-hover:bg-[var(--color-secondary)] group-hover:border-[var(--color-secondary)] transition-colors shrink-0">
                <ArrowRight className="w-5 h-5 text-[var(--color-primary)] group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
