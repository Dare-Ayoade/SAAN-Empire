"use client";

import { useState, useEffect, useRef } from "react";

const SLIDES = [
  {
    eyebrow: "Saan Empire",
    headline: "One space.",
    image:
      "https://framerusercontent.com/images/ErqDrTdk8OEzJzm8dmEpuGQQ3OQ.jpg",
  },
  {
    eyebrow: "Saan Empire",
    headline: "Two experiences.",
    image:
      "https://framerusercontent.com/images/D3bcyMdfALib0zK12onNrhXtKQ.jpg",
  },
  {
    eyebrow: "Saan Empire",
    headline: "Every kind of night.",
    image:
      "https://framerusercontent.com/images/IKL3wOqjrtC6riui90Ffsi5fPF4.jpg",
  },
];

const TIERS = [
  { id: "gaming", label: "Gaming Access", sub: "Day floor, all consoles", price: 20 },
  { id: "hookah", label: "Hookah Access", sub: "Nightly lounge entry", price: 25 },
  { id: "tournament", label: "Tournament Entry", sub: "Weekly brackets", price: 15 },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [navOpen, setNavOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [checkingOut, setCheckingOut] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, []);

  function goTo(i) {
    clearInterval(timerRef.current);
    setCurrent(i);
  }

  function toggleTier(id) {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
    );
  }

  const total = TIERS.filter((t) => selected.includes(t.id)).reduce(
    (sum, t) => sum + t.price,
    0
  );

  async function handleCheckout() {
    // Placeholder — payment processing (Square) and booking (JotForm)
    // integration goes here once those accounts/credentials are ready.
    alert(
      `Selected: ${selected.join(", ")} — Est. $${total}/mo.\n\nCheckout isn't wired up yet — this will connect to Square once integration begins.`
    );
  }

  return (
    <>
      <div className="topbar">
        <div className="wordmark">
          SAAN<span className="dot">.</span>
        </div>
        <nav className="desktop-nav">
          <a href="#gaming">Gaming</a>
          <a href="#hookah">Hookah</a>
          <a href="#membership">Membership</a>
          <a href="#visit">Visit</a>
        </nav>
        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setNavOpen(true)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`mobile-nav ${navOpen ? "open" : ""}`}>
        <button
          onClick={() => setNavOpen(false)}
          style={{ alignSelf: "flex-end", marginBottom: "2rem" }}
          aria-label="Close menu"
        >
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: "0.8rem", color: "var(--grey)" }}>
            CLOSE ✕
          </span>
        </button>
        <a href="#gaming" onClick={() => setNavOpen(false)}>Gaming</a>
        <a href="#hookah" onClick={() => setNavOpen(false)}>Hookah</a>
        <a href="#membership" onClick={() => setNavOpen(false)}>Membership</a>
        <a href="#visit" onClick={() => setNavOpen(false)}>Visit</a>
        <span className="mono">382 Main St, East Orange NJ</span>
      </nav>

      <div className="site-border">
        {/* CAROUSEL */}
        <section className="carousel" aria-label="Introducing Saan Empire">
          {SLIDES.map((slide, i) => (
            <div key={i} className={`slide ${i === current ? "active" : ""}`}>
              <div
                className="slide-photo"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="slide-copy">
                <span className="slide-eyebrow">{slide.eyebrow}</span>
                <h1 className="slide-headline">{slide.headline}</h1>
              </div>
            </div>
          ))}
          <button
            className="carousel-arrow prev"
            onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            className="carousel-arrow next"
            onClick={() => goTo((current + 1) % SLIDES.length)}
            aria-label="Next slide"
          >
            →
          </button>
          <div className="carousel-ui">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                className={`carousel-dot ${i === current ? "active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </section>

        {/* DAY/NIGHT QUICK SPLIT */}
        <section className="hero">
          <a className="hero-panel gaming" href="#gaming">
            <span className="hero-eyebrow">Day</span>
            <h1>Gaming Lounge</h1>
            <div className="hero-time mono">MON–THU · 3PM–8PM</div>
            <span className="hero-cta">Enter →</span>
          </a>
          <a className="hero-panel hookah" href="#hookah">
            <span className="hero-eyebrow">Night</span>
            <h1>Hookah Lounge</h1>
            <div className="hero-time mono">NIGHTLY · 8PM–LATE</div>
            <span className="hero-cta">Enter →</span>
          </a>
        </section>

        {/* HOURS */}
        <section className="hours">
          <div className="hours-inner">
            <span className="hours-title">Opening Hours</span>
            <div className="hours-row">
              <span className="day">Gaming — Mon–Thu</span>
              <span className="time">3:00PM – 8:00PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Hookah — Mon–Thu</span>
              <span className="time">8:00PM – 11:00PM</span>
            </div>
            <div className="hours-row">
              <span className="day">Hookah — Fri–Sat</span>
              <span className="time">8:00PM – 2:00AM</span>
            </div>
            <div className="hours-row closed">
              <span className="day">Sunday</span>
              <span className="time">Closed</span>
            </div>
          </div>
        </section>

        {/* GAMING */}
        <section className="section gaming-sec" id="gaming">
          <div className="section-head">
            <span className="section-eyebrow">01 — Gaming</span>
            <h2>Play by day.</h2>
          </div>
          <div className="section-body">
            <p className="desc">
              Consoles for every crew. PS5 and Xbox stations, weekly
              tournaments, and a floor built for kids and dads alike — ages 0
              to 16 welcome.
            </p>
            <div className="tag-row">
              <span className="tag">PS5 & Xbox</span>
              <span className="tag">Tournaments</span>
              <span className="tag">Ages 0–16</span>
            </div>
            <a className="sec-cta" href="#membership">Become a member →</a>
          </div>
        </section>

        {/* HOOKAH */}
        <section className="section hookah-sec" id="hookah">
          <div className="section-head">
            <span className="section-eyebrow">02 — Hookah</span>
            <h2>Unwind by night.</h2>
          </div>
          <div className="section-body">
            <p className="desc">
              When the sun drops, the space shifts. Premium hookah, low
              light, and VIP seating for the crew that stays late.
            </p>
            <div className="tag-row">
              <span className="tag">Premium Hookah</span>
              <span className="tag">VIP Seating</span>
              <span className="tag">BYOB</span>
            </div>
            <div className="note-line">BYOB — small fee applies</div>
            <a className="sec-cta" href="#visit">Reserve a spot →</a>
          </div>
        </section>

        {/* MEMBERSHIP — interactive tier builder */}
        <section className="section membership" id="membership">
          <div className="section-head">
            <span className="section-eyebrow" style={{ color: "var(--red)" }}>
              03 — Membership
            </span>
            <h2>Choose what you want.</h2>
          </div>
          <div className="section-body">
            <p className="desc">
              Build a membership around how you actually use the space. Pick
              your access, stack tournament entry, and watch your number
              update.
            </p>
            <div className="tier-builder">
              <div className="tier-options">
                {TIERS.map((tier) => {
                  const active = selected.includes(tier.id);
                  return (
                    <button
                      key={tier.id}
                      className={`tier-option ${active ? "active" : ""}`}
                      onClick={() => toggleTier(tier.id)}
                    >
                      <span className="info">
                        <span>{tier.label}</span>
                        <span className="sub">{tier.sub}</span>
                      </span>
                      <span className="price">${tier.price}</span>
                      <span className="check"></span>
                    </button>
                  );
                })}
              </div>
              <div className="tier-total">
                <span className="mono per">Estimated Monthly</span>
                <span className="amount">${total}/mo</span>
              </div>
              <button
                className="checkout-btn"
                disabled={selected.length === 0 || checkingOut}
                onClick={handleCheckout}
              >
                {checkingOut ? "Redirecting…" : "Continue to Checkout →"}
              </button>
            </div>
          </div>
        </section>

        {/* POWER CALLOUT */}
        <div className="power-callout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M13 2 L6 13 h5 l-2 9 9-13h-6z" strokeLinejoin="round" />
          </svg>
          <p>
            <strong>Phone dead?</strong> Grab a Saan power bank on-site —
            scan, charge, go.
          </p>
        </div>

        {/* VISIT */}
        <section className="visit-grid" id="visit">
          <div>
            <span className="section-eyebrow" style={{ color: "var(--grey-light)" }}>
              04 — Visit
            </span>
            <h2>Find the space.</h2>
            <div style={{ marginTop: "1.5rem" }}>
              <div className="visit-detail">
                <span className="l">Address</span>
                <span className="v">
                  382 Main Street
                  <br />
                  East Orange, NJ 07018
                </span>
              </div>
              <div className="visit-detail">
                <span className="l">Phone</span>
                <span className="v">
                  <a href="tel:+18627042916">(862) 704-2916</a>
                </span>
              </div>
              <div className="visit-detail">
                <span className="l">Book</span>
                <span className="v">
                  <a href="mailto:events@saanempire.com">
                    Reserve the space for private events →
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="map-card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
              <circle cx="12" cy="9.5" r="2.4" />
            </svg>
            <p>Live map + directions on final build</p>
          </div>
        </section>

        <footer>
          <div className="wordmark" style={{ fontSize: "0.95rem" }}>
            SAAN<span className="dot">.</span>
          </div>
          <div className="foot-links">
            <a href="#gaming">Gaming</a>
            <a href="#hookah">Hookah</a>
            <a href="#membership">Membership</a>
            <a href="#visit">Visit</a>
          </div>
          <div className="foot-note">
            © 2026 Saan Empire — East Orange, NJ. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
