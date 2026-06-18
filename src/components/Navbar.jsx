import React, { memo } from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900/80 backdrop-blur-md text-white shadow-lg sticky top-0 z-50 border-b border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 cursor-pointer hover:scale-105 transition-transform">
              Nexus
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-indigo-300 transition-all duration-300">Home</a>
                <a href="#features" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-indigo-300 transition-all duration-300">Features</a>
                <a href="#pricing" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-indigo-300 transition-all duration-300">Pricing</a>
                <a href="#contact" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-white/10 hover:text-indigo-300 transition-all duration-300">Contact</a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none transition-colors">
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);
