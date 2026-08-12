"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Layers } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  title: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images, title }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#4BA0A4]/30 bg-[#0E2A2C] group/gallery select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full h-full"
        >
          {/* Zoom on hover wrapper */}
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <Image
              src={images[activeIdx]}
              alt={`${title} Preview ${activeIdx + 1}`}
              fill
              quality={85}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            {/* Subtle teal overlay on hover */}
            <div className="absolute inset-0 bg-[#4BA0A4]/0 group-hover/gallery:bg-[#4BA0A4]/10 transition-colors duration-300 pointer-events-none" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Navigation Buttons */}
      {images.length > 1 && (
        <>
          <button
            onClick={prevImage}
            aria-label="Foto Sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0E2A2C]/80 hover:bg-[#4BA0A4] text-white border border-[#4BA0A4]/40 flex items-center justify-center backdrop-blur-md opacity-80 group-hover/gallery:opacity-100 transition-all duration-200 z-10 shadow-lg active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Foto Selanjutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#0E2A2C]/80 hover:bg-[#4BA0A4] text-white border border-[#4BA0A4]/40 flex items-center justify-center backdrop-blur-md opacity-80 group-hover/gallery:opacity-100 transition-all duration-200 z-10 shadow-lg active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Top Image Counter Badge */}
      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#0E2A2C]/85 border border-[#4BA0A4]/40 backdrop-blur-md text-[10px] font-extrabold text-[#59AAAA] flex items-center gap-1.5 z-10 shadow-md">
        <Layers className="w-3 h-3 text-[#4BA0A4]" />
        <span>{activeIdx + 1} / {images.length} Foto</span>
      </div>

      {/* Bottom Thumbnail Dot Indicator Bar */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E2A2C]/80 border border-[#4BA0A4]/30 backdrop-blur-md z-10 shadow-md">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx(idx);
              }}
              aria-label={`Lihat foto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIdx ? "w-6 bg-[#4BA0A4]" : "w-2 bg-[#94D4D4]/40 hover:bg-[#94D4D4]"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

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

  const ludoImages = ["/assets/codenopoly.jpg", "/assets/ludo-ladder.jpg", "/assets/brand-philosophy.jpg"];
  const codeImages = ["/assets/ludo-ladder.jpg", "/assets/codenopoly.jpg", "/assets/brand-philosophy.jpg"];

  return (
    <section id="products" ref={containerRef} className="py-20 sm:py-36 bg-[#0E2A2C] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4]/5 pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        PRODUCTS
      </span>

      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 px-3.5 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Inovasi Permainan Edukasi
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
            Dua Karya Board Game YouthMind
          </h2>
          <p className="text-[#E0F4F4] text-xs sm:text-lg leading-relaxed font-normal">
            Dirancang khusus dengan kemasan eksklusif *"Slide to Open!"* — setiap permainan menjadi ruang belajar dan bercerita yang interaktif.
          </p>
        </div>

        {/* Real Product Card 1: LudoLadder */}
        <div className="space-y-10 sm:space-y-16">
          <motion.div
            style={{ scale: scaleProduct1, opacity: opacityProduct1 }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#194447] hover:bg-[#1E5256] text-white rounded-3xl p-5 sm:p-12 border border-[#4BA0A4]/40 hover:border-[#4BA0A4] shadow-2xl hover:shadow-teal-500/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center cursor-pointer transition-all duration-300"
          >
            <div className="lg:col-span-6 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#4BA0A4]/20 text-[#59AAAA] border border-[#4BA0A4]/30">
                  Board Game Edukasi 01
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#4BA0A4] text-[#0E2A2C]">
                  Slide to Open!
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                LudoLadder
              </h3>

              <p className="text-[#E0F4F4] text-xs sm:text-base leading-relaxed">
                Board game papan interaktif yang menggabungkan kemeriahan ular tangga dengan refleksi diskusi kesehatan mental. Pemain diajak berbagi cerita, mengasah empati, dan menemukan strategi mengatasi stres dalam lingkungan bermain yang hangat.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#E0F4F4] font-semibold pt-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0E2A2C] border border-[#4BA0A4]/30 shadow-sm">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Rekomendasi</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">Usia 15+</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0E2A2C] border border-[#4BA0A4]/30 shadow-sm">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Kapasitas</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">5 Pemain</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0E2A2C] border border-[#4BA0A4]/30 shadow-sm">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Kemasan</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">Slide Open</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <ProductGallery images={ludoImages} title="LudoLadder" />
            </div>
          </motion.div>

          {/* Real Product Card 2: Codenopoly */}
          <motion.div
            style={{ scale: scaleProduct2, opacity: opacityProduct2 }}
            whileHover={{ scale: 1.02, y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="bg-[#194447] hover:bg-[#1E5256] text-white rounded-3xl p-5 sm:p-12 border border-[#4BA0A4]/40 hover:border-[#4BA0A4] shadow-2xl hover:shadow-teal-500/20 overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center cursor-pointer transition-all duration-300"
          >
            <div className="lg:col-span-6 order-2 lg:order-1">
              <ProductGallery images={codeImages} title="Codenopoly" />
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-4 sm:space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-[10px] sm:text-xs font-bold px-3 py-1 rounded-full bg-[#4BA0A4]/20 text-[#59AAAA] border border-[#4BA0A4]/30">
                  Board Game Edukasi 02
                </span>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-md bg-[#4BA0A4] text-[#0E2A2C]">
                  Slide to Open!
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                Codenopoly
              </h3>

              <p className="text-[#E0F4F4] text-xs sm:text-base leading-relaxed">
                Adaptasi Monopoly bertema simulasi coding dan dunia teknologi yang dipadu dengan refleksi emosional. Pemain belajar memanajemen tekanan, membangun kerjasama tim, serta belajar menyelesaikan konflik bersama.
              </p>

              <div className="grid grid-cols-3 gap-2 text-center text-xs text-[#E0F4F4] font-semibold pt-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0E2A2C] border border-[#4BA0A4]/30 shadow-sm">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Rekomendasi</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">Usia 15+</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0E2A2C] border border-[#4BA0A4]/30 shadow-sm">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Durasi</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">20 Menit</span>
                </div>
                <div className="p-2.5 sm:p-3 rounded-xl bg-[#0E2A2C] border border-[#4BA0A4]/30 shadow-sm">
                  <span className="block text-[#4BA0A4] text-[9px] sm:text-[10px] uppercase font-bold">Kemasan</span>
                  <span className="text-[11px] sm:text-xs font-bold text-white">Slide Open</span>
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
