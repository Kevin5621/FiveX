'use client';

import { useState } from 'react';

export const useScrollToSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
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
    
    // Tutup menu mobile setelah klik
    setIsOpen(false);
  };

  return { scrollToSection, isOpen, setIsOpen };
};