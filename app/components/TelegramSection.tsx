import { TelegramIcon } from "./Icons";
import React from "react";

export default function TelegramSection() {
  return (
    <section className="section" id="community" aria-labelledby="community-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        Community
      </p>
      <div
        className="reveal"
        style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
      >
        <h2 className="tg-heading" id="community-h">
          The Channel
        </h2>
        <p className="tg-desc">
          We post what we&rsquo;re building, opportunities worth knowing about
          — hackathons, grants, AI moves — and what ships from Somehow.
          No discussion. Just signal.
        </p>
        <ul className="tg-items" role="list">
          <li>Build updates from Somehow</li>
          <li>AI hackathons &amp; grants worth entering</li>
          <li>Products our builders ship</li>
        </ul>
        <a
          href="https://t.me/somehowinternet"
          className="btn btn-solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon size={14} />
          Join on Telegram
        </a>
      </div>
    </section>
  );
}
