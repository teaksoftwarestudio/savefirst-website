"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const spring = { type: "spring" as const, stiffness: 60, damping: 18 };

export function Viz1() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <div className="viz viz-1" ref={ref}>
      <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="var(--brand-2)" />
            <stop offset="1" stopColor="var(--brand)" />
          </linearGradient>
          <clipPath id="bar-clip">
            <rect x="20" y="44" width="200" height="32" rx="16" />
          </clipPath>
        </defs>
        {/* track */}
        <rect x="20" y="44" width="200" height="32" rx="16" fill="var(--line)" />
        {/* animated fill */}
        <motion.rect
          x="20" y="44" height="32" rx="16"
          fill="url(#g1)"
          clipPath="url(#bar-clip)"
          initial={{ width: 0 }}
          animate={inView ? { width: 200 } : { width: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        />
        <motion.text
          x="120" y="65" textAnchor="middle" fill="white"
          fontSize="14" fontWeight="700" fontFamily="Poppins"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 }}
        >
          Income · $3,200
        </motion.text>
        <circle cx="40" cy="60" r="6" fill="white" />
      </svg>
    </div>
  );
}

export function Viz2() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  const pills = [
    { cls: "a", w: "90%", delay: 0.1 },
    { cls: "b", w: "65%", delay: 0.25 },
    { cls: "c", w: "45%", delay: 0.4 },
    { cls: "a", w: "75%", style: { background: "var(--brand)" }, delay: 0.55 },
  ];
  return (
    <div className="viz viz-2" ref={ref}>
      <div className="pill-stack">
        {pills.map((p, i) => (
          <motion.div
            key={i}
            className={`pill ${p.cls}`}
            style={p.style}
            initial={{ scaleX: 0, originX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ ...spring, delay: p.delay }}
          />
        ))}
      </div>
    </div>
  );
}

export function Viz3() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });
  return (
    <div className="viz viz-3" ref={ref}>
      <motion.div
        className="big-num"
        initial={{ opacity: 0, y: 16, scale: 0.85 }}
        animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 16, scale: 0.85 }}
        transition={{ ...spring, delay: 0.15 }}
      >
        $2,847
      </motion.div>
      <motion.div
        className="check"
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0.5, rotate: -20 }}
        transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.45 }}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </motion.div>
    </div>
  );
}
