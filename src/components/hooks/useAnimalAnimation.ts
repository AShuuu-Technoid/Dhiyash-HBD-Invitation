import { useState, useEffect } from 'react';

interface Position {
  x: number;
  y: number;
}

interface AnimationConfig {
  startPosition: Position;
  endPosition: Position;
  duration: number;
  delay?: number;
  swingRange?: number;
}

export const useAnimalAnimation = ({
  startPosition,
  endPosition,
  duration,
  delay = 0,
  swingRange = 0,
}: AnimationConfig) => {
  const [position, setPosition] = useState(startPosition);

  useEffect(() => {
    const animate = () => {
      const startTime = Date.now();

      const updatePosition = () => {
        const elapsed = (Date.now() - startTime) % (duration + delay);
        
        if (elapsed < delay) {
          requestAnimationFrame(updatePosition);
          return;
        }

        const progress = (elapsed - delay) / duration;
        const x = startPosition.x + (endPosition.x - startPosition.x) * progress;
        let y = startPosition.y + (endPosition.y - startPosition.y) * progress;

        if (swingRange > 0) {
          y += Math.sin(progress * Math.PI * 4) * swingRange;
        }

        setPosition({ x, y });

        if (progress < 1) {
          requestAnimationFrame(updatePosition);
        } else {
          setPosition(startPosition);
          animate();
        }
      };

      requestAnimationFrame(updatePosition);
    };

    animate();
  }, [startPosition, endPosition, duration, delay, swingRange]);

  return { position };
};