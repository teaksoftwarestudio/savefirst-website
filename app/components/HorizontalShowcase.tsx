"use client";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import PhoneHome from "./PhoneHome";
import PhoneCheck from "./PhoneCheck";
import PhoneGoals from "./PhoneGoals";

function PhoneTransactions() {
  return (
    <div className="scr" style={{ padding: "0 14px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0 14px" }}>
        <h4 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Transactions</h4>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand)", color: "white", display: "grid", placeItems: "center", fontSize: 18, fontWeight: 600 }}>+</div>
      </div>
      <div style={{ display: "flex", gap: 6, marginBottom: 14, fontSize: 11, fontWeight: 600 }}>
        <div style={{ padding: "6px 12px", background: "var(--ink)", color: "white", borderRadius: 999 }}>All</div>
        <div style={{ padding: "6px 12px", background: "var(--paper)", border: "1px solid var(--line)", color: "var(--ink-3)", borderRadius: 999 }}>Income</div>
        <div style={{ padding: "6px 12px", background: "var(--paper)", border: "1px solid var(--line)", color: "var(--ink-3)", borderRadius: 999 }}>Expense</div>
      </div>
      <div style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>Today</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { bg: "#ffe9d6", icon: "☕", name: "Bluestone Lane", cat: "Food & Dining · 8:42 AM", amt: "−$6.50" },
          { bg: "#d6ecff", icon: "🚇", name: "MTA · Subway", cat: "Transport · 8:55 AM", amt: "−$2.90" },
          { bg: "#e3d6ff", icon: "🎬", name: "Netflix", cat: "Subscriptions · Recurring", amt: "−$15.49" },
        ].map((t) => (
          <div key={t.name} style={{ background: "var(--paper)", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 10, boxShadow: "var(--shadow-soft)" }}>
            <div style={{ width: 34, height: 34, borderRadius: 10, background: t.bg, display: "grid", placeItems: "center", fontSize: 16 }}>{t.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 10, color: "var(--ink-3)" }}>{t.cat}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700 }}>{t.amt}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em", margin: "14px 0 10px" }}>Yesterday</div>
      <div style={{ background: "var(--paper)", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 10, boxShadow: "var(--shadow-soft)" }}>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: "#d6f3e3", display: "grid", placeItems: "center", fontSize: 16 }}>💼</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 600 }}>Acme Co · Salary</div>
          <div style={{ fontSize: 10, color: "var(--ink-3)" }}>Income · Biweekly</div>
        </div>
        <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>+$1,600.00</div>
      </div>
    </div>
  );
}

const SLIDES = [
  {
    tag: "01 / Spendable Balance",
    title: "One number,\ntotal clarity.",
    body: "Your real spendable balance — after savings and bills — shown upfront so you never have to guess if you can afford something.",
    accent: "#14b87f",
    screen: <PhoneHome />,
  },
  {
    tag: "02 / Pre-Spend Check",
    title: "A 10-second\nsecond opinion.",
    body: "Type an amount before you buy. SaveFirst runs the math instantly — and tells you exactly what happens to your month.",
    accent: "#0e9f6e",
    screen: <PhoneCheck />,
  },
  {
    tag: "03 / Goals & Sinking Funds",
    title: "Save for what\nmatters most.",
    body: "Build an emergency fund, a trip, or a new lens. Each goal gets its own bucket — funded automatically every month.",
    accent: "#10a65a",
    screen: <PhoneGoals />,
  },
  {
    tag: "04 / Transactions",
    title: "Logging that\nfeels effortless.",
    body: "Add an expense in under five seconds. We learn your patterns, surface anomalies, and never make you re-enter the same coffee shop twice.",
    accent: "#0a7d56",
    screen: <PhoneTransactions />,
  },
];

const TOTAL = SLIDES.length;

/* ── hook: returns true once mounted on a narrow viewport ── */
function useIsMobile(breakpoint = 860) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    setMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);
  return mobile;
}

/* ── Mobile: tap-driven dot carousel ── */
function MobileShowcase() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();

  return (
    <div className="hsc-mobile">
      {/* ambient */}
      <div
        className="hsc-ambient"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 50% 0%, ${SLIDES[active].accent}28, transparent 70%)`,
          transition: "background 0.7s ease",
        }}
      />

      <div className="hsc-mobile-inner">
        {/* copy */}
        <div className="hsc-mobile-copy">
          <AnimatePresence mode="wait">
            <motion.div key={`mtag-${active}`}
              className="hsc-tag"
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              {SLIDES[active].tag}
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.h2 key={`mtitle-${active}`}
              className="hsc-title"
              initial={reduced ? {} : { opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduced ? {} : { opacity: 0, y: -12, filter: "blur(4px)" }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
              {SLIDES[active].title.split("\n").map((l, i) => <span key={i} style={{ display: "block" }}>{l}</span>)}
            </motion.h2>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.p key={`mbody-${active}`}
              className="hsc-body"
              initial={reduced ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? {} : { opacity: 0 }}
              transition={{ duration: 0.32, delay: 0.08 }}>
              {SLIDES[active].body}
            </motion.p>
          </AnimatePresence>

          {/* dot nav */}
          <div className="hsc-dots" style={{ justifyContent: "center" }}>
            {SLIDES.map((_, i) => (
              <button key={i} className={`hsc-dot${i === active ? " on" : ""}`}
                onClick={() => setActive(i)} aria-label={`Slide ${i + 1}`} />
            ))}
          </div>
        </div>

        {/* phone — swipe left/right to change slide */}
        <div className="hsc-mobile-phone-wrap">
          <AnimatePresence mode="wait">
            <motion.div key={`mphone-${active}`}
              initial={reduced ? {} : { opacity: 0, x: 40, scale: 0.92 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={reduced ? {} : { opacity: 0, x: -40, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 70, damping: 18 }}
              style={{ position: "relative" }}>
              <div className="hsc-phone-glow" style={{ background: `radial-gradient(circle, ${SLIDES[active].accent}55, transparent 65%)` }} />
              <PhoneFrame>{SLIDES[active].screen}</PhoneFrame>
            </motion.div>
          </AnimatePresence>

          {/* prev / next arrows */}
          <button className="hsc-arrow hsc-arrow-l" onClick={() => setActive(i => Math.max(0, i - 1))} aria-label="Previous" disabled={active === 0}>‹</button>
          <button className="hsc-arrow hsc-arrow-r" onClick={() => setActive(i => Math.min(TOTAL - 1, i + 1))} aria-label="Next" disabled={active === TOTAL - 1}>›</button>
        </div>
      </div>
    </div>
  );
}

/* ── Desktop: scroll-driven pinned carousel ── */
function DesktopShowcase() {
  const reduced = useReducedMotion();
  const outerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 22,
    restDelta: 0.001,
  });

  const xPct = useTransform(smoothProgress, [0, 1], ["0%", `-${(TOTAL - 1) * 100}%`]);

  useEffect(() => {
    return smoothProgress.on("change", (v) => {
      const idx = Math.min(TOTAL - 1, Math.max(0, Math.round(v * (TOTAL - 1))));
      setActive(idx);
    });
  }, [smoothProgress]);

  const segProgress = useTransform(smoothProgress, (v) => (v * (TOTAL - 1)) % 1);

  return (
    <div ref={outerRef} className="hsc-outer" style={{ height: `${TOTAL * 100}vh` }}>
      <div className="hsc-sticky">
        <motion.div
          className="hsc-ambient"
          style={{
            background: `radial-gradient(ellipse 55% 70% at 15% 50%, ${SLIDES[active].accent}22, transparent 65%),
                         radial-gradient(ellipse 45% 55% at 85% 40%, ${SLIDES[active].accent}14, transparent 65%)`,
            transition: "background 0.9s ease",
          }}
        />

        <div className="hsc-layout">
          {/* copy */}
          <div className="hsc-copy-col">
            <AnimatePresence mode="wait">
              <motion.div key={`tag-${active}`} className="hsc-tag"
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
                {SLIDES[active].tag}
              </motion.div>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.h2 key={`title-${active}`} className="hsc-title"
                initial={reduced ? {} : { opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduced ? {} : { opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.04 }}>
                {SLIDES[active].title.split("\n").map((line, i) => (
                  <span key={i} style={{ display: "block" }}>{line}</span>
                ))}
              </motion.h2>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.p key={`body-${active}`} className="hsc-body"
                initial={reduced ? {} : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduced ? {} : { opacity: 0, y: -10 }}
                transition={{ duration: 0.44, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}>
                {SLIDES[active].body}
              </motion.p>
            </AnimatePresence>

            <div className="hsc-dots" role="tablist">
              {SLIDES.map((s, i) => (
                <div key={i} role="tab" aria-selected={i === active}
                  className={`hsc-dot${i === active ? " on" : ""}`} aria-label={s.tag} />
              ))}
            </div>

            <div className="hsc-prog-track">
              <motion.div className="hsc-prog-fill"
                style={{ scaleX: active === TOTAL - 1 ? 1 : segProgress, transformOrigin: "left" }} />
            </div>

            <AnimatePresence>
              {active === 0 && (
                <motion.div className="hsc-hint"
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}>
                  <motion.span animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>↓</motion.span>
                  Scroll to explore
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* phone track */}
          <div className="hsc-phone-viewport" aria-hidden="true">
            <motion.div className="hsc-track" style={{ x: xPct }}>
              {SLIDES.map((slide, i) => {
                const dist = i - active;
                return (
                  <motion.div key={i} className="hsc-phone-slot"
                    animate={reduced
                      ? { opacity: i === active ? 1 : 0 }
                      : { scale: i === active ? 1 : 0.82, opacity: i === active ? 1 : 0.28, rotateY: dist * -14, z: i === active ? 0 : -80 }}
                    transition={{ type: "spring", stiffness: 68, damping: 20 }}>
                    <motion.div className="hsc-phone-glow"
                      animate={{ opacity: i === active ? 1 : 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ background: `radial-gradient(circle, ${slide.accent}55, transparent 65%)` }} />
                    <PhoneFrame>{slide.screen}</PhoneFrame>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        {/* bottom HUD */}
        <div className="hsc-hud">
          {SLIDES.map((s, i) => (
            <div key={i} className={`hsc-hudtab${i === active ? " on" : ""}`}>
              <span className="hsc-hudtab-num">0{i + 1}</span>
              <span className="hsc-hudtab-label">{s.tag.split("/ ")[1]}</span>
              <div className="hsc-hudtab-line">
                <motion.div className="hsc-hudtab-fill"
                  animate={{ scaleX: i < active ? 1 : i === active ? undefined : 0 }}
                  style={i === active ? { scaleX: segProgress, transformOrigin: "left" } : { transformOrigin: "left" }}
                  transition={{ duration: 0.3 }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HorizontalShowcase() {
  const mobile = useIsMobile(860);
  /* render nothing until hydrated so we know the real viewport */
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return mobile ? <MobileShowcase /> : <DesktopShowcase />;
}
