// src/pages/Home/FeaturesSection.jsx
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import { FEATURES } from '@/utils/constants';
import { RevealGroup, RevealItem } from '@/components/animations/Reveal';

export default function FeaturesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #D4AF37, transparent)' }} />

      <div className="container-custom">
        <SectionHeader
          label="Why ERG Fitness"
          title="EVERYTHING YOU NEED TO"
          highlight="DOMINATE"
          subtitle="State-of-the-art facilities designed to push you to your absolute peak. No excuses, only results."
        />

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <RevealItem key={i}>
              <FeatureCard feature={feature} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="glass-card p-7 group cursor-default h-full"
      style={{ '--delay': `${index * 0.1}s` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: 'rgba(212,175,55,0.1)', border: '1px solid rgba(212,175,55,0.2)' }}>
        <span className="text-2xl">{feature.icon}</span>
      </div>

      {/* Orange line */}
      <div className="w-8 h-0.5 bg-primary mb-4 transition-all duration-300 group-hover:w-14" />

      <h3 className="font-heading text-2xl text-white mb-3 tracking-wide">{feature.title}</h3>
      <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: 'inset 0 0 30px rgba(212,175,55,0.05)' }} />
    </motion.div>
  );
}
