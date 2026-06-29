import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    q: "What is DLT Registration and is it mandatory?",
    a: "As per TRAI guidelines, DLT registration is compulsory for Bulk SMS services in India. Our team will guide you through the entire registration process."
  },
  {
    q: "Can I integrate WhatsApp API with my CRM?",
    a: "Absolutely! Our APIs are developer-friendly. You can integrate them with Zoho, Salesforce, or any custom CRM in just 5 minutes."
  },
  {
    q: "Is the SMS delivery report real-time?",
    a: "Yes, as soon as an SMS is delivered, you get an instant status update (Delivered/Failed) on your dashboard."
  },
  {
    q: "Is Digidonar support available 24/7?",
    a: "Yes, our support team is available 24/7 for all Business and Professional plan users."
  }
];

const FAQ = () => {
  // Yahan 0 daal diya hai taaki pehla item (index 0) starting se hi open rahe
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-[#1CB48D] font-bold text-sm uppercase tracking-widest mb-4">Your Questions, Our Answers</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h3>
          <p className="text-slate-400 font-medium max-w-xl mx-auto">If your question isn't listed here, please contact our sales team.</p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-[2rem] transition-all duration-300 overflow-hidden
                ${openIndex === i ? 'shadow-xl shadow-blue-500/10 border-transparent' : 'border-slate-100 hover:border-slate-200 bg-slate-50/60'}`}
              style={{
                background: openIndex === i 
                  ? 'linear-gradient(135deg, #0D66BA 0%, #1CB48D 100%)' 
                  : ''
              }}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-7 text-left group"
              >
                <span className={`font-extrabold md:text-lg transition-colors duration-200 ${openIndex === i ? 'text-white' : 'text-slate-900'}`}>
                  {faq.q}
                </span>
                {openIndex === i ? (
                  <Minus className="text-white flex-shrink-0 transition-transform duration-200" size={20} />
                ) : (
                  <Plus className="text-slate-400 group-hover:text-slate-900 flex-shrink-0 transition-transform duration-200" size={20} />
                )}
              </button>
              
              {openIndex === i && (
                <div className="px-7 pb-7 text-white/90 font-medium md:text-base leading-relaxed animate-in fade-in slide-in-from-top-2 duration-200">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
