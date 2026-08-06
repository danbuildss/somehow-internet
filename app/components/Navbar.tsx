"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16">
        <a
          href="#"
          className="text-sm font-medium tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "var(--text)" }}
        >
          Somehow Internet
        </a>

        <div className="flex items-center gap-6 md:gap-8">
          <NavLink href="#products">Products</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink
            href="https://x.com/danbuildss"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="text-sm transition-colors"
      style={{ color: "var(--text-2)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.color = "var(--text)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.color = "var(--text-2)")
      }
    >
      {children}
    </a>
  );
}
