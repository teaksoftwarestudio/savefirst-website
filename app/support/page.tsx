import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";
import { APP_STORE_URL, IS_LIVE, SUPPORT_EMAIL, WAITLIST_URL } from "../constants";

export const metadata: Metadata = {
  title: "Support — SaveFirst",
  description:
    "Get help with SaveFirst: contact us, manage your account and data, and manage or cancel a subscription.",
  alternates: { canonical: "/support" },
};

const SECTIONS = [
  { id: "contact", label: "Contact us" },
  { id: "get-the-app", label: "Getting the app" },
  { id: "account", label: "Your account" },
  { id: "data", label: "Your data" },
  { id: "subscriptions", label: "Subscriptions" },
  { id: "privacy-security", label: "Privacy and security" },
];

const mail = `mailto:${SUPPORT_EMAIL}`;

export default function SupportPage() {
  return (
    <LegalShell
      eyebrow="Support"
      title="How can we help?"
      intro="Answers to the common questions, and a direct line to us for everything else."
      sections={SECTIONS}
    >
      <section id="contact">
        <h2>Contact us</h2>
        <p>
          Email <a href={mail}>{SUPPORT_EMAIL}</a>. Tell us what happened, what you expected to
          happen, and which iPhone and iOS version you are using. A screenshot helps.
        </p>
        <p>
          <strong>Never send us</strong> card numbers, bank account numbers, passwords, or one-time
          codes. We do not need them and will never ask for them.
        </p>
      </section>

      <section id="get-the-app">
        <h2>Getting the app</h2>
        {IS_LIVE && APP_STORE_URL ? (
          <p>
            SaveFirst is available for iPhone on the{" "}
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
              App Store
            </a>
            . Android is on the roadmap.
          </p>
        ) : (
          <p>
            SaveFirst for iPhone is not on the App Store yet.{" "}
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Join the waitlist
            </a>{" "}
            and we will tell you the day it is. Android is on the roadmap.
          </p>
        )}
      </section>

      <section id="account">
        <h2>Your account</h2>
        <p>
          You can sign in with Apple, with Google, or with an email address and a password. Your
          plan is stored in your account, so it is there when you sign in on a new iPhone.
        </p>
        <p>
          Can&rsquo;t get in? Email us from the address on your account and tell us which sign-in
          method you used.
        </p>
      </section>

      <section id="data">
        <h2>Your data</h2>
        <ul>
          <li>
            <strong>Get a copy.</strong> Email us and we will send you your data in a
            machine-readable format.
          </li>
          <li>
            <strong>Delete your account.</strong> In the app, go to{" "}
            <strong>Settings → Delete account</strong>. Your account and every record attached to
            it are deleted from our servers. This cannot be undone, so ask for a copy first.
          </li>
        </ul>
        <p>
          Deleting the app from your iPhone does not delete your account. The details are in{" "}
          <a href="/privacy#deletion">the Privacy Policy</a>.
        </p>
      </section>

      <section id="subscriptions">
        <h2>Subscriptions</h2>
        <p>
          SaveFirst is free to download. If you subscribe, Apple handles the billing, so a few
          things are managed through Apple rather than through us.
        </p>
        <ul>
          <li>
            <strong>See the price before you buy.</strong> The purchase screen in the app shows the
            price, the billing period, and any free trial before you confirm.
          </li>
          <li>
            <strong>Manage or cancel.</strong> On your iPhone, open{" "}
            <strong>Settings → [your name] → Subscriptions</strong> and choose SaveFirst. Cancel at
            least 24 hours before the renewal date to avoid the next charge. You keep access until
            the end of the period you paid for.
          </li>
          <li>
            <strong>Deleting your account does not cancel a subscription.</strong> Cancel it in
            your Apple settings as well.
          </li>
          <li>
            <strong>New iPhone or reinstalled?</strong> Use <strong>Restore Purchases</strong> in
            the app while signed in to the same Apple Account.
          </li>
          <li>
            <strong>Refunds</strong> are handled by Apple. Request one at{" "}
            <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer">
              reportaproblem.apple.com
            </a>
            .
          </li>
        </ul>
        <p>
          The full terms are in <a href="/terms#subscriptions">Section 12 of the Terms</a>.
        </p>
      </section>

      <section id="privacy-security">
        <h2>Privacy and security</h2>
        <p>
          SaveFirst never links to your bank. We don&rsquo;t sell data and we don&rsquo;t run ads.
          Read the <a href="/privacy">Privacy Policy &amp; Security Statement</a> for exactly what
          we store and why.
        </p>
        <p>
          Found a security issue? Email{" "}
          <a href={`${mail}?subject=Security`}>{SUPPORT_EMAIL}</a> with &ldquo;Security&rdquo; in
          the subject. Our{" "}
          <a href="/privacy#disclosure">responsible disclosure policy</a> explains what happens
          next.
        </p>
      </section>
    </LegalShell>
  );
}
