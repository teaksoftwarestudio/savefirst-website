import AppStoreBadge from "./AppStoreBadge";
import MagneticButton from "./MagneticButton";
import { APP_STORE_URL, WAITLIST_URL } from "../constants";

/**
 * The page's one call to action. Before launch it opens the waitlist form;
 * once APP_STORE_URL is set in constants.ts it becomes the App Store badge.
 */
export default function LaunchCTA({ tone = "primary" }: { tone?: "primary" | "light" }) {
  if (APP_STORE_URL) return <AppStoreBadge href={APP_STORE_URL} />;
  return (
    <MagneticButton href={WAITLIST_URL} external className={`btn btn-${tone}`}>
      Join waitlist
    </MagneticButton>
  );
}
