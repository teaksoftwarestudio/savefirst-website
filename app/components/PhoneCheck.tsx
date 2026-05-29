export default function PhoneCheck() {
  return (
    <div className="scr scr-check">
      <h4>Should I buy this?</h4>
      <div className="desc">Get a quick recommendation before you spend.</div>
      <div className="lbl">Purchase amount</div>
      <div className="field-amt"><span className="dol">$</span>85.00</div>
      <div className="lbl">Category</div>
      <div className="field"><span>Entertainment</span><span>▾</span></div>
      <div className="lbl">Type</div>
      <div className="seg">
        <div>Essential</div>
        <div className="on">Discretionary</div>
      </div>
      <div className="tip">💡 We&apos;ll check your spendable balance, upcoming bills, and savings targets.</div>
      <div className="cta">Evaluate</div>
    </div>
  );
}
