import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import api from '../api';

const ContactModal = ({ isOpen, onClose, title }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  // Internal state: Shuruat mein hi check karega ki kya browser session mein pehle se closed save hai ya nahi
  const [isAutoOpen, setIsAutoOpen] = useState(() => {
    const isFormClosedByUser = sessionStorage.getItem('contact_modal_closed');
    return isFormClosedByUser !== 'true'; // Agar 'true' nahi hai, toh open ho jaega (reload par bhi)
  });

  // Agar Navbar se click hoke alag se open kiya jaye
  useEffect(() => {
    if (isOpen) {
      setIsAutoOpen(true);
    }
  }, [isOpen]);

  // Jab user 'X' button dabakar ya backdrop par click karke form cut karega
  const handleClose = () => {
    sessionStorage.setItem('contact_modal_closed', 'true'); // Browser memory mein set kar diya ki user ne cut kar diya hai
    setIsAutoOpen(false);
    if (onClose) onClose(); // Navbar ki state ko bhi sync kar dega
  };

  // Agar dono jagah se closed hai toh screen par kuch mat dikhao
  if (!isOpen && !isAutoOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // BACKEND CONNECTION: Bilkul safe aur unchanged
    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      service: title || "General Inquiry",
    };

    try {
      await api.post('/leads', formData);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        handleClose(); // Submit hone ke baad popup hamesha ke liye close ho jayega
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Technical issue! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Premium Dark Backdrop blur */}
      <div 
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-all duration-300" 
        onClick={handleClose}
      ></div>

      {/* Main Glass-Finish Modal Box */}
      <div className="bg-white/95 backdrop-blur-lg w-full max-w-lg rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] relative z-10 overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100">
        <div className="p-8 md:p-11">
          
          {/* Close Icon */}
          <button 
            onClick={handleClose} 
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-200"
          >
            <X size={20} />
          </button>

          {submitted ? (
            /* Success Response Block */
            <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100 animate-bounce">
                <CheckCircle size={38} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Thank You!</h3>
              <p className="text-slate-500 font-medium max-w-xs mx-auto">Hume aapki details mil gayi hain. Hum jaldi hi connect karenge.</p>
            </div>
          ) : (
            /* Main Input Form Screen */
            <>
              <div className="mb-6">
                <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-2">
                  {title || "Get a Free Demo"}
                </h3>
                <p className="text-slate-400 font-medium text-sm">
                  Enter details below to unlock premium dashboard access.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                {["Full Name", "Work Email", "Phone Number"].map((placeholder, idx) => (
                  <div key={idx} className="relative">
                    <input
                      type={placeholder === "Work Email" ? "email" : "text"}
                      placeholder={placeholder}
                      required
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl py-4 px-6 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-[#0D66BA]/10 transition-all duration-200"
                    />
                  </div>
                ))}

                {/* Submit Action Button */}
                <button
                  disabled={loading}
                  className="w-full mt-2 bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] text-white py-4.5 rounded-2xl font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/10 hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <span>Processing...</span>
                      <Loader2 className="animate-spin" size={20} />
                    </>
                  ) : (
                    <>
                      <span>Confirm & Start</span>
                      <Send size={18} className="translate-x-[1px] -translate-y-[1px]" />
                    </>
                  )}
                </button>
              </form>

              {/* Bottom Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-[#1CB48D] bg-emerald-50/70 border border-emerald-100/50 py-3 rounded-2xl">
                <CheckCircle size={14} className="text-[#1CB48D]" /> 
                <span className="tracking-wide uppercase text-[10px]">Instant Activation • No CC Required</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
