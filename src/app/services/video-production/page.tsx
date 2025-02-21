'use client';

import { ArrowLeft, Play, Film, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function VideoProduction() {
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
            className="flex items-center hover:bg-[#FF3366] hover:text-white p-3 border-4 border-white transition-colors group"
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
              VIDEO<br />PRODUCTION
            </h1>
            <div className="absolute -top-4 -left-4 text-[clamp(40px,8vw,80px)] font-black leading-none text-transparent [-webkit-text-stroke:2px_#FF3366]">
              VIDEO<br />PRODUCTION
            </div>
          </div>
          <div className="border-8 border-white p-8 bg-[#FF3366] transform hover:translate-x-4 hover:translate-y-4 transition-transform shadow-neo">
            <p className="text-xl font-bold">
              We create compelling video content that tells your story and engages your audience.
              From concept to final delivery, we handle every aspect of video production.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: Play, title: "Commercial Production", desc: "High-impact video ads that convert viewers into customers." },
            { icon: Film, title: "Corporate Videos", desc: "Professional company videos that showcase your brand identity." },
            { icon: Monitor, title: "Content Creation", desc: "Engaging social media and web content that drives engagement." }
          ].map((service, i) => (
            <div 
              key={i}
              className="border-8 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors transform hover:-translate-y-2 shadow-neo group"
            >
              <service.icon size={48} className="mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="font-bold">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#40E0D0] text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16 relative">
            <span className="relative z-10">OUR PROCESS</span>
            <span className="absolute -top-2 -left-2 text-5xl font-black text-transparent [-webkit-text-stroke:2px_#FF3366]">OUR PROCESS</span>
          </h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "PRE-PRODUCTION", desc: "Planning, scripting, and storyboarding" },
              { step: "02", title: "PRODUCTION", desc: "Professional filming with top-tier equipment" },
              { step: "03", title: "POST-PRODUCTION", desc: "Editing, color grading, and final touches" }
            ].map((item) => (
              <div 
                key={item.step} 
                className="border-8 border-[#4A4A4A] p-8 bg-white hover:bg-[#4A4A4A] hover:text-white 
                         transition-colors transform hover:translate-x-2 shadow-neo-dark group"
              >
                <div className="flex items-start gap-8">
                  <span className="text-6xl font-black group-hover:text-[#FF3366] transition-colors">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-2xl font-black mb-2">{item.title}</h3>
                    <p className="text-lg font-bold">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="border-8 border-white p-12 hover:bg-[#FF3366] transition-colors transform hover:translate-x-4 hover:translate-y-4 shadow-neo group">
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
