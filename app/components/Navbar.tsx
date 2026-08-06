export default function Navbar() {
  return (
    <nav className="site-nav" id="nav" aria-label="Main navigation">
      <a href="#" className="nav-logo" aria-label="Somehow Internet — home">
        Somehow
      </a>
      <ul className="nav-links" role="list">
        <li><a href="#products">Products</a></li>
        <li><a href="#about">About</a></li>
        <li>
          <a
            href="https://x.com/danbuildss"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            X ↗
          </a>
        </li>
      </ul>
    </nav>
  );
}
