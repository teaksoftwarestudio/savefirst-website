"use client";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";

/**
 * Layered aurora glow for the hero. Two blobs drift with scroll, and a
 * soft spotlight follows the cursor. Purely decorative (aria-hidden).
 */
export default function AuroraBackground() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, 120]), {
    stiffness: 60,
    damping: 20,
  });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -90]), {
    stiffness: 60,
    damping: 20,
  });

  // Cursor spotlight
  const mx = useMotionValue(50);
  const my = useMotionValue(35);
  const sx = useSpring(mx, { stiffness: 90, damping: 22 });
  const sy = useSpring(my, { stiffness: 90, damping: 22 });

  function onMove(e: React.MouseEvent) {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  }

  return (
    <div ref={ref} className="aurora" aria-hidden="true" onMouseMove={onMove}>
      <motion.span className="aurora-blob aurora-blob-1" style={reduced ? undefined : { y: y1 }} />
      <motion.span className="aurora-blob aurora-blob-2" style={reduced ? undefined : { y: y2 }} />
      <motion.span
        className="aurora-spot"
        style={
          reduced
            ? undefined
            : {
                background: useTransform(
                  [sx, sy],
                  ([x, y]) =>
                    `radial-gradient(420px circle at ${x}% ${y}%, rgba(20,184,127,0.18), transparent 60%)`
                ),
              }
        }
      />
    </div>
  );
}
