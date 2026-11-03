# SaveFirst legal documents

Two documents. Each has one canonical source and generated copies that must not drift from it.

| Document | Canonical source | Generated copies |
|---|---|---|
| Terms of Service | `app/terms/page.tsx` → https://savefirst.app/terms | `legal/terms.md` |
| Privacy Policy & Security | `app/privacy/page.tsx` → https://savefirst.app/privacy | `legal/privacy-and-security.md` |

The Security Statement is section 17 of the Privacy Policy (`/privacy#security`), not a separate
document, so the two cannot contradict each other.

**When you change a document, change the `.tsx` page first**, then regenerate the markdown from the
rendered page. Two copies that disagree is worse than one that is slightly out of date.

The app does not bundle its own copy. Its Terms and Privacy links open `www.savefirst.app/terms` and
`/privacy` in a web view (`savefirst_flutter/lib/features/legal/data/legal_documents.dart`), so the
live pages are what users and App Review read. The old `assets/legal/*.md` copies were removed
because they had drifted.

---

## What these documents assert about the build

Every claim below was read out of the code. If any of it stops being true, the document is wrong and
has to change **before** that build ships.

| Claim | Where it comes from |
|---|---|
| Accounts via Firebase (Apple, Google, email) | `features/auth/service.py`, `firebase_auth_service.dart` |
| Financial records in PostgreSQL on OVHcloud | `db/models.py`, deployment |
| Passwords stored as Argon2 hashes only | `core/security.py` — `pwdlib` recommended hasher |
| Firebase Analytics and Crashlytics on, crash reports tagged with the account id | `core/error/crash_reporting.dart` |
| PostHog session replay only after an explicit yes; masked text, images and custom paint; labelled with the account id; Settings → Privacy → Session recording; answer forgotten on sign-out and deletion | `core/analytics/analytics.dart`, `session_recording_consent.dart`, `features/session_recording/` |
| PostHog project is in the US region; recordings kept 30 days | `POSTHOG_HOST` default `us.i.posthog.com`; retention is a PostHog project setting — check it |
| RevenueCat receives the account id (`Purchases.logIn`) and Apple purchase records | `subscription_purchases.dart`, backend `features/subscription/` |
| One 7-day trial per account, server-run, no card; hard paywall afterwards | backend `subscription_trial_days`, `UserEntitlement`; Flutter `step_choose_plan.dart`, `paywall_screen.dart` |
| Delete account warns that a store subscription keeps billing | `settings_screen.dart` `_confirmDeleteAccount` |
| No IDFA, no ATT prompt, no ad SDK | `pubspec.yaml`, `Info.plist` |
| No bank linking, nothing imported | absence of any aggregator across both repos |
| Voice transcript held ~15 min, then erased | `voice/models.py` (`expires_at`), `voice/retention.py` |
| Voice interpretation is deterministic; no third-party AI today | `LLM_ENABLED=false` |
| AI request logs hold metadata only, kept 90 days | `ai/models.py`, `LLM_REQUEST_RETENTION_DAYS` |
| Insight cards deleted after 7 days; comments 30 days after transaction deletion | `workers/jobs/retention.py` |
| Account deletion is a hard delete of every table, including `user_entitlements`; nothing is deleted at PostHog or RevenueCat | `auth/service.py` `delete_account()` |
| Portability is offered by request, not in-app | backend has `POST /exports/csv`, but the Flutter app never calls it |
| Rate limiting stores keyed digests, auth fails closed | `core/rate_limit.py`, `docs/security/README.md` |

---

## App Store Connect

**1. Privacy Policy URL** (App Information → General Information, required)

```
https://savefirst.app/privacy
```

**2. License Agreement** (App Information → License Agreement)

Choose **Custom License Agreement** and paste `legal/terms.md`. Re-paste it whenever the Terms change;
App Store Connect keeps its own copy and does not follow the website. Apple's standard EULA has no
"not financial advice" disclaimer, which is the clause that matters most for a money app. Section 20
of the Terms carries every clause Apple requires in a custom EULA, including the third-party
beneficiary provision.

**3. App Privacy nutrition label**

This is where a wrong answer causes a rejection or, worse, a post-launch correction. The app is
**not** "Data Not Collected." Declare at least:

| Category | Data type | Purpose | Linked to identity | Tracking |
|---|---|---|---|---|
| Contact Info | Email address | App Functionality | Yes | No |
| Contact Info | Name (if the provider supplies one) | App Functionality | Yes | No |
| Financial Info | Other Financial Info — income, bills, transactions, goals, balances entered by the user | App Functionality | Yes | No |
| Identifiers | User ID | App Functionality, Analytics | Yes | No |
| Usage Data | Product Interaction | Analytics | Yes | No |
| Diagnostics | Crash Data, Performance Data | App Functionality, Analytics | Yes | No |
| User Content | Other User Content — notes and voice transcripts | App Functionality | Yes | No |
| Purchases | Purchase History — trial and subscription status, via RevenueCat | App Functionality | Yes | No |
| Usage Data | Other Usage Data — PostHog session recordings (only with consent) | Analytics | Yes | No |
| Location | Coarse Location — region derived from IP by Firebase Analytics and PostHog | Analytics | Yes | No |

Notes on the answers:

- **"Linked to identity" is Yes** for analytics and diagnostics, because `CrashReporting.setUserId`
  attaches the account identifier to crash reports and `Analytics.identify` labels PostHog
  recordings with it.
- **Coarse Location** is a judgement call: the policy says both SDKs derive an approximate region
  from the IP address. Declaring it is the safe answer; the alternative is turning GeoIP off in the
  PostHog project and in Google Analytics data settings.
- Session recording is opt-in, but Apple's optional-disclosure exception does not apply to it, so it
  is still declared.
- **"Used for tracking" is No** across the board — no IDFA, no ATT prompt, no ad SDK, no data broker.
- **Financial Info is unavoidable.** The user types income and transactions and they are stored
  server-side. Declaring it is not a weakness; understating it is a real problem.
- Re-check this if you add an SDK, and again if the voice AI fallback is switched on.

**4. Account deletion — required, and satisfied**

Apple requires any app with account creation to offer in-app account deletion. Settings → Delete
account calls `DELETE /api/v1/auth/me` and then deletes the Firebase identity. Before deleting, the
sheet says a store subscription keeps billing and links to the store's subscription page, which
Apple's account-deletion guidance asks for. Have the reviewer
notes point at it; reviewers look for this specifically and reject when they cannot find it.

**5. Sign in with Apple — required**

The app offers Google sign-in, so Apple requires Sign in with Apple as an equivalent option. It is
implemented (`sign_in_with_apple`); confirm it is visible and working on the sign-in screen.

**6. Demo account for review**

The app is unusable without an account, so App Review needs working credentials in the reviewer
notes, on an account with realistic data already in it. A reviewer who lands on an empty onboarding
flow with no way in will reject.

**7. Age rating**

The Terms set a 13+ minimum. Answer the questionnaire for actual content — no gambling, no
user-generated content shared between users, no unrestricted web access.

**8. Permission strings**

`Info.plist` has microphone and speech recognition strings. Both are user-facing and should say why:
they currently do. There is no notification usage string because iOS does not require one.

---

## Before you submit — verify against the shipping binary

- [ ] The App Store description ends with links to https://savefirst.app/terms and
      https://savefirst.app/privacy. Subscription apps get rejected under 3.1.2 when these are
      missing from the metadata, even if they are in the app.
- [ ] Decide on the trial. The 7-day trial is run by our server, not set up as an introductory
      offer in App Store Connect. App Review has rejected subscription apps for this ("offers a free
      trial without implementing the offer in App Store Connect"). Either explain it in the review
      notes or switch to an introductory offer — and if you switch, Terms section 12 and the
      onboarding copy ("No credit card") must change first.
- [ ] PostHog project → Session replay retention is 30 days, matching Privacy section 9.
- [ ] On a fresh install, the session recording question appears at setup, "Don't allow" records
      nothing, and the Settings → Privacy switch works both ways.
- [ ] `LLM_ENABLED=false` in the production environment, matching Privacy section 5. **If you turn on
      OpenRouter or Groq, the Privacy Policy must be updated and users told before that build
      ships** — financial speech going to a third party is exactly the kind of undisclosed change
      that damages trust permanently.
- [ ] Account deletion works end to end against production.
- [ ] You can actually fulfil a data-copy request by email — Privacy section 11 promises it. The
      backend endpoint `POST /api/v1/exports/csv` exists but **is not wired into the app**; when a
      one-tap export ships, update that section.
- [ ] Firebase (Auth, Analytics, Crashlytics), PostHog and RevenueCat really are the only SDKs
      collecting anything. Adding one means updating Privacy sections 3 and 8 and the label above.
- [ ] `DOCS_ENABLED=false` in production — `/docs` and `/openapi.json` should not be public.
- [ ] `FORWARDED_ALLOW_IPS` is not `*`, and Redis is `rediss://` with a password.

---

## Still worth a lawyer's eye

Thorough and matched to the code, but not legal advice, and no lawyer has reviewed them. Before
launch, a US attorney should look at:

- whether you want a **binding arbitration clause with a class-action waiver**. These Terms
  deliberately do not include one — informal resolution then Texas courts (section 22).
- the **liability cap** in section 17 against your actual risk, now that you hold user financial
  data on your own servers;
- **GDPR exposure**, if you accept EU or UK users. The policy names lawful bases and SCCs, but a
  US company holding EU financial data may need a representative under Article 27;
- the **OVHcloud region**, which the policy currently describes only in general terms. Tell me the
  datacenter country and I will name it precisely — vagueness about where financial data lives is
  the weakest line in the document;
- the **SaveFirst trademark position** before you spend more on the name. No registered US mark
  yet, and a potential conflict has been identified. No ® is used anywhere, deliberately.
