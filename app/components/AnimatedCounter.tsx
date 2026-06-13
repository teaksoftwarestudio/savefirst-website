"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { useCountUp } from "./useCountUp";

function format(n: number, decimals: number, separator: boolean) {
  const fixed = n.toFixed(decimals);
  if (!separator) return fixed;
  const [intPart, dec] = fixed.split(".");
  const withSep = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return dec ? `${withSep}.${dec}` : withSep;
}

export default function AnimatedCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  separator = true,
  duration = 1600,
  className,
}: {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  separator?: boolean;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px 0px" });
  const val = useCountUp(value, duration, inView, decimals);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {prefix}
      {format(val, decimals, separator)}
      {suffix}
    </span>
  );
}
