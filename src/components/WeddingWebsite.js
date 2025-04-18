import React, { useState, useEffect } from 'react';

function WeddingWebsite() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="font-serif">
      <nav className={`fixed w-full transition-all duration-300 z-50 ${isScrolled ? 'bg-red-800 shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl">Sachin & Yashi</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-red-200">Home</a>
            <a href="#story" className="text-white hover:text-red-200">Our Story</a>
            <a href="#events" className="text-white hover:text-red-200">Events</a>
            <a href="#gallery" className="text-white hover:text-red-200">Gallery</a>
            <a href="#rsvp" className="text-white hover:text-red-200">RSVP</a>
          </div>
          <button className="md:hidden text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-red-800 to-red-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{backgroundImage: 'url("https://picsum.photos/1200/800")'}}></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} 
                className="absolute rounded-full bg-red-500 opacity-20" 
                style={{
                  width: `${Math.random() * 100 + 20}px`, 
                  height: `${Math.random() * 100 + 20}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}>
            </div>
          ))}
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="bg-black bg-opacity-20 p-8 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Sachin & Yashi</h1>
            <p className="text-xl md:text-2xl text-red-100 mb-6">9th October, 2022</p>
            <p className="text-lg md:text-xl text-white mb-8">Sundariya Hotel, Jodhpur M.P.</p>
            <p className="text-md md:text-lg text-red-100 mb-6">Time • 07:00pm</p>
            <div className="flex justify-center">
              <button className="bg-red-700 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:scale-105">
                View Invitation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WeddingWebsite;