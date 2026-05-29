"use client";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import AppStoreBadge from "./components/AppStoreBadge";
import PhoneFrame from "./components/PhoneFrame";
import PhoneHome from "./components/PhoneHome";
import PhoneCheck from "./components/PhoneCheck";
import PhoneGoals from "./components/PhoneGoals";
import GallerySection from "./components/GallerySection";
import FAQ from "./components/FAQ";
import Reveal from "./components/Reveal";

const spring = { ease: [0.22, 1, 0.36, 1] as const, duration: 0.7 };

export default function Home() {
  return (
    <>
      <NavBar />

      {/* HERO */}
      <section className="hero" id="top">
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

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
            >
              Spend what&apos;s
              <span className="hl">left after saving.</span>
            </motion.h1>

            <motion.p
              className="hero-sub"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.2 }}
            >
              Save First is a calmer way to handle money. We move savings to the front of
              your month — then show you a spendable balance you can actually trust.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.32 }}
            >
              <AppStoreBadge />
              <a href="#how" className="btn btn-light">See how it works</a>
            </motion.div>

            <motion.div
              className="hero-meta"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.44 }}
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

          <motion.div
            className="phone-stack"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ ...spring, delay: 0.2 }}
          >
            <motion.div
              className="float-chip fc-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <div className="icon" style={{ background: "#d6f3e3" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10a65a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div>
                <div className="label">Savings on track</div>
                <div className="val">+$520 this month</div>
              </div>
            </motion.div>

            <motion.div
              className="float-chip fc-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            >
              <div className="icon" style={{ background: "rgba(10,143,234,0.12)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0a8fea" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="label">Pre-Spend Check</div>
                <div className="val">2.4s to decide</div>
              </div>
            </motion.div>

            <div className="phone p1">
              <div className="notch"></div>
              <div className="screen">
                <div className="status">
                  <span>9:41</span>
                  <span className="right">
                    <svg viewBox="0 0 14 9" fill="currentColor"><rect x="0" y="5" width="3" height="4" rx="0.5" /><rect x="4" y="3" width="3" height="6" rx="0.5" /><rect x="8" y="1" width="3" height="8" rx="0.5" /></svg>
                    <span style={{ fontSize: 10 }}>100%</span>
                  </span>
                </div>
                <PhoneGoals />
              </div>
            </div>

            <div className="phone p2">
              <div className="notch"></div>
              <div className="screen">
                <div className="status">
                  <span>9:41</span>
                  <span className="right">
                    <svg viewBox="0 0 14 9" fill="currentColor"><rect x="0" y="5" width="3" height="4" rx="0.5" /><rect x="4" y="3" width="3" height="6" rx="0.5" /><rect x="8" y="1" width="3" height="8" rx="0.5" /></svg>
                    <span style={{ fontSize: 10 }}>100%</span>
                  </span>
                </div>
                <PhoneHome />
              </div>
            </div>

            <div className="phone p3">
              <div className="notch"></div>
              <div className="screen">
                <div className="status">
                  <span>9:41</span>
                  <span className="right">
                    <svg viewBox="0 0 14 9" fill="currentColor"><rect x="0" y="5" width="3" height="4" rx="0.5" /><rect x="4" y="3" width="3" height="6" rx="0.5" /><rect x="8" y="1" width="3" height="8" rx="0.5" /></svg>
                    <span style={{ fontSize: 10 }}>100%</span>
                  </span>
                </div>
                <PhoneCheck />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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
              {
                viz: (
                  <div className="viz viz-1">
                    <svg viewBox="0 0 240 120" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
                          <stop offset="0" stopColor="var(--brand-2)" />
                          <stop offset="1" stopColor="var(--brand)" />
                        </linearGradient>
                      </defs>
                      <rect x="20" y="44" width="200" height="32" rx="16" fill="var(--line)" />
                      <rect x="20" y="44" width="200" height="32" rx="16" fill="url(#g1)" />
                      <text x="120" y="65" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Poppins">Income · $3,200</text>
                      <circle cx="40" cy="60" r="6" fill="white" />
                    </svg>
                  </div>
                ),
                n: "1",
                title: "Tell us what comes in",
                body: "Add your income and the bills you can't skip — rent, subscriptions, utilities. Two minutes, no bank linking.",
              },
              {
                viz: (
                  <div className="viz viz-2">
                    <div className="pill-stack">
                      <div className="pill a"></div>
                      <div className="pill b"></div>
                      <div className="pill c"></div>
                      <div className="pill a" style={{ background: "var(--brand)", width: "75%" }}></div>
                    </div>
                  </div>
                ),
                n: "2",
                title: "Save first, automatically",
                body: "Set a savings target — a fixed dollar amount or a percent of income. It's allocated before anything else is spendable.",
              },
              {
                viz: (
                  <div className="viz viz-3">
                    <div className="big-num">$2,847</div>
                    <div className="check">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                ),
                n: "3",
                title: "Spend what's left, freely",
                body: "Your spendable balance is the truth — everything else is taken care of. Buy the coffee. We did the math.",
              },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.12}>
                <motion.div
                  className="how-step"
                  whileHover={{ y: -6, transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
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
              <motion.div whileHover={{ y: -8, rotate: -1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}>
                <PhoneFrame><PhoneHome /></PhoneFrame>
              </motion.div>
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
              <motion.div whileHover={{ y: -8, rotate: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}>
                <PhoneFrame><PhoneCheck /></PhoneFrame>
              </motion.div>
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
              <motion.div whileHover={{ y: -8, rotate: -1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}>
                <PhoneFrame><PhoneGoals /></PhoneFrame>
              </motion.div>
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
              <motion.div whileHover={{ y: -8, rotate: 1, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}>
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
              </motion.div>
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
                whileHover={{ y: -6, boxShadow: "0 24px 56px -12px rgba(18,23,42,0.14)", transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              >
                <h3>Free</h3>
                <p className="blurb">The Save-First essentials, forever.</p>
                <div className="amt">
                  <span className="n">$0</span>
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
                whileHover={{ y: -6, boxShadow: "0 24px 56px -12px rgba(10,143,234,0.35)", transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] } }}
              >
                <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", flex: 1 }}>
                  <span className="price-tag">Most popular</span>
                  <h3>Pro</h3>
                  <p className="blurb">For when money has more moving parts.</p>
                  <div className="amt">
                    <span className="n">$4.99</span>
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
