// src/pages/Programs/index.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/animations/Reveal';
import CTABanner from '@/pages/Home/CTABanner';
import { programs, programCategories } from '@/data/programs';

const categoryLabels = {
  All: 'All Programs',
  strength: 'Strength',
  cardio: 'Cardio',
  'weight-loss': 'Weight Loss',
  personal: 'Personal',
};

export default function ProgramsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? programs
    : programs.filter((p) => p.category === activeCategory);

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1), transparent 60%)' }} />
        <div className="container-custom text-center">
          <SectionHeader
            label="Training Programs"
            title="CHOOSE YOUR"
            highlight="BATTLEFIELD"
            subtitle="Six elite programs engineered to transform your body and mind. Every discipline. Every goal. One destination."
            center
          />

          {/* Filter tabs */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 mb-16">
            {programCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-accent text-sm tracking-widest uppercase px-5 py-2.5 rounded-sm border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary border-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                    : 'border-white/15 text-white/50 hover:border-primary/40 hover:text-white'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>

          {/* Program grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((program, i) => (
                <ProgramCard key={program.id} program={program} index={i} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="The Process"
            title="HOW WE"
            highlight="WORK"
            center
            subtitle="A simple 4-step journey from where you are to where you want to be."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Assessment', desc: 'Free fitness assessment to understand your current level, goals, and any limitations.' },
              { step: '02', title: 'Custom Plan', desc: 'Your coach designs a personalized program tailored exactly to your goals and schedule.' },
              { step: '03', title: 'Execute', desc: 'Train with precision. Every session tracked, every rep counts, every day matters.' },
              { step: '04', title: 'Transform', desc: 'Watch your body and mind transform as you push beyond limits you thought were fixed.' },
            ].map((step, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-heading text-7xl gradient-text opacity-30 mb-4">{step.step}</div>
                  <h4 className="font-heading text-2xl text-white mb-3">{step.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

function ProgramCard({ program, index }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="glass-card p-7 text-left group"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl"
          style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.15)' }}>
          {program.icon}
        </div>
        <span className={`font-accent text-xs tracking-widest uppercase px-3 py-1 rounded-full ${
          program.intensity === 'Very High'
            ? 'text-primary/70 bg-primary/10 border border-primary/20'
            : 'text-primary/80 bg-primary/10 border border-primary/20'
        }`}>
          {program.intensity}
        </span>
      </div>

      <h3 className="font-heading text-2xl text-white mb-1">{program.title}</h3>
      <p className="font-accent text-primary text-sm tracking-wider uppercase mb-4">{program.subtitle}</p>
      <p className="text-white/45 text-sm leading-relaxed mb-6">{program.description}</p>

      {/* Features */}
      <ul className="space-y-2 mb-6">
        {program.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-xs text-white/50 font-accent">
            <span className="text-primary text-xs">✓</span> {f}
          </li>
        ))}
      </ul>

      {/* Footer meta */}
      <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/8 text-xs font-accent tracking-wider text-white/35">
        <span>⏱ {program.duration}</span>
        <span>•</span>
        <span>📅 {program.sessions}</span>
        <span>•</span>
        <span>📊 {program.level}</span>
      </div>
    </motion.div>
  );
}
