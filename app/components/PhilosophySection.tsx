export default function PhilosophySection() {
  return (
    <section className="section" aria-label="How we work">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        02 / How we work
      </p>
      <blockquote>
        <p className="philosophy-q" id="philosophy-q">
          We don&apos;t wait for perfect ideas. We notice what is changing, build
          quickly and let the internet decide what deserves to grow.
        </p>
      </blockquote>
      <p
        className="philosophy-sub reveal"
        style={{ "--reveal-delay": "0.15s" } as React.CSSProperties}
      >
        Media, software and infrastructure—connected by curiosity.
      </p>
    </section>
  );
}
