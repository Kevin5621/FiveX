'use client';
import React, { useState } from 'react';
import { Twitter, Instagram, Github, Mail, Send, Loader2, ArrowRight, ExternalLink } from 'lucide-react';

export default function ContactFooter() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setFormState({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Github, href: '#', label: 'Github' }
  ];

  return (
    <>
      <section id="contact" className="py-20 px-4 bg-[#40E0D0] text-[#4A4A4A] relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid grid-cols-6 md:grid-cols-12 gap-4 opacity-5 pointer-events-none">
          {Array(72).fill(null).map((_, i) => (
            <div key={i} className="border-2 border-[#4A4A4A]" />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="relative mb-16">
            <h2 className="text-6xl md:text-7xl font-black">
              GET IN TOUCH
              <div className="absolute -top-4 -left-4 w-20 h-20 border-8 border-[#4A4A4A] opacity-10 rotate-12" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="relative">
              <div className="text-xl mb-12 border-l-4 border-[#4A4A4A] pl-6">
                Ready to start your next project? Send us a message and let&apos;s create something amazing together.
              </div>
              
              <div className="space-y-8">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center group space-x-4 text-lg hover:translate-x-2 transition-transform"
                  >
                    <Icon size={32} className="group-hover:scale-110 transition-transform" />
                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">{label}</span>
                    <ArrowRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6 relative">
              {['name', 'email', 'message'].map((field) => (
                <div key={field} className="relative group">
                  {field === 'message' ? (
                    <textarea
                      value={formState[field]}
                      onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                      placeholder={field.toUpperCase()}
                      rows={4}
                      onFocus={() => setActiveField(field)}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-4 border-[#4A4A4A] p-4 text-lg 
                               focus:outline-none focus:border-white transition-colors
                               hover:border-opacity-75"
                    />
                  ) : (
                    <input
                      type={field === 'email' ? 'email' : 'text'} 
                      value={formState[field as keyof typeof formState]}
                      onChange={(e) => setFormState(prev => ({ ...prev, [field]: e.target.value }))}
                      placeholder={field.toUpperCase()}
                      onFocus={() => setActiveField(field)}
                      onBlur={() => setActiveField(null)}
                      className="w-full bg-transparent border-4 border-[#4A4A4A] p-4 text-lg 
                               focus:outline-none focus:border-white transition-colors
                               hover:border-opacity-75"
                    />
                  )}
                  {activeField === field && (
                    <div className="absolute -right-2 -top-2 w-4 h-4 bg-[#4A4A4A] animate-pulse" />
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full border-4 border-[#4A4A4A] p-4 text-xl font-bold
                         hover:bg-[#4A4A4A] hover:text-white transition-all
                         transform hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(74,74,74,0.2)]
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center"
              >
                {isSubmitting ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    SEND MESSAGE
                    <Send size={20} className="ml-2 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t-4 border-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-lg relative group cursor-pointer">
            © 2025 FiveX
            <span className="ml-2 text-sm opacity-60">All rights reserved.</span>
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white 
                          group-hover:w-full transition-all duration-300" />
          </div>
          
          <a href="mailto:hello@fivex.agency" 
             className="mt-4 md:mt-0 flex items-center hover:text-[#40E0D0] transition-colors group">
            <Mail className="mr-2 group-hover:scale-110 transition-transform" />
            hello@fivex.agency
            <ExternalLink size={16} className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Decorative corner elements */}
        <div className="absolute top-0 right-0 w-16 h-16 border-l-4 border-b-4 border-white opacity-20" />
        <div className="absolute bottom-0 left-0 w-16 h-16 border-t-4 border-r-4 border-white opacity-20" />
      </footer>
    </>
  );
}