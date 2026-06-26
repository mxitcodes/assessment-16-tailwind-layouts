import React, { memo, useState, useCallback } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!email) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 4000);
  }, [email]);

  const handleEmailChange = useCallback((e) => {
    setEmail(e.target.value);
  }, []);

  return (
    <footer id="contact" className="bg-[#090D16] text-gray-400 py-16 sm:py-20 lg:py-24 border-t border-white/10 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Info Column */}
          <div className="sm:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-purple-400">
                Nexus<span className="text-indigo-500 text-xs ml-1 uppercase px-2 py-0.5 bg-indigo-500/20 rounded-full border border-indigo-500/30">Pro</span>
              </span>
            </div>
            <p className="max-w-sm text-sm sm:text-base text-gray-400 leading-relaxed">
              Empowering global engineering teams to craft state-of-the-art web applications with bleeding-edge technology, utility-first CSS, and absolute visual excellence.
            </p>

            {/* Interactive Newsletter Subscription */}
            <div className="pt-2 max-w-md">
              <h4 className="text-sm font-bold text-white mb-3 tracking-wide uppercase">Subscribe to our Developer Newsletter</h4>
              {isSubscribed ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl text-emerald-300 font-semibold text-sm flex items-center space-x-3 shadow-inner animate-fade-in-up">
                  <svg className="w-6 h-6 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Success! You've been subscribed to the Nexus insider dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex items-center space-x-2 bg-[#111727] p-1.5 rounded-2xl border border-white/10 shadow-lg focus-within:border-indigo-500/50 focus-within:ring-1 focus-within:ring-indigo-500/50 transition-all duration-300">
                  <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="enter.developer@email.com"
                    className="w-full bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-xl shadow-md transition-all active:scale-95 flex-shrink-0"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
          
          {/* Column 2: Product */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Framework</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Component Index</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Theme Builder</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Figma UI Kit</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog <span className="ml-1 text-[10px] px-2 py-0.5 bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/30">v4.2</span></a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Resources</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Next.js Starter</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Vite Deployment</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Tailwind CSS Guide</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Discord Community</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">GitHub Repository</a></li>
            </ul>
          </div>

          {/* Column 4: Enterprise */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm font-medium text-gray-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About Nexus</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers <span className="ml-1 text-[10px] px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">We're Hiring!</span></a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-xs sm:text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Nexus Pro Inc. Built with React 19, Vite & Tailwind CSS. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-gray-500 hover:text-indigo-400 hover:scale-110 transition-all">
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 hover:scale-110 transition-all">
              <span className="sr-only">GitHub</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-indigo-400 hover:scale-110 transition-all">
              <span className="sr-only">Discord</span>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128c.126-.093.252-.192.372-.288a.074.074 0 01.077-.01c3.922 1.793 8.18 1.793 12.061 0a.074.074 0 01.078.01c.12.096.246.195.373.288a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
