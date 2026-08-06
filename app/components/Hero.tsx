export default function Hero() {
  const letters = ["S", "O", "M", "E", "H", "O", "W"];

  return (
    <section className="hero" aria-label="Introduction">
      <canvas id="hero-canvas" aria-hidden="true" />

      <h1 className="hero-headline" aria-label="SOMEHOW">
        {letters.map((letter, i) => (
          <span
            key={i}
            className="hl-letter"
            style={{ "--i": i } as React.CSSProperties}
          >
            {letter}
          </span>
        ))}
      </h1>

      <p className="hero-sub">We build internet products. Somehow.</p>
      <p className="hero-desc">
        Somehow Internet is an independent company creating open-source software,
        infrastructure and media for the onchain economy.
      </p>

      <div className="hero-btns" role="group" aria-label="Hero actions">
        <a href="#products" className="btn btn-solid">
          See what we&apos;re building
        </a>
        <a
          href="https://x.com/danbuildss"
          className="btn btn-outline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Follow Somehow
        </a>
      </div>

      <div className="hero-status" aria-label="Current status">
        <span className="blink-dot" aria-hidden="true" />
        <span>currently shipping from Nigeria → internet</span>
      </div>
    </section>
  );
}
