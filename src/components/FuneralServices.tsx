"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Celebration Of Life",
    description: "A gathering to honor and remember a cherished member of our community.",
    image: "/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg",
    tags: ["Final Tribute", "Community Support", "Honoring Memories"]
  },
  {
    title: "Memorial Service",
    description: "A time to celebrate the life of a beloved individual.",
    image: "/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg",
    tags: ["Memorial Event", "Community Support", "Respectful Farewell"]
  }
];

export default function FuneralServices() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-background border-t border-primary/5">
      <div className="w-full mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 border-b border-primary/10 pb-12">
          <div className="space-y-4">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
              Calendar of Remembrance
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight text-primary">
              Upcoming <span className="editorial-heading italic">Funeral Services</span>
            </h2>
            <p className="text-primary/50 text-xl font-light">Honoring Lives With Dignity And Respect</p>
          </div>
          <Link 
            href="/services" 
            className="text-primary font-bold text-xs uppercase tracking-widest border border-primary/10 px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-sm"
          >
            See All Services
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {SERVICES.map((service, index) => (
            <div key={index} className="space-y-10 group">
              <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-primary/5">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
                />
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] uppercase tracking-[0.2em] bg-secondary/10 px-4 py-1.5 rounded-full text-secondary font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl font-serif text-primary">{service.title}</h3>
                <p className="text-primary/60 text-lg font-light leading-relaxed max-w-xl">{service.description}</p>
                <Link 
                  href="/services/detail" 
                  className="inline-block bg-secondary hover:bg-secondary-hover text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
