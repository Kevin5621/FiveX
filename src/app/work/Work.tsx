'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, Plus, Circle } from 'lucide-react';

const ProjectCard = ({ index }: { index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Neo-brutalist accent colors yang sesuai dengan komponen lain
  const accentColors = ['#FF3366', '#40E0D0', '#FFD700'];
  const accentColor = accentColors[index % accentColors.length];

  return (
    <div
      className="group relative border-4 border-black overflow-hidden cursor-pointer bg-white
                 transform transition-all duration-300 hover:-translate-y-2 hover:translate-x-2
                 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `8px 8px 0px 0px ${accentColor}` : 'none'
      }}
    >
      <Image
        src="/image.png"
        alt={`Portfolio work ${index + 1}`}
        width={800}
        height={800}
        className="w-full aspect-square object-cover transition-transform duration-700
                   group-hover:scale-110 group-hover:rotate-2"
      />
      
      {/* Hover Overlay in neo-brutalist style */}
      <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-90 
                    transition-all duration-300 flex flex-col items-center justify-center gap-4"
           style={{ backgroundColor: accentColor }}>
        
        <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-300 relative">
          <h3 className="text-black text-3xl font-black uppercase text-center mb-2 opacity-0 group-hover:opacity-100 
                       transition-opacity delay-100">
            Project {index + 1}
          </h3>
          <p className="font-mono text-black opacity-0 group-hover:opacity-100 transition-opacity delay-150">
            Photography & Video Production
          </p>
          
          {/* Neo-brutalist decorative element */}
          <div className="absolute -left-4 top-1/2 w-2 h-12 bg-black opacity-0 group-hover:opacity-100 transition-opacity delay-200"></div>
        </div>
        
        <button className="mt-4 border-4 border-black bg-black text-white px-6 py-3 opacity-0 
                        group-hover:opacity-100 transition-all duration-300 delay-200
                        hover:-translate-y-1 hover:translate-x-1 font-black uppercase flex items-center gap-2
                        hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]">
          <Eye size={20} />
          View Project
        </button>
      </div>

      {/* Neo-brutalist corner decorations */}
      <div className="absolute top-0 right-0 w-6 h-24 opacity-0 group-hover:opacity-100 transition-opacity"
           style={{ backgroundColor: accentColor }}></div>
      
      <div className="absolute bottom-0 left-0 w-24 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
           style={{ backgroundColor: accentColor }}></div>
    </div>
  );
};

export default function Work() {
  return (
    <section id="work" className="py-24 px-4 bg-white text-black relative">
      {/* Raw grid background consistent with other sections */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 grid-rows-6 gap-1 opacity-10 pointer-events-none">
        {Array(72).fill(null).map((_, i) => (
          <div
            key={i}
            className={`border border-black ${i % 7 === 0 ? 'bg-yellow-400' : i % 5 === 0 ? 'bg-red-500' : ''}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Neo-brutalist section header consistent with Services section */}
        <div className="mb-20 relative">
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter relative z-10">
            WORK
          </h2>
          <div className="h-4 w-48 bg-black mt-4" />
          
          {/* Brutalist decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-red-500 z-0" />
          <div className="absolute -bottom-4 right-1/4 w-8 h-8 bg-yellow-400 z-0" />
          
          <button className="absolute right-0 top-8 flex items-center gap-2 bg-black text-white px-8 py-4 
                        hover:-translate-y-2 hover:translate-x-2 transition-all duration-300
                        shadow-[8px_8px_0px_0px_rgba(239,68,68,1)]
                        hover:shadow-[12px_12px_0px_0px_rgba(239,68,68,1)]
                        font-black uppercase">
            <Plus size={24} />
            View All
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6).fill(null).map((_, i) => (
            <ProjectCard key={i} index={i} />
          ))}
        </div>

        {/* Mobile View All Button with neo-brutalist style */}
        <button className="md:hidden w-full mt-12 flex items-center justify-center gap-2 
                       bg-black text-white px-6 py-4
                       hover:-translate-y-2 hover:translate-x-2 transition-all duration-300
                       shadow-[8px_8px_0px_0px_rgba(239,68,68,1)]
                       hover:shadow-[12px_12px_0px_0px_rgba(239,68,68,1)]
                       font-black uppercase">
          <Plus size={24} />
          View All
        </button>
        
        {/* Signature brutalist elements consistent with other sections */}
        <div className="mt-24 font-mono text-xs flex justify-end items-center opacity-50">
          <Circle fill="black" size={8} className="mr-2" />
          <span>RAW_DESIGN.2025</span>
        </div>
        
        {/* Neo-brutalist decorative elements */}
        <div className="absolute -bottom-12 right-8 w-20 h-4 bg-black" />
        <div className="absolute -bottom-8 right-36 w-4 h-20 bg-black" />
      </div>
    </section>
  );
}