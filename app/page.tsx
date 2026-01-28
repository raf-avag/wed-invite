"use client";

import type { CSSProperties } from "react";
import { useEffect, useMemo, useState } from "react";

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const VIDEO_URL =
  "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [guestName, setGuestName] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const viewport = window.innerHeight;
      const progress = clamp(scrollTop / (viewport * 0.9), 0, 1);
      setScrollProgress(progress);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nameParam =
      params.get("invitee") || params.get("name") || params.get("guest") || "";
    if (nameParam) {
      const decoded = decodeURIComponent(nameParam.replace(/\+/g, " "));
      setGuestName(decoded);
      document.title = `Rafayel & Anushik | ${decoded}`;
      return;
    }
    document.title = "Rafayel & Anushik | RSVP";
  }, []);

  const flapStyle = useMemo(
    () => ({
      transform: `rotateX(${clamp(scrollProgress * 160, 0, 160)}deg)`
    }),
    [scrollProgress]
  );

  const letterShift = useMemo(
    () => ({
      "--letter-shift": `${-clamp(scrollProgress * 80, 0, 80)}px`
    }) as CSSProperties,
    [scrollProgress]
  );

  return (
    <main>
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>

      <section className="hero">
        <div className="envelope-stage">
          <div className="envelope" style={letterShift}>
            <div className="envelope-body" />
            <div className="envelope-letter" />
            <div className="envelope-flap" style={flapStyle} />
            <div className="envelope-detail" />
          </div>
        </div>
        <div className="scroll-hint">
          Scroll down
          <span />
        </div>
      </section>

      <section className="names">
        <svg viewBox="0 0 900 180" role="img" aria-label="Rafayel and Anushik">
          <text x="50%" y="120" textAnchor="middle" className="script-text">
            Rafayel &amp; Anushik
          </text>
        </svg>
      </section>

      <section className="invite-section">
        <div className="invite-card">
          <h2>Kindly RSVP</h2>
          <p>
            {guestName
              ? `Dear ${guestName}, we cannot wait to celebrate with you.`
              : "We cannot wait to celebrate with you."}
          </p>
          <form>
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                defaultValue={guestName}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="attendance">Will you attend?</label>
              <select id="attendance" name="attendance" required>
                <option value="">Select one</option>
                <option value="yes">Yes, I will be there</option>
                <option value="no">Regretfully, no</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="guests">Additional guests</label>
              <select id="guests" name="guests" required>
                <option value="0">Just me</option>
                <option value="+1">+1</option>
                <option value="+2">+2</option>
                <option value="+3">+3</option>
              </select>
            </div>
            <button className="submit-btn" type="submit">
              Send RSVP
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
