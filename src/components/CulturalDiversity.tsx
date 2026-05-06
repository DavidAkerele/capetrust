"use client";

import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    title: "Cultural Practices We Accommodate",
    description: "From traditional rituals to unique modern services, we embrace all customs with respect and precision.",
    image: "/images/panyawat-auitpol-eq254Cqvmk8-unsplash.jpg"
  },
  {
    title: "Our Commitment To Inclusivity",
    description: "We strive to create a welcoming environment for everyone, regardless of background or belief.",
    image: "/images/eli-solitas-q6e4zwgtUcM-unsplash.jpg"
  },
  {
    title: "Explore Our Memorial Options",
    description: "Discover a variety of memorial choices that reflect personal values and honoring traditions.",
    image: "/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg"
  }
];

export default function CulturalDiversity() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-primary text-white relative overflow-hidden">
      {/* Blue Spotlights */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full mx-auto text-center mb-24 space-y-8 max-w-4xl relative z-10">
        <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
          Community & Heritage
        </span>
        <h2 className="text-4xl md:text-7xl font-serif leading-tight text-white">
          Embracing <span className="editorial-heading italic text-secondary">Cultural Diversity</span> In Our Cemeteries
        </h2>
        <p className="text-white/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Our cemeteries are designed to honor the diverse backgrounds and traditions of the families we serve. We provide inclusive spaces that celebrate the rich tapestry of cultures in our community.
        </p>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
        {CARDS.map((card, index) => (
          <div 
            key={index} 
            className="group space-y-8"
          >
            <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/5 bg-primary-muted">
              <Image
                src={card.image}
                alt={card.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80"></div>
            </div>
            
            <div className="text-center space-y-4 px-4">
              <h3 className="text-3xl font-serif leading-snug text-white">
                {card.title}
              </h3>
              <p className="text-white/50 text-sm font-light leading-relaxed">
                {card.description}
              </p>
              <div className="flex justify-center gap-4 pt-4">
                <Link 
                  href="/learn-more" 
                  className="bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-md border border-white/20 px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all"
                >
                  Learn More
                </Link>
                <Link 
                  href="/signup" 
                  className="bg-secondary text-white hover:bg-secondary-hover px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all shadow-lg"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
