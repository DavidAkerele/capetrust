import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white pt-24 pb-8 relative overflow-hidden flex flex-col">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[var(--color-primary-dark)] to-transparent z-0 pointer-events-none"></div>
      
      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 flex-grow">
        
        {/* Top Section: Newsletter & Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="max-w-xl">
            <h3 className="font-serif text-4xl md:text-5xl font-bold mb-6">Stay Connected</h3>
            <p className="text-white/70 text-lg mb-10 leading-relaxed font-light">
              Join our mailing list to receive grief support resources, planning guides, and updates from our community in Lagos.
            </p>
            <div className="flex relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/5 border border-white/20 text-white rounded-full pl-6 pr-32 py-4 w-full focus:outline-none focus:border-[var(--color-secondary)] focus:bg-white/10 transition-all backdrop-blur-md placeholder:text-white/40" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-[var(--color-secondary)] hover:bg-white hover:text-[var(--color-primary)] text-white px-8 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest flex items-center shadow-lg">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 lg:gap-16 w-full lg:w-auto">
            {/* Links Column 1 */}
            <div>
              <h4 className="font-bold text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-secondary)]">Services</h4>
              <ul className="space-y-4 text-white/70 font-light">
                <li><Link href="/products" className="hover:text-white transition-colors">Traditional Funerals</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Cremation Services</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Cemetery & Burial</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Grief Support</Link></li>
              </ul>
            </div>
            
            {/* Links Column 2 */}
            <div>
              <h4 className="font-bold text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-secondary)]">Company</h4>
              <ul className="space-y-4 text-white/70 font-light">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Legacy</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold text-xs tracking-[0.2em] uppercase mb-6 text-[var(--color-secondary)]">Contact</h4>
              <ul className="space-y-5 text-white/70 font-light">
                <li>
                  <p className="text-white font-medium mb-1">24/7 Support Line</p>
                  <p className="text-[var(--color-secondary)] font-semibold text-lg tracking-wide">1-888-700-7766</p>
                </li>
                <li>
                  <p className="text-white font-medium mb-1">Head Office</p>
                  <p className="leading-relaxed">123 Memorial Way,<br/>Ikorodu, Lagos, Nigeria</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Massive Typographic Watermark */}
        <div className="border-t border-white/10 pt-20 pb-4">
          <div className="flex flex-col items-center">
            <h1 className="text-[14vw] xl:text-[18rem] leading-none font-serif font-bold tracking-tighter text-white/5 select-none w-full text-center italic">
              Capetrust
            </h1>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 mt-12 font-bold uppercase tracking-[0.2em]">
              <p>&copy; {new Date().getFullYear()} Capetrust Funeral Services.</p>
              <div className="flex space-x-8 mt-6 md:mt-0">
                <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="hover:text-white transition-colors">Terms of Use</Link>
                <Link href="#" className="hover:text-white transition-colors">Accessibility</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
