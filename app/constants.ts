/** Google Form that collects waitlist signups. Used by every "Join waitlist" CTA until launch. */
export const WAITLIST_URL = "https://forms.gle/9vLMvq71Uq5TG3uV9";

/**
 * App Store listing for SaveFirst. Leave as null until the app is live.
 * Setting it is the launch switch: every waitlist CTA (nav, hero, closing band)
 * becomes an App Store download button.
 */
export const APP_STORE_URL: string | null = null;

/** True once the app is on the App Store. */
export const IS_LIVE = APP_STORE_URL !== null;

/** Support mailbox. */
export const SUPPORT_EMAIL = "support@teaksoftware.studio";

/** Canonical production origin. Used for metadata, sitemap and robots. */
export const SITE_URL = "https://savefirst.app";
