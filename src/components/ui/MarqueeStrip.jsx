// src/components/ui/MarqueeStrip.jsx

const items = [
  'STRENGTH TRAINING', '⚡', 'CARDIO', '🔥', 'WEIGHT LOSS', '💪',
  'PERSONAL COACHING', '⭐', 'HIIT', '🏋️', 'NUTRITION', '🥗',
  'STRENGTH TRAINING', '⚡', 'CARDIO', '🔥', 'WEIGHT LOSS', '💪',
  'PERSONAL COACHING', '⭐', 'HIIT', '🏋️', 'NUTRITION', '🥗',
];

export default function MarqueeStrip({ reverse = false }) {
  return (
    <div className="marquee-wrapper py-4 border-y border-white/5 bg-white/[0.02]">
      <div
        className="marquee-content"
        style={{ animationDirection: reverse ? 'reverse' : 'normal' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center mx-6 font-accent font-700 tracking-widest uppercase text-sm ${
              item.length <= 2 ? 'text-primary text-lg' : 'text-white/30'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
