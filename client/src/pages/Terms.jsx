import React, { useEffect } from 'react';
import { Scale, CheckCircle, AlertTriangle, HelpCircle } from 'lucide-react';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const points = [
    {
      title: "1. Service Usage",
      icon: <CheckCircle className="text-[#1CB48D]" size={24} />,
      content: "Digidonar ki services sirf legal business communication ke liye hain. Kisi bhi tarah ka spam, fraud ya illegal content bhejna sakht mana hai. Aisa karne par account bina notice ke block kiya ja sakta hai."
    },
    {
      title: "2. Payment & Refunds",
      icon: <Scale className="text-[#0D66BA]" size={24} />,
      content: "Sari payments advance mein honi chahiye. SMS credits ki validity aapke plan par depend karti hai. Ek baar credits use hone par refund nahi kiya jayega."
    },
    {
      title: "3. DLT Compliance",
      icon: <AlertTriangle className="text-orange-500" size={24} />,
      content: "User ko TRAI ke rules aur DLT platform ki guidelines follow karni hongi. Header aur Template approve karwana user ki zimmedari hai, halaki hum isme poori help karte hain."
    }
  ];

  return (
    <div className="pt-32 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-2xl mb-6">
            <Scale className="text-orange-600" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Terms & Conditions</h1>
          <p className="text-gray-500 font-medium">Agreement between Digidonar and the User</p>
        </div>

        {/* Content Box */}
        <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
          <div className="space-y-12">
            {points.map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h2>
                  <p className="text-slate-600 leading-relaxed">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Important Note */}
          <div className="mt-16 p-8 bg-blue-50 border border-blue-100 rounded-3xl flex gap-4 items-start">
            <HelpCircle className="text-[#0D66BA] flex-shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-[#0D66BA] mb-1">Help needed?</h4>
              <p className="text-blue-900/70 text-sm leading-relaxed">
                Agar aapko kisi term ka matlab samajh nahi aa raha, toh aap humari legal team se baat kar sakte hain: <span className="font-bold">legal@digidonar.com</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Terms;