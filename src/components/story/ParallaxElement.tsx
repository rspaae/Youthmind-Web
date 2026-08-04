"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Y translation offset multiplier
  fadeIn?: boolean;
  scaleUp?: boolean;
  className?: string;
}

export const ParallaxElement: React.FC<ParallaxElementProps> = ({
  children,
  speed = 50,
  fadeIn = false,
  scaleUp = false,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [fadeIn ? 0 : 1, 1, 1, fadeIn ? 0 : 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [scaleUp ? 0.92 : 1, 1]);

  return (
    <motion.div ref={ref} style={{ y, opacity, scale }} className={className}>
      {children}
    </motion.div>
  );
};

export default ParallaxElement;
