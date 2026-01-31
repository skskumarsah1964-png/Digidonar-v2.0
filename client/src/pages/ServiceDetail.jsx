import React, { useEffect } from 'react';
import { 
  CheckCircle2, ArrowRight, Zap, Shield, BarChart3, 
  MessageSquare, Smartphone, HardDrive, PhoneIncoming, 
  Key, Layers, Globe, MousePointer2 
} from 'lucide-react';

const SERVICE_DATA = {
  "bulk-sms": {
    title: "Bulk SMS Solutions",
    subtitle: "High-Volume Messaging",
    desc: "India ke sabse bharosemand gateway se lakhon SMS bhein ek click mein. Promotional aur Transactional dono ke liye best.",
    features: ["DLT Template Support", "Smart Scheduling", "Regional Language Support", "Unicode Messaging"],
    icon: <MessageSquare size={60} strokeWidth={1.5} />,
    color: "text-[#0D66BA]",
    bg: "bg-[#0D66BA]",
    accent: "from-[#0D66BA] to-[#44BBDB]",
    stats: { delivery: "99.8%", speed: "2s", users: "5k+" }
  },
  "whatsapp-api": {
    title: "WhatsApp Business API",
    subtitle: "Modern Engagement",
    desc: "WhatsApp par apne customers se judiye. Automated chatbots aur official green tick verification ke saath branding badhaiye.",
    features: ["Chatbot Integration", "Shared Team Inbox", "Rich Media Support", "Automated Notifications"],
    icon: <Smartphone size={60} strokeWidth={1.5} />,
    color: "text-[#1CB48D]",
    bg: "bg-[#1CB48D]",
    accent: "from-[#1CB48D] to-[#34d399]",
    stats: { delivery: "100%", speed: "Instant", users: "2k+" }
  },
  "voice-ivr": {
    title: "Voice & IVR Services",
    subtitle: "Cloud Telephony",
    desc: "Professional IVR menu setup karein. Automated calls aur missed call alerts se leads capture karna asaan banayein.",
    features: ["Multi-level IVR", "Call Recording", "Virtual Numbers", "Real-time Call Logs"],
    icon: <PhoneIncoming size={60} strokeWidth={1.5} />,
    color: "text-[#44BBDB]",
    bg: "bg-[#44BBDB]",
    accent: "from-[#44BBDB] to-[#0D66BA]",
    stats: { channels: "Unlimited", uptime: "99.9%", users: "1.5k" }
  },
  "otp-service": {
    title: "Secure OTP Service",
    subtitle: "Instant Authentication",
    desc: "99.9% delivery rate aur sub-2 second speed ke saath user authentication ko secure banayein. Banking grade security.",
    features: ["Sub-2 Sec Delivery", "Global Coverage", "Failover Routing", "Direct Operator Pipe"],
    icon: <Key size={60} strokeWidth={1.5} />,
    color: "text-orange-500",
    bg: "bg-orange-500",
    accent: "from-orange-500 to-yellow-500",
    stats: { delivery: "99.99%", speed: "1.5s", users: "3k+" }
  },
  "sms-gateway": {
    title: "Robust SMS Gateway",
    subtitle: "Developer First API",
    desc: "Hamari powerful HTTP/SMPP APIs ko apne software mein integrate karein. Developers ke liye bani sabse asaan documentation.",
    features: ["HTTP/SMPP APIs", "JSON/XML Support", "Unlimited Throughput", "Webhook Integration"],
    icon: <HardDrive size={60} strokeWidth={1.5} />,
    color: "text-indigo-600",
    bg: "bg-indigo-600",
    accent: "from-indigo-600 to-purple-600",
    stats: { uptime: "99.95%", latancy: "<50ms", users: "800+" }
  }
};

const ServiceDetail = ({ serviceType }) => {
  const data = SERVICE_DATA[serviceType];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceType]);

  if (!data) return <div className="pt-32 text-center text-2xl font-bold">Service Not Found</div>;

  return (
    <div className="pt-20 min-h-screen bg-white selection:bg-slate-900 selection:text-white">
      
      {/* --- PREMIUM HERO SECTION --- */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Mesh Gradients */}
        <div className={`absolute top-0 right-0 w-[500px] h-[500px] ${data.bg}/10 blur-[120px] rounded-full -mr-48 -mt-24 rotate-12`}></div>
        <div className={`absolute bottom-0 left-0 w-[400px] h-[400px] ${data.bg}/5 blur-[100px] rounded-full -ml-24 -mb-24`}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <div className="animate-in fade-in slide-in-from-left-8 duration-700">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${data.bg}/10 ${data.color} font-bold text-xs uppercase tracking-[0.2em] mb-6`}>
                <Zap size={14} fill="currentColor" /> {data.subtitle}
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                {data.title.split(' ')[0]} <br />
                <span className={`bg-gradient-to-r ${data.accent} bg-clip-text text-transparent`}>
                  {data.title.split(' ').slice(1).join(' ')}
                </span>
              </h1>
              <p className="text-slate-500 text-xl leading-relaxed mb-10 max-w-lg">
                {data.desc}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5">
                <button className={`bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:shadow-2xl hover:shadow-slate-300 transition-all group`}>
                  Get Started for Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="border border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                  Documentation
                </button>
              </div>
            </div>

            {/* Right Side Glass Card */}
            <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000">
              <div className="relative bg-white/40 backdrop-blur-xl border border-white/40 p-10 md:p-16 rounded-[4rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${data.accent} opacity-10 rounded-full -mr-16 -mt-16`}></div>
                
                <div className={`${data.color} mb-10 inline-block p-5 bg-white rounded-3xl shadow-xl shadow-slate-100`}>
                  {data.icon}
                </div>

                <div className="grid grid-cols-1 gap-5">
                  {data.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-4 group">
                      <div className={`w-8 h-8 rounded-full ${data.bg}/10 flex items-center justify-center ${data.color} group-hover:scale-110 transition-transform`}>
                        <CheckCircle2 size={18} strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 font-bold text-lg">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Micro-Stats inside card */}
                <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-3 gap-4">
                  {Object.entries(data.stats).map(([key, val]) => (
                    <div key={key}>
                      <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">{key}</p>
                      <p className={`text-xl font-black ${data.color}`}>{val}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS / PROCESS --- */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Simple 3-Step Setup</h3>
            <div className={`h-1.5 w-24 bg-gradient-to-r ${data.accent} mx-auto rounded-full`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { i: "01", t: "Sign Up", d: "Apna free account create karein aur dashboard access payein.", ic: <MousePointer2 /> },
              { i: "02", t: "Configure", d: "APIs integrate karein ya DLT templates approve karwayein.", ic: <Layers /> },
              { i: "03", t: "Go Live", d: "Pura setup hone ke baad apne customers ko messages bhejna shuru karein.", ic: <Globe /> }
            ].map((step, idx) => (
              <div key={idx} className="relative group p-10 bg-white rounded-[3rem] border border-slate-100 hover:shadow-2xl transition-all duration-500">
                <div className="absolute top-8 right-8 text-6xl font-black text-slate-50 group-hover:text-slate-100 transition-colors">{step.i}</div>
                <div className={`w-14 h-14 rounded-2xl ${data.bg}/10 ${data.color} flex items-center justify-center mb-6 relative z-10`}>
                  {step.ic}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 relative z-10">{step.t}</h4>
                <p className="text-slate-500 leading-relaxed relative z-10">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-around items-center gap-8 opacity-40 grayscale">
          {/* Yahan brands ke logo ya icons ho sakte hain */}
          <div className="font-black text-2xl tracking-tighter">FINTECH</div>
          <div className="font-black text-2xl tracking-tighter">ECOMMERCE</div>
          <div className="font-black text-2xl tracking-tighter">LOGISTICS</div>
          <div className="font-black text-2xl tracking-tighter">HEALTHCARE</div>
        </div>
      </section>

    </div>
  );
};

export default ServiceDetail;