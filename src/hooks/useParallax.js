// src/hooks/useParallax.js
import { useEffect, useRef } from 'react';

export const useParallax = (speed = 0.3) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const offset = (rect.top + rect.height / 2 - centerY) * speed;
      el.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return ref;
};

// src/hooks/useAnimation.js — included here as separate export
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (options = {}) => {
  const ref = useRef(null);

  const {
    from = { opacity: 0, y: 60 },
    to = { opacity: 1, y: 0 },
    duration = 0.8,
    delay = 0,
    stagger = 0.12,
    trigger = 'top 85%',
    children = false,
  } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const targets = children ? el.querySelectorAll(':scope > *') : el;

    const ctx = gsap.context(() => {
      gsap.fromTo(targets, from, {
        ...to,
        duration,
        delay,
        stagger: children ? stagger : 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: trigger,
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return ref;
};

export const useTextReveal = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(el, 
        { opacity: 0, y: '100%' },
        {
          opacity: 1,
          y: '0%',
          duration: 1,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return ref;
};
