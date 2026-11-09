import LaunchCTA from "../components/LaunchCTA";
import { IS_LIVE } from "../constants";

export default function CtaBand() {
  return (
    <section className="cta-band tight blog-cta">
      <div className="wrap">
        <h2>Know what&rsquo;s safe to spend.</h2>
        <p>
          {IS_LIVE
            ? "SaveFirst is on the App Store for iPhone. Save first, then spend what's left."
            : "SaveFirst is coming to iPhone. Join the waitlist and we’ll tell you the day it’s on the App Store."}
        </p>
        <LaunchCTA tone="light" />
      </div>
    </section>
  );
}
