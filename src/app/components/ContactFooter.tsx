'use client';

import { Twitter, Instagram, Github, Mail } from 'lucide-react';

export default function ContactFooter() {
  return (
    <>
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
    </>
  );
}
