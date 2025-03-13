'use client';
import React, { useState } from 'react';
import { Video, Camera, ArrowUpRight, Play, Image, Code, Globe, Server } from 'lucide-react';
import Link from 'next/link';

const ServiceCard = ({ 
  href,
  icon: Icon,
  title,
  description, 
  accentColor,
  className
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
  accentColor: string;
  className?: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link href={href}>
      <div 
        className={`relative border-4 border-black p-8 transition-all duration-300 
                   group cursor-pointer h-full bg-white text-black
                   hover:shadow-[8px_8px_0_0_${accentColor}] ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Neo-brutalist asymmetric decorative element */}
        <div 
          className={`absolute top-0 right-0 w-4 h-20 transition-all duration-300`}
          style={{ backgroundColor: accentColor }}
        />
        
        {/* Icon with brutalist animation */}
        <div className="relative mb-8">
          <Icon 
            size={48} 
            className={`transition-transform duration-300 ${isHovered ? 'translate-x-2 -translate-y-2' : ''}`}
          />
          <ArrowUpRight 
            size={24} 
            className={`absolute top-0 right-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>

        {/* Raw, unpolished content with bold typography */}
        <h3 className="text-3xl font-black mb-4 tracking-tight">{title}</h3>
        <p className="text-lg font-mono">{description}</p>

        {/* Service-specific icons with brutalist styling */}
        <div className="mt-8 flex gap-4">
          {title === "VIDEO PRODUCTION" && (
            <>
              <div className="p-2 border-2 border-black">
                <Play size={16} />
              </div>
              <div className="p-2 border-2 border-black">
                <Video size={16} />
              </div>
            </>
          )}
          {title === "PHOTOGRAPHY" && (
            <>
              <div className="p-2 border-2 border-black">
                <Camera size={16} />
              </div>
              <div className="p-2 border-2 border-black">
                <Image size={16} />
              </div>
            </>
          )}
          {title === "WEBSITE DEVELOPMENT" && (
            <>
              <div className="p-2 border-2 border-black">
                <Code size={16} />
              </div>
              <div className="p-2 border-2 border-black">
                <Globe size={16} />
              </div>
              <div className="p-2 border-2 border-black">
                <Server size={16} />
              </div>
            </>
          )}
        </div>
        
        {/* Neo-brutalist decorative element that appears on hover */}
        <div 
          className={`absolute bottom-8 left-2 w-16 h-2 transition-all duration-300
                    ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundColor: accentColor }}
        />
      </div>
    </Link>
  );
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-white text-black relative">
      {/* Raw grid background in neo-brutalist style */}
      <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-1 opacity-10 pointer-events-none">
        {Array(72).fill(null).map((_, i) => (
          <div 
            key={i} 
            className={`border border-black ${i % 7 === 0 ? 'bg-yellow-400' : i % 11 === 0 ? 'bg-red-500' : ''}`} 
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Neo-brutalist section header */}
        <div className="mb-20 relative">
          <h2 className="text-7xl md:text-8xl font-black uppercase tracking-tighter relative z-10">
            SERVICES
          </h2>
          <div className="h-4 w-48 bg-black mt-4" />
          
          {/* Brutalist decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 bg-yellow-400 z-0" />
          <div className="absolute -bottom-4 right-1/4 w-8 h-8 bg-red-500 z-0" />
        </div>

        {/* Services Grid with brutalist layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          <ServiceCard 
            href="/services/video-production"
            icon={Video}
            title="VIDEO PRODUCTION"
            description="Cinematic storytelling that captures attention and drives engagement. Transform your vision into compelling visual narratives."
            accentColor="#FF3366"
          />
          
          <ServiceCard 
            href="/services/photography"
            icon={Camera}
            title="PHOTOGRAPHY"
            description="Striking visuals that communicate your brand's unique story. Create lasting impressions through powerful imagery."
            accentColor="#40E0D0"
          />
          
          <ServiceCard 
            href="/services/web-development"
            icon={Code}
            title="WEBSITE DEVELOPMENT"
            description="Bold, functional websites that break conventions. We build digital experiences that stand out"
            accentColor="#FFD700"
          />
        </div>

        {/* Neo-brutalist decorative elements */}
        <div className="absolute -bottom-12 right-8 w-20 h-4 bg-black" />
        <div className="absolute -bottom-8 right-36 w-4 h-20 bg-black" />
        
        {/* Raw design signature */}
        <div className="mt-24 font-mono text-xs flex justify-end items-center opacity-50">
          <span>RAW_DESIGN.2025</span>
        </div>
      </div>
    </section>
  );
}