'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight, Triangle, Circle, Minus, Plus } from 'lucide-react';
import { useScrollToSection } from '@/components/hooks/useScrollToSection';

export default function Navbar() {
  const { scrollToSection, isOpen, setIsOpen } = useScrollToSection();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Track scroll position and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Calculate scroll progress percentage for indicator
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (currentScrollY / scrollHeight) * 100;
      setScrollProgress(progress);
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Intersection Observer to detect active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'hero', label: 'HOME', color: '#FF3366' },
    { id: 'services', label: 'SERVICES', color: '#40E0D0' },
    { id: 'work', label: 'WORK', color: '#FFD700' },
    { id: 'contact', label: 'CONTACT', color: '#6e5494' }
  ];

  return (
    <div 
      ref={navRef}
      className={`fixed w-full z-50 transition-all duration-500 ${isVisible ? 'top-0' : '-top-full'}`}
    >
      {/* Top visual pattern bar */}
      <div className="h-3 w-full bg-black relative overflow-hidden">
        <div className="flex">
          {Array(40).fill(null).map((_, i) => (
            <div 
              key={i} 
              className="h-full flex-1"
              style={{ 
                backgroundColor: i % 5 === 0 ? '#FF3366' : 
                              i % 5 === 1 ? '#40E0D0' : 
                              i % 5 === 2 ? '#FFD700' : 
                              i % 5 === 3 ? '#6e5494' : 'transparent'
              }} 
            />
          ))}
        </div>
      </div>
      
      {/* Main navbar */}
      <div className="bg-white relative border-b-8 border-black">
        {/* Progress bar */}
        <div 
          className="h-2 bg-red-500 absolute bottom-0 left-0 z-10" 
          style={{ width: `${scrollProgress}%` }}
        />
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo with animation */}
            <div 
              className="group cursor-pointer relative"
              onClick={() => scrollToSection('hero')}
            >
              <div className="text-4xl font-black relative inline-block">
                <span className="relative z-20 group-hover:text-white transition-colors duration-300">
                  FIVEX
                </span>
                <div className="absolute inset-0 z-10 bg-black transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"/>
                <div className="absolute -bottom-1 -right-1 z-0 w-4 h-4 bg-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
              </div>
              <Triangle className="absolute -top-2 -left-2 fill-red-500 opacity-0 group-hover:opacity-100 transition-opacity" size={12}/>
            </div>
            
            {/* Mobile toggle with animation */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-3 border-4 border-black group overflow-hidden"
            >
              <div className="absolute inset-0 bg-black transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300 z-0"/>
              {isOpen ? (
                <X size={24} className="relative z-10 group-hover:text-white transition-colors duration-300"/>
              ) : (
                <Menu size={24} className="relative z-10 group-hover:text-white transition-colors duration-300"/>
              )}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center">
              <div className="flex space-x-1">
                {navItems.map(({ id, label, color }) => {
                  const isActive = activeSection === id;
                  const isHovered = hoverItem === id;
                  
                  return (
                    <div className="relative" key={id}>
                      <button 
                        onClick={() => handleNavClick(id)}
                        onMouseEnter={() => setHoverItem(id)}
                        onMouseLeave={() => setHoverItem(null)}
                        className="px-6 py-3 font-bold transition-all duration-300 relative overflow-hidden group"
                      >
                        {/* Background fills on hover/active */}
                        <div 
                          className={`absolute inset-0 transition-transform duration-300 z-0
                                    ${isActive ? 'bg-black' : ''}
                                    ${!isActive && isHovered ? 'bg-zinc-100' : ''}`}
                        />
                        
                        {/* Label with conditional styling */}
                        <span 
                          className={`relative z-10 transition-colors duration-300
                                    ${isActive ? 'text-white' : 'text-black'}`}
                        >
                          {label}
                        </span>
                        
                        {/* Active indicator line */}
                        {isActive && (
                          <div 
                            className="absolute bottom-0 left-0 h-1 w-full" 
                            style={{ backgroundColor: color }}
                          />
                        )}
                        
                        {/* Active indicator dot */}
                        {isActive && (
                          <div 
                            className="absolute -right-1 -top-1 w-3 h-3 z-20" 
                            style={{ backgroundColor: color }}
                          />
                        )}
                        
                        {/* Hover indicator */}
                        {isHovered && !isActive && (
                          <div className="absolute bottom-0 left-0 h-1 w-full bg-zinc-300" />
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
              
              {/* CTA button */}
              <button 
                onClick={() => handleNavClick('contact')}
                className="ml-8 px-6 py-3 bg-black text-white font-bold relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  GET IN TOUCH
                  <ArrowUpRight 
                    size={16} 
                    className="ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  />
                </span>
                <div className="absolute inset-0 bg-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"/>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu with animation */}
        <div 
          className={`md:hidden transition-all duration-500 absolute w-full bg-white border-t-4 border-black overflow-hidden
                    ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="relative">
            {/* Decorative patterns for mobile menu */}
            {isOpen && (
              <>
                <div className="absolute top-0 left-0 w-1 h-full bg-black"/>
                <div className="absolute -left-4 top-1/3 w-8 h-8 bg-yellow-400 rounded-full opacity-20"/>
                <div className="absolute -right-4 bottom-1/3 w-12 h-2 bg-red-500 opacity-30"/>
              </>
            )}
            
            {navItems.map(({ id, label, color }, index) => {
              const isActive = activeSection === id;
              
              return (
                <div key={id} className="relative">
                  <button 
                    onClick={() => handleNavClick(id)}
                    className={`block w-full text-left p-6 font-bold
                              border-b border-zinc-200 relative
                              ${isActive ? 'bg-zinc-100' : ''}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {/* Number prefix */}
                        <span 
                          className="mr-4 opacity-50 font-mono text-sm"
                          style={{ color: isActive ? color : 'inherit' }}
                        >
                          0{index + 1}
                        </span>
                        
                        {/* Label */}
                        <span className="text-xl">{label}</span>
                      </div>
                      
                      {/* Active/inactive indicators */}
                      {isActive ? (
                        <Minus size={16} style={{ color }} />
                      ) : (
                        <Plus size={16} />
                      )}
                    </div>
                    
                    {/* Active indicator bar */}
                    {isActive && (
                      <div 
                        className="absolute left-0 top-0 h-full w-1"
                        style={{ backgroundColor: color }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
            
            {/* Mobile CTA button */}
            <div className="p-6">
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full py-4 bg-black text-white font-bold flex items-center justify-center relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center">
                  GET IN TOUCH
                  <ArrowUpRight size={18} className="ml-2" />
                </span>
                <div className="absolute inset-0 bg-red-500 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300 z-0"/>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brutalist decorative elements */}
      <Circle 
        className={`absolute -bottom-3 left-1/4 fill-yellow-400 transition-all duration-500
                  ${scrollProgress > 10 ? 'opacity-100' : 'opacity-0'}`}
        size={12}
      />
      <div 
        className={`absolute -bottom-4 right-1/3 w-8 h-2 bg-red-500 transition-all duration-500
                  ${scrollProgress > 30 ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
      />
    </div>
  );
}