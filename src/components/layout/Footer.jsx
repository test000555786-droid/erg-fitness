// src/components/layout/Footer.jsx
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_LINKS, GYM_INFO } from '@/utils/constants';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 overflow-hidden mb-10">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(ellipse, #D4AF37 0%, transparent 70%)' }} />
      </div>

      <div className="container-custom py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #D4AF37, #B8962E)' }}>
                <span className="font-heading text-white text-2xl">E</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-heading text-white text-2xl tracking-widest">ERG FITNESS</span>
                <span className="font-accent text-primary text-[9px] tracking-[0.25em] uppercase">Push Beyond Limits</span>
              </div>
            </Link>
            <p className="text-white/50 leading-relaxed max-w-sm text-sm mb-8">
              Odisha's premier fitness destination. We don't just build bodies — we forge champions. 
              Join 500+ members who've transformed their lives at ERG Fitness.
            </p>

            {/* Stats row */}
            <div className="flex gap-8">
              <div>
                <p className="font-heading text-3xl text-primary">4.9★</p>
                <p className="text-white/40 text-xs font-accent tracking-wider uppercase mt-1">Google Rating</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-primary">500+</p>
                <p className="text-white/40 text-xs font-accent tracking-wider uppercase mt-1">Members</p>
              </div>
              <div>
                <p className="font-heading text-3xl text-primary">5+</p>
                <p className="text-white/40 text-xs font-accent tracking-wider uppercase mt-1">Years</p>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-accent font-700 text-white tracking-[0.2em] uppercase text-sm mb-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/50 hover:text-primary font-accent text-sm tracking-wider uppercase transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-white/20 group-hover:bg-primary group-hover:w-6 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-accent font-700 text-white tracking-[0.2em] uppercase text-sm mb-6">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-0.5 text-sm">📍</span>
                <p className="text-white/50 text-sm leading-relaxed">
                  Nalanda Public School, zPAGA,<br />
                  Bhatapada, Odisha 754200
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-sm">📞</span>
                <a href="tel:+916371933320" className="text-white/50 hover:text-primary text-sm transition-colors">
                  +91 63719 33320
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary text-sm">🕐</span>
                <div>
                  <p className="text-white/50 text-sm">Mon–Sat: 6:00 AM onwards</p>
                  <p className="text-white/30 text-xs mt-0.5">Sunday: Closed</p>
                </div>
              </li>
            </ul>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {['Instagram', 'Facebook', 'YouTube'].map((s) => (
                <a
                  key={s}
                  href="www.instagram.com"
                  className="w-9 h-9 rounded-lg flex items-center justify-center glass border border-white/10 hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 text-xs text-white/50 hover:text-primary font-accent"
                  title={s}
                >
                  {s[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="stripe-divider mt-16 mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs font-accent tracking-wider">
            © {year} ERG Fitness. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-accent tracking-wider">
            Bhatapada, Odisha — Crafted with 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
