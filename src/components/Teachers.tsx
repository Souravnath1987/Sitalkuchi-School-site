import React from 'react';
import { Section } from './Section';

const faculty = [
  { name: "Pabitra Barman", subject: "Head Teacher", qual: "Teacher-in-Charge", gradient: "from-emerald-700 to-emerald-900", image: "/images/21.jpg" },
  { name: "Kalyan Barman", subject: "English", qual: "M.A. in English", gradient: "from-blue-700 to-blue-900", image: "/images/741402802_4098507980441293_7697794370512552084_n.jpg" },
  { name: "Tapas Barman", subject: "Sanskrit", qual: "M.A. in Sanskrit", gradient: "from-amber-600 to-amber-800", image: "/images/13.jpg" },
  { name: "Prativa Barman", subject: "Bengali", qual: "M.A. in Bengali", gradient: "from-rose-700 to-rose-900", image: "/images/10.jpg" },
  { name: "Bipul Adhikary", subject: "Bengali", qual: "M.A. in Bengali", gradient: "from-indigo-700 to-indigo-900", image: "/images/12.png" },
  { name: "Malay Bhowmik", subject: "Bengali", qual: "M.A. in Bengali", gradient: "from-teal-700 to-teal-900", image: "/images/23.jpg" },
  { name: "Abdul Kalam Hossain", subject: "Geography", qual: "M.A. in Geography", gradient: "from-orange-600 to-orange-800", image: "/images/5.jpg" },
  { name: "Irani Barman", subject: "Work Education", qual: "M.A.", gradient: "from-purple-700 to-purple-900", image: "/images/2.jpg" },
  { name: "Rakesh Barman", subject: "Pure Science", qual: "B.Sc in Pure Science", gradient: "from-cyan-700 to-cyan-900", image: "/images/211.jpg?v=2" },
  { name: "Lalit Barman", subject: "History", qual: "B.A in History", gradient: "from-fuchsia-700 to-fuchsia-900", image: "/images/213.jpg" },
  { name: "Sourav Debnath", subject: "English", qual: "B.A in English", gradient: "from-violet-700 to-violet-900", image: "/images/217.jpg?v=2" },
  { name: "Khalil Hossain", subject: "English", qual: "B.A in English", gradient: "from-sky-700 to-sky-900", image: "/images/370.jpg" },
  { name: "Pratap Singha", subject: "History", qual: "B.A in History", gradient: "from-yellow-700 to-yellow-900", image: "/images/372.jpg" },
  { name: "Manoranjan Maity", subject: "English", qual: "M.A in English", gradient: "from-lime-700 to-lime-900", image: "/images/373.jpg" },
  { name: "Goutam Budhya Roy", subject: "Physical Education", qual: "M.A in Bengali & M.P.Ed in Physical Education", gradient: "from-blue-600 to-blue-800", image: "/images/0003.jpeg" },
];

const paraTeachers = [
  { name: "Krishna Gopal Saha", subject: "Bengali", qual: "B.A in Bengali", gradient: "from-indigo-600 to-indigo-800", image: "/images/250.jpeg" },
];

const vocationalTrainers = [
  { name: "Saikat Das", subject: "Vocational Trainer", qual: "M.Tech in Electronics & Communication Engg.", gradient: "from-emerald-600 to-emerald-800", image: "/images/371.jpg" },
];

const nonTeachingStaff = [
  { name: "Jaladhar Barman", subject: "Non-Teaching Staff", qual: "Group C", gradient: "from-cyan-600 to-cyan-800", image: "/images/002.jpg" },
  { name: "Gopal Barman", subject: "Non-Teaching Staff", qual: "Group D", gradient: "from-slate-600 to-slate-800", image: "/images/0002.jpg" },
];

export function Teachers() {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').substring(0, 2);
  };

  return (
    <Section id="teachers" className="bg-transparent px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl text-brand-green-900 mb-4">Our Faculty</h2>
          <p className="text-brand-text-muted">
            Dedicated educators committed to guiding our students with expertise, patience, and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {faculty.map((teacher, index) => (
            <div 
              key={index}
              className="bg-brand-ivory rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-brand-green-800/5"
            >
              <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white font-serif text-2xl bg-gradient-to-br ${teacher.gradient} shadow-inner overflow-hidden`}>
                {teacher.image ? (
                  <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
                ) : (
                  getInitials(teacher.name)
                )}
              </div>
              <h3 className="font-serif text-lg text-brand-green-900 mb-1">{teacher.name}</h3>
              <p className="text-brand-gold font-medium text-sm mb-2">{teacher.subject}</p>
              <p className="text-brand-text-muted text-xs bg-brand-cream px-3 py-1 rounded-full">{teacher.qual}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl text-brand-green-900 mb-4 font-serif">Para Teachers</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {paraTeachers.map((teacher, index) => (
              <div 
                key={index}
                className="bg-brand-ivory rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-brand-green-800/5"
              >
                <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white font-serif text-2xl bg-gradient-to-br ${teacher.gradient} shadow-inner overflow-hidden`}>
                  {teacher.image ? (
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    getInitials(teacher.name)
                  )}
                </div>
                <h3 className="font-serif text-lg text-brand-green-900 mb-1">{teacher.name}</h3>
                <p className="text-brand-gold font-medium text-sm mb-2">{teacher.subject}</p>
                <p className="text-brand-text-muted text-xs bg-brand-cream px-3 py-1 rounded-full">{teacher.qual}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl text-brand-green-900 mb-4 font-serif">Vocational Trainer</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vocationalTrainers.map((teacher, index) => (
              <div 
                key={index}
                className="bg-brand-ivory rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-brand-green-800/5"
              >
                <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white font-serif text-2xl bg-gradient-to-br ${teacher.gradient} shadow-inner overflow-hidden`}>
                  {teacher.image ? (
                    <img src={teacher.image} alt={teacher.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    getInitials(teacher.name)
                  )}
                </div>
                <h3 className="font-serif text-lg text-brand-green-900 mb-1">{teacher.name}</h3>
                <p className="text-brand-gold font-medium text-sm mb-2">{teacher.subject}</p>
                <p className="text-brand-text-muted text-xs bg-brand-cream px-3 py-1 rounded-full">{teacher.qual}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl text-brand-green-900 mb-4 font-serif">Non-Teaching Staff (Group C & D)</h2>
            <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {nonTeachingStaff.map((staff, index) => (
              <div 
                key={index}
                className="bg-brand-ivory rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 border border-brand-green-800/5"
              >
                <div className={`w-20 h-20 rounded-full mb-4 flex items-center justify-center text-white font-serif text-2xl bg-gradient-to-br ${staff.gradient} shadow-inner overflow-hidden`}>
                  {staff.image ? (
                    <img src={staff.image} alt={staff.name} className="w-full h-full object-cover object-top" />
                  ) : (
                    getInitials(staff.name)
                  )}
                </div>
                <h3 className="font-serif text-lg text-brand-green-900 mb-1">{staff.name}</h3>
                <p className="text-brand-gold font-medium text-sm mb-2">{staff.subject}</p>
                <p className="text-brand-text-muted text-xs bg-brand-cream px-3 py-1 rounded-full">{staff.qual}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
