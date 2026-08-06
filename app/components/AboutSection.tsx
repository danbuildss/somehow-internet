export default function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        03 / About
      </p>
      <div
        className="about-grid reveal"
        style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
      >
        <div className="about-body">
          <p>
            Somehow Internet is a small independent product company focused on
            open-source software, onchain finance and emerging internet
            infrastructure.
          </p>
          <p className="strong">Based in Nigeria. Built for everywhere.</p>
        </div>
        <div className="about-aside" aria-label="Focus areas">
          <p className="aside-label">Focus</p>
          <p className="aside-item">Open-source software</p>
          <p className="aside-item">Onchain finance</p>
          <p className="aside-item">Internet infrastructure</p>
          <p className="aside-item">Media</p>
        </div>
      </div>
    </section>
  );
}
