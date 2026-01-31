import React, { useEffect } from 'react';
import { Target, Eye, Users, ShieldCheck, Zap, Globe } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    {
      title: "Reliability",
      desc: "99.9% uptime ke saath aapka har message sahi waqt par deliver hota hai.",
      icon: <ShieldCheck className="text-[#0D66BA]" size={30} />
    },
    {
      title: "Innovation",
      desc: "Hum hamesha nayi tech aur AI tools ka use karte hain communication ko asaan banane ke liye.",
      icon: <Zap className="text-[#1CB48D]" size={30} />
    },
    {
      title: "Global Reach",
      desc: "Sirf India hi nahi, hum duniya bhar ke 190+ countries mein SMS delivery karte hain.",
      icon: <Globe className="text-[#44BBDB]" size={30} />
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      
      {/* --- Section 1: Hero Story --- */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[#0D66BA] font-bold tracking-[0.2em] uppercase text-sm mb-4">Our Story</h1>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight mb-8">
              Empowering Businesses <br /> 
              <span className="text-[#1CB48D]">Through Connection</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Digidonar ki shuruat ek simple mission ke saath hui thi: **"Business communication ko itna asaan banana ki koi bhi enterprise apne customer se sirf ek click mein jud sake."**
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aaj hum India ke fastest-growing CPaaS platforms mein se ek hain, jo lakhon messages daily handle karte hain bina kisi rukawat ke.
            </p>
          </div>
          <div className="relative">
             <div className="absolute -inset-4 bg-[#1CB48D]/10 rounded-[3rem] rotate-3"></div>
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
               alt="Team Working" 
               className="relative rounded-[2.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
             />
          </div>
        </div>
      </section>

      {/* --- Section 2: Mission & Vision --- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="p-10 rounded-[3rem] bg-[#0D66BA] text-white relative overflow-hidden group">
            <Target className="absolute top-10 right-10 opacity-10 group-hover:scale-125 transition-transform duration-700" size={120} />
            <h3 className="text-3xl font-black mb-6">Our Mission</h3>
            <p className="text-blue-100 text-lg leading-relaxed relative z-10">
              Humara mission har size ke business ko wohi tools dena hai jo badi MNCs use karti hain. Hum technology aur affordability ke beech ka bridge banna chahte hain.
            </p>
          </div>
          {/* Vision */}
          <div className="p-10 rounded-[3rem] bg-[#1CB48D] text-white relative overflow-hidden group">
            <Eye className="absolute top-10 right-10 opacity-10 group-hover:scale-125 transition-transform duration-700" size={120} />
            <h3 className="text-3xl font-black mb-6">Our Vision</h3>
            <p className="text-emerald-50 text-lg leading-relaxed relative z-10">
              Hum ek aisa ecosystem banana chahte hain jahan automation itna seamless ho ki businesses apna saara dhyan sirf growth par lagayein, communication hum sambhaal lenge.
            </p>
          </div>
        </div>
      </section>

      {/* --- Section 3: Core Values --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900">What Drives Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0D66BA]/10 transition-colors">
                  {v.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{v.title}</h4>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Numbers/Stats Re-use --- */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Users className="mx-auto text-[#44BBDB] mb-6" size={48} />
          <h2 className="text-4xl font-black text-slate-900 mb-6">Built by experts, <br /> Trusted by thousands.</h2>
          <p className="text-gray-500 text-lg mb-10">
            Digidonar sirf ek software nahi, 50+ experts ki ek team hai jo din-raat kaam karti hai aapke har ek message ko safe aur fast pahuchane ke liye.
          </p>
          <div className="flex justify-center gap-4">
            <div className="h-1 w-20 bg-[#0D66BA] rounded-full"></div>
            <div className="h-1 w-10 bg-[#1CB48D] rounded-full"></div>
            <div className="h-1 w-5 bg-[#44BBDB] rounded-full"></div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;