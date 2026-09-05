import { WAITLIST_URL } from "../constants";

type Section = { id: string; label: string };

export default function LegalShell({
  eyebrow,
  title,
  intro,
  effective,
  updated,
  sections,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  effective: string;
  updated: string;
  sections: Section[];
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Header — simple, static, links back to the marketing page */}
      <header className="nav legal-nav">
        <div className="wrap nav-inner">
          <a href="/" className="logo" aria-label="SaveFirst">
            <img
              src="/assets/savefirst-wordmark-color.svg"
              alt="SaveFirst"
              height={36}
              style={{ display: "block", height: 36, width: "auto" }}
            />
          </a>
          <nav className="nav-links legal-nav-links">
            <a href="/#how">How it works</a>
            <a href="/#features">Features</a>
            <a href="/#faq">FAQ</a>
            <a
              href={WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary nav-cta"
            >
              Join waitlist
            </a>
          </nav>
        </div>
      </header>

      <section className="legal-hero">
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <h1>{title}</h1>
          <p className="legal-intro">{intro}</p>
          <div className="legal-dates">
            <span>
              <strong>Effective</strong> {effective}
            </span>
            <span aria-hidden="true" className="legal-dot" />
            <span>
              <strong>Last updated</strong> {updated}
            </span>
          </div>
        </div>
      </section>

      <div className="wrap legal-layout">
        <aside className="legal-toc" aria-label="On this page">
          <h2>On this page</h2>
          <ol>
            {sections.map((s) => (
              <li key={s.id}>
                <a href={`#${s.id}`}>{s.label}</a>
              </li>
            ))}
          </ol>
        </aside>

        <article className="legal-prose">{children}</article>
      </div>

      <footer className="footer legal-footer">
        <div className="wrap">
          <div className="footer-bottom">
            <span>© 2026 SaveFirst. Made with care for your future self.</span>
            <span className="legal">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/privacy#security">Security</a>
              <a href="/">Home</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
