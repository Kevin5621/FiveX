'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight, Camera, Video, Mail, Github, Twitter, Instagram } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#4A4A4A] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 bg-[#4A4A4A] border-b-4 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <span className="text-2xl font-bold tracking-tighter">FIVEX</span>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 hover:bg-[#FF3366] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="hidden md:flex space-x-8 text-lg">
              <Link href="#services" className="hover:text-[#40E0D0] transition-colors">SERVICES</Link>
              <Link href="#work" className="hover:text-[#40E0D0] transition-colors">WORK</Link>
              <Link href="#contact" className="hover:text-[#40E0D0] transition-colors">CONTACT</Link>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} border-t-4 border-white`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#services" className="block px-3 py-2 text-lg hover:bg-[#FF3366]">SERVICES</Link>
            <Link href="#work" className="block px-3 py-2 text-lg hover:bg-[#FF3366]">WORK</Link>
            <Link href="#contact" className="block px-3 py-2 text-lg hover:bg-[#FF3366]">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[clamp(60px,10vw,120px)] font-black leading-none uppercase">
            DIGITAL<br />AGENCY<br />REDEFINED
          </h1>
          <p className="mt-8 text-xl max-w-2xl">
            We create bold digital experiences that push boundaries and deliver results.
          </p>
          <button className="mt-12 group border-4 border-white px-8 py-4 text-xl font-bold hover:bg-white hover:text-[#4A4A4A] transition-colors">
            GET IN TOUCH
            <ArrowRight className="inline ml-2 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
        {/* Grid Background */}
        <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-8 gap-4 opacity-10 pointer-events-none">
          {Array(32).fill(null).map((_, i) => (
            <div key={i} className="border-2 border-white"></div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16">SERVICES</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border-4 border-[#4A4A4A] p-8 hover:bg-[#4A4A4A] hover:text-white transition-colors group">
              <Video size={48} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">VIDEO PRODUCTION</h3>
              <p className="text-lg">Cinematic storytelling that captures attention and drives engagement.</p>
            </div>
            <div className="border-4 border-[#4A4A4A] p-8 hover:bg-[#4A4A4A] hover:text-white transition-colors group">
              <Camera size={48} className="mb-6" />
              <h3 className="text-3xl font-bold mb-4">PHOTOGRAPHY</h3>
              <p className="text-lg">Striking visuals that communicate your brand&apos;s unique story.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16">WORK</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              // "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=800&q=80",
              // "https://images.unsplash.com/photo-1542744095-291d1f67b221?auto=format&fit=crop&w=800&q=80",
              // "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80",
              // "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
              // "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80",
              // "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=800&q=80"
            ].map((src, i) => (
              <div key={i} className="group relative border-4 border-white overflow-hidden">
                <Image
                  src={src}
                  alt={`Portfolio work ${i + 1}`}
                  width={800}
                  height={800}
                  className="w-full aspect-square object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#FF3366] bg-opacity-0 group-hover:bg-opacity-90 transition-all flex items-center justify-center">
                  <span className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW PROJECT
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-[#40E0D0] text-[#4A4A4A]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl font-black mb-16">GET IN TOUCH</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <p className="text-xl mb-8">
                Ready to start your next project? Send us a message and let&apos;s create something amazing together.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter size={32} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram size={32} />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Github size={32} />
                </a>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="NAME"
                  className="w-full bg-transparent border-4 border-[#4A4A4A] p-4 text-lg focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL"
                  className="w-full bg-transparent border-4 border-[#4A4A4A] p-4 text-lg focus:outline-none focus:border-white"
                />
              </div>
              <div>
                <textarea
                  placeholder="MESSAGE"
                  rows={4}
                  className="w-full bg-transparent border-4 border-[#4A4A4A] p-4 text-lg focus:outline-none focus:border-white"
                ></textarea>
              </div>
              <button className="w-full border-4 border-[#4A4A4A] p-4 text-xl font-bold hover:bg-[#4A4A4A] hover:text-white transition-colors">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-lg">© 2025 FiveX. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <Mail className="inline mr-2" /> hello@fivex.agency
          </div>
        </div>
      </footer>
    </div>
  );
}