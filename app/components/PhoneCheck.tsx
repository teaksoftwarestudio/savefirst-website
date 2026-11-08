import AppIcon from "./AppIcon";
import PhoneNav from "./PhoneNav";

/* Check tab, matching the app's CheckScreen ("Can I afford it?") with a
   purchase typed in. Category wells use the app's washed badge pastels. */
const CHIPS = [
  { label: "Food & Dining", emoji: "🍽️", well: "#F3EEE8" },
  { label: "Shopping", emoji: "🛍️", well: "#F1E9EC", on: true },
  { label: "Entertainment", emoji: "🎟️", well: "#EDEAF1" },
  { label: "Fun Subscriptions", emoji: "🔁", well: "#E9EEF1" },
  { label: "Personal Care", emoji: "✨", well: "#F3F0E8" },
  { label: "Travel & Vacation", emoji: "✈️", well: "#D6F0E5" },
];

export default function PhoneCheck() {
  return (
    <>
      <div className="sf-scroll">
        <div className="sf-check">
          <div className="sf-page-title">Can I afford it?</div>
          <div className="sf-page-sub">Type what you&apos;re about to buy. We&apos;ll show you the math.</div>

          <div className="sf-check-hero">
            <div>
              <div className="sf-ch-k">Lifestyle left this month</div>
              <div className="sf-ch-v">$640</div>
            </div>
            <div className="sf-ch-day">
              about <b>$30</b> a day
              <br />
              for 21 days
            </div>
          </div>

          <div className="sf-card sf-check-form">
            <div className="sf-field-label">How much is it?</div>
            <div className="sf-amount"><span className="sf-amount-sym">$</span>85</div>
            <div className="sf-field-label mt">What is it?</div>
            <div className="sf-box-field">AirPods Pro</div>
            <div className="sf-field-label mt">Is it a need or a want?</div>
            <div className="sf-seg">
              <span>Necessity</span>
              <span className="on">Lifestyle</span>
            </div>
            <div className="sf-chips">
              {CHIPS.map((c) => (
                <span key={c.label} className={"sf-chip" + (c.on ? " on" : "")}>
                  <span className="sf-chip-well" style={{ background: c.well }}>{c.emoji}</span>
                  {c.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sf-bottom-actions">
        <div className="sf-primary-btn">Check it</div>
        <div className="sf-text-action"><AppIcon name="mic" size={19} />Or just say it</div>
      </div>
      <PhoneNav active="check" />
    </>
  );
}
