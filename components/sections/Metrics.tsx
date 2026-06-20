"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { metrics } from "@/data/portfolio";

function AnimatedCounter({ value, suffix }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numeric = !isNaN(parseFloat(value)) && isFinite(Number(value));
  const isDecimal = value.includes(".");
  const target = parseFloat(value);
  const [display, setDisplay] = useState(numeric ? "0" : value);

  useEffect(() => {
    if (!numeric || !inView) return;
    const duration = 1600;
    const start = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(isDecimal ? (eased * target).toFixed(1) : Math.floor(eased * target).toString());
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, numeric, target, isDecimal]);

  return (
    <span ref={ref} className={numeric ? "tabular-nums" : ""}>
      {display}{suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-12 px-6 border-y border-border">
      <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
        {metrics.map((m, i) => (
          <div key={m.label} className="text-center sm:text-left">
            <div className="text-2xl font-heading font-bold text-white tabular-nums">
              <AnimatedCounter value={m.value} suffix={m.suffix} />
            </div>
            <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
