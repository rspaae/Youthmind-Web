"use client";

import React, { useRef } from "react";
import { motion, useScroll, MotionValue } from "framer-motion";
import { clsx } from "clsx";

interface ScrollSectionProps {
  id?: string;
  className?: string;
  children: (progress: MotionValue<number>) => React.ReactNode;
}

export const ScrollSection: React.FC<ScrollSectionProps> = ({
  id,
  className,
  children,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  return (
    <section id={id} ref={containerRef} className={clsx("relative overflow-hidden", className)}>
      {children(scrollYProgress)}
    </section>
  );
};

export default ScrollSection;
