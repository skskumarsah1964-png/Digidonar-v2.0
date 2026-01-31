import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ_DATA = [
  {
    q: "DLT Registration kya hai aur kya ye zaroori hai?",
    a: "Haan bhai, TRAI ke rules ke mutabiq India mein Bulk SMS bhejne ke liye DLT registration compulsory hai. Humari team aapko registration process mein poori help karegi."
  },
  {
    q: "Kya main WhatsApp API ko apne CRM se jod sakta hoon?",
    a: "Bilkul! Humari APIs developer-friendly hain. Aap ise Zoho, Salesforce ya kisi bhi custom CRM ke saath 5 minute mein integrate kar sakte hain."
  },
  {
    q: "SMS delivery report real-time hoti hai?",
    a: "Ji haan, jaise hi SMS deliver hota hai, aapko dashboard par instant status (Delivered/Failed) dikh jata hai."
  },
  {
    q: "Kya Digidonar support 24/7 available hai?",
    a: "Humare Business aur Professional plans mein dedicated support manager milta hai jo 24/7 aapki queries solve karta hai."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#1CB48D] font-bold text-sm uppercase tracking-widest mb-4">Aapke Sawal, Humare Jawab</h2>
          <h3 className="text-4xl font-black text-slate-900 mb-4">Frequently Asked Questions</h3>
          <p className="text-gray-500">Agar aapka sawal yahan nahi hai, toh humein contact sales karein.</p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-3xl transition-all duration-300 ${openIndex === i ? 'border-[#0D66BA] bg-blue-50/30' : 'border-slate-100 bg-slate-50'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-bold text-slate-900 md:text-lg">{faq.q}</span>
                {openIndex === i ? (
                  <Minus className="text-[#0D66BA] flex-shrink-0" size={20} />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" size={20} />
                )}
              </button>
              {openIndex === i && (
                <div className="px-6 pb-6 text-slate-600 leading-relaxed animate-in fade-in slide-in-from-top-2">
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