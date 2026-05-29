"use client";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, type CSSProperties } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "none";

const hidden = (dir: Direction) => {
  if (dir === "up")    return { opacity: 0, y: 32 };
  if (dir === "down")  return { opacity: 0, y: -32 };
  if (dir === "left")  return { opacity: 0, x: -40 };
  if (dir === "right") return { opacity: 0, x: 40 };
  if (dir === "scale") return { opacity: 0, scale: 0.93 };
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
  duration = 0.7,
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px 0px" });

  return (
    <motion.div
      ref={ref}
      initial={hidden(direction)}
      animate={inView ? visible : hidden(direction)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
