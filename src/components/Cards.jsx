import React, { memo, useMemo } from 'react';
import Card from './Card';

const Cards = () => {
  const cardData = useMemo(() => [
    {
      id: 1,
      title: 'Responsive Design',
      description: 'Your layout will look great on small, medium, and large screens automatically with Tailwind classes.',
      icon: '📱'
    },
    {
      id: 2,
      title: 'Utility-First',
      description: 'Rapidly build modern websites without ever leaving your HTML using Tailwind CSS utility classes.',
      icon: '⚡'
    },
    {
      id: 3,
      title: 'React Components',
      description: 'Encapsulate styling logic into reusable React components for better maintainability and performance.',
      icon: '⚛️'
    },
    {
      id: 4,
      title: 'Performance',
      description: 'Optimized rendering by utilizing React.memo and useMemo hooks to prevent unnecessary re-renders.',
      icon: '🚀'
    }
  ], []);

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Capabilities
          </h2>
          <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl md:text-5xl mb-6">
            Core Features
          </h3>
          <p className="text-xl text-gray-500 dark:text-gray-400">
            Everything you need to build incredible user interfaces faster than ever before.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <Card 
              key={card.id} 
              title={card.title} 
              description={card.description} 
              icon={card.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Cards);
