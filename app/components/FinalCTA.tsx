import { XIcon, TelegramIcon, EmailIcon } from "./Icons";
import React from "react";

export default function FinalCTA() {
  return (
    <section className="section" aria-label="Get in touch">
      <h2
        className="cta-h reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        Let&apos;s see what happens.
      </h2>
      <p
        className="cta-desc reveal"
        style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}
      >
        Follow the products, experiments and lessons as we keep shipping.
      </p>
      <div
        className="cta-btns reveal"
        style={{ "--reveal-delay": "0.2s" } as React.CSSProperties}
        role="group"
      >
        <a
          href="https://t.me/somehowinternet"
          className="btn btn-solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TelegramIcon size={14} />
          Join on Telegram
        </a>
        <a
          href="https://x.com/danbuildss"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          <XIcon size={13} />
          Follow on X
        </a>
        <a href="mailto:hello.danbuildss@gmail.com" className="btn btn-outline">
          <EmailIcon size={14} />
          Get in touch
        </a>
      </div>
    </section>
  );
}
