"use client";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import AppStoreBadge from "./components/AppStoreBadge";
import PhoneFrame, { Statusbar } from "./components/PhoneFrame";
import PhoneHome from "./components/PhoneHome";
import PhoneCheck from "./components/PhoneCheck";
import PhoneGoals from "./components/PhoneGoals";
import GallerySection from "./components/GallerySection";
import FAQ from "./components/FAQ";
import Reveal from "./components/Reveal";
import { Viz1, Viz2, Viz3 } from "./components/HowVizzes";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "./components/useCountUp";
import ParallaxPhone from "./components/ParallaxPhone";
import AuroraBackground from "./components/AuroraBackground";
import WordReveal from "./components/WordReveal";
import MagneticButton from "./components/MagneticButton";
import StatsBand from "./components/StatsBand";
import AnimatedCounter from "./components/AnimatedCounter";

const spring = { ease: [0.22, 1, 0.36, 1] as const, duration: 0.7 };

function PriceAmt({ value, decimals = 2 }: { value: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const val = useCountUp(value, 1200, inView, decimals);
  return (
    <span className="n" ref={ref}>
      ${decimals > 0 ? val.toFixed(decimals) : Math.round(val)}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="hero" id="top">
        <AuroraBackground />
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <motion.span
              className="hero-eyebrow"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0 }}
            >
              <span className="pill">New</span>
              Pre-Spend Check is live on iOS
            </motion.span>

            <WordReveal
              text="Spend what's"
              delay={0.12}
              highlight={<span className="hl">left after saving.</span>}
            />

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.42 }}
            >
              Save First is a calmer way to handle money. We move savings to the front of
              your month — then show you a spendable balance you can actually trust.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.54 }}
            >
              <AppStoreBadge />
              <MagneticButton href="#how" className="btn btn-light">See how it works</MagneticButton>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.66 }}
            >
              <div className="m">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                Local-first &amp; private
              </div>
              <div className="m">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                No bank linking required
              </div>
              <div className="m">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
                Built for iPhone
              </div>
            </motion.div>
          </div>

          <div className="phone-stack" aria-hidden="true">
            {/* Back-left phone — slides in from left */}
            <motion.div
              className="phone p1"
              initial={{ opacity: 0, x: -60, rotate: -10, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, rotate: -6, scale: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.35 }}
            >
              <div className="notch"></div>
              <div className="screen">
                <div className="viewport">
                  <Statusbar />
                  <div className="app"><PhoneGoals /></div>
                </div>
              </div>
            </motion.div>

            {/* Center phone — rises from below */}
            <motion.div
              className="phone p2"
              initial={{ opacity: 0, y: 60, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1.06 }}
              transition={{ type: "spring", stiffness: 55, damping: 16, delay: 0.2 }}
            >
              <div className="notch"></div>
              <div className="screen">
                <div className="viewport">
                  <Statusbar />
                  <div className="app"><PhoneHome /></div>
                </div>
              </div>
            </motion.div>

            {/* Back-right phone — slides in from right */}
            <motion.div
              className="phone p3"
              initial={{ opacity: 0, x: 60, rotate: 10, scale: 0.88 }}
              animate={{ opacity: 1, x: 0, rotate: 6, scale: 1 }}
              transition={{ type: "spring", stiffness: 60, damping: 18, delay: 0.45 }}
            >
              <div className="notch"></div>
              <div className="screen">
                <div className="viewport">
                  <Statusbar />
                  <div className="app"><PhoneCheck /></div>
                </div>
              </div>
            </motion.div>

            {/* Float chips — appear after phones, then float */}
            <motion.div
              className="float-chip fc-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { type: "spring", stiffness: 80, damping: 14, delay: 0.7 },
                scale:   { type: "spring", stiffness: 80, damping: 14, delay: 0.7 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
              }}
            >
              <div className="icon" style={{ background: "#d6f3e3" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10a65a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div>
                <div className="label">Savings on track</div>
                <div className="val">
                  +<AnimatedCounter value={520} prefix="$" duration={1800} /> this month
                </div>
              </div>
            </motion.div>

            <motion.div
              className="float-chip fc-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
              transition={{
                opacity: { type: "spring", stiffness: 80, damping: 14, delay: 0.85 },
                scale:   { type: "spring", stiffness: 80, damping: 14, delay: 0.85 },
                y: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.4 },
              }}
            >
              <div className="icon" style={{ background: "rgba(14,159,110,0.12)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0e9f6e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="label">Pre-Spend Check</div>
                <div className="val">2.4s to decide</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsBand />

      {/* HOW IT WORKS */}
      <section className="how" id="how">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">The Save-First method</span>
              <h2>Most budgets fail because savings come last.</h2>
              <p>
                We flip the order. Money for your future leaves the math first — what&apos;s
                left is genuinely yours to spend, with no guilt and no spreadsheet.
              </p>
            </div>
          </Reveal>
          <div className="how-steps">
            {[
              { viz: <Viz1 />, n: "1", title: "Tell us what comes in", body: "Add your income and the bills you can't skip — rent, subscriptions, utilities. Two minutes, no bank linking." },
              { viz: <Viz2 />, n: "2", title: "Save first, automatically", body: "Set a savings target — a fixed dollar amount or a percent of income. It's allocated before anything else is spendable." },
              { viz: <Viz3 />, n: "3", title: "Spend what's left, freely", body: "Your spendable balance is the truth — everything else is taken care of. Buy the coffee. We did the math." },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <motion.div
                  className="how-step"
                  whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                >
                  {step.viz}
                  <div className="n">{step.n}</div>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features" id="features">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <span className="eyebrow">Inside the app</span>
              <h2>Quiet tools that do the worrying for you.</h2>
            </div>
          </Reveal>

          {/* Row 1 */}
          <div className="feat-row">
            <Reveal direction="left" className="feat-copy">
              <span className="eyebrow">Spendable Balance</span>
              <h2>One number, total clarity.</h2>
              <p>No more guessing whether you can afford something. Save First shows you a single, trustworthy figure — what&apos;s truly left after savings and essentials.</p>
              <ul className="feat-list">
                <li>Refreshed in real time as you spend</li>
                <li>Accounts for upcoming bills and pay cycles</li>
                <li>Visible on every screen — never hidden behind a tab</li>
              </ul>
            </Reveal>
            <Reveal direction="right" className="feat-visual">
              <div className="bg-glow"></div>
              <ParallaxPhone direction={-1}><PhoneFrame><PhoneHome /></PhoneFrame></ParallaxPhone>
            </Reveal>
          </div>

          {/* Row 2 */}
          <div className="feat-row flip">
            <Reveal direction="right" className="feat-copy">
              <span className="eyebrow">Pre-Spend Check</span>
              <h2>A 10-second second opinion.</h2>
              <p>Before you check out, type the amount. Save First tells you what happens to your month, with the math in plain language and no shame attached.</p>
              <ul className="feat-list">
                <li>Shows your balance after the purchase, instantly</li>
                <li>Flags risk to bills or your savings target</li>
                <li>Suggests a single action — approve, wait, reduce, or skip</li>
              </ul>
            </Reveal>
            <Reveal direction="left" className="feat-visual">
              <div className="bg-glow" style={{ background: "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 65%)" }}></div>
              <ParallaxPhone direction={1}><PhoneFrame><PhoneCheck /></PhoneFrame></ParallaxPhone>
            </Reveal>
          </div>

          {/* Row 3 */}
          <div className="feat-row">
            <Reveal direction="left" className="feat-copy">
              <span className="eyebrow">Goals &amp; Sinking Funds</span>
              <h2>Save for what matters, on your terms.</h2>
              <p>Build an emergency fund. Save for tuition, a trip, or a new lens. Each goal gets its own bucket and timeline — so you always know what your money is for.</p>
              <ul className="feat-list">
                <li>Priority goals stay funded automatically each month</li>
                <li>Sinking funds smooth out predictable big expenses</li>
                <li>Progress bars + projected finish dates, not vague vibes</li>
              </ul>
            </Reveal>
            <Reveal direction="right" className="feat-visual">
              <div className="bg-glow"></div>
              <ParallaxPhone direction={-1}><PhoneFrame><PhoneGoals /></PhoneFrame></ParallaxPhone>
            </Reveal>
          </div>

          {/* Row 4 */}
          <div className="feat-row flip">
            <Reveal direction="right" className="feat-copy">
              <span className="eyebrow">Transactions</span>
              <h2>Logging that doesn&apos;t feel like homework.</h2>
              <p>Add an expense in under five seconds. We learn your recurring charges, surface unusual ones, and never make you re-enter the same coffee shop twice.</p>
              <ul className="feat-list">
                <li>One-tap recurring detection (rent, subscriptions, utilities)</li>
                <li>Voice entry — say it, save it</li>
                <li>Search, filter, and re-categorize without breaking your month</li>
              </ul>
            </Reveal>
            <Reveal direction="left" className="feat-visual">
              <div className="bg-glow"></div>
              <ParallaxPhone direction={1}>
                <PhoneFrame>
                  <div className="scr" style={{ padding: "0 14px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "4px 0 14px" }}>
                      <h4 style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Transactions</h4>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--brand)", color: "white", display: "grid", placeItems: "center", fontSize: 18, fontWeight: 600 }}>+</div>
                    </div>
                    <div style={{ display: "flex", gap: 6, marginBottom: 14, fontSize: 11, fontWeight: 600 }}>
                      <div style={{ padding: "6px 12px", background: "var(--ink)", color: "white", borderRadius: 999 }}>All</div>
                      <div style={{ padding: "6px 12px", background: "var(--paper)", border: "1px solid var(--line)", color: "var(--ink-3)", borderRadius: 999 }}>Income</div>
                      <div style={{ padding: "6px 12px", background: "var(--paper)", border: "1px solid var(--line)", color: "var(--ink-3)", borderRadius: 999 }}>Expense</div>
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 10 }}>Today</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                      {[
                        { bg: "#ffe9d6", icon: "☕", name: "Bluestone Lane", cat: "Food & Dining · 8:42 AM", amt: "−$6.50" },
                        { bg: "#d6ecff", icon: "🚇", name: "MTA · Subway", cat: "Transport · 8:55 AM", amt: "−$2.90" },
                        { bg: "#e3d6ff", icon: "🎬", name: "Netflix", cat: "Subscriptions · Recurring", amt: "−$15.49" },
                      ].map((t) => (
                        <div key={t.name} style={{ background: "var(--paper)", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 10, boxShadow: "var(--shadow-soft)" }}>
                          <div style={{ width: 34, height: 34, borderRadius: 10, background: t.bg, display: "grid", placeItems: "center", fontSize: 16 }}>{t.icon}</div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: 12, fontWeight: 600 }}>{t.name}</div>
                            <div style={{ fontSize: 10, color: "var(--ink-3)" }}>{t.cat}</div>
                          </div>
                          <div style={{ fontSize: 13, fontWeight: 700 }}>{t.amt}</div>
                        </div>
                      ))}
                    </div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: ".06em", margin: "14px 0 10px" }}>Yesterday</div>
                    <div style={{ background: "var(--paper)", borderRadius: 12, padding: 12, display: "flex", alignItems: "center", gap: 10, boxShadow: "var(--shadow-soft)" }}>
                      <div style={{ width: 34, height: 34, borderRadius: 10, background: "#d6f3e3", display: "grid", placeItems: "center", fontSize: 16 }}>💼</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 12, fontWeight: 600 }}>Acme Co · Salary</div>
                        <div style={{ fontSize: 10, color: "var(--ink-3)" }}>Income · Biweekly</div>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "var(--accent)" }}>+$1,600.00</div>
                    </div>
                  </div>
                </PhoneFrame>
              </ParallaxPhone>
            </Reveal>
          </div>
        </div>
      </section>

      <GallerySection />

      {/* PRICING */}
      <section className="pricing" id="pricing">
        <div className="wrap">
          <Reveal>
            <div className="section-head center">
              <span className="eyebrow">Pricing</span>
              <h2>Free to start. Affordable to go deeper.</h2>
              <p>No trials, no dark patterns. Cancel from Settings anytime.</p>
            </div>
          </Reveal>
          <div className="price-grid">
            <Reveal direction="left" delay={0.05}>
              <motion.div
                className="price"
                whileHover={{ y: -8, boxShadow: "0 28px 64px -12px rgba(18,23,42,0.16)", transition: { type: "spring", stiffness: 300, damping: 22 } }}
              >
                <h3>Free</h3>
                <p className="blurb">The Save-First essentials, forever.</p>
                <div className="amt">
                  <PriceAmt value={0} decimals={0} />
                  <span className="per">/ month</span>
                </div>
                <ul>
                  <li>Spendable Balance &amp; monthly snapshot</li>
                  <li>Unlimited transactions</li>
                  <li>One savings target &amp; one emergency fund</li>
                  <li>5 Pre-Spend Checks per month</li>
                  <li>CSV export</li>
                </ul>
                <button className="btn-pricing">Get the app</button>
              </motion.div>
            </Reveal>
            <Reveal direction="right" delay={0.12}>
              <motion.div
                className="price pro"
                whileHover={{ y: -8, boxShadow: "0 28px 64px -12px rgba(14,159,110,0.4)", transition: { type: "spring", stiffness: 300, damping: 22 } }}
              >
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                  <span className="price-tag">Most popular</span>
                  <h3>Pro</h3>
                  <p className="blurb">For when money has more moving parts.</p>
                  <div className="amt">
                    <PriceAmt value={4.99} decimals={2} />
                    <span className="per">/ month</span>
                  </div>
                  <ul>
                    <li>Everything in Free</li>
                    <li>Unlimited Pre-Spend Checks &amp; explanations</li>
                    <li>Unlimited goals &amp; sinking funds</li>
                    <li>Voice entry &amp; recurring auto-detection</li>
                    <li>Weekly recap &amp; insight cards</li>
                    <li>Priority email support</li>
                  </ul>
                  <button className="btn-pricing">Start with Pro</button>
                </div>
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA BAND */}
      <Reveal direction="scale">
        <section className="cta-band tight" id="download">
          <div className="wrap">
            <h2>Spend lighter. Save sooner.</h2>
            <p>Save First is free on the App Store. Two minutes to set up, a lifetime less to worry about.</p>
            <AppStoreBadge href="#" />
          </div>
        </section>
      </Reveal>

      {/* FOOTER */}
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <Reveal direction="up" delay={0}>
              <div className="footer-col footer-about">
                <a href="#" className="logo">
                  <span className="logo-mark">SF</span>
                  <span className="logo-word">Save&nbsp;First</span>
                </a>
                <p>A calmer way to think about money. Save what matters, spend what&apos;s left.</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.08}>
              <div className="footer-col">
                <h6>Product</h6>
                <ul>
                  <li><a href="#features">Features</a></li>
                  <li><a href="#pricing">Pricing</a></li>
                  <li><a href="#how">How it works</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.16}>
              <div className="footer-col">
                <h6>Company</h6>
                <ul>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Changelog</a></li>
                  <li><a href="#">Press kit</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.24}>
              <div className="footer-col">
                <h6>Legal</h6>
                <ul>
                  <li><a href="#">Privacy</a></li>
                  <li><a href="#">Terms</a></li>
                  <li><a href="#">Security</a></li>
                  <li><a href="#">Cookies</a></li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="footer-bottom">
            <span>© 2026 Save First. Made with care for your future self.</span>
            <span className="legal">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Status</a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
