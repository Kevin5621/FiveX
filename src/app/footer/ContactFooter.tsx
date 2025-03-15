'use client';
import React, { useState } from 'react';
import { MessageSquare, Instagram, Github, Linkedin, Mail, Send, Loader2, ArrowUpRight, Triangle, Circle } from 'lucide-react';

export default function ContactFooter() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);
  const [activeSocial, setActiveSocial] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: MessageSquare, href: '#', label: 'DISCORD', color: '#5865F2' },
    { icon: Instagram, href: '#', label: 'INSTAGRAM', color: '#E1306C' },
    { icon: Github, href: '#', label: 'GITHUB', color: '#6e5494' },
    { icon: Linkedin, href: '#', label: 'LINKEDIN', color: '#0077B5' }
  ];

  return (
    <>
      <section id="contact" className="py-32 px-4 bg-zinc-900 text-white relative">
        {/* Diagonal grid background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          {Array(24).fill(null).map((_, i) => (
            <div 
              key={i} 
              className="absolute h-px bg-white w-screen"
              style={{ 
                top: `${i * 40}px`, 
                transform: 'rotate(45deg) translateX(-50%)', 
                left: '50%',
                width: '200vw'
              }} 
            />
          ))}
          {Array(24).fill(null).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute w-px bg-white h-screen"
              style={{ 
                left: `${i * 40}px`, 
                transform: 'rotate(45deg) translateY(-50%)', 
                top: '50%',
                height: '200vh' 
              }} 
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Offset section header with stacked text effect */}
          <div className="relative mb-24">
            <h2 className="text-8xl md:text-9xl font-black uppercase relative z-10 tracking-tighter">
              CONTACT
            </h2>
            <div className="text-8xl md:text-9xl font-black uppercase absolute -top-3 -left-3 z-0 text-transparent 
                           stroke-white stroke-2 opacity-30 tracking-tighter">
              CONTACT
            </div>
            <div className="h-8 w-32 bg-red-500 mt-2 ml-2" />
            
            {/* Brutalist decorative elements */}
            <Circle className="absolute top-6 right-16 fill-yellow-400" size={24} />
            <div className="absolute -bottom-6 right-1/3 w-24 h-3 bg-blue-500 z-0" />
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Left Column - Form (now wider) */}
            <div className="md:col-span-3 relative border-8 border-white p-8">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-red-500"></div>
              
              <h3 className="text-3xl font-black mb-8 uppercase border-b-4 border-red-500 pb-2 inline-block">
                SEND A MESSAGE
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email', 'message'].map((field, index) => (
                  <div key={field} className="relative group">
                    <label className="uppercase text-sm font-mono mb-2 block opacity-80">
                      {field}
                      {index === 0 && <span className="text-red-500">*</span>}
                      {index === 1 && <span className="text-yellow-400">*</span>}
                      {index === 2 && <span className="text-blue-500">*</span>}
                    </label>
                    
                    {field === 'message' ? (
                      <textarea
                        value={formState[field]}
                        onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                        rows={4}
                        onFocus={() => setFocusedInput(field)}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full bg-zinc-800 border-4 border-white p-4
                                 focus:outline-none focus:border-red-500 transition-all duration-300
                                 font-mono"
                        style={{
                          boxShadow: focusedInput === field ? '8px 8px 0px 0px rgba(239,68,68,1)' : 'none'
                        }}
                      />
                    ) : (
                      <input
                        type={field === 'email' ? 'email' : 'text'} 
                        value={formState[field as keyof typeof formState]}
                        onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                        onFocus={() => setFocusedInput(field)}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full bg-zinc-800 border-4 border-white p-4
                                 focus:outline-none focus:border-red-500 transition-all duration-300
                                 font-mono"
                        style={{
                          boxShadow: focusedInput === field ? '8px 8px 0px 0px rgba(239,68,68,1)' : 'none'
                        }}
                      />
                    )}
                    
                    <div className={`absolute -bottom-1 right-0 w-4 h-4 
                                    ${index === 0 ? 'bg-red-500' : index === 1 ? 'bg-yellow-400' : 'bg-blue-500'}
                                    transition-opacity duration-300
                                    ${focusedInput === field ? 'opacity-100' : 'opacity-0'}`} />
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-6 bg-white text-black border-4 border-white py-4 px-8 text-xl font-black tracking-wider
                           transition-all duration-300 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-red-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
                  <div className="flex items-center justify-center relative z-10 group-hover:text-white transition-colors duration-300">
                    {isSubmitting ? (
                      <Loader2 className="animate-spin" size={24} />
                    ) : (
                      <>
                        SEND IT
                        <Send size={20} className="ml-3" />
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>

            {/* Right Column - Social media and info */}
            <div className="md:col-span-2 relative">
              <div className="text-xl mb-12 font-mono relative p-6 bg-zinc-800">
                Let&apos;s create something extraordinary together. Reach out and we&apos;ll respond within 24 hours.
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-yellow-400"></div>
                <div className="absolute -bottom-3 -right-3 w-6 h-6 bg-red-500"></div>
              </div>
              
              <div className="space-y-6">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center group relative py-4 px-6"
                    onMouseEnter={() => setActiveSocial(label)}
                    onMouseLeave={() => setActiveSocial(null)}
                  >
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
                    <div 
                      className="w-12 h-12 flex items-center justify-center"
                      style={{
                        backgroundColor: activeSocial === label ? color : 'transparent',
                        border: '3px solid white',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <span className="font-bold ml-6 tracking-wider text-lg">{label}</span>
                    <ArrowUpRight 
                      className="ml-auto transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" 
                      size={20} 
                    />
                    
                    <div className="absolute bottom-0 left-0 w-full h-px bg-white opacity-30"></div>
                  </a>
                ))}
              </div>
              
              <div className="mt-16 border-t-2 border-white pt-6 flex items-center">
                <div className="w-12 h-12 border-3 border-white flex items-center justify-center mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm font-mono opacity-70">EMAIL US AT</div>
                  <a href="mailto:hello@fivex.agency" className="font-bold hover:text-red-500 transition-colors">
                    hello@fivex.agency
                  </a>
                </div>
              </div>
              
              {/* Brutalist decorative element */}
              <div className="absolute top-1/2 -right-4 w-2 h-32 bg-red-500"></div>
            </div>
          </div>
        </div>
        
        {/* Neo-brutalist decorative elements */}
        <Triangle className="absolute top-16 left-16 fill-blue-500 transform rotate-45" size={24} />
        <Triangle className="absolute bottom-16 right-16 fill-red-500" size={24} />
      </section>

      {/* Footer with brutalist styling */}
      <footer className="py-12 px-4 bg-white text-black relative overflow-hidden">
        <div className="absolute inset-0">
          {Array(40).fill(null).map((_, i) => (
            <div 
              key={i} 
              className="absolute w-full h-px bg-black opacity-10"
              style={{ top: `${i * 20}px` }} 
            />
          ))}
          {Array(60).fill(null).map((_, i) => (
            <div 
              key={`v-${i}`} 
              className="absolute h-full w-px bg-black opacity-10"
              style={{ left: `${i * 20}px` }} 
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-12">
            <div className="text-4xl font-black relative">
              FIVEX
              <div className="absolute -top-2 -left-2 text-4xl font-black text-transparent stroke-black stroke-1 opacity-20">
                FIVEX
              </div>
            </div>
            
            <div className="font-mono text-sm opacity-70 border-l-4 border-red-500 pl-4">
              BRUTALIST DESIGN STUDIO<br />
              SINCE 2025
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 flex items-center space-x-6">
            <div className="text-xs font-mono opacity-70">© 2025 ALL RIGHTS RESERVED</div>
            <div className="w-2 h-2 bg-red-500"></div>
            <a href="#" className="font-bold underline underline-offset-4 hover:text-red-500 transition-colors">
              PRIVACY
            </a>
            <div className="w-2 h-2 bg-black"></div>
            <a href="#" className="font-bold underline underline-offset-4 hover:text-red-500 transition-colors">
              TERMS
            </a>
          </div>
        </div>

        {/* Brutalist decorative elements */}
        <div className="absolute top-0 left-0 w-20 h-6 bg-red-500" />
        <div className="absolute bottom-0 right-0 w-6 h-20 bg-yellow-400" />
        <Circle className="absolute bottom-8 left-1/2 fill-black opacity-20" size={12} />
      </footer>
    </>
  );
}