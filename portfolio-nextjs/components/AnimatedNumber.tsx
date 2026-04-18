"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedNumberProps {
  to: number;
  format?: (value: number) => string;
  duration?: number;
}

export default function AnimatedNumber({
  to,
  format = (v) => String(v),
  duration = 1500,
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const startTime = performance.now();
    let rafId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(to * eased);
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setCurrent(to);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, to, duration]);

  return <span ref={ref}>{format(current)}</span>;
}
