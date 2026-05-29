"use client";

import { useState } from "react";

const items = [
  {
    q: "What is the Save-First method, really?",
    a: "Traditional budgeting saves whatever's left at the end of the month — which is usually nothing. Save First flips that. We allocate your savings target as soon as income arrives, then show you the real, spendable balance underneath. You spend without guilt because the future is already taken care of.",
  },
  {
    q: "Does Save First connect to my bank?",
    a: "Not in the current version. Save First is local-first — your data lives on your iPhone, not on our servers. You can add transactions in seconds with voice or one-tap shortcuts, and we'll detect recurring charges automatically. Bank linking is planned for a future release, opt-in only.",
  },
  {
    q: "How does the Pre-Spend Check decide?",
    a: "It's deterministic, not vibes. We subtract the purchase from your spendable balance, project your remaining bills and savings target through the end of the cycle, and check against the minimum buffer you set. The recommendation always shows the math behind it — no black boxes.",
  },
  {
    q: "Is my financial data private?",
    a: "Yes. Save First stores your transactions, goals, and plan locally on your device by default. Optional iCloud backup is end-to-end encrypted. We don&apos;t sell data, we don&apos;t run ads, and we don&apos;t have a &ldquo;growth&rdquo; team. You can export everything as CSV at any time.",
  },
  {
    q: "Is there an Android version?",
    a: "Android is on the roadmap. The current focus is making the iPhone experience as calm and trustworthy as possible. Join the newsletter from the App Store listing to hear when Android opens for testing.",
  },
  {
    q: "What if I miss my savings target one month?",
    a: "You're not in trouble. Save First doesn't lecture you. We'll adjust the projection, suggest a smaller target if it's a pattern, and keep your goals on a realistic track. Life happens; the app is here to help you re-plan, not to score you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <div className="section-head center">
          <span className="eyebrow">Frequently asked</span>
          <h2>Answers, before you ask.</h2>
        </div>
        <div className="faq-grid">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${open === i ? " open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {item.q}
                <span className="ico">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{item.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
