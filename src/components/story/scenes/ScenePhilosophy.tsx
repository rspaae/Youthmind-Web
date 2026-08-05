"use client";

import React from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import Image from "next/image";

export const ScenePhilosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 sm:py-36 bg-slate-950 text-white relative border-t border-slate-900">
      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-20 px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4BA0A4] bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
            Identitas & Filosofi
          </span>
          <h2 className="text-2xl sm:text-5xl font-black tracking-tight text-white">
            Filosofi Logo & Warna YouthMind
          </h2>
          <p className="text-slate-300 text-xs sm:text-lg leading-relaxed">
            Setiap simbol dan bentuk pada lambang YouthMind dirancang memiliki cerita tentang pikiran, pertumbuhan emosi, serta kebebasan berekspresi.
          </p>
        </div>

        {/* Brand Philosophy Image & Official Color Cards */}
        <div className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 sm:p-12 border border-[#4BA0A4]/30 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="lg:col-span-6 space-y-5">
            <YouthMindLogo variant="horizontal" size="lg" />
            <div className="space-y-2">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Identitas Visual Resmi SMKN 11 Bandung</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Penggabungan harmonis antara simbol otak (kesehatan mental), bentuk pohon (pertumbuhan pribadi), serta huruf Y (burung terbang) dan huruf M yang melambangkan YouthMind Company.
              </p>
            </div>

            {/* Palet Warna Display */}
            <div className="space-y-2.5 bg-slate-950 p-4 sm:p-5 rounded-2xl border border-slate-800">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                Palet Warna Resmi YouthMind
              </span>
              <div className="grid grid-cols-3 gap-2.5">
                <div className="space-y-1 text-center">
                  <div className="h-12 sm:h-14 rounded-xl bg-[#59AAAA] shadow-md flex items-center justify-center font-bold text-[11px] sm:text-xs text-slate-950">
                    #59AAAA
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Soft Teal</span>
                </div>

                <div className="space-y-1 text-center">
                  <div className="h-12 sm:h-14 rounded-xl bg-[#4BA0A4] shadow-md flex items-center justify-center font-bold text-[11px] sm:text-xs text-slate-950">
                    #4BA0A4
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Cyan Teal</span>
                </div>

                <div className="space-y-1 text-center">
                  <div className="h-12 sm:h-14 rounded-xl bg-[#396E6E] shadow-md flex items-center justify-center font-bold text-[11px] sm:text-xs text-white">
                    #396E6E
                  </div>
                  <span className="text-[10px] sm:text-[11px] text-slate-400 block font-medium">Deep Teal</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#4BA0A4]/30 bg-slate-950">
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
