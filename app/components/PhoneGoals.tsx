import AppIcon from "./AppIcon";
import PhoneNav from "./PhoneNav";

/* Goals tab, matching the app's GoalsScreen: header with "New goal",
   the "Your savings" split card, then one card per goal. */
type Accent = { fg: string; tint: string };
const BLUE: Accent = { fg: "#2563EB", tint: "#D6EBF8" };
const GREEN: Accent = { fg: "#16A34A", tint: "#D6F0E5" };
const PURPLE: Accent = { fg: "#7C3AED", tint: "#F4EEFD" };

const GOALS = [
  { title: "Emergency fund", emoji: "🛡️", sub: "Priority · $250 a month", saved: "$3,450", target: "$6,000", pct: 57, monthly: 250, done: "Jun 2027", accent: BLUE },
  { title: "Japan trip", emoji: "✈️", sub: "$150 a month", saved: "$740", target: "$2,500", pct: 30, monthly: 150, done: "Apr 2027", accent: GREEN },
  { title: "Fall tuition", emoji: "🎓", sub: "Priority · $300 a month", saved: "$1,200", target: "$5,000", pct: 24, monthly: 300, done: "Sep 2026", accent: PURPLE },
];

export default function PhoneGoals() {
  return (
    <>
      <div className="sf-scroll">
        <div className="sf-pad sf-goals">
          <div className="sf-tab-head">
            <div className="sf-tab-copy">
              <div className="sf-tab-title">Goals</div>
              <div className="sf-tab-sub">3 active · $5,390 saved so far</div>
            </div>
            <div className="sf-pill-action">
              <span className="sf-pa-well"><AppIcon name="add" size={16} /></span>
              New goal
            </div>
          </div>

          <div className="sf-card sf-savings">
            <div className="sf-sv-head">
              <span className="sf-well40" style={{ background: GREEN.tint, color: GREEN.fg }}><AppIcon name="savings" size={20} /></span>
              <div className="sf-sv-copy">
                <div className="sf-card-title">Your savings</div>
                <div className="sf-card-sub">Saved first, every payday</div>
              </div>
              <div className="sf-sv-total">$700<span>/mo</span></div>
            </div>
            <div className="sf-split">
              {GOALS.map((g) => (
                <div key={g.title} style={{ flex: g.monthly, background: g.accent.fg }} />
              ))}
            </div>
            <div className="sf-legend">
              {GOALS.map((g) => (
                <span key={g.title}><i style={{ background: g.accent.fg }} />{g.title} ${g.monthly}</span>
              ))}
            </div>
          </div>

          <div className="sf-section-label">Your goals</div>

          {GOALS.map((g) => (
            <div key={g.title} className="sf-card sf-goal">
              <div className="sf-goal-head">
                <span className="sf-well40 emoji" style={{ background: g.accent.tint }}>{g.emoji}</span>
                <div className="sf-goal-copy">
                  <div className="sf-card-title">{g.title}</div>
                  <div className="sf-card-sub">{g.sub}</div>
                </div>
                <span className="sf-chev"><AppIcon name="chevron" size={24} /></span>
              </div>
              <div className="sf-goal-amts">
                <b>{g.saved}</b>
                <span>of {g.target}</span>
                <em>{g.pct}%</em>
              </div>
              <div className="sf-bar"><div style={{ width: `${g.pct}%`, background: g.accent.fg }} /></div>
              <div className="sf-goal-done">Done by {g.done}</div>
            </div>
          ))}
        </div>
      </div>

      <PhoneNav active="goals" />
    </>
  );
}
