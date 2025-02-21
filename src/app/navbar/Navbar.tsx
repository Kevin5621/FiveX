'use client';

import React from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollToSection } from '../../components/hooks/useScrollToSection';

export default function Navbar() {
  const { scrollToSection, isOpen, setIsOpen } = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#4A4A4A] border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <span className="text-2xl font-bold tracking-tighter">FIVEX</span>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 hover:bg-[#FF3366] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8 text-lg">
            <button 
              onClick={() => handleNavClick('services')}
              className="hover:text-[#40E0D0] transition-colors"
            >
              SERVICES
            </button>
            <button 
              onClick={() => handleNavClick('work')}
              className="hover:text-[#40E0D0] transition-colors"
            >
              WORK
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className="hover:text-[#40E0D0] transition-colors"
            >
              CONTACT
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} border-t-4 border-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button 
            onClick={() => handleNavClick('services')}
            className="block w-full text-left px-3 py-2 text-lg hover:bg-[#FF3366]"
          >
            SERVICES
          </button>
          <button 
            onClick={() => handleNavClick('work')}
            className="block w-full text-left px-3 py-2 text-lg hover:bg-[#FF3366]"
          >
            WORK
          </button>
          <button 
            onClick={() => handleNavClick('contact')}
            className="block w-full text-left px-3 py-2 text-lg hover:bg-[#FF3366]"
          >
            CONTACT
          </button>
        </div>
      </div>
    </nav>
  );
}
