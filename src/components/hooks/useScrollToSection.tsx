'use client';

import { useState, useEffect } from 'react';

export const useScrollToSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isBrowser, setIsBrowser] = useState(false);

  // Only set isBrowser to true after component mounts (client-side only)
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const scrollToSection = (id: string) => {
    // Only execute browser-specific code if we're in the browser
    if (isBrowser) {
      const section = document.getElementById(id);
      
      if (section) {
        const targetPosition = section.getBoundingClientRect().top + window.pageYOffset;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1000; // Durasi animasi dalam milliseconds
        let startTime: number | null = null;

        // Fungsi easing untuk animasi yang lebih smooth
        const easeInOutQuad = (t: number) => {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };

        // Fungsi animasi menggunakan requestAnimationFrame
        const animation = (currentTime: number) => {
          if (startTime === null) startTime = currentTime;
          
          const timeElapsed = currentTime - startTime;
          const scrollProgress = Math.min(timeElapsed / duration, 1);
          const ease = easeInOutQuad(scrollProgress);
          
          window.scrollTo(0, startPosition + distance * ease);
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          }
        };

        requestAnimationFrame(animation);
      }
    }
    
    // Tutup menu mobile setelah klik
    setIsOpen(false);
  };

  return { scrollToSection, isOpen, setIsOpen };
};