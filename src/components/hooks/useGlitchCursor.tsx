'use client';

import { useEffect } from 'react';

export const useGlitchCursor = () => {
  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    let lastValidX = 0;
    let lastValidY = 0;

    const updateCursorPosition = (e: MouseEvent) => {
      try {
        // Validasi nilai koordinat
        const x = Number.isFinite(e.clientX) ? e.clientX : lastValidX;
        const y = Number.isFinite(e.clientY) ? e.clientY : lastValidY;

        // Update last valid position
        lastValidX = x;
        lastValidY = y;

        // Update cursor position
        cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;

        // Cek element di bawah cursor
        const element = document.elementFromPoint(x, y);
        
        // Update cursor style
        if (element) {
          const isInteractive = 
            element.tagName === 'A' || 
            element.tagName === 'BUTTON' ||
            element.closest('a') ||
            element.closest('button') ||
            element.closest('[role="button"]') ||
            getComputedStyle(element).cursor === 'pointer';

          if (isInteractive) {
            cursor.classList.add('pointer');
          } else {
            cursor.classList.remove('pointer');
          }
        }
      } catch (error) {
        console.error('Cursor update error:', error);
        // Fallback ke posisi terakhir yang valid
        cursor.style.transform = `translate(${lastValidX}px, ${lastValidY}px) translate(-50%, -50%)`;
      }
    };

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => updateCursorPosition(e));
    };

    // Handle scroll dengan throttling
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      if (scrollTimeout) clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const event = new MouseEvent('mousemove', {
          clientX: lastValidX,
          clientY: lastValidY
        });
        updateCursorPosition(event);
      }, 50);
    };

    // Handle window resize
    const handleResize = () => {
      const event = new MouseEvent('mousemove', {
        clientX: lastValidX,
        clientY: lastValidY
      });
      updateCursorPosition(event);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (scrollTimeout) clearTimeout(scrollTimeout);
      cursor.remove();
    };
  }, []);
};