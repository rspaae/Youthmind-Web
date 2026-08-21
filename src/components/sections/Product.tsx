"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ShieldCheck, Users, Clock, Package, Dices, CheckCircle2, Sparkles } from "lucide-react";

export const Product: React.FC = () => {
  return (
    <Section id="products" className="py-20 sm:py-32 bg-ym-page text-ym-body border-t border-ym">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/35 text-ym-accent text-xs font-black uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#4BA0A4] animate-pulse" />
            <span>Karya Utama Siswa</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-ym-heading tracking-tight leading-tight">
            Codenopoly <span className="text-image-clip inline-block">Board Game</span>
          </h2>

          <p className="text-xs sm:text-base text-ym-body font-medium leading-relaxed max-w-2xl mx-auto">
            Media interaktif edukasi kesehatan mental yang dirancang seru, ringan, dan mudah dimainkan bersama teman sebaya di sekolah.
          </p>
        </div>

        {/* Product Showcase Card */}
        <div className="max-w-5xl mx-auto bg-ym-card rounded-3xl p-6 sm:p-10 border border-[#4BA0A4]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-[#4BA0A4]/30">
            <Image
              src="/assets/codenopoly-box.jpg"
              alt="Codenopoly — Board Game YouthMind"
              fill
              className="object-cover"
            />
          </div>

          <div className="lg:col-span-6 space-y-5">
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

            <p className="text-xs sm:text-sm text-ym-body leading-relaxed font-normal">
              Permainan papan bertema simulasi coding yang dipadukan dengan sesi berbagi cerita dan refleksi emosional. Membantu remaja mengekspresikan perasaan tanpa canggung.
            </p>

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

            {/* Clean Specs Grid */}
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
        </div>
      </Container>
    </Section>
  );
};

export default Product;
