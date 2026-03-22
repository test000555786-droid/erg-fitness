// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const HomePage      = lazy(() => import('@/pages/Home'));
const AboutPage     = lazy(() => import('@/pages/About'));
const ProgramsPage  = lazy(() => import('@/pages/Programs'));
const TrainersPage  = lazy(() => import('@/pages/Trainers'));
const MembershipPage= lazy(() => import('@/pages/Membership'));
const ContactPage   = lazy(() => import('@/pages/Contact'));
const NotFoundPage  = lazy(() => import('@/pages/NotFound'));

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function PageFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        className="w-10 h-10 border-2 border-primary/20 border-t-primary rounded-full"
      />
    </div>
  );
}

export default function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageFallback />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
          <Route path="/about" element={<PageTransition><AboutPage /></PageTransition>} />
          <Route path="/programs" element={<PageTransition><ProgramsPage /></PageTransition>} />
          <Route path="/trainers" element={<PageTransition><TrainersPage /></PageTransition>} />
          <Route path="/membership" element={<PageTransition><MembershipPage /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><ContactPage /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}
