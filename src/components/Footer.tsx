import React from "react";
import { Phone, Mail, MapPin, Hammer, Facebook, MessageSquareDashed } from "lucide-react";

interface FooterProps {
  onRequestQuote: () => void;
}

export default function Footer({ onRequestQuote }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-16 pb-8 relative overflow-hidden" id="main-footer">
      {/* Decorative layout grids */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-orange-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & SEO Pitch */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-1.5 rounded text-white">
                <Hammer className="h-4.5 w-4.5" />
              </div>
              <span className="font-extrabold text-blue-900 tracking-tight text-md font-sans">
                RELIABLE SERVICES & SOLUTIONS
              </span>
            </div>
            
            <p className="text-xs text-slate-600 leading-relaxed font-normal max-w-sm">
              Your trusted family-owned contractor based out of <strong>New River, Arizona</strong>. We specialize in providing premium residential and commercial repair, emergency maintenance, and honest, climate-appropriate remodels. Serving Anthem, Desert Hills, and Maricopa County.
            </p>

            {/* Social handles placeholders with yelp & google links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-orange-500 hover:text-orange-500 transition-colors"
                aria-label="Facebook placeholder link"
              >
                <Facebook className="h-4.5 w-4.5" />
              </a>
              <a
                href="https://yelp.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-orange-500 hover:text-orange-500 transition-colors text-xs font-bold"
                aria-label="Yelp placeholder link"
              >
                Y
              </a>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:border-orange-500 hover:text-orange-500 transition-colors text-xs font-bold"
                aria-label="Google Maps placeholder link"
              >
                G
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-sans font-black text-xs tracking-widest text-blue-900 uppercase">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {[
                { name: "Home Dashboard", href: "#home" },
                { name: "Our Family Story", href: "#about" },
                { name: "Service Offerings", href: "#services" },
                { name: "Why Work With Us", href: "#why-choose-us" },
                { name: "Client Testimonials", href: "#testimonials" },
                { name: "Contact Dispatch", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-xs text-slate-600 hover:text-orange-500 transition-colors tracking-wide text-left font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contacts Info & Quotes */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-sans font-black text-xs tracking-widest text-blue-900 uppercase">
              Contact Dispatcher
            </h4>
            
            <div className="space-y-3">
              <a
                href="tel:623-980-5133"
                className="flex items-center space-x-2.5 text-xs text-slate-700 hover:text-orange-500 transition-colors text-left"
              >
                <Phone className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="font-bold">📞 623-980-5133 (Click-to-Call)</span>
              </a>

              <a
                href="mailto:blown1931@msn.com"
                className="flex items-center space-x-2.5 text-xs text-slate-700 hover:text-orange-500 transition-colors text-left"
              >
                <Mail className="h-4 w-4 text-orange-500 flex-shrink-0" />
                <span className="truncate font-semibold">📧 blown1931@msn.com</span>
              </a>

              <div className="flex items-start space-x-2.5 text-xs text-slate-600 text-left">
                <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-normal">
                  📍 New River, Arizona, 85087
                  <br />
                  <span className="text-[10px] text-slate-400 leading-none">Serving Maricopa County locally</span>
                </span>
              </div>
            </div>

            <button
              onClick={onRequestQuote}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded text-[10px] font-black uppercase tracking-widest transition-all cursor-pointer shadow-sm"
            >
              Request a Fast Quote
            </button>
          </div>

        </div>

        {/* Footer Base Info */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 flex-wrap">
          
          <div className="space-y-1">
            <p className="text-[10px] text-slate-500 font-mono">
              © {currentYear} Reliable Services & Solutions. All Rights Reserved. Fully Licensed, Bonded & Insured.
            </p>
            <p className="text-[9px] text-slate-400 font-light max-w-2xl leading-relaxed">
              Local contractors in New River AZ, providing professional home services, commercial repairs, emergency electrical, plumbing repairs, and architectural patio upgrades.
            </p>
          </div>

          {/* iWebNext Developer Hyperlink (MANDATORY REQUIREMENT) */}
          <div className="text-xs text-slate-600 font-mono tracking-wide bg-white px-4 py-2 rounded border border-slate-250 shadow-sm">
            <span>Developed by </span>
            <a
              href="https://iwebnext.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 hover:text-orange-700 font-bold border-b border-orange-500/20 hover:border-orange-500 transition-all"
            >
              iWebNext
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
