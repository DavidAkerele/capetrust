"use client";

import Image from "next/image";
import Link from "next/link";

export default function TranquilSpaces() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden">
      {/* Blue Spotlights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[200px] pointer-events-none"></div>
      
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary">
              Our Sanctuaries
            </span>
            <h2 className="text-4xl md:text-7xl font-serif leading-tight text-primary">
              Explore Our <span className="editorial-heading italic text-secondary">Tranquil</span> Memorial & Green Spaces
            </h2>
          </div>
          
          <p className="text-primary/60 text-xl leading-relaxed font-light max-w-xl">
            Our memorial parks are designed to be sanctuaries of peace and remembrance. From historic garden settings to modern green burial options, we provide a variety of serene environments to honor your loved ones.
          </p>

          <div className="flex flex-wrap gap-5 pt-4">
            <Link 
              href="/memorial-parks" 
              className="bg-white hover:bg-secondary hover:text-white text-primary px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-xl border border-primary/10"
            >
              Explore Parks
            </Link>
            <Link 
              href="/signup" 
              className="bg-primary/5 hover:bg-primary/10 text-primary px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 h-[600px]">
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mt-20 border border-primary/5">
            <Image
              src="/images/noah-silliman-EBB45rCSjrU-unsplash.jpg"
              alt="Memorial bench"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-100"
            />
          </div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-20 border border-primary/5">
            <Image
              src="/images/annie-spratt-38yKQLL11d8-unsplash.jpg"
              alt="Serene lilies"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 opacity-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
