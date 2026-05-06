"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import hero1 from "../../public/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg";
import hero2 from "../../public/images/diego-lozano-wuCHIyWheSo-unsplash.jpg";
import hero3 from "../../public/images/noah-silliman-EBB45rCSjrU-unsplash.jpg";
import hero4 from "../../public/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg";
import hero5 from "../../public/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg";

const IMAGES = [hero1, hero2, hero3, hero4, hero5];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Slideshow Background */}
      <div className="absolute inset-0 z-0 bg-black">
        {IMAGES.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt="Funeral background"
            fill
            priority={index === 0}
            placeholder="blur"
            sizes="100vw"
            className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        {/* Overlay gradient - Blue Tint */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/80 via-transparent to-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-white px-6 md:px-12 lg:px-20 w-full h-full flex flex-col justify-center items-center text-center pb-10">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl tracking-tighter opacity-0 animate-[fadeInUp_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] max-w-5xl leading-[0.95] italic">
          Every Life.<br/>Remembered.
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-xl font-light drop-shadow-md text-white/90 leading-relaxed opacity-0 animate-[fadeInUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
          Offering compassionate funerals, cremations, and cemetery burials with dignity and care.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-[fadeInUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
          <Link href="/contact" className="bg-[var(--color-secondary)] hover:bg-white text-white hover:text-[var(--color-primary)] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all hover:scale-105 shadow-2xl min-w-[180px] text-center flex items-center justify-center">
            Find a Location
          </Link>
          <Link href="/investment" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[9px] transition-all hover:scale-105 shadow-lg min-w-[180px] text-center flex items-center justify-center">
            Plan Ahead
          </Link>
        </div>
      </div>
    </section>
  );
}
