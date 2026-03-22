// src/pages/Home/HeroSection.jsx
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleField from '@/components/effects/ParticleField';
import Scene from '@/components/three/Scene';
import { ChevronDown } from 'lucide-react';

const heroWords = ['PUSH', 'BEYOND', 'LIMITS'];

const scrollToNext = () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  });
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden mt-20 mb-20">
      {/* Deep background */}
      <div className="absolute inset-0 mesh-gradient" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Particles */}
      <ParticleField count={30} />

      {/* Canvas Scene — right side */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-full opacity-90 pointer-events-none">
        <Scene />
      </div>

      {/* Radial glow behind 3D */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(212,175,55,0.12) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 pt-26 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 3.1, duration: 0.6 }}
            className="section-label mb-6 mt-4"
          >
            ★ 4.9 Google Rating — Bhatapada's Premium Gym
          </motion.div>

          <div className="overflow-hidden">
            {heroWords.map((word, i) => (
              <div key={word} className="overflow-hidden block">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{
                    delay: 3.2 + i * 0.12,
                    duration: 0.9,
                    ease: [0.4, 0, 0.2, 1],
                  }}
                  className={`font-heading block leading-[0.9] ${
                    i === 1
                      ? 'gradient-text text-[clamp(4rem,12vw,9rem)]'
                      : 'text-white text-[clamp(4rem,12vw,9rem)]'
                  }`}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.65, duration: 0.7 }}
            className="text-white/55 text-lg mt-2 max-w-lg leading-relaxed"
          >
            Odisha's most elite training experience. Expert coaches, world-class equipment, 
            and a community that pushes you further than you thought possible.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.8, duration: 0.9 }}
            className="flex flex-wrap gap-4 mt-6"
          >
            <Link to="/membership" className="btn-primary text-sm py-4 px-8 inline-flex items-center gap-2 !text-black">
              Join Now — Free Trial
              <span className="text-lg">→</span>
            </Link>
            <Link to="/programs" className="btn-outline text-sm py-4 px-8 inline-flex items-center gap-2">
              Explore Programs
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4.0, duration: 0.7 }}
            className="flex flex-wrap gap-8 mt-12 pt-10 border-t border-white/8"
          >
            {[
              { val: '500+', label: 'Active Members' },
              { val: '4.9★', label: 'Google Rating' },
              { val: '8+', label: 'Expert Coaches' },
              { val: '5+', label: 'Years of Excellence' },
            ].map((stat) => (
              <div key={stat.val}>
                <p className="font-heading text-3xl text-primary">{stat.val}</p>
                <p className="text-white/40 text-xs font-accent tracking-wider uppercase mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />

      

      {/* Scroll down indicator */}

      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.2 }}
        className="absolute bottom-8 left-1/2 right-1/4 -translate-x-1/2 flex flex-col items-center gap-2 mt-12 pt-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-primary to-transparent mt-12 pt-10"
        />
      
        <span className="font-accent text-white/30 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div> */}

      {/* Scroll down indicator */}
<motion.button
  className="absolute bottom-28 md:bottom-10 right-8 flex flex-col items-center gap-1.5 group"
  onClick={scrollToNext}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2, duration: 0.5 }}
>
  <span
    className="text-[12px] font-accent tracking-[0.2em] uppercase"
    style={{
      color: 'rgba(255,255,255,0.3)',
      writingMode: 'vertical-rl',
    }}
  >
    Scroll
  </span>

  <motion.div
    animate={{ y: [0, 6, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
  >
    <ChevronDown size={16} style={{ color: 'rgba(255,255,255,0.3)' }} />
  </motion.div>
</motion.button>
      

    </section>
  );
}