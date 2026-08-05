"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";

const partners = [
  {
    id: "zurich",
    name: "Zurich Indonesia",
    role: "Sponsor Utama & Pendukung Program",
    desc: "Mendukung pengembangan kewirausahaan generasi muda dan inisiatif kesehatan mental melaui Z Zurich Foundation.",
    logo: "/assets/partners/zurich.png",
    aspect: "h-12 w-auto",
  },
  {
    id: "pji",
    name: "Prestasi Junior Indonesia",
    role: "Member of JA Worldwide",
    desc: "Menyelenggarakan program JA Student Company yang membina siswa dalam mengelola bisnis dan inovasi sosial.",
    logo: "/assets/partners/pji.png",
    aspect: "h-12 w-auto",
  },
  {
    id: "smkn11",
    name: "SMKN 11 Bandung",
    role: "Instansi Pendidikan Naungan",
    desc: "Sekolah induk yang menaungi, membina, dan memfasilitasi pembentukan Student Company YouthMind.",
    logo: "/assets/partners/smkn11.png",
    aspect: "h-14 w-auto",
  },
  {
    id: "chlorine",
    name: "PT Chlorine Digital Media",
    role: "Mitra Digital & Media",
    desc: "Mendukung YouthMind dalam pengembangan strategi digital, media kreatif, dan kehadiran online perusahaan.",
    logo: "/assets/partners/chlorine.png",
    aspect: "h-12 w-auto",
  },
];

export const ScenePartners: React.FC = () => {
  return (
    <section id="partners" className="py-20 sm:py-28 bg-slate-950 text-white border-t border-slate-900">
      <Container>
        <div className="space-y-12 max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#4BA0A4]">
              Mitra & Pendukung
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Didukung Oleh Organisasi Terkemuka
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
              Inovasi dan operasional YouthMind Company berjalan dengan dukungan dan pembinaan dari berbagai lembaga resmi.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-slate-700 transition-all duration-200"
              >
                <div className="space-y-6">
                  {/* Logo Container */}
                  <div className="bg-white rounded-xl p-4 flex items-center justify-center h-20 border border-slate-200/80 shadow-sm">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {partner.logo ? (
                        <Image
                          src={partner.logo}
                          alt={`${partner.name} Logo`}
                          width={200}
                          height={60}
                          className="max-h-12 w-auto object-contain"
                        />
                      ) : (
                        <span className="text-slate-700 font-black text-sm text-center leading-tight px-2">
                          {partner.name}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-1.5">
                    <h3 className="text-base font-bold text-white leading-snug">
                      {partner.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#4BA0A4]">
                      {partner.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScenePartners;
