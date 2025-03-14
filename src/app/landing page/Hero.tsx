'use client';
import React, { useState, useEffect } from 'react';
import { useScrollToSection } from '@/components/hooks/useScrollToSection';
import { ArrowRight, MousePointer, ChevronDown, X, Circle, Square } from 'lucide-react';

const Hero = () => {
  const { scrollToSection } = useScrollToSection();
  const [, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glitchActive, setGlitchActive] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 5000);
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <section className="relative min-h-screen bg-white text-black overflow-hidden">
      {/* Raw grid background */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 grid-rows-6 gap-1 pointer-events-none">
        {Array(72).fill(null).map((_, i) => (
          <div
            key={i}
            className={`border border-black opacity-10 ${i % 7 === 0 ? 'bg-yellow-400' : i % 5 === 0 ? 'bg-red-500' : ''}`}
          />
        ))}
      </div>
      
      {/* Floating geometric elements */}
      <div className="absolute top-1/4 right-8 w-24 h-24 bg-red-500 rotate-12 shadow-xl" />
      <div className="absolute bottom-1/3 left-12 w-20 h-20 bg-blue-600 -rotate-6 shadow-xl" />
      <div className="absolute top-2/3 right-1/4 w-16 h-16 bg-yellow-400 rotate-45 shadow-xl" />
      
      {/* Main content container with offset */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-20 relative">
        {/* Heading with raw, unpolished style */}
        <div 
          className={`relative mb-16 ${glitchActive ? 'translate-x-1 -translate-y-1' : ''} transition-transform duration-100`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <h1 className="font-black uppercase leading-none tracking-tighter">
            <span className="block text-[clamp(50px,15vw,180px)] relative">
              <span className={`block ${isHovered ? '-translate-x-2 text-red-600' : ''} transition-all duration-300`}>
                FIVE X
              </span>
              {/* Underline graphic element */}
              <div className={`h-3 bg-black w-4/5 mt-2 ${isHovered ? 'ml-8' : ''} transition-all duration-300`}></div>
            </span>
            
            <span className={`block text-[clamp(50px,15vw,180px)] -mt-6 relative ${isHovered ? 'translate-x-6' : ''} transition-all duration-300`}>
              AGENCY
              {/* Brutalist element */}
              <Square className="absolute -right-12 top-1/2 -translate-y-1/2 fill-yellow-400 stroke-black stroke-2" size={40} />
            </span>
            
            <span className={`block text-[clamp(30px,8vw,100px)] relative italic bg-black text-white px-4 py-2 w-fit ${isHovered ? '-translate-y-4 rotate-1' : ''} transition-all duration-300`}>
              REDEFINED
              <X className="absolute -right-12 top-1/2 -translate-y-1/2 stroke-red-500 stroke-[3]" size={32} />
            </span>
          </h1>
          
          {/* Glitch elements that appear on hover */}
          {isHovered && (
            <>
              <div className="absolute -left-4 top-1/4 w-2 h-16 bg-red-500"></div>
              <div className="absolute -right-4 bottom-1/4 w-2 h-24 bg-blue-600"></div>
              <div className="absolute -bottom-2 right-1/3 w-20 h-2 bg-yellow-400"></div>
            </>
          )}
        </div>

        {/* Raw, unpolished description */}
        <div className="relative mb-16 max-w-2xl ml-6 md:ml-16">
          <div className="absolute -left-6 top-0 bottom-0 w-2 bg-black"></div>
          <div className="text-xl md:text-2xl font-mono">
            We create bold digital experiences that 
            <span className="relative inline-block mx-2 px-1 bg-yellow-400 -rotate-1 font-black">
              PUSH BOUNDARIES
            </span> 
            and deliver results.
          </div>
          
          {/* Cursor indicator with raw style */}
          <div className="absolute -right-8 top-1/2 flex items-center space-x-2">
            <MousePointer className="animate-pulse" size={20} />
            <div className="h-px w-12 bg-black"></div>
          </div>
        </div>

        {/* Brutalist CTA section */}
        <div className="mt-12 flex flex-col md:flex-row gap-8 items-start ml-6 md:ml-16">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative px-10 py-6 bg-black text-white text-xl font-black uppercase 
                     hover:-translate-y-2 hover:translate-x-2 active:translate-y-0 active:translate-x-0
                     transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(239,68,68,1)]
                     hover:shadow-[12px_12px_0px_0px_rgba(239,68,68,1)]"
          >
            <span className="relative z-10 flex items-center">
              GET IN TOUCH
              <ArrowRight className="ml-2 group-hover:translate-x-3 transition-transform" size={24} />
            </span>
          </button>

          {/* Raw scroll indicator */}
          <div className="hidden md:flex items-center gap-4 text-sm font-mono border-2 border-black p-3">
            <ChevronDown className="animate-bounce" />
            <span>SCROLL DOWN</span>
          </div>
        </div>
      </div>
      
      {/* Signature brutalist elements */}
      <div className="absolute bottom-8 right-8 font-mono text-xs flex items-center">
        <Circle fill="black" size={8} className="mr-2" />
        <span>RAW_DESIGN.2025</span>
      </div>
      
      {/* Offset horizontal lines */}
      <div className="absolute left-0 right-0 h-px bg-black top-12 opacity-30"></div>
      <div className="absolute left-0 right-0 h-px bg-black bottom-12 opacity-30"></div>
    </section>
  );
};

export default Hero;