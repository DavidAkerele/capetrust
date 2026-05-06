import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 md:px-16 lg:px-24 bg-white border-b border-[var(--color-primary)]/10">
      
      <div className="flex items-center space-x-4 mb-12">
        <div className="w-12 h-[2px] bg-[var(--color-secondary)]"></div>
        <span className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.15em]">
          Get in Touch
        </span>
      </div>

      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[var(--color-primary)] font-bold mb-10 leading-tight">
        Schedule a <br/> consultation.
      </h2>

      <p className="text-gray-600 font-light text-lg leading-relaxed mb-16 max-w-2xl">
        Whether you are planning ahead as an investment or need immediate assistance, our dedicated advisors are here to guide you with compassion and expertise.
      </p>

      <div className="bg-[var(--color-primary)] rounded-3xl p-10 md:p-14 relative overflow-hidden group shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 to-transparent z-0 transition-opacity duration-700 opacity-50 group-hover:opacity-100"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h3 className="text-3xl font-serif text-white font-bold mb-4">Ready to start planning?</h3>
            <p className="text-white/70 font-light max-w-md text-lg">Our partnership and planning forms are available 24/7. Connect with an advisor today to secure your legacy.</p>
          </div>
          
          <Link href="/partner" className="shrink-0 bg-[var(--color-secondary)] hover:bg-white text-white hover:text-[var(--color-primary)] px-8 py-5 rounded-full font-bold uppercase tracking-widest text-sm flex items-center transition-all duration-300 transform hover:scale-105 shadow-xl">
            Open Inquiry Form
            <ArrowRight className="w-5 h-5 ml-3" />
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
        <div className="flex flex-col items-start group">
          <div className="w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
            <Phone className="w-6 h-6 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-xl text-[var(--color-primary)] mb-2">Call Us</h4>
          <p className="text-gray-500 font-light">+234 (0) 800 000 0000</p>
        </div>
        
        <div className="flex flex-col items-start group">
          <div className="w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
            <Mail className="w-6 h-6 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-xl text-[var(--color-primary)] mb-2">Email Us</h4>
          <p className="text-gray-500 font-light">consult@capetrust.com</p>
        </div>

        <div className="flex flex-col items-start group">
          <div className="w-14 h-14 bg-[var(--color-accent)] rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
            <MapPin className="w-6 h-6 text-[var(--color-secondary)] group-hover:text-white transition-colors" />
          </div>
          <h4 className="font-bold text-xl text-[var(--color-primary)] mb-2">Visit Us</h4>
          <p className="text-gray-500 font-light">Ikorodu, Lagos, Nigeria</p>
        </div>
      </div>

    </section>
  );
}
