export default function CreatorSection() {
  return (
    <section className="section" id="creator" aria-labelledby="founder-name-h">
      <p
        className="eyebrow reveal"
        style={{ "--reveal-delay": "0s" } as React.CSSProperties}
      >
        Creator
      </p>
      <div className="reveal" style={{ "--reveal-delay": "0.1s" } as React.CSSProperties}>
        <h2 className="founder-name" id="founder-name-h">
          Dan Ewurum
        </h2>
        <p className="founder-role">Creator at Somehow Internet</p>
        <p className="founder-bio">
          Somehow Internet is currently run by Dan Ewurum, an internet-native
          creator working across software, AI, onchain finance, media and business.
        </p>
        <p className="founder-bio">
          Currently building Luca and CORTX.
        </p>
        <div className="founder-links" role="group" aria-label="Dan's links">
          <a
            href="https://x.com/danbuildss"
            className="founder-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dan on X"
          >
            X
          </a>
          <a
            href="https://github.com/danbuildss"
            className="founder-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dan on GitHub"
          >
            GitHub
          </a>
          <a
            href="mailto:hello.danbuildss@gmail.com"
            className="founder-link"
            aria-label="Email Dan"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
