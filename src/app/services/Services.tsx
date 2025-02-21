'use client';
import React, { useState } from 'react';
import { Video, Camera, ArrowUpRight, Play, Image } from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ 
  href,
  icon: Icon,
  title,
  description, 
  hoverColor,
  className
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  hoverColor: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <div 
        className={`relative border-4 border-[#4A4A4A] p-8 transition-all duration-300 
                   group cursor-pointer h-full transform hover:-translate-y-2
                   hover:shadow-[8px_8px_0px_0px_#000] ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          backgroundColor: isHovered ? hoverColor : 'white',
          borderColor: isHovered ? hoverColor : '#4A4A4A',
          color: isHovered ? 'white' : '#4A4A4A'
        }}
      >
        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-12 h-12 border-b-4 border-l-4 border-[#4A4A4A] 
                      group-hover:border-white transition-colors" />
        
        {/* Icon with animation */}
        <div className="relative">
          <Icon size={48} className="mb-6 transform group-hover:scale-110 transition-transform" />
          <ArrowUpRight 
            size={24} 
            className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 
                       transform -translate-x-8 translate-y-8 group-hover:translate-x-0 
                       group-hover:translate-y-0 transition-all duration-300"
          />
        </div>

        {/* Content */}
        <h3 className="text-3xl font-bold mb-4 tracking-tight">{title}</h3>
        <p className="text-lg">{description}</p>

        {/* Service-specific icons */}
        <div className="mt-8 flex gap-4 opacity-60">
          {title === "VIDEO PRODUCTION" ? (
            <>
              <Play size={20} className="group-hover:animate-bounce" />
              <Video size={20} className="group-hover:animate-pulse" />
            </>
          ) : (
            <>
              <Camera size={20} className="group-hover:animate-bounce" />
              <Image size={20} className="group-hover:animate-pulse" />
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white text-[#4A4A4A] relative">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid grid-cols-8 md:grid-cols-12 gap-4 opacity-5 pointer-events-none">
        {Array(96).fill(null).map((_, i) => (
          <div key={i} className="border border-[#4A4A4A]" />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="mb-16 relative">
          <h2 className="text-6xl md:text-7xl font-black relative z-10">
            SERVICES
          </h2>
          <div className="absolute -top-4 -left-4 w-20 h-20 border-8 border-[#4A4A4A] 
                        opacity-10 transform -rotate-6" />
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ServiceCard 
            className="force-cursor-teal"
            href="/services/video-production"
            icon={Video}
            title="VIDEO PRODUCTION"
            description="Cinematic storytelling that captures attention and drives engagement. Transform your vision into compelling visual narratives."
            hoverColor="#FF3366"
          />
          
          <ServiceCard 
            href="/services/photography"
            icon={Camera}
            title="PHOTOGRAPHY"
            description="Striking visuals that communicate your brand's unique story. Create lasting impressions through powerful imagery."
            hoverColor="#40E0D0"
          />
        </div>

        {/* Decorative Elements */}
        <div className="absolute -bottom-10 right-0 w-24 h-24 border-8 border-[#4A4A4A] 
                      opacity-10 transform rotate-12" />
      </div>
    </section>
  );
}