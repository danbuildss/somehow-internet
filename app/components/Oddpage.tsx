import React from "react";
import { XIcon } from "./Icons";

const ODDPAGE = {
  x: "https://x.com/readoddpage",
  handle: "@readoddpage",
  // Set to the final newsletter URL to show the subscribe button.
  newsletterUrl: null as string | null,
  desks: ["Technology", "Business", "AI", "Internet Culture", "Magic Internet Money"],
};

export default function Oddpage() {
  return (
    <article
      className="oddpage reveal"
      aria-labelledby="oddpage-h"
      style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
    >
      <div className="op-strap">
        <span>An independent publication</span>
        <span>by Somehow Internet</span>
      </div>

      <h3 className="op-wordmark" id="oddpage-h">
        Oddpage
      </h3>

      <div className="op-rule" role="presentation" />

      <p className="op-tagline">Interesting things happen on the internet.</p>

      <p className="op-desc">
        Oddpage is an independent editorial publication by Somehow Internet,
        covering technology, business, AI, internet culture, and magic internet
        money.
      </p>

      <ul className="op-desks" aria-label="What Oddpage covers">
        {ODDPAGE.desks.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>

      <div className="op-actions">
        {ODDPAGE.newsletterUrl && (
          <a
            href={ODDPAGE.newsletterUrl}
            className="op-btn op-btn-solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe to the newsletter →
          </a>
        )}
        <a
          href={ODDPAGE.x}
          className={`op-btn ${ODDPAGE.newsletterUrl ? "op-btn-outline" : "op-btn-solid"}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Oddpage on X, ${ODDPAGE.handle}`}
        >
          <XIcon size={13} />
          Follow {ODDPAGE.handle}
        </a>
      </div>
    </article>
  );
}
