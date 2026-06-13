"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const STATS = [
  { value: 12000, suffix: "+", decimals: 0, label: "savers building the habit", note: "and counting" },
  { value: 4.2, prefix: "$", suffix: "M", decimals: 1, label: "moved to savings first", note: "across the community" },
  { value: 4.9, suffix: "", decimals: 1, label: "App Store rating", note: "from 1,800+ reviews", star: true },
  { value: 92, suffix: "%", decimals: 0, label: "feel calmer about money", note: "after 30 days" },
];

export default function StatsBand() {
  const reduced = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.08, delayChildren: 0.05 } },
  };
  const item: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 18 },
    },
  };

  return (
    <section className="stats-band" aria-label="Save First in numbers">
      <div className="wrap">
        <motion.div
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px 0px" }}
        >
          {STATS.map((s, i) => (
            <motion.div className="stat" variants={item} key={i}>
              <div className="stat-num">
                <AnimatedCounter
                  value={s.value}
                  decimals={s.decimals}
                  prefix={s.prefix}
                  suffix={s.suffix}
                />
                {s.star && (
                  <svg className="stat-star" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01L12 2z" />
                  </svg>
                )}
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-note">{s.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
