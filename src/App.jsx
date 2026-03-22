// src/App.jsx
import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider, useApp } from '@/context/AppContext';
import { initLenis, destroyLenis } from '@/lib/lenis';
import AppRoutes from '@/routes/AppRoutes';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PageLoader from '@/components/loaders/PageLoader';
import CustomCursor from '@/components/effects/CustomCursor';
import ScrollProgress from '@/components/effects/ScrollProgress';

function AppInner() {
  const { isLoading } = useApp();

  useEffect(() => {
    const lenis = initLenis();
    return () => destroyLenis();
  }, []);

  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <PageLoader />

      {!isLoading && (
        <>
          <Navbar />
          <AppRoutes />
          <Footer />
        </>
      )}

      {/* Sticky CTA */}
      {!isLoading && <StickyCTA />}
    </>
  );
}

function StickyCTA() {
  return (
    <a
      href="tel:+916371933320"
      className="fixed bottom-6 right-6 z-[8000] flex items-center gap-2 bg-primary text-black font-accent font-700 text-xs tracking-widest uppercase px-5 py-3.5 rounded-full shadow-[0_4px_30px_rgba(212,175,55,0.5)] hover:shadow-[0_6px_40px_rgba(212,175,55,0.7)] hover:scale-105 transition-all duration-300"
      style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
    >
      <span className="w-2 h-2 bg-white rounded-full animate-ping absolute -top-1 -right-1" />
      📞 Call Now
    </a>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AppInner />
      </AppProvider>
    </BrowserRouter>
  );
}
