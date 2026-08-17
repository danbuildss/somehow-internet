import { XIcon, GitHubIcon, TelegramIcon, EmailIcon } from "./Icons";

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <span className="footer-copy">
        Somehow Internet © 2026 / Built by Dan Ewurum
      </span>
      <nav className="footer-right" aria-label="Footer links">
        <a
          href="https://x.com/danbuildss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X"
        >
          <XIcon size={13} />
        </a>
        <a
          href="https://t.me/somehowinternet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <TelegramIcon size={13} />
        </a>
        <a
          href="https://github.com/danbuildss"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon size={13} />
        </a>
        <a href="mailto:hello.danbuildss@gmail.com" aria-label="Email">
          <EmailIcon size={13} />
        </a>
      </nav>
    </footer>
  );
}
