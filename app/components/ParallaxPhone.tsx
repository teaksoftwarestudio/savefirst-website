"use client";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function ParallaxPhone({
  children,
  direction = -1,
}: {
  children: ReactNode;
  direction?: 1 | -1;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const rawRotate = useTransform(scrollYProgress, [0, 1], [direction * 3, direction * -3]);

  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const rotate = useSpring(rawRotate, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      whileHover={{
        y: -8,
        rotate: direction * -1,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      {children}
    </motion.div>
  );
}
