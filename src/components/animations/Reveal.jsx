// src/components/animations/Reveal.jsx
import { motion } from 'framer-motion';

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  from = 'bottom',
  className = '',
  once = true,
}) {
  const directions = {
    bottom: { hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } },
    top: { hidden: { opacity: 0, y: -50 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };

  const variant = directions[from] || directions.bottom;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      transition={{ duration, delay, ease: [0.4, 0, 0.2, 1] }}
      variants={variant}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children reveal
export function RevealGroup({ children, stagger = 0.1, className = '' }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, className = '' }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
