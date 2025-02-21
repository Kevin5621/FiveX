'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-[#4A4A4A] border-b-4 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <span className="text-2xl font-bold tracking-tighter">FIVEX</span>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-[#FF3366] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden md:flex space-x-8 text-lg">
            <Link href="#services" className="hover:text-[#40E0D0] transition-colors">SERVICES</Link>
            <Link href="#work" className="hover:text-[#40E0D0] transition-colors">WORK</Link>
            <Link href="#contact" className="hover:text-[#40E0D0] transition-colors">CONTACT</Link>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t-4 border-white`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="#services" className="block px-3 py-2 text-lg hover:bg-[#FF3366]">SERVICES</Link>
          <Link href="#work" className="block px-3 py-2 text-lg hover:bg-[#FF3366]">WORK</Link>
          <Link href="#contact" className="block px-3 py-2 text-lg hover:bg-[#FF3366]">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
}
