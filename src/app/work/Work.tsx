'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, Plus } from 'lucide-react';

const ProjectCard = ({ index }: { index: number }) => {
  const [, setIsHovered] = useState(false);

  return (
    <div
      className="group relative border-4 border-white overflow-hidden cursor-pointer
                 transform transition-all duration-300 hover:-translate-y-2
                 hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/image.png"
        alt={`Portfolio work ${index + 1}`}
        width={800}
        height={800}
        className="w-full aspect-square object-cover transition-transform duration-700
                   group-hover:scale-110 group-hover:rotate-2"
      />
      
      {/* Hover Overlay */}
      <div className="force-cursor-teal absolute inset-0 bg-[#FF3366] bg-opacity-0 group-hover:bg-opacity-90 
                    transition-all duration-300 flex flex-col items-center justify-center gap-4">
        <div className="translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white text-2xl font-bold text-center mb-2 opacity-0 group-hover:opacity-100 
                       transition-opacity delay-100">
            Project {index + 1}
          </h3>
          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity delay-150">
            Photography & Video Production
          </p>
        </div>
        
        <button className="mt-4 border-2 border-white text-white px-6 py-2 opacity-0 
                        group-hover:opacity-100 transition-all duration-300 delay-200
                        hover:bg-white hover:text-[#FF3366] flex items-center gap-2">
          <Eye size={20} />
          VIEW PROJECT
        </button>
      </div>

      {/* Corner Decorations */}
      <div className="absolute top-0 left-0 w-12 h-12 border-r-4 border-b-4 border-white 
                    opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-12 h-12 border-l-4 border-t-4 border-white 
                    opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
  );
};

export default function Work() {
  return (
    <section id="work" className="py-20 px-4 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 opacity-10 pointer-events-none">
        {Array(72).fill(null).map((_, i) => (
          <div key={i} className="border border-white"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="relative mb-16 flex items-center justify-between">
          <h2 className="text-6xl md:text-7xl font-black relative z-10">
            WORK
            <div className="absolute -top-4 -left-4 w-20 h-20 border-8 border-white 
                          opacity-10 rotate-12" />
          </h2>
          
          <button className="hidden md:flex items-center gap-2 border-4 border-white px-6 py-3 
                         hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Plus size={24} />
            VIEW ALL
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array(6).fill(null).map((_, i) => (
            <ProjectCard key={i} index={i} />
          ))}
        </div>

        {/* Mobile View All Button */}
        <button className="md:hidden w-full mt-8 flex items-center justify-center gap-2 
                       border-4 border-white px-6 py-3 hover:bg-white 
                       hover:text-[#4A4A4A] transition-colors">
          <Plus size={24} />
          VIEW ALL
        </button>
      </div>
    </section>
  );
}