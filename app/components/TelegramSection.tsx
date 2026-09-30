import { TelegramIcon } from "./Icons";
import React from "react";

export default function TelegramSection() {
  return (
    <section className="section" id="community" aria-labelledby="community-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        Telegram Channel
      </p>
      <div
        className="reveal"
        style={{ "--reveal-delay": "0.08s" } as React.CSSProperties}
      >
        <h2 className="tg-heading" id="community-h">
          SOMEHOW
        </h2>
        <p className="tg-desc">
          Follow what we&rsquo;re building.
        </p>
        <p className="tg-desc">
          Product updates, experiments, things we&rsquo;re learning and whatever
          is happening inside Somehow.
        </p>
        <p className="tg-desc">No discussion. Just signal.</p>
        <ul className="tg-items" role="list">
          <li>What we&rsquo;re building</li>
          <li>Experiments we&rsquo;re running</li>
          <li>Things worth knowing about</li>
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
