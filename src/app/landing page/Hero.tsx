'use client';
import React, { useState, useEffect } from 'react';
import { useScrollToSection } from '@/components/hooks/useScrollToSection';
import { ArrowRight, MousePointer, ChevronDown } from 'lucide-react';

const Hero = () => {
  const { scrollToSection } = useScrollToSection();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-[#4A4A4A]">
      {/* Animated background grid */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 gap-4 opacity-10">
        {Array(32).fill(null).map((_, i) => (
          <div
            key={i}
            className="border-2 border-white transform transition-transform duration-700"
            style={{
              transform: `rotate(${Math.sin((mousePosition.x + mousePosition.y + i * 100) / 1000) * 5}deg)`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative">
        {/* Glitch effect on hover */}
        <div className="relative">
          <h1 
            className="text-[clamp(60px,10vw,120px)] font-black leading-none uppercase transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className={`block relative ${isHovered ? 'hover:text-customRed hover:-translate-x-1' : ''}`}>
            DIGITAL
            </span>
            <span className={`block relative ${isHovered ? 'hover:text-customBlue hover:translate-x-1' : ''}`}>
              AGENCY
            </span>
            <span className={`block relative ${isHovered ? 'hover:text-green-500 hover:-translate-y-1' : ''}`}>
              REDEFINED
            </span>
          </h1>
        </div>

        {/* Animated description */}
        <p className="mt-8 text-xl max-w-2xl relative border-l-4 border-white pl-4 transform hover:scale-105 transition-transform">
          We create bold digital experiences that push boundaries and deliver results.
          <MousePointer className="absolute -right-8 top-1/2 -translate-y-1/2 animate-bounce" size={20} />
        </p>

        {/* Enhanced CTA button */}
        <div className="mt-12 flex flex-col md:flex-row gap-6 items-start">
          <button 
            onClick={() => scrollToSection('contact')}
            className="group relative border-4 border-white px-8 py-4 text-xl font-bold 
                     hover:bg-white hover:text-[#4A4A4A] transition-all duration-300
                     active:scale-95 transform hover:-translate-y-1"
          >
            <span className="relative z-10 flex items-center">
              GET IN TOUCH
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity -z-0" />
          </button>

          {/* Scroll indicator */}
          <div className="hidden md:flex items-center gap-4 text-sm opacity-60">
            <ChevronDown className="animate-bounce" />
            <span>Scroll to explore</span>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 border-4 border-white rotate-45 opacity-20 
                    animate-[spin_10s_linear_infinite]" />
      <div className="absolute bottom-10 left-10 w-16 h-16 border-4 border-white -rotate-12 opacity-20 
                    animate-[bounce_4s_ease-in-out_infinite]" />
    </section>
  );
};

export default Hero;