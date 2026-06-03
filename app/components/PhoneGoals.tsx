const ChevronIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 6 15 12 9 18" />
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

interface SinkCardProps {
  tone: string;
  emoji: string;
  title: string;
  sub: string;
  saved: string;
  target: string;
  pct: number;
  perMo: string;
}

function SinkCard({ tone, emoji, title, sub, saved, target, pct, perMo }: SinkCardProps) {
  return (
    <div className={`sink-card ${tone}`}>
      <div className="sk-top">
        <div className="emoji-badge">{emoji}</div>
        <div className="sk-name">
          <div className="sk-title">{title}</div>
          <div className="sk-sub">{sub}</div>
        </div>
        <div className="sk-chev"><ChevronIcon /></div>
      </div>
      <div className="sk-amts">
        <span className="sk-saved">{saved}</span>
        <span className="sk-of">of {target}</span>
      </div>
      <div className="sk-bar"><div style={{ width: `${pct}%` }}></div></div>
      <div className="sk-foot">
        <span className="sk-timeline">{pct}% complete</span>
        <span className="sk-pill">{perMo}</span>
      </div>
    </div>
  );
}

export default function PhoneGoals() {
  return (
    <>
      <div className="app-head">
        <div className="ah-title">Goals</div>
        <div className="ah-sub">3 active goals  •  save $720/mo</div>
      </div>
      <div className="app-scroll">
        <div className="app-pad">
          {/* Priority card */}
          <div className="priority-card">
            <div className="pc-top">
              <div className="emoji-badge light">🛡️</div>
              <div className="pc-name">
                <div className="pc-title">Emergency Fund</div>
                <div className="pc-subtitle">Priority goal</div>
              </div>
              <div className="pc-chev"><ChevronIcon /></div>
            </div>
            <div className="pc-amts">
              <span className="pc-big">$3,450</span>
              <span className="pc-of">of $6,000</span>
            </div>
            <div className="pbar light"><div style={{ width: "57%" }}></div></div>
            <div className="pc-foot">
              <span className="pc-track">On track for Dec 2026</span>
              <span className="pc-pct">57% complete</span>
            </div>
          </div>

          <div className="goals-section">Sinking Funds</div>

          <SinkCard tone="purple" emoji="🎓" title="Fall Tuition" sub="Due: Sep 2026" saved="$1,200" target="$5,000" pct={24} perMo="$300/mo" />
          <SinkCard tone="green" emoji="✈️" title="Summer Trip" sub="Due: Jul 2026" saved="$680" target="$2,000" pct={34} perMo="$150/mo" />
          <SinkCard tone="orange" emoji="🏠" title="Next Rent" sub="Due: Mar 1, 2026" saved="$900" target="$1,200" pct={75} perMo="$270/mo" />
        </div>
      </div>

      <BottomNav active="goals" />
    </>
  );
}
