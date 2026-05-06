"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-end overflow-hidden bg-background pb-32">
      {/* Blue Spotlights */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[150px] pointer-events-none z-10"></div>
      <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-secondary/15 rounded-full blur-[180px] pointer-events-none z-10"></div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-unsplash.jpg"
          alt="Serene memorial"
          fill
          priority
          className="object-cover opacity-100"
        />
        {/* Very subtle dark gradient only at the bottom for text readability if needed, but keeping it as clean as possible */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-4xl space-y-8 animate-fade-in-up">
          <div className="space-y-3">
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold text-secondary bg-secondary/10 px-4 py-1 rounded-full">
              Now Honoring Lives in Lagos
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] text-primary font-medium tracking-tight">
              Clarity for <span className="editorial-heading italic">families</span>.<br />
              Relief for <span className="editorial-heading italic">directors</span>.
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-primary/70 max-w-xl leading-relaxed font-light">
            Built from the arrangement room, designed to keep everyone informed. Capetrust provides the peace of mind you deserve.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-secondary hover:text-white text-primary px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-xl"
            >
              Inquire Now
            </Link>
            <button className="flex items-center gap-3 bg-secondary/10 hover:bg-secondary text-primary hover:text-white px-10 py-4 rounded-full font-bold text-xs uppercase tracking-widest transition-all shadow-sm backdrop-blur-md">
              View Collection
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
