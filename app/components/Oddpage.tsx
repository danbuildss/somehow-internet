import React from "react";
import Image from "next/image";
import { XIcon, InstagramIcon, TikTokIcon } from "./Icons";
import oddpageMark from "./oddpage-mark.png";

const ODDPAGE = {
  newsletterUrl: "https://readoddpage.substack.com/",
  socials: [
    { name: "X", handle: "@readoddpage", href: "https://x.com/readoddpage", Icon: XIcon },
    { name: "Instagram", handle: "@readoddpage", href: "https://www.instagram.com/readoddpage/", Icon: InstagramIcon },
    { name: "TikTok", handle: "@readoddpage_", href: "https://www.tiktok.com/@readoddpage_", Icon: TikTokIcon },
  ],
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

      <div className="op-masthead">
        <Image src={oddpageMark} alt="" className="op-mark" loading="eager" />
        <h3 className="op-wordmark" id="oddpage-h">
          Oddpage
        </h3>
      </div>

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
        <a
          href={ODDPAGE.newsletterUrl}
          className="op-btn op-btn-solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Subscribe to the newsletter →
        </a>
        <ul className="op-socials" aria-label="Follow Oddpage">
          {ODDPAGE.socials.map(({ name, handle, href, Icon }) => (
            <li key={name}>
              <a
                href={href}
                className="op-social"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Oddpage on ${name}, ${handle}`}
                title={`${name} · ${handle}`}
              >
                <Icon size={15} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
