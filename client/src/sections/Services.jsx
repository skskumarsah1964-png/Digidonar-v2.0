import React from 'react';
import { Link } from 'react-router-dom'; // Link import karna na bhoolein

const services = [
  {
    title: "Bulk SMS Solutions",
    path: "/services/bulk-sms", // Naya Path add kiya
    description: "Send transactional and promotional SMS instantly with 99.9% delivery assurance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>
    ),
    color: "#0D66BA",
    lightColor: "bg-blue-50"
  },
  {
    title: "WhatsApp Business API",
    path: "/services/whatsapp-api", // Naya Path add kiya
    description: "Engage customers on their favorite messaging app with automated chatbots and alerts.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
    ),
    color: "#1CB48D",
    lightColor: "bg-emerald-50"
  },
  {
    title: "Voice & IVR Services",
    path: "/services/voice-ivr", // Naya Path add kiya
    description: "Automate your business calls with smart IVR systems and virtual mobile numbers.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
    ),
    color: "#44BBDB",
    lightColor: "bg-cyan-50"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#0D66BA] font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Powerful Tools for <span className="text-[#1CB48D]">Modern Teams</span>
          </h3>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Everything you need to communicate effectively with your customers, all in one integrated dashboard.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link 
              to={service.path} // Link yahan wrap kiya hai
              key={index}
              className="group p-8 bg-white rounded-3xl border border-gray-100 hover:border-transparent hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 cursor-pointer block"
            >
              <div 
                className={`w-16 h-16 ${service.lightColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                style={{ color: service.color }}
              >
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-bold transition-all group-hover:gap-2" style={{ color: service.color }}>
                Learn More 
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;