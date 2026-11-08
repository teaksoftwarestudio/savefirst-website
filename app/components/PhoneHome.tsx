"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import AppIcon from "./AppIcon";
import PhoneNav from "./PhoneNav";
import { useCountUp } from "./useCountUp";

/* Home tab, matching the app's HomeDashboardContent:
   greeting + balance pill, Lifestyle hero, This week, Income / Savings,
   Necessities. One demo month: June 2026, today Wed Jun 10. */

const CAP = 1500;
const SPENT = 860;
const LEFT = CAP - SPENT; // 640
const RING = 160;
const STROKE = 12.5;

type DayStatus = "under" | "over" | "today" | "future";
const WEEK: { d: string; amt: string; s: DayStatus }[] = [
  { d: "T", amt: "$0", s: "under" },
  { d: "F", amt: "$87", s: "over" },
  { d: "S", amt: "$0", s: "under" },
  { d: "S", amt: "$70", s: "over" },
  { d: "M", amt: "$0", s: "under" },
  { d: "T", amt: "$29", s: "under" },
  { d: "W", amt: "$18", s: "today" },
];

function Ring({
  size,
  stroke,
  progress,
  color,
  track,
  children,
}: {
  size: number;
  stroke: number;
  progress: number;
  color: string;
  track: string;
  children: React.ReactNode;
}) {
  const r = size / 2 - stroke / 2;
  const c = 2 * Math.PI * r;
  return (
    <div className="sf-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={track} strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${c * progress} ${c}`}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <div className="sf-ring-center">{children}</div>
    </div>
  );
}

function LifestyleLeft() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const val = useCountUp(LEFT, 1400, inView, 0);
  return (
    <div className="sf-hero-amt" ref={ref}>
      ${Math.round(val).toLocaleString("en-US")}
    </div>
  );
}

function WeekDot({ s }: { s: DayStatus }) {
  if (s === "today") return <span className="sf-dot today" />;
  if (s === "future") return <span className="sf-dot future" />;
  return (
    <span className={"sf-dot " + s}>
      <AppIcon name={s === "under" ? "check" : "priority"} size={14} />
    </span>
  );
}

export default function PhoneHome() {
  return (
    <>
      <div className="sf-scroll">
        <div className="sf-pad sf-home">
          {/* Greeting + balance pill */}
          <div className="sf-greet">
            <div className="sf-greet-copy">
              <div className="sf-greet-title">Hi, Alex</div>
              <div className="sf-greet-sub">June · 21 days left</div>
            </div>
            <div className="sf-balance-pill">
              <span className="sf-bp-well"><AppIcon name="wallet" size={15} /></span>
              <span className="sf-bp-text">
                <span className="sf-bp-label">Balance</span>
                <span className="sf-bp-amt">$4,280</span>
              </span>
            </div>
          </div>

          {/* Lifestyle hero */}
          <div className="sf-hero">
            <div className="sf-hero-head">
              <span className="sf-hero-well"><AppIcon name="bag" size={16} /></span>
              <span className="sf-hero-title">Lifestyle</span>
              <span className="sf-hero-info"><AppIcon name="info" size={20} /></span>
            </div>
            <Ring size={RING} stroke={STROKE} progress={LEFT / CAP} color="#34D399" track="rgba(255,255,255,0.14)">
              <div className="sf-hero-cap">lifestyle left</div>
              <LifestyleLeft />
              <div className="sf-hero-cap">of $1,500</div>
            </Ring>
            <div className="sf-hero-stats">
              <div className="sf-hs"><b>$30</b><span>per day</span></div>
              <i />
              <div className="sf-hs"><b>$860</b><span>spent</span></div>
              <i />
              <div className="sf-hs"><b style={{ color: "#F5A524" }}>Watch pace</b><span>pace</span></div>
            </div>
          </div>

          {/* This week */}
          <div className="sf-panel sf-week">
            <div className="sf-week-head">
              <span className="sf-week-title">This week</span>
              <span className="sf-week-sum"><b>$205</b> · 4 good days</span>
            </div>
            <div className="sf-week-row">
              {WEEK.map((w, i) => (
                <div key={i} className={"sf-wd" + (w.s === "today" ? " today" : "")}>
                  <span className="sf-wd-l">{w.d}</span>
                  <WeekDot s={w.s} />
                  <span className={"sf-wd-a " + w.s}>{w.amt}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Income / Savings */}
          <div className="sf-tiles">
            <div className="sf-tile income">
              <div className="sf-tile-head">
                <span className="sf-tile-well" style={{ color: "#2563EB" }}><AppIcon name="arrowUp" size={18} /></span>
                <span className="sf-tile-label">Income</span>
              </div>
              <div className="sf-tile-val">$3,200</div>
              <div className="sf-tile-cap">Next +$3,200 · Jun 15</div>
            </div>
            <div className="sf-tile savings">
              <div className="sf-tile-head">
                <span className="sf-tile-well" style={{ color: "#16A34A" }}><AppIcon name="diamond" size={18} /></span>
                <span className="sf-tile-label">Savings · of $800</span>
                <span className="sf-tile-info"><AppIcon name="info" size={16} /></span>
              </div>
              <div className="sf-tile-val">$500</div>
              <div className="sf-tile-bar"><div style={{ width: "62.5%", background: "#F5A524" }} /></div>
            </div>
          </div>

          {/* Necessities */}
          <div className="sf-panel sf-needs">
            <div className="sf-needs-head">
              <div>
                <div className="sf-needs-title">Necessities</div>
                <div className="sf-needs-sub"><b>$2,175</b> · Bills and everyday needs</div>
              </div>
              <span className="sf-needs-info"><AppIcon name="info" size={20} /></span>
            </div>
            <div className="sf-needs-tiles">
              <div className="sf-nt bills">
                <div className="sf-nt-head">
                  <Ring size={28} stroke={2.5} progress={0.5} color="#DB2777" track="rgba(219,39,119,0.2)">
                    <span className="sf-nt-ic" style={{ color: "#DB2777" }}><AppIcon name="receiptRound" size={13} /></span>
                  </Ring>
                  <span className="sf-nt-label">Bills</span>
                </div>
                <div className="sf-nt-primary">2 of 4 paid</div>
                <div className="sf-nt-cap">$550 due</div>
              </div>
              <div className="sf-nt needs">
                <div className="sf-nt-head">
                  <Ring size={28} stroke={2.5} progress={0.52} color="#B26AF4" track="rgba(178,106,244,0.2)">
                    <span className="sf-nt-ic" style={{ color: "#B26AF4" }}><AppIcon name="cart" size={13} /></span>
                  </Ring>
                  <span className="sf-nt-label">Everyday needs</span>
                </div>
                <div className="sf-nt-primary">$310 of $600</div>
                <div className="sf-nt-cap">spent</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sf-fab"><AppIcon name="mic" size={28} /></div>
      <PhoneNav active="home" />
    </>
  );
}
