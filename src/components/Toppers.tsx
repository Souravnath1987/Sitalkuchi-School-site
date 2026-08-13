import React, { useState } from 'react';
import { Section } from './Section';
import { ChevronLeft, ChevronRight, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Using blank images for now as requested
const classXToppers = [
  { id: 1, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 2, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 3, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 4, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 5, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 6, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 7, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 8, name: "Student Name", marks: "Marks: ---", image: "" },
];

const classXIIToppers = [
  { id: 1, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 2, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 3, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 4, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 5, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 6, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 7, name: "Student Name", marks: "Marks: ---", image: "" },
  { id: 8, name: "Student Name", marks: "Marks: ---", image: "" },
];

export function Toppers() {
  const [activeTab, setActiveTab] = useState<'X' | 'XII'>('X');
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentToppers = activeTab === 'X' ? classXToppers : classXIIToppers;
  const itemsPerPage = 4; // Display 4 toppers at a time (adjust for mobile responsiveness later)
  
  // Calculate total pages
  const totalPages = Math.ceil(currentToppers.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const switchTab = (tab: 'X' | 'XII') => {
    setActiveTab(tab);
    setCurrentIndex(0);
  };

  // Get current visible toppers
  const visibleToppers = currentToppers.slice(
    currentIndex * itemsPerPage, 
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <Section id="toppers" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-serif text-brand-green-900 mb-4 flex items-center justify-center">
            <GraduationCap className="w-8 h-8 mr-3 text-brand-gold" />
            Topper's Section
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full mb-6"></div>
          <p className="text-brand-text-muted">Celebrating academic excellence and our brightest minds.</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white/50 p-1 rounded-full inline-flex backdrop-blur-sm border border-brand-cream shadow-sm">
            <button
              onClick={() => switchTab('X')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'X' 
                  ? 'bg-brand-green-900 text-white shadow-md' 
                  : 'text-brand-green-800 hover:bg-brand-green-900/10'
              }`}
            >
              Class X Toppers
            </button>
            <button
              onClick={() => switchTab('XII')}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === 'XII' 
                  ? 'bg-brand-green-900 text-white shadow-md' 
                  : 'text-brand-green-800 hover:bg-brand-green-900/10'
              }`}
            >
              Class XII Toppers
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden px-4 py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab + currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              >
                {visibleToppers.map((topper) => (
                  <div key={topper.id} className="flex flex-col items-center group">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-xl overflow-hidden bg-brand-cream flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 relative">
                      {topper.image ? (
                        <img src={topper.image} alt={topper.name} className="w-full h-full object-cover" />
                      ) : (
                        <GraduationCap className="w-12 h-12 text-brand-gold/50" />
                      )}
                      
                      {/* Decorative ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-brand-gold/0 group-hover:border-brand-gold/50 transition-colors duration-300 pointer-events-none"></div>
                    </div>
                    
                    <div className="text-center bg-white/80 backdrop-blur-sm w-full py-3 px-4 rounded-xl shadow-sm border border-brand-cream/50 group-hover:border-brand-gold/30 transition-colors duration-300">
                      <h3 className="font-serif font-bold text-brand-green-900 text-lg">{topper.name}</h3>
                      <p className="text-brand-gold font-medium text-sm mt-1">{topper.marks}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-6 mt-8">
              <button 
                onClick={handlePrev}
                className="p-3 rounded-full bg-white text-brand-green-900 shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300 group"
                aria-label="Previous page"
              >
                <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'bg-brand-gold w-6' : 'bg-brand-green-900/20'
                    }`}
                    aria-label={`Go to page ${idx + 1}`}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="p-3 rounded-full bg-white text-brand-green-900 shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300 group"
                aria-label="Next page"
              >
                <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
