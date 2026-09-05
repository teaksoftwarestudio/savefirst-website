# SaveFirst legal documents

Two documents. Each has one canonical source and generated copies that must not drift from it.

| Document | Canonical source | Generated copies |
|---|---|---|
| Terms of Service | `app/terms/page.tsx` → https://savefirst.app/terms | `legal/terms.md`, `savefirst_flutter/assets/legal/terms_of_service.md` |
| Privacy Policy & Security | `app/privacy/page.tsx` → https://savefirst.app/privacy | `legal/privacy-and-security.md`, `savefirst_flutter/assets/legal/privacy_policy.md` |

The Security Statement is section 17 of the Privacy Policy (`/privacy#security`), not a separate
document, so the two cannot contradict each other.

**When you change a document, change the `.tsx` page first**, then regenerate the markdown from the
rendered page and copy it into the Flutter assets. Four copies that disagree is worse than one that
is slightly out of date.

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
| No IDFA, no ATT prompt, no ad SDK | `pubspec.yaml`, `Info.plist` |
| No bank linking, nothing imported | absence of any aggregator across both repos |
| Voice transcript held ~15 min, then erased | `voice/models.py` (`expires_at`), `voice/retention.py` |
| Voice interpretation is deterministic; no third-party AI today | `LLM_ENABLED=false` |
| AI request logs hold metadata only, kept 90 days | `ai/models.py`, `LLM_REQUEST_RETENTION_DAYS` |
| Insight cards deleted after 7 days; comments 30 days after transaction deletion | `workers/jobs/retention.py` |
| Account deletion is a hard delete of every table | `auth/service.py` `delete_account()` |
| Portability is offered by request, not in-app | backend has `POST /exports/csv`, but the Flutter app never calls it |
| Rate limiting stores keyed digests, auth fails closed | `core/rate_limit.py`, `docs/security/README.md` |

---

## App Store Connect

**1. Privacy Policy URL** (App Information → General Information, required)

```
https://savefirst.app/privacy
```

**2. License Agreement** (App Information → License Agreement)

Choose **Custom License Agreement** and paste `legal/terms.md`. Apple's standard EULA has no
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

Notes on the answers:

- **"Linked to identity" is Yes** for analytics and diagnostics, because `CrashReporting.setUserId`
  attaches the account identifier to crash reports.
- **"Used for tracking" is No** across the board — no IDFA, no ATT prompt, no ad SDK, no data broker.
- **Financial Info is unavoidable.** The user types income and transactions and they are stored
  server-side. Declaring it is not a weakness; understating it is a real problem.
- Re-check this if you add an SDK, and again if the voice AI fallback is switched on.

**4. Account deletion — required, and satisfied**

Apple requires any app with account creation to offer in-app account deletion. Settings → Delete
account calls `DELETE /api/v1/auth/me` and then deletes the Firebase identity. Have the reviewer
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

- [ ] No in-app purchase in this build, matching Terms section 12. If a paywall gets added, that
      section must be rewritten with full auto-renewal disclosures first.
- [ ] `LLM_ENABLED=false` in the production environment, matching Privacy section 5. **If you turn on
      OpenRouter or Groq, the Privacy Policy must be updated and users told before that build
      ships** — financial speech going to a third party is exactly the kind of undisclosed change
      that damages trust permanently.
- [ ] Account deletion works end to end against production.
- [ ] You can actually fulfil a data-copy request by email — Privacy section 11 promises it. The
      backend endpoint `POST /api/v1/exports/csv` exists but **is not wired into the app**; when a
      one-tap export ships, update that section.
- [ ] Crashlytics and Analytics really are the only SDKs collecting anything.
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
