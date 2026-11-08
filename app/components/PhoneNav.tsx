import AppIcon, { type AppIconName } from "./AppIcon";

/* Mirrors the app's AppBottomNav: five tabs, the active one a green pill
   with a white icon and label, the rest bare grey icons. */
const TABS: { id: PhoneTab; label: string; icon: AppIconName }[] = [
  { id: "home", label: "Home", icon: "home" },
  { id: "transactions", label: "Transactions", icon: "receipt" },
  { id: "check", label: "Check", icon: "folder" },
  { id: "goals", label: "Goals", icon: "adjust" },
  { id: "settings", label: "Settings", icon: "settings" },
];

export type PhoneTab = "home" | "transactions" | "check" | "goals" | "settings";

export default function PhoneNav({ active }: { active: PhoneTab }) {
  return (
    <nav className="sf-nav">
      <div className="sf-nav-row">
        {TABS.map((t) => (
          <div key={t.id} className={"sf-nav-item" + (t.id === active ? " on" : "")}>
            <AppIcon name={t.icon} size={22} />
            {t.id === active && <span className="sf-nav-label">{t.label}</span>}
          </div>
        ))}
      </div>
      <div className="sf-home-indicator" />
    </nav>
  );
}
