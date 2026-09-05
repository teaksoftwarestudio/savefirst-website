import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — SaveFirst",
  description:
    "The agreement between you and Teak Software Studio LLC covering your use of the SaveFirst app and savefirst.app.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  { id: "agreement", label: "The agreement" },
  { id: "what-it-is", label: "What SaveFirst is" },
  { id: "eligibility", label: "Who may use SaveFirst" },
  { id: "account", label: "Your account" },
  { id: "licence", label: "Your licence to use the app" },
  { id: "not-advice", label: "SaveFirst is not financial advice" },
  { id: "your-content", label: "Your content and your data" },
  { id: "connectivity", label: "Connectivity and availability" },
  { id: "voice", label: "Voice input" },
  { id: "notifications", label: "Reminders and notifications" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "paid", label: "Paid features in the future" },
  { id: "ownership", label: "Ownership and intellectual property" },
  { id: "feedback", label: "Feedback you send us" },
  { id: "prerelease", label: "Pre-release and beta versions" },
  { id: "warranties", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "termination", label: "Termination and deletion" },
  { id: "apple", label: "Apple App Store terms" },
  { id: "changes-terms", label: "Changes to these Terms" },
  { id: "law", label: "Governing law and disputes" },
  { id: "contact", label: "How to reach us" },
];

export default function TermsPage() {
  return (
    <LegalShell
      eyebrow="Legal"
      title="Terms of Service"
      intro="These Terms are the agreement between you and Teak Software Studio LLC for the SaveFirst app and the savefirst.app website. They are written to be read, not skimmed past."
      effective="September 5, 2026"
      updated="September 5, 2026"
      sections={SECTIONS}
    >
      <div className="legal-summary">
        <h2>The short version</h2>
        <ul>
          <li>SaveFirst does arithmetic with numbers you enter. It is not a bank, and it is not financial advice.</li>
          <li>You need an account and an internet connection. Your records are stored on our servers.</li>
          <li>You need to be at least 13 to use it.</li>
          <li>Your data stays yours, you can ask us for a copy of it, and you can delete your account from Settings at any time.</li>
          <li>Decisions about your money are yours. We are not liable for them.</li>
        </ul>
        <p>
          This summary is here for orientation only. The numbered sections below are the terms that
          actually apply.
        </p>
      </div>

      <section id="agreement">
        <h2><span className="legal-num">Section 1</span>The agreement</h2>
        <p>
          These Terms of Service (the <strong>“Terms”</strong>) form a binding agreement between you
          and <strong>TEAK SOFTWARE STUDIO LLC</strong>, a limited liability company registered in
          the State of Texas, United States (<strong>“Teak Software Studio”</strong>,{" "}
          <strong>“we”</strong>, <strong>“us”</strong>, <strong>“our”</strong>). They cover the
          SaveFirst mobile application (the <strong>“App”</strong>), the website at savefirst.app
          (the <strong>“Site”</strong>), and the servers and APIs behind them (together, the{" "}
          <strong>“Service”</strong>).
        </p>
        <p>
          By creating an account, downloading or using the App, or using the Site, you agree to
          these Terms. If you do not agree with them, do not use the Service.
        </p>
        <p>
          Our <a href="/privacy">Privacy Policy &amp; Security Statement</a> is incorporated into
          these Terms by reference and describes how information is handled.
        </p>
      </section>

      <section id="what-it-is">
        <h2><span className="legal-num">Section 2</span>What SaveFirst is</h2>
        <p>
          SaveFirst is a money clarity app. You tell it what comes in and what is already committed;
          it allocates your savings first and shows you what is genuinely safe to spend. You can log
          transactions, run a Pre-Spend Check before a purchase, and track goals and sinking funds.
        </p>
        <p>
          It is an <strong>account-based online service</strong>. The information you enter is
          stored on our servers so that it is available when you sign in, which means the App needs
          an internet connection to work — see Section 8.
        </p>
        <p>
          <strong>SaveFirst does not connect to your bank.</strong> It does not import transactions,
          read your statements, hold your money, move money, or make payments. Every figure in the
          App is there because you entered it.
        </p>
      </section>

      <section id="eligibility">
        <h2><span className="legal-num">Section 3</span>Who may use SaveFirst</h2>
        <p>
          You must be at least <strong>13 years old</strong> to use the Service. If you are under
          the age of majority where you live, you may use the Service only with the involvement and
          consent of a parent or legal guardian, who agrees to these Terms on your behalf and is
          responsible for your use of it.
        </p>
        <p>
          You may not use the Service if you are barred from doing so under the laws of the United
          States or of the country where you live, or if we have previously ended your access.
        </p>
        <p>
          SaveFirst is designed for a United States context — US dollars, US pay cycles, US billing
          dates — and currently supports US dollars only. It is available elsewhere, but we make no
          claim that it is appropriate or lawful for use in any particular jurisdiction outside the
          United States. If you use it from elsewhere, you do so on your own initiative and are
          responsible for compliance with local law.
        </p>
      </section>

      <section id="account">
        <h2><span className="legal-num">Section 4</span>Your account</h2>
        <p>
          Using SaveFirst requires an account. You can create one with Sign in with Apple, with
          Google, or with an email address and a password. Sign-in is handled through Firebase
          Authentication.
        </p>
        <ul>
          <li>
            <strong>Keep your credentials secure.</strong> You are responsible for the security of
            the account you sign in with and of the device you use. Anyone who controls your Apple
            or Google account, or who can unlock your phone, can reach your SaveFirst data.
          </li>
          <li>
            <strong>You are responsible for activity under your account.</strong> Tell us promptly
            at <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a> if you
            believe it has been accessed without your permission.
          </li>
          <li>
            <strong>One account per person.</strong> Accounts are personal. Do not share yours, sell
            it, or transfer it.
          </li>
          <li>
            <strong>Give accurate information.</strong>{" "}
            The App&rsquo;s output is only as good as
            what you put into it, and an out-of-date email address means we cannot reach you.
          </li>
          <li>
            <strong>You can delete your account at any time</strong> from Settings — see Section 19.
          </li>
        </ul>
      </section>

      <section id="licence">
        <h2><span className="legal-num">Section 5</span>Your licence to use the app</h2>
        <p>
          Subject to your compliance with these Terms, we grant you a <strong>limited,
          non-exclusive, non-transferable, non-sublicensable, revocable licence</strong> to download
          and use the App on a device you own or control — and, where the App is obtained from the
          Apple App Store, as permitted by the Usage Rules in the Apple Media Services Terms and
          Conditions — and to use the Site as it is made available to you.
        </p>
        <p>This licence is for your own personal, non-commercial use. You may not:</p>
        <ul>
          <li>copy, modify, translate, or create derivative works of the App, except as permitted by law;</li>
          <li>reverse engineer, decompile, or disassemble the App, or attempt to derive its source code, except to the extent that this restriction is prohibited by applicable law;</li>
          <li>rent, lease, lend, sell, redistribute, or sublicense the App;</li>
          <li>access our API by any means other than the App, or build another client against it;</li>
          <li>remove or obscure any copyright, trademark, or other proprietary notice; or</li>
          <li>use the Service to build a competing product, or to extract its content or design at scale.</li>
        </ul>
        <p>
          We reserve all rights not expressly granted to you. Nothing in these Terms transfers
          ownership of the App or the Service to you.
        </p>
      </section>

      <section id="not-advice">
        <h2><span className="legal-num">Section 6</span>SaveFirst is not financial advice</h2>
        <div className="legal-notice">
          <p>
            <strong>SaveFirst is an informational and organisational tool. It is not a financial
            adviser, not a broker, not a bank, not a lender, and not a money transmitter.</strong>{" "}
            Nothing in the App, on the Site, or in anything we publish is financial, investment,
            tax, accounting, or legal advice, and none of it should be treated as a recommendation
            to take or avoid any particular action with your money.
          </p>
        </div>
        <p>
          The Service performs arithmetic on figures that <strong>you</strong> enter. Its output —
          the spendable balance, the Pre-Spend Check result, goal projections, insight cards, and
          any recap — is a calculation based on those figures and the settings you chose. It is only
          as accurate as what you put in, and it cannot know about anything you did not tell it.
        </p>
        <p>
          A Pre-Spend Check result of “yes” is not permission, an approval, a guarantee, or a promise
          that a payment will clear. It is a statement about the numbers currently in the App. Your
          actual balance, pending charges, holds, fees, overdrafts, and timing are matters between
          you and your own financial institution, and you should verify them there.
        </p>
        <p>
          <strong>Every decision about your money is yours alone.</strong> We encourage you to
          consult a qualified professional before making significant financial decisions.
        </p>
      </section>

      <section id="your-content">
        <h2><span className="legal-num">Section 7</span>Your content and your data</h2>
        <p>
          <strong>What you enter stays yours.</strong> The income, bills, transactions, goals, notes
          and other information you put into SaveFirst belong to you. We claim no ownership of it.
        </p>
        <p>
          You grant us a limited licence to host, store, process, transmit and display that
          information <strong>solely to operate the Service for you</strong> — to calculate your
          spendable balance, run your checks, generate your insights, send your reminders, and keep
          the whole thing working and secure. We do not use it to advertise to you, to build a
          profile of you, or to train general-purpose AI models, and we do not sell it. The{" "}
          <a href="/privacy">Privacy Policy</a> sets out the details.
        </p>
        <p>
          <strong>You can take it with you.</strong> Email us and we will send you a copy of your
          data in a machine-readable format. Ask for it before you delete your account, because
          deletion is permanent.
        </p>
        <p>
          You are responsible for the accuracy of what you enter and for having the right to enter
          it. Do not put another person&rsquo;s personal or financial information into the App
          without their knowledge.
        </p>
      </section>

      <section id="connectivity">
        <h2><span className="legal-num">Section 8</span>Connectivity and availability</h2>
        <p>
          <strong>SaveFirst requires an internet connection.</strong> Once you have an account, the
          App loads and saves your plan from our servers each time you use it, and it does not keep
          a local copy of your financial records. If your device is offline or our servers are
          unreachable, those features will not work until the connection is restored.
        </p>
        <p>
          We do not promise that the Service will be available without interruption or free of
          errors. We may add, change, or remove features as the product develops, and we may
          suspend or discontinue the Service, in whole or in part. Where a change materially reduces
          what the Service does for you, we will make a reasonable effort to tell you in advance,
          and if we discontinue the Service entirely we will give reasonable notice where we can, so
          that you can ask us for a copy of your data.
        </p>
      </section>

      <section id="voice">
        <h2><span className="legal-num">Section 9</span>Voice input</h2>
        <p>
          Voice entry is optional and works only if you grant microphone and speech recognition
          permission. Your speech is converted to text by your device&rsquo;s operating system, and
          the resulting text is sent to our servers to be interpreted into a transaction or a check.
        </p>
        <p>
          <strong>Always read what it produces before you confirm it.</strong> Speech recognition and
          interpretation both make mistakes — a misheard amount or a wrong date becomes a wrong
          number in your plan. Nothing is saved until you confirm it, and confirming is your
          decision. Voice input is a convenience, not a guarantee of accuracy.
        </p>
        <p>
          Do not use voice input to dictate other people&rsquo;s personal information. Section 5 of
          the <a href="/privacy#voice">Privacy Policy</a> explains what happens to a transcript and
          how briefly it is kept.
        </p>
      </section>

      <section id="notifications">
        <h2><span className="legal-num">Section 10</span>Reminders and notifications</h2>
        <p>
          If you turn reminders on, the App schedules notifications on your device for things like
          upcoming bills, payday, goal progress, and logging check-ins. These are created locally by
          the App.
        </p>
        <p>
          <strong>Do not rely on a reminder as your only way of remembering to pay something.</strong>{" "}
          Notifications can be delayed or suppressed by your device, by system settings, by battery
          saving, or by an interruption in the Service. Missing a reminder is not our
          responsibility. You can turn reminders off in the App or in your device settings at any
          time.
        </p>
      </section>

      <section id="acceptable-use">
        <h2><span className="legal-num">Section 11</span>Acceptable use</h2>
        <p>When using the Service, you agree not to:</p>
        <ul>
          <li>break any applicable law or regulation, or use the Service for anything fraudulent or deceptive;</li>
          <li>access, or try to access, another user&rsquo;s account or data;</li>
          <li>interfere with or disrupt the Service, or place an unreasonable load on it, including by circumventing rate limits or automating requests;</li>
          <li>probe, scan, or test the vulnerability of the Service, or breach or circumvent any security or authentication measure, other than through responsible disclosure as described in our <a href="/privacy#disclosure">Security Statement</a>;</li>
          <li>scrape or harvest the Service, or use it to train a machine learning model;</li>
          <li>upload malicious code, or attempt to inject instructions through content you enter, including through voice input;</li>
          <li>impersonate any person or misrepresent your affiliation with anyone; or</li>
          <li>encourage or assist anyone else in doing any of the above.</li>
        </ul>
        <p>
          We may suspend or terminate an account that breaches this section, and we may apply rate
          limits and other technical protections without notice.
        </p>
      </section>

      <section id="paid">
        <h2><span className="legal-num">Section 12</span>Paid features in the future</h2>
        <p>
          <strong>The current version of SaveFirst is free, and the App sells nothing.</strong> There
          is no subscription and no in-app purchase in this release, and we do not collect or
          process any payment details.
        </p>
        <p>
          We expect to introduce a paid tier. If we do, it will be sold through the app store you
          installed the App from, and the price, the billing period, the renewal terms and any trial
          will be shown to you on the purchase screen before you buy anything. Payment would be
          handled by the app store, not by us, and refunds would be governed by that store&rsquo;s
          policies. <strong>Nothing you have today will start charging you</strong> — a paid tier
          would require you to choose it.
        </p>
        <p>
          We will update these Terms with full purchase and renewal terms before any paid feature
          goes on sale.
        </p>
      </section>

      <section id="ownership">
        <h2><span className="legal-num">Section 13</span>Ownership and intellectual property</h2>
        <p>
          The Service — including the App, the Site, their software, design, text, graphics, layout,
          and the SaveFirst name and logo — is owned by Teak Software Studio LLC and protected by
          copyright, trademark, and other laws. The licence in Section 5 is the only right you
          receive; no other rights are granted, expressly or by implication.
        </p>
        <p>
          Third-party names mentioned in the Service are the property of their respective owners and
          are used for identification only. Their use does not imply any affiliation or endorsement.
        </p>
      </section>

      <section id="feedback">
        <h2><span className="legal-num">Section 14</span>Feedback you send us</h2>
        <p>
          If you send us feedback, suggestions, feature ideas, or bug reports, you grant us a
          perpetual, irrevocable, worldwide, royalty-free licence to use them for any purpose,
          without any obligation to you. We are not obliged to keep feedback confidential, and we
          may build something similar independently. Please do not send us anything you consider
          confidential or proprietary.
        </p>
        <p>
          When you contact support, do not include account numbers, card numbers, passwords, or
          one-time codes. We do not need them and will never ask for them.
        </p>
      </section>

      <section id="prerelease">
        <h2><span className="legal-num">Section 15</span>Pre-release and beta versions</h2>
        <p>
          Some versions of the App are made available before general release, including through
          TestFlight or a similar programme. Pre-release versions are provided{" "}
          <strong>as-is, for evaluation</strong>, may be incomplete or unstable, may calculate
          incorrectly, may lose data, and may stop working without notice. Do not rely on a
          pre-release version as your only record of anything. Sections 16 and
          17 apply to pre-release versions with particular force.
        </p>
      </section>

      <section id="warranties">
        <h2><span className="legal-num">Section 16</span>Disclaimer of warranties</h2>
        <p>
          <strong>THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”, WITHOUT WARRANTY OF ANY KIND.</strong>{" "}
          To the fullest extent permitted by applicable law, we disclaim all warranties, express,
          implied, or statutory, including any implied warranties of merchantability, fitness for a
          particular purpose, title, quiet enjoyment, accuracy, and non-infringement.
        </p>
        <p>
          Without limiting that, we do not warrant that the Service will be uninterrupted, secure,
          or error-free; that any calculation, projection, insight, or recommendation will be
          accurate or suitable for your situation; that voice input will be transcribed or
          interpreted correctly; that a notification will be delivered on time or at all; or that
          defects will be corrected. No advice or information obtained from us or through the
          Service creates any warranty not expressly stated in these Terms.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of implied warranties, so parts of this
          section may not apply to you. In that case, such warranties are limited to the minimum
          period and extent permitted by law.
        </p>
      </section>

      <section id="liability">
        <h2><span className="legal-num">Section 17</span>Limitation of liability</h2>
        <p>
          <strong>
            TO THE FULLEST EXTENT PERMITTED BY LAW, TEAK SOFTWARE STUDIO LLC AND ITS MEMBERS,
            OFFICERS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS,
            REVENUE, SAVINGS, DATA, GOODWILL, OR BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATING TO
            YOUR USE OF, OR INABILITY TO USE, THE SERVICE — EVEN IF WE HAVE BEEN ADVISED OF THE
            POSSIBILITY OF SUCH DAMAGES.
          </strong>
        </p>
        <p>
          This includes, without limitation, any overdraft, declined payment, missed or late
          payment, late fee, interest charge, penalty, bank charge, purchase you made or did not
          make, or savings target you did or did not reach, in connection with information shown by
          the Service, a notification that did not arrive, or a period when the Service was
          unavailable.
        </p>
        <p>
          <strong>
            OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE IS LIMITED TO THE
            GREATER OF (A) THE AMOUNT YOU ACTUALLY PAID US FOR THE SERVICE IN THE TWELVE MONTHS
            BEFORE THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED US DOLLARS (USD 100).
          </strong>
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot be excluded or limited
          under applicable law, including liability for fraud, fraudulent misrepresentation, or
          death or personal injury caused by negligence. Some jurisdictions do not allow certain
          limitations, so parts of this section may not apply to you.
        </p>
      </section>

      <section id="indemnity">
        <h2><span className="legal-num">Section 18</span>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Teak Software Studio LLC and its members,
          officers, employees, and agents from any claim, demand, loss, liability, or expense
          (including reasonable legal fees) arising out of your misuse of the Service, your breach
          of these Terms, or your violation of any law or the rights of any third party.
        </p>
      </section>

      <section id="termination">
        <h2><span className="legal-num">Section 19</span>Termination and deletion</h2>
        <p>
          You may stop using the Service at any time. To remove your data as well, use{" "}
          <strong>Settings → Delete account</strong> in the App. That deletes your account and the
          records attached to it from our servers permanently, as described in{" "}
          <a href="/privacy#deletion">Section 10 of the Privacy Policy</a>.{" "}
          <strong>It cannot be undone, so ask us for a copy of your data first.</strong> Deleting the App from your device
          without deleting your account leaves your account in place.
        </p>
        <p>
          We may suspend or end your access if you materially breach these Terms, if your use
          threatens the security or stability of the Service, or if we are required to do so by law.
          Where it is reasonable to do so, we will tell you first and give you an opportunity to
          request a copy of your data.
        </p>
        <p>
          Sections 6, 7, 13, 14, and 16 through 22 survive termination, along with any other
          provision that by its nature should survive.
        </p>
      </section>

      <section id="apple">
        <h2><span className="legal-num">Section 20</span>Apple App Store terms</h2>
        <p>
          These provisions apply to the App as obtained through the Apple App Store, and are
          required by Apple.
        </p>
        <ul>
          <li>
            <strong>This agreement is with us, not Apple.</strong> These Terms are between you and
            Teak Software Studio LLC only, and not with Apple Inc. We, not Apple, are solely
            responsible for the App and its content.
          </li>
          <li>
            <strong>Scope of licence.</strong> The licence granted in Section 5 is limited to a
            non-transferable licence to use the App on Apple-branded products that you own or
            control, as permitted by the Usage Rules in the Apple Media Services Terms and
            Conditions.
          </li>
          <li>
            <strong>Maintenance and support.</strong> We are solely responsible for providing any
            maintenance and support for the App. Apple has no obligation to furnish any maintenance
            or support services.
          </li>
          <li>
            <strong>Warranty.</strong> In the event of any failure of the App to conform to any
            applicable warranty, you may notify Apple, and Apple will refund the purchase price (if
            any) for the App. To the maximum extent permitted by law, Apple has no other warranty
            obligation whatsoever with respect to the App, and any other claims, losses,
            liabilities, damages, costs, or expenses attributable to any failure to conform to any
            warranty are our sole responsibility.
          </li>
          <li>
            <strong>Product claims.</strong> We, not Apple, are responsible for addressing any
            claims by you or a third party relating to the App or your possession and use of it,
            including product liability claims, any claim that the App fails to conform to any
            applicable legal or regulatory requirement, and claims arising under consumer
            protection, privacy, or similar legislation.
          </li>
          <li>
            <strong>Intellectual property claims.</strong>{" "}
            In the event of any third-party claim
            that the App or your possession and use of it infringes that third party&rsquo;s
            intellectual property rights, we, not Apple, are solely responsible for the
            investigation, defence, settlement, and discharge of that claim.
          </li>
          <li>
            <strong>Legal compliance.</strong> You represent and warrant that you are not located in
            a country subject to a US Government embargo or designated by the US Government as a
            “terrorist supporting” country, and that you are not listed on any US Government list of
            prohibited or restricted parties.
          </li>
          <li>
            <strong>Third-party beneficiary.</strong> Apple and its subsidiaries are third-party
            beneficiaries of these Terms, and upon your acceptance of them Apple will have the right
            (and will be deemed to have accepted the right) to enforce these Terms against you as a
            third-party beneficiary.
          </li>
          <li>
            <strong>Developer contact.</strong> Questions, complaints, or claims about the App
            should be directed to{" "}
            <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a>.
          </li>
        </ul>
      </section>

      <section id="changes-terms">
        <h2><span className="legal-num">Section 21</span>Changes to these Terms</h2>
        <p>
          We may update these Terms as the product and the law change. When we do, we will revise
          the “Last updated” date at the top of this page. If a change is material, we will give
          reasonable notice — in the App, on the Site, or by email — before it takes effect.
        </p>
        <p>
          Continuing to use the Service after an update takes effect means you accept the revised
          Terms. If you do not accept them, stop using the Service and delete your account.
        </p>
      </section>

      <section id="law">
        <h2><span className="legal-num">Section 22</span>Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the <strong>State of Texas, United States</strong>,
          without regard to its conflict-of-laws rules, and by applicable United States federal law.
          The United Nations Convention on Contracts for the International Sale of Goods does not
          apply.
        </p>
        <h3>Talk to us first</h3>
        <p>
          If something goes wrong, email{" "}
          <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a> with a
          description of the issue and what you would like us to do. Most problems are faster to fix
          this way. Both sides agree to try to resolve a dispute informally for{" "}
          <strong>30 days</strong> before starting formal proceedings.
        </p>
        <h3>Venue</h3>
        <p>
          If informal resolution does not work, you and we agree that the state and federal courts
          located in the State of Texas have exclusive jurisdiction over any dispute arising out of
          or relating to these Terms or the Service, and both sides consent to personal jurisdiction
          there. This does not affect any right you may have under the mandatory law of your country
          of residence to bring proceedings in your local courts.
        </p>
        <h3>Severability and waiver</h3>
        <p>
          If any provision of these Terms is held unenforceable, it will be limited or removed to
          the minimum extent necessary and the rest will remain in full force. Our failure to
          enforce a provision is not a waiver of it. You may not assign these Terms; we may assign
          them in connection with a merger, acquisition, or sale of assets.
        </p>
        <p>
          These Terms, together with the Privacy Policy &amp; Security Statement, are the entire
          agreement between you and us regarding the Service, and replace any earlier agreement on
          the subject.
        </p>
      </section>

      <section id="contact">
        <h2><span className="legal-num">Section 23</span>How to reach us</h2>
        <p>
          <strong>TEAK SOFTWARE STUDIO LLC</strong>
          <br />
          A limited liability company registered in the State of Texas, United States
          <br />
          Email: <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a>
          <br />
          Web: <a href="https://savefirst.app">savefirst.app</a>
        </p>
        <p>
          For anything about your information, see the{" "}
          <a href="/privacy">Privacy Policy &amp; Security Statement</a>.
        </p>
      </section>
    </LegalShell>
  );
}
