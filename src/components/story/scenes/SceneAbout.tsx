"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Leaf, Heart, Sparkles } from "lucide-react";

const companyValues = [
  {
    id: "sustainability",
    title: "Sustainability",
    subtitle: "Keberlanjutan",
    desc: "Menjaga keberlanjutan dampak positif & produk yang ramah lingkungan.",
    icon: Leaf,
    color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  },
  {
    id: "positive-impact",
    title: "Positive Impact",
    subtitle: "Dampak Positif",
    desc: "Menciptakan perubahan nyata bagi ruang emosional & kesehatan mental remaja.",
    icon: Heart,
    color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  },
  {
    id: "innovative",
    title: "Innovative",
    subtitle: "Inovasi Permainan",
    desc: "Menghadirkan solusi game-based learning yang seru, interaktif, dan penuh makna.",
    icon: Sparkles,
    color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  },
];

export const SceneAbout: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-[#0E2A2C] border-t border-[#4BA0A4]/20 text-white">
      <Container>
        <div className="space-y-16 max-w-5xl mx-auto">
          {/* Main Statement */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 px-3.5 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
              Tentang YouthMind
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Apa itu YouthMind Company?
            </h2>
            <p className="text-base sm:text-xl text-[#E0F4F4] leading-relaxed font-normal pt-2">
              YouthMind Company adalah perusahaan inovatif dari SMKN 11 Bandung yang berfokus pada{" "}
              <span className="text-[#4BA0A4] font-bold">pengembangan board game edukasi</span>{" "}
              serta rutin menggelar{" "}
              <span className="text-[#59AAAA] font-bold">sosialisasi & workshop kesehatan mental</span>{" "}
              ke sekolah-sekolah se-Kota Bandung.
            </p>
          </div>

          {/* Company Value */}
          <div className="space-y-8">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#94D4D4]">
                Company Value
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Nilai & Pilar Utama
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {companyValues.map((val) => {
                const IconComp = val.icon;
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="bg-[#194447] border border-[#4BA0A4]/30 rounded-2xl p-6 sm:p-8 space-y-4 hover:border-[#4BA0A4] hover:shadow-xl transition-all duration-200"
                  >
                    <div className={`w-11 h-11 rounded-xl border flex items-center justify-center ${val.color}`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">
                        {val.title}
                      </h4>
                      <p className="text-xs text-[#94D4D4] font-normal leading-relaxed">
                        {val.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneAbout;
