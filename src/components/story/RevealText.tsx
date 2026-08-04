"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { clsx } from "clsx";

interface RevealTextProps {
  text: string;
  className?: string;
}

export const RevealText: React.FC<RevealTextProps> = ({ text, className }) => {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <h2
      ref={containerRef}
      className={clsx("flex flex-wrap gap-x-[0.25em] gap-y-[0.1em]", className)}
    >
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;
        // eslint-disable-next-deps
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
        const y = useTransform(scrollYProgress, [start, end], [10, 0]);

        return (
          <motion.span
            key={index}
            style={{ opacity, y }}
            className="inline-block transition-colors duration-200"
          >
            {word}
          </motion.span>
        );
      })}
    </h2>
  );
};

export default RevealText;
