import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/digi.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { Icon: Facebook, link: 'https://www.facebook.com/digidonar' },
    { Icon: Twitter, link: 'https://x.com/digidonar' },
    { Icon: Instagram, link: 'https://www.instagram.com/digidonar/' },
    { Icon: Linkedin, link: 'https://www.linkedin.com/company/35708863/' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-300">

      {/* Gradient Top Divider */}
      <div className="h-[1.5px] w-full bg-gradient-to-r from-transparent via-[#44BBDB]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src={Logo}
                alt="Digidonar Logo"
                className="h-9 md:h-10 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              India’s trusted cloud communication platform for Bulk SMS, WhatsApp API & IVR solutions.
            </p>

            <div className="flex gap-3">
              {socials.map(({ Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-white/20 transition"
                >
                  <Icon size={16} className="text-slate-400 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/services/bulk-sms" className="hover:text-[#44BBDB]">Bulk SMS</Link></li>
              <li><Link to="/services/whatsapp-api" className="hover:text-[#44BBDB]">WhatsApp API</Link></li>
              <li><Link to="/services/voice-ivr" className="hover:text-[#44BBDB]">Voice & IVR</Link></li>
              <li><Link to="/services/otp-service" className="hover:text-[#44BBDB]">OTP Service</Link></li>
              <li><Link to="/services/sms-gateway" className="hover:text-[#44BBDB]">SMS Gateway</Link></li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h4 className="text-white font-semibold text-base mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: 'About Us', path: '/about' },
                { name: 'Contact Sales', path: '/contact' },
                { name: 'Privacy Policy', path: '/privacy-policy' },
                { name: 'Terms', path: '/terms' },
                { name: 'Support', path: '/support' }
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="hover:text-[#44BBDB] transition-colors duration-300 flex items-center group"
                  >
                    {/* Halka sa arrow icon jo hover par dikhega */}
                    <span className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 mr-2 text-[#1CB48D]">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold text-base">Stay Updated</h4>
            <p className="text-xs text-slate-400">Get product updates & insights.</p>

            <div className="relative">
              <input
                type="email"
                placeholder="Email address"
                className="w-full bg-slate-900 border border-slate-800 rounded-xl py-2.5 px-4 text-sm focus:outline-none focus:border-[#44BBDB]"
              />
              <button className="absolute right-1.5 top-1.5 bg-[#0D66BA] p-2 rounded-lg hover:bg-[#44BBDB] transition">
                <Send size={14} className="text-white" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-slate-500">
            © {currentYear} Digidonar Teleservices. All rights reserved.
          </p>

          <div className="flex gap-6 uppercase tracking-widest text-slate-500 font-semibold">
            <span>Security</span>
            <span>Uptime 99.9%</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;