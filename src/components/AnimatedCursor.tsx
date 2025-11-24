'use client';

import React, { useState, useEffect } from 'react';

const AnimatedCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false); // <-- NEW STATE

  useEffect(() => {
    setIsMounted(true); // <-- Set mounted flag on client
    
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Return null if not yet mounted (i.e., if rendering on the server)
  if (!isMounted) {
    return null;
  }
  
  return (
    <div
      className="fixed h-48 w-48 rounded-full bg-indigo-500 blur-3xl opacity-50 pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x - 96}px, ${position.y - 96}px, 0)`,
      }}
    />
  );
};

export default AnimatedCursor;