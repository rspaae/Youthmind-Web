"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useTheme } from "@/components/theme/ThemeProvider";

export const HeroScene: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  let isLight = false;

  try {
    const { theme } = useTheme();
    isLight = theme === "light";
  } catch {
    // Fallback if context not available
  }

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

  const logoSrc = isMounted && isLight ? "/assets/logo-ym-light.png" : "/assets/logo-ym.png";

  return (
    <section
      id="hero"
      ref={targetRef}
      className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center bg-ym-page transition-colors duration-300 overflow-hidden pt-16 pb-12"
    >
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-[450px] sm:h-[450px] bg-[#4BA0A4]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-[320px] sm:h-[320px] bg-[#59AAAA]/15 rounded-full blur-[90px] pointer-events-none" />

      <Container className="relative z-10 flex flex-col items-center justify-center">
        {/* Visually Hidden Accessible H1 Heading for Page Hierarchy */}
        <h1 className="sr-only">YouthMind Company — Student Company SMKN 11 Bandung</h1>

        {/* Centered YM Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center text-center space-y-3"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-40 sm:w-52 md:w-60 lg:w-64 aspect-square flex items-center justify-center filter drop-shadow-[0_15px_35px_rgba(75,160,164,0.25)]"
          >
            <Image
              src={logoSrc}
              alt="YouthMind Company — Student Company SMKN 11 Bandung"
              fill
              priority
              fetchPriority="high"
              quality={90}
              sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
              className="object-contain transition-all duration-300"
            />
          </motion.div>

          {/* ── Executive Status Pill Badge ── */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-ym-card/90 via-ym-card to-ym-card/90 border border-[#4BA0A4]/40 text-ym-heading text-[11px] sm:text-xs font-black tracking-wide shadow-xl shadow-teal-500/10 backdrop-blur-xl group hover:border-[#4BA0A4] transition-all">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4BA0A4] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4BA0A4]"></span>
            </span>
            <span className="text-ym-heading font-extrabold uppercase tracking-wider text-[10px] sm:text-[11px]">
              Student Company
            </span>
            <span className="text-[#4BA0A4]/50 font-normal">|</span>
            <span className="text-ym-accent font-extrabold tracking-wide">
              SMKN 11 Bandung
            </span>
          </div>

          {/* ── High-Impact Gradient Headline & Tagline ── */}
          <div className="space-y-1.5 px-2 pt-1 max-w-sm sm:max-w-lg mx-auto text-center">
            <h2 className="text-base sm:text-xl md:text-2xl font-black tracking-tight leading-snug text-ym-heading">
              Pelopor <span className="text-image-clip inline-block font-black">Board Game Edukasi</span>
            </h2>
            <p className="text-xs sm:text-sm font-semibold text-ym-muted leading-relaxed tracking-wide">
              Kesehatan Mental Remaja
            </p>
          </div>
        </motion.div>
      </Container>

      {/* Subtle Scroll Hint */}
      <motion.div
        style={isMounted ? { opacity: logoOpacity } : { opacity: 1 }}
        suppressHydrationWarning
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ym-muted text-xs tracking-widest uppercase font-medium pointer-events-none opacity-80"
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



