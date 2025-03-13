'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Square } from 'lucide-react';
import { useScrollToSection } from '@/components/hooks/useScrollToSection';

export default function Navbar() {
  const { scrollToSection, isOpen, setIsOpen } = useScrollToSection();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoverIndex, setHoverIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const navItems = [
    { id: 'services', label: 'SERVICES' },
    { id: 'work', label: 'WORK' },
    { id: 'contact', label: 'CONTACT' }
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 border-b-4 border-black
                    ${scrolled ? 'shadow-[0_8px_0px_rgba(0,0,0,0.2)]' : ''}`}>
      {/* Raw grid element */}
      <div className="h-2 w-full bg-yellow-400 relative overflow-hidden">
        <div className="absolute inset-0 grid grid-cols-12 gap-px">
          {Array(12).fill(null).map((_, i) => (
            <div key={i} className={`h-full ${i % 3 === 0 ? 'bg-black bg-opacity-20' : ''}`} />
          ))}
        </div>
      </div>
      
      <div className={`bg-white transition-all duration-300 relative
                      ${scrolled ? 'bg-opacity-95' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Neo-brutalist Logo */}
            <div 
              className="relative group cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-3xl font-black tracking-tighter relative z-10 
                           group-hover:-translate-y-1 group-hover:translate-x-1 inline-block
                           transition-transform duration-300">
                FIVEX
              </span>
              <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-red-500 -z-10
                          opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Mobile menu button with brutalist style */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 transition-all relative
                         ${isOpen ? 'bg-black text-white' : 'border-2 border-black'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu with brutalist styling */}
            <div className="hidden md:flex space-x-4 text-lg font-bold">
              {navItems.map(({ id, label }, index) => (
                <button 
                  key={id}
                  onClick={() => handleNavClick(id)}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(-1)}
                  className={`relative px-4 py-2 
                            ${activeSection === id 
                              ? 'bg-black text-white' 
                              : 'hover:bg-black hover:text-white'
                            }
                            transition-colors duration-200`}
                >
                  <span className="relative z-10">{label}</span>
                  
                  {/* Decorative elements that appear on hover */}
                  {hoverIndex === index && (
                    <div className="absolute -right-1 -bottom-1 w-2 h-8 bg-red-500" />
                  )}
                  
                  {activeSection === id && (
                    <Square 
                      className="absolute -right-3 -top-1 fill-yellow-400" 
                      size={10} 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu with brutalist aesthetic */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out absolute w-full bg-white
                    ${isOpen ? 'max-h-screen opacity-100 border-t-2 border-black' : 'max-h-0 opacity-0 overflow-hidden'}`}
        >
          <div className="relative">
            {/* Decorative element */}
            {isOpen && (
              <div className="absolute top-0 left-0 w-2 h-full bg-yellow-400"></div>
            )}
            
            {navItems.map(({ id, label }, index) => (
              <button 
                key={id}
                onClick={() => handleNavClick(id)}
                className={`block w-full text-left px-8 py-6 text-xl font-black
                         hover:bg-black hover:text-white transition-colors
                         flex items-center justify-between relative
                         ${activeSection === id ? 'bg-black text-white' : ''}`}
              >
                <span>{label}</span>
                
                {/* Different decorative element for each item */}
                {index === 0 && (
                  <div className="absolute right-0 top-0 w-3 h-3 bg-red-500"></div>
                )}
                {index === 1 && (
                  <div className="absolute right-0 top-0 w-6 h-1 bg-blue-600"></div>
                )}
                {index === 2 && (
                  <Square className="absolute right-0 top-0 fill-yellow-400" size={12} />
                )}
                
                <ChevronRight className="ml-2 transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Raw scroll progress indicator */}
      <div className="h-1 bg-black absolute bottom-0 left-0 transition-all duration-300"
           style={{ width: `${scrolled ? '100%' : '0%'}` }} />
      
      {/* Brutalist decorative elements */}
      <div className={`absolute -bottom-2 left-8 w-4 h-4 bg-blue-600 transition-all duration-500
                      ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      <div className={`absolute -bottom-3 right-12 w-6 h-2 bg-red-500 transition-all duration-500
                      ${scrolled ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}></div>
    </nav>
  );
}