import React, { useState } from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import ContactModal from '../components/ContactModal'; // Ensure path is correct

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Apna sales number yahan daalein
  const salesNumber = "+919214122123"; 

  return (
    <>
      <section className="relative w-full py-12 md:py-14 overflow-hidden bg-slate-950">
        
        {/* Background glow */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-[#0D66BA]/20 via-[#44BBDB]/15 to-[#1CB48D]/20 blur-[100px]" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.2rem] px-6 md:px-14 py-10 text-center shadow-[0_25px_70px_-30px_rgba(0,0,0,0.7)]">

            {/* Icon */}
            <div className="mx-auto w-12 h-12 mb-4 rounded-xl bg-gradient-to-br from-[#44BBDB] to-[#1CB48D] flex items-center justify-center">
              <Zap size={22} className="text-slate-900" />
            </div>

            {/* Heading */}
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-snug tracking-tight mb-4">
              Upgrade your business
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#44BBDB] to-[#1CB48D]">
                communication experience
              </span>
            </h2>

            {/* Subheading */}
            <p className="max-w-xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed mb-6">
              Trusted by <span className="text-white font-semibold">10,000+</span> businesses for
              Bulk SMS, WhatsApp API & Voice solutions.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              {/* Trigger Modal */}
              <button 
                onClick={() => setIsModalOpen(true)}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-blue-900/30"
              >
                Start Free Trial
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Trigger Dialer */}
              <a 
                href={`tel:${salesNumber}`}
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm text-white border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl transition-all duration-300"
              >
                Talk to Sales
              </a>
            </div>

            {/* Trust line */}
            <div className="mt-5 flex items-center justify-center gap-2 text-slate-500 text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1CB48D]" />
              No credit card required • Cancel anytime
            </div>

          </div>
        </div>
      </section>

      {/* Integration with ContactModal */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Claim Your Free Trial"
      />
    </>
  );
};

export default CTA;