"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionProps } from "@/types";
import { clsx } from "clsx";

export const Section: React.FC<SectionProps> = ({
  id,
  className,
  children,
}) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
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
