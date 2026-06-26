import React, { useState, useCallback, memo } from 'react';

const Hero = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('react');

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText('npm install @nexus/ui-premium');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }, []);

  const handleTabChange = useCallback((tab) => {
    setActiveTab(tab);
  }, []);

  return (
    <div className="relative overflow-hidden bg-[#0B0F19] pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-20 sm:pb-28 lg:pb-36">
      {/* Absolute Background Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-purple-900/20 to-transparent pointer-events-none blur-3xl z-0" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none z-0 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        {/* Main Hero Header Section */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-1.5 mb-8 text-xs sm:text-sm font-semibold text-indigo-300 bg-indigo-950/60 border border-indigo-500/30 backdrop-blur-md shadow-inner hover:bg-indigo-900/50 hover:border-indigo-500/50 transition-all duration-300 cursor-pointer group">
            <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Next-Gen UI Engine v4.2 Released</span>
            <svg className="w-4 h-4 text-indigo-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.15]">
            Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">Flawless UIs</span> <br className="hidden sm:block" /> with Ultimate Velocity.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 sm:mb-12 max-w-3xl font-normal leading-relaxed px-2 sm:px-0">
            Deploy hyper-responsive, high-performance visual building blocks. Engineered for modern React applications with zero bundle bloat and perfect Tailwind integration.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 w-full max-w-md sm:max-w-none mb-16">
            <a 
              href="#features" 
              className="w-full sm:w-auto flex items-center justify-center space-x-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-bold px-8 py-4 sm:py-4.5 rounded-2xl shadow-[0_10px_30px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group"
            >
              <span className="text-base sm:text-lg">Explore Framework</span>
              <svg className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            
            {/* Interactive Install Command Copy */}
            <button 
              onClick={handleCopy}
              className="w-full sm:w-auto flex items-center justify-between sm:justify-center space-x-4 bg-[#121826] hover:bg-[#171E30] text-gray-300 font-mono text-sm sm:text-base px-6 py-4 sm:py-4.5 rounded-2xl border border-white/10 shadow-lg hover:border-white/20 active:scale-[0.98] transition-all duration-300 group"
            >
              <span className="text-indigo-400">$</span>
              <span className="text-gray-200">npm install @nexus/ui-premium</span>
              {copied ? (
                <span className="flex items-center text-emerald-400 font-sans font-bold text-xs bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                  <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Copied!
                </span>
              ) : (
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Stunning Interactive Mockup Showcase */}
        <div className="relative max-w-5xl mx-auto mt-6 sm:mt-12 rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-white/10 via-white/5 to-transparent backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-white/10 animate-float">
          <div className="bg-[#0E1322] rounded-[22px] overflow-hidden shadow-2xl border border-white/5">
            {/* Mockup Top Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#141B2D] border-b border-white/5">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80 shadow-sm shadow-rose-500/50" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 shadow-sm shadow-amber-500/50" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 shadow-sm shadow-emerald-500/50" />
                <span className="ml-4 text-xs sm:text-sm font-mono text-gray-400 hidden sm:inline-block">nexus-app-workspace - Active</span>
              </div>

              {/* Code Mockup Tabs */}
              <div className="flex items-center space-x-1 sm:space-x-2 bg-[#0B0F19] p-1 rounded-xl border border-white/5">
                {[
                  { id: 'react', label: 'App.jsx', icon: '⚛️' },
                  { id: 'tailwind', label: 'tailwind.config.js', icon: '🎨' },
                  { id: 'metrics', label: 'Dashboard.tsx', icon: '📊' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/30 shadow-sm'
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span className="text-xs">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mockup Body Content */}
            <div className="p-4 sm:p-6 md:p-8 bg-[#0B0F19]/90 font-mono text-xs sm:text-sm overflow-x-auto text-left leading-loose">
              {activeTab === 'react' && (
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-purple-400">import</span> React, &#123; <span className="text-amber-400">memo</span>, <span className="text-amber-400">useState</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'react'</span>;</p>
                  <p><span className="text-purple-400">import</span> &#123; <span className="text-amber-400">CardGrid</span>, <span className="text-amber-400">HeroGlow</span>, <span className="text-amber-400">AnimatedBadge</span> &#125; <span className="text-purple-400">from</span> <span className="text-emerald-300">'@nexus/ui-premium'</span>;</p>
                  <br />
                  <p><span className="text-indigo-400">const</span> <span className="text-blue-400">PremiumApp</span> = <span className="text-amber-400">memo</span>(() =&gt; &#123;</p>
                  <p className="pl-4"><span className="text-indigo-400">const</span> [isAwesome, setIsAwesome] = <span className="text-blue-400">useState</span>(<span className="text-rose-400">true</span>);</p>
                  <br />
                  <p className="pl-4"><span className="text-purple-400">return</span> (</p>
                  <p className="pl-8">&lt;<span className="text-rose-400">div</span> <span className="text-amber-300">className</span>=<span className="text-emerald-300">"min-h-screen bg-[#0B0F19] text-white selection:bg-indigo-500"</span>&gt;</p>
                  <p className="pl-12">&lt;<span className="text-amber-400">AnimatedBadge</span> <span className="text-amber-300">pulseColor</span>=<span className="text-emerald-300">"indigo"</span> <span className="text-amber-300">text</span>=<span className="text-emerald-300">"Next-Gen UI Engine"</span> /&gt;</p>
                  <p className="pl-12">&lt;<span className="text-amber-400">HeroGlow</span> <span className="text-amber-300">heading</span>=<span className="text-emerald-300">"Architect Flawless UIs"</span> /&gt;</p>
                  <p className="pl-12">&lt;<span className="text-amber-400">CardGrid</span> <span className="text-amber-300">columns</span>=&#123;<span className="text-purple-400">4</span>&#125; <span className="text-amber-300">responsive</span>=<span className="text-rose-400">true</span> <span className="text-amber-300">animatedHover</span>=<span className="text-rose-400">true</span> /&gt;</p>
                  <p className="pl-8">&lt;/<span className="text-rose-400">div</span>&gt;</p>
                  <p className="pl-4">);</p>
                  <p>&#125;);</p>
                  <br />
                  <p><span className="text-purple-400">export default</span> <span className="text-blue-400">PremiumApp</span>;</p>
                </div>
              )}

              {activeTab === 'tailwind' && (
                <div className="space-y-2 text-gray-300">
                  <p><span className="text-purple-400">export default</span> &#123;</p>
                  <p className="pl-4"><span className="text-indigo-300">darkMode</span>: <span className="text-emerald-300">'class'</span>,</p>
                  <p className="pl-4"><span className="text-indigo-300">content</span>: [</p>
                  <p className="pl-8"><span className="text-emerald-300">"./index.html"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-300">"./src/**/*.&#123;js,ts,jsx,tsx&#125;"</span>,</p>
                  <p className="pl-8"><span className="text-emerald-300">"./node_modules/@nexus/ui-premium/**/*.js"</span>,</p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-indigo-300">theme</span>: &#123;</p>
                  <p className="pl-8"><span className="text-indigo-300">extend</span>: &#123;</p>
                  <p className="pl-12"><span className="text-indigo-300">colors</span>: &#123;</p>
                  <p className="pl-16"><span className="text-indigo-300">brand</span>: &#123; <span className="text-purple-400">900</span>: <span className="text-emerald-300">'#0B0F19'</span>, <span className="text-purple-400">500</span>: <span className="text-emerald-300">'#6366F1'</span> &#125;,</p>
                  <p className="pl-12">&#125;,</p>
                  <p className="pl-12"><span className="text-indigo-300">animation</span>: &#123;</p>
                  <p className="pl-16"><span className="text-emerald-300">'float'</span>: <span className="text-emerald-300">'float 6s ease-in-out infinite'</span>,</p>
                  <p className="pl-16"><span className="text-emerald-300">'pulse-glow'</span>: <span className="text-emerald-300">'pulse-glow 4s ease-in-out infinite'</span>,</p>
                  <p className="pl-12">&#125;,</p>
                  <p className="pl-8">&#125;,</p>
                  <p className="pl-4">&#125;,</p>
                  <p className="pl-4"><span className="text-indigo-300">plugins</span>: [],</p>
                  <p>&#125;;</p>
                </div>
              )}

              {activeTab === 'metrics' && (
                <div className="space-y-6 font-sans text-gray-200">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#131A2B] p-4 rounded-2xl border border-white/5 shadow-inner">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Rendering Velocity</div>
                      <div className="text-3xl font-black text-emerald-400 flex items-center">
                        <span>0.4ms</span>
                        <span className="text-xs ml-2 bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-md">Optimal</span>
                      </div>
                    </div>
                    <div className="bg-[#131A2B] p-4 rounded-2xl border border-white/5 shadow-inner">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Lighthouse Score</div>
                      <div className="text-3xl font-black text-indigo-400 flex items-center">
                        <span>100%</span>
                        <span className="text-xs ml-2 bg-indigo-500/20 text-indigo-300 px-2 py-0.5 rounded-md">Perfect</span>
                      </div>
                    </div>
                    <div className="bg-[#131A2B] p-4 rounded-2xl border border-white/5 shadow-inner">
                      <div className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-1">Re-render Guard</div>
                      <div className="text-3xl font-black text-purple-400 flex items-center">
                        <span>Active</span>
                        <span className="text-xs ml-2 bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded-md">useMemo</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#131A2B] p-6 rounded-2xl border border-white/5 space-y-3">
                    <div className="flex justify-between items-center text-sm font-semibold text-gray-300">
                      <span>Live Memory Consumption & Garbage Collection</span>
                      <span className="text-xs text-indigo-400 font-mono">14.2 MB Allocated</span>
                    </div>
                    <div className="w-full bg-[#0B0F19] h-3 rounded-full overflow-hidden p-0.5 border border-white/5">
                      <div className="bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 h-full rounded-full w-[35%] animate-pulse" />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Hero);
