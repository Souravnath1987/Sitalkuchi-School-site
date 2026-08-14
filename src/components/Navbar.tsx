import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, BookOpen } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <header className="sticky w-full top-0 z-50 flex flex-col bg-white">
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
        <div className="max-w-[1440px] mx-auto flex flex-col xl:flex-row justify-between items-center gap-4 xl:gap-8">
          
          {/* Logo/Brand */}
          <a href="#home" className="flex items-center space-x-3 sm:space-x-4 group w-full xl:w-auto justify-center xl:justify-start">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-green-800 flex items-center justify-center text-brand-gold flex-shrink-0 group-hover:scale-105 transition-transform">
              <BookOpen size={24} />
            </div>
            <div className="flex flex-col text-center xl:text-left">
              <span className="font-serif font-bold italic text-xl sm:text-2xl xl:text-3xl text-brand-green-900 leading-tight">
                SITALKUCHI HIGH SCHOOL
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-xs text-brand-text-muted mt-1 font-medium uppercase tracking-wider">
                (H.S recognized Govt. sponsored with Co-education)
              </span>
              <span className="text-[9px] sm:text-[10px] xl:text-xs text-brand-gold font-medium tracking-wider uppercase mt-0.5">
                Index No. 04 - 042 / H.S Code - 110169
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 w-full xl:w-auto">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = link.href.substring(1);
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    const headerOffset = 180; // approximate height of sticky header
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-[10px] sm:text-xs xl:text-sm font-bold text-brand-green-900 bg-brand-cream border-2 border-brand-gold/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:bg-brand-green-900 hover:text-brand-gold hover:border-brand-green-900 transition-all duration-300 uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

        </div>
      </nav>
    </header>
  );
}
