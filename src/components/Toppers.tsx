import React from 'react';
import { Section } from './Section';
import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';

const topper = {
  name: "প্রত্যুষ রায় সিংহ",
  marks: "674",
  image: "/images/000001.png"
};

export function Toppers() {
  return (
    <Section id="toppers" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-green-900 mb-4 flex items-center justify-center font-bold">
            <GraduationCap className="w-8 h-8 mr-3 text-brand-gold" />
            Topper's Section
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-brand-text-muted mb-6">Celebrating academic excellence and our brightest minds.</p>
          <div className="inline-flex items-center justify-center bg-brand-cream border-2 border-brand-gold/40 px-6 py-2 rounded-xl shadow-sm">
            <span className="font-bold text-brand-green-900 uppercase tracking-widest text-sm">Class X</span>
          </div>
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center group w-64 md:w-72"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-brand-cream flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300 relative">
              <img src={topper.image} alt={topper.name} className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 rounded-full border-2 border-brand-gold/0 group-hover:border-brand-gold/50 transition-colors duration-300 pointer-events-none"></div>
            </div>
            
            <div className="text-center bg-white/90 backdrop-blur-sm w-full py-5 px-6 rounded-2xl shadow-lg border border-brand-cream/50 group-hover:border-brand-gold/50 transition-colors duration-300">
              <h3 className="font-serif font-bold text-brand-green-900 text-xl md:text-2xl mb-3">{topper.name}</h3>
              <div className="inline-block bg-brand-green-900 text-brand-gold font-bold text-sm md:text-base px-4 py-1.5 rounded-lg shadow-inner">
                Marks : {topper.marks}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

