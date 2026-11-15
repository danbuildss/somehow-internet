import React from "react";
import Image from "next/image";
import { InstagramIcon, TikTokIcon } from "./Icons";
import oddpageMark from "./oddpage-mark.png";

const ODDPAGE = {
  substack: "https://readoddpage.substack.com/",
  instagram: "https://www.instagram.com/readoddpage/",
  tiktok: "https://www.tiktok.com/@readoddpage_",
  desks: ["Technology", "Business", "AI", "Internet Culture", "Magic Internet Money"],
};

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
        <h2 className="media-heading op-heading" id="media-h">
          <Image src={oddpageMark} alt="" className="op-mark" loading="eager" />
          Oddpage
        </h2>
        <p className="op-tagline">Interesting things happen on the internet.</p>
        <p className="media-desc">
          Oddpage is an independent editorial publication by Somehow Internet,
          covering technology, business, AI, internet culture, and magic internet
          money.
        </p>
        <p className="media-meta">{ODDPAGE.desks.join(" · ")}</p>
        <div className="cta-btns">
          <a
            href={ODDPAGE.substack}
            className="btn btn-solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Subscribe on Substack →
          </a>
          <a
            href={ODDPAGE.instagram}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Oddpage on Instagram, @readoddpage"
          >
            <InstagramIcon size={14} />
            Instagram
          </a>
          <a
            href={ODDPAGE.tiktok}
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Oddpage on TikTok, @readoddpage_"
          >
            <TikTokIcon size={14} />
            TikTok
          </a>
        </div>
      </div>
    </section>
  );
}
