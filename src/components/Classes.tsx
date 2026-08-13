import React from 'react';
import { Section } from './Section';

const classGroups = [
  {
    numeral: "V–VIII",
    group: "Middle School",
    tag: "Foundation",
    description: "Building strong fundamentals in core subjects with a focus on curiosity and discipline.",
  },
  {
    numeral: "IX–X",
    group: "Secondary",
    tag: "Madhyamik",
    description: "Rigorous preparation for board examinations, emphasizing conceptual clarity and analytical skills.",
  },
  {
    numeral: "XI–XII",
    group: "Higher Secondary",
    tag: "Arts Stream",
    description: "Specialized humanities education fostering critical thinking, literature, and social sciences.",
  }
];

export function Classes() {
  return (
    <Section id="classes" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl text-brand-green-900 mb-4">Academic Structure</h2>
          <p className="text-brand-text-muted">
            We provide a comprehensive educational journey from Class V through Class XII, carefully structured to support developmental stages and academic milestones.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {classGroups.map((cls, index) => (
            <div 
              key={index}
              className="group bg-brand-cream rounded-2xl p-8 hover:bg-brand-green-900 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Large background numeral decorative */}
              <div className="absolute -bottom-4 -right-4 font-serif text-[120px] font-bold text-brand-ivory/40 group-hover:text-brand-green-800/50 transition-colors pointer-events-none leading-none">
                {cls.numeral.split('–')[0]}
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-serif text-3xl text-brand-green-900 group-hover:text-brand-gold transition-colors">
                    Class {cls.numeral}
                  </h3>
                  <span className="px-3 py-1 bg-brand-ivory text-brand-green-800 group-hover:bg-brand-green-800 group-hover:text-brand-ivory text-xs font-semibold rounded-full border border-brand-green-800/10 transition-colors">
                    {cls.tag}
                  </span>
                </div>
                
                <h4 className="text-lg font-medium text-brand-text group-hover:text-brand-ivory mb-3 transition-colors">
                  {cls.group}
                </h4>
                
                <p className="text-brand-text-muted group-hover:text-brand-cream/80 transition-colors leading-relaxed">
                  {cls.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
