import React, { memo, useState, useMemo, useCallback } from 'react';
import Card from './Card';

const Cards = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedCard, setSelectedCard] = useState(null);

  const cardData = useMemo(() => [
    {
      id: 1,
      title: 'Hyper-Responsive Grids',
      category: 'architecture',
      badge: 'Tailwind CSS',
      description: 'Engineered with absolute precision. Your layout effortlessly flexes across sm, md, lg, and xl breakpoints instantly.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Utility-First Architecture',
      category: 'architecture',
      badge: 'Modern CSS',
      description: 'Rapidly construct stunning interfaces directly in your JSX. Say goodbye to convoluted CSS files and global scope clashes.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Absolute Memoization',
      category: 'performance',
      badge: 'React 19',
      description: 'Optimized rendering loop utilizing React.memo, useMemo, and useCallback. Avoids unnecessary re-renders completely.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Atomic Components',
      category: 'architecture',
      badge: 'Scalability',
      description: 'Perfectly decoupled UI building blocks designed for enterprise-grade scalability, reusability, and clean codebases.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Blazing Fast Velocity',
      category: 'performance',
      badge: '0.4ms Render',
      description: 'Consistently hits perfect 100% Lighthouse performance scores. Zero runtime overhead and lightning-fast asset delivery.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Full TypeScript Guard',
      category: 'integrations',
      badge: 'Type Safe',
      description: 'Flawless autocompletion and robust compile-time safety. Catch potential bugs long before your code hits production.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      id: 7,
      title: 'Vite Next-Gen Tooling',
      category: 'integrations',
      badge: 'HMR Instant',
      description: 'Instantaneous Hot Module Replacement (HMR) powered by Vite. Experience real-time feedback as you craft your application.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      id: 8,
      title: 'Dark Mode Glassmorphism',
      category: 'architecture',
      badge: 'Rich Esthetic',
      description: 'Spectacular, ultra-premium aesthetics with tailored HSL color palettes, multi-layered mesh gradients, and smooth backdrop blurs.',
      svgIcon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      )
    }
  ], []);

  const filteredCards = useMemo(() => {
    if (activeFilter === 'all') return cardData;
    return cardData.filter(card => card.category === activeFilter);
  }, [activeFilter, cardData]);

  const handleFilterChange = useCallback((category) => {
    setActiveFilter(category);
  }, []);

  const handleCardSelect = useCallback((id, title) => {
    setSelectedCard({ id, title });
  }, []);

  const closeDialog = useCallback(() => {
    setSelectedCard(null);
  }, []);

  return (
    <section id="features" className="py-20 sm:py-28 lg:py-36 bg-[#0B0F19] relative">
      {/* Background Separator Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto space-y-4 sm:space-y-6">
          <h2 className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-full shadow-inner">
            Engineered Capabilities
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            High-Performance <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Architectural Foundations
            </span>
          </h3>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 font-normal leading-relaxed">
            Everything required to construct state-of-the-art web applications. Crafted with absolute devotion to clean code and visual excellence.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6">
            {[
              { id: 'all', label: '⚡ All Features' },
              { id: 'architecture', label: '📐 Architecture' },
              { id: 'performance', label: '🚀 Performance' },
              { id: 'integrations', label: '⚙️ Integrations' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleFilterChange(tab.id)}
                className={`px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl text-sm sm:text-base font-bold transition-all duration-300 active:scale-95 ${
                  activeFilter === tab.id
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 border border-indigo-400/30'
                    : 'bg-[#121826] text-gray-400 hover:text-white hover:bg-[#171E30] border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Responsive Cards Grid (sm, md, lg, xl explicitly covered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {filteredCards.map((card) => (
            <Card 
              key={card.id} 
              id={card.id}
              title={card.title} 
              description={card.description} 
              svgIcon={card.svgIcon} 
              badge={card.badge}
              onSelect={handleCardSelect}
            />
          ))}
        </div>

        {/* Selected Card Modal / Interactive Notification Dialog */}
        {selectedCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in-up">
            <div className="bg-[#111727] border border-white/10 rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center text-xl font-bold">
                    🚀
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">Technical Specs Initialized</h4>
                    <p className="text-xs text-indigo-400 font-mono">Component ID: #{selectedCard.id}</p>
                  </div>
                </div>
                <button 
                  onClick={closeDialog}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              </div>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-8">
                You selected <strong className="text-white font-extrabold">{selectedCard.title}</strong>. This module is fully configured with zero-dependency tree shaking, custom hooks, and absolute React memoization.
              </p>
              <div className="flex items-center justify-end space-x-4">
                <button 
                  onClick={closeDialog}
                  className="px-6 py-3 bg-[#182035] hover:bg-[#202B47] text-white font-bold text-sm rounded-xl border border-white/5 hover:border-white/10 transition-all duration-200"
                >
                  Acknowledge & Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(Cards);
