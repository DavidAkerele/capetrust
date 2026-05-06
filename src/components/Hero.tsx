"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const IMAGES = [
  "/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg",
  "/images/diego-lozano-wuCHIyWheSo-unsplash.jpg",
  "/images/noah-silliman-EBB45rCSjrU-unsplash.jpg",
  "/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg",
  "/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg"
];

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
            key={src}
            src={src}
            alt="Funeral background"
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${index === currentImage ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
        {/* Overlay gradient - Blue Tint */}
        <div className="absolute inset-0 bg-[var(--color-primary)]/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/80 via-transparent to-black/30 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-white px-6 md:px-12 lg:px-20 w-full h-full flex flex-col justify-end items-start pb-32">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 drop-shadow-2xl tracking-tight opacity-0 animate-[fadeInUp_1.2s_cubic-bezier(0.16,1,0.3,1)_forwards] max-w-5xl leading-tight">
          Every Life. Remembered.
        </h1>
        <p className="text-lg md:text-2xl mb-12 max-w-3xl font-light drop-shadow-md text-white/90 leading-relaxed opacity-0 animate-[fadeInUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.2s_forwards]">
          Offering you and your family compassionate funerals, cremations, and cemetery burials with dignity and care.
        </p>

        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-[fadeInUp_1.2s_cubic-bezier(0.16,1,0.3,1)_0.4s_forwards]">
          <button className="bg-[var(--color-secondary)] hover:bg-[var(--color-secondary-hover)] text-white px-8 py-4 rounded-md font-semibold tracking-wide transition-all hover:scale-105 shadow-[0_0_20px_rgba(30,64,175,0.4)]">
            Find a Location
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-md font-semibold tracking-wide transition-all hover:scale-105 shadow-lg">
            Plan Ahead
          </button>
        </div>
      </div>
    </section>
  );
}
