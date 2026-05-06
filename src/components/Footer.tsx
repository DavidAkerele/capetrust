import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-32 pb-12 relative overflow-hidden flex flex-col">
      {/* Blue Spotlights */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[180px] pointer-events-none"></div>
      <div className="absolute bottom-0 -left-24 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full px-6 md:px-12 lg:px-20 relative z-10 flex-grow">
        
        {/* Top Section: Newsletter & Contact */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-xl space-y-8">
            <h3 className="font-serif text-4xl md:text-6xl font-medium leading-tight italic">Stay Connected</h3>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Join our mailing list to receive grief support resources, planning guides, and updates from our community in Lagos.
            </p>
            <div className="flex relative max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="bg-white/5 border border-white/10 text-white rounded-full pl-6 pr-36 py-5 w-full focus:outline-none focus:border-secondary transition-all placeholder:text-white/30" 
              />
              <button className="absolute right-2 top-2 bottom-2 bg-secondary hover:bg-secondary-hover text-white px-8 rounded-full transition-all font-bold text-[10px] uppercase tracking-widest shadow-lg">
                Subscribe
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20 w-full lg:w-auto">
            {/* Links Column 1 */}
            <div className="space-y-8">
              <h4 className="font-bold text-[11px] tracking-[0.3em] uppercase text-secondary">Services</h4>
              <ul className="space-y-4 text-white/60 font-light text-sm">
                <li><Link href="/products" className="hover:text-white transition-colors">Traditional Funerals</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Cremation Services</Link></li>
                <li><Link href="/products" className="hover:text-white transition-colors">Cemetery & Burial</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors">Grief Support</Link></li>
              </ul>
            </div>
            
            {/* Links Column 2 */}
            <div className="space-y-8">
              <h4 className="font-bold text-[11px] tracking-[0.3em] uppercase text-secondary">Company</h4>
              <ul className="space-y-4 text-white/60 font-light text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors">Our Legacy</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div className="col-span-2 md:col-span-1 space-y-8">
              <h4 className="font-bold text-[11px] tracking-[0.3em] uppercase text-secondary">Contact</h4>
              <ul className="space-y-6 text-white/60 font-light text-sm">
                <li>
                  <p className="text-white font-bold mb-1">24/7 Support Line</p>
                  <p className="text-secondary font-bold text-xl tracking-wide">1-888-700-7766</p>
                </li>
                <li>
                  <p className="text-white font-bold mb-1">Head Office</p>
                  <p className="leading-relaxed">123 Memorial Way,<br/>Ikorodu, Lagos, Nigeria</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Massive Typographic Watermark */}
        <div className="border-t border-white/10 pt-24">
          <div className="flex flex-col items-center">
            <h1 className="text-[14vw] xl:text-[20rem] leading-none font-serif font-bold tracking-tighter text-white/10 select-none w-full text-center italic">
              Capetrust
            </h1>
            
            <div className="w-full flex flex-col md:flex-row justify-between items-center text-[10px] text-white/30 mt-16 font-bold uppercase tracking-[0.3em]">
              <p>&copy; {new Date().getFullYear()} Capetrust Funeral Services.</p>
              <div className="flex space-x-10 mt-8 md:mt-0">
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
