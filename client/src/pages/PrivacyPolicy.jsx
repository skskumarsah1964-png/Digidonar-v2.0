import React, { useEffect } from 'react';
import { ShieldCheck, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. Information We Collect",
      icon: <FileText className="text-[#0D66BA]" size={24} />,
      content: "Hum sirf wahi details collect karte hain jo aap humein service ke liye dete hain, jaise Name, Business Email, Phone Number aur DLT registration details. Hum aapke contacts ya messages ka data kisi teesre paksh (third party) ko nahi dete."
    },
    {
      title: "2. How We Use Your Data",
      icon: <Eye className="text-[#1CB48D]" size={24} />,
      content: "Aapka data sirf transactional aur promotional alerts bhejne, account manage karne aur technical support dene ke liye use kiya jata hai. Hum spamming ke sakht khilaaf hain."
    },
    {
      title: "3. Data Security",
      icon: <Lock className="text-[#44BBDB]" size={24} />,
      content: "Digidonar enterprise-grade encryption use karta hai. Aapka har message aur API request SSL-secured hoti hai taaki koi unauthorized access na ho sake."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6">
            <ShieldCheck className="text-[#0D66BA]" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Last Updated: January 2026</p>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <p className="text-slate-600 mb-10 leading-relaxed text-lg italic border-l-4 border-[#1CB48D] pl-6">
            Digidonar Teleservices mein hum aapki privacy ki dil se izzat karte hain. Ye document batata hai ki hum kaise aapka data handle karte hain.
          </p>

          <div className="space-y-12">
            {sections.map((section, i) => (
              <div key={i} className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                </div>
                <p className="text-slate-600 leading-relaxed ml-12">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          {/* Contact for Privacy */}
          <div className="mt-16 p-8 bg-slate-950 rounded-3xl text-white">
            <h3 className="text-xl font-bold mb-2 text-[#44BBDB]">Questions about Privacy?</h3>
            <p className="text-slate-400 mb-6">Agar aapko apne data se juda koi sawal hai, toh humein niche di gayi email par likhein.</p>
            <a href="mailto:privacy@digidonar.com" className="text-white font-bold border-b-2 border-[#1CB48D] hover:text-[#1CB48D] transition-all">
              privacy@digidonar.com
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;