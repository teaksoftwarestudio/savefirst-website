"use client";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " nav-scrolled" : ""}`}>
        <div className="wrap nav-inner">
          <a href="#" className="logo" aria-label="Save First" onClick={close}>
            <span className="logo-mark">SF</span>
            <span className="logo-word">Save&nbsp;First</span>
          </a>

          {/* Desktop nav */}
          <nav className="nav-links nav-desktop">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href="#download" className="btn btn-primary nav-cta">Download</a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`nav-burger${menuOpen ? " open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`nav-drawer${menuOpen ? " open" : ""}`}>
        <nav className="nav-drawer-links">
          <a href="#how" onClick={close}>How it works</a>
          <a href="#features" onClick={close}>Features</a>
          <a href="#pricing" onClick={close}>Pricing</a>
          <a href="#faq" onClick={close}>FAQ</a>
          <a href="#download" className="btn btn-primary" onClick={close} style={{ width: "100%", justifyContent: "center" }}>Download</a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={close} />}
    </>
  );
}
