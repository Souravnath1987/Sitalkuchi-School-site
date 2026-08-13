import React, { useState } from 'react';
import { Section } from './Section';
import { MapPin, Clock, ChevronDown, ChevronUp } from 'lucide-react';

const events = [
  {
    day: "26",
    month: "Jul",
    title: "কার্গিল বিজয় দিবস",
    desc: `২৬শে জুলাই আমরা কার্গিল বিজয় দিবস পালন করি। ১৯৯৯ সালে কার্গিল যুদ্ধে ভারতের সাহসী সেনাবাহিনী অসীম বীরত্ব, ত্যাগ ও দেশপ্রেমের পরিচয় দিয়ে দেশের সার্বভৌমত্ব রক্ষা করেছিলেন। বহু বীর সেনা নিজের জীবন উৎসর্গ করে আমাদের নিরাপদ ভবিষ্যৎ নিশ্চিত করেছেন। তাঁদের এই আত্মত্যাগের জন্য আমরা চিরকাল কৃতজ্ঞ থাকব।

কার্গিল বিজয় দিবস কেবল একটি ঐতিহাসিক বিজয়ের স্মারক নয়; এটি আমাদের শেখায়—দেশপ্রেম, কর্তব্যনিষ্ঠা, সাহস, শৃঙ্খলা এবং ঐক্যের মূল্য কতটা মহান। দেশের প্রতি ভালোবাসা শুধু যুদ্ধক্ষেত্রে নয়, বরং নিজের দায়িত্ব সততা ও নিষ্ঠার সঙ্গে পালন করার মধ্যেও প্রকাশ পায়।

আজকের এই দিনে আমরা সকল বীর শহিদকে গভীর শ্রদ্ধার সঙ্গে স্মরণ করি এবং তাঁদের পরিবারের প্রতিও সম্মান জ্ঞাপন করি। আসুন, আমরা প্রত্যেকে একজন দায়িত্বশীল, সৎ ও দেশপ্রেমিক নাগরিক হিসেবে নিজেকে গড়ে তোলার অঙ্গীকার করি।

জয় হিন্দ।

ধন্যবাদ।`,
    time: "10:30 AM",
    location: "School Grounds"
  },
  {
    day: "15",
    month: "Aug",
    title: "Independence Day Celebration",
    desc: "Flag hoisting ceremony followed by cultural performances by students honoring our nation's heritage.",
    time: "08:00 AM",
    location: "School Grounds"
  }
];

function EventCard({ event }: { event: typeof events[0] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLongText = event.desc.length > 150;

  return (
    <div 
      className="bg-brand-cream rounded-2xl overflow-hidden hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group flex flex-col"
    >
      {/* Colored Banner */}
      <div className="h-3 bg-brand-green-800 w-full group-hover:bg-brand-gold transition-colors"></div>
      
      <div className="p-6 sm:p-8 flex-1 flex flex-col">
        <div className="flex items-start gap-4 mb-6">
          {/* Date Chip */}
          <div className="bg-brand-ivory border border-brand-green-800/10 rounded-xl p-3 text-center min-w-[70px] shadow-sm">
            <div className="font-serif text-2xl text-brand-green-900 leading-none mb-1">{event.day}</div>
            <div className="text-xs font-bold text-brand-gold uppercase tracking-wide">{event.month}</div>
          </div>
          <h3 className="font-serif text-xl text-brand-green-900 leading-snug pt-1 group-hover:text-brand-green-700 transition-colors">
            {event.title}
          </h3>
        </div>
        
        <div className="flex-1 flex flex-col mb-6">
          <div 
            className="cursor-pointer group/desc"
            onClick={() => isLongText && setIsExpanded(!isExpanded)}
          >
            <div className={`relative w-full overflow-hidden transition-all duration-300 ${!isExpanded && isLongText ? 'max-h-[72px] line-clamp-3' : ''}`}>
              <p className="text-brand-text-muted text-sm leading-relaxed whitespace-pre-wrap">
                {event.desc}
              </p>
              {!isExpanded && isLongText && (
                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-brand-cream to-transparent pointer-events-none"></div>
              )}
            </div>
            {isLongText && (
              <button 
                className="mt-3 text-brand-green-800 font-bold text-xs uppercase tracking-wider hover:text-brand-gold transition-colors flex items-center gap-1"
              >
                {isExpanded ? 'Show less' : 'Show more'}
                {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            )}
          </div>
        </div>
        
        <div className="pt-4 border-t border-brand-green-800/10 flex flex-col gap-2 text-xs font-medium text-brand-text-muted mt-auto">
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-brand-gold" />
            {event.time}
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-brand-gold" />
            {event.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Events() {
  return (
    <Section id="events" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-brand-cream pb-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl text-brand-green-900 mb-4">Upcoming Events</h2>
            <p className="text-brand-text-muted">
              Discover the vibrant life outside the classroom. Join us for celebrations, competitions, and community gatherings.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} event={event} />
          ))}
        </div>
      </div>
    </Section>
  );
}

