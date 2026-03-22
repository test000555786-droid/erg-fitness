// src/pages/Home/index.jsx
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import ProgramsPreview from './ProgramsPreview';
import TestimonialsSection from './TestimonialsSection';
import CTABanner from './CTABanner';
import MarqueeStrip from '@/components/ui/MarqueeStrip';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeStrip />
      <FeaturesSection />
      <MarqueeStrip reverse />
      <ProgramsPreview />
      <TestimonialsSection />
      <CTABanner />
    </main>
  );
}
