import React from 'react';
import { useAnimalAnimation } from '../hooks/useAnimalAnimation';

const Lion: React.FC = () => {
  const { position } = useAnimalAnimation({
    startPosition: { x: -150, y: window.innerHeight - 150 },
    endPosition: { x: window.innerWidth + 150, y: window.innerHeight - 150 },
    duration: 18000,
    delay: 2000,
  });

  return (
    <div
      className="fixed pointer-events-none z-10"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      <div className="relative w-28 h-28">
        <img
          src="https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=112&h=112"
          alt="Lion"
          className="w-full h-full object-cover rounded-full animate-walk"
        />
      </div>
    </div>
  );
};