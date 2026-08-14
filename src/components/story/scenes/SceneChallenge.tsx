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
    <section id="challenge" ref={containerRef} className="py-20 sm:py-40 bg-ym-subtle/30 text-ym-body relative overflow-hidden border-t border-ym transition-colors duration-300">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        CHALLENGE
      </span>

      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-900 dark:text-teal-200 bg-[#4BA0A4]/15 px-3.5 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Mengapa YouthMind Ada
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-ym-heading leading-tight">
            Dari Ruang Kelas, Menuju Perubahan Nyata
          </h2>
          <p className="text-ym-body text-sm sm:text-lg leading-relaxed font-normal">
            Kami percaya bahwa kesehatan mental bukan topik yang harus ditakuti. Dengan pendekatan game-based learning, YouthMind mengubah percakapan yang sulit menjadi pengalaman yang bermakna dan menyenangkan.
          </p>
        </div>

        {/* 3 Floating Concept Cards with Scroll Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Card 1 */}
          <motion.div style={{ y: card1Y }} className="bg-ym-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-ym space-y-4 shadow-xl backdrop-blur-md hover:border-[#4BA0A4] transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-[#4BA0A4]/15 text-teal-900 dark:text-teal-200 flex items-center justify-center font-black text-base sm:text-lg border border-[#4BA0A4]/30">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-ym-heading">Empati & Regulasi Emosi</h3>
            <p className="text-sm text-ym-muted leading-relaxed">
              Mendorong pemain untuk mengenali dan memahami emosi diri sendiri, sekaligus membangun kesadaran terhadap perasaan orang lain di sekitar mereka.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div style={{ y: card2Y }} className="bg-ym-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-ym space-y-4 shadow-xl backdrop-blur-md hover:border-[#4BA0A4] transition-all md:mt-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-300 flex items-center justify-center font-black text-base sm:text-lg border border-amber-500/30">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-ym-heading">Pembelajaran Berbasis Permainan</h3>
            <p className="text-sm text-ym-muted leading-relaxed">
              Menjadikan edukasi kesehatan mental sebagai pengalaman sosial yang inklusif, interaktif, dan bebas dari stigma melalui mekanik permainan yang terstruktur.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div style={{ y: card3Y }} className="bg-ym-card p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-ym space-y-4 shadow-xl backdrop-blur-md hover:border-[#4BA0A4] transition-all">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 flex items-center justify-center font-black text-base sm:text-lg border border-emerald-500/30">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-ym-heading">Kewirausahaan Pelajar</h3>
            <p className="text-sm text-ym-muted leading-relaxed">
              Seluruh produk YouthMind lahir dari inisiatif dan kreativitas siswa SMKN 11 Bandung — membuktikan bahwa dampak sosial nyata bisa dimulai dari bangku sekolah.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SceneChallenge;
