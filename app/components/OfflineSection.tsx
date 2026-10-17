import React from "react";

export default function OfflineSection() {
  return (
    <section className="section" id="offline" aria-labelledby="offline-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        04 / Offline
      </p>
      <div
        className="reveal"
        style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
      >
        <h2 className="offline-heading" id="offline-h">
          OFFLINE
        </h2>
        <p className="offline-tagline">Internet people, offline.</p>
        <p className="offline-desc">
          A small gathering for people building things to meet, share what
          they&rsquo;re working on and have real conversations.
        </p>
        <p className="offline-desc">
          No panels. No pitches. No tickets.
        </p>

        <div className="offline-event">
          <p className="offline-event-name">OFFLINE / 001</p>
          <p className="offline-event-detail">Port Harcourt, Nigeria</p>
          <p className="offline-event-detail">November 2026 &middot; 4–7 PM</p>
          <div className="offline-badges">
            <span className="offline-badge">GitHub = Entry</span>
            <span className="offline-badge">Coming November</span>
          </div>
        </div>

        <p className="offline-access">
          If you&rsquo;re shipping, you&rsquo;re in. Your GitHub is your entry.
        </p>
        <p className="offline-desc offline-note">
          Details soon.{" "}
          <a
            href="https://t.me/somehowinternet"
            className="offline-inline-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the Telegram
          </a>{" "}
          to hear first.
        </p>

        <a
          href="/offline"
          className="btn btn-outline"
        >
          Learn about OFFLINE →
        </a>

        <p className="offline-by">by Somehow</p>
      </div>
    </section>
  );
}
