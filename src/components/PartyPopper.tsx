import React, { useEffect, useRef } from 'react';

interface PartyPopperProps {
  side: 'left' | 'right';
}

const PartyPopper: React.FC<PartyPopperProps> = ({ side }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 200;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      color: string;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
    }> = [];

    const colors = ['#FF69B4', '#87CEEB', '#98FB98', '#FFD700', '#FF6B6B'];

    function createParticle() {
      const startX = side === 'left' ? 0 : canvas.width;
      const angleRange = side === 'left' ? [-30, 30] : [-150, -210];
      const angle = (Math.random() * (angleRange[1] - angleRange[0]) + angleRange[0]) * Math.PI / 180;
      
      return {
        x: startX,
        y: canvas.height,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedY: Math.sin(angle) * (Math.random() * 15 + 10),
        speedX: Math.cos(angle) * (Math.random() * 15 + 10) * (side === 'left' ? 1 : -1),
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.2,
      };
    }

    // Create initial burst
    for (let i = 0; i < 100; i++) {
      particles.push(createParticle());
    }

    // Create periodic bursts
    const createBurst = () => {
      for (let i = 0; i < 50; i++) {
        particles.push(createParticle());
      }
    };

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.speedY += 0.2; // gravity
        particle.rotation += particle.rotationSpeed;

        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        
        // Draw a star shape
        ctx.beginPath();
        for (let i = 0; i < 5; i++) {
          ctx.lineTo(
            Math.cos((i * 4 * Math.PI) / 5) * particle.size,
            Math.sin((i * 4 * Math.PI) / 5) * particle.size
          );
        }
        ctx.closePath();
        ctx.fillStyle = particle.color;
        ctx.fill();
        ctx.restore();

        // Remove particles that are off screen
        if (particle.y > canvas.height || particle.x < -50 || particle.x > canvas.width + 50) {
          particles.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    // Create new bursts every 3 seconds
    const burstInterval = setInterval(createBurst, 3000);

    return () => clearInterval(burstInterval);
  }, [side]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 ${side === 'left' ? 'left-0' : 'right-0'} h-full pointer-events-none`}
      style={{ width: '200px' }}
    />
  );
};

export default PartyPopper;