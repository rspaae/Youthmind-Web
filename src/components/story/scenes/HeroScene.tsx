"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export const HeroScene: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Logo transform on scroll
  const logoOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const logoY = useTransform(scrollYProgress, [0, 0.5], [0, -30]);

  return (
    <section
      id="hero"
      ref={targetRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0B2527] via-[#0E2A2C] to-[#123638] overflow-hidden pt-16 pb-12"
    >
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[450px] sm:h-[450px] bg-[#4BA0A4]/25 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-[320px] sm:h-[320px] bg-[#59AAAA]/20 rounded-full blur-[90px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center justify-center">
        {/* Centered YM Logo - Moderate & Crisp */}
        <motion.div
          style={isMounted ? { opacity: logoOpacity, scale: logoScale, y: logoY } : { opacity: 1 }}
          suppressHydrationWarning
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-40 sm:w-52 md:w-60 lg:w-64 aspect-square flex items-center justify-center filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.4)]"
          >
            <Image
              src="/assets/logo-ym.png"
              alt="YouthMind Logo"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, (max-width: 1024px) 240px, 256px"
              className="object-contain"
            />
          </motion.div>
        </motion.div>
      </Container>

      {/* Subtle Scroll Hint */}
      <motion.div
        style={isMounted ? { opacity: logoOpacity } : { opacity: 1 }}
        suppressHydrationWarning
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#94D4D4] text-xs tracking-widest uppercase font-medium pointer-events-none opacity-80"
      >
        <span>Scroll untuk jelajahi</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-[#4BA0A4]" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroScene;



