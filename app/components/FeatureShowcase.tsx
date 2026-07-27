"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";

/* ── Demo month ──────────────────────────────────────────────
   One number drives both cards: income − bills − saveFirst = SPENDABLE,
   and the Pre-Spend Check measures every amount against that same figure.  */
const MONTH = {
  income: 2800,
  bills: 1450,
  saveFirst: 600,
  daysInMonth: 30,
};
const SPENDABLE = MONTH.income - MONTH.bills - MONTH.saveFirst; // 750

const money = (n: number) =>
  n.toLocaleString("en-US", {
    minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
    maximumFractionDigits: 2,
  });

const PRESETS = [
  { label: "Coffee", amount: 6.5 },
  { label: "Dinner out", amount: 48 },
  { label: "AirPods", amount: 85 },
  { label: "Flight home", amount: 840 },
];

type Tone = "good" | "tight" | "over";

function evaluate(amount: number): { tone: Tone; pill: string; headline: string; detail: string } {
  if (amount <= SPENDABLE) {
    const left = SPENDABLE - amount;
    const perDay = Math.round(left / MONTH.daysInMonth);
    return {
      tone: "good",
      pill: "Safe to spend",
      headline: "Yes, you're good.",
      detail: `That leaves $${money(left)} of your $${money(SPENDABLE)}, about $${money(perDay)} a day for the rest of the month. Your savings stay untouched.`,
    };
  }
  if (amount <= SPENDABLE + MONTH.saveFirst) {
    const over = amount - SPENDABLE;
    return {
      tone: "tight",
      pill: "Borrows from savings",
      headline: "It fits, but it costs you.",
      detail: `That's $${money(over)} more than your $${money(SPENDABLE)} spendable balance. Buying it means pulling $${money(over)} out of this month's $${money(MONTH.saveFirst)} savings target.`,
    };
  }
  const short = amount - SPENDABLE - MONTH.saveFirst;
  return {
    tone: "over",
    pill: "Not this month",
    headline: "This one can wait.",
    detail: `Your $${money(SPENDABLE)} spendable balance plus the entire $${money(MONTH.saveFirst)} savings target still leaves you $${money(short)} short. Your bills stay covered either way.`,
  };
}

/* ── 02 · Pre-Spend Check — the interactive centerpiece ── */
function PreSpendCheck() {
  const [raw, setRaw] = useState("85");

  const parsed = parseFloat(raw);
  const amount = Number.isFinite(parsed) ? Math.min(parsed, 99999) : 0;
  const verdict = amount > 0 ? evaluate(amount) : null;

  /* Bar fill, as a share of the $750 spendable balance */
  const buyPct = Math.max(0, Math.min(100, (amount / SPENDABLE) * 100));
  const overflow = amount > SPENDABLE;

  function onChange(v: string) {
    /* digits and a single decimal point only */
    setRaw(v.replace(/[^\d.]/g, "").replace(/(\..*)\./g, "$1"));
  }

  return (
    <div className="fx-card fx-demo">
      <div className="fx-demo-ask">
        <h3>Pre-Spend Check</h3>
        <p>
          <span className="fx-lead">A 3-second second opinion.</span> Type in what you&apos;re
          about to buy. SaveFirst answers with what it does to your month, not just whether
          your balance clears.
        </p>

        <label className="fx-field" htmlFor="psc-amount">
          <span className="fx-field-dol">$</span>
          <input
            id="psc-amount"
            className="fx-field-input"
            type="text"
            inputMode="decimal"
            autoComplete="off"
            value={raw}
            onChange={(e) => onChange(e.target.value)}
            placeholder="0"
            aria-describedby="psc-result"
          />
        </label>

        <div className="fx-presets">
          {PRESETS.map((p) => (
            <button
              key={p.label}
              type="button"
              className={`fx-preset${amount === p.amount ? " on" : ""}`}
              onClick={() => setRaw(String(p.amount))}
            >
              {p.label} <span>${money(p.amount)}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="fx-demo-out" id="psc-result" aria-live="polite">
        {verdict ? (
          <>
            <span className={`fx-pill ${verdict.tone}`}>{verdict.pill}</span>
            <div className="fx-verdict">{verdict.headline}</div>
            <p className="fx-verdict-detail">{verdict.detail}</p>
          </>
        ) : (
          <>
            <span className="fx-pill idle">Waiting</span>
            <div className="fx-verdict">Enter an amount.</div>
            <p className="fx-verdict-detail">
              You have ${money(SPENDABLE)} spendable this month, with your bills and savings
              already set aside.
            </p>
          </>
        )}

        <div className="fx-bar" aria-hidden="true">
          <div className={`fx-bar-seg buy ${verdict?.tone ?? "idle"}`} style={{ width: `${buyPct}%` }} />
        </div>
        <div className="fx-bar-key">
          <span>
            ${money(Math.min(amount, SPENDABLE))} of ${money(SPENDABLE)} spendable
          </span>
          <span>{overflow ? "Over by $" + money(amount - SPENDABLE) : `$${money(SPENDABLE - amount)} left`}</span>
        </div>
      </div>
    </div>
  );
}

/* ── 01 · Spendable Balance ── */
function SpendableCard() {
  return (
    <div className="fx-card fx-spendable">
      <h3>Spendable Balance</h3>
      <div className="fx-bignum">
        <AnimatedCounter value={SPENDABLE} decimals={2} prefix="$" duration={1600} />
      </div>
      <div className="fx-bignum-label">spendable this month</div>
      <p>
        <span className="fx-lead">One number, total clarity.</span> Your real spendable
        balance, after savings and bills are already accounted for. No guessing whether a
        purchase is going to hurt later.
      </p>
      <div className="fx-math">
        <div className="fx-math-cell">
          <span className="k">Income</span>
          <span className="v">${money(MONTH.income)}</span>
        </div>
        <span className="fx-math-op">−</span>
        <div className="fx-math-cell">
          <span className="k">Bills</span>
          <span className="v">${money(MONTH.bills)}</span>
        </div>
        <span className="fx-math-op">−</span>
        <div className="fx-math-cell">
          <span className="k">Saved first</span>
          <span className="v">${money(MONTH.saveFirst)}</span>
        </div>
        <span className="fx-math-op">=</span>
        <div className="fx-math-cell out">
          <span className="k">Spendable</span>
          <span className="v">${money(SPENDABLE)}</span>
        </div>
      </div>
    </div>
  );
}

/* ── 03 · Goals & Sinking Funds ── */
const GOALS = [
  { name: "Emergency fund", pct: 68, note: "$3,400 of $5,000" },
  { name: "Japan, next spring", pct: 41, note: "$1,230 of $3,000" },
  { name: "Tuition", pct: 22, note: "$1,100 of $5,000" },
];

function GoalsCard() {
  return (
    <div className="fx-card fx-goals">
      <h3>Goals &amp; Sinking Funds</h3>
      <p>
        <span className="fx-lead">Save for what matters most.</span> An emergency fund, a
        trip, next term&apos;s tuition. Each goal gets its own bucket, funded automatically
        every month.
      </p>
      <div className="fx-goal-list">
        {GOALS.map((g) => (
          <div key={g.name} className="fx-goal">
            <div className="fx-goal-top">
              <span className="fx-goal-name">{g.name}</span>
              <span className="fx-goal-pct">{g.pct}%</span>
            </div>
            <div className="fx-goal-track">
              <div className="fx-goal-fill" style={{ width: `${g.pct}%` }} />
            </div>
            <div className="fx-goal-note">{g.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── 04 · Transactions ── */
const TX = [
  { icon: "☕", bg: "#ffe9d6", name: "Bluestone Lane", cat: "Food & Dining", amt: "−$6.50" },
  { icon: "🚇", bg: "#d6ecff", name: "MTA · Subway", cat: "Transport", amt: "−$2.90" },
  { icon: "🎬", bg: "#e3d6ff", name: "Netflix", cat: "Lifestyle · Recurring", amt: "−$15.49" },
];

function TransactionsCard() {
  return (
    <div className="fx-card fx-tx">
      <div className="fx-tx-copy">
        <h3>Transactions</h3>
        <p>
          <span className="fx-lead">Logging that feels effortless.</span> Add an expense in
          under five seconds. SaveFirst learns your patterns, flags the unusual ones, and
          never makes you re-enter the same coffee shop twice.
        </p>
      </div>
      <div className="fx-tx-list">
        {TX.map((t) => (
          <div key={t.name} className="fx-tx-row">
            <span className="fx-tx-ic" style={{ background: t.bg }}>{t.icon}</span>
            <span className="fx-tx-name">
              {t.name}
              <span className="fx-tx-cat">{t.cat}</span>
            </span>
            <span className="fx-tx-amt">{t.amt}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FeatureShowcase() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <Reveal>
          <div className="section-head center">
            <h2>Built around one number.</h2>
            <p>
              Everything in SaveFirst points back to your spendable balance: what it is, what a
              purchase does to it, and where the rest of your money is going.
            </p>
          </div>
        </Reveal>

        <div className="fx-grid">
          <Reveal className="fx-cell wide" direction="left" delay={0.05}>
            <SpendableCard />
          </Reveal>
          <Reveal className="fx-cell" direction="right" delay={0.12}>
            <GoalsCard />
          </Reveal>
          <Reveal className="fx-cell full" direction="scale" delay={0.05}>
            <PreSpendCheck />
          </Reveal>
          <Reveal className="fx-cell full" direction="up" delay={0.05}>
            <TransactionsCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
