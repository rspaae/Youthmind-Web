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
    <section id="challenge" ref={containerRef} className="py-20 sm:py-40 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      <Container>
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Mengapa YouthMind Ada
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Dari Ruang Kelas, Menuju Perubahan Nyata
          </h2>
          <p className="text-slate-400 text-sm sm:text-lg leading-relaxed">
            Kami percaya bahwa kesehatan mental bukan topik yang harus ditakuti. Dengan pendekatan game-based learning, YouthMind mengubah percakapan yang sulit menjadi pengalaman yang bermakna dan menyenangkan.
          </p>
        </div>

        {/* 3 Floating Concept Cards with Scroll Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-8">
          {/* Card 1 */}
          <motion.div style={{ y: card1Y }} className="bg-slate-850 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4 backdrop-blur-xl shadow-xl">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-black text-base sm:text-lg">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Empati & Regulasi Emosi</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Mendorong pemain untuk mengenali dan memahami emosi diri sendiri, sekaligus membangun kesadaran terhadap perasaan orang lain di sekitar mereka.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div style={{ y: card2Y }} className="bg-slate-850 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4 backdrop-blur-xl shadow-xl md:mt-6">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-black text-base sm:text-lg">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Pembelajaran Berbasis Permainan</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Menjadikan edukasi kesehatan mental sebagai pengalaman sosial yang inklusif, interaktif, dan bebas dari stigma melalui mekanik permainan yang terstruktur.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div style={{ y: card3Y }} className="bg-slate-850 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-800 space-y-4 backdrop-blur-xl shadow-xl">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-base sm:text-lg">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">Kewirausahaan Pelajar</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Seluruh produk YouthMind lahir dari inisiatif dan kreativitas siswa SMKN 11 Bandung — membuktikan bahwa dampak sosial nyata bisa dimulai dari bangku sekolah.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SceneChallenge;
