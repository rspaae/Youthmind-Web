"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";

export const SceneChallenge: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax values — flattened to 0 when reduced motion is active
  const card1Y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [60, -60]);
  const card2Y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [100, -100]);
  const card3Y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [40, -40]);

  return (
    <section id="challenge" ref={containerRef} className="py-20 sm:py-40 bg-[#123638] text-white relative overflow-hidden border-t border-[#4BA0A4]/20">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4]/5 pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        CHALLENGE
      </span>

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 px-3.5 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Mengapa YouthMind Ada
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Dari Ruang Kelas, Menuju Perubahan Nyata
          </h2>
          <p className="text-[#E0F4F4] text-sm sm:text-lg leading-relaxed font-normal">
            Kami percaya bahwa kesehatan mental bukan topik yang harus ditakuti. Dengan pendekatan game-based learning, YouthMind mengubah percakapan yang sulit menjadi pengalaman yang bermakna dan menyenangkan.
          </p>
        </div>

        {/* 3 Floating Concept Cards with Scroll Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Card 1 */}
          <motion.div style={{ y: card1Y }} className="bg-[#194447] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#4BA0A4]/30 space-y-4 shadow-xl backdrop-blur-md hover:border-[#4BA0A4] transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#4BA0A4]/25 text-[#59AAAA] flex items-center justify-center font-black text-base sm:text-lg border border-[#4BA0A4]/40">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Empati & Regulasi Emosi</h3>
            <p className="text-sm text-[#94D4D4] leading-relaxed">
              Mendorong pemain untuk mengenali dan memahami emosi diri sendiri, sekaligus membangun kesadaran terhadap perasaan orang lain di sekitar mereka.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div style={{ y: card2Y }} className="bg-[#194447] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#4BA0A4]/30 space-y-4 shadow-xl backdrop-blur-md hover:border-[#4BA0A4] transition-all md:mt-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-400/20 text-amber-300 flex items-center justify-center font-black text-base sm:text-lg border border-amber-400/30">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Pembelajaran Berbasis Permainan</h3>
            <p className="text-sm text-[#94D4D4] leading-relaxed">
              Menjadikan edukasi kesehatan mental sebagai pengalaman sosial yang inklusif, interaktif, dan bebas dari stigma melalui mekanik permainan yang terstruktur.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div style={{ y: card3Y }} className="bg-[#194447] p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-[#4BA0A4]/30 space-y-4 shadow-xl backdrop-blur-md hover:border-[#4BA0A4] transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-400/20 text-emerald-300 flex items-center justify-center font-black text-base sm:text-lg border border-emerald-400/30">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Kewirausahaan Pelajar</h3>
            <p className="text-sm text-[#94D4D4] leading-relaxed">
              Seluruh produk YouthMind lahir dari inisiatif dan kreativitas siswa SMKN 11 Bandung — membuktikan bahwa dampak sosial nyata bisa dimulai dari bangku sekolah.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SceneChallenge;
