import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy & Security — SaveFirst",
  description:
    "What SaveFirst collects, where it is stored, who processes it, and how long it is kept — plus how the app and the servers behind it are secured.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  { id: "who-we-are", label: "Who we are" },
  { id: "you-provide", label: "Information you give us" },
  { id: "automatic", label: "Information collected automatically" },
  { id: "never", label: "What we never collect" },
  { id: "voice", label: "Voice input" },
  { id: "how-we-use", label: "How we use information" },
  { id: "where", label: "Where your information lives" },
  { id: "providers", label: "Service providers" },
  { id: "retention", label: "How long we keep things" },
  { id: "deletion", label: "Deleting your account" },
  { id: "rights", label: "Your rights and controls" },
  { id: "children", label: "Children" },
  { id: "us-states", label: "US state privacy rights" },
  { id: "gdpr", label: "UK and EEA rights" },
  { id: "transfers", label: "International transfers" },
  { id: "website", label: "The savefirst.app website" },
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
      intro="SaveFirst is an account-based service. The money information you enter is stored on our servers so it is there when you sign in. This page sets out exactly what we hold, who else touches it, how long we keep it, and how it is protected."
      effective="September 5, 2026"
      updated="September 5, 2026"
      sections={SECTIONS}
    >
      <div className="legal-summary">
        <h2>The short version</h2>
        <ul>
          <li><strong>SaveFirst needs an account and an internet connection.</strong> Your plan, transactions and goals are stored on our servers, not only on your phone.</li>
          <li><strong>There is no bank linking.</strong> We never ask for, receive, or store bank credentials, and nothing is imported from your statements. Everything in the app is there because you entered it.</li>
          <li><strong>We use Firebase for sign-in, analytics and crash reporting</strong>, which means Google processes some data on our behalf. Named in full below.</li>
          <li><strong>We do not sell your information</strong>, do not run ads, and do not use your financial data for advertising or profiling.</li>
          <li><strong>You can delete your account from inside the app</strong>, and it really is deleted — every row, not a flag on a record.</li>
        </ul>
        <p>This summary is for orientation. The sections below are the full statement.</p>
      </div>

      <section id="who-we-are">
        <h2><span className="legal-num">Section 1</span>Who we are</h2>
        <p>
          SaveFirst is made by <strong>TEAK SOFTWARE STUDIO LLC</strong>, a limited liability company
          registered in the State of Texas, United States. Where this policy says{" "}
          <strong>“we”</strong> or <strong>“us”</strong>, it means that company. We are the
          controller of the personal information described here.
        </p>
        <p>
          This policy covers the <strong>SaveFirst mobile app</strong> and the website at{" "}
          <strong>savefirst.app</strong>. It sits alongside our <a href="/terms">Terms of Service</a>.
        </p>
      </section>

      <section id="you-provide">
        <h2><span className="legal-num">Section 2</span>Information you give us</h2>

        <h3>Account information</h3>
        <p>
          You sign in with Apple, Google, or an email address and password. Sign-in is handled by{" "}
          <strong>Firebase Authentication</strong> (Google), and we receive from it the identifiers
          needed to recognise you on return visits.
        </p>
        <div className="legal-table-scroll">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">What we store</th>
                <th scope="col">Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Email address</td>
                <td>Identifies your account and is how we contact you about it.</td>
              </tr>
              <tr>
                <td>Display name, if your provider supplies one</td>
                <td>Shown in the app. Optional in practice.</td>
              </tr>
              <tr>
                <td>Firebase user ID</td>
                <td>Links your sign-in provider to your SaveFirst account.</td>
              </tr>
              <tr>
                <td>Password hash, for email sign-up only</td>
                <td>Verifies your password. We store a one-way Argon2 hash, never the password itself.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          If you sign in with Apple and use Apple&rsquo;s <em>Hide My Email</em>, we only ever see the
          relay address Apple gives us.
        </p>

        <h3>The money information you enter</h3>
        <p>
          This is the substance of the product, and it is stored on our servers so that it is
          available whenever you sign in. It includes:
        </p>
        <ul>
          <li>income sources, amounts, pay cadence and expected pay dates;</li>
          <li>recurring bills and subscriptions you have told us about, with amounts and due dates;</li>
          <li>transactions you log — amount, date, category, merchant, an optional note, and whether you marked it a need or a want;</li>
          <li>accounts you set up in the app and the balances you enter for them;</li>
          <li>goals and sinking funds, with targets, due dates and contributions;</li>
          <li>spending caps, tags, and investments you record;</li>
          <li>Pre-Spend Checks you run and the decisions recorded from them;</li>
          <li>your onboarding answers, including your timezone, currency, and the questions about what you want from the app.</li>
        </ul>

        <h3>When you email us</h3>
        <p>
          We receive your email address, your message, and anything you attach, and we keep the
          thread so we can answer you.
        </p>
        <div className="legal-notice">
          <p>
            <strong>Never send us account numbers, card numbers, passwords, one-time codes, or bank statements.</strong>{" "}
            We do not need them and no genuine message from us will ever ask for them. A screenshot
            with amounts blurred is almost always enough.
          </p>
        </div>
      </section>

      <section id="automatic">
        <h2><span className="legal-num">Section 3</span>Information collected automatically</h2>

        <h3>Analytics</h3>
        <p>
          The app uses <strong>Firebase Analytics</strong> (Google) to understand how features are
          used so we can improve them. It records automatically-collected events such as app opens
          and sessions, together with a Firebase installation identifier, your device model and
          operating system version, and an approximate region derived from your IP address. We do{" "}
          <strong>not</strong> send the amounts, merchants, notes, or any other content of your
          financial records to analytics.
        </p>

        <h3>Crash and diagnostic reports</h3>
        <p>
          The app uses <strong>Firebase Crashlytics</strong> (Google) to report crashes and errors
          so we can fix them. A report contains the error, a stack trace, the device model and OS
          version, and the state of the app at the time. <strong>Crash reports are labelled with
          your account identifier</strong>, so that a crash you report to us can be found. Crash
          reporting is on by default in the current version of the app.
        </p>

        <h3>Server logs and abuse prevention</h3>
        <p>
          Our API records standard operational logs — the time of a request, which endpoint was
          called, the response status, and a request identifier — so we can diagnose faults. Our
          rate limiting stores no raw addresses: an IP address or user identifier is converted into
          a keyed one-way digest before it is used as a counter key.
        </p>

        <h3>Authentication tokens</h3>
        <p>
          When you sign in, your device is issued an access token and a refresh token so you are not
          asked to sign in repeatedly. These are stored on your device, described in Section 7.
        </p>
      </section>

      <section id="never">
        <h2><span className="legal-num">Section 4</span>What we never collect</h2>
        <p>Stated plainly, so there is no ambiguity for you or for an App Store reviewer:</p>
        <ul>
          <li><strong>No bank credentials.</strong> There is no bank linking in the app. It never asks for a username, password, or one-time code for any financial institution, and we could not use one if you sent it.</li>
          <li><strong>No imported transactions.</strong> Nothing is pulled from your bank, card, or statements. Every record exists because you created it.</li>
          <li><strong>No card or payment details.</strong> The current version of the app sells nothing.</li>
          <li><strong>No advertising identifiers, and no cross-app or cross-site tracking.</strong> The app does not use the IDFA, does not present an App Tracking Transparency prompt, and contains no advertising SDK.</li>
          <li><strong>No sale of personal information, and no sharing for cross-context behavioural advertising.</strong></li>
          <li><strong>No access to your contacts, photos, location, SMS, or email inbox.</strong> The only device permissions the app requests are the microphone and speech recognition, for voice entry, and notifications if you turn reminders on.</li>
          <li><strong>No reading of your device&rsquo;s messages to find receipts.</strong> Some money apps do this. SaveFirst does not.</li>
        </ul>
      </section>

      <section id="voice">
        <h2><span className="legal-num">Section 5</span>Voice input</h2>
        <p>
          Voice entry is optional. It works only after you grant microphone and speech recognition
          permission, and only while you are actively using it.
        </p>
        <ul>
          <li>
            <strong>Speech becomes text using Apple&rsquo;s speech recognition</strong>, built into
            iOS. Depending on your device, language and settings, Apple may perform that recognition
            on the device or on Apple&rsquo;s servers. That step is governed by Apple&rsquo;s privacy
            policy, not ours, and we never receive the audio itself.
          </li>
          <li>
            <strong>The resulting text is sent to our servers to be interpreted</strong> — to work
            out that “spent twelve dollars on coffee yesterday” is a transaction, and which fields
            it fills.
          </li>
          <li>
            <strong>Interpretation today is deterministic.</strong> It runs on our own servers
            against a fixed set of rules. In the current version, <strong>your transcript is not
            sent to any third-party AI provider.</strong>
          </li>
          <li>
            <strong>The transcript is short-lived.</strong> It is held only until you confirm or
            cancel the command, and is erased as soon as you do. Anything left unconfirmed expires
            and is erased automatically within about fifteen minutes. What remains afterwards is the
            transaction you confirmed — not the words you said.
          </li>
        </ul>
        <p>
          We are building an AI-assisted fallback for commands the deterministic parser cannot
          interpret. If we switch it on, a transcript may be sent to an external AI provider —{" "}
          <strong>OpenRouter</strong> or <strong>Groq</strong> — for that single interpretation.{" "}
          <strong>It is not enabled in the version of the app you are using</strong>, and we will
          update this page and say so in the app before it is.
        </p>
      </section>

      <section id="how-we-use">
        <h2><span className="legal-num">Section 6</span>How we use information</h2>
        <p>We use what we hold to:</p>
        <ul>
          <li>run the service — store your plan, calculate your spendable balance, answer a Pre-Spend Check, track goals, and show your month;</li>
          <li>keep your account working across sign-ins and devices;</li>
          <li>send the reminders you switch on;</li>
          <li>answer your support messages;</li>
          <li>keep the service available, diagnose faults, and prevent abuse;</li>
          <li>understand in aggregate which features are used, so we know what to improve;</li>
          <li>meet a legal obligation where one applies.</li>
        </ul>
        <p>
          We do not use your financial information to build an advertising profile, to train
          general-purpose AI models, or to sell to anyone.
        </p>
      </section>

      <section id="where">
        <h2><span className="legal-num">Section 7</span>Where your information lives</h2>

        <h3>On our servers</h3>
        <p>
          Your account and financial records are stored in a <strong>PostgreSQL database</strong>{" "}
          running on infrastructure we operate with <strong>OVHcloud</strong>. A{" "}
          <strong>Redis</strong> instance holds short-lived operational data such as rate-limit
          counters and queued background work. This is the primary copy of your data:{" "}
          <strong>SaveFirst needs an internet connection</strong> to show or change your plan once
          you have an account.
        </p>

        <h3>On your device</h3>
        <p>The app keeps only a small amount of information locally:</p>
        <ul>
          <li><strong>Sign-in tokens</strong>, held in the iOS Keychain (encrypted system storage), so you stay signed in;</li>
          <li><strong>App preferences</strong> such as theme and notification choices;</li>
          <li><strong>Scheduled reminders</strong>, which are local notifications created on your device — nothing is pushed from us;</li>
          <li><strong>An onboarding draft</strong>, if you start setting up before creating an account. It stays on the device until you finish, and is cleared then.</li>
        </ul>
        <p>
          The app does <strong>not</strong> keep a local database of your transactions, so it does
          not work offline once you have an account.
        </p>
      </section>

      <section id="providers">
        <h2><span className="legal-num">Section 8</span>Service providers</h2>
        <p>
          These are the companies that process data on our behalf so the service can run. Each is
          bound to use it only to provide their service to us. There are no others, and we do not
          sell to or share with anyone else.
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
                <td>Google (Firebase)</td>
                <td>Authentication for Apple, Google and email sign-in; analytics; crash reporting.</td>
              </tr>
              <tr>
                <td>OVHcloud</td>
                <td>The servers and database that hold your account and financial records.</td>
              </tr>
              <tr>
                <td>Cloudflare</td>
                <td>Sits in front of our API, carrying traffic between the app and our servers and filtering abuse.</td>
              </tr>
              <tr>
                <td>Apple</td>
                <td>App distribution and updates, Sign in with Apple, and the speech recognition described in Section 5.</td>
              </tr>
              <tr>
                <td>Google (Forms)</td>
                <td>The website waitlist form, and the mailbox we answer support from.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          We may also disclose information where we are legally required to, or to protect our
          rights or someone&rsquo;s safety. If the business is ever sold or merged, information we
          hold may transfer as part of that transaction, and we would tell you before anything about
          its handling changed.
        </p>
      </section>

      <section id="retention">
        <h2><span className="legal-num">Section 9</span>How long we keep things</h2>
        <div className="legal-table-scroll">
          <table className="legal-table">
            <thead>
              <tr>
                <th scope="col">What</th>
                <th scope="col">How long</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Account and financial records</td>
                <td>While your account exists. Deleted when you delete your account.</td>
              </tr>
              <tr>
                <td>Voice transcripts</td>
                <td>Erased as soon as you confirm or cancel the command, and automatically within about fifteen minutes if you do neither.</td>
              </tr>
              <tr>
                <td>Monthly insight cards</td>
                <td>Regenerated regularly; expired cards are deleted after 7 days.</td>
              </tr>
              <tr>
                <td>Automatic notes the app attaches to a transaction, after that transaction is deleted</td>
                <td>Deleted 30 days after the transaction is deleted.</td>
              </tr>
              <tr>
                <td>AI request records (timing and cost only, never content)</td>
                <td>90 days.</td>
              </tr>
              <tr>
                <td>Support email</td>
                <td>Up to 24 months, then deleted.</td>
              </tr>
              <tr>
                <td>Server logs</td>
                <td>A short operational period, then deleted or aggregated.</td>
              </tr>
              <tr>
                <td>Analytics and crash data</td>
                <td>Held by Firebase under Google&rsquo;s retention settings for those products.</td>
              </tr>
              <tr>
                <td>Waitlist email address</td>
                <td>Until launch and a reasonable period after, or until you ask us to remove it.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="deletion">
        <h2><span className="legal-num">Section 10</span>Deleting your account</h2>
        <p>
          You can delete your account from inside the app, in{" "}
          <strong>Settings → Delete account</strong>. You do not have to email us and you do not
          have to ask.
        </p>
        <p>
          Deletion is a hard delete, not a hidden flag. It removes your user record and every row
          attached to it: transactions and their splits and tags, accounts and balances, bills and
          their occurrences and payment allocations, goals and contributions, spending caps,
          investments, merchants, tags, your finance profile, saved Pre-Spend decisions, cached
          insights and snapshots, voice command records, and the metadata records of any AI
          requests. The app also deletes your Firebase sign-in identity.
        </p>
        <p>
          It is immediate and it is not reversible. <strong>Ask us for a copy of anything you want
          to keep before you delete</strong> — see Section 11. Copies may persist for a short time in encrypted
          infrastructure backups before they age out, and analytics and crash data already held by
          Firebase are governed by Google&rsquo;s retention for those products.
        </p>
      </section>

      <section id="rights">
        <h2><span className="legal-num">Section 11</span>Your rights and controls</h2>
        <ul>
          <li><strong>Access and correction:</strong> everything about your money is visible and editable in the app.</li>
          <li><strong>Portability:</strong> email us and we will send you a copy of your data in a machine-readable format. A one-tap export inside the app is on the way; until it ships, ask us and we will do it for you.</li>
          <li><strong>Deletion:</strong> Settings → Delete account, as described above.</li>
          <li><strong>Notifications:</strong> turn reminders off in the app or in iOS Settings.</li>
          <li><strong>Voice:</strong> decline or revoke microphone and speech permission in iOS Settings; the rest of the app is unaffected.</li>
          <li><strong>Sign out</strong> at any time from Settings.</li>
          <li><strong>Waitlist:</strong> unsubscribe from any email we send, or ask us to delete your address.</li>
        </ul>
        <p>
          For anything you need us to do, email{" "}
          <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a> from the
          address on your account. We aim to respond within 30 days. We will never charge you for a
          request or treat you differently for making one.
        </p>
      </section>

      <section id="children">
        <h2><span className="legal-num">Section 12</span>Children</h2>
        <p>
          SaveFirst is not directed to children under 13, and we do not knowingly collect personal
          information from anyone under 13. The app has no messaging, no social features, and no
          advertising.
        </p>
        <p>
          If you are a parent or guardian and believe a child under 13 has created an account, email
          us and we will delete it.
        </p>
      </section>

      <section id="us-states">
        <h2><span className="legal-num">Section 13</span>US state privacy rights</h2>
        <p>
          If you live in California, Texas, Colorado, Connecticut, Virginia, or another US state
          with a comprehensive privacy law, you have the right to know what personal information is
          collected about you, to access and delete it, to correct it, to obtain a portable copy,
          and not to be treated differently for exercising those rights.
        </p>
        <p>
          <strong>
            We do not sell personal information, and we do not share it for cross-context
            behavioural advertising.
          </strong>{" "}
          We do not use it for profiling that produces legal or similarly significant effects about
          you.
        </p>
        <p>
          The categories we collect are set out in Sections 2 and 3: identifiers, your email
          address, the financial information you enter, device and usage data, and diagnostic data.
          The account deletion in Section 10 satisfies a deletion request in full; you can also
          write to us at the address in Section 20, including to appeal a decision. If we deny an
          appeal, you may contact your state attorney general.
        </p>
      </section>

      <section id="gdpr">
        <h2><span className="legal-num">Section 14</span>UK and EEA rights</h2>
        <p>
          If the UK GDPR or EU GDPR applies to you, you have the right to access, rectify, erase,
          restrict, or object to our processing, and the right to data portability.
        </p>
        <p>Our lawful bases are:</p>
        <ul>
          <li><strong>Performance of a contract</strong> — running your account and storing the plan you asked us to keep;</li>
          <li><strong>Legitimate interests</strong> — keeping the service secure and available, preventing abuse, fixing crashes, and answering your messages;</li>
          <li><strong>Consent</strong> — analytics, voice input, notifications, and waitlist email, each of which you can decline or withdraw without losing the rest of the app;</li>
          <li><strong>Legal obligation</strong> — where a law requires us to retain or disclose something.</li>
        </ul>
        <p>
          You may lodge a complaint with your local supervisory authority; in the UK that is the
          Information Commissioner&rsquo;s Office. We would appreciate the chance to put it right
          first.
        </p>
      </section>

      <section id="transfers">
        <h2><span className="legal-num">Section 15</span>International transfers</h2>
        <p>
          SaveFirst is operated from the United States by a Texas company, on infrastructure
          provided by OVHcloud, with Google, Cloudflare and Apple processing parts of the service.
          Your information may therefore be stored and processed in countries other than the one you
          live in, including the United States and the European Union.
        </p>
        <p>
          Where personal data is transferred out of the UK or EEA, we rely on appropriate
          safeguards, including the European Commission&rsquo;s Standard Contractual Clauses and the
          UK Addendum, as implemented by those providers.
        </p>
      </section>

      <section id="website">
        <h2><span className="legal-num">Section 16</span>The savefirst.app website</h2>
        <p>The website is separate from the app and handles very little.</p>
        <h3>The waitlist form</h3>
        <p>
          The “Join waitlist” buttons open a <strong>Google Form</strong>{" "}
          hosted by Google. If you submit it, the email address you enter is collected through
          Google&rsquo;s service and stored in our Google account, and we use it to tell you when
          SaveFirst is available. Consent is the lawful basis where the UK or EU GDPR applies. Every
          email includes a way to unsubscribe, and we do not sell or rent the list.
        </p>
        <h3>Hosting and cookies</h3>
        <p>
          Our website host records standard server logs — IP address, browser and device type, the
          page requested, and a timestamp — kept briefly for security and reliability. The site uses{" "}
          <strong>no</strong> advertising cookies, analytics cookies, tracking pixels, or social
          media trackers, and fonts are served from our own domain rather than fetched from a third
          party as you browse.
        </p>
      </section>

      <section id="security">
        <h2><span className="legal-num">Section 17</span>Security statement</h2>
        <p>
          We hold financial information, so we would rather describe our actual controls than make
          broad assurances.
        </p>

        <h3>In transit</h3>
        <ul>
          <li>All traffic between the app and our API is encrypted with HTTPS/TLS. The website redirects HTTP to HTTPS.</li>
          <li>Our API sits behind Cloudflare and is reachable only through it, not directly.</li>
        </ul>

        <h3>Accounts and access</h3>
        <ul>
          <li>Sign-in runs through Firebase Authentication, so Apple and Google credentials are never seen by us. For email sign-up, passwords are stored only as a one-way <strong>Argon2</strong> hash.</li>
          <li>Sessions use short-lived access tokens with separate refresh tokens; on your device both are held in the iOS Keychain.</li>
          <li>Every API request is scoped to the signed-in account, and every endpoint that touches your data requires authentication.</li>
          <li>Requests are rate limited per address and per account, and the limiter stores only keyed one-way digests rather than raw addresses. Sign-in limits fail closed — if the limiter is unavailable, authentication is refused rather than left open.</li>
        </ul>

        <h3>On our servers</h3>
        <ul>
          <li>The database runs with least-privilege roles: the application account cannot perform schema changes, and neither runs as a superuser.</li>
          <li>Database connections outside the local host use TLS, and credentials are held in secrets management rather than in the codebase.</li>
          <li>Logs are structured around request identifiers and are not designed to carry the contents of your financial records.</li>
          <li>Sensitive short-lived material is erased on a schedule rather than left to accumulate — voice transcripts within about fifteen minutes, and the other windows in Section 9.</li>
          <li>Records of AI requests store timing, token counts and cost. They never store the text of a request or a response.</li>
          <li>We hold no payment card data, because the app currently sells nothing.</li>
        </ul>

        <h3>What you control, and should</h3>
        <ul>
          <li>Use a device passcode with Face ID or Touch ID. Anyone who can unlock your phone can open the app.</li>
          <li>Secure the Apple or Google account you sign in with, ideally with two-factor authentication — whoever controls it can reach your SaveFirst account.</li>
          <li>Keep iOS and the app updated so security fixes reach you.</li>
          <li>If you ask us for a copy of your data, treat the file you receive as sensitive: it is a plain, unencrypted copy of your records, and once it is on your computer its protection is whatever you give it.</li>
        </ul>

        <h3>Honest limits</h3>
        <p>
          No system is perfectly secure, and we will not claim otherwise. We are a small team, we
          have not completed an independent security audit or a SOC 2 examination, and we do not
          currently offer two-factor authentication on SaveFirst itself beyond what your sign-in
          provider enforces. A jailbroken or compromised device is outside what any app can protect
          against. If a security incident affects personal information we hold, we will notify
          affected users and any regulator required, without undue delay.
        </p>
      </section>

      <section id="disclosure">
        <h2><span className="legal-num">Section 18</span>Reporting a vulnerability</h2>
        <p>
          If you find a security issue, we want to hear about it. Email{" "}
          <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a> with the
          subject line <strong>“Security”</strong> and enough detail to reproduce it. We will
          acknowledge within five business days and keep you updated.
        </p>
        <p>
          Please give us a reasonable opportunity to fix an issue before disclosing it publicly, and
          avoid accessing or modifying anyone else&rsquo;s data, degrading the service, or running
          automated scanning that disrupts it. We will not pursue legal action against researchers
          who report in good faith and follow those principles.
        </p>
      </section>

      <section id="changes">
        <h2><span className="legal-num">Section 19</span>Changes to this policy</h2>
        <p>
          We will update this page when the product or the law changes, and revise the “Last
          updated” date at the top. If a change is material — in particular, enabling the
          third-party AI processing described in Section 5, or introducing any new category of
          collection — we will give clear notice in the app before it takes effect, and ask for your
          consent where the law requires it.
        </p>
        <p>
          We will not quietly begin collecting something this policy says we do not collect.
        </p>
      </section>

      <section id="contact">
        <h2><span className="legal-num">Section 20</span>How to reach us</h2>
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
