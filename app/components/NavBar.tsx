"use client";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " nav-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#" className="logo" aria-label="Save First">
          <span className="logo-mark">SF</span>
          <span className="logo-word">Save&nbsp;First</span>
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
