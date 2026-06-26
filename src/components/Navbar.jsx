import React, { useState, useCallback, memo } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleNavClick = useCallback((tab, e) => {
    setActiveTab(tab);
    if (isOpen) setIsOpen(false);
  }, [isOpen]);

  const handleGetStarted = useCallback(() => {
    alert("Thank you for your interest! Welcome to Nexus Pro.");
  }, []);

  return (
    <nav className="bg-[#0B0F19]/80 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            <a 
              href="#" 
              onClick={(e) => handleNavClick('home', e)}
              className="flex items-center space-x-3 group cursor-pointer"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:shadow-indigo-500/50 group-hover:scale-105 transition-all duration-300">
                <svg className="w-6 h-6 text-white transform group-hover:rotate-12 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-400 group-hover:opacity-90 transition-opacity">
                Nexus<span className="text-indigo-500 text-xs sm:text-sm ml-1 uppercase px-2 py-0.5 bg-indigo-500/20 rounded-full border border-indigo-500/30">Pro</span>
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            {[
              { id: 'home', label: 'Home', href: '#' },
              { id: 'features', label: 'Features', href: '#features' },
              { id: 'analytics', label: 'Analytics', href: '#analytics' },
              { id: 'pricing', label: 'Pricing', href: '#pricing' },
              { id: 'faq', label: 'FAQ', href: '#faq' },
            ].map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(item.id, e)}
                className={`px-3 py-2 lg:px-4 lg:py-2.5 rounded-xl text-sm lg:text-base font-medium transition-all duration-300 relative group ${
                  activeTab === item.id 
                    ? 'text-white bg-white/10 shadow-inner border border-white/10' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {activeTab === item.id && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                )}
              </a>
            ))}
          </div>

          {/* CTA Buttons Section */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button 
              onClick={handleGetStarted}
              className="relative group overflow-hidden px-5 py-2.5 lg:px-6 lg:py-3 rounded-xl font-semibold text-sm lg:text-base bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative flex items-center space-x-2">
                <span>Get Started</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-2">
            <button 
              onClick={handleGetStarted}
              className="px-4 py-2 bg-indigo-600 text-white font-medium text-sm rounded-lg shadow-md hover:bg-indigo-500 transition-all sm:hidden"
            >
              Start
            </button>
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 bg-[#0B0F19]/95 backdrop-blur-3xl ${isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 border-none'}`}>
        <div className="px-4 sm:px-6 space-y-2">
          {[
            { id: 'home', label: 'Home', href: '#' },
            { id: 'features', label: 'Features', href: '#features' },
            { id: 'analytics', label: 'Analytics', href: '#analytics' },
            { id: 'pricing', label: 'Pricing', href: '#pricing' },
            { id: 'faq', label: 'FAQ', href: '#faq' },
          ].map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleNavClick(item.id, e)}
              className={`block px-4 py-3 rounded-xl text-base font-medium transition-all ${
                activeTab === item.id 
                  ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 font-semibold' 
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10">
            <button
              onClick={handleGetStarted}
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 hover:opacity-90 active:scale-[0.98] transition-all"
            >
              <span>Get Started Free</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
