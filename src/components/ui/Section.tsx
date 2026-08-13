"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionProps } from "@/types";
import { clsx } from "clsx";
import { useIsMobile } from "@/hooks/useIsMobile";

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
}) => {
  const isMobile = useIsMobile();

  return (
    <motion.section
      id={id}
      initial={isMobile ? false : { opacity: 0, y: 28 }}
      whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
      viewport={isMobile ? undefined : { once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={clsx(
        "py-14 sm:py-20 md:py-28 lg:py-32 relative overflow-hidden",
        className
      )}
    >
      {children}
    </motion.section>
  );
};

export default Section;
