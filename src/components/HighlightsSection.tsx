import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const highlights = [
  { value: 2, suffix: " Years", label: "Verifiable Employment", icon: "💼" },
  { value: 5, suffix: " Summers", label: "Camp Counselor Experience", icon: "🏕️" },
  { value: 3, suffix: "+", label: "Types of Work Experience", icon: "🔧" },
  { value: 8, suffix: "–16", label: "Youth Mentorship Age Range", icon: "🧑‍🤝‍🧑" },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.floor(target / 30));
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-heading font-extrabold text-primary">
      {count}
      {suffix}
    </span>
  );
};

const HighlightsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center bg-card border border-border/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-2">{h.icon}</span>
              <AnimatedCounter target={h.value} suffix={h.suffix} />
              <p className="text-sm text-muted-foreground mt-2 font-medium">{h.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
