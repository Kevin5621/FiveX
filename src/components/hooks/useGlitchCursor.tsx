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
        const x = Number.isFinite(e.clientX) ? e.clientX : lastValidX;
        const y = Number.isFinite(e.clientY) ? e.clientY : lastValidY;
    
        lastValidX = x;
        lastValidY = y;
    
        cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    
        const element = document.elementFromPoint(x, y);
        
        if (element) {
          const isInteractive = 
            element.tagName === 'A' || 
            element.tagName === 'BUTTON' ||
            element.closest('a') ||
            element.closest('button') ||
            element.closest('[role="button"]') ||
            element.closest('.force-cursor-teal') || // Add force-cursor-teal check
            getComputedStyle(element).cursor === 'pointer';
    
          if (isInteractive) {
            cursor.classList.add('pointer');
            
            // Always add pointer-teal for force-cursor-teal elements
            if (element.closest('.force-cursor-teal')) {
              cursor.classList.add('pointer-teal');
              cursor.classList.remove('pointer-red');
            }
            // Remove previous hover effect checks since we want all teal
            else {
              cursor.classList.remove('pointer-teal', 'pointer-red');
            }
          } else {
            cursor.classList.remove('pointer', 'pointer-teal', 'pointer-red');
          }
        }
      } catch (error) {
        console.error('Cursor update error:', error);
        cursor.style.transform = `translate3d(${lastValidX}px, ${lastValidY}px, 0)`;
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