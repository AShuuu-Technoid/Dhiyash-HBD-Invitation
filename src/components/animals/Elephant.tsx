import React from 'react';
import { useAnimalAnimation } from '../hooks/useAnimalAnimation';

const Elephant: React.FC = () => {
  const { position } = useAnimalAnimation({
    startPosition: { x: window.innerWidth + 100, y: window.innerHeight - 200 },
    endPosition: { x: -200, y: window.innerHeight - 200 },
    duration: 20000,
    delay: 5000,
  });

  return (
    <div
      className="fixed pointer-events-none z-10"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scaleX(-1)`,
        transition: 'transform 0.5s ease-in-out',
      }}
    >
      <div className="relative w-32 h-32">
        <img
          src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&q=80&w=128&h=128"
          alt="Elephant"
          className="w-full h-full object-cover rounded-full animate-walk"
        />
      </div>
    </div>
  );
};