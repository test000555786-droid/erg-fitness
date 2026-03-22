// src/components/ui/SectionHeader.jsx
import { motion } from 'framer-motion';

export default function SectionHeader({ label, title, highlight, subtitle, center = false, light = false }) {
  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, x: center ? 0 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`section-label mb-4 ${center ? 'justify-center' : ''}`}
        >
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className={`font-heading leading-none mb-4 ${
          light
            ? 'text-5xl md:text-7xl text-white'
            : 'text-5xl md:text-7xl text-white'
        }`}
      >
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-white/50 max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
