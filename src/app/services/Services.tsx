import { Video, Camera } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-white text-[#4A4A4A]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-black mb-16">SERVICES</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Link href="/services/video-production">
            <div className="border-4 border-[#4A4A4A] p-8 hover:bg-[#4A4A4A] hover:text-white transition-colors group cursor-pointer">
              <Video size={48} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">VIDEO PRODUCTION</h3>
              <p className="text-lg">Cinematic storytelling that captures attention and drives engagement.</p>
            </div>
          </Link>
          <Link href="/services/photography">
            <div className="border-4 border-[#4A4A4A] p-8 hover:bg-[#4A4A4A] hover:text-white transition-colors group cursor-pointer">
              <Camera size={48} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">PHOTOGRAPHY</h3>
              <p className="text-lg">Striking visuals that communicate your brand&apos;s unique story.</p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
