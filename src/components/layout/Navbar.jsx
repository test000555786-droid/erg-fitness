// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useScroll } from '@/hooks/useScroll';
import { useApp } from '@/context/AppContext';
import { NAV_LINKS } from '@/utils/constants';

export default function Navbar() {
  const { isScrolled } = useScroll();
  const { menuOpen, toggleMenu, closeMenu } = useApp();
  const location = useLocation();

  useEffect(() => { closeMenu(); }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.9, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-[9000] transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[rgba(0,0,0,0.92)] backdrop-blur-2xl border-b border-[rgba(212,175,55,0.12)]'
            : 'py-5'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}>
              <span className="font-heading text-white text-xl">E</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-white text-xl tracking-widest">ERG FITNESS</span>
              <span className="font-accent text-primary text-[9px] tracking-[0.25em] uppercase">Push Beyond Limits</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-accent text-sm font-600 tracking-widest uppercase transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-primary' : 'text-white/70 hover:text-white'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-6 !text-black">
              Join Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="lg:hidden flex flex-col gap-1.5 p-2 z-[9100]"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white transition-all duration-300"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
              className="block w-4 h-px bg-primary"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="block w-6 h-px bg-white transition-all duration-300"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at calc(100% - 40px) 40px)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at calc(100% - 40px) 40px)' }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
            className="fixed inset-0 z-[8900] bg-black/99 backdrop-blur-2xl flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.07 }}
              >
                <Link
                  to={link.path}
                  className={`font-heading text-5xl tracking-widest uppercase transition-colors duration-200 ${
                    location.pathname === link.path ? 'text-primary' : 'text-white hover:text-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/contact" className="btn-primary mt-4 !text-black" onClick={closeMenu}>
                Join Now — Free Trial
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-12 flex flex-col items-center gap-2"
            >
              <p className="font-accent text-white/40 text-sm tracking-widest">+91 63719 33320</p>
              <p className="font-accent text-primary/60 text-xs tracking-widest uppercase">Mon–Sat: 6AM onwards</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
