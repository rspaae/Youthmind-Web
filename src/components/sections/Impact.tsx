"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const Impact: React.FC = () => {
  return (
    <Section id="impact" className="bg-slate-50/50">
      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-600">
            Dampak Sosial & Capaian
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Menciptakan Ruang Edukasi Sehat & Inklusif
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Komitmen YouthMind Company dalam menghadirkan media pembelajaran interaktif yang memberikan dampak positif berkelanjutan.
          </p>
        </div>

        {/* Grid Statistik & Metrik Dampak */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Metrik 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="text-4xl font-black text-teal-600">
              2
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Produk Board Game
            </p>
            <p className="text-xs text-slate-500">
              Karya Inovasi Edukasi Resmi
            </p>
          </div>

          {/* Metrik 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="text-4xl font-black text-amber-500">
              11
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              SMKN 11 Bandung
            </p>
            <p className="text-xs text-slate-500">
              Basis Riset & Inkubasi Produk
            </p>
          </div>

          {/* Metrik 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="text-4xl font-black text-emerald-600">
              100%
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Game-Based
            </p>
            <p className="text-xs text-slate-500">
              Metode Edukasi Pembelajaran Interaktif
            </p>
          </div>

          {/* Metrik 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center space-y-2">
            <div className="text-4xl font-black text-slate-900">
              Youth
            </div>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Entrepreneurship
            </p>
            <p className="text-xs text-slate-500">
              Karya Mandiri Generasi Muda
            </p>
          </div>
        </div>

        {/* Slot Testimoni / Dokumentasi Penggunaan Produk */}
        <div className="placeholder-slot min-h-[200px] w-full flex flex-col items-center justify-center p-8 text-center bg-white">
          <span className="text-base font-semibold text-slate-700">
            Slot Testimoni Guru / Siswa / Pengguna Board Game YouthMind
          </span>
          <span className="text-xs text-slate-400 mt-1">
            Ulasan dan respon positif mengenai efektivitas media pembelajaran YouthMind
          </span>
        </div>
      </Container>
    </Section>
  );
};

export default Impact;
