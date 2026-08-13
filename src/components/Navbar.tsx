import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, BookOpen, Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Classes', href: '#classes' },
    { name: 'Teachers', href: '#teachers' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Events', href: '#events' },
    { name: 'Noticeboard', href: '#noticeboard' },
    { name: 'Toppers', href: '#toppers' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 flex flex-col">
      {/* Top Bar */}
      <div className="bg-brand-green-900 text-brand-ivory text-xs sm:text-sm py-2 px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center transition-all duration-300">
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <MapPin size={14} className="text-brand-gold" />
          <span>Sitalkuchi, Cooch Behar, West Bengal – 736158</span>
        </div>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <a href="tel:7063079183" className="flex items-center space-x-2 hover:text-brand-gold transition-colors">
            <Phone size={14} />
            <span>7063079183</span>
          </a>
          <a href="mailto:sitalkuchihighschoolcoob@gmail.com" className="flex items-center space-x-2 hover:text-brand-gold transition-colors hidden md:flex">
            <Mail size={14} />
            <span>sitalkuchihighschoolcoob@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`transition-all duration-300 ${isScrolled ? 'bg-brand-ivory/95 backdrop-blur-sm shadow-sm py-3' : 'bg-brand-ivory py-4 sm:py-5'} px-4 sm:px-8`}>
        <div className="max-w-[1440px] mx-auto flex justify-between items-center">
          
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center space-x-3 sm:space-x-4 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-green-800 flex items-center justify-center text-brand-gold flex-shrink-0 group-hover:scale-105 transition-transform">
              <BookOpen size={24} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold italic text-2xl sm:text-3xl text-brand-green-900 leading-tight">
                SITALKUCHI HIGH SCHOOL
              </span>
              <span className="text-[10px] sm:text-xs text-brand-text-muted mt-1 font-medium uppercase tracking-wider">
                (H.S recognized Govt. sponsored with Co-education)
              </span>
              <span className="text-[10px] sm:text-xs text-brand-gold font-medium tracking-wider uppercase mt-0.5">
                Index No. 04 - 042 / H.S Code - 110169
              </span>
            </div>
          </a>

          {/* Menu Toggle */}
          <button 
            className="text-brand-green-900 p-2 hover:bg-brand-gold/20 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Dropdown Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-brand-cream/95 backdrop-blur-md shadow-2xl border-t border-brand-cream py-6 px-4 flex flex-col space-y-3 lg:space-y-4 lg:py-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block w-full text-center bg-white shadow-sm border border-brand-gold/20 hover:bg-brand-gold hover:border-brand-gold text-brand-green-900 font-bold text-lg lg:text-xl py-3.5 lg:py-4 px-4 rounded-xl uppercase tracking-[0.15em] transition-all duration-300 active:scale-90 hover:-translate-y-1 hover:shadow-md max-w-2xl mx-auto"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
