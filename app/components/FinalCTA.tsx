import ScrollReveal from "./ScrollReveal";

export default function FinalCTA() {
  return (
    <section
      className="py-24 md:py-36 px-6 md:px-10"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2
            className="text-4xl md:text-6xl font-semibold tracking-tight mb-6"
            style={{ color: "var(--text)" }}
          >
            Let&apos;s see what happens.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.08}>
          <p
            className="text-sm leading-relaxed mb-10 max-w-md"
            style={{ color: "var(--text-2)" }}
          >
            We&apos;re building in public. Follow the journey, contribute to
            what we&apos;re making, or just say hello.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.14}>
          <div className="flex flex-wrap gap-3">
            <CTAButton
              href="https://x.com/danbuildss"
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              Follow on X →
            </CTAButton>
            <CTAButton
              href="https://github.com/danbuildss"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </CTAButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function CTAButton({
  href,
  children,
  primary,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-80"
      style={
        primary
          ? {
              backgroundColor: "var(--text)",
              color: "var(--bg)",
            }
          : {
              border: "1px solid var(--border-mid)",
              color: "var(--text)",
            }
      }
    >
      {children}
    </a>
  );
}
