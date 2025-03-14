'use client';

import { ArrowLeft, Camera, Image, Users } from 'lucide-react';
import Link from 'next/link';

export default function Photography() {
  return (
    <div className="min-h-screen bg-[#4A4A4A] text-white relative">
      {/* Grid Background */}
      <div className="fixed inset-0 grid grid-cols-4 md:grid-cols-8 gap-4 pointer-events-none">
        {Array(32).fill(null).map((_, i) => (
          <div key={i} className="border border-white/10"></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#4A4A4A] border-b-8 border-white">
        <div className="max-w-7xl mx-auto px-4 h-20 flex items-center">
          <Link 
            href="/" 
            className="flex items-center hover:bg-[#40E0D0] hover:text-[#4A4A4A] p-3 border-4 border-white transition-colors group"
          >
            <ArrowLeft className="mr-2 group-hover:transform group-hover:-translate-x-2 transition-transform" />
            BACK TO HOME
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="relative">
            <h1 className="text-[clamp(40px,8vw,80px)] font-black leading-none mb-8 relative z-10">
              PHOTO<br />GRAPHY
            </h1>
            <div className="absolute -top-4 -left-4 text-[clamp(40px,8vw,80px)] font-black leading-none text-transparent [-webkit-text-stroke:2px_#40E0D0]">
              PHOTO<br />GRAPHY
            </div>
          </div>
          <div className="border-8 border-white p-8 bg-[#40E0D0] transform hover:translate-x-4 hover:translate-y-4 transition-transform shadow-neo">
            <div className="text-xl text-[#4A4A4A] font-bold">
              We capture moments that matter. Our photography services combine technical excellence
              with creative vision to deliver stunning visual results.
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Camera, title: "Product Photography", desc: "Showcase your products in their best light." },
            { icon: Users, title: "Corporate Portraits", desc: "Professional headshots and team photos." },
            { icon: Image, title: "Event Coverage", desc: "Comprehensive documentation of your events." }
          ].map((service, i) => (
            <div 
              key={i}
              className="border-8 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors transform hover:-translate-y-2 shadow-neo group"
            >
              <service.icon size={48} className="mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <div className="font-bold">{service.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-4 bg-white text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16 relative">
            <span className="relative z-10">PORTFOLIO</span>
            <span className="absolute -top-2 -left-2 text-5xl font-black text-transparent [-webkit-text-stroke:2px_#FF3366]">PORTFOLIO</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className="aspect-square border-8 border-[#4A4A4A] bg-[#4A4A4A] hover:bg-[#FF3366] transition-colors transform hover:translate-x-2 hover:translate-y-2 shadow-neo-dark group"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity h-full flex items-center justify-center">
                  <span className="text-white font-black text-2xl">VIEW PROJECT</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-white p-12 hover:bg-[#40E0D0] transition-colors transform hover:translate-x-4 hover:translate-y-4 shadow-neo group">
            <h2 className="text-4xl font-black mb-6">READY TO START YOUR PROJECT?</h2>
            <button className="bg-white text-[#4A4A4A] px-8 py-4 font-black text-xl border-4 border-[#4A4A4A] 
                           hover:bg-[#4A4A4A] hover:text-white transition-colors transform hover:-translate-y-2 shadow-neo">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
