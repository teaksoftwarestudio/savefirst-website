import "./blog.css";
import { APP_STORE_URL, SUPPORT_EMAIL, WAITLIST_URL } from "../constants";

const CTA = APP_STORE_URL
  ? { href: APP_STORE_URL, label: "Download" }
  : { href: WAITLIST_URL, label: "Join waitlist" };

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="nav blog-nav">
        <div className="wrap nav-inner">
          <a href="/" className="logo" aria-label="SaveFirst home">
            <img
              src="/assets/savefirst-wordmark-color.svg"
              alt="SaveFirst"
              height={36}
              style={{ display: "block", height: 36, width: "auto" }}
            />
          </a>
          <nav className="blog-nav-links" aria-label="Main">
            <a href="/#how" className="blog-nav-hide-sm">How it works</a>
            <a href="/#features" className="blog-nav-hide-sm">Features</a>
            <a href="/blog" className="blog-nav-active">Blog</a>
            <a href="/support" className="blog-nav-hide-sm">Support</a>
            <a href={CTA.href} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">
              {CTA.label}
            </a>
          </nav>
        </div>
      </header>

      {children}

      <footer className="footer blog-footer">
        <div className="wrap">
          <div className="footer-bottom">
            <span>© 2026 SaveFirst by Teak Software Studio LLC. Made with care for your future self.</span>
            <span className="legal">
              <a href="/">Home</a>
              <a href="/blog">Blog</a>
              <a href="/support">Support</a>
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href={`mailto:${SUPPORT_EMAIL}`}>Contact</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
