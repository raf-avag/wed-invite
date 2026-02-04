"use client";

import { useEffect, useMemo, useState } from "react";

const RSVP_DEFAULTS = {
  date: "Saturday, June 15, 2024",
  location: "The Grand Ballroom • Pasadena, CA"
};

const SCHEDULE = [
  {
    title: "Welcome Dinner",
    time: "Friday, June 14 · 7:00 PM",
    description: "Join us for an intimate dinner to kick off the celebration."
  },
  {
    title: "Wedding Ceremony",
    time: "Saturday, June 15 · 4:00 PM",
    description: "A heartfelt ceremony followed by cocktails and sunset photos."
  },
  {
    title: "Reception",
    time: "Saturday, June 15 · 6:00 PM",
    description: "Dinner, dancing, and a night full of surprises."
  }
];

const DETAILS = [
  {
    title: "Venue",
    detail: "The Grand Ballroom",
    subtext: "123 Celebration Ave, Pasadena, CA"
  },
  {
    title: "Attire",
    detail: "Black Tie Garden",
    subtext: "Think elegant with a touch of floral."
  },
  {
    title: "Stay",
    detail: "Rosewood Hotel",
    subtext: "Room block available until May 1."
  }
];

export default function Home() {
  const [guestName, setGuestName] = useState("");

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
    document.title = "Rafayel & Anushik | Wedding";
  }, []);

  const greeting = useMemo(
    () => (guestName ? `Dear ${guestName},` : "Dear loved ones,"),
    [guestName]
  );

  return (
    <main className="site">
      <div className="video-background" aria-hidden="true">
        <video autoPlay muted loop playsInline>
          <source
            src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <header className="hero" id="top">
        <div className="hero-content">
          <p className="hero-eyebrow">You are invited to celebrate</p>
          <h1 className="hero-title">
            <span className="script-stroke" aria-hidden="true">
              Rafayel &amp; Anushik
            </span>
            <span className="script-fill">Rafayel &amp; Anushik</span>
          </h1>
          <p className="hero-subtitle">{RSVP_DEFAULTS.date}</p>
          <p className="hero-location">{RSVP_DEFAULTS.location}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#rsvp">
              RSVP
            </a>
            <a className="btn btn-outline" href="#details">
              View Details
            </a>
          </div>
        </div>
        <div className="hero-panel">
          <div className="hero-panel-inner">
            <span className="hero-panel-title">The Wedding Day</span>
            <h2>June 15, 2024</h2>
            <p>
              An evening of vows, joyful tears, and dancing under the stars.
            </p>
            <div className="hero-panel-tags">
              <span>Garden Ceremony</span>
              <span>Golden Hour</span>
              <span>Live Band</span>
            </div>
          </div>
        </div>
      </header>

      <section className="invitation" aria-label="Invitation message">
        <div className="invitation-card">
          <p className="invitation-greeting">{greeting}</p>
          <p>
            With hearts full of love and gratitude, we invite you to celebrate
            our wedding. Your presence is the greatest gift, and we cannot wait
            to share this unforgettable weekend with you.
          </p>
          <p className="invitation-signature">With love, Rafayel &amp; Anushik</p>
        </div>
      </section>

      <section className="details" id="details">
        <div className="section-heading">
          <p>Weekend Essentials</p>
          <h2>The Details</h2>
        </div>
        <div className="details-grid">
          {DETAILS.map((detail) => (
            <article className="detail-card" key={detail.title}>
              <h3>{detail.title}</h3>
              <p className="detail-main">{detail.detail}</p>
              <p className="detail-sub">{detail.subtext}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule" id="schedule">
        <div className="section-heading">
          <p>Plan your stay</p>
          <h2>Weekend Schedule</h2>
        </div>
        <div className="schedule-list">
          {SCHEDULE.map((item) => (
            <article className="schedule-card" key={item.title}>
              <h3>{item.title}</h3>
              <p className="schedule-time">{item.time}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gallery" aria-label="Gallery">
        <div className="section-heading">
          <p>Moments to remember</p>
          <h2>Our Journey</h2>
        </div>
        <div className="gallery-grid">
          <div className="gallery-card gallery-one" />
          <div className="gallery-card gallery-two" />
          <div className="gallery-card gallery-three" />
        </div>
      </section>

      <section className="rsvp" id="rsvp">
        <div className="section-heading">
          <p>Kindly respond by May 1</p>
          <h2>RSVP</h2>
        </div>
        <div className="rsvp-content">
          <form className="rsvp-form">
            <div className="form-row">
              <label htmlFor="fullName">Full name</label>
              <input
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                defaultValue={guestName}
                required
              />
            </div>
            <div className="form-row">
              <label htmlFor="attendance">Will you attend?</label>
              <select id="attendance" name="attendance" required>
                <option value="">Select one</option>
                <option value="yes">Yes, with joy</option>
                <option value="no">Regretfully, no</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="guests">Additional guests</label>
              <select id="guests" name="guests" required>
                <option value="0">Just me</option>
                <option value="+1">+1</option>
                <option value="+2">+2</option>
              </select>
            </div>
            <div className="form-row">
              <label htmlFor="notes">Notes for the couple</label>
              <textarea
                id="notes"
                name="notes"
                placeholder="Dietary restrictions, song requests, or warm wishes"
                rows={4}
              />
            </div>
            <button className="btn btn-primary" type="submit">
              Send RSVP
            </button>
          </form>
          <div className="rsvp-card">
            <h3>Event Address</h3>
            <p>123 Celebration Ave</p>
            <p>Pasadena, CA 91101</p>
            <div className="rsvp-divider" />
            <h3>Contact</h3>
            <p>rsvp@rafayel-anushik.com</p>
            <p>(555) 123-4567</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>Thank you for being part of our story.</p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
