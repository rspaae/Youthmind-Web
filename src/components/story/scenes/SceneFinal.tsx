"use client";

import React from "react";
import Container from "@/components/ui/Container";

export const SceneFinal: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-36 bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden">
      <Container size="medium">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 bg-gradient-to-b from-slate-900/90 to-slate-950 p-6 sm:p-16 rounded-3xl border border-[#4BA0A4]/30 shadow-2xl backdrop-blur-xl">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4BA0A4] bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
            Pusat Informasi & Kemitraan
          </span>

          <h2 className="text-2xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            "Mari Ciptakan Ruang Diskusi yang Lebih Hangat Bersama."
          </h2>

          <p className="text-slate-300 text-xs sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Halaman resmi YouthMind Company (Student Company SMKN 11 Bandung). Kami siap berkolaborasi untuk pameran, kemitraan sekolah, maupun pemesanan board game edukasi.
          </p>

          <div className="pt-2 sm:pt-4">
            <a
              href="mailto:youthmindcompany@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#4BA0A4] hover:bg-[#59AAAA] active:bg-[#396E6E] text-slate-950 font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-teal-500/25 min-h-[48px] w-full sm:w-auto"
            >
              Hubungi Tim YouthMind
            </a>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-slate-800 text-[11px] sm:text-xs text-slate-400 font-medium">
            SMKN 11 Bandung • Student Company Pelopor Board Game Edukasi Kesehatan Mental
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneFinal;
