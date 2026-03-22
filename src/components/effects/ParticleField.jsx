// src/components/effects/ParticleField.jsx
import { useEffect, useRef } from 'react';

export default function ParticleField({ count = 40, className = '' }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const particles = [];
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const size = Math.random() * 3 + 2;
      const x = Math.random() * 100;
      const delay = Math.random() * 8;
      const duration = 6 + Math.random() * 8;
      const opacity = Math.random() * 0.4 + 0.1;

      p.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: #D4AF37;
        border-radius: 50%;
        left: ${x}%;
        bottom: -10px;
        opacity: ${opacity};
        animation: particleFloat ${duration}s ease-in-out ${delay}s infinite;
        will-change: transform, opacity;
      `;
      container.appendChild(p);
      particles.push(p);
    }

    // Add keyframes
    const style = document.createElement('style');
    style.textContent = `
      @keyframes particleFloat {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.4; }
        90% { opacity: 0.1; }
        100% { transform: translateY(-100vh) translateX(${Math.random() > 0.5 ? '' : '-'}${Math.random() * 60}px); opacity: 0; }
      }
    `;
    document.head.appendChild(style);

    return () => {
      particles.forEach((p) => p.remove());
      style.remove();
    };
  }, [count]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    />
  );
}
