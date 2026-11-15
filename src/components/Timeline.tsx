"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef, type ReactNode } from "react";

/** Linha do tempo cuja linha se preenche conforme a rolagem. */
export function Timeline({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <ol ref={ref} className="relative">
      <span className="absolute bottom-2 left-[5px] top-2 w-px bg-line sm:left-[calc(11rem+5px)]" aria-hidden="true" />
      {!reduce && (
        <motion.span
          style={{ scaleY }}
          className="absolute bottom-2 left-[5px] top-2 w-px origin-top bg-gradient-to-b from-ok via-accent to-accent-2 sm:left-[calc(11rem+5px)]"
          aria-hidden="true"
        />
      )}
      {children}
    </ol>
  );
}
