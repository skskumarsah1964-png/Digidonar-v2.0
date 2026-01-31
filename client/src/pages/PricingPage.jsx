import React, { useEffect } from 'react';
import Pricing from '../sections/Pricing';

const PricingPage = () => {
  // Page change hone par scroll top par le jane ke liye
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20"> {/* Navbar ke niche space dene ke liye */}
      <Pricing />
    </div>
  );
};

export default PricingPage;