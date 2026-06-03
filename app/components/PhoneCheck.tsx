const BangIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="14" /><circle cx="12" cy="19" r="0.6" fill="currentColor" stroke="none" />
  </svg>
);
const HeartIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 21s-7-4.6-9.3-9C1 8.5 2.6 5 6 5c2 0 3.2 1.2 4 2.3C10.8 6.2 12 5 14 5c3.4 0 5 3.5 3.3 7-2.3 4.4-9.3 9-9.3 9z" />
  </svg>
);
const BagIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 7h12l-1 13H7L6 7z" /><path d="M9 7a3 3 0 0 1 6 0" />
  </svg>
);
const StoreIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 9h16l-1-4H5L4 9z" /><path d="M5 9v10h14V9" /><path d="M9 19v-5h6v5" />
  </svg>
);
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

export default function PhoneCheck() {
  return (
    <>
      <div className="app-head with-divider">
        <div className="ah-title">Check</div>
      </div>
      <div className="app-scroll">
        <div className="app-pad">
          <div>
            <div className="check-q">Should I buy this?</div>
            <div className="check-sub">Let&apos;s check if it fits your budget</div>
          </div>

          {/* Amount card */}
          <div className="pcard amount-card">
            <div className="ac-label">AMOUNT</div>
            <div className="ac-amt"><span className="dol">$</span>85.00</div>
            <div className="ac-div"></div>
            <div className="ac-item"><BagIcon />AirPods Pro</div>
          </div>

          {/* Need or want */}
          <div className="check-label">Is this a need or a want?</div>
          <div className="type-row">
            <div className="type-card">
              <div className="tc-ic"><BangIcon /></div>
              <div className="tc-l">Need</div>
              <div className="tc-d">Essential purchase</div>
            </div>
            <div className="type-card on">
              <div className="tc-ic"><HeartIcon /></div>
              <div className="tc-l">Want</div>
              <div className="tc-d">Nice to have</div>
            </div>
          </div>

          {/* Details */}
          <div className="check-label">Details <span className="opt">optional</span></div>
          <div className="details-card">
            <div className="dr">
              <div className="dr-ic">🎧</div>
              <div>
                <div className="dr-k">Category</div>
                <div className="dr-v">Electronics</div>
              </div>
              <div className="chev"><ChevronIcon /></div>
            </div>
            <div className="dr-div"></div>
            <div className="dr">
              <div className="dr-ic"><StoreIcon /></div>
              <div><div className="dr-v grey">Merchant (e.g., Apple Store)</div></div>
            </div>
          </div>

          {/* Hint */}
          <div className="hint-card">
            <span>💡</span>
            <span>We&apos;ll check your spendable balance, upcoming bills, and savings targets</span>
          </div>
        </div>
      </div>

      <div className="check-cta">Evaluate purchase</div>
      <BottomNav active="check" />
    </>
  );
}
