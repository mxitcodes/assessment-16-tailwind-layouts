import React, { memo } from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-900/40 via-gray-900 to-gray-900"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center animate-fade-in-up">
        <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 text-sm font-semibold text-indigo-300 bg-indigo-900/30 border border-indigo-700/50 hover:bg-indigo-900/50 transition-colors cursor-pointer">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 mr-2 animate-pulse"></span>
          Now supporting React 18
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Responsive UIs</span> <br className="hidden md:block" /> with React & Tailwind
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 mb-10 max-w-3xl font-light">
          Create beautiful, fast, and modern web applications with a utility-first CSS framework and the power of reusable React components.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
          <a href="#" className="flex items-center justify-center bg-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 hover:-translate-y-1 hover:shadow-indigo-600/50 transition-all duration-300 w-full sm:w-auto">
            Get Started Free
          </a>
          <a href="#" className="flex items-center justify-center bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl border border-gray-700 shadow-md hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto">
            View Documentation
          </a>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
