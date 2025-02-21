'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useScrollToSection } from '@/components/hooks/useScrollToSection';

export default function Navbar() {
  const { scrollToSection, isOpen, setIsOpen } = useScrollToSection();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300
                    ${scrolled ? 'shadow-lg' : ''}`}>
      {/* Top Border */}
      <div className="h-1 bg-white w-full" />
      
      <div className={`bg-[#4A4A4A] border-b-4 border-white transition-all duration-300
                      ${scrolled ? 'bg-opacity-95' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="relative group">
              <span className="text-2xl font-bold tracking-tighter relative z-10 
                           group-hover:text-[#FF3366] transition-colors">
                FIVEX
              </span>
              <div className="absolute -inset-1 border-2 border-white opacity-0 
                          group-hover:opacity-100 transition-opacity" />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 hover:bg-[#FF3366] transition-all relative
                         transform hover:scale-110 hover:rotate-3"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 text-lg">
              {navItems.map(({ id, label }) => (
                <button 
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`relative group px-4 py-2 overflow-hidden
                            ${activeSection === id ? 'text-[#40E0D0]' : 'hover:text-[#40E0D0]'}
                            transition-colors`}
                >
                  {label}
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#40E0D0] 
                              transform translate-x-full group-hover:translate-x-0 
                              transition-transform duration-300" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out
                        ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="border-t-4 border-white">
            {navItems.map(({ id, label }) => (
              <button 
                key={id}
                onClick={() => handleNavClick(id)}
                className="block w-full text-left px-6 py-4 text-lg
                         hover:bg-[#FF3366] transition-colors
                         flex items-center justify-between group"
              >
                <span>{label}</span>
                <ChevronRight className="opacity-0 group-hover:opacity-100 
                                    transform group-hover:translate-x-1
                                    transition-all" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Progress Indicator */}
      <div className="h-1 bg-[#40E0D0] absolute bottom-0 left-0 transition-all duration-300"
           style={{ width: `${scrolled ? '100%' : '0%'}` }} />
    </nav>
  );
}