"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";

type Feature = {
  kicker: string;
  label: string;
  note: string;
};

const FEATURES: Feature[] = [
  {
    kicker: "Pre-Spend Check",
    label: "Before you buy",
    note: "See what a purchase does before you make it.",
  },
  {
    kicker: "Hands-free",
    label: "Voice entry",
    note: "Log spending quickly without typing every detail.",
  },
  {
    kicker: "Daily",
    label: "Spend trends",
    note: "See your spending rhythm with simple graphs.",
  },
  {
    kicker: "Plan ahead",
    label: "Goals and upcoming needs",
    note: "Keep savings and upcoming needs in view before you spend.",
  },
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
    <section className="stats-band" aria-label="SaveFirst core features">
      <div className="wrap">
        <motion.div
          className="stats-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px 0px" }}
        >
          {FEATURES.map((feature, i) => (
            <motion.div className="stat" variants={item} key={i}>
              <div className="stat-num stat-kicker">{feature.kicker}</div>
              <div className="stat-label">{feature.label}</div>
              <div className="stat-note">{feature.note}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
