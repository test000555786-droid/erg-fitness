// src/pages/Membership/index.jsx
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal, { RevealGroup, RevealItem } from '@/components/animations/Reveal';
import CTABanner from '@/pages/Home/CTABanner';
import { MEMBERSHIP_PLANS } from '@/utils/constants';

export default function MembershipPage() {
  return (
    <main className="pt-24">
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 20%, rgba(212,175,55,0.08), transparent 60%)' }} />

        <div className="container-custom">
          <SectionHeader
            label="Membership Plans"
            title="INVEST IN"
            highlight="YOURSELF"
            subtitle="Transparent pricing. No hidden fees. No long-term lock-ins. Just results."
            center
          />

          {/* Urgency badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 glass-orange px-5 py-2.5 rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="font-accent text-primary text-sm tracking-widest uppercase">
                Limited Slots Available — Only a Few Spots Left!
              </span>
            </div>
          </motion.div>

          {/* Pricing cards */}
          <RevealGroup className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {MEMBERSHIP_PLANS.map((plan, i) => (
              <RevealItem key={plan.id}>
                <PricingCard plan={plan} />
              </RevealItem>
            ))}
          </RevealGroup>

          {/* Note */}
          <Reveal delay={0.4}>
            <p className="text-center text-white/30 text-sm font-accent tracking-wider mt-10">
              All plans include free fitness assessment • Cancel anytime • Prices in INR
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom max-w-3xl">
          <SectionHeader
            label="Questions"
            title="GOT"
            highlight="FAQs?"
            center
          />
          <div className="space-y-4">
            {[
              { q: 'Is there a joining fee?', a: 'No joining fee for new members who sign up through our website. You only pay the monthly membership fee.' },
              { q: 'Can I try before I commit?', a: 'Absolutely! We offer a free trial session for all new members. Contact us to book your slot.' },
              { q: 'What are your gym hours?', a: 'We\'re open Monday to Saturday starting 6:00 AM. We\'re closed on Sundays for staff development.' },
              { q: 'Do you provide nutrition plans?', a: 'Elite and Champion plans include nutrition guidance. Standalone nutrition coaching is also available.' },
              { q: 'Can I freeze or cancel my membership?', a: 'Yes. You can freeze for up to 30 days per year or cancel with 15 days notice. No penalties.' },
            ].map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}

function PricingCard({ plan }) {
  return (
    <motion.div
      whileHover={{ y: plan.popular ? -4 : -8 }}
      className={`glass-card p-7 relative flex flex-col h-full ${
        plan.popular
          ? 'border-primary shadow-[0_0_40px_rgba(212,175,55,0.2)] scale-105'
          : ''
      }`}
    >
      {plan.badge && (
        <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-accent font-700 tracking-widest uppercase whitespace-nowrap ${
          plan.popular
            ? 'bg-primary text-black shadow-[0_0_20px_rgba(212,175,55,0.5)]'
            : 'bg-white/10 text-white border border-white/20'
        }`}>
          {plan.badge}
        </div>
      )}

      <div className="mb-6">
        <h3 className="font-heading text-2xl text-white mb-1">{plan.name}</h3>
        <p className="text-white/45 text-sm mb-6">{plan.description}</p>
        <div className="flex items-end gap-1">
          <span className="font-accent text-white/50 text-sm">₹</span>
          <span className="font-heading text-6xl gradient-text leading-none">{plan.price.toLocaleString()}</span>
          <span className="text-white/40 text-sm mb-1">/{plan.period}</span>
        </div>
      </div>

      <ul className="space-y-3 flex-1 mb-8">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span className="text-primary mt-0.5 shrink-0">✓</span>
            <span className="text-white/65">{f}</span>
          </li>
        ))}
        {plan.notIncluded.map((f, i) => (
          <li key={`no-${i}`} className="flex items-start gap-2 text-sm opacity-40">
            <span className="text-white/30 mt-0.5 shrink-0">✕</span>
            <span className="text-white/40 line-through">{f}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className={`block text-center font-accent font-700 tracking-widest uppercase text-sm py-3.5 rounded-sm transition-all duration-300 ${
          plan.popular
            ? 'bg-primary text-black hover:bg-primary-light shadow-[0_4px_20px_rgba(212,175,55,0.4)] hover:shadow-[0_8px_30px_rgba(212,175,55,0.6)]'
            : 'border border-white/20 text-white hover:border-primary hover:text-primary'
        }`}
      >
        Get Started
      </Link>
    </motion.div>
  );
}

function FAQItem({ faq, index }) {
  return (
    <Reveal delay={index * 0.08}>
      <div className="glass-card p-6">
        <h4 className="font-heading text-lg text-white mb-3 flex items-start gap-3">
          <span className="text-primary shrink-0 mt-0.5">Q.</span>
          {faq.q}
        </h4>
        <p className="text-white/50 text-sm leading-relaxed pl-6">{faq.a}</p>
      </div>
    </Reveal>
  );
}
