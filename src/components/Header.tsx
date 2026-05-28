import React, { useState, useEffect } from "react";
import { Phone, Menu, X, Hammer, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onRequestQuote: () => void;
}

export default function Header({ onRequestQuote }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
          : "bg-white border-b border-slate-200 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo & Branding */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "#home")}
            className="flex items-center space-x-2 group focus:outline-none"
            id="logo-link"
          >
            <div className="bg-orange-500 p-2 rounded-lg text-white shadow-md shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
              <Hammer className="h-5 w-5" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black text-blue-900 tracking-tighter uppercase group-hover:text-orange-500 transition-colors">
                RELIABLE
              </span>
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest">
                Services & Solutions
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] font-bold uppercase tracking-widest" id="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-slate-500 hover:text-blue-900 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA Area */}
          <div className="hidden lg:flex items-center gap-6">
            <div className="text-right border-r border-slate-200 pr-6">
              <p className="text-[9px] text-slate-400 font-bold uppercase mb-0.5">New River, AZ</p>
              <a href="tel:623-980-5133" className="text-lg font-black text-blue-900 hover:text-orange-500 transition-colors">
                623.980.5133
              </a>
            </div>
            <button
              onClick={onRequestQuote}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md text-[11px] font-black uppercase tracking-widest shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
              id="header-quote-cta"
            >
              Request a Quote
            </button>
          </div>

          {/* Mobile Actions Menu Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <a
              href="tel:623-980-5133"
              className="bg-orange-500/10 text-orange-500 border border-orange-500/20 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-all flex items-center justify-center animate-pulse"
              title="Call 623-980-5133"
              id="header-mobile-call"
            >
              <Phone className="h-4 w-4" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/50 rounded-lg"
              aria-label="Toggle menu"
              id="mobile-menu-burger"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white border-b border-slate-200 shadow-lg overflow-hidden"
            id="mobile-drawer-wrapper"
          >
            <div className="px-4 pt-4 pb-6 space-y-4">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wider text-slate-500 hover:bg-slate-50 hover:text-blue-900 transition-all"
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="h-4 w-4 text-orange-500" />
                  </a>
                ))}
              </div>
              
              <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
                <a
                  href="tel:623-980-5133"
                  className="flex items-center justify-center space-x-3 w-full bg-slate-50 border border-slate-200 py-3 rounded-md text-blue-900 font-extrabold text-sm hover:bg-slate-100 transition-all"
                >
                  <Phone className="h-5 w-5 text-orange-500" />
                  <span>Call 623-980-5133</span>
                </a>
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onRequestQuote();
                  }}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-md text-center text-xs font-black uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
