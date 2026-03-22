// src/pages/NotFound/index.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(212,175,55,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,175,55,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
        }}
      />

      <div className="container-custom text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-heading text-[12rem] leading-none gradient-text opacity-20 select-none">404</p>
          <h1 className="font-heading text-5xl md:text-7xl text-white -mt-8 mb-6">
            YOU'VE GONE<br />
            <span className="gradient-text">OFF TRACK</span>
          </h1>
          <p className="text-white/50 mb-10 max-w-md mx-auto">
            This page doesn't exist — but your fitness journey does. Let's get you back on track.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/" className="btn-primary">Back to Home</Link>
            <Link to="/programs" className="btn-outline">Explore Programs</Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
