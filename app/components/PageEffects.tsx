"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    // ── NAV SCROLL ──
    const nav = document.getElementById("nav");
    const handleScroll = () => {
      nav?.classList.toggle("scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    // ── PARTICLES ──
    let rafId: number | null = null;
    const canvas = document.getElementById("hero-canvas") as HTMLCanvasElement | null;
    let heroObs: IntersectionObserver | null = null;
    let handleResize: (() => void) | null = null;

    if (canvas && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        let W = 0, H = 0;
        let visible = true;

        interface Particle { x: number; y: number; vx: number; vy: number; r: number; a: number; }
        const particles: Particle[] = [];

        const resize = () => {
          const hero = canvas.parentElement!;
          W = canvas.width = hero.offsetWidth;
          H = canvas.height = hero.offsetHeight;
        };

        const mkP = (): Particle => ({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.14,
          vy: (Math.random() - 0.5) * 0.11,
          r: Math.random() * 0.9 + 0.3,
          a: Math.random() * 0.09 + 0.03,
        });

        const draw = () => {
          if (!visible) { rafId = null; return; }
          ctx.clearRect(0, 0, W, H);
          const rgb =
            getComputedStyle(document.documentElement)
              .getPropertyValue("--particle-rgb")
              .trim() || "233,233,231";
          for (const p of particles) {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${rgb},${p.a})`;
            ctx.fill();
            p.x += p.vx; p.y += p.vy;
            if (p.x < -4)   p.x = W + 4;
            if (p.x > W + 4) p.x = -4;
            if (p.y < -4)   p.y = H + 4;
            if (p.y > H + 4) p.y = -4;
          }
          rafId = requestAnimationFrame(draw);
        };

        heroObs = new IntersectionObserver((entries) => {
          visible = entries[0].isIntersecting;
          if (visible && !rafId) rafId = requestAnimationFrame(draw);
        }, { threshold: 0 });
        heroObs.observe(canvas.parentElement!);

        handleResize = () => resize();
        window.addEventListener("resize", handleResize, { passive: true });

        resize();
        for (let i = 0; i < 80; i++) particles.push(mkP());
        draw();
      }
    }

    // ── PHILOSOPHY WORD BLUR ──
    const q = document.getElementById("philosophy-q");
    let qObs: IntersectionObserver | null = null;
    if (q) {
      const words = (q.textContent ?? "").trim().split(/\s+/);
      q.innerHTML = words
        .map((w, i) => `<span class="word-blur" style="--wi:${i}">${w}</span>`)
        .join(" ");
      qObs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            q.classList.add("words-in");
            qObs!.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      qObs.observe(q);
    }

    // ── SCROLL REVEALS ──
    const reveals = document.querySelectorAll(".reveal");
    const revObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            revObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach((el) => revObs.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
      if (heroObs) heroObs.disconnect();
      if (handleResize) window.removeEventListener("resize", handleResize);
      if (qObs) qObs.disconnect();
      revObs.disconnect();
    };
  }, []);

  return null;
}
