// src/pages/Contact/index.jsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal from '@/components/animations/Reveal';
import { GYM_INFO } from '@/utils/constants';

const initialForm = { name: '', email: '', phone: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm(initialForm);
    }, 1500);
  };

  return (
    <main className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 30% 30%, rgba(212,175,55,0.07), transparent 60%)' }} />

        <div className="container-custom">
          <SectionHeader
            label="Get In Touch"
            title="START YOUR"
            highlight="JOURNEY"
            subtitle="Ready to transform? Reach out for a free consultation, trial session, or any questions. We're here for you."
          />

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Info + Map */}
            <div className="space-y-8">
              {/* Contact cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: '📍',
                    title: 'Location',
                    lines: ['Nalanda Public School, zPAGA', 'Bhatapada, Odisha 754200'],
                  },
                  {
                    icon: '📞',
                    title: 'Phone',
                    lines: ['+91 63719 33320'],
                    href: 'tel:+916371933320',
                  },
                  {
                    icon: '🕐',
                    title: 'Hours',
                    lines: ['Mon–Sat: 6:00 AM onwards', 'Sunday: Closed'],
                  },
                  {
                    icon: '⭐',
                    title: 'Rating',
                    lines: ['4.9 / 5.0 on Google', '200+ verified reviews'],
                  },
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="glass-card p-5">
                      <div className="text-2xl mb-3">{item.icon}</div>
                      <h4 className="font-accent font-700 text-white tracking-wider text-sm mb-2 uppercase">{item.title}</h4>
                      {item.lines.map((line, j) =>
                        item.href && j === 0 ? (
                          <a key={j} href={item.href} className="block text-white/50 text-sm hover:text-primary transition-colors">{line}</a>
                        ) : (
                          <p key={j} className="text-white/50 text-sm">{line}</p>
                        )
                      )}
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Map embed */}
              <Reveal delay={0.3}>
                <div className="glass-card overflow-hidden">
                  <div className="relative">
                    <iframe
                      title="ERG Fitness Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7460.843!2d86.0200!3d20.4625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDI3JzQ1LjAiTiA4NsKwMDEnMTIuMCJF!5e0!3m2!1sen!2sin!4v1"
                      className="w-full h-56 grayscale contrast-125 opacity-80"
                      style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.5)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <p className="text-white/50 text-sm font-accent tracking-wider">Bhatapada, Odisha 754200</p>
                    <a
                      href={`https://maps.google.com/?q=${GYM_INFO.location.lat},${GYM_INFO.location.lng}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs py-2 px-4"
                    >
                      Open in Maps →
                    </a>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Contact form */}
            <Reveal from="right">
              <div className="glass-card p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="text-5xl mb-6">🎯</div>
                    <h3 className="font-heading text-3xl text-white mb-3">WE GOT IT!</h3>
                    <p className="text-white/55 mb-6">Thanks for reaching out. Our team will contact you within 24 hours to schedule your free trial session.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-outline text-sm py-3 px-6"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="font-heading text-2xl text-white mb-2">CLAIM YOUR FREE TRIAL</h3>
                    <p className="text-white/45 text-sm mb-8">Fill out the form and we'll reach out within 24 hours.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block font-accent text-xs tracking-widest uppercase text-white/50 mb-2">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Arjun Kumar"
                            required
                            className="input-field"
                          />
                        </div>
                        <div>
                          <label className="block font-accent text-xs tracking-widest uppercase text-white/50 mb-2">
                            Phone *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            required
                            className="input-field"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-accent text-xs tracking-widest uppercase text-white/50 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="input-field"
                        />
                      </div>

                      <div>
                        <label className="block font-accent text-xs tracking-widest uppercase text-white/50 mb-2">
                          Your Goal / Message *
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          placeholder="Tell us your fitness goals, preferred program, or any questions..."
                          rows={5}
                          required
                          className="input-field resize-none"
                        />
                      </div>

                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="btn-primary w-full py-4 text-sm flex items-center justify-center gap-3 !text-black"
                      >
                        {loading ? (
                          <>
                            <motion.span
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                            />
                            Sending...
                          </>
                        ) : (
                          'Book Free Trial Session →'
                        )}
                      </motion.button>

                      <p className="text-white/25 text-xs text-center font-accent tracking-wider">
                        No commitment required • Response within 24 hours
                      </p>
                    </form>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
