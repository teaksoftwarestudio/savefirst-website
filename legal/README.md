# SaveFirst legal documents

Two documents, one source of truth each.

| Document | Web page (canonical) | Bundled copy for the app |
|---|---|---|
| Terms of Service / EULA | `https://savefirst.app/terms` — `app/terms/page.tsx` | `legal/terms.md` |
| Privacy Policy & Security | `https://savefirst.app/privacy` — `app/privacy/page.tsx` | `legal/privacy-and-security.md` |

The `.md` files are generated from the rendered web pages, so the wording matches exactly.
**When you change a document, change the `.tsx` page first**, then regenerate the markdown so the
two never drift apart.

The Security Statement is Section 16 of the Privacy Policy and is linked from the footer as
`/privacy#security`, so there is one privacy document rather than two that can contradict each other.

---

## What to do in App Store Connect

**1. Privacy Policy URL** (App Information → General Information, required)

```
https://savefirst.app/privacy
```

**2. License Agreement** (App Information → License Agreement)

Choose **Custom License Agreement** and paste the contents of `legal/terms.md`. Apple's standard EULA
does not cover the "not financial advice" disclaimer, which is the clause that matters most for a
money app. Section 16 of the Terms contains every clause Apple requires in a custom EULA, including
the third-party beneficiary provision.

**3. Subscription terms** (required for auto-renewing subscriptions)

Apple requires these to be visible on the purchase screen inside the app, plus links to both
documents. Alongside the Subscribe button, show:

- the subscription name, the length of the period, and the price per period;
- "Payment is charged to your Apple Account at confirmation of purchase";
- "Renews automatically unless cancelled at least 24 hours before the end of the period";
- "Manage or cancel in your Apple Account settings";
- a link to `https://savefirst.app/terms` and to `https://savefirst.app/privacy`.

Missing links on the paywall is one of the most common rejection reasons for subscription apps.
Section 6 of the Terms already carries the matching language.

**4. App Privacy nutrition label** (App Privacy section)

Based on a build with no analytics SDK, no crash-reporting SDK, no account system and no bank
linking, the answer is **"Data Not Collected"** for every category.

Two things would change that answer, so check the build before submitting:

- adding any analytics or crash-reporting SDK (Firebase, Sentry, TelemetryDeck, and so on);
- adding anything that sends user content off the device to a server you control.

Apple's own App Store purchase and crash data does not count as collection by you, and neither does
data that stays on the device.

**5. Age rating**

The Terms set a 13+ minimum. Answer the age-rating questionnaire honestly for the app's content —
no gambling, no user-generated content, no unrestricted web access.

---

## Before you submit — the honesty checks

The privacy claims here are strong, which is an advantage in review and a liability if the build
does not match them. Confirm each of these against the shipping binary:

- [ ] No third-party analytics or crash SDK is linked into the build.
- [ ] The app makes no network request carrying user financial data.
- [ ] There is no sign-up, login, or account.
- [ ] No advertising identifier (IDFA) is requested.
- [ ] Voice entry uses on-device speech recognition (`requiresOnDeviceRecognition = true`), not
      Apple's server-based path. If it uses the server path, Section 3 of the Privacy Policy has to
      say so.
- [ ] CSV export works on both tiers, as Section 12 promises.
- [ ] The paywall shows the subscription disclosures and links both documents.

---

## Still worth a lawyer's eye

These documents are thorough and written to match how SaveFirst actually works, but they are not
legal advice and no lawyer has reviewed them. Before launch, a US attorney should look at:

- whether you want a **binding arbitration clause with a class-action waiver**. These Terms
  deliberately do not include one — informal resolution followed by Texas courts (Section 18).
  Most US consumer apps include arbitration; it is a real decision with trade-offs, not an oversight.
- the **limitation of liability** cap in Section 13, against your actual risk tolerance;
- whether a **registered agent address** should appear in the Terms, which some jurisdictions expect;
- the **SaveFirst trademark position** before you spend on the name. There is no registered US mark
  yet and a potential conflict has been identified.
