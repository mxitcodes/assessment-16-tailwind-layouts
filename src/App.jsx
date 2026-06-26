import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-gray-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Cards />
      </main>
      <Footer />
    </div>
  );
}

export default App;
