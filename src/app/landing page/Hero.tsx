'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative min-h-screen bg-[#f4f4f4] text-black grid grid-cols-12 grid-rows-6 gap-4 p-8 font-neue-haas-grotesk overflow-hidden">
      {/* Layered Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent opacity-20"></div>
        <div className="grid grid-cols-12 h-full opacity-10">
          {Array(144).fill(null).map((_, i) => (
            <div 
              key={i} 
              className="border border-black/10 transition-all duration-500 
              hover:bg-black/10"
            />
          ))}
        </div>
      </div>

      {/* Header Navigation */}
      <div className="col-span-2 row-span-1 flex justify-between items-start z-10">
        <div className="space-y-1">
          <div 
            className="text-xs uppercase tracking-wider font-bold cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={`transition-all duration-300 ${isHovered ? 'translate-x-2 text-gray-500' : ''}`}>
              UNCOVER
            </div>
            <div className="text-gray-600">NARRATIVE</div>
          </div>
        </div>
      </div>

      {/* Main Headline */}
      <div className="col-span-10 row-span-3 flex items-center z-10">
        <div className="space-y-2">
          <h1 className="text-[9vw] font-black uppercase leading-none tracking-tighter">
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="block text-gray-900 hover:text-gray-700 transition-colors"
            >
              DIGITAL
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="block text-gray-700 hover:text-gray-500 transition-colors"
            >
              BRAND
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="block text-gray-800 hover:text-gray-600 transition-colors"
            >
              METAMORPHOSIS
            </motion.span>
          </h1>
        </div>
      </div>

      {/* Narrative Description */}
      <div className="col-span-8 row-span-2 flex items-end z-10">
        <div className="space-y-4 relative">
          <div className="absolute -left-12 top-0 bottom-0 w-1 bg-black/20"></div>
          <p className="text-2xl font-light leading-tight relative pl-8">
            <span className="absolute -left-16 top-0 text-gray-400 text-8xl font-bold opacity-30">"</span>
            In the intricate landscape of digital evolution, we orchestrate narratives that transcend mere communication—transforming brands into living, breathing ecosystems of meaningful connection.
            <span className="absolute -right-8 bottom-0 text-gray-400 text-8xl font-bold opacity-30">"</span>
          </p>
        </div>
      </div>

      {/* Metadata and Interaction */}
      <div className="col-span-4 row-span-2 flex items-end justify-end text-right z-10">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-wider text-gray-700 space-y-1">
            <div>© 2025 NARRATIVE STUDIO</div>
            <div className="text-gray-500">TOKYO / LONDON / NEW YORK</div>
          </div>
          <div 
            className="text-sm uppercase tracking-wider text-gray-600 cursor-pointer 
            hover:text-black transition-all group"
          >
            <span className="inline-block transition-transform group-hover:translate-x-2">
              SCROLL TO EXPLORE →
            </span>
          </div>
        </div>
      </div>

      {/* Brutalist Accent Elements */}
      <div className="absolute top-0 bottom-0 left-8 w-px bg-black/10"></div>
      <div className="absolute top-0 bottom-0 right-8 w-px bg-black/10"></div>
      <div className="absolute top-8 left-0 right-0 h-px bg-black/10"></div>
      <div className="absolute bottom-8 left-0 right-0 h-px bg-black/10"></div>
    </section>
  );
};

export default Hero;