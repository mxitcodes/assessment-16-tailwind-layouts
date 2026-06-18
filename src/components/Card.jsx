import React, { memo } from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 dark:border-gray-700 flex flex-col items-start hover:-translate-y-2 group cursor-pointer">
      <div className="w-14 h-14 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 group-hover:bg-indigo-100 transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  );
};

export default memo(Card);
