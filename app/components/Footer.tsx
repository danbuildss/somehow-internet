"use client";

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-10 py-8"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-xs" style={{ color: "var(--text-3)" }}>
          Somehow Internet © 2026 / Built by Dan Ewurum
        </p>

        <div className="flex items-center gap-5">
          <FooterLink
            href="https://x.com/danbuildss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (formerly Twitter)"
          >
            X
          </FooterLink>
          <FooterLink
            href="https://github.com/danbuildss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            GitHub
          </FooterLink>
          <FooterLink
            href="mailto:hello.danbuildss@gmail.com"
            aria-label="Email"
          >
            Email
          </FooterLink>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  children,
  target,
  rel,
  "aria-label": ariaLabel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  "aria-label"?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className="text-xs transition-colors"
      style={{ color: "var(--text-3)" }}
      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-2)")}
      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
    >
      {children}
    </a>
  );
}
