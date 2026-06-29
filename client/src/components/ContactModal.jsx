import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle, Loader2 } from 'lucide-react';
import api from '../api';

const ContactModal = ({ isOpen, onClose, title }) => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [visible, setVisible] = useState(false);
  const timerRef = useRef(null);
  const closedThisSession = useRef(false); // Cut kiya? Session mein band

  // ─── Check: kya user ne pehle kabhi submit kiya tha? ───
  const isPermaBlocked = () => localStorage.getItem('contact_form_submitted') === 'true';

  // ─── Timer: sirf tab start hoga jab koi block nahi ───
  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      // Sirf open karo agar: submit nahi hua hamesha ke liye AND cut nahi kiya is session mein
      if (!isPermaBlocked() && !closedThisSession.current) {
        setVisible(true);
      }
    }, 10000);
  };

  // ─── Page load hote hi ───
  useEffect(() => {
    if (!isPermaBlocked()) {
      setVisible(true); // Turant open
      startTimer();     // 10 sec wala timer bhi shuru
    }
    return () => clearInterval(timerRef.current);
  }, []);

  // ─── Navbar se manually open kiya ───
  useEffect(() => {
    if (isOpen && !isPermaBlocked()) setVisible(true);
  }, [isOpen]);

  // ─── User ne X ya backdrop click kiya (cut) ───
  const handleClose = () => {
    closedThisSession.current = true; // Is session mein band — reload pe reset hoga
    clearInterval(timerRef.current);  // Timer bhi band
    setVisible(false);
    if (onClose) onClose();
  };

  // ─── Form submit ───
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      phone: e.target[2].value,
      service: title || "General Inquiry",
    };

    try {
      await api.post('/leads', formData);
      setSubmitted(true);
      localStorage.setItem('contact_form_submitted', 'true'); // Hamesha ke liye band
      clearInterval(timerRef.current); // Timer bhi permanently band
      setTimeout(() => {
        setSubmitted(false);
        setVisible(false);
        if (onClose) onClose();
      }, 3000);
    } catch (err) {
      console.error(err);
      alert("Technical issue! Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Dark Backdrop */}
      <div
        className="absolute inset-0 bg-slate-950/40 backdrop-blur-md transition-all duration-300"
        onClick={handleClose}
      />

      {/* Modal Box */}
      <div className="relative z-10 w-full max-w-lg bg-white/95 backdrop-blur-lg rounded-[2.5rem] border border-slate-100 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.3)] overflow-hidden transform transition-all duration-300 scale-100">
        <div className="p-8 md:p-11">

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-900 bg-slate-50 hover:bg-slate-100 rounded-full transition-all duration-200"
            aria-label="Close"
          >
            <X size={20} />
          </button>

          {submitted ? (
            /* ── Success Screen ── */
            <div className="text-center py-10 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-emerald-100 animate-bounce">
                <CheckCircle size={38} />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Thank You!</h3>
              <p className="text-slate-500 font-medium max-w-xs mx-auto">
                Hume aapki details mil gayi hain. Hum jaldi hi connect karenge.
              </p>
            </div>
          ) : (
            /* ── Form Screen ── */
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
                {[
                  { placeholder: "Full Name",     type: "text"  },
                  { placeholder: "Work Email",    type: "email" },
                  { placeholder: "Phone Number",  type: "tel"   },
                ].map(({ placeholder, type }, idx) => (
                  <div key={idx}>
                    <input
                      type={type}
                      placeholder={placeholder}
                      required
                      className="w-full bg-slate-50 border border-slate-200/80 rounded-2xl py-4 px-6 text-slate-900 font-medium placeholder-slate-400 focus:outline-none focus:bg-white focus:border-[#0D66BA] focus:ring-4 focus:ring-[#0D66BA]/10 transition-all duration-200"
                    />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 bg-gradient-to-r from-[#0D66BA] to-[#1CB48D] text-white py-[1.125rem] rounded-2xl font-black text-base flex items-center justify-center gap-2.5 shadow-xl shadow-blue-500/10 hover:shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-75 disabled:pointer-events-none"
                >
                  {loading ? (
                    <>
                      <span>Processing...</span>
                      <Loader2 className="animate-spin" size={20} />
                    </>
                  ) : (
                    <>
                      <span>Confirm &amp; Start</span>
                      <Send size={18} className="translate-x-[1px] -translate-y-[1px]" />
                    </>
                  )}
                </button>
              </form>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 bg-emerald-50/70 border border-emerald-100/50 py-3 rounded-2xl">
                <CheckCircle size={14} className="text-[#1CB48D]" />
                <span className="text-[10px] font-bold tracking-wide uppercase text-[#1CB48D]">
                  Instant Activation • No CC Required
                </span>
              </div>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default ContactModal;
