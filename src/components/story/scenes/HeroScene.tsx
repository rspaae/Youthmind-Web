"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Sparkles, ChevronDown } from "lucide-react";

export const HeroScene: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Headline & Subtitle fade out and scale down as user scrolls down
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const headlineScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.92]);
  const headlineY = useTransform(scrollYProgress, [0, 0.45], [0, -40]);

  // Product visual scales up and rotates into position as user scrolls down
  const productScale = useTransform(scrollYProgress, [0.15, 0.65], [0.8, 1]);
  const productOpacity = useTransform(scrollYProgress, [0.1, 0.4], [0.4, 1]);
  const productRotateX = useTransform(scrollYProgress, [0.15, 0.65], [20, 0]);

  return (
    <div ref={targetRef} className="relative min-h-[135vh] sm:min-h-[140vh] pt-28 pb-16 sm:pt-40 bg-gradient-to-b from-slate-950 via-teal-950/30 to-slate-950 text-white overflow-hidden">
      {/* Background Subtle Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-teal-500/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="sticky top-20 sm:top-28 z-10 py-6 sm:py-12">
        <Container>
          {/* Opening Storytelling Headline */}
          <motion.div
            style={{ opacity: headlineOpacity, scale: headlineScale, y: headlineY }}
            className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-8 px-2"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-[11px] sm:text-xs font-semibold tracking-wide shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
              <span>Student Company · SMKN 11 Bandung</span>
            </div>

            <h1 className="text-3xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.12]">
              Berani Bicara.<br />
              <span className="text-image-clip inline-block">
                Mulai Dari Meja Permainan.
              </span>
            </h1>

            <p className="text-sm sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2">
              YouthMind menghadirkan board game edukatif yang membuka ruang diskusi hangat tentang kesehatan mental — dibuat dengan hati oleh siswa-siswi SMKN 11 Bandung.
            </p>

            {/* Subtle Scroll Hint */}
            <div className="pt-3 sm:pt-6 flex flex-col items-center gap-1.5 text-slate-400 text-[10px] sm:text-xs tracking-widest uppercase font-semibold">
              <span>Scroll untuk Cerita Kami</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              >
                <ChevronDown className="w-4 h-4 text-[#4BA0A4]" />
              </motion.div>
            </div>
          </motion.div>

          {/* Real Product Showcase Images Reveal Slot */}
          <motion.div
            style={{
              scale: productScale,
              opacity: productOpacity,
              rotateX: productRotateX,
              transformPerspective: 1000,
            }}
            className="mt-8 sm:mt-12 max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2"
          >
            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#4BA0A4]/30 bg-slate-900 group">
              <Image
                src="/assets/codenopoly.jpg"
                alt="YouthMind LudoLadder Board Game"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#4BA0A4] text-slate-950 uppercase tracking-wider">
                    LudoLadder
                  </span>
                  <p className="text-[11px] text-slate-200 mt-1 font-medium">Board Game Kesehatan Mental</p>
                </div>
                <span className="text-[10px] text-teal-300 bg-slate-950/80 px-2 py-1 rounded-lg border border-teal-500/30 font-semibold">
                  Slide to Open!
                </span>
              </div>
            </div>

            <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#4BA0A4]/30 bg-slate-900 group">
              <Image
                src="/assets/ludo-ladder.jpg"
                alt="YouthMind Codenopoly Board Game"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-90" />
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#59AAAA] text-slate-950 uppercase tracking-wider">
                    Codenopoly
                  </span>
                  <p className="text-[11px] text-slate-200 mt-1 font-medium">Board Game Edukasi Interaktif</p>
                </div>
                <span className="text-[10px] text-teal-300 bg-slate-950/80 px-2 py-1 rounded-lg border border-teal-500/30 font-semibold">
                  Slide to Open!
                </span>
              </div>
            </div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default HeroScene;
