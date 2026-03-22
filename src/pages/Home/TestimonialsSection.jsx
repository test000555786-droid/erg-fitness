// src/pages/Home/TestimonialsSection.jsx
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/data/testimonials';
import { GYM_INFO } from '@/utils/constants';

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef(null);

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, 5000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (i) => {
    clearInterval(intervalRef.current);
    setActive(i);
    startInterval();
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-6 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)' }} />

      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left: header + rating */}
          <div className="lg:w-2/5 lg:sticky lg:top-28">
            <SectionHeader
              label="Success Stories"
              title="REAL PEOPLE,"
              highlight="REAL RESULTS"
              subtitle="Over 200 five-star reviews. Join hundreds of members who've transformed their lives at ERG Fitness."
            />

            {/* Rating block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6 mt-2"
            >
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="font-heading text-6xl gradient-text">{GYM_INFO.rating}</p>
                  <div className="flex gap-1 mt-1 justify-center">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-primary text-lg">★</span>
                    ))}
                  </div>
                </div>
                <div className="flex-1 pl-4 border-l border-white/10">
                  <p className="text-white font-accent font-700 tracking-wider">Google Reviews</p>
                  <p className="text-white/50 text-sm mt-1">Based on {GYM_INFO.reviews}+ verified reviews</p>
                  <p className="text-primary/80 text-xs font-accent tracking-widest uppercase mt-3">
                    ✓ Verified Members Only
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: testimonial cards */}
          <div className="lg:w-3/5 space-y-5">
            {testimonials.slice(0, 4).map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} isActive={i === active} />
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-2 justify-center mt-10">
          {testimonials.slice(0, 4).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === active
                  ? 'w-8 h-2 bg-primary'
                  : 'w-2 h-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial: t, index, isActive }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className={`glass-card p-6 transition-all duration-500 ${isActive ? 'border-primary/30 bg-[rgba(212,175,55,0.04)]' : ''}`}
    >
      <div className="flex items-start gap-4">
        {/* Avatar */}
        <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center text-white font-heading text-lg bg-gradient-to-br ${t.gradient}`}>
          {t.avatar}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <p className="text-white font-accent font-700 tracking-wide">{t.name}</p>
              <p className="text-white/40 text-xs font-accent tracking-wider">{t.role} · {t.location}</p>
            </div>
            <div className="flex gap-0.5">
              {[...Array(t.rating)].map((_, i) => (
                <span key={i} className="text-primary text-sm">★</span>
              ))}
            </div>
          </div>

          <p className="text-white/60 text-sm leading-relaxed mt-3">"{t.text}"</p>

          {/* Result badge */}
          <div className="mt-3 inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
            <span className="text-primary text-xs">✓</span>
            <span className="text-primary font-accent text-xs tracking-wider">{t.result}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
