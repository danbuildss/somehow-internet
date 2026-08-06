"use client";

import ScrollReveal from "./ScrollReveal";

export default function CreatorSection() {
  return (
    <section
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p
            className="text-xs tracking-widest uppercase mb-12"
            style={{ color: "var(--text-2)" }}
          >
            Creator
          </p>
        </ScrollReveal>

        <div className="max-w-2xl">
          <ScrollReveal delay={0.05}>
            <h2
              className="text-3xl md:text-5xl font-semibold tracking-tight mb-3"
              style={{ color: "var(--text)" }}
            >
              Dan Ewurum
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <p
              className="text-sm mb-8"
              style={{ color: "var(--text-2)" }}
            >
              Creator at Somehow Internet
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "var(--text-2)" }}
            >
              Building internet products from Lagos, Nigeria. Started Somehow
              Internet to create the tooling and media that the onchain economy
              is missing. Shipping in public, one product at a time.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-5">
              <SocialLink
                href="https://x.com/danbuildss"
                label="X"
                aria="Follow @danbuildss on X"
              />
              <span style={{ color: "var(--border-mid)" }}>·</span>
              <SocialLink
                href="https://github.com/danbuildss"
                label="GitHub"
                aria="danbuildss on GitHub"
              />
              <span style={{ color: "var(--border-mid)" }}>·</span>
              <SocialLink
                href="mailto:hello.danbuildss@gmail.com"
                label="Email"
                aria="Email Dan"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  aria,
}: {
  href: string;
  label: string;
  aria: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
      aria-label={aria}
      className="text-sm transition-colors"
      style={{ color: "var(--text-2)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-2)")}
    >
      {label}
    </a>
  );
}
