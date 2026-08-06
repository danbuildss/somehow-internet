"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ProductRowProps {
  name: string;
  description: string;
  type: string;
  status: string;
  index: number;
}

export default function ProductRow({
  name,
  description,
  type,
  status,
  index,
}: ProductRowProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-7 cursor-default"
      style={{ borderBottom: "1px solid var(--border)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Name + arrow */}
      <div className="flex items-center gap-3 md:w-48 flex-shrink-0">
        <span
          className="text-base font-medium tracking-tight"
          style={{ color: "var(--text)" }}
        >
          {name}
        </span>
        <motion.span
          animate={{ x: hovered ? 5 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-sm"
          style={{ color: "var(--text-2)" }}
          aria-hidden="true"
        >
          →
        </motion.span>
      </div>

      {/* Description */}
      <p
        className="flex-1 text-sm leading-relaxed"
        style={{ color: "var(--text-2)" }}
      >
        {description}
      </p>

      {/* Meta */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <span
          className="text-xs px-2.5 py-1 rounded-sm"
          style={{
            backgroundColor: "var(--border-mid)",
            color: "var(--text-2)",
          }}
        >
          {type}
        </span>
        <span
          className="text-xs"
          style={{ color: "var(--text-3)" }}
        >
          {status}
        </span>
      </div>
    </motion.div>
  );
}
