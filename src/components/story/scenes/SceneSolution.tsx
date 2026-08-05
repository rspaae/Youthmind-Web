"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

export const SceneSolution: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleProduct1 = useTransform(scrollYProgress, [0.1, 0.45], [0.92, 1]);
  const opacityProduct1 = useTransform(scrollYProgress, [0.1, 0.35], [0.6, 1]);

  const scaleProduct2 = useTransform(scrollYProgress, [0.45, 0.8], [0.92, 1]);
  const opacityProduct2 = useTransform(scrollYProgress, [0.45, 0.7], [0.6, 1]);

  return (
    <section id="products" ref={containerRef} className="py-20 sm:py-36 bg-slate-950 text-white relative border-t border-slate-900">
      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4BA0A4] bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
            Inovasi Permainan Edukasi
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
            Dua Karya Board Game Unggulan
          </h2>
          <p className="text-slate-300 text-xs sm:text-lg leading-relaxed">
            Dirancang khusus dengan kemasan eksklusif *"Slide to Open!"* — setiap permainan menjadi ruang belajar dan bercerita yang interaktif.
          </p>
        </div>

        {/* Real Product Card 1: LudoLadder */}
        <div className="space-y-10 sm:space-y-16">
          <motion.div
            style={{ scale: scaleProduct1, opacity: opacityProduct1 }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-slate-900/90 hover:bg-slate-900 text-white rounded-3xl p-5 sm:p-12 border border-[#4BA0A4]/30 hover:border-[#4BA0A4] shadow-2xl hover:shadow-teal-500/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center cursor-pointer transition-all duration-300"
          >
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#4BA0A4]/20 text-[#59AAAA] border border-[#4BA0A4]/30">
                  Board Game Edukasi 01
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Slide to Open!
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                LudoLadder
              </h3>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Board game papan interaktif yang menggabungkan kemeriahan ular tangga dengan refleksi diskusi kesehatan mental. Pemain diajak berbagi cerita, mengasah empati, dan menemukan strategi mengatasi stres dalam lingkungan bermain yang hangat.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300 font-semibold pt-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Rekomendasi</span>
                  <span className="text-[11px] sm:text-xs font-bold">Usia 15+</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Kapasitas</span>
                  <span className="text-[11px] sm:text-xs font-bold">5 Pemain</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Kemasan</span>
                  <span className="text-[11px] sm:text-xs font-bold">Slide Open</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
                <Image
                  src="/assets/codenopoly.jpg"
                  alt="Board Game LudoLadder YouthMind SMKN 11 Bandung"
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>

          {/* Real Product Card 2: Codenopoly */}
          <motion.div
            style={{ scale: scaleProduct2, opacity: opacityProduct2 }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-slate-900/90 hover:bg-slate-900 text-white rounded-3xl p-5 sm:p-12 border border-[#59AAAA]/30 hover:border-[#59AAAA] shadow-2xl hover:shadow-teal-500/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center cursor-pointer transition-all duration-300"
          >
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
                <Image
                  src="/assets/ludo-ladder.jpg"
                  alt="Board Game Codenopoly YouthMind SMKN 11 Bandung"
                  fill
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#59AAAA]/20 text-[#59AAAA] border border-[#59AAAA]/30">
                  Board Game Edukasi 02
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  Slide to Open!
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Codenopoly
              </h3>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Adaptasi Monopoly bertema simulasi coding dan dunia teknologi yang dipadu dengan refleksi emosional. Pemain belajar memanajemen tekanan, membangun kerjasama tim, serta belajar menyelesaikan konflik bersama.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs text-slate-300 font-semibold pt-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[#59AAAA] text-[9px] sm:text-[10px] uppercase font-bold">Rekomendasi</span>
                  <span className="text-[11px] sm:text-xs font-bold">Usia 15+</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[#59AAAA] text-[9px] sm:text-[10px] uppercase font-bold">Durasi</span>
                  <span className="text-[11px] sm:text-xs font-bold">20 Menit</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="block text-[#59AAAA] text-[9px] sm:text-[10px] uppercase font-bold">Kemasan</span>
                  <span className="text-[11px] sm:text-xs font-bold">Slide Open</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default SceneSolution;
