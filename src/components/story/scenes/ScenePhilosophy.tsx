"use client";

import React from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import Image from "next/image";

export const ScenePhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 sm:py-36 bg-[#123638] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-4xl sm:text-9xl lg:text-[10rem] font-black text-[#4BA0A4]/5 pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        PHILOSOPHY
      </span>

      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 px-3.5 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Identitas & Filosofi
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
            Filosofi Logo & Warna YouthMind
          </h2>
          <p className="text-[#E0F4F4] text-xs sm:text-lg leading-relaxed font-normal">
            Setiap simbol dan bentuk pada lambang YouthMind dirancang memiliki cerita tentang pikiran, pertumbuhan emosi, serta kebebasan berekspresi.
          </p>
        </div>

        {/* Brand Philosophy Image & Official Color Cards */}
        <div className="bg-[#194447] backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-[#4BA0A4]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <YouthMindLogo variant="horizontal" size="lg" />
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Identitas Visual Resmi Youthmind</h3>
              <p className="text-xs sm:text-sm text-[#94D4D4] leading-relaxed font-normal">
                Penggabungan harmonis antara simbol otak (kesehatan mental), bentuk pohon (pertumbuhan pribadi), serta huruf Y (burung terbang) dan huruf M yang melambangkan YouthMind Company.
              </p>
            </div>

            {/* Palet Warna Display */}
            <div className="space-y-2.5 bg-[#0E2A2C] p-4 sm:p-5 rounded-2xl border border-[#4BA0A4]/30">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#59AAAA] block">
                Palet Warna Resmi YouthMind
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="space-y-1 text-center">
                  <div className="h-12 sm:h-14 rounded-xl bg-[#59AAAA] shadow-md flex items-center justify-center font-bold text-[11px] sm:text-xs text-[#0E2A2C]">
                    #59AAAA
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#94D4D4] block font-semibold">Soft Teal</span>
                </div>

                <div className="space-y-1 text-center">
                  <div className="h-12 sm:h-14 rounded-xl bg-[#4BA0A4] shadow-md flex items-center justify-center font-bold text-[11px] sm:text-xs text-[#0E2A2C]">
                    #4BA0A4
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#94D4D4] block font-semibold">Cyan Teal</span>
                </div>

                <div className="space-y-1 text-center">
                  <div className="h-12 sm:h-14 rounded-xl bg-[#396E6E] shadow-md flex items-center justify-center font-bold text-[11px] sm:text-xs text-white">
                    #396E6E
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-[#94D4D4] block font-semibold">Deep Teal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#4BA0A4]/40 bg-[#0E2A2C]">
              <Image
                src="/assets/brand-philosophy.jpg"
                alt="Filosofi Logo & Warna YouthMind"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScenePhilosophy;
