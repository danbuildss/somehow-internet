import React from "react";

export default function PhilosophySection() {
  return (
    <section className="section" id="media" aria-labelledby="media-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        02 / Media
      </p>
      <div
        className="reveal"
        style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
      >
        <h2 className="media-heading" id="media-h">
          SOMEHOW
        </h2>
        <p className="media-desc">
          Stories from people who somehow found a way.
        </p>
        <p className="media-desc">
          Conversations about the decisions, failures, uncertainty, people, luck
          and turning points behind where someone ended up.
        </p>
        <p className="media-meta">Text &amp; voice note conversations</p>
        <a
          href="https://danbuildsss.substack.com/"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read SOMEHOW →
        </a>
      </div>
    </section>
  );
}
