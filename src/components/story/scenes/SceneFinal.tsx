"use client";

import React from "react";
import Container from "@/components/ui/Container";

export const SceneFinal: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-36 bg-[#0E2A2C] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden">
      <Container size="medium">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 bg-[#194447] p-6 sm:p-16 rounded-3xl border border-[#4BA0A4]/40 shadow-2xl backdrop-blur-xl">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 px-3 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Pusat Informasi & Kemitraan
          </span>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            "Mari Ciptakan Ruang Diskusi yang Lebih Hangat Bersama."
          </h2>

          <p className="text-[#E0F4F4] text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed font-normal">
            Halaman resmi YouthMind Company (Student Company SMKN 11 Bandung). Kami siap berkolaborasi untuk pameran, kemitraan sekolah, maupun pemesanan board game edukasi.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="mailto:youthmindcompany@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#4BA0A4] hover:bg-[#59AAAA] active:bg-[#396E6E] text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-teal-300/40 min-h-[48px] w-full sm:w-auto"
            >
              Hubungi Tim YouthMind
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-[#4BA0A4]/20 text-[11px] sm:text-xs text-[#94D4D4] font-semibold">
            SMKN 11 Bandung • Student Company Pelopor Board Game Edukasi Kesehatan Mental
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneFinal;
