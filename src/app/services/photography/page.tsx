'use client';

import { ArrowLeft, Camera, Image, Users } from 'lucide-react';
import Link from 'next/link';

export default function Photography() {
  return (
    <div className="min-h-screen bg-[#4A4A4A] text-white">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#4A4A4A] border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Link 
            href="/" 
            className="flex items-center hover:text-[#FF3366] transition-colors"
          >
            <ArrowLeft className="mr-2" />
            BACK TO HOME
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-none mb-8">
            PHOTO<br />GRAPHY
          </h1>
          <div className="border-4 border-white p-8 bg-[#40E0D0] transform hover:translate-x-2 hover:translate-y-2 transition-transform">
            <p className="text-xl text-[#4A4A4A]">
              We capture moments that matter. Our photography services combine technical excellence
              with creative vision to deliver stunning visual results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border-4 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Camera size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Product Photography</h3>
            <p>Showcase your products in their best light.</p>
          </div>
          <div className="border-4 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Users size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Corporate Portraits</h3>
            <p>Professional headshots and team photos.</p>
          </div>
          <div className="border-4 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Image size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Event Coverage</h3>
            <p>Comprehensive documentation of your events.</p>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-white text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">PORTFOLIO</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="aspect-square border-4 border-[#4A4A4A] bg-[#4A4A4A] hover:bg-[#FF3366] transition-colors"
              >
                {/* Add your images here */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
