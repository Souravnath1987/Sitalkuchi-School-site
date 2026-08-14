import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Users, Award, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { SunAnimation } from './SunAnimation';

const bannerImages = [
  "/images/499.jpeg",
  "/images/203.jpg",
  "/images/201.jpg"
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerImages.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
    <section id="home" className="relative bg-brand-green-900 overflow-hidden w-full h-[60vh] md:h-[70vh] lg:h-[85vh]">
      
      {/* Background Area */}
      <div className="absolute inset-0 w-full h-full bg-brand-green-900 z-0"></div>

      {/* Picture Showcase Area */}
      <div className="absolute inset-0 w-full h-full z-10 p-4 sm:p-8 md:p-10 flex items-center justify-center">
        <div className="w-full h-full relative rounded-3xl sm:rounded-[3rem] overflow-hidden shadow-2xl border-2 sm:border-4 border-brand-gold/20 bg-brand-green-950">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentImage}
              src={bannerImages[currentImage]}
              alt="Sitalkuchi High School Banner" 
              className="absolute inset-0 w-full h-full object-cover object-center"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-brand-green-900/40 via-transparent to-brand-green-900/10 pointer-events-none"></div>
        </div>
      </div>

    </section>
    
    <div className="bg-brand-cream text-center py-4 px-4 sm:px-8 border-b-4 border-brand-gold/20 overflow-hidden">
      <div className="max-w-5xl mx-auto py-1">
        <h2 className="font-stylish text-brand-green-900 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight whitespace-nowrap">
          Welcome to Sitalkuchi High School
        </h2>
        <p className="text-brand-green-800 font-bold tracking-widest uppercase text-sm sm:text-base">
          Established 2001
        </p>
      </div>
    </div>
    </>
  );
}

export function HeroWelcome() {
  return (
    <div className="py-12 md:py-16 px-4 sm:px-8 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
      
      {/* Decorative Bouncing Sun */}
      <motion.div 
        className="absolute -left-10 md:left-0 lg:-left-20 top-10 lg:-top-10 z-0 pointer-events-none"
        animate={{ 
          y: [0, -40, 0],
          scaleY: [1, 1.05, 0.95, 1],
          scaleX: [1, 0.95, 1.05, 1]
        }}
        transition={{ 
          duration: 1.5, 
          repeat: Infinity, 
          ease: "easeInOut",
          times: [0, 0.5, 0.8, 1]
        }}
      >
        <SunAnimation className="w-40 h-40 sm:w-56 sm:h-56 lg:w-72 lg:h-72 opacity-60 drop-shadow-2xl" />
      </motion.div>

      {/* Left Content */}
      <div className="flex-1 max-w-2xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 rounded-full bg-brand-cream border border-brand-gold/30 text-brand-green-800 text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6"
        >
          Est. 2001 · Classes V to XII
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl text-brand-green-900 leading-tight mb-6"
        >
          Nurturing Minds, <br />
          <span className="italic text-brand-gold">Shaping the Future.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-brand-text-muted mb-10 max-w-xl leading-relaxed"
        >
          Rooted in heritage and dedicated to academic excellence. We cultivate a supportive environment where students from Sitalkuchi and beyond grow into responsible, creative citizens.
        </motion.p>
      </div>

      {/* Right Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex-1 w-full max-w-md lg:max-w-none relative z-10"
      >
        <div className="bg-brand-green-900 rounded-3xl p-6 sm:p-10 relative shadow-2xl text-brand-ivory">
          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-t border-l border-brand-gold/30 rounded-tl-xl pointer-events-none"></div>
          <div className="absolute top-4 right-4 w-12 h-12 sm:w-16 sm:h-16 border-t border-r border-brand-gold/30 rounded-tr-xl pointer-events-none"></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-16 sm:h-16 border-b border-l border-brand-gold/30 rounded-bl-xl pointer-events-none"></div>
          <div className="absolute bottom-4 right-4 w-12 h-12 sm:w-16 sm:h-16 border-b border-r border-brand-gold/30 rounded-br-xl pointer-events-none"></div>

          <div className="w-full h-48 sm:h-56 mb-8 rounded-2xl overflow-hidden relative border border-brand-gold/20 shadow-inner group relative z-10">
            <img 
              src="/images/202323314_4072398836208833_4744540725783205416_n.jpg" 
              alt="School Campus" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-brand-green-900/10 mix-blend-overlay"></div>
          </div>

          <div className="flex flex-col items-center text-center mb-10 relative z-10">
            <h2 className="font-serif text-2xl text-brand-gold mb-2">Sitalkuchi High School</h2>
            <p className="font-serif italic text-brand-cream/80 text-sm tracking-widest uppercase">Let your light shine</p>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div className="text-center">
              <div className="flex justify-center text-brand-gold mb-2"><Award size={24} /></div>
              <div className="font-serif text-3xl mb-1">25+</div>
              <div className="text-xs text-brand-cream/70 uppercase tracking-wide">Years of Legacy</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-brand-gold mb-2"><Users size={24} /></div>
              <div className="font-serif text-3xl mb-1">2,300+</div>
              <div className="text-xs text-brand-cream/70 uppercase tracking-wide">Students</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-brand-gold mb-2"><Calendar size={24} /></div>
              <div className="font-serif text-3xl mb-1">8</div>
              <div className="text-xs text-brand-cream/70 uppercase tracking-wide">Grades (V–XII)</div>
            </div>
            <div className="text-center">
              <div className="flex justify-center text-brand-gold mb-2"><BookOpen size={24} /></div>
              <div className="font-serif text-3xl mb-1">25</div>
              <div className="text-xs text-brand-cream/70 uppercase tracking-wide">Faculty Members</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
