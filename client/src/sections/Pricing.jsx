import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹1,999",
    description: "Perfect for small businesses starting their journey.",
    features: ["5,000 SMS Credits", "Basic API Access", "Email Support", "Standard Delivery"],
    buttonColor: "border-[#0D66BA] text-[#0D66BA] hover:bg-[#0D66BA] hover:text-white",
    popular: false
  },
  {
    name: "Business",
    price: "₹4,999",
    description: "Advanced features for growing enterprises.",
    features: ["15,000 SMS Credits", "WhatsApp API Integration", "24/7 Priority Support", "Real-time Analytics", "Custom Sender ID"],
    buttonColor: "bg-[#0D66BA] text-white hover:bg-[#44BBDB]",
    popular: true
  },
  {
    name: "Professional",
    price: "₹9,999",
    description: "Full power for large scale operations.",
    features: ["50,000 SMS Credits", "Full IVR Solutions", "Dedicated Manager", "White-label Support", "High-throughput API"],
    buttonColor: "border-[#0D66BA] text-[#0D66BA] hover:bg-[#0D66BA] hover:text-white",
    popular: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1CB48D] font-bold tracking-widest uppercase text-sm mb-3">Simple Pricing</h2>
          <h3 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Plans that grow <span className="text-[#0D66BA]">with your business</span>
          </h3>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            No hidden fees. Choose the plan that works best for your communication needs.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 rounded-[2.5rem] bg-white border ${
                plan.popular ? 'border-[#0D66BA] shadow-2xl scale-105 z-10' : 'border-gray-100'
              } transition-all duration-500 hover:shadow-xl`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1CB48D] text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h4 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-gray-400 text-sm">/month</span>
                </div>
                <p className="text-gray-500 text-sm mt-4 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1CB48D]/10 flex items-center justify-center">
                      <Check size={12} className="text-[#1CB48D]" strokeWidth={3} />
                    </div>
                    <span className="text-slate-600 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full py-4 rounded-2xl font-extrabold transition-all duration-300 border-2 ${plan.buttonColor}`}>
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>

        {/* Custom Quote Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 font-medium">
            Need a custom volume? <a href="#" className="text-[#0D66BA] font-bold border-b-2 border-[#0D66BA]/20 hover:border-[#0D66BA]">Contact Sales</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;