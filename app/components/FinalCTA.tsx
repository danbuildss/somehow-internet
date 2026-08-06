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
          href="https://x.com/danbuildss"
          className="btn btn-solid"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow on X
        </a>
        <a href="mailto:hello.danbuildss@gmail.com" className="btn btn-outline">
          Get in touch
        </a>
      </div>
    </section>
  );
}
