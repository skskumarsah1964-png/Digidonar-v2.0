import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const stats = [
  { label: "Messages Sent", value: 500, suffix: "M+", color: "#0D66BA" },
  { label: "Active Clients", value: 10, suffix: "K+", color: "#1CB48D" },
  { label: "Delivery Rate", value: 99.9, suffix: "%", color: "#44BBDB", decimals: 1 },
  { label: "Support", value: 24, suffix: "/7", color: "#0D66BA" },
];

const Features = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ek baar scroll pe aane par hi count ho
    threshold: 0.3,
  });

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Modern Stats Grid - Ab ye boring nahi dikhega */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="relative group p-8 rounded-[2rem] bg-slate-50 border border-transparent hover:border-gray-200 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 text-center overflow-hidden"
            >
              {/* Background Glow on Hover */}
              <div 
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                style={{ backgroundColor: stat.color }}
              ></div>

              <h3 
                className="text-4xl md:text-5xl font-black mb-2 tracking-tighter"
                style={{ color: stat.color }}
              >
                {inView ? (
                  <CountUp 
                    end={stat.value} 
                    duration={2.5} 
                    decimals={stat.decimals || 0} 
                    suffix={stat.suffix} 
                  />
                ) : "0"}
              </h3>
              <p className="text-gray-500 text-xs md:text-sm font-bold uppercase tracking-widest group-hover:text-slate-900 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Why Choose Us - Enhanced Visuals */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Why leading enterprises <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0D66BA] to-[#1CB48D]">choose Digidonar?</span>
            </h3>
            
            <div className="space-y-6">
              {[
                { t: "Tier-1 Connectivity", d: "Direct integration with major operators for lightning-fast delivery.", c: "#0D66BA" },
                { t: "Scalable Infrastructure", d: "Hamara platform lakhon requests ek saath handle kar sakta hai.", c: "#1CB48D" },
                { t: "Developer Friendly", d: "Simple REST APIs jo 5 minute mein integrate ho jati hain.", c: "#44BBDB" }
              ].map((item, i) => (
                <div key={i} className="group flex gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-all duration-300">
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" 
                    style={{backgroundColor: item.c}}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-sm md:text-base">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Professional Glass Mockup */}
          <div className="relative group">
             <div className="absolute -inset-4 bg-gradient-to-tr from-[#0D66BA] to-[#44BBDB] rounded-[3rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity"></div>
             <div className="relative bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border border-white/10">
                <div className="flex gap-2 mb-8">
                   <div className="w-3 h-3 rounded-full bg-red-400"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                   <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-5">
                   <div className="h-3 w-1/2 bg-white/10 rounded-full animate-pulse"></div>
                   <div className="grid grid-cols-3 gap-3">
                      <div className="h-20 bg-white/5 rounded-2xl border border-white/5"></div>
                      <div className="h-20 bg-[#1CB48D]/20 rounded-2xl border border-[#1CB48D]/20"></div>
                      <div className="h-20 bg-white/5 rounded-2xl border border-white/5"></div>
                   </div>
                   <div className="h-32 bg-gradient-to-b from-white/5 to-transparent rounded-2xl border border-white/5 p-4 flex items-end">
                      <div className="w-full h-1 bg-white/10 rounded-full relative overflow-hidden">
                         <div className="absolute top-0 left-0 h-full w-2/3 bg-[#44BBDB] animate-infinite-scroll"></div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;