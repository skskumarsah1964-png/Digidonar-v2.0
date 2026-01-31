import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/digi.png';
import ContactModal from './ContactModal'; // Import ensure karein

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const openDemoModal = () => {
        setIsModalOpen(true);
        setIsOpen(false); // Mobile menu close kar dega
    };

    return (
        <>
            <nav className="fixed w-full z-[100] top-0 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 md:h-20 items-center">

                        {/* Logo Section */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                            <div className="relative">
                                <img
                                    src={Logo}
                                    alt="Digidonar Logo"
                                    className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#44BBDB]/20 blur-lg rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8 items-center">
                            <Link to="/" className="text-sm font-semibold text-gray-600 hover:text-[#0D66BA] transition-all">Home</Link>
                            
                            {/* Agar Home page par hi ho toh anchor link kaam karega */}
                            <a href="#services" className="text-sm font-semibold text-gray-600 hover:text-[#0D66BA] transition-all">Services</a>
                            
                            <Link to="/journey" className="text-sm font-semibold text-gray-600 hover:text-[#0D66BA] transition-all">
                                Our Journey
                            </Link>

                            <Link to="/pricing" className="text-sm font-semibold text-gray-600 hover:text-[#0D66BA] transition-all">
                                Pricing
                            </Link>
                            
                            <div className="flex items-center gap-3 ml-4">
                                <button 
                                    onClick={openDemoModal}
                                    className="bg-[#1CB48D] text-white px-8 py-2.5 rounded-full text-sm font-bold hover:bg-[#0D66BA] hover:shadow-lg hover:shadow-emerald-100 transition-all duration-300 shadow-md"
                                >
                                    Free Demo
                                </button>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="p-2 rounded-md text-[#0D66BA]"
                            >
                                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    {isOpen ? (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    ) : (
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-5 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-5">
                        <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-800 border-b pb-2">Home</Link>
                        <a href="#services" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-800 border-b pb-2">Services</a>
                        
                        <Link to="/journey" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-800 border-b pb-2">
                            Our Journey
                        </Link>
                        
                        <Link to="/pricing" onClick={() => setIsOpen(false)} className="block text-lg font-bold text-gray-800 border-b pb-2">Pricing</Link>
                        
                        <div className="pt-2">
                            <button 
                                onClick={openDemoModal}
                                className="w-full bg-[#1CB48D] text-white py-4 rounded-2xl font-bold text-lg shadow-lg"
                            >
                                Claim Free Demo
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Modal Component - Isko nav ke bahar rakha hai taaki layout na bigde */}
            <ContactModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="Get Your Free Demo"
            />
        </>
    );
};

export default Navbar;