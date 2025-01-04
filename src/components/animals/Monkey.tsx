import React from 'react';
import { useAnimalAnimation } from '../hooks/useAnimalAnimation';

const Monkey: React.FC = () => {
  const { position } = useAnimalAnimation({
    startPosition: { x: -100, y: 150 },
    endPosition: { x: window.innerWidth + 100, y: 150 },
    duration: 15000,
    swingRange: 30,
  });

  return (
    <div
      className="fixed pointer-events-none z-10"
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      <div className="relative w-24 h-24">
        <img
          src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?auto=format&fit=crop&q=80&w=96&h=96"
          alt="Monkey"
          className="w-full h-full object-cover rounded-full animate-swing"
        />
      </div>
    </div>
  );
};