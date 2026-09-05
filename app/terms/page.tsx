import type { Metadata } from "next";
import LegalShell from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — SaveFirst",
  description:
    "The agreement between you and Teak Software Studio LLC covering your use of the SaveFirst iPhone app and savefirst.app.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  { id: "agreement", label: "The agreement" },
  { id: "eligibility", label: "Who may use SaveFirst" },
  { id: "licence", label: "Your licence to use the app" },
  { id: "not-advice", label: "SaveFirst is not financial advice" },
  { id: "your-data", label: "Your information and your device" },
  { id: "plans", label: "Free, Pro and subscriptions" },
  { id: "acceptable-use", label: "Acceptable use" },
  { id: "ownership", label: "Ownership and intellectual property" },
  { id: "feedback", label: "Feedback you send us" },
  { id: "changes-service", label: "Changes and availability" },
  { id: "prerelease", label: "Pre-release and beta versions" },
  { id: "warranties", label: "Disclaimer of warranties" },
  { id: "liability", label: "Limitation of liability" },
  { id: "indemnity", label: "Indemnification" },
  { id: "termination", label: "Termination" },
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
      intro="These Terms are the agreement between you and Teak Software Studio LLC for the SaveFirst iPhone app and the savefirst.app website. They are written to be read, not skimmed past."
      effective="September 5, 2026"
      updated="September 5, 2026"
      sections={SECTIONS}
    >
      <div className="legal-summary">
        <h2>The short version</h2>
        <ul>
          <li>SaveFirst is a tool that does arithmetic with numbers you enter. It is not a bank, and it is not financial advice.</li>
          <li>Your plan and your logged transactions stay on your iPhone. We do not hold them.</li>
          <li>You need to be at least 13 to use SaveFirst.</li>
          <li>Pro is an auto-renewing subscription billed by Apple. You cancel it in your Apple account settings, not with us.</li>
          <li>Decisions about your money are yours. We are not liable for them.</li>
        </ul>
        <p>
          This summary is here for orientation only. The numbered sections below are the terms that actually apply.
        </p>
      </div>

      <section id="agreement">
        <h2><span className="legal-num">Section 1</span>The agreement</h2>
        <p>
          These Terms of Service (the <strong>“Terms”</strong>) form a binding agreement between you and{" "}
          <strong>TEAK SOFTWARE STUDIO LLC</strong>, a limited liability company registered in the State of Texas,
          United States (<strong>“Teak Software Studio”</strong>, <strong>“we”</strong>, <strong>“us”</strong>,{" "}
          <strong>“our”</strong>). They cover the SaveFirst application for iPhone (the <strong>“App”</strong>),
          the website at savefirst.app (the <strong>“Site”</strong>), and any related services we provide
          (together, the <strong>“Service”</strong>).
        </p>
        <p>
          By downloading, installing, or using the App, or by using the Site, you agree to these Terms. If you do
          not agree with them, do not use the Service.
        </p>
        <p>
          Our <a href="/privacy">Privacy Policy &amp; Security Statement</a> is incorporated into these Terms by
          reference and describes how information is handled.
        </p>
      </section>

      <section id="eligibility">
        <h2><span className="legal-num">Section 2</span>Who may use SaveFirst</h2>
        <p>
          You must be at least <strong>13 years old</strong> to use the Service. If you are under the age of
          majority where you live, you may use the Service only with the involvement and consent of a parent or
          legal guardian, who agrees to these Terms on your behalf and is responsible for your use of it.
        </p>
        <p>
          You may not use the Service if you are barred from doing so under the laws of the United States or the
          country in which you are resident, or if we have previously ended your access.
        </p>
        <p>
          SaveFirst is designed for a United States context — dollars, US pay cycles, US billing dates. It is
          available elsewhere, but we make no claim that it is appropriate or lawful for use in any particular
          jurisdiction outside the United States. If you use it from elsewhere, you do so on your own initiative
          and are responsible for compliance with local law.
        </p>
      </section>

      <section id="licence">
        <h2><span className="legal-num">Section 3</span>Your licence to use the app</h2>
        <p>
          Subject to your compliance with these Terms, we grant you a <strong>limited, non-exclusive,
          non-transferable, non-sublicensable, revocable licence</strong> to download and use one copy of the App
          on any Apple-branded product that you own or control, as permitted by the Usage Rules in the Apple Media
          Services Terms and Conditions, and to use the Site as it is made available to you.
        </p>
        <p>This licence is for your own personal, non-commercial use. You may not:</p>
        <ul>
          <li>copy, modify, translate, or create derivative works of the App, except as permitted by law;</li>
          <li>reverse engineer, decompile, or disassemble the App, or attempt to derive its source code, except to the extent that this restriction is prohibited by applicable law;</li>
          <li>rent, lease, lend, sell, redistribute, or sublicense the App;</li>
          <li>remove or obscure any copyright, trademark, or other proprietary notice; or</li>
          <li>use the Service to build a competing product or to extract its content or design at scale.</li>
        </ul>
        <p>
          We reserve all rights not expressly granted to you. Nothing in these Terms transfers ownership of the
          App or the Service to you.
        </p>
      </section>

      <section id="not-advice">
        <h2><span className="legal-num">Section 4</span>SaveFirst is not financial advice</h2>
        <div className="legal-notice">
          <p>
            <strong>SaveFirst is an informational and organisational tool. It is not a financial adviser, not a
            broker, not a bank, not a lender, and not a money transmitter.</strong> Nothing in the App, on the
            Site, or in anything we publish is financial, investment, tax, accounting, or legal advice, and none
            of it should be treated as a recommendation to take or avoid any particular action with your money.
          </p>
        </div>
        <p>
          The App performs arithmetic on figures that <strong>you</strong> enter. Its output — including the
          spendable balance, the Pre-Spend Check result, goal projections, and any insight or recap — is a
          calculation based on those figures and the settings you chose. It is only as accurate as what you put
          in, and it cannot know about anything you did not tell it.
        </p>
        <p>
          A Pre-Spend Check result of “yes” is not permission, an approval, a guarantee, or a promise that a
          payment will clear. It is a statement about the numbers currently in the App. Your actual account
          balance, pending charges, holds, fees, overdrafts, and timing are matters between you and your own
          financial institution.
        </p>
        <p>
          <strong>Every decision about your money is yours alone.</strong> We strongly encourage you to consult a
          qualified professional before making significant financial decisions. You are responsible for verifying
          your own balances with your bank or card issuer.
        </p>
      </section>

      <section id="your-data">
        <h2><span className="legal-num">Section 5</span>Your information and your device</h2>
        <p>
          SaveFirst is local-first. The plan you set up, the transactions you log, your goals, and your settings
          are stored <strong>on your device</strong>. We do not operate a server that holds this information, and
          we cannot see it, retrieve it, or restore it for you.
        </p>
        <p>That arrangement has consequences you should understand and accept:</p>
        <ul>
          <li>
            <strong>If you delete the App, your data goes with it.</strong> Unless you have an Apple backup that
            includes it, deletion is permanent and we cannot undo it.
          </li>
          <li>
            <strong>Losing or resetting your device may mean losing your data.</strong> We have no copy.
          </li>
          <li>
            <strong>Backup is your responsibility.</strong> The App can export your data as a CSV file at any
            time, and Apple offers device and iCloud backup. We recommend using both. We are not responsible for
            data loss.
          </li>
          <li>
            <strong>Securing the device is your responsibility.</strong> Anyone who can unlock your iPhone can
            open the App. Use a passcode and Face ID or Touch ID.
          </li>
        </ul>
        <p>
          You are responsible for the accuracy of everything you enter, and for making sure you have the right to
          enter it. See the <a href="/privacy">Privacy Policy &amp; Security Statement</a> for the full picture.
        </p>
      </section>

      <section id="plans">
        <h2><span className="legal-num">Section 6</span>Free, Pro and subscriptions</h2>
        <h3>Free and Pro</h3>
        <p>
          SaveFirst is free to start. Some features are part of <strong>SaveFirst Pro</strong>, an optional paid
          subscription. Which features sit in which tier is described in the App and on the Site, and may change
          as the product develops — see Section 10.
        </p>

        <h3>Billing is handled by Apple</h3>
        <p>
          SaveFirst Pro is sold as an <strong>auto-renewing subscription</strong> through the Apple App Store.
          The price, billing period, and any introductory or promotional offer are shown on the purchase screen
          before you confirm, and those are the terms that apply to your purchase. We do not collect or process
          your payment details; Apple does, under your Apple Account.
        </p>
        <ul>
          <li>
            Payment is charged to your Apple Account at confirmation of purchase.
          </li>
          <li>
            <strong>The subscription renews automatically</strong> unless it is cancelled at least 24 hours
            before the end of the current period. Your Apple Account is charged for renewal within 24 hours prior
            to the end of the current period, at the price then in effect for your plan.
          </li>
          <li>
            <strong>You can manage or cancel at any time</strong> in Settings on your device, under your Apple
            Account subscriptions. Cancelling stops the next renewal; the paid features remain available until
            the end of the period you already paid for.
          </li>
          <li>
            Deleting the App does not cancel a subscription. Cancel it in your Apple Account settings.
          </li>
          <li>
            If a free trial is offered, any unused portion is forfeited when you purchase a subscription, where
            Apple applies that rule.
          </li>
        </ul>

        <h3>Refunds</h3>
        <p>
          Purchases made through the App Store are <strong>refunded by Apple, not by us</strong>, under Apple’s
          policies. Requests go through Apple’s “Report a Problem” process. We can look at a billing question and
          try to help, but we cannot issue an App Store refund ourselves.
        </p>

        <h3>Price changes</h3>
        <p>
          We may change subscription pricing. Where a change affects an existing subscription, Apple will notify
          you and, where required, ask for your consent before the new price takes effect. You can always cancel
          before renewal.
        </p>
      </section>

      <section id="acceptable-use">
        <h2><span className="legal-num">Section 7</span>Acceptable use</h2>
        <p>When using the Service, you agree not to:</p>
        <ul>
          <li>break any applicable law or regulation, or use the Service for anything fraudulent or deceptive;</li>
          <li>interfere with, disrupt, or place unreasonable load on the Service or on any systems or networks connected to it;</li>
          <li>probe, scan, or test the vulnerability of the Service, or breach or circumvent any security or authentication measure, other than through responsible disclosure as described in our <a href="/privacy#security">Security Statement</a>;</li>
          <li>use any automated means to access, scrape, or harvest the Service;</li>
          <li>impersonate any person or misrepresent your affiliation with anyone; or</li>
          <li>encourage or assist anyone else in doing any of the above.</li>
        </ul>
      </section>

      <section id="ownership">
        <h2><span className="legal-num">Section 8</span>Ownership and intellectual property</h2>
        <p>
          The Service — including the App, the Site, their software, design, text, graphics, layout, and the
          SaveFirst name and logo — is owned by Teak Software Studio LLC and protected by copyright, trademark,
          and other laws. The licence in Section 3 is the only right you receive; no other rights are granted,
          expressly or by implication.
        </p>
        <p>
          <strong>Your content stays yours.</strong> The figures, notes, goals, and other information you enter
          belong to you. We claim no ownership of it, and, since it stays on your device, we have no access to
          it.
        </p>
        <p>
          Third-party names mentioned in the Service are the property of their respective owners and are used for
          identification only. Their use does not imply any affiliation or endorsement.
        </p>
      </section>

      <section id="feedback">
        <h2><span className="legal-num">Section 9</span>Feedback you send us</h2>
        <p>
          If you send us feedback, suggestions, feature ideas, or bug reports, you grant us a perpetual,
          irrevocable, worldwide, royalty-free licence to use them for any purpose, without any obligation to
          you. We are not obliged to keep feedback confidential, and we may build something similar independently.
          Please do not send us anything you consider confidential or proprietary.
        </p>
        <p>
          When you contact support, please do not include account numbers, card numbers, login credentials, or
          full statements. We do not need them, and we would rather not receive them.
        </p>
      </section>

      <section id="changes-service">
        <h2><span className="legal-num">Section 10</span>Changes and availability</h2>
        <p>
          SaveFirst is under active development. We may add, change, or remove features, and we may move a
          feature between the free and paid tiers. Where a change materially reduces what a paid subscription
          gives you, we will make a reasonable effort to tell you in advance, and you can cancel before the next
          renewal.
        </p>
        <p>
          We do not promise that the Service will be available without interruption or free of errors, and we may
          suspend or discontinue it, in whole or in part, at any time. If we discontinue the Service entirely, we
          will give reasonable notice where we can, so that you can export your data.
        </p>
      </section>

      <section id="prerelease">
        <h2><span className="legal-num">Section 11</span>Pre-release and beta versions</h2>
        <p>
          Some versions of the App are made available before general release, including through TestFlight or a
          similar programme. Pre-release versions are provided <strong>as-is, for evaluation</strong>, may be
          incomplete or unstable, may calculate incorrectly, may lose data, and may stop working without notice.
          Do not rely on a pre-release version as your only record of anything, and export regularly. Everything
          in Sections 12 and 13 applies to pre-release versions with particular force.
        </p>
      </section>

      <section id="warranties">
        <h2><span className="legal-num">Section 12</span>Disclaimer of warranties</h2>
        <p>
          <strong>
            THE SERVICE IS PROVIDED “AS IS” AND “AS AVAILABLE”, WITHOUT WARRANTY OF ANY KIND.
          </strong>{" "}
          To the fullest extent permitted by applicable law, we disclaim all warranties, express, implied, or
          statutory, including any implied warranties of merchantability, fitness for a particular purpose, title,
          quiet enjoyment, accuracy, and non-infringement.
        </p>
        <p>
          Without limiting that, we do not warrant that the Service will be uninterrupted, secure, or error-free;
          that any calculation, projection, or recommendation will be accurate or suitable for your situation; or
          that defects will be corrected. No advice or information, whether oral or written, obtained from us or
          through the Service creates any warranty not expressly stated in these Terms.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion of implied warranties, so some of the above may not apply
          to you. In that case, such warranties are limited to the minimum period and extent permitted by law.
        </p>
      </section>

      <section id="liability">
        <h2><span className="legal-num">Section 13</span>Limitation of liability</h2>
        <p>
          <strong>
            TO THE FULLEST EXTENT PERMITTED BY LAW, TEAK SOFTWARE STUDIO LLC AND ITS MEMBERS, OFFICERS,
            EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
            EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, SAVINGS, DATA, GOODWILL, OR
            BUSINESS OPPORTUNITY, ARISING OUT OF OR RELATING TO YOUR USE OF, OR INABILITY TO USE, THE SERVICE —
            EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
          </strong>
        </p>
        <p>
          This includes, without limitation, any overdraft, declined payment, missed payment, late fee, interest
          charge, penalty, bank charge, purchase you made or did not make, or savings target you did or did not
          reach, in connection with information shown by the Service.
        </p>
        <p>
          <strong>
            OUR TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICE IS LIMITED TO THE GREATER OF (A)
            THE AMOUNT YOU ACTUALLY PAID US, OR PAID APPLE FOR THE APP, IN THE TWELVE MONTHS BEFORE THE EVENT
            GIVING RISE TO THE CLAIM, OR (B) FIFTY US DOLLARS (USD 50).
          </strong>
        </p>
        <p>
          Nothing in these Terms excludes or limits liability that cannot be excluded or limited under applicable
          law, including liability for fraud, fraudulent misrepresentation, or death or personal injury caused by
          negligence. Some jurisdictions do not allow certain limitations, so parts of this section may not apply
          to you.
        </p>
      </section>

      <section id="indemnity">
        <h2><span className="legal-num">Section 14</span>Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Teak Software Studio LLC and its members, officers, employees,
          and agents from any claim, demand, loss, liability, or expense (including reasonable legal fees)
          arising out of your misuse of the Service, your breach of these Terms, or your violation of any law or
          the rights of any third party.
        </p>
      </section>

      <section id="termination">
        <h2><span className="legal-num">Section 15</span>Termination</h2>
        <p>
          You may stop using the Service at any time by deleting the App. Remember to cancel any active
          subscription separately in your Apple Account settings.
        </p>
        <p>
          We may suspend or end your access to the Service if you materially breach these Terms, or if we are
          required to do so by law. Because your data lives on your device, ending this agreement does not delete
          your data — you control that.
        </p>
        <p>
          Sections 4, 8, 9, and 12 through 18 survive termination, along with any other provision that by its
          nature should survive.
        </p>
      </section>

      <section id="apple">
        <h2><span className="legal-num">Section 16</span>Apple App Store terms</h2>
        <p>
          These provisions apply to the App as obtained through the Apple App Store, and are required by Apple.
        </p>
        <ul>
          <li>
            <strong>This agreement is with us, not Apple.</strong> These Terms are between you and Teak Software
            Studio LLC only, and not with Apple Inc. We, not Apple, are solely responsible for the App and its
            content.
          </li>
          <li>
            <strong>Scope of licence.</strong> The licence granted in Section 3 is limited to a non-transferable
            licence to use the App on Apple-branded products that you own or control, as permitted by the Usage
            Rules in the Apple Media Services Terms and Conditions.
          </li>
          <li>
            <strong>Maintenance and support.</strong> We are solely responsible for providing any maintenance and
            support for the App. Apple has no obligation to furnish any maintenance or support services.
          </li>
          <li>
            <strong>Warranty.</strong> In the event of any failure of the App to conform to any applicable
            warranty, you may notify Apple, and Apple will refund the purchase price (if any) for the App. To the
            maximum extent permitted by law, Apple has no other warranty obligation whatsoever with respect to
            the App, and any other claims, losses, liabilities, damages, costs, or expenses attributable to any
            failure to conform to any warranty are our sole responsibility.
          </li>
          <li>
            <strong>Product claims.</strong> We, not Apple, are responsible for addressing any claims by you or a
            third party relating to the App or your possession and use of it, including product liability claims,
            any claim that the App fails to conform to any applicable legal or regulatory requirement, and claims
            arising under consumer protection, privacy, or similar legislation.
          </li>
          <li>
            <strong>Intellectual property claims.</strong> In the event of any third-party claim that the App or
            your possession and use of it infringes that third party’s intellectual property rights, we, not
            Apple, are solely responsible for the investigation, defence, settlement, and discharge of that
            claim.
          </li>
          <li>
            <strong>Legal compliance.</strong> You represent and warrant that you are not located in a country
            subject to a US Government embargo or designated by the US Government as a “terrorist supporting”
            country, and that you are not listed on any US Government list of prohibited or restricted parties.
          </li>
          <li>
            <strong>Third-party beneficiary.</strong> Apple and its subsidiaries are third-party beneficiaries of
            these Terms, and upon your acceptance of them Apple will have the right (and will be deemed to have
            accepted the right) to enforce these Terms against you as a third-party beneficiary.
          </li>
          <li>
            <strong>Developer contact.</strong> Questions, complaints, or claims about the App should be directed
            to <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a>.
          </li>
        </ul>
      </section>

      <section id="changes-terms">
        <h2><span className="legal-num">Section 17</span>Changes to these Terms</h2>
        <p>
          We may update these Terms as the product and the law change. When we do, we will revise the “Last
          updated” date at the top of this page. If a change is material, we will give reasonable notice — in the
          App, on the Site, or by email if you have given us an address — before it takes effect.
        </p>
        <p>
          Continuing to use the Service after an update takes effect means you accept the revised Terms. If you
          do not accept them, stop using the Service and cancel any subscription.
        </p>
      </section>

      <section id="law">
        <h2><span className="legal-num">Section 18</span>Governing law and disputes</h2>
        <p>
          These Terms are governed by the laws of the <strong>State of Texas, United States</strong>, without
          regard to its conflict-of-laws rules, and by applicable United States federal law. The United Nations
          Convention on Contracts for the International Sale of Goods does not apply.
        </p>
        <h3>Talk to us first</h3>
        <p>
          If something goes wrong, email{" "}
          <a href="mailto:support@teaksoftware.studio">support@teaksoftware.studio</a> with a description of the
          issue and what you would like us to do. Most problems are faster to fix this way. Both sides agree to
          try to resolve a dispute informally for <strong>30 days</strong> before starting formal proceedings.
        </p>
        <h3>Venue</h3>
        <p>
          If informal resolution does not work, you and we agree that the state and federal courts located in the
          State of Texas have exclusive jurisdiction over any dispute arising out of or relating to these Terms
          or the Service, and both sides consent to personal jurisdiction there. This does not affect any right
          you may have under the mandatory law of your country of residence to bring proceedings in your local
          courts.
        </p>
        <h3>Severability and waiver</h3>
        <p>
          If any provision of these Terms is held unenforceable, it will be limited or removed to the minimum
          extent necessary and the rest will remain in full force. Our failure to enforce a provision is not a
          waiver of it. You may not assign these Terms; we may assign them in connection with a merger,
          acquisition, or sale of assets.
        </p>
        <p>
          These Terms, together with the Privacy Policy &amp; Security Statement, are the entire agreement
          between you and us regarding the Service, and replace any earlier agreement on the subject.
        </p>
      </section>

      <section id="contact">
        <h2><span className="legal-num">Section 19</span>How to reach us</h2>
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
