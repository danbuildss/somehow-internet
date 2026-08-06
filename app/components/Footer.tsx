export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <div className="footer-left">
        <span className="footer-copy">Somehow Internet © 2026</span>
        <span className="footer-built">Built by Dan Ewurum</span>
      </div>
      <nav className="footer-right" aria-label="Footer links">
        <a
          href="https://x.com/danbuildss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          X
        </a>
        <a
          href="https://github.com/danbuildss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          GitHub
        </a>
        <a href="mailto:hello.danbuildss@gmail.com" aria-label="Email">
          Email
        </a>
      </nav>
    </footer>
  );
}
