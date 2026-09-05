import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy & Security — SaveFirst",
  description:
    "SaveFirst is local-first. Your plan, transactions and goals stay on your iPhone. No bank linking, no ads, no data selling. Here is exactly how it works.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  { id: "who-we-are", label: "Who we are" },
  { id: "principles", label: "Our privacy principles" },
  { id: "on-device", label: "What stays on your iPhone" },
  { id: "never-collect", label: "What we never collect" },
  { id: "backup", label: "Apple backup and iCloud" },
  { id: "purchases", label: "Purchases and the App Store" },
  { id: "website", label: "The savefirst.app website" },
  { id: "support", label: "When you email support" },
  { id: "sharing", label: "Who we share information with" },
  { id: "retention", label: "How long information is kept" },
  { id: "children", label: "Children" },
  { id: "rights", label: "Your rights and controls" },
  { id: "us-states", label: "US state privacy rights" },
  { id: "gdpr", label: "UK and EEA rights" },
  { id: "transfers", label: "International transfers" },
  { id: "security", label: "Security statement" },
  { id: "disclosure", label: "Reporting a vulnerability" },
  { id: "changes", label: "Changes to this policy" },
  { id: "contact", label: "How to reach us" },
];

export default function PrivacyPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Privacy Policy & Security"
      intro="SaveFirst is local-first. Your plan, your transactions and your goals live on your iPhone, not on our servers — because we do not have servers holding them. This page explains that in full, and covers how the app and the website are secured."
      effective="September 5, 2026"
      updated="September 5, 2026"
      sections={SECTIONS}
    >
      <div className="legal-summary">
        <h2>The short version</h2>
        <ul>
          <li><strong>Your financial data stays on your device.</strong> We do not receive it, store it, or have any way to look at it.</li>
          <li><strong>There is no bank linking.</strong> We never see or handle your bank credentials, because the app never asks for them.</li>
          <li><strong>No ads, no data selling, no data sharing for advertising.</strong> Ever.</li>
          <li><strong>No accounts, no logins, no profiles.</strong> Using the app does not require you to tell us who you are.</li>
          <li><strong>You can export everything as a CSV file</strong> at any time, and deleting the app deletes your data with it.</li>
        </ul>
        <p>This summary is for orientation. The sections below are the full statement.</p>
      </div>

      <section id="who-we-are">
        <h2><span className="legal-num">Section 1</span>Who we are</h2>
        <p>
          SaveFirst is made by <strong>TEAK SOFTWARE STUDIO LLC</strong>, a limited liability company registered
          in the State of Texas, United States. Where this policy says <strong>“we”</strong> or{" "}
          <strong>“us”</strong>, it means that company. We are the controller of the limited personal information
          described below.
        </p>
        <p>
          This policy covers the <strong>SaveFirst app for iPhone</strong> and the website at{" "}
          <strong>savefirst.app</strong>. It sits alongside our <a href="/terms">Terms of Service</a>.
        </p>
      </section>

      <section id="principles">
        <h2><span className="legal-num">Section 2</span>Our privacy principles</h2>
        <p>
          Most money apps are built server-first: your data goes to a company, and the privacy policy explains
          what that company promises to do with it. SaveFirst is built the other way round.
        </p>
        <ul>
          <li>
            <strong>Local-first by architecture, not by policy.</strong> The protection comes from where the data
            physically sits, not from a promise about how we behave.
          </li>
          <li>
            <strong>Collect nothing we do not need.</strong> The app works without an account, so we do not ask
            for one.
          </li>
          <li>
            <strong>No surveillance business model.</strong> We make money from a paid tier, not from attention
            or data. There is no advertising, no ad SDK, and no analytics profile of you.
          </li>
          <li>
            <strong>Your data is portable and deletable.</strong> Export it whenever you want; delete it by
            deleting the app.
          </li>
        </ul>
      </section>

      <section id="on-device">
        <h2><span className="legal-num">Section 3</span>What stays on your iPhone</h2>
        <p>
          Everything you put into SaveFirst is written to storage on your own device. It is not transmitted to
          us. We list it here so you know what the app holds, not because we receive any of it.
        </p>
        <div className="legal-table-scroll">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Stored on your device</th>
                <th scope="col">What it is</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Your plan</td>
                <td>Income amounts and dates, recurring bills, savings target as an amount or a percentage, minimum buffer.</td>
              </tr>
              <tr>
                <td>Transactions you log</td>
                <td>Amount, date, category, optional merchant name, optional note, and whether you marked it a need or a want.</td>
              </tr>
              <tr>
                <td>Goals and sinking funds</td>
                <td>Names, target amounts, due dates, monthly contributions, progress.</td>
              </tr>
              <tr>
                <td>Pre-Spend Check history</td>
                <td>The checks you ran and the arithmetic behind each result.</td>
              </tr>
              <tr>
                <td>App settings</td>
                <td>Preferences, notification choices, and display options.</td>
              </tr>
              <tr>
                <td>Voice entry audio</td>
                <td>Speech is converted to text on your device using Apple&rsquo;s speech recognition. We do not receive audio or transcripts. Apple&rsquo;s handling of speech is governed by Apple&rsquo;s own privacy policy and your device settings.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Because none of this reaches us, we cannot produce it, sell it, lose it in a breach of our systems, or
          hand it to anyone who asks — including in response to a subpoena. There is nothing on our side to hand
          over.
        </p>
      </section>

      <section id="never-collect">
        <h2><span className="legal-num">Section 4</span>What we never collect</h2>
        <p>Stated plainly, so there is no ambiguity for you or for an App Store reviewer:</p>
        <ul>
          <li><strong>No bank credentials.</strong> There is no bank linking in the app, so it never asks for a username, password, or one-time code for any financial institution.</li>
          <li><strong>No imported transactions.</strong> Nothing is pulled from your bank, card, or statements. Everything in the app is there because you entered it.</li>
          <li><strong>No card or payment details.</strong> Purchases go through Apple, described in Section 6.</li>
          <li><strong>No account, name, or password.</strong> The app does not have sign-up.</li>
          <li><strong>No advertising identifiers and no tracking.</strong> We do not use the IDFA, we do not present App Tracking Transparency prompts because we have nothing to ask for, and we do not track you across apps or websites.</li>
          <li><strong>No third-party analytics or crash-reporting SDKs.</strong> There are none in the app.</li>
          <li><strong>No location tracking, no contacts, no photo library access</strong> for any purpose described in this policy.</li>
          <li><strong>No sale of personal information, and no sharing of it for cross-context behavioural advertising.</strong></li>
        </ul>
        <p>
          Apple provides us with aggregate, anonymised App Store statistics — things like how many people
          downloaded the app, crash counts, and territory-level totals. These come from Apple, are not linked to
          you, and cannot be used by us to identify anyone.
        </p>
      </section>

      <section id="backup">
        <h2><span className="legal-num">Section 5</span>Apple backup and iCloud</h2>
        <p>
          iOS may include SaveFirst data in your device backup, depending on the settings you have chosen with
          Apple. If you use iCloud Backup or iCloud sync, a copy of your app data may be stored in your own
          iCloud account.
        </p>
        <p>
          That copy is <strong>yours and Apple&rsquo;s, not ours</strong>. It is stored under your Apple Account,
          protected by Apple&rsquo;s encryption — including end-to-end encryption where you have enabled Advanced
          Data Protection — and governed by Apple&rsquo;s privacy policy. We have no access to your iCloud
          account and cannot read, retrieve, or restore anything from it.
        </p>
        <p>
          You control this entirely in Settings on your device. Turning iCloud Backup off for SaveFirst keeps the
          data on the device alone.
        </p>
      </section>

      <section id="purchases">
        <h2><span className="legal-num">Section 6</span>Purchases and the App Store</h2>
        <p>
          SaveFirst Pro is sold as an auto-renewing subscription through the Apple App Store.{" "}
          <strong>Apple processes the payment, not us.</strong> We never see or store your card number, billing
          address, or Apple Account credentials.
        </p>
        <p>
          The app receives a purchase receipt from Apple in order to unlock paid features and confirm that a
          subscription is active. That validation identifies a purchase, not a person. Apple&rsquo;s handling of
          your purchase information is covered by Apple&rsquo;s privacy policy and the Apple Media Services Terms
          and Conditions.
        </p>
        <p>
          Refunds and subscription management are handled by Apple. See{" "}
          <a href="/terms#plans">Section 6 of the Terms</a> for how that works.
        </p>
      </section>

      <section id="website">
        <h2><span className="legal-num">Section 7</span>The savefirst.app website</h2>
        <p>
          The website is separate from the app and does involve a small amount of ordinary web data handling.
        </p>

        <h3>The waitlist form</h3>
        <p>
          The &ldquo;Join waitlist&rdquo; buttons open a <strong>Google Form</strong>{" "}
          hosted by Google. If you
          choose to submit it, the information you enter there — your email address, and anything else the form
          asks — is collected through Google&rsquo;s service and stored in our Google account. We use it for one
          purpose: to tell you when SaveFirst is available, and occasionally to share news about the launch.
        </p>
        <ul>
          <li>Our lawful basis, where the UK GDPR or EU GDPR applies, is your consent, given when you submit the form.</li>
          <li>Every email we send includes a way to unsubscribe, and you can ask us to delete your address at any time by emailing us.</li>
          <li>We do not sell the list, rent it, or share it with advertisers.</li>
          <li>Google acts as our processor for the form. Google&rsquo;s own privacy policy applies to their handling of it.</li>
        </ul>

        <h3>Hosting and server logs</h3>
        <p>
          Our hosting provider records standard server logs when a page is requested — IP address, browser and
          device type, the page requested, referring page, and a timestamp. These logs exist to keep the site
          running, diagnose faults, and defend against abuse. They are kept for a short period and then deleted
          or aggregated, and we do not use them to build a profile of you.
        </p>

        <h3>Cookies and tracking</h3>
        <p>
          The site does <strong>not</strong> use advertising cookies, analytics cookies, tracking pixels, social
          media trackers, or fingerprinting. Fonts are served from our own domain rather than being requested
          from a third party as you browse. If we ever add privacy-respecting analytics, we will update this page
          before doing so and say exactly what it measures.
        </p>
      </section>

      <section id="support">
        <h2><span className="legal-num">Section 8</span>When you email support</h2>
        <p>
          If you write to us, we receive your email address, your message, and anything you attach — and we keep
          the thread so that we can answer you and refer back to it if you write again.
        </p>
        <div className="legal-notice">
          <p>
            <strong>Please do not send us account numbers, card numbers, login credentials, or bank statements.</strong>{" "}
            We never need them, we do not want them in our inbox, and no genuine message from us will ever ask
            for them. A screenshot with amounts blurred out is almost always enough.
          </p>
        </div>
      </section>

      <section id="sharing">
        <h2><span className="legal-num">Section 9</span>Who we share information with</h2>
        <p>
          <strong>We do not sell personal information, and we do not share it for advertising.</strong> The only
          third parties involved are the service providers that make the website and the App Store work:
        </p>
        <div className="legal-table-scroll">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">Provider</th>
                <th scope="col">What it handles</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Apple</td>
                <td>App distribution, purchases and subscriptions, on-device speech recognition, and any iCloud backup you enable.</td>
              </tr>
              <tr>
                <td>Google</td>
                <td>The waitlist form, and the email account we use to reply to you.</td>
              </tr>
              <tr>
                <td>Our website host</td>
                <td>Serving savefirst.app and the standard server logs described in Section 7.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We may also disclose information if we are legally required to, or to protect our rights or someone&rsquo;s
          safety. In practice, our ability to comply with such a request is limited to what we actually hold —
          which does not include anything from inside your app.
        </p>
        <p>
          If the business is ever sold or merged, information we hold may transfer as part of that transaction.
          We would tell you before it happened and before any change to how it is handled.
        </p>
      </section>

      <section id="retention">
        <h2><span className="legal-num">Section 10</span>How long information is kept</h2>
        <ul>
          <li><strong>App data:</strong> kept on your device for as long as you keep it. Deleting a record deletes it; deleting the app removes it all.</li>
          <li><strong>Waitlist email addresses:</strong> kept until launch and for a reasonable period afterwards, or until you unsubscribe or ask us to delete it, whichever is sooner.</li>
          <li><strong>Support emails:</strong> kept for up to 24 months so we have context if you write again, then deleted.</li>
          <li><strong>Server logs:</strong> kept for a short period for security and reliability, then deleted or aggregated.</li>
        </ul>
      </section>

      <section id="children">
        <h2><span className="legal-num">Section 11</span>Children</h2>
        <p>
          SaveFirst is not directed to children under 13, and we do not knowingly collect personal information
          from anyone under 13. The app has no sign-up, no messaging, no social features, and no advertising.
        </p>
        <p>
          If you are a parent or guardian and believe a child under 13 has sent us personal information — for
          example, by submitting the waitlist form — email us and we will delete it.
        </p>
      </section>

      <section id="rights">
        <h2><span className="legal-num">Section 12</span>Your rights and controls</h2>
        <p>
          Most privacy controls are in your hands directly, which is the point of building the app this way.
        </p>
        <ul>
          <li><strong>Access and portability:</strong> export everything as a CSV file from within the app, on any tier, at any time.</li>
          <li><strong>Correction:</strong> edit or delete any entry in the app yourself.</li>
          <li><strong>Deletion:</strong> delete the app, and its data is removed from your device. If you use iCloud Backup, remove the backup in your Apple Account settings as well.</li>
          <li><strong>Waitlist:</strong> unsubscribe from any email we send, or write to us and we will delete your address.</li>
          <li><strong>Support history:</strong> ask us to delete a support thread and we will, unless we need to keep it to resolve an open issue or to meet a legal obligation.</li>
        </ul>
        <p>
          For anything you need us to do, email{" "}
          <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a>. We aim to respond within
          30 days. We may need to ask a question to verify that a request about an email address really comes
          from the person who owns it. We will never charge you for making a request or treat you differently for
          exercising a right.
        </p>
      </section>

      <section id="us-states">
        <h2><span className="legal-num">Section 13</span>US state privacy rights</h2>
        <p>
          If you live in California, Texas, Colorado, Connecticut, Virginia, or another US state with a
          comprehensive privacy law, you have rights to know what personal information is collected about you, to
          access and delete it, to correct it, to obtain a portable copy, and not to be discriminated against for
          exercising those rights.
        </p>
        <p>
          <strong>
            We do not sell personal information, and we do not share it for cross-context behavioural
            advertising.
          </strong>{" "}
          We do not use it for profiling that produces legal or similarly significant effects. We do not collect
          sensitive personal information as those laws define it.
        </p>
        <p>
          The only personal information we hold is described in Sections 7 and 8: a waitlist email address if you
          gave us one, support correspondence if you wrote to us, and short-lived website server logs. To exercise
          a right, or to appeal a decision we have made about a request, email us at the address in Section 19.
          If we deny an appeal, you may contact your state attorney general.
        </p>
      </section>

      <section id="gdpr">
        <h2><span className="legal-num">Section 14</span>UK and EEA rights</h2>
        <p>
          If the UK GDPR or EU GDPR applies to you, you have the right to access, rectify, erase, restrict, or
          object to our processing of your personal data, and the right to data portability. Where we rely on
          consent — the waitlist — you may withdraw it at any time, without affecting processing carried out
          before you did.
        </p>
        <p>
          Our lawful bases are: <strong>consent</strong> for waitlist emails; <strong>legitimate interests</strong>{" "}
          for responding to your support messages and for keeping the website secure and available; and{" "}
          <strong>legal obligation</strong> where a law requires us to retain or disclose something.
        </p>
        <p>
          You have the right to lodge a complaint with your local supervisory authority. In the UK, that is the
          Information Commissioner&rsquo;s Office. We would appreciate the chance to put it right first.
        </p>
      </section>

      <section id="transfers">
        <h2><span className="legal-num">Section 15</span>International transfers</h2>
        <p>
          Your app data does not travel — it stays on your device. The limited information described in Sections
          7 and 8 is handled by service providers who may store it in the United States and other countries.
          Where personal data is transferred out of the UK or EEA, we rely on appropriate safeguards, such as the
          European Commission&rsquo;s Standard Contractual Clauses and the UK Addendum, as implemented by those
          providers.
        </p>
      </section>

      <section id="security">
        <h2><span className="legal-num">Section 16</span>Security statement</h2>
        <p>
          The strongest security property of SaveFirst is structural: <strong>we do not hold your financial
          data, so there is no central database of it to breach.</strong> An attacker who compromised our
          systems would find no user transactions, no balances, and no bank credentials, because we never had
          them.
        </p>

        <h3>On your device</h3>
        <ul>
          <li>App data is stored in the app&rsquo;s private container, which iOS isolates from other apps by design.</li>
          <li>It is protected by iOS Data Protection, which encrypts files at rest using keys tied to your device passcode and the device&rsquo;s hardware security.</li>
          <li>The app does not transmit your plan or transactions to any server, so there is no data in transit to intercept.</li>
          <li>Speech for voice entry is processed on the device.</li>
        </ul>

        <h3>What you control, and should</h3>
        <ul>
          <li>Set a device passcode and enable Face ID or Touch ID. Without a passcode, iOS encryption at rest offers materially less protection.</li>
          <li>Keep iOS and the app updated, so that security fixes reach you.</li>
          <li>Keep your Apple Account secured with two-factor authentication, particularly if you use iCloud Backup.</li>
          <li>Treat an exported CSV file as sensitive — it is a plain, unencrypted copy of your records, and once you move it off the device its protection is whatever you give it.</li>
        </ul>

        <h3>On our side</h3>
        <ul>
          <li>The website is served over HTTPS with TLS, and HTTP requests are redirected to HTTPS.</li>
          <li>Accounts we use to run the business — hosting, the App Store, email — are protected with two-factor authentication and access limited to those who need it.</li>
          <li>We do not use third-party SDKs in the app, which keeps the supply-chain surface small.</li>
          <li>We keep no payment card data, so there is none to lose.</li>
        </ul>

        <h3>Honest limits</h3>
        <p>
          No system is perfectly secure. A device that is jailbroken, running compromised software, unlocked and
          in someone else&rsquo;s hands, or backed up to an account someone else can access is outside what the
          app can protect against. We describe our practices accurately rather than promising invulnerability. If
          a security incident ever affects personal information we hold, we will notify affected people and any
          regulator required, without undue delay.
        </p>
      </section>

      <section id="disclosure">
        <h2><span className="legal-num">Section 17</span>Reporting a vulnerability</h2>
        <p>
          If you find a security issue in the app or on the site, we want to hear about it. Email{" "}
          <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a> with the subject line{" "}
          <strong>“Security”</strong> and enough detail for us to reproduce it. We will acknowledge within five
          business days and keep you updated.
        </p>
        <p>
          Please give us a reasonable opportunity to fix an issue before disclosing it publicly, and avoid
          accessing or modifying anyone else&rsquo;s data, degrading the service, or using automated scanning that
          disrupts it. We will not pursue legal action against researchers who report in good faith and follow
          those principles.
        </p>
      </section>

      <section id="changes">
        <h2><span className="legal-num">Section 18</span>Changes to this policy</h2>
        <p>
          We will update this page when the product or the law changes, and revise the “Last updated” date at the
          top. If a change is material — particularly anything that would mean information leaving your device —
          we will give clear notice in the app or on the site <strong>before</strong> it takes effect, and, where
          the law requires it, ask for your consent rather than assuming it.
        </p>
        <p>
          We will not quietly begin collecting something this policy says we do not collect. If that ever
          changes, you will be told.
        </p>
      </section>

      <section id="contact">
        <h2><span className="legal-num">Section 19</span>How to reach us</h2>
        <p>
          <strong>TEAK SOFTWARE STUDIO LLC</strong>
          <br />
          A limited liability company registered in the State of Texas, United States
          <br />
          Privacy and support: <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a>
          <br />
          Web: <a href="https://savefirst.app">savefirst.app</a>
        </p>
        <p>
          For the agreement covering your use of the app, see the <a href="/terms">Terms of Service</a>.
        </p>
      </section>
    </LegalShell>
  );
}
