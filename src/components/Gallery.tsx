import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Section } from './Section';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: "/images/1002.png", alt: "৮০ তম স্বাধীনতা দিবস উদযাপন", caption: "৮০ তম স্বাধীনতা দিবস উদযাপন" },
  { src: "/images/1001.png", alt: "৮০ তম স্বাধীনতা দিবস উপলক্ষে সাংস্কৃতিক অনুষ্ঠান", caption: "৮০ তম স্বাধীনতা দিবস উপলক্ষে সাংস্কৃতিক অনুষ্ঠান" },
  { src: "/images/1000.jpeg", alt: "৮০ তম স্বাধীনতা দিবস উপলক্ষে শিক্ষক ও দ্বাদশ শ্রেণীর ছাত্রছাত্রীদের মধ্যে ফুটবল ম্যাচ", caption: "৮০ তম স্বাধীনতা দিবস উপলক্ষে শিক্ষক ও দ্বাদশ শ্রেণীর ছাত্রছাত্রীদের মধ্যে ফুটবল ম্যাচ" },
  { src: "/images/200.jpg", alt: "Campus Life 10", caption: "ডঃ শ্যামাপ্রসাদ মুখার্জির জন্মজয়ন্তী উপলক্ষে সাংস্কৃতিক অনুষ্ঠান" },
  { src: "/images/202.jpg", alt: "Campus Life 11", caption: "আন্তর্জাতিক যোগা দিবস" },
  { src: "/images/001.jpg", alt: "Campus Life 12", caption: "অরণ্য সপ্তাহ উদযাপন" },
  { src: "/images/499.jpeg", alt: "HAR GHAR TIRANGA", caption: "HAR GHAR TIRANGA - উদযাপন" },
  { src: "/images/321.png", alt: "HAR GHAR TIRANGA র্যালি", caption: "HAR GHAR TIRANGA Rally" },
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(timer);
  }, [totalPages]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const visibleImages = galleryImages.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <Section id="gallery" className="bg-transparent">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl md:text-4xl text-brand-green-900 mb-4"
        >
          Campus Life
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-24 h-1 bg-brand-gold mx-auto"
        ></motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="relative">
          <div className="overflow-hidden py-4 px-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
              >
                {visibleImages.map((img, idx) => (
                  <div key={currentIndex * itemsPerPage + idx} className="flex flex-col">
                    <div className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-md hover:shadow-lg transition-all duration-300 mx-auto w-full">
                      <img 
                        src={img.src} 
                        alt={img.alt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-brand-green-900/0 group-hover:bg-brand-green-900/20 transition-colors duration-300"></div>
                    </div>
                    {img.caption && (
                      <div className="mt-4 p-3 bg-brand-cream border border-brand-gold/30 rounded-xl shadow-sm text-center flex-1 flex flex-col justify-center items-center">
                        <p className="text-sm font-bold text-brand-green-900 leading-snug">{img.caption}</p>
                        <div className="mt-1.5 inline-block px-2 py-0.5 bg-brand-green-900 text-brand-gold text-[10px] uppercase tracking-widest font-bold rounded-full">
                          2026
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center items-center gap-6 mt-8">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/80 text-brand-green-900 shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Previous images"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-brand-gold w-6' : 'bg-brand-green-900/20'
                  }`}
                  aria-label={`Go to image page ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white/80 text-brand-green-900 shadow-md hover:bg-brand-gold hover:text-white transition-all duration-300 backdrop-blur-sm"
              aria-label="Next images"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
