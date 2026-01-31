"use client";

import { useEffect } from "react";

const VIDEO_URL =
  "https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4";

export default function Home() {
  useEffect(() => {
    document.title = "Rafayel & Anushik";
  }, []);

  return (
    <main className="hero">
      <div className="video-backdrop">
        <video autoPlay muted loop playsInline>
          <source src={VIDEO_URL} type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-eyebrow">The wedding of</p>
        <h1 className="hero-title">Rafayel &amp; Anushik</h1>
        <p className="hero-subtitle">A celebration of love</p>
      </div>
    </main>
  );
}
