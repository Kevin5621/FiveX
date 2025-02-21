'use client';

import { ArrowLeft, Play, Film, Monitor } from 'lucide-react';
import Link from 'next/link';

export default function VideoProduction() {
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
            VIDEO<br />PRODUCTION
          </h1>
          <div className="border-4 border-white p-8 bg-[#FF3366] transform hover:translate-x-2 hover:translate-y-2 transition-transform">
            <p className="text-xl">
              We create compelling video content that tells your story and engages your audience.
              From concept to final delivery, we handle every aspect of video production.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="border-4 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Play size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Commercial Production</h3>
            <p>High-impact video ads that convert viewers into customers.</p>
          </div>
          <div className="border-4 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Film size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Corporate Videos</h3>
            <p>Professional company videos that showcase your brand identity.</p>
          </div>
          <div className="border-4 border-white p-8 hover:bg-white hover:text-[#4A4A4A] transition-colors">
            <Monitor size={48} className="mb-6" />
            <h3 className="text-2xl font-bold mb-4">Content Creation</h3>
            <p>Engaging social media and web content that drives engagement.</p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-[#40E0D0] text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black mb-16">OUR PROCESS</h2>
          <div className="space-y-8">
            {[
              { step: "01", title: "PRE-PRODUCTION", desc: "Planning, scripting, and storyboarding" },
              { step: "02", title: "PRODUCTION", desc: "Professional filming with top-tier equipment" },
              { step: "03", title: "POST-PRODUCTION", desc: "Editing, color grading, and final touches" }
            ].map((item) => (
              <div key={item.step} className="border-4 border-[#4A4A4A] p-8 hover:bg-[#4A4A4A] hover:text-white transition-colors">
                <div className="flex items-start gap-8">
                  <span className="text-4xl font-bold">{item.step}</span>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-lg">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
