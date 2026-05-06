"use client";

import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    title: "Personalized Memorial Estates Tailored for Your Loved Ones",
    description: "Create a lasting legacy with our custom-designed memorial estates that reflect the unique life of your cherished ones.",
    image: "/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg",
    link: "/services/memorial-estates"
  },
  {
    title: "Financial Security Through Thoughtful Pre-Planning",
    description: "Take the burden off your family by securing your future wishes today with our comprehensive pre-planning services.",
    image: "/images/strauss-western-5a3eFHcGl9U-unsplash.jpg",
    link: "/services/pre-planning"
  },
  {
    title: "Visiting Our Cemeteries: A Guide for Family and Friends",
    description: "Find peace and comfort during your visit with our helpful guide to our serene memorial grounds and facilities.",
    image: "/images/diego-lozano-wuCHIyWheSo-unsplash.jpg",
    link: "/services/visiting-guide"
  }
];

export default function ServiceGrid() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-black text-white relative overflow-hidden">
      {/* Blue Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-secondary/20 rounded-full blur-[200px] pointer-events-none"></div>
      
      <div className="w-full mx-auto space-y-24 relative z-10">
        {/* Intro Section */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
            The Solution
          </span>
          <h2 className="text-4xl md:text-6xl font-serif leading-tight text-white">
            Capetrust <span className="editorial-heading italic text-secondary">keeps families informed</span>,<br />
            not overwhelmed.
          </h2>
          <p className="text-lg text-white/60 font-light max-w-2xl mx-auto">
            We create a private, shareable hub where families can follow updates, ask questions, and stay in the loop — without overwhelming your staff.
          </p>
        </div>

        {/* Question Cards (Wide) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { q: "What happens next?", desc: "Real-time updates on every step of the process." },
            { q: "When will the ceremony take place?", desc: "Clear scheduling and logistics for all family members." },
            { q: "Is the documentation ready?", desc: "Instant access to digital records and death certificates." }
          ].map((card, i) => (
            <div key={i} className="bg-white/5 backdrop-blur-xl p-12 rounded-[2.5rem] border border-white/10 shadow-2xl text-center space-y-4 hover:bg-white/10 transition-all duration-500">
              <h3 className="text-2xl font-serif italic text-white">"{card.q}"</h3>
              <p className="text-sm text-white/50 font-light leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Main Services (End to End) */}
        <div className="space-y-16 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
            <h3 className="text-3xl font-serif text-white">Comprehensive Cemetery Services</h3>
            <Link href="/services" className="text-secondary font-bold text-xs uppercase tracking-widest hover:underline">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SERVICES.map((service, index) => (
              <div 
                key={index} 
                className="group space-y-6"
              >
                <div className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 bg-primary-muted">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-serif leading-snug text-white group-hover:text-secondary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-white/60 text-sm font-light leading-relaxed">
                    {service.description}
                  </p>
                  <Link 
                    href={service.link}
                    className="inline-block text-secondary font-bold text-[10px] uppercase tracking-widest"
                  >
                    Explore Service →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
