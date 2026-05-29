"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PhoneFrame from "./PhoneFrame";
import PhoneHome from "./PhoneHome";
import PhoneCheck from "./PhoneCheck";
import PhoneGoals from "./PhoneGoals";

function PhoneCheckResult() {
  return (
    <div className="scr" style={{ padding: 0 }}>
      <div style={{ background: "linear-gradient(155deg,#1cc070,var(--accent))", color: "white", padding: "34px 18px 28px", textAlign: "center" }}>
        <div style={{ width: 54, height: 54, borderRadius: "50%", background: "rgba(255,255,255,.2)", display: "grid", placeItems: "center", margin: "0 auto 12px", fontSize: 28, fontWeight: 700 }}>✓</div>
        <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 4 }}>You&apos;re good to go!</div>
        <div style={{ fontSize: 11, opacity: 0.85 }}>This purchase fits your budget</div>
      </div>
      <div style={{ padding: 14 }}>
        <div style={{ background: "var(--paper)", borderRadius: 14, padding: 14, boxShadow: "var(--shadow-soft)", marginBottom: 12 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 11, color: "var(--ink-3)" }}>Purchase</span>
            <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-.02em" }}>$85.00</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11 }}>
            <span style={{ color: "var(--ink-3)" }}>New balance</span>
            <span style={{ fontWeight: 700 }}>$2,762.52</span>
          </div>
        </div>
        <div style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-2)", marginBottom: 8 }}>Why this works</div>
        {[
          { bg: "#d6f3e3", icon: "📉", title: "Healthy balance", sub: "$2,762 left after this" },
          { bg: "#d6ecff", icon: "📅", title: "Bills covered", sub: "All clear until Feb 28" },
          { bg: "#f1e3ff", icon: "🎯", title: "Savings on track", sub: "Emergency fund progressing" },
        ].map((r) => (
          <div key={r.title} style={{ background: "var(--paper)", borderRadius: 12, padding: 10, display: "flex", gap: 10, alignItems: "flex-start", boxShadow: "var(--shadow-soft)", marginBottom: 6 }}>
            <div style={{ width: 30, height: 30, borderRadius: 9, background: r.bg, display: "grid", placeItems: "center", fontSize: 13 }}>{r.icon}</div>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600 }}>{r.title}</div>
              <div style={{ fontSize: 9.5, color: "var(--ink-3)", marginTop: 1 }}>{r.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhoneTransactions() {
  const txs = [
    { bg: "#ffe9d6", icon: "☕", name: "Bluestone Lane", cat: "Food & Dining", amt: "−$6.50", income: false },
    { bg: "#d6ecff", icon: "🚇", name: "MTA · Subway", cat: "Transport", amt: "−$2.90", income: false },
    { bg: "#e3d6ff", icon: "🎬", name: "Netflix", cat: "Subscriptions", amt: "−$15.49", income: false },
    { bg: "#d6f3e3", icon: "🛒", name: "Trader Joe's", cat: "Groceries", amt: "−$42.18", income: false },
    { bg: "#d6f3e3", icon: "💼", name: "Acme Co · Salary", cat: "Income", amt: "+$1,600", income: true },
  ];
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
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {txs.map((t) => (
          <div key={t.name} style={{ background: "var(--paper)", borderRadius: 12, padding: 10, display: "flex", alignItems: "center", gap: 10, boxShadow: "var(--shadow-soft)" }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: t.bg, display: "grid", placeItems: "center", fontSize: 14 }}>{t.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 11, fontWeight: 600 }}>{t.name}</div>
              <div style={{ fontSize: 9.5, color: "var(--ink-3)" }}>{t.cat}</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 700, color: t.income ? "var(--accent)" : undefined }}>{t.amt}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PhonePlan() {
  return (
    <div className="scr" style={{ padding: "8px 14px 0" }}>
      <h4 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 14 }}>Save-First Plan</h4>
      <div style={{ background: "linear-gradient(155deg,var(--brand-2),var(--brand))", color: "white", borderRadius: 18, padding: 18, marginBottom: 14 }}>
        <div style={{ fontSize: 10, opacity: 0.8, marginBottom: 4 }}>Monthly target</div>
        <div style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-.02em", lineHeight: 1 }}>$520</div>
        <div style={{ fontSize: 10, opacity: 0.75, marginTop: 6 }}>16.25% of $3,200 income</div>
      </div>
      <div style={{ background: "var(--paper)", borderRadius: 14, padding: 14, boxShadow: "var(--shadow-soft)", marginBottom: 10 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 600 }}>Target type</span>
          <div style={{ display: "flex", gap: 4, fontSize: 10 }}>
            <div style={{ padding: "4px 10px", background: "var(--ink)", color: "white", borderRadius: 999, fontWeight: 600 }}>Amount</div>
            <div style={{ padding: "4px 10px", color: "var(--ink-3)" }}>Percent</div>
          </div>
        </div>
        <div style={{ height: 1, background: "var(--line)", marginBottom: 10 }}></div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 11, fontWeight: 600 }}>Minimum buffer</span>
          <span style={{ fontSize: 11, color: "var(--ink-3)" }}>$300 · 9 days</span>
        </div>
      </div>
      <div style={{ background: "var(--paper)", borderRadius: 14, padding: 14, boxShadow: "var(--shadow-soft)" }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-2)", marginBottom: 10 }}>Allocation</div>
        <div style={{ display: "flex", height: 10, borderRadius: 999, overflow: "hidden", marginBottom: 10 }}>
          <div style={{ flex: 57.5, background: "var(--brand)" }}></div>
          <div style={{ flex: 24, background: "var(--purple)" }}></div>
          <div style={{ flex: 18.5, background: "var(--accent)" }}></div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--ink-3)" }}>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--brand)", marginRight: 4 }}></span>Emergency</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--purple)", marginRight: 4 }}></span>Tuition</span>
          <span><span style={{ display: "inline-block", width: 8, height: 8, borderRadius: 2, background: "var(--accent)", marginRight: 4 }}></span>Trip</span>
        </div>
      </div>
    </div>
  );
}

const screens = [
  {
    screen: <PhoneHome />,
    label: "Home",
    tag: "01",
    title: "Your real spendable balance.",
    body: "Savings come out first. What's left is genuinely yours — no hidden bills, no guessing.",
  },
  {
    screen: <PhoneCheck />,
    label: "Pre-Spend Check",
    tag: "02",
    title: "Should I buy this?",
    body: "Type any amount. Get an honest answer in under 10 seconds, with the math in plain language.",
  },
  {
    screen: <PhoneCheckResult />,
    label: "Check Result",
    tag: "03",
    title: "Green light — or a better plan.",
    body: "A clear verdict, your new balance, and one suggested action. No shame, no lecture.",
  },
  {
    screen: <PhoneGoals />,
    label: "Goals",
    tag: "04",
    title: "Every goal, funded first.",
    body: "Each target gets its own bucket and a projected finish date. Progress you can actually see.",
  },
  {
    screen: <PhoneTransactions />,
    label: "Transactions",
    tag: "05",
    title: "Logging in five seconds flat.",
    body: "Save First learns your recurring charges and never makes you re-enter the same coffee shop twice.",
  },
  {
    screen: <PhonePlan />,
    label: "Plan",
    tag: "06",
    title: "Set it once. It runs itself.",
    body: "Choose a fixed amount or a percentage. The plan auto-allocates across every goal, every month.",
  },
];

function Slide({
  item,
  index,
  total,
  progress,
}: {
  item: (typeof screens)[0];
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const step = 1 / total;
  const s = index * step;
  const e = s + step;
  const enter = s + step * 0.15;
  const exit  = e - step * 0.15;

  const opacity = useTransform(progress, [s, enter, exit, e], [0, 1, 1, 0]);
  const phoneY  = useTransform(progress, [s, enter, exit, e], [60, 0, 0, -60]);
  const copyY   = useTransform(progress, [s, enter, exit, e], [40, 0, 0, -40]);
  const scale   = useTransform(progress, [s, enter, exit, e], [0.92, 1, 1, 0.92]);

  return (
    <motion.div
      aria-hidden={index !== 0}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity,
        pointerEvents: "none",
      }}
    >
      <div className="gs-slide-inner">
        {/* Phone */}
        <motion.div className="gs-phone-col" style={{ y: phoneY, scale }}>
          <PhoneFrame>{item.screen}</PhoneFrame>
        </motion.div>

        {/* Copy */}
        <motion.div className="gs-copy-col" style={{ y: copyY }}>
          <div className="gs-tag">{item.tag}</div>
          <div className="gs-label">{item.label}</div>
          <h2 className="gs-title">{item.title}</h2>
          <p className="gs-body">{item.body}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

function ProgressBar({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const step = 1 / total;
  const s = index * step;
  const e = s + step;
  const active = useTransform(progress, [s, (s + e) / 2, e], [0, 1, 0]);

  return (
    <div className="gs-prog-track">
      <motion.div className="gs-prog-fill" style={{ scaleX: active, transformOrigin: "left" }} />
    </div>
  );
}

export default function GallerySection() {
  const outerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: outerRef,
    offset: ["start start", "end end"],
  });
  const total = screens.length;

  return (
    <div className="gs-outer" ref={outerRef} style={{ height: `${total * 100}vh` }}>
      <div className="gs-sticky">

        {/* Ambient background */}
        <div className="gs-ambient" />

        {/* Slides */}
        {screens.map((item, i) => (
          <Slide key={item.tag} item={item} index={i} total={total} progress={scrollYProgress} />
        ))}

        {/* Bottom HUD */}
        <div className="gs-hud">
          {/* Screen tabs */}
          <div className="gs-tabs">
            {screens.map((s, i) => (
              <ProgressTab key={s.tag} index={i} total={total} item={s} progress={scrollYProgress} />
            ))}
          </div>

          {/* Progress bars */}
          <div className="gs-prog-row">
            {screens.map((s, i) => (
              <ProgressBar key={s.tag} index={i} total={total} progress={scrollYProgress} />
            ))}
          </div>
        </div>

        {/* Scroll cue — fades out after first beat */}
        <motion.div
          className="gs-scroll-cue"
          style={{ opacity: useTransform(scrollYProgress, [0, 0.06], [1, 0]) }}
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
            </svg>
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>

      </div>
    </div>
  );
}

function ProgressTab({
  index,
  total,
  item,
  progress,
}: {
  index: number;
  total: number;
  item: (typeof screens)[0];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const step = 1 / total;
  const s = index * step;
  const e = s + step;
  const opacity = useTransform(progress, [s, s + step * 0.2, e - step * 0.2, e], [0.35, 1, 1, 0.35]);

  return (
    <motion.div className="gs-tab" style={{ opacity }}>
      <span className="gs-tab-num">{item.tag}</span>
      <span className="gs-tab-label">{item.label}</span>
    </motion.div>
  );
}
