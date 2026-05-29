export default function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#" className="logo" aria-label="Save First">
          <span className="logo-mark">SF</span>
          <span className="logo-word">Save&nbsp;First</span>
          <span className="logo-tag">Logo placeholder</span>
        </a>
        <nav className="nav-links">
          <a href="#how">How it works</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
          <a href="#download" className="btn btn-primary nav-cta">Download</a>
        </nav>
      </div>
    </header>
  );
}
