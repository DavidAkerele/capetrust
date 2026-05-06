"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[var(--color-primary)]/95 backdrop-blur-md shadow-lg py-4 text-white border-b border-white/10"
          : "bg-transparent py-6 text-white"
      }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-3 group">
          {/* Logo Container - Add the uploaded image to public/logo.png */}
          <div className="relative w-16 h-16 flex items-center justify-center bg-white/10 rounded-lg p-1 backdrop-blur-sm border border-white/20">
            {/* We expect the logo to be at public/logo.png. */}
            <Image 
              src="/logo.png" 
              alt="Capetrust Funeral Services Logo" 
              fill
              className="object-contain drop-shadow-md"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sans text-xl font-bold tracking-wide leading-tight text-white">
              CAPETRUST
            </span>
            <span className="text-xs font-medium uppercase tracking-widest text-white/80">
              Funeral Services
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <Link href="#locations" className="hover:text-[var(--color-secondary)] transition-colors">
            Find a Location
          </Link>
          <Link href="#planning" className="hover:text-[var(--color-secondary)] transition-colors">
            Planning Ahead
          </Link>
          <Link href="#services" className="hover:text-[var(--color-secondary)] transition-colors">
            Services
          </Link>
          <Link href="#about" className="hover:text-[var(--color-secondary)] transition-colors">
            About Us
          </Link>
          <button className="bg-[var(--color-secondary)] text-white px-6 py-2.5 rounded-md shadow-lg hover:bg-[var(--color-secondary-hover)] transition-all hover:scale-105 border border-[var(--color-secondary)]">
            Contact
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col space-y-1.5 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={`block w-6 h-0.5 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2 bg-white' : 'bg-white'}`}></span>
          <span className={`block w-6 h-0.5 transition-opacity ${mobileMenuOpen ? 'opacity-0' : 'bg-white'}`}></span>
          <span className={`block w-6 h-0.5 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2 bg-white' : 'bg-white'}`}></span>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--color-primary)]/95 backdrop-blur-md shadow-xl text-white flex flex-col p-6 space-y-6 border-t border-white/10">
          <Link href="#locations" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Find a Location</Link>
          <Link href="#planning" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Planning Ahead</Link>
          <Link href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">Services</Link>
          <Link href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium">About Us</Link>
          <button className="bg-[var(--color-secondary)] text-white px-6 py-3 rounded-md text-center font-medium shadow-md w-full">Contact</button>
        </div>
      )}
    </header>
  );
}
