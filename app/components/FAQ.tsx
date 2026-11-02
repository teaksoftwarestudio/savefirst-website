"use client";

import { useState } from "react";

const items = [
  {
    q: "What is the SaveFirst method, really?",
    a: "Traditional money advice saves whatever's left at the end of the month, which is usually nothing. SaveFirst flips the order. Your savings target is set aside when income arrives, bills are accounted for, and what remains is your spendable balance. You spend without the guilt because the future is already taken care of.",
  },
  {
    q: "Does SaveFirst connect to my bank?",
    a: "No. SaveFirst never links to your bank and never imports transactions. You add what you spend yourself, by voice or by typing, and set recurring bills once so they carry forward. Every number in the app is one you put there.",
  },
  {
    q: "How does the Pre-Spend Check decide?",
    a: "It's arithmetic, not a guess. SaveFirst takes the price away from what's left this month, after your bills and savings are covered, and checks the result against your lifestyle limit. The answer always shows the numbers behind it. No black boxes.",
  },
  {
    q: "Is my financial data private?",
    a: "Yes. Your plan is stored in your SaveFirst account on our servers, so it's there when you sign in, and everything between the app and our servers travels over an encrypted connection. We don't sell data, we don't run ads, and there's no ad tracking. You can ask us for a copy of your data at any time, and you can delete your account from Settings whenever you want.",
  },
  {
    q: "Is there an Android version?",
    a: "Not yet. Android is on the roadmap. Right now the focus is making the iPhone experience as calm and trustworthy as possible.",
  },
  {
    q: "What if I miss my savings target one month?",
    a: "You're not in trouble. SaveFirst doesn't lecture you and doesn't score you. Change the target and your plan works from the new number. Life happens; the app is here to help you re-plan, not to judge you.",
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
