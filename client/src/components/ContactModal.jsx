import React, { useState } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import axios from 'axios';

const ContactModal = ({ isOpen, onClose, title }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Form data collect karna
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      service: title || "General Inquiry",
    };

    try {
      // Backend URL (Production ke waqt ise replace karein)
      await axios.post('https://digidonar-api.onrender.com/api/leads', formData);
      
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 3000); // 3 second baad automatic close
    } catch (err) {
      console.error("Error saving lead:", err);
      alert("Technical issue! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop with Blur */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>
      
      {/* Modal Card */}
      <div className="bg-white w-full max-w-lg rounded-[2.5rem] shadow-2xl relative z-10 overflow-hidden animate-in zoom-in duration-300">
        <div className="p-8 md:p-12">
          
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-900 transition-colors p-2"
          >
            <X size={24} />
          </button>

          {submitted ? (
            /* Success State */
            <div className="py-10 text-center animate-in fade-in zoom-in">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2">Thank You!</h3>
              <p className="text-slate-500 text-lg">Hume aapki details mil gayi hain. Hum jaldi hi connect karenge.</p>
            </div>
          ) : (
            /* Form State */
            <>
              <div className="mb-8">
                <h3 className="text-3xl font-black text-slate-900 mb-2 leading-tight">
                  {title || "Get a Free Demo"}
                </h3>
                <p className="text-slate-500 font-medium italic">
                  Enter details to unlock premium access.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <input 
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold" 
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="email" 
                    placeholder="Work Email" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold" 
                  />
                </div>
                <div className="space-y-1">
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    required 
                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-[#0D66BA] focus:ring-4 focus:ring-blue-50 transition-all font-semibold" 
                  />
                </div>
                
                <button 
                  disabled={loading}
                  className="w-full bg-[#0D66BA] text-white py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 hover:bg-slate-900 transition-all shadow-xl shadow-blue-100 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {loading ? (
                    <Loader2 className="animate-spin" size={24} />
                  ) : (
                    <>
                      Confirm & Start <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-[#1CB48D] bg-emerald-50 py-2 rounded-full">
                <CheckCircle size={14} /> <span>Instant Activation • No CC Required</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;