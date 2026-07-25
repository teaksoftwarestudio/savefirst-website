import { WAITLIST_URL } from "../constants";

export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="logo" aria-label="SaveFirst">
          <span className="logo-mark">SF</span>
          <span className="logo-word">SaveFirst</span>
          <span className="logo-tag">Logo placeholder</span>
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">Join waitlist</a>
        </nav>
      </div>
    </header>
  );
}
