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
  { screen: <PhoneHome />, cap: "Home · Dashboard" },
  { screen: <PhoneCheck />, cap: "Check · Pre-Spend" },
  { screen: <PhoneCheckResult />, cap: "Check · Result" },
  { screen: <PhoneGoals />, cap: "Goals · Overview" },
  { screen: <PhoneTransactions />, cap: "Transactions · Feed" },
  { screen: <PhonePlan />, cap: "Plan · Save-First" },
];

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Tour the app</span>
          <h2>Polished, calm, surprisingly fast.</h2>
          <p>Designed for iPhone first. Every screen earns its place.</p>
        </div>
      </div>
      <div className="gallery-strip" id="gallery">
        <div className="pad-l"></div>
        {screens.map(({ screen, cap }) => (
          <div key={cap} className="gallery-item">
            <PhoneFrame>{screen}</PhoneFrame>
            <div className="gallery-cap">{cap}</div>
          </div>
        ))}
        <div className="pad-l"></div>
      </div>
    </section>
  );
}
