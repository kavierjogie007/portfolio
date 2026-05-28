'use client';

import { useEffect, useRef } from 'react';

/**
 * Follows the mouse with a soft radial glow — adds depth and interactivity.
 * Invisible on touch devices.
 */
export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.left = `${e.clientX}px`;
      glowRef.current.style.top = `${e.clientY}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow hidden md:block"
      aria-hidden="true"
    />
  );
}
