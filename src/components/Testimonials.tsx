"use client";

import Image from "next/image";
import { QuoteIcon } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    quote: "Capetrust handled my father's service with such grace. They took the burden off our shoulders and created a beautiful memorial.",
    author: "Sarah Adeyemi",
    location: "Ikorodu, Lagos",
    image: "/images/suhyeon-choi-V6UJIenfLME-unsplash.jpg"
  },
  {
    quote: "The level of professionalism and empathy shown by the entire staff was beyond our expectations. We felt truly supported.",
    author: "The Olatunji Family",
    location: "Lekki, Lagos",
    image: "/images/adrianna-geo-JWlZS708L1Y-unsplash.jpg"
  },
  {
    quote: "Pre-planning with Capetrust was the best decision. The advisor was patient and helped us secure everything smoothly.",
    author: "Michael Okonkwo",
    location: "Surulere, Lagos",
    image: "/images/jacinta-christos-pJ8WXG5C_5U-unsplash.jpg"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-8 md:px-16 lg:px-24 bg-white border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-16">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Families We've Served
        </span>
      </div>

      <div className="relative min-h-[350px]">
        {testimonials.map((test, index) => (
          <div 
            key={index}
            className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out ${
              index === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <QuoteIcon className="w-12 h-12 text-[var(--color-secondary)]/30 mb-8" />
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl text-[var(--color-primary)] font-medium leading-relaxed mb-10">
              "{test.quote}"
            </p>
            <div className="flex items-center space-x-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-md shrink-0">
                <Image src={test.image} alt={test.author} fill className="object-cover" />
              </div>
              <div>
                <p className="font-bold text-[var(--color-primary)] uppercase tracking-widest text-xs">{test.author}</p>
                <p className="text-gray-500 font-light text-sm">{test.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex space-x-3 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all duration-500 ${index === current ? "w-12 bg-[var(--color-secondary)]" : "w-4 bg-gray-200"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
