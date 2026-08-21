"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  ShieldCheck,
  Users,
  Clock,
  Package,
  Dices,
  CheckCircle2,
} from "lucide-react";

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
    <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#4BA0A4]/40 bg-[#0E2A2C] group/gallery select-none">
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
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <Image
              src={images[activeIdx]}
              alt={`${title} Preview ${activeIdx + 1}`}
              fill
              loading="lazy"
              quality={90}
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
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0E2A2C]/80 hover:bg-[#4BA0A4] text-white border border-[#4BA0A4]/40 flex items-center justify-center backdrop-blur-md opacity-80 group-hover/gallery:opacity-100 transition-all duration-200 z-10 shadow-lg active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Foto Selanjutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#0E2A2C]/80 hover:bg-[#4BA0A4] text-white border border-[#4BA0A4]/40 flex items-center justify-center backdrop-blur-md opacity-80 group-hover/gallery:opacity-100 transition-all duration-200 z-10 shadow-lg active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Top Image Counter Badge */}
      <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#0E2A2C]/85 border border-[#4BA0A4]/40 backdrop-blur-md text-[10px] font-extrabold text-[#59AAAA] flex items-center gap-1.5 z-10 shadow-md">
        <Layers className="w-3.5 h-3.5 text-[#4BA0A4]" />
        <span>{activeIdx + 1} / {images.length} Foto</span>
      </div>

      {/* Bottom Thumbnail Dot Indicator Bar */}
      {images.length > 1 && (
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0E2A2C]/80 border border-[#4BA0A4]/30 backdrop-blur-md z-10 shadow-md">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation();
                setActiveIdx(idx);
              }}
              aria-label={`Lihat foto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
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
  const codeImages = [
    "/assets/codenopoly-box.jpg",
    "/assets/codenopoly-play.jpg",
    "/assets/codenopoly-action.jpg",
    "/assets/codenopoly-card.jpg",
  ];

  return (
    <section
      id="products"
      className="py-20 sm:py-32 bg-ym-page text-ym-body relative border-t border-ym overflow-hidden transition-colors duration-300"
    >
      {/* Giant Translucent Watermark */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2.2rem] sm:text-9xl lg:text-[11.5rem] font-black text-[#4BA0A4] opacity-[0.03] dark:opacity-[0.06] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        PRODUCTS
      </span>

      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#4BA0A4]/10 rounded-full blur-[180px] pointer-events-none" />

      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16 px-2 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/35 text-ym-accent text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#4BA0A4] animate-pulse" />
            <span>Karya Utama Siswa</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ym-heading leading-tight">
            Codenopoly <span className="text-image-clip inline-block">Board Game</span>
          </h2>

          <p className="text-xs sm:text-base text-ym-body font-medium leading-relaxed max-w-2xl mx-auto">
            Media interaktif edukasi kesehatan mental yang dirancang seru, ringan, dan mudah dimainkan bersama teman sebaya di sekolah.
          </p>
        </div>

        {/* Product Showcase Card */}
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="bg-ym-card text-ym-body rounded-3xl p-6 sm:p-10 border border-[#4BA0A4]/40 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Gallery Column (6 cols) */}
            <div className="lg:col-span-6">
              <ProductGallery images={codeImages} title="Codenopoly Board Game" />
            </div>

            {/* Content Column (6 cols) - Spacious & Breathable */}
            <div className="lg:col-span-6 space-y-5">
              {/* Header Title & Badges */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-[#4BA0A4]/15 text-ym-accent border border-[#4BA0A4]/30">
                    Edisi Eksklusif Siswa
                  </span>
                  <span className="text-[10px] font-black px-2.5 py-0.5 rounded-md bg-[#4BA0A4] text-[#0E2A2C]">
                    Slide to Open!
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-ym-heading">
                  Codenopoly
                </h3>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-ym-accent bg-ym-subtle/80 px-3 py-1 rounded-xl border border-ym">
                  <ShieldCheck className="w-4 h-4 text-[#4BA0A4] shrink-0" />
                  <span>Validasi Ahli: Lembaga Psikologi Edulity & UPI</span>
                </div>
              </div>

              {/* Ringkasan Singkat & Jelas */}
              <p className="text-xs sm:text-sm text-ym-body leading-relaxed font-normal">
                Permainan papan bertema simulasi coding yang dipadukan dengan sesi berbagi cerita dan refleksi emosional. Membantu remaja mengekspresikan perasaan tanpa canggung.
              </p>

              {/* Poin Fitur yang Rapi */}
              <div className="space-y-2 pt-1">
                {[
                  "Papan Rute Emosi (Jalan Kebaikan & Melepaskan Stres)",
                  "Kartu Refleksi & Tantangan Membina Empati",
                  "Buku Panduan Bermain + Kartu Karakter MindCodes",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-ym-heading font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#4BA0A4] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Specs Grid - Rapi, Lega, & Mudah Dibaca */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
                <div className="p-3 rounded-2xl bg-ym-subtle border border-ym text-center space-y-0.5">
                  <span className="text-[10px] text-ym-muted uppercase font-bold block flex items-center justify-center gap-1">
                    <Users className="w-3 h-3 text-[#4BA0A4]" /> Usia
                  </span>
                  <span className="text-xs font-black text-ym-heading block">13+ Tahun</span>
                </div>

                <div className="p-3 rounded-2xl bg-ym-subtle border border-ym text-center space-y-0.5">
                  <span className="text-[10px] text-ym-muted uppercase font-bold block flex items-center justify-center gap-1">
                    <Dices className="w-3 h-3 text-[#4BA0A4]" /> Pemain
                  </span>
                  <span className="text-xs font-black text-ym-heading block">2–6 Orang</span>
                </div>

                <div className="p-3 rounded-2xl bg-ym-subtle border border-ym text-center space-y-0.5">
                  <span className="text-[10px] text-ym-muted uppercase font-bold block flex items-center justify-center gap-1">
                    <Clock className="w-3 h-3 text-[#4BA0A4]" /> Durasi
                  </span>
                  <span className="text-xs font-black text-ym-heading block">20–45 Mnt</span>
                </div>

                <div className="p-3 rounded-2xl bg-ym-subtle border border-ym text-center space-y-0.5">
                  <span className="text-[10px] text-ym-muted uppercase font-bold block flex items-center justify-center gap-1">
                    <Package className="w-3 h-3 text-[#4BA0A4]" /> Kemasan
                  </span>
                  <span className="text-xs font-black text-ym-heading block">Slide Box</span>
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
