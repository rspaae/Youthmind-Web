"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export const Journey: React.FC = () => {
  return (
    <Section id="journey" className="bg-slate-900 text-white">
      <Container>
        {/* Header Seksi */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-20">
          <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
            Perjalanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Jejak Inovasi & Perkembangan YouthMind
          </h2>
          <p className="text-slate-400 leading-relaxed">
            Perjalanan tim siswa SMKN 11 Bandung dari ideasi awal hingga menciptakan produk edukasi kesehatan mental yang berdampak.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Garis Tengah Timeline */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {/* Milestones 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-2">
                <span className="text-sm font-bold text-teal-400">Tahap 1 • Pembentukan & Ideasi</span>
                <h3 className="text-xl font-bold text-white">Inisiasi Riset di SMKN 11 Bandung</h3>
                <p className="text-sm text-slate-400">
                  Pembentukan tim YouthMind dan riset kebutuhan media edukasi kesehatan mental untuk remaja.
                </p>
              </div>
              <div className="placeholder-slot h-36 rounded-2xl flex items-center justify-center p-4 text-center">
                <span className="text-xs text-slate-400">Slot Dokumentasi Tahap 1</span>
              </div>
            </div>

            {/* Milestones 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1 placeholder-slot h-36 rounded-2xl flex items-center justify-center p-4 text-center">
                <span className="text-xs text-slate-400">Slot Dokumentasi Tahap 2</span>
              </div>
              <div className="order-1 md:order-2 space-y-2">
                <span className="text-sm font-bold text-amber-400">Tahap 2 • Pengembangan & Uji Coba</span>
                <h3 className="text-xl font-bold text-white">Perancangan & Validasi Prototipe</h3>
                <p className="text-sm text-slate-400">
                  Proses desain mekanik board game serta sesi pengujian bersama siswa dan pendamping edukasi.
                </p>
              </div>
            </div>

            {/* Milestones 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right space-y-2">
                <span className="text-sm font-bold text-emerald-400">Tahap 3 • Peluncuran & Dampak</span>
                <h3 className="text-xl font-bold text-white">Peluncuran 2 Produk Board Game</h3>
                <p className="text-sm text-slate-400">
                  Komersialisasi produk resmi YouthMind dan implementasi di lingkungan pendidikan.
                </p>
              </div>
              <div className="placeholder-slot h-36 rounded-2xl flex items-center justify-center p-4 text-center">
                <span className="text-xs text-slate-400">Slot Dokumentasi Tahap 3</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Journey;
