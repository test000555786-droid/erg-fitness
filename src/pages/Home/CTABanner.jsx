// src/pages/Home/CTABanner.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ParticleField from '@/components/effects/ParticleField';

export default function CTABanner() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1716307043003-dbe6a5cc496e?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <ParticleField count={20} />

          {/* Noise texture */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Grid lines */}
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />

          {/* Glow orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-black/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 text-center py-20 px-8">
            {/* Urgency badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-black/20 border border-white/20 text-white font-accent text-xs tracking-widest uppercase px-4 py-2 rounded-full mb-8"
            >
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Limited Slots Available — Act Now
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl text-white leading-none mb-6"
            >
              START YOUR
              <br />
              TRANSFORMATION
              <br />
              TODAY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Join 500+ members who chose to change their lives. Get a free trial session 
              and see why ERG Fitness is rated 4.9 stars on Google.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-white text-black font-accent font-700 tracking-widest uppercase text-sm py-4 px-10 rounded-sm hover:bg-white/90 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:-translate-y-1"
              >
                Claim Free Trial →
              </Link>
              <a
                href="tel:+916371933320"
                className="border border-white/40 text-white font-accent font-700 tracking-widest uppercase text-sm py-4 px-10 rounded-sm hover:bg-white/10 transition-all duration-300"
              >
                Call: +91 63719 33320
              </a>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8 mt-12 pt-10 border-t border-white/20"
            >
              {['✓ No Contract', '✓ Free First Session', '✓ Expert Coaches', '✓ 4.9★ Rating'].map((item) => (
                <span key={item} className="text-white/70 font-accent text-sm tracking-wider">{item}</span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}