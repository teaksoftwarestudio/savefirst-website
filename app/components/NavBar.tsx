"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { WAITLIST_URL } from "../constants";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={`nav${scrolled ? " nav-scrolled" : ""}`}>
        {/* Scroll progress bar */}
        <motion.div
          className="nav-progress"
          style={{ scaleX, transformOrigin: "left" }}
        />

        <div className="wrap nav-inner">
          <a href="#" className="logo" aria-label="SaveFirst" onClick={close}>
            <img
              src="/assets/savefirst-wordmark-color.svg"
              alt="SaveFirst"
              height={36}
              style={{ display: "block", height: 36, width: "auto" }}
            />
          </a>

          {/* Desktop nav */}
          <nav className="nav-links nav-desktop">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
            <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary nav-cta">Join waitlist</a>
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
          <a href={WAITLIST_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary" onClick={close} style={{ width: "100%", justifyContent: "center" }}>Join waitlist</a>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && <div className="nav-backdrop" onClick={close} />}
    </>
  );
}
