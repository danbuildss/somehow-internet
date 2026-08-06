"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const QUOTE =
  "We don't wait for permission. We build in public, iterate fast, and share everything we learn. The internet rewards consistency over perfection.";

export default function PhilosophySection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();

  const words = QUOTE.split(" ");

  return (
    <section
      className="py-24 md:py-36 px-6 md:px-10"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs tracking-widest uppercase mb-14 md:mb-20"
          style={{ color: "var(--text-2)" }}
        >
          02 / How we work
        </motion.p>

        <div ref={ref} className="max-w-4xl">
          <p
            className="text-2xl md:text-4xl font-semibold leading-snug tracking-tight mb-10"
            style={{ color: "var(--text)" }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={
                  prefersReduced
                    ? { opacity: 1 }
                    : { opacity: 0, filter: "blur(8px)" }
                }
                animate={
                  isInView
                    ? { opacity: 1, filter: "blur(0px)" }
                    : prefersReduced
                    ? { opacity: 1 }
                    : { opacity: 0, filter: "blur(8px)" }
                }
                transition={{
                  duration: 0.45,
                  delay: prefersReduced ? 0 : i * 0.035,
                  ease: "easeOut",
                }}
                style={{ display: "inline-block", marginRight: "0.3em" }}
              >
                {word}
              </motion.span>
            ))}
          </p>

          <motion.p
            initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm leading-relaxed max-w-lg"
            style={{ color: "var(--text-2)" }}
          >
            Each product ships as open-source by default. Every lesson, every
            failure, every small win — published.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
