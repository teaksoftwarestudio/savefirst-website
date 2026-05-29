export default function PhoneHome() {
  return (
    <div className="scr scr-home">
      <div className="hero-card">
        <div className="lbl"><span>Spendable Balance</span><span className="info">i</span></div>
        <div className="amt">$2,847.52</div>
        <div className="sub">After savings &amp; essentials</div>
        <div className="ni">
          <span>Next income</span>
          <span>Feb 28 · $3,200</span>
        </div>
      </div>
      <div className="snap">
        <h5 style={{ marginBottom: 10 }}>February 2026</h5>
        <div className="snap-grid">
          <div className="snap-cell"><div className="lbl">Income</div><div className="val pos">+$3,200</div></div>
          <div className="snap-cell"><div className="lbl">Essentials</div><div className="val">$1,450</div></div>
          <div className="snap-cell"><div className="lbl">Discretionary</div><div className="val">$680</div></div>
          <div className="snap-cell"><div className="lbl">Savings</div><div className="val blu">$520</div></div>
        </div>
        <div className="snap-foot">
          <span style={{ color: "var(--ink-3)" }}>Net change</span>
          <span className="net">▲ +$550</span>
        </div>
      </div>
      <div className="chart-card">
        <h5>Spend Trend</h5>
        <div className="bars" style={{ marginTop: 10 }}>
          <div className="b" style={{ height: "42%" }}></div>
          <div className="b" style={{ height: "64%" }}></div>
          <div className="b" style={{ height: "38%" }}></div>
          <div className="b" style={{ height: "78%" }}></div>
          <div className="b" style={{ height: "54%" }}></div>
          <div className="b muted" style={{ height: "48%" }}></div>
          <div className="b muted" style={{ height: "34%" }}></div>
        </div>
        <div className="bars-x">
          <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
        </div>
      </div>
    </div>
  );
}
