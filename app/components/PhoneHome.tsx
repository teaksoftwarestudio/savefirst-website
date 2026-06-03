const UpIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15 14" />
  </svg>
);
const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
    <line x1="6" y1="6" x2="18" y2="18" /><line x1="18" y1="6" x2="6" y2="18" />
  </svg>
);
const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
  </svg>
);
const InfoIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <circle cx="12" cy="12" r="9" /><line x1="12" y1="11" x2="12" y2="16" />
    <circle cx="12" cy="8" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const MicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0" /><line x1="12" y1="18" x2="12" y2="21" />
  </svg>
);
const NavHome = () => <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3l9 8h-2.5v9h-5v-6h-3v6h-5v-9H3l9-8z" /></svg>;
const NavTx = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3z" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" />
  </svg>
);
const NavCheck = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <polyline points="9 13 11 15 15 10.5" />
  </svg>
);
const NavGoals = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
  </svg>
);
const NavSettings = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.4 1a7.6 7.6 0 0 0-1.7-1l-.4-2.6h-3.8l-.4 2.6a7.6 7.6 0 0 0-1.7 1l-2.4-1-2 3.4 2 1.5a7.6 7.6 0 0 0 0 2l-2 1.5 2 3.4 2.4-1a7.6 7.6 0 0 0 1.7 1l.4 2.6h3.8l.4-2.6a7.6 7.6 0 0 0 1.7-1l2.4 1 2-3.4-2-1.5z" />
  </svg>
);

function BottomNav({ active }: { active: string }) {
  const items = [
    { id: "home", label: "Home", Icon: NavHome },
    { id: "tx", label: "Transactions", Icon: NavTx },
    { id: "check", label: "Check", Icon: NavCheck },
    { id: "goals", label: "Goals", Icon: NavGoals },
    { id: "settings", label: "Settings", Icon: NavSettings },
  ];
  return (
    <nav className="bnav">
      {items.map(({ id, label, Icon }) => (
        <div key={id} className={"bn" + (id === active ? " on" : "")}>
          <Icon />
          {id === active && <span className="bn-label">{label}</span>}
        </div>
      ))}
    </nav>
  );
}

import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "./useCountUp";

function BalanceAmt() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const val = useCountUp(7455, 1400, inView, 2);
  return (
    <div className="bc-amt" ref={ref}>
      ${val.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </div>
  );
}

export default function PhoneHome() {
  return (
    <>
      <div className="app-scroll">
        <div className="app-pad">
          {/* Balance card */}
          <div className="balance-card">
            <div className="bc-top">
              <div>
                <div className="bc-title">Current Balance</div>
                <div className="bc-sub">Across your connected accounts</div>
              </div>
              <div className="bc-info"><InfoIcon /></div>
            </div>
            <BalanceAmt />
          </div>

          {/* Coming in next */}
          <div className="pcard coming-next">
            <span className="cn-label">Coming In Next</span>
            <span className="cn-value">Apr 15 • $1,750</span>
          </div>

          {/* Snapshot */}
          <div className="pcard snapshot">
            <div className="pcard-title">April 2026, at a Glance</div>
            <div className="snap-grid">
              <div className="metric"><div className="m-label">Income</div><div className="m-val"><span className="green">+$2,800</span></div></div>
              <div className="metric"><div className="m-label">Bills</div><div className="m-val"><span className="red">$360</span><span className="m-target"> / $2,255</span></div></div>
              <div className="metric"><div className="m-label">Lifestyle</div><div className="m-val"><span className="red">$420</span><span className="m-target"> / $1,200</span></div></div>
              <div className="metric"><div className="m-label">Savings</div><div className="m-val"><span className="green">$2,020</span><span className="m-target"> / $600</span></div></div>
            </div>
          </div>

          {/* Heads-up */}
          <div className="pcard headsup">
            <div className="pcard-title">Heads-up</div>
            <div className="hu-list">
              <div className="hu-card positive">
                <div className="hu-row">
                  <div className="hu-ic"><UpIcon /></div>
                  <div className="hu-badge">on track</div>
                  <div className="hu-x"><XIcon /></div>
                </div>
                <div className="hu-title">Savings goal reached</div>
                <div className="hu-detail">You&apos;ve hit April&apos;s $2,020 savings target. Nice work.</div>
              </div>
              <div className="hu-card warning">
                <div className="hu-row">
                  <div className="hu-ic"><ClockIcon /></div>
                  <div className="hu-badge">upcoming</div>
                  <div className="hu-x"><XIcon /></div>
                </div>
                <div className="hu-title">Rent due in 4 days</div>
                <div className="hu-detail">$1,200 leaves your balance on Apr 28. You&apos;re covered.</div>
              </div>
            </div>
          </div>

          {/* Spend trend */}
          <div className="pcard trend">
            <div className="trend-head">
              <div className="pcard-title">Spend Trend</div>
              <div className="range-pill"><span className="on">Week</span><span>Month</span></div>
            </div>
            <div className="trend-chart">
              <div className="limit"></div>
              {([
                [16, 8, 0], [22, 10, 14], [12, 6, 0], [20, 12, 28],
                [18, 8, 10], [10, 4, 0], [8, 6, 0]
              ] as [number, number, number][]).map((d, i) => (
                <div key={i} className="trend-col">
                  {d[2] > 0 && <div className="seg" style={{ height: d[2], background: "var(--purple)" }} />}
                  {d[1] > 0 && <div className="seg" style={{ height: d[1], background: "var(--accent)" }} />}
                  {d[0] > 0 && <div className="seg" style={{ height: d[0], background: "var(--brand)" }} />}
                </div>
              ))}
            </div>
            <div className="trend-x">
              {["M","T","W","T","F","S","S"].map((d, i) => <span key={i}>{d}</span>)}
            </div>
            <div className="trend-legend">
              <div className="lg"><span className="dot" style={{ background: "var(--brand)" }} /><span className="lg-label">Food &amp; Dining</span><span className="lg-val">$312</span></div>
              <div className="lg"><span className="dot" style={{ background: "var(--accent)" }} /><span className="lg-label">Transport</span><span className="lg-val">$96</span></div>
              <div className="lg"><span className="dot" style={{ background: "var(--purple)" }} /><span className="lg-label">Shopping</span><span className="lg-val">$148</span></div>
            </div>
            <div className="trend-more">See more <ChevronIcon /></div>
          </div>
        </div>
      </div>

      <div className="mic-fab"><MicIcon /></div>
      <BottomNav active="home" />
    </>
  );
}
