// src/pages/Home/ProgramsPreview.jsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/ui/SectionHeader';
import { programs } from '@/data/programs';

export default function ProgramsPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={ref} className="section-padding relative overflow-hidden">
      <div className="container-custom mb-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <SectionHeader
            label="Training Programs"
            title="FORGE YOUR"
            highlight="GREATNESS"
            subtitle="From beginner to elite — programs engineered for every goal."
          />
          <Link
            to="/programs"
            className="btn-outline text-sm py-3 px-7 shrink-0 self-start md:self-auto mb-16"
          >
            View All Programs
          </Link>
        </div>
      </div>

      {/* Horizontal scroll cards */}
      <div className="overflow-hidden">
        <motion.div
          style={{ x }}
          className="pt-5 flex gap-6 pl-[max(1.5rem,calc((100vw-1280px)/2))] pr-8"
        >
          {programs.map((program, i) => (
            <ProgramCard key={program.id} program={program} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function ProgramCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.1 }}
      whileHover={{ y: -8 }}
      className="shrink-0 w-72 md:w-80 glass-card p-7 group"
    >
      {/* Icon + intensity badge */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)' }}>
          {program.icon}
        </div>
        <span className="font-accent text-xs tracking-widest uppercase text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full">
          {program.intensity}
        </span>
      </div>

      <h3 className="font-heading text-2xl text-white mb-1">{program.title}</h3>
      <p className="font-accent text-primary text-sm tracking-wider uppercase mb-3">{program.subtitle}</p>
      <p className="text-white/45 text-sm leading-relaxed mb-6 line-clamp-3">{program.description}</p>

      {/* Meta */}
      <div className="flex items-center gap-4 text-xs font-accent tracking-wider text-white/40 pt-4 border-t border-white/8">
        <span>⏱ {program.duration}</span>
        <span>📅 {program.sessions}</span>
        <span>📊 {program.level}</span>
      </div>

      {/* Hover reveal CTA */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        whileHover={{ height: 'auto', opacity: 1 }}
        className="overflow-hidden"
      >
        <Link
          to={`/programs`}
          className="mt-4 flex items-center gap-2 text-primary font-accent text-sm tracking-wider uppercase group"
        >
          Learn More
          <motion.span
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >→</motion.span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
