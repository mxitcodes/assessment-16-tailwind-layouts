import React, { memo } from 'react';

const Card = ({ title, description, svgIcon, badge, onSelect, id }) => {
  return (
    <div 
      onClick={() => onSelect(id, title)}
      className="bg-[#111727] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-lg hover:border-indigo-500/50 hover:shadow-[0_10px_40px_rgba(99,102,241,0.25)] hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
    >
      {/* Top Background Glow Gradient on Hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-indigo-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      <div>
        {/* Icon & Badge Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-[#182035] border border-white/5 text-indigo-400 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 shadow-md shadow-black/20 transition-all duration-300">
            {svgIcon}
          </div>
          {badge && (
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-full text-xs font-semibold tracking-wide uppercase group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-300">
              {badge}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-3 group-hover:text-indigo-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed text-sm sm:text-base font-normal">
          {description}
        </p>
      </div>

      {/* Interactive Footer Link */}
      <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-sm font-semibold text-gray-400 group-hover:text-white transition-colors duration-300">
        <span>Explore Technical Specs</span>
        <svg className="w-5 h-5 text-indigo-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </div>
    </div>
  );
};

export default memo(Card);
