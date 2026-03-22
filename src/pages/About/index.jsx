// src/pages/About/index.jsx
import { motion } from 'framer-motion';
import SectionHeader from '@/components/ui/SectionHeader';
import Reveal, { RevealGroup, RevealItem } from '@/components/animations/Reveal';
import CTABanner from '@/pages/Home/CTABanner';
import { GYM_INFO } from '@/utils/constants';

const values = [
  { icon: '⚡', title: 'Excellence', desc: 'We settle for nothing less than the best — in our coaches, equipment, and the results we deliver.' },
  { icon: '🤝', title: 'Community', desc: 'ERG Fitness isn\'t just a gym. It\'s a family of champions who lift each other up.' },
  { icon: '🔬', title: 'Science-Backed', desc: 'Every program, every diet plan is rooted in proven sports science and physiological research.' },
  { icon: '🎯', title: 'Results-Driven', desc: 'We measure success in transformations. Your results are our reputation.' },
];

const milestones = [
  { year: '2019', title: 'ERG Founded', desc: 'Started with a vision to bring world-class fitness to Bhatapada.' },
  { year: '2020', title: '100 Members', desc: 'Grew to 100 strong members despite the global pandemic.' },
  { year: '2022', title: 'Expansion', desc: 'Doubled equipment, added personal training studio and cardio zone.' },
  { year: '2024', title: '4.9★ Rating', desc: 'Achieved 4.9 stars on Google Reviews — a testament to our quality.' },
  { year: '2025', title: '500+ Members', desc: 'Crossed 500 active members and 8 certified coaches.' },
];

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 60% 50%, rgba(212,175,55,0.07), transparent 70%)' }} />
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader
                label="Our Story"
                title="BUILT FOR"
                highlight="CHAMPIONS"
                subtitle="ERG Fitness was born from a simple belief: everyone deserves access to elite-level training. We brought that belief to Bhatapada, Odisha — and built something extraordinary."
              />
              <Reveal delay={0.3}>
                <p className="text-white/50 leading-relaxed mb-6">
                  Founded in 2019 by a team of passionate fitness professionals, ERG Fitness started 
                  as a dream to bridge the gap between small-town accessibility and world-class training standards. 
                  Today, we're proud to be Odisha's most-rated fitness facility.
                </p>
                <p className="text-white/50 leading-relaxed">
                  Located inside Nalanda Public School, zPAGA in Bhatapada, our state-of-the-art facility 
                  serves 500+ active members with a team of 8+ certified coaches, each dedicated to your 
                  transformation journey.
                </p>
              </Reveal>
            </div>

            {/* Stats grid */}
            <Reveal from="right">
              <div className="grid grid-cols-2 gap-4">
                {GYM_INFO.stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -4 }}
                    className="glass-card p-6 text-center"
                  >
                    <p className="font-heading text-5xl gradient-text mb-2">{stat.value}</p>
                    <p className="font-accent text-white/50 text-xs tracking-widest uppercase">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding relative">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal from="left">
              <div className="glass-card p-8 h-full border-l-2 border-primary">
                <div className="text-primary text-3xl mb-4">🎯</div>
                <h3 className="font-heading text-3xl text-white mb-4">OUR MISSION</h3>
                <p className="text-white/55 leading-relaxed">
                  To empower every individual — regardless of their starting point — with the knowledge, 
                  tools, and coaching to achieve their peak physical potential. We make elite fitness 
                  accessible to all.
                </p>
              </div>
            </Reveal>
            <Reveal from="right">
              <div className="glass-card p-8 h-full border-l-2 border-primary-light">
                <div className="text-primary text-3xl mb-4">🔭</div>
                <h3 className="font-heading text-3xl text-white mb-4">OUR VISION</h3>
                <p className="text-white/55 leading-relaxed">
                  To become the most trusted fitness brand in Odisha — a place where champions are made, 
                  records are broken, and ordinary people discover their extraordinary potential.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Values"
            title="WHAT DRIVES"
            highlight="US"
            center
          />
          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <RevealItem key={i}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="text-4xl mb-4">{v.icon}</div>
                  <h4 className="font-heading text-xl text-white mb-3">{v.title}</h4>
                  <p className="text-white/45 text-sm leading-relaxed">{v.desc}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeader
            label="Our Journey"
            title="THE ERG"
            highlight="STORY"
            center
          />
          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/30 to-transparent" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glass-card p-5 inline-block">
                        <p className="font-accent text-primary text-xs tracking-widest uppercase mb-1">{m.year}</p>
                        <h4 className="font-heading text-xl text-white mb-2">{m.title}</h4>
                        <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                      </div>
                    </div>
                    {/* Node */}
                    <div className="relative z-10 shrink-0">
                      <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(212,175,55,0.6)]" />
                    </div>
                    <div className="flex-1" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
