import React from 'react';
import { BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-brand-green-900 text-brand-ivory pt-16 pb-8 px-4 sm:px-8 border-t border-brand-green-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-brand-ivory/10 flex items-center justify-center text-brand-gold flex-shrink-0">
                <BookOpen size={24} />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-xl text-brand-ivory leading-tight">
                  SITALKUCHI HIGH SCHOOL
                </span>
                <span className="text-xs text-brand-gold font-medium tracking-wider uppercase mt-0.5">Estd. 2001</span>
              </div>
            </div>
            <p className="text-brand-ivory/70 text-sm leading-relaxed max-w-sm">
              Empowering students through academic excellence, cultural values, and holistic development to build a brighter future for the community.
            </p>
          </div>

          {/* Explore Links */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold mb-6">Explore</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">About Us</a></li>
              <li><a href="#classes" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">Academic Structure</a></li>
              <li><a href="#teachers" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">Our Faculty</a></li>
              <li><a href="#events" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">Events & Gallery</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg text-brand-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#noticeboard" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">Noticeboard</a></li>
              <li><a href="#contact" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">Contact Office</a></li>
              <li><a href="#" className="text-brand-ivory/70 hover:text-brand-ivory transition-colors text-sm">Privacy Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-brand-ivory/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-ivory/50">
          <p>&copy; {new Date().getFullYear()} Sitalkuchi High School. All rights reserved.</p>
          <p className="font-medium text-brand-gold/80">Affiliated to WBBSE & WBCHSE</p>
        </div>
      </div>
    </footer>
  );
}
