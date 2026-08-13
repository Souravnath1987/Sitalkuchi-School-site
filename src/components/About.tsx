import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';

export function About() {
  return (
    <Section id="about" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Column: History & Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl text-brand-green-900 mb-8">Our Heritage & Vision</h2>
          <div className="space-y-6 text-brand-text-muted leading-relaxed">
            <p>
              Established in the year 2001, Sitalkuchi High School has stood as a beacon of learning and cultural development in Cooch Behar. Over the past two decades, we have dedicated ourselves to providing accessible, high-quality education to the youth of our community, empowering them to pursue their dreams with confidence and integrity.
            </p>
            <p>
              Our core values are rooted in discipline, creativity, and mutual respect. We believe that education extends far beyond textbooks. Through a balanced approach that nurtures both intellectual curiosity and character building, we strive to shape well-rounded individuals ready to face the challenges of tomorrow.
            </p>
            <p>
              Recognized for our strong academic foundation, we are proud to offer the <strong>Arts Stream at the Higher Secondary level</strong>, affiliated with the West Bengal Council of Higher Secondary Education (WBCHSE). Our curriculum is designed to foster critical thinking, cultural appreciation, and an enduring love for the humanities.
            </p>
          </div>
        </div>

        {/* Right Column: Head Teacher Card */}
        <div className="lg:pl-8">
          <div className="bg-brand-ivory rounded-3xl p-8 shadow-sm border border-brand-green-800/10">
            <div className="flex flex-col items-center text-center">
              {/* Photo placeholder / Monogram */}
              <div className="w-32 h-32 rounded-full mb-6 p-1 border-2 border-brand-gold">
                <div className="w-full h-full rounded-full bg-brand-green-800 flex items-center justify-center overflow-hidden">
                  <img src="/images/21.jpg" alt="Pabitra Barman" className="w-full h-full object-cover" />
                </div>
              </div>
              
              <h3 className="font-serif text-2xl text-brand-green-900 mb-1">Pabitra Barman</h3>
              <p className="text-brand-gold font-medium text-sm mb-8 uppercase tracking-widest">Head Teacher / Teacher-in-Charge</p>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-4 text-brand-cream w-10 h-10 -z-10" />
                <p className="font-serif italic text-lg text-brand-text-muted leading-relaxed">
                  "Education is the most powerful catalyst for positive change. At Sitalkuchi High School, we do not just teach subjects; we ignite minds and nurture the cultural heritage of our community."
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </Section>
  );
}
