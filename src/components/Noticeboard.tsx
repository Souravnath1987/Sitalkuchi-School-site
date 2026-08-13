import React, { useState } from 'react';
import { Section } from './Section';
import { Pin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const notices = [
  {
    date: "13 Aug 2026",
    title: "২য় সামেটিভ পরীক্ষার খাতা প্রদর্শন – ৩রা সেপ্টেম্বর, ২০২৬",
    desc: `সকল ছাত্রছাত্রী ও অভিভাবকের অবগতির জন্য জানানো যাচ্ছে যে,
২য় সামেটিভ পরীক্ষার খাতা বিদ্যালয়ে ৩রা সেপ্টেম্বর , ২০২৬ তারিখে দেখানো হবে।
অতএব, নির্দিষ্ট দিনে বিদ্যালয়ে উপস্থিত থেকে পরীক্ষার খাতা দেখে নেওয়ার জন্য সকলকে অনুরোধ করা হলো।`,
    type: "New"
  },
  { 
    date: "20 Jul 2026", 
    title: '"অরণ্য সপ্তাহ উদযাপন" উপলক্ষে আয়োজিত বিভিন্ন প্রতিযোগিতার ফলাফল', 
    desc: `*"অরণ্য সপ্তাহ উদযাপন"* উপলক্ষে আয়োজিত বিভিন্ন প্রতিযোগিতার ফলাফল :-

*(ক) স্লোগান লিখন প্রতিযোগিতা -*
*১ম :* ভূমিকা বর্মন (VIII - A)
*২য় :* অরণ্য সাহা (VI - B)
*৩য় :* বাসুবী বর্মন (VI -A)

*(খ) অঙ্কন প্রতিযোগিতা -*
_* GROUP - A (পঞ্চম শ্রেণী থেকে সপ্তম শ্রেণী)_ 
*১ম :* অরণ্য সাহা (VI - B)
*২য় :* নিশা বর্মন (VII - A)
*৩য় :* মো. জুম্মান তামিম (VI - B)

_* GROUP - B (অষ্টম শ্রেণী থেকে দশম শ্রেণী)_
*১ম :* ভূমিকা বর্মন (VIII - A) 
*২য় :* শ্রেয়সী অধিকারী (X)
*৩য় :* সুলতানা ইয়াসমিন (IX)

*(গ) অনুচ্ছেদ প্রতিযোগিতা -*
*১ম :* আরাধ্যা সাহা (VI - A)
*২য় :* অরণ্য সাহা (VI - B)
*৩য় :* আরমান খন্দকার (VII - B)

*(ঘ) প্রবন্ধ প্রতিযোগিতা -*
*১ম :* ভূমিকা বর্মন (VIII - A)
*২য় :* শ্রেয়সী অধিকারী (X)
*৩য় :* তিথি বর্মন (VIII - A)

(ঙ) কুইজ প্রতিযোগিতা -
      ১মঃ নাসরিনা খাতুন ও শ্রেয়সী অধিকারী
      ২য়ঃ আলিফা খাতুন ও আসিদা বানু`,
    type: "New" 
  },
  { 
    date: "11 Jul 2026", 
    title: "অরণ্য সপ্তাহ (১৪.০৭.২০২৬ থেকে ২০.০৭.২০২৬) উদযাপন প্রসঙ্গে", 
    desc: `এতদ্বারা বিদ্যালয়ের সকল ছাত্রছাত্রীকে জানানো যাচ্ছে যে, অরণ্য সপ্তাহ উপলক্ষে আগামী ১৪.০৭.২০২৬ তারিখে প্রাতঃকালীন সমাবেশে বন, পরিবেশ সংরক্ষণ এবং বৃক্ষরোপণের গুরুত্ব সম্পর্কে একটি সংক্ষিপ্ত সচেতনতামূলক অনুষ্ঠান অনুষ্ঠিত হবে। সেই সঙ্গে মাননীয়া মুখ্যমন্ত্রীর শুভেচ্ছা বার্তা পাঠ করে শোনানো হবে।
এই উপলক্ষে বিদ্যালয়ে সপ্তাহব্যাপী বিভিন্ন কর্মসূচি আয়োজন করা হবে, যেমন— রচনা প্রতিযোগিতা, অঙ্কন প্রতিযোগিতা, কুইজ, বিতর্ক, স্লোগান রচনা, বৃক্ষরোপণ কর্মসূচি, র্যালি ইত্যাদি। সকল ছাত্রছাত্রীকে এই কর্মসূচিগুলিতে সক্রিয়ভাবে অংশগ্রহণ করার জন্য নির্দেশ দেওয়া হচ্ছে।
অতএব, সকলকে নির্ধারিত দিনে সময়মতো উপস্থিত থাকার এবং বিদ্যালয়ের নির্দেশ যথাযথভাবে পালন করার অনুরোধ করা হচ্ছে।

আদেশক্রমে
ভারপ্রাপ্ত প্রধান শিক্ষক`, 
    type: "New" 
  },
  {
    date: "05 Jul 2026",
    title: "আগামী মঙ্গলবার থেকে স্কুল পুনরায় সকাল ১১ টা থেকে",
    desc: "আগামী ১৪ই জুলাই ২০২৬ থেকে পুনরায় স্কুলে সকাল ১১ টা থেকে নিয়মিতভাবে পঠনপাঠন শুরু হবে।",
    type: "Notice"
  }
];

export function Noticeboard() {
  const [selectedNotice, setSelectedNotice] = useState<typeof notices[0] | null>(null);

  const getBadgeColor = (type: string) => {
    switch(type) {
      case 'New': return 'bg-brand-gold text-brand-green-900';
      case 'Exam': return 'bg-rose-100 text-rose-800';
      case 'Admission': return 'bg-amber-100 text-amber-800';
      default: return 'bg-brand-cream/20 text-brand-cream';
    }
  };

  const getShortDesc = (desc: string) => {
    const words = desc.split(' ');
    if (words.length > 20) {
      return words.slice(0, 20).join(' ') + '...';
    }
    return desc;
  };

  return (
    <Section id="noticeboard" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-brand-green-900 rounded-3xl p-4 sm:p-8 shadow-xl relative overflow-hidden">
          
          {/* Inner dashed border to look like a board */}
          <div className="absolute inset-4 sm:inset-6 border-2 border-dashed border-brand-gold/30 rounded-2xl pointer-events-none"></div>
          
          <div className="relative z-10 p-4 sm:p-6">
            <div className="flex items-center justify-center gap-3 mb-10">
              <Pin size={24} className="text-brand-gold" />
              <h2 className="text-2xl sm:text-3xl font-serif text-brand-ivory">Official Noticeboard</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
              {notices.map((notice, idx) => (
                <div
                  key={idx}
                  className="bg-brand-ivory rounded-xl p-5 shadow-md flex flex-col justify-between hover:shadow-lg transition-all cursor-pointer hover:-translate-y-1 h-full"
                  onClick={() => setSelectedNotice(notice)}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-mono text-brand-text-muted">{notice.date}</span>
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${getBadgeColor(notice.type)}`}>
                        {notice.type}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-brand-green-900 mb-1 line-clamp-2">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-brand-text-muted whitespace-pre-wrap line-clamp-3">
                      {getShortDesc(notice.desc)}
                    </p>
                  </div>
                  <button 
                    className="text-sm font-medium text-brand-gold hover:text-brand-green-800 transition-colors self-start shrink-0 mt-4 flex items-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedNotice(notice);
                    }}
                  >
                    Read More <span className="ml-1">&rarr;</span>
                  </button>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </div>

      {/* Modal for full notice */}
      <AnimatePresence>
        {selectedNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedNotice(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-brand-ivory rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 p-2 text-brand-text-muted hover:text-brand-green-900 transition-colors rounded-full hover:bg-brand-cream"
                onClick={() => setSelectedNotice(null)}
              >
                <X size={24} />
              </button>
              
              <div className="flex items-center gap-3 mb-4 mt-2">
                <span className="text-sm font-mono text-brand-text-muted">{selectedNotice.date}</span>
                <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-sm ${getBadgeColor(selectedNotice.type)}`}>
                  {selectedNotice.type}
                </span>
              </div>
              
              <h2 className="text-xl sm:text-2xl font-bold text-brand-green-900 mb-6">
                {selectedNotice.title}
              </h2>
              
              <div className="text-brand-text-muted whitespace-pre-wrap leading-relaxed">
                {selectedNotice.desc}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
