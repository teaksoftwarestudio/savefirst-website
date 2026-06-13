"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

/**
 * Splits text into words and reveals them with a spring stagger.
 * Children passed via `highlight` render after the words, sharing the
 * same stagger sequence (used for the gradient highlight line).
 */
export default function WordReveal({
  text,
  highlight,
  delay = 0,
  className,
  as = "h1",
}: {
  text: string;
  highlight?: ReactNode;
  delay?: number;
  className?: string;
  as?: "h1" | "h2";
}) {
  const reduced = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduced ? 0 : 0.055, delayChildren: delay },
    },
  };
  const word: Variants = {
    hidden: reduced ? { opacity: 0 } : { opacity: 0, y: "0.5em", filter: "blur(6px)" },
    show: {
      opacity: 1,
      y: "0em",
      filter: "blur(0px)",
      transition: { type: "spring", stiffness: 220, damping: 24, mass: 0.6 },
    },
  };

  const MotionTag = as === "h2" ? motion.h2 : motion.h1;

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      animate="show"
      style={{ display: "block" }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={word}
          style={{ display: "inline-block", whiteSpace: "pre", willChange: "transform, filter" }}
        >
          {w}
          {i < words.length - 1 ? " " : ""}
        </motion.span>
      ))}
      {highlight ? (
        <motion.span variants={word} style={{ display: "block", willChange: "transform, filter" }}>
          {highlight}
        </motion.span>
      ) : null}
    </MotionTag>
  );
}
