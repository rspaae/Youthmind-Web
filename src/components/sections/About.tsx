"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-slate-50/70 border-y border-slate-100">
      <Container>
        {/* Header Seksi dengan Efek Teks Background Image / Gradient */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
            Tentang YouthMind
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Menggabungkan Pembelajaran Interaktif &{" "}
            <span className="text-image-clip inline-block">
              Kesehatan Mental
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            YouthMind merupakan perusahaan siswa (student company) dari SMKN 11 Bandung yang berfokus pada pengembangan board game edukatif. Kami percaya bahwa edukasi kesehatan mental yang menyenangkan dan komunikatif dapat memberikan dampak positif bagi lingkungan sekolah dan masyarakat.
          </p>
        </div>

        {/* Grid 3 Pilar Utama Brand */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Pilar 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="placeholder-slot h-12 w-12 rounded-xl flex items-center justify-center font-bold text-teal-600 text-xs">
              01
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Kesehatan Mental Remaja
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Memberikan edukasi emosi dan pemahaman diri yang dikemas secara ramah, empati, dan mudah dipahami oleh kalangan remaja.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="placeholder-slot h-12 w-12 rounded-xl flex items-center justify-center font-bold text-amber-600 text-xs">
              02
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Game-Based Learning
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Metode pembelajaran berbasis permainan interaktif yang mendorong diskusi terbuka, pemecahan masalah bersama, dan kerja sama tim.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-4 hover:-translate-y-1 transition-transform duration-300">
            <div className="placeholder-slot h-12 w-12 rounded-xl flex items-center justify-center font-bold text-emerald-600 text-xs">
              03
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900">
              Kewirausahaan Muda
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Wadah pengembangan potensi kepemimpinan dan kreativitas siswa SMKN 11 Bandung dalam menciptakan produk bernilai sosial tinggi.
            </p>
          </div>
        </div>

        {/* Slot Visual Cerita Perusahaan */}
        <div className="placeholder-slot min-h-[220px] sm:min-h-[280px] w-full flex flex-col items-center justify-center p-6 sm:p-8 text-center">
          <span className="text-sm sm:text-base font-semibold text-slate-700">
            Slot Foto / Video Cerita Perjalanan YouthMind SMKN 11 Bandung
          </span>
          <span className="text-[11px] sm:text-xs text-slate-400 mt-1">
            (Contoh: Foto proses perancangan produk, kolaborasi tim, atau sesi pengujian board game)
          </span>
        </div>
      </Container>
    </Section>
  );
};

export default About;
