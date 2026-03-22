// src/components/loaders/PageLoader.jsx
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '@/context/AppContext';

export default function PageLoader() {
  const { isLoading, finishLoading } = useApp();
  const progressRef = useRef(null);

  useEffect(() => {
    if (!isLoading) return;

    // Simulate loading progress
    const timer = setTimeout(() => {
      finishLoading();
    }, 2800);

    return () => clearTimeout(timer);
  }, [isLoading, finishLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          className="loader-screen"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Background grid */}
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `linear-gradient(rgba(212,175,55,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(212,175,55,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Center content */}
          <div className="flex flex-col items-center gap-8 z-10">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: 'backOut' }}
              className="relative"
            >
              <div className="w-24 h-24 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}>
                <span className="font-heading text-black text-4xl tracking-wider">ERG</span>
              </div>
              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-2 rounded-2xl border-t-2 border-r-2 border-primary opacity-50"
              />
            </motion.div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-heading text-5xl text-white tracking-widest">ERG FITNESS</h1>
              <p className="font-accent text-primary text-sm tracking-[0.3em] uppercase mt-1">
                Push Beyond Limits
              </p>
            </motion.div>

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-64"
            >
              <div className="h-px bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 2.2, ease: [0.4, 0, 0.2, 1] }}
                />
              </div>
              <motion.p
                className="text-white/30 text-xs font-accent tracking-widest uppercase mt-3 text-center"
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                Loading Experience...
              </motion.p>
            </motion.div>
          </div>

          {/* Corner decorations */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-primary/25 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-primary/25 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-primary/25 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-primary/25 rounded-br-lg" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
