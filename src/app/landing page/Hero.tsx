'use client';

import { useScrollToSection } from '@/components/hooks/useScrollToSection';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const { scrollToSection } = useScrollToSection();

  return (
    <section className="pt-32 pb-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-[clamp(60px,10vw,120px)] font-black leading-none uppercase">
          DIGITAL<br />AGENCY<br />REDEFINED
        </h1>
        <p className="mt-8 text-xl max-w-2xl">
            We create bold digital experiences that push boundaries and deliver results.
        </p>
        <button 
            onClick={() => scrollToSection('contact')}
            className="mt-12 group border-4 border-white px-8 py-4 text-xl font-bold hover:bg-white hover:text-[#4A4A4A] transition-colors"
        >
            GET IN TOUCH
            <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
        </button>
      </div>
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 gap-4 opacity-10 pointer-events-none">
        {Array(32).fill(null).map((_, i) => (
            <div key={i} className="border-2 border-white"></div>
        ))}
      </div>
    </section>
  );
}
