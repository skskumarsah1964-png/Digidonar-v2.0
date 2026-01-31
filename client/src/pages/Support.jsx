import React, { useEffect } from 'react';
import { MessageCircle, Mail, Phone, BookOpen, Search, LifeBuoy } from 'lucide-react';

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactOptions = [
    {
      title: "WhatsApp Support",
      desc: "Instant chat ke liye best hai.",
      info: "+91 98765 43210",
      icon: <MessageCircle size={30} />,
      color: "bg-[#1CB48D]",
      link: "https://wa.me/919876543210"
    },
    {
      title: "Email Ticket",
      desc: "Detailed queries ke liye.",
      info: "support@digidonar.com",
      icon: <Mail size={30} />,
      color: "bg-[#0D66BA]",
      link: "mailto:support@digidonar.com"
    },
    {
      title: "Voice Support",
      desc: "Direct expert se baat karein.",
      info: "1800-123-4567",
      icon: <Phone size={30} />,
      color: "bg-[#44BBDB]",
      link: "tel:18001234567"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* --- Header Section --- */}
      <section className="bg-slate-950 py-20 px-6 text-center text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <LifeBuoy className="mx-auto text-[#44BBDB] mb-6 animate-spin-slow" size={48} />
          <h1 className="text-4xl md:text-6xl font-black mb-6">How can we <span className="text-[#1CB48D]">help you?</span></h1>
          
          <div className="relative max-w-xl mx-auto">
            <input 
              type="text" 
              placeholder="Search for articles, DLT help, or APIs..." 
              className="w-full bg-white/10 border border-white/20 rounded-2xl py-5 px-12 focus:outline-none focus:bg-white focus:text-slate-900 transition-all"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </section>

      {/* --- Contact Channels --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactOptions.map((item, i) => (
            <a 
              href={item.link} 
              key={i} 
              className="p-8 rounded-[2.5rem] border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 group text-center"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.desc}</p>
              <p className="text-[#0D66BA] font-bold">{item.info}</p>
            </a>
          ))}
        </div>
      </section>

      {/* --- Quick Help Categories --- */}
      <section className="pb-24 px-6 max-w-7xl mx-auto">
        <div className="bg-slate-50 rounded-[3rem] p-8 md:p-16">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="text-[#0D66BA]" size={32} />
            <h2 className="text-3xl font-black text-slate-900">Knowledge Base</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['DLT Registration', 'WhatsApp API Guide', 'SMS Integration', 'Billing & Invoices', 'Developer Docs', 'Sender ID Approval', 'Campaign Scheduling', 'Two-Factor Auth'].map((topic, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl hover:text-[#0D66BA] cursor-pointer transition-colors border border-slate-200/50 shadow-sm flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#1CB48D]"></div>
                <span className="font-semibold text-slate-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Bottom CTA --- */}
      <section className="pb-24 text-center">
        <p className="text-gray-500 mb-6 font-medium">Nahi mila jo dhoond rahe the?</p>
        <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-[#0D66BA] transition-all shadow-xl">
          Submit a Request Ticket
        </button>
      </section>
    </div>
  );
};

export default Support;