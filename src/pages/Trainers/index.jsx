// src/pages/Trainers/index.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal, { RevealGroup, RevealItem } from '@/components/animations/Reveal';
import CTABanner from '@/pages/Home/CTABanner';
import { trainers } from '@/data/trainers';

export default function TrainersPage() {
  return (
    <main className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 70% 20%, rgba(212,175,55,0.08), transparent 60%)' }} />
        <div className="container-custom">
          <SectionHeader
            label="Meet Our Coaches"
            title="THE ELITE"
            highlight="SQUAD"
            subtitle="Our certified coaches aren't just instructors — they're transformers. Each one a specialist, driven to get you results."
            center
          />

          <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trainers.map((trainer, i) => (
              <RevealItem key={trainer.id}>
                <TrainerCard trainer={trainer} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why our coaches */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="What Sets Us Apart"
            title="CERTIFIED."
            highlight="DEDICATED."
            center
            subtitle="Every ERG Fitness coach undergoes rigorous certification and continuous education."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { icon: '🏆', title: 'Nationally Certified', desc: 'All coaches hold internationally recognized fitness certifications.' },
              { icon: '📚', title: 'Continuous Education', desc: 'Regular upskilling ensures our coaches use the latest science.' },
              { icon: '💡', title: 'Personalized Approach', desc: 'No cookie-cutter programs. Every client gets a unique plan.' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Regular assessments and adjustments for optimal results.' },
              { icon: '🤝', title: 'Accountability Partners', desc: 'Your coach is in your corner every step of the way.' },
              { icon: '🔥', title: 'Proven Results', desc: '500+ successful transformations across all fitness levels.' },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="glass-card p-6 flex items-start gap-4">
                  <span className="text-2xl shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-heading text-lg text-white mb-1">{item.title}</h4>
                    <p className="text-white/45 text-sm leading-relaxed">{item.desc}</p>
                  </div>
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

function TrainerCard({ trainer, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -8 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="glass-card overflow-hidden group"
    >
      {/* Avatar */}
      <div className={`h-48 bg-gradient-to-br ${trainer.gradient} relative overflow-hidden flex items-center justify-center`}>
        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
            backgroundSize: '200% 200%',
          }}
        />
        <span className="font-heading text-6xl text-white/90">{trainer.initials}</span>

        {/* Hover overlay */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <p className="text-white/80 text-xs text-center leading-relaxed">{trainer.bio}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-xl text-white mb-0.5">{trainer.name}</h3>
        <p className="font-accent text-primary text-xs tracking-widest uppercase mb-1">{trainer.role}</p>
        <p className="text-white/40 text-xs mb-4">{trainer.specialization}</p>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {trainer.certifications.slice(0, 2).map((cert, i) => (
            <span key={i} className="text-[10px] font-accent tracking-wider bg-primary/10 border border-primary/20 text-primary/80 px-2 py-0.5 rounded">
              {cert}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-xs font-accent tracking-wider text-white/35 pt-3 border-t border-white/8">
          <span>⏱ {trainer.experience}</span>
          <span className="text-primary/60">{trainer.instagram}</span>
        </div>
      </div>
    </motion.div>
  );
}
