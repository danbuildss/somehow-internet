"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

const HEADLINE = "SOMEHOW";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const rgb =
      getComputedStyle(document.documentElement)
        .getPropertyValue("--particle-rgb")
        .trim() || "233, 233, 231";

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
    }

    let particles: Particle[] = [];
    let animFrameId: number;
    let isVisible = true;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          opacity: Math.random() * 0.08 + 0.02,
          size: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb}, ${p.opacity})`;
        ctx.fill();
      }
    };

    const animate = () => {
      if (isVisible) draw();
      animFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0 }
    );

    const handleResize = () => {
      resize();
      initParticles();
    };

    resize();
    initParticles();
    observer.observe(canvas);
    animFrameId = requestAnimationFrame(animate);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animFrameId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-10 pt-28 pb-20">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs tracking-widest uppercase mb-10"
          style={{ color: "var(--text-2)" }}
        >
          Somehow Internet
        </motion.p>

        {/* Main headline with letter-blur */}
        <h1
          className="font-bold tracking-tighter leading-none mb-8"
          style={{
            fontSize: "clamp(76px, 17.5vw, 230px)",
            color: "var(--text)",
            lineHeight: 0.9,
          }}
          aria-label="Somehow"
        >
          {HEADLINE.split("").map((letter, i) => (
            <motion.span
              key={i}
              initial={
                prefersReduced
                  ? { opacity: 1 }
                  : { opacity: 0, filter: "blur(14px)", y: 20 }
              }
              animate={
                prefersReduced
                  ? { opacity: 1 }
                  : { opacity: 1, filter: "blur(0px)", y: 0 }
              }
              transition={{
                duration: 0.9,
                delay: 0.25 + i * 0.07,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{ display: "inline-block" }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl font-medium mb-5 max-w-xl"
          style={{ color: "var(--text-2)" }}
        >
          Open-source products for the onchain economy.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm leading-relaxed mb-10 max-w-md"
          style={{ color: "var(--text-2)" }}
        >
          An independent internet product company building open-source products
          for the onchain economy.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: prefersReduced ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-3"
        >
          <HeroButton href="#products" primary>
            See our products →
          </HeroButton>
          <HeroButton
            href="https://x.com/danbuildss"
            target="_blank"
            rel="noopener noreferrer"
          >
            Follow the build →
          </HeroButton>
        </motion.div>

        {/* Status */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex items-center gap-2 mt-16 text-xs"
          style={{ color: "var(--text-3)" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{
              backgroundColor: "var(--green)",
              animation: prefersReduced
                ? "none"
                : "blink 1.2s ease-in-out infinite",
            }}
          />
          currently shipping from Nigeria → internet
        </motion.div>
      </div>
    </section>
  );
}

function HeroButton({
  href,
  children,
  primary,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-sm transition-opacity hover:opacity-80"
      style={
        primary
          ? {
              backgroundColor: "var(--text)",
              color: "var(--bg)",
            }
          : {
              border: "1px solid var(--border-mid)",
              color: "var(--text)",
            }
      }
    >
      {children}
    </a>
  );
}
