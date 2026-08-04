"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { ArrowRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <Section id="hero" className="pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-28 bg-gradient-to-b from-teal-50/50 via-white to-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Header Utama Seksi Hero */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-left">
            {/* Lencana Inovasi */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-teal-600 shrink-0" />
              <span>Student Company • SMKN 11 Bandung</span>
            </div>

            {/* Judul Utama Website dengan Efek Teks Background Image / Gradient Clip */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.15] sm:leading-[1.15]">
              Inovasi Board Game Edukasi untuk{" "}
              <span className="text-image-clip inline-block">
                Kesadaran Kesehatan Mental
              </span>
            </h1>

            {/* Subjudul & Nilai Tambah Perusahaan */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              YouthMind Company menghadirkan media pembelajaran interaktif berbasis permainan yang dirancang khusus untuk membangun empati, regulasi emosi, dan ketahanan mental generasi muda.
            </p>

            {/* Tombol Aksi */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 sm:pt-4">
              <Button
                href="#products"
                variant="primary"
                size="lg"
                className="w-full sm:w-auto"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Jelajahi Produk Kami
              </Button>

              <Button
                href="#about"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Pelajari Visi Kami
              </Button>
            </div>
          </div>

          {/* Slot Visual Utama */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none">
            <div className="placeholder-slot aspect-square w-full flex flex-col items-center justify-center p-6 sm:p-8 text-center shadow-lg shadow-slate-200/50">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold mb-3 sm:mb-4">
                HERO MEDIA
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Slot Foto / Video Showcase Produk YouthMind
              </p>
              <span className="text-[11px] sm:text-xs text-slate-400 mt-1.5">
                Format yang disarankan: 1:1 atau 4:3 (Resolusi Tinggi PNG / WebP / MP4)
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
