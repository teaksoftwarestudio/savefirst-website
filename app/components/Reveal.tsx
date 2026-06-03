"use client";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const hidden = (dir: Direction) => {
  if (dir === "up")    return { opacity: 0, y: 28 };
  if (dir === "down")  return { opacity: 0, y: -28 };
  if (dir === "left")  return { opacity: 0, x: -36 };
  if (dir === "right") return { opacity: 0, x: 36 };
  if (dir === "scale") return { opacity: 0, scale: 0.94 };
  return { opacity: 0 };
};
const visible = { opacity: 1, y: 0, x: 0, scale: 1 };

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });
  const reducedMotion = useReducedMotion();

  const transition = reducedMotion
    ? { duration: 0.01, delay: 0 }
    : { type: "spring" as const, stiffness: 55, damping: 18, delay };

  return (
    <motion.div
      ref={ref}
      initial={reducedMotion ? {} : hidden(direction)}
      animate={inView ? visible : (reducedMotion ? {} : hidden(direction))}
      transition={transition}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
