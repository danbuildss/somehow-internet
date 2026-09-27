import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageEffects from "../components/PageEffects";

export const metadata: Metadata = {
  title: "OFFLINE / 001 — Somehow Internet",
  description:
    "A small gathering for people building things. Port Harcourt, Nigeria. November 2026.",
};

export default function OfflinePage() {
  return (
    <>
      <PageEffects />
      <Navbar />
      <main>
        <section className="offline-page-hero">
          <p className="offline-page-presents">Somehow presents</p>
          <h1 className="offline-page-title">OFFLINE / 001</h1>
          <p className="offline-page-tagline">Internet people, offline.</p>
          <div className="offline-page-meta">
            <span>Port Harcourt, Nigeria</span>
            <span className="offline-page-dot" aria-hidden="true">·</span>
            <span>November 2026 · 4–7 PM</span>
          </div>
        </section>

        <section className="offline-page-section">
          <p className="offline-page-body">
            We spend enough time meeting each other through screens.
          </p>
          <p className="offline-page-body">
            OFFLINE brings a small group of people building things into the same
            room — to meet, show what they&rsquo;re working on and have
            conversations that probably wouldn&rsquo;t happen online.
          </p>
          <p className="offline-page-emphasis">
            No panels. No pitches. No tickets.
          </p>
          <p className="offline-page-body">Bring what you&rsquo;re working on.</p>
        </section>

        <div className="offline-page-rule" role="separator" />

        <section className="offline-page-section">
          <p className="offline-page-label">Entry</p>
          <p className="offline-page-body">OFFLINE is free and application-only.</p>
          <p className="offline-page-access">Your GitHub is your access.</p>
          <p className="offline-page-body">Applications aren&rsquo;t open yet.</p>
          <p className="offline-page-status">Coming November 2026</p>
        </section>

        <div className="offline-page-rule" role="separator" />

        <section className="offline-page-section offline-page-footer-note">
          <p className="offline-page-by">
            OFFLINE is an IRL gathering by{" "}
            <a href="/" className="offline-page-link">Somehow Internet</a>.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
