import React from 'react';
import { Star, Quote } from 'lucide-react';

import logo1 from '../assets/bazaz.jpg';
import logo2 from '../assets/kia.png';
import logo3 from '../assets/ola.png';
import logo4 from '../assets/zomato2708.jpg';
import logo5 from '../assets/rejency.webp';

/* -------------------- Clients Logos -------------------- */
const clients = [
  { name: 'TechCorp', logo: logo1 },
  { name: 'CloudNine', logo: logo2 },
  { name: 'DataFlow', logo: logo3 },
  { name: 'QuickSMS', logo: logo4 },
  { name: 'SmartIVR', logo: logo5 },
];

/* -------------------- Testimonials -------------------- */
const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, RetailHub',
    content:
      'Digidonar ki Bulk SMS service se hamari sales 40% badh gayi hai. Delivery instant hai aur dashboard bahut user-friendly hai.',
    stars: 5,
  },
  {
    name: 'Anjali Sharma',
    role: 'Marketing Head, EduTech',
    content:
      'WhatsApp API integration ne hamara customer support automate kar diya. Best service in the market!',
    stars: 5,
  },
];

const Trust = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------------- Trusted Clients ---------------- */}
        <div className="text-center mb-16">
          <p className="text-slate-400 font-bold uppercase tracking-[0.25em] text-xs mb-10">
            Trusted by Industry Leaders
          </p>

          <div className="flex flex-wrap justify-center items-center gap-14 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {clients.map((client, i) => (
              <img
                key={i}
                src={client.logo}
                alt={client.name}
                className="h-8 md:h-10 w-auto"
              />
            ))}
          </div>
        </div>

        <hr className="border-slate-100 my-20" />

        {/* ---------------- Testimonials ---------------- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">

          {/* Left Content */}
          <div className="lg:col-span-1">
            <h2 className="text-[#1CB48D] font-bold text-sm uppercase tracking-widest mb-4">
              Testimonials
            </h2>

            <h3 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              What our <span className="text-[#0D66BA]">happy clients</span> say
            </h3>

            <p className="text-gray-500 text-lg mb-8">
              10,000+ business owners Digidonar par bharosa karte hain apni daily
              communication ke liye.
            </p>

            {/* Google Rating Card */}
            <div className="inline-flex items-center gap-4 bg-white border border-slate-200 rounded-2xl px-6 py-4 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 animate-fadeIn">

              {/* Google Logo */}
              <svg width="28" height="28" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.61l6.85-6.85C35.82 2.43 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.5 24c0-1.57-.14-3.09-.41-4.57H24v9.02h12.7c-.55 2.97-2.21 5.49-4.7 7.18l7.98 6.19C43.89 38.02 46.5 31.56 46.5 24z" />
                <path fill="#FBBC05" d="M10.54 28.41c-.48-1.45-.76-2.99-.76-4.41s.27-2.96.76-4.41l-7.98-6.19C.92 16.06 0 19.96 0 24c0 4.04.92 7.94 2.56 11.22l7.98-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.81l-7.98-6.19c-2.21 1.49-5.03 2.37-7.93 2.37-6.26 0-11.57-4.22-13.46-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>

              <div>
                <p className="font-bold text-slate-900 text-lg flex items-center gap-1">
                  4.8
                  <span className="text-[#FFC107]">★★★★★</span>
                </p>
                <p className="text-sm text-gray-500">
                  Rated on Google Reviews
                </p>
              </div>
            </div>
          </div>

          {/* Testimonials Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-slate-50 p-8 rounded-[2rem] relative group hover:bg-white hover:shadow-2xl transition-all duration-500 border border-transparent hover:border-slate-100"
              >
                <Quote
                  className="absolute top-8 right-8 text-[#44BBDB] opacity-20 group-hover:opacity-100 transition-opacity"
                  size={40}
                />

                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="#FFC107"
                      color="#FFC107"
                    />
                  ))}
                </div>

                <p className="text-slate-700 font-medium italic mb-8 leading-relaxed">
                  "{t.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#0D66BA] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Trust;
