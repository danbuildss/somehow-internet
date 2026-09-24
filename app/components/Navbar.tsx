import { XIcon, TelegramIcon } from "./Icons";

export default function Navbar() {
  return (
    <nav className="site-nav" id="nav" aria-label="Main navigation">
      <a href="#" className="nav-logo" aria-label="Somehow Internet — home">
        Somehow
      </a>
      <ul className="nav-links" role="list">
        <li><a href="#products">Products</a></li>
        <li><a href="#media">Media</a></li>
        <li><a href="#business">Business</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a
            href="https://x.com/danbuildss"
            className="nav-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dan on X"
          >
            <XIcon size={14} />
          </a>
        </li>
        <li>
          <a
            href="https://t.me/somehowinternet"
            className="nav-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Somehow Internet on Telegram"
          >
            <TelegramIcon size={14} />
          </a>
        </li>
      </ul>
    </nav>
  );
}
