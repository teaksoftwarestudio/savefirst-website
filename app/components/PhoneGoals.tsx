export default function PhoneGoals() {
  return (
    <div className="scr scr-goals">
      <div className="ef">
        <div className="top">
          <div className="ic">🛡️</div>
          <div>
            <h5>Emergency Fund</h5>
            <div className="sub">Priority goal</div>
          </div>
        </div>
        <div className="amts">
          <div className="big">$3,450</div>
          <div className="of">of $6,000</div>
        </div>
        <div className="bar"><div style={{ width: "57.5%" }}></div></div>
        <div className="row">
          <span>Target: Dec 2026</span>
          <span className="pc">57% complete</span>
        </div>
      </div>
      <div className="sg-title">Sinking Funds</div>
      <div className="sg purple">
        <div className="top">
          <div className="ic">🎓</div>
          <div>
            <div className="name">Fall Tuition</div>
            <div className="due">Due: Sep 2026</div>
          </div>
        </div>
        <div className="amts"><span className="a">$1,200</span><span className="b">of $5,000</span></div>
        <div className="bar"><div style={{ width: "24%" }}></div></div>
        <div className="pc">24% complete</div>
      </div>
      <div className="sg green">
        <div className="top">
          <div className="ic">✈️</div>
          <div>
            <div className="name">Summer Trip</div>
            <div className="due">Due: Jul 2026</div>
          </div>
        </div>
        <div className="amts"><span className="a">$680</span><span className="b">of $2,000</span></div>
        <div className="bar"><div style={{ width: "34%" }}></div></div>
        <div className="pc">34% complete</div>
      </div>
    </div>
  );
}
