export default function AboutSection() {
  return (
    <section className="section" id="about" aria-labelledby="about-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        05 / About
      </p>
      <div
        className="about-grid reveal"
        style={{ "--reveal-delay": "0.12s" } as React.CSSProperties}
      >
        <div className="about-body">
          <p>
            Somehow Internet is an independent internet company building things
            around ideas we believe should exist.
          </p>
          <p>
            We build software, work with ambitious internet companies, tell
            stories about people finding their way, and occasionally bring
            internet people into the same room.
          </p>
          <p className="strong">Based in Nigeria. Built for the internet.</p>
        </div>
        <div className="about-aside" aria-label="Focus areas">
          <p className="aside-label">Focus</p>
          <p className="aside-item">Products</p>
          <p className="aside-item">Business</p>
          <p className="aside-item">Media</p>
          <p className="aside-item">Offline</p>
        </div>
      </div>
    </section>
  );
}
