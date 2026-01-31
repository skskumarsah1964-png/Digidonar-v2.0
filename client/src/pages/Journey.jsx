import React, { useEffect } from 'react';
import { Rocket, Star, Users, Award, TrendingUp, Flag } from 'lucide-react';

const timelineData = [
  {
    year: "2021",
    title: "The Humble Beginning",
    desc: "Digidonar ki shuruat 2 logo ki team ke saath ek chote se kamre mein hui. Humara maqsad tha communication ko democratize karna.",
    icon: <Rocket className="text-white" size={24} />,
    color: "bg-[#0D66BA]"
  },
  {
    year: "2022",
    title: "1,000+ Happy Clients",
    desc: "Sirf ek saal mein humne 1,000 se zyada small businesses ko connect kiya. Humne apna pehla official office Noida mein setup kiya.",
    icon: <Users className="text-white" size={24} />,
    color: "bg-[#1CB48D]"
  },
  {
    year: "2023",
    title: "WhatsApp API Launch",
    desc: "Market ki demand ko dekhte huye humne WhatsApp Business API solutions launch kiye, jo hamara ab tak ka sabse bada hit raha.",
    icon: <Star className="text-white" size={24} />,
    color: "bg-[#44BBDB]"
  },
  {
    year: "2024",
    title: "Going International",
    desc: "Humne global boundaries cross ki aur Southeast Asia mein apni services expand ki. Aaj hum 50+ experts ki team hain.",
    icon: <TrendingUp className="text-white" size={24} />,
    color: "bg-slate-900"
  },
  {
    year: "2026",
    title: "Future of AI Communication",
    desc: "Ab hum AI-driven automated communication par kaam kar rahe hain taaki har business 24/7 bina kisi manual effort ke grow kar sake.",
    icon: <Flag className="text-white" size={24} />,
    color: "bg-[#0D66BA]"
  }
];

const Journey = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Hero Header */}
      <section className="py-20 bg-slate-50 text-center px-6">
        <h1 className="text-[#0D66BA] font-bold tracking-[0.3em] uppercase text-sm mb-4">Our Timeline</h1>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">The Journey of <span className="text-[#1CB48D]">Digidonar</span></h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Ek chote se idea se lekar India ke leading CPaaS platform tak ka safar. Humne har din kuch naya seekha aur apne clients ke bharose ko jeeta.
        </p>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        {/* Central Line (Desktop Only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-slate-100 -translate-x-1/2 hidden md:block"></div>

        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {timelineData.map((item, i) => (
            <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              
              {/* Content Card */}
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="p-8 bg-white border border-slate-100 rounded-[2.5rem] shadow-xl shadow-slate-200/50 hover:scale-105 transition-transform duration-500 relative">
                  <span className="text-4xl font-black text-slate-100 absolute top-4 right-8">{item.year}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 relative z-10">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed relative z-10">{item.desc}</p>
                </div>
              </div>

              {/* Icon Marker */}
              <div className="relative z-10 flex items-center justify-center">
                <div className={`${item.color} w-16 h-16 rounded-full flex items-center justify-center shadow-2xl shadow-blue-200 border-4 border-white`}>
                  {item.icon}
                </div>
              </div>

              {/* Empty Space for alignment */}
              <div className="w-full md:w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Award className="mx-auto text-[#1CB48D] mb-6" size={48} />
          <h2 className="text-3xl md:text-5xl font-black mb-8 italic">"Building the future, <br /> one message at a time."</h2>
          <div className="h-1 w-24 bg-[#0D66BA] mx-auto rounded-full"></div>
        </div>
      </section>
    </div>
  );
};

export default Journey;