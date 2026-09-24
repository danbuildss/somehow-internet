import { XIcon, GitHubIcon, TelegramIcon } from "./Icons";

export default function Footer() {
  return (
    <footer aria-label="Site footer">
      <span className="footer-copy">
        Somehow Internet © 2026 / Built by Dan Ewurum
      </span>
      <nav className="footer-right" aria-label="Footer links">
        <a
          href="https://x.com/somehowinternet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Somehow Internet on X"
        >
          <XIcon size={13} />
        </a>
        <a
          href="https://t.me/somehowinternet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Somehow Internet on Telegram"
        >
          <TelegramIcon size={13} />
        </a>
        <a
          href="https://github.com/somehowinternet"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Somehow Internet on GitHub"
        >
          <GitHubIcon size={13} />
        </a>
      </nav>
    </footer>
  );
}
