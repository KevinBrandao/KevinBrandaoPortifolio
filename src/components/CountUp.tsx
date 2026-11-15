"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";

/** Anima um número (ex.: "6+", "13") de zero até o valor quando entra na tela. */
export function CountUp({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : "";
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });
  const reduce = useReducedMotion();
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.21, 0.47, 0.32, 0.98],
      onUpdate: (v) => setCurrent(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, target]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      <span aria-hidden="true">
        {current}
        {suffix}
      </span>
      <span className="sr-only">{value}</span>
    </span>
  );
}
