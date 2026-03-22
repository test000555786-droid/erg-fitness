// src/hooks/useCursor.js
import { useEffect, useRef } from 'react';

export const useCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
    };

    const animateRing = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;
      ringEl.style.left = `${ring.current.x}px`;
      ringEl.style.top = `${ring.current.y}px`;
      raf.current = requestAnimationFrame(animateRing);
    };

    const onHover = (e) => {
      const el = e.target.closest('a, button, [data-cursor="hover"]');
      if (el) {
        ringEl.classList.add('hover');
      } else {
        ringEl.classList.remove('hover');
      }
    };

    const onClick = () => {
      ringEl.classList.add('click');
      setTimeout(() => ringEl.classList.remove('click'), 150);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onHover);
    document.addEventListener('click', onClick);
    raf.current = requestAnimationFrame(animateRing);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onHover);
      document.removeEventListener('click', onClick);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return { dotRef, ringRef };
};
