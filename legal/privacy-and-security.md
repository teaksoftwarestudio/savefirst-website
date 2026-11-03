# SaveFirst — Privacy Policy & Security

**Effective:** September 5, 2026 · **Last updated:** November 4, 2026

SaveFirst is an account-based service. The money information you enter is stored on our servers so it is there when you sign in. This page sets out exactly what we hold, who else touches it, how long we keep it, and how it is protected.

_Also published at https://savefirst.app/privacy_

---

## The short version

- **SaveFirst needs an account and an internet connection.** Your plan, transactions and goals are stored on our servers, not only on your phone.
- **There is no bank linking.** We never ask for, receive, or store bank credentials, and nothing is imported from your statements. Everything in the app is there because you entered it.
- **We use Firebase for sign-in, analytics and crash reporting**, which means Google processes some data on our behalf. Named in full below.
- **Session recording only happens if you say yes.** If you allow it, we use PostHog to record which screens you open and where you tap. Text, numbers and images are blocked out on your phone before anything is sent. You can turn it off at any time in Settings → Privacy.
- **Subscriptions are billed by Apple.** We use RevenueCat to know whether your trial or subscription is active. We never receive your card details.
- **We do not sell your information**, do not run ads, and do not use your financial data for advertising or profiling.
- **You can delete your account from inside the app**, and it really is deleted — every row, not a flag on a record.

This summary is for orientation. The sections below are the full statement.

---

## 1. Who we are

SaveFirst is made by **TEAK SOFTWARE STUDIO LLC**, a limited liability company registered in the State of Texas, United States. Where this policy says **“we”** or **“us”**, it means that company. We are the controller of the personal information described here.

This policy covers the **SaveFirst mobile app** and the website at **savefirst.app**. It sits alongside our [Terms of Service](https://savefirst.app/terms).

## 2. Information you give us

### Account information

You sign in with Apple, Google, or an email address and password. Sign-in is handled by **Firebase Authentication** (Google), and we receive from it the identifiers needed to recognise you on return visits.

| What we store | Why |
| --- | --- |
| Email address | Identifies your account and is how we contact you about it. |
| Display name, if your provider supplies one | Shown in the app. Optional in practice. |
| Firebase user ID | Links your sign-in provider to your SaveFirst account. |
| Password hash, for email sign-up only | Verifies your password. We store a one-way Argon2 hash, never the password itself. |

If you sign in with Apple and use Apple’s *Hide My Email*, we only ever see the relay address Apple gives us.

### The money information you enter

This is the substance of the product, and it is stored on our servers so that it is available whenever you sign in. It includes:

- income sources, amounts, pay cadence and expected pay dates;
- recurring bills and subscriptions you have told us about, with amounts and due dates;
- transactions you log — amount, date, category, merchant, an optional note, and whether you marked it a need or a want;
- accounts you set up in the app and the balances you enter for them;
- goals and sinking funds, with targets, due dates and contributions;
- spending caps, tags, and investments you record;
- Pre-Spend Checks you run and the decisions recorded from them;
- your onboarding answers, including your timezone, currency, and the questions about what you want from the app.

### Your trial and subscription

To know whether your account has access, we keep a record of your free trial and any subscription: when the trial started and when it ends, which plan you bought, which store billed you, when your paid access ends, and the identifier our subscription service uses for your account, which is your SaveFirst account ID. Apple handles the payment itself. We never receive your card number or billing address.

Purchases are checked through **RevenueCat**, a subscription service. RevenueCat receives your SaveFirst account ID and the purchase records Apple provides for SaveFirst, and tells us whether a subscription is active.

### When you email us

We receive your email address, your message, and anything you attach, and we keep the thread so we can answer you.

> **Never send us account numbers, card numbers, passwords, one-time codes, or bank statements.** We do not need them and no genuine message from us will ever ask for them. A screenshot with amounts blurred is almost always enough.

## 3. Information collected automatically

### Analytics

The app uses **Firebase Analytics** (Google) to understand how features are used so we can improve them. It records automatically-collected events such as app opens and sessions, together with a Firebase installation identifier, your device model and operating system version, and an approximate region derived from your IP address. We do **not** send the amounts, merchants, notes, or any other content of your financial records to analytics. Firebase Analytics is on for everyone who uses the app, and the app has no setting to turn it off.

### Session recording, only if you allow it

The first time you reach setup or your home screen, the app asks whether we may record how you use it. If you say no or close the question, nothing is recorded, and the app works the same either way.

If you say yes, the app uses **PostHog** to record the screens you open and where you tap, when the app opens and closes, and your device model, operating system and app version. PostHog also receives your IP address as part of the connection and may derive an approximate region from it.

Text, numbers, images and charts are blocked out on your device before a recording is sent, so the amounts, merchants and notes you enter should not be visible in it. This is automatic, and no automated process is perfect. Once you are signed in, recordings are labelled with your account identifier, not your name or email address.

You can change your answer at any time in **Settings → Privacy → Session recording**. Turning it off stops recording straight away. Logging out or deleting your account also stops recording, and the app asks again the next time someone sets it up on that device. Anything captured just before you turn it off may still finish uploading.

### Crash and diagnostic reports

The app uses **Firebase Crashlytics** (Google) to report crashes and errors so we can fix them. A report contains the error, a stack trace, the device model and OS version, and the state of the app at the time. **Crash reports are labelled with your account identifier**, so that a crash you report to us can be found. Crash reporting is on by default in the current version of the app.

### Server logs and abuse prevention

Our API records standard operational logs — the time of a request, which endpoint was called, the response status, and a request identifier — so we can diagnose faults. Our rate limiting stores no raw addresses: an IP address or user identifier is converted into a keyed one-way digest before it is used as a counter key.

### Authentication tokens

When you sign in, your device is issued an access token and a refresh token so you are not asked to sign in repeatedly. These are stored on your device, described in Section 7.

## 4. What we never collect

Stated plainly, so there is no ambiguity for you or for an App Store reviewer:

- **No bank credentials.** There is no bank linking in the app. It never asks for a username, password, or one-time code for any financial institution, and we could not use one if you sent it.
- **No imported transactions.** Nothing is pulled from your bank, card, or statements. Every record exists because you created it.
- **No card or payment details.** If you buy a subscription in the app, Apple processes the payment. We never receive your card number or billing address.
- **No advertising identifiers, and no cross-app or cross-site tracking.** The app does not use the IDFA, does not present an App Tracking Transparency prompt, and contains no advertising SDK.
- **No sale of personal information, and no sharing for cross-context behavioural advertising.**
- **No access to your contacts, photos, location, SMS, or email inbox.** The only device permissions the app requests are the microphone and speech recognition, for voice entry, and notifications if you turn reminders on.
- **No reading of your device’s messages to find receipts.** Some money apps do this. SaveFirst does not.

## 5. Voice input

Voice entry is optional. It works only after you grant microphone and speech recognition permission, and only while you are actively using it.

- **Speech becomes text using Apple’s speech recognition**, built into iOS. Depending on your device, language and settings, Apple may perform that recognition on the device or on Apple’s servers. That step is governed by Apple’s privacy policy, not ours, and we never receive the audio itself.
- **The resulting text is sent to our servers to be interpreted** — to work out that “spent twelve dollars on coffee yesterday” is a transaction, and which fields it fills.
- **Interpretation today is deterministic.** It runs on our own servers against a fixed set of rules. In the current version, **your transcript is not sent to any third-party AI provider.**
- **The transcript is short-lived.** It is held only until you confirm or cancel the command, and is erased as soon as you do. Anything left unconfirmed expires and is erased automatically within about fifteen minutes. What remains afterwards is the transaction you confirmed — not the words you said.

We are building an AI-assisted fallback for commands the deterministic parser cannot interpret. If we switch it on, a transcript may be sent to an external AI provider — **OpenRouter** or **Groq** — for that single interpretation. **It is not enabled in the version of the app you are using**, and we will update this page and say so in the app before it is.

## 6. How we use information

We use what we hold to:

- run the service — store your plan, calculate your spendable balance, answer a Pre-Spend Check, track goals, and show your month;
- keep your account working across sign-ins and devices;
- send the reminders you switch on;
- answer your support messages;
- keep the service available, diagnose faults, and prevent abuse;
- understand in aggregate which features are used, so we know what to improve;
- find and fix confusing or broken screens, using session recordings if you have allowed them;
- check whether your account has an active free trial or subscription;
- meet a legal obligation where one applies.

We do not use your financial information to build an advertising profile, to train general-purpose AI models, or to sell to anyone.

## 7. Where your information lives

### On our servers

Your account and financial records are stored in a **PostgreSQL database** running on infrastructure we operate with **OVHcloud**. A **Redis** instance holds short-lived operational data such as rate-limit counters and queued background work. This is the primary copy of your data: **SaveFirst needs an internet connection** to show or change your plan once you have an account.

### On your device

The app keeps only a small amount of information locally:

- **Sign-in tokens**, held in the iOS Keychain (encrypted system storage), so you stay signed in;
- **App preferences** such as theme and notification choices;
- **Your session recording answer**, and, if you have allowed recording, any recording still waiting to upload;
- **Scheduled reminders**, which are local notifications created on your device — nothing is pushed from us;
- **An onboarding draft**, if you start setting up before creating an account. It stays on the device until you finish, and is cleared then.

The app does **not** keep a local database of your transactions, so it does not work offline once you have an account.

## 8. Service providers

These are the companies that process data on our behalf so the service can run. Each is bound to use it only to provide their service to us, and to give it the same or equal protection as this policy describes. There are no others, and we do not sell to or share with anyone else.

| Provider | What it handles |
| --- | --- |
| Google (Firebase) | Authentication for Apple, Google and email sign-in; analytics; crash reporting. |
| OVHcloud | The servers and database that hold your account and financial records. |
| Cloudflare | Sits in front of our API, carrying traffic between the app and our servers and filtering abuse. |
| Apple | App distribution and updates, Sign in with Apple, payment for subscriptions, and the speech recognition described in Section 5. |
| RevenueCat | Keeps track of which subscription belongs to which account, using your SaveFirst account ID and the purchase records Apple provides. |
| PostHog | Session recording, only if you allow it. Recordings are stored in the United States. |
| Google (Forms) | The website waitlist form, and the mailbox we answer support from. |

We may also disclose information where we are legally required to, or to protect our rights or someone’s safety. If the business is ever sold or merged, information we hold may transfer as part of that transaction, and we would tell you before anything about its handling changed.

## 9. How long we keep things

| What | How long |
| --- | --- |
| Account and financial records | While your account exists. Deleted when you delete your account. |
| Voice transcripts | Erased as soon as you confirm or cancel the command, and automatically within about fifteen minutes if you do neither. |
| Monthly insight cards | Regenerated regularly; expired cards are deleted after 7 days. |
| Automatic notes the app attaches to a transaction, after that transaction is deleted | Deleted 30 days after the transaction is deleted. |
| AI request records (timing and cost only, never content) | 90 days. |
| Support email | Up to 24 months, then deleted. |
| Server logs | A short operational period, then deleted or aggregated. |
| Analytics and crash data | Held by Firebase under Google’s retention settings for those products. |
| Your trial and subscription record | While your account exists. Deleted when you delete your account. |
| Session recordings | Kept for 30 days and then deleted. |
| Subscription records at RevenueCat | Held by RevenueCat under its retention settings. |
| Waitlist email address | Until launch and a reasonable period after, or until you ask us to remove it. |

## 10. Deleting your account

You can delete your account from inside the app, in **Settings → Delete account**. You do not have to email us and you do not have to ask.

Deletion is a hard delete, not a hidden flag. It removes your user record and every row attached to it: transactions and their splits and tags, accounts and balances, bills and their occurrences and payment allocations, goals and contributions, spending caps, investments, merchants, tags, your finance profile, saved Pre-Spend decisions, cached insights and snapshots, voice command records, your trial and subscription record, and the metadata records of any AI requests. The app also deletes your Firebase sign-in identity and stops any session recording.

It is immediate and it is not reversible. **Ask us for a copy of anything you want to keep before you delete**— see Section 11. Copies may persist for a short time in encrypted infrastructure backups before they age out. Analytics and crash data already held by Firebase are governed by Google’s retention for those products. Session recordings already held by PostHog and subscription records held by RevenueCat are not removed when you delete your account, and they stay until the retention periods in Section 9 end.

**Deleting your account does not cancel a subscription.** Apple bills it, so cancel it in your Apple Account settings first. The app reminds you of this before it deletes anything.

## 11. Your rights and controls

- **Access and correction:** everything about your money is visible and editable in the app.
- **Portability:** email us and we will send you a copy of your data in a machine-readable format. A one-tap export inside the app is on the way; until it ships, ask us and we will do it for you.
- **Deletion:** Settings → Delete account, as described above.
- **Notifications:** turn reminders off in the app or in iOS Settings.
- **Voice:** decline or revoke microphone and speech permission in iOS Settings; the rest of the app is unaffected.
- **Session recording:** turn it on or off at any time in Settings → Privacy → Session recording. Saying no changes nothing else in the app.
- **Subscriptions:** manage or cancel in your Apple Account settings.
- **Sign out** at any time from Settings.
- **Waitlist:** unsubscribe from any email we send, or ask us to delete your address.

For anything you need us to do, email [support@teaksoftware.studio](mailto:support@teaksoftware.studio) from the address on your account. We aim to respond within 30 days. We will never charge you for a request or treat you differently for making one.

## 12. Children

SaveFirst is not directed to children under 13, and we do not knowingly collect personal information from anyone under 13. The app has no messaging, no social features, and no advertising.

If you are a parent or guardian and believe a child under 13 has created an account, email us and we will delete it.

## 13. US state privacy rights

If you live in California, Texas, Colorado, Connecticut, Virginia, or another US state with a comprehensive privacy law, you have the right to know what personal information is collected about you, to access and delete it, to correct it, to obtain a portable copy, and not to be treated differently for exercising those rights.

**We do not sell personal information, and we do not share it for cross-context behavioural advertising.** We do not use it for profiling that produces legal or similarly significant effects about you.

The categories we collect are set out in Sections 2 and 3: identifiers, your email address, the financial information you enter, your trial and subscription status, device and usage data (including session recordings, if you allow them), and diagnostic data. The account deletion in Section 10 satisfies a deletion request in full; you can also write to us at the address in Section 20, including to appeal a decision. If we deny an appeal, you may contact your state attorney general.

## 14. UK and EEA rights

If the UK GDPR or EU GDPR applies to you, you have the right to access, rectify, erase, restrict, or object to our processing, and the right to data portability.

Our lawful bases are:

- **Performance of a contract** — running your account and storing the plan you asked us to keep;
- **Legitimate interests** — keeping the service secure and available, preventing abuse, fixing crashes, understanding in aggregate which features are used, and answering your messages;
- **Consent** — session recording, voice input, notifications, and waitlist email, each of which you can decline or withdraw without losing the rest of the app;
- **Legal obligation** — where a law requires us to retain or disclose something.

You may lodge a complaint with your local supervisory authority; in the UK that is the Information Commissioner’s Office. We would appreciate the chance to put it right first.

## 15. International transfers

SaveFirst is operated from the United States by a Texas company, on infrastructure provided by OVHcloud, with Google, Cloudflare, Apple and RevenueCat processing parts of the service, and PostHog if you allow session recording. Your information may therefore be stored and processed in countries other than the one you live in, including the United States and the European Union.

Where personal data is transferred out of the UK or EEA, we rely on appropriate safeguards, including the European Commission’s Standard Contractual Clauses and the UK Addendum, as implemented by those providers.

## 16. The savefirst.app website

The website is separate from the app and handles very little.

### The waitlist form

The “Join waitlist” buttons open a **Google Form** hosted by Google. If you submit it, the email address you enter is collected through Google’s service and stored in our Google account, and we use it to tell you when SaveFirst is available. Consent is the lawful basis where the UK or EU GDPR applies. Every email includes a way to unsubscribe, and we do not sell or rent the list.

### Hosting and cookies

Our website host records standard server logs — IP address, browser and device type, the page requested, and a timestamp — kept briefly for security and reliability. The site uses **no** advertising cookies, analytics cookies, tracking pixels, or social media trackers, and fonts are served from our own domain rather than fetched from a third party as you browse.

## 17. Security statement

We hold financial information, so we would rather describe our actual controls than make broad assurances.

### In transit

- All traffic between the app and our API is encrypted with HTTPS/TLS. The website redirects HTTP to HTTPS.
- Our API sits behind Cloudflare and is reachable only through it, not directly.

### Accounts and access

- Sign-in runs through Firebase Authentication, so Apple and Google credentials are never seen by us. For email sign-up, passwords are stored only as a one-way **Argon2** hash.
- Sessions use short-lived access tokens with separate refresh tokens; on your device both are held in the iOS Keychain.
- Every API request is scoped to the signed-in account, and every endpoint that touches your data requires authentication.
- Requests are rate limited per address and per account, and the limiter stores only keyed one-way digests rather than raw addresses. Sign-in limits fail closed — if the limiter is unavailable, authentication is refused rather than left open.

### On our servers

- The database runs with least-privilege roles: the application account cannot perform schema changes, and neither runs as a superuser.
- Database connections outside the local host use TLS, and credentials are held in secrets management rather than in the codebase.
- Logs are structured around request identifiers and are not designed to carry the contents of your financial records.
- Sensitive short-lived material is erased on a schedule rather than left to accumulate — voice transcripts within about fifteen minutes, and the other windows in Section 9.
- Records of AI requests store timing, token counts and cost. They never store the text of a request or a response.
- We hold no payment card data. Any purchase in the app is processed by Apple.

### What you control, and should

- Use a device passcode with Face ID or Touch ID. Anyone who can unlock your phone can open the app.
- Secure the Apple or Google account you sign in with, ideally with two-factor authentication — whoever controls it can reach your SaveFirst account.
- Keep iOS and the app updated so security fixes reach you.
- If you ask us for a copy of your data, treat the file you receive as sensitive: it is a plain, unencrypted copy of your records, and once it is on your computer its protection is whatever you give it.

### Honest limits

No system is perfectly secure, and we will not claim otherwise. We are a small team, we have not completed an independent security audit or a SOC 2 examination, and we do not currently offer two-factor authentication on SaveFirst itself beyond what your sign-in provider enforces. A jailbroken or compromised device is outside what any app can protect against. If a security incident affects personal information we hold, we will notify affected users and any regulator required, without undue delay.

## 18. Reporting a vulnerability

If you find a security issue, we want to hear about it. Email [support@teaksoftware.studio](mailto:support@teaksoftware.studio) with the subject line **“Security”** and enough detail to reproduce it. We will acknowledge within five business days and keep you updated.

Please give us a reasonable opportunity to fix an issue before disclosing it publicly, and avoid accessing or modifying anyone else’s data, degrading the service, or running automated scanning that disrupts it. We will not pursue legal action against researchers who report in good faith and follow those principles.

## 19. Changes to this policy

We will update this page when the product or the law changes, and revise the “Last updated” date at the top. If a change is material — in particular, enabling the third-party AI processing described in Section 5, or introducing any new category of collection — we will give clear notice in the app before it takes effect, and ask for your consent where the law requires it.

We will not quietly begin collecting something this policy says we do not collect.

## 20. How to reach us

**TEAK SOFTWARE STUDIO LLC**
A limited liability company registered in the State of Texas, United States
Privacy and support: [support@teaksoftware.studio](mailto:support@teaksoftware.studio)
Web: [savefirst.app](https://savefirst.app)

For the agreement covering your use of the app, see the [Terms of Service](https://savefirst.app/terms).
