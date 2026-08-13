"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Handshake, Award, Building2, GraduationCap, Globe, CheckCircle2, Radio, Users } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const partners = [
  {
    id: "zurich",
    name: "Zurich Indonesia",
    role: "Sponsor Utama & Pendukung Program",
    category: "Strategic Sponsor",
    desc: "Mendukung pengembangan kewirausahaan generasi muda & kesehatan mental melalui Z Zurich Foundation.",
    logo: "/assets/partners/zurich.png",
    icon: Award,
    badgeColor: "bg-sky-500/15 text-sky-300 border-sky-500/30",
    topGradient: "from-sky-400 via-teal-400 to-transparent",
    hoverBorder: "hover:border-sky-400/50",
  },
  {
    id: "pji",
    name: "Prestasi Junior Indonesia",
    role: "Member of JA Worldwide",
    category: "Pembina Resmi",
    desc: "Membina dan memfasilitasi program JA Student Company dalam pengelolaan bisnis dan inovasi sosial.",
    logo: "/assets/partners/pji.png",
    icon: Globe,
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/30",
    topGradient: "from-amber-400 via-yellow-400 to-transparent",
    hoverBorder: "hover:border-amber-400/50",
  },
  {
    id: "smkn11",
    name: "SMKN 11 Bandung",
    role: "Instansi Pendidikan Naungan",
    category: "Sekolah Induk",
    desc: "Sekolah naungan yang memfasilitasi, membina, dan mendampingi pembentukan Student Company YouthMind.",
    logo: "/assets/partners/smkn11.png",
    icon: GraduationCap,
    badgeColor: "bg-teal-500/15 text-teal-300 border-teal-500/30",
    topGradient: "from-teal-400 via-emerald-400 to-transparent",
    hoverBorder: "hover:border-teal-400/50",
  },
  {
    id: "chlorine",
    name: "PT Chlorine Digital Media",
    role: "Mitra Digital & Media",
    category: "Digital Partner",
    desc: "Mitra dalam pengembangan media kreatif, strategi komunikasi digital, dan kehadiran online perusahaan.",
    logo: "/assets/partners/chlorine.png",
    icon: Building2,
    badgeColor: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
    topGradient: "from-emerald-400 via-teal-400 to-transparent",
    hoverBorder: "hover:border-emerald-400/50",
  },
  {
    id: "oz-cool-school",
    name: "OZ Cool School",
    role: "Mitra Media & Komunitas Sekolah",
    category: "Youth Media Partner",
    desc: "Wadah ekspresi & publikasi media bagi pelajar serta dukungan kampanye edukasi di lingkungan sekolah.",
    logo: "/assets/partners/oz-cool-school.png",
    icon: Radio,
    badgeColor: "bg-orange-500/15 text-orange-300 border-orange-500/30",
    topGradient: "from-orange-400 via-amber-400 to-transparent",
    hoverBorder: "hover:border-orange-400/50",
  },
  {
    id: "fkkmbk-upi",
    name: "FKKMBK UPI",
    role: "Mitra Kolaborasi Bimbingan Konseling",
    category: "Academic Partner",
    desc: "Forum Komunikasi Keluarga Mahasiswa BK UPI — mitra akademis dalam kajian dan edukasi bimbingan konseling.",
    logo: "/assets/partners/fkkmbk-upi.png",
    icon: Users,
    badgeColor: "bg-cyan-500/15 text-cyan-300 border-cyan-500/30",
    topGradient: "from-cyan-400 via-blue-400 to-transparent",
    hoverBorder: "hover:border-cyan-400/50",
  },
];

export const ScenePartners: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section id="partners" className="py-24 sm:py-32 bg-[#123638] text-white border-t border-[#4BA0A4]/20 relative overflow-hidden">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4]/5 pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        PARTNERS
      </span>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4BA0A4]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <div className="space-y-16 max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4BA0A4]/20 border border-[#4BA0A4]/30 text-[#59AAAA] text-[11px] font-extrabold uppercase tracking-widest">
              <Handshake className="w-3.5 h-3.5 text-[#4BA0A4]" />
              <span>Kemitraan Strategis</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Didukung Oleh Lembaga Terpercaya
            </h2>

            <p className="text-xs sm:text-base text-[#94D4D4] leading-relaxed font-medium">
              Inovasi dan operasional YouthMind Company berjalan melalui pembinaan dan kolaborasi dengan instansi resmi.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, idx) => {
              const CategoryIcon = partner.icon;
              return (
                <motion.div
                  key={partner.id}
                  initial={isMobile ? false : { opacity: 0, y: 25 }}
                  whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
                  viewport={isMobile ? undefined : { once: true }}
                  transition={{ duration: 0.4, delay: isMobile ? 0 : idx * 0.1 }}
                  className={`relative bg-gradient-to-b from-[#194447] via-[#143B3D] to-[#0E2A2C] border border-[#4BA0A4]/30 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4BA0A4]/15 ${partner.hoverBorder}`}
                >
                  {/* Glowing Top Edge Line */}
                  <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${partner.topGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                  <div className="space-y-6">
                    {/* Header Row: Category Badge */}
                    <div className="flex items-center justify-between gap-2">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${partner.badgeColor}`}>
                        <CategoryIcon className="w-3 h-3" />
                        {partner.category}
                      </span>
                    </div>

                    {/* Logo Display Frame */}
                    <div className="bg-white/95 rounded-2xl p-3 flex items-center justify-center h-24 border border-[#4BA0A4]/25 shadow-inner group-hover:border-[#4BA0A4] transition-colors">
                      <div className="relative w-full h-full flex items-center justify-center">
                        {partner.logo ? (
                          <img
                            src={partner.logo}
                            alt={`${partner.name} Logo`}
                            className="max-h-16 max-w-[180px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <span className="text-[#0E2A2C] font-extrabold text-sm text-center">
                            {partner.name}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Info */}
                    <div className="space-y-2">
                      <h3 className="text-base sm:text-lg font-black text-white group-hover:text-[#59AAAA] transition-colors leading-snug">
                        {partner.name}
                      </h3>
                      <p className="text-[11px] font-bold text-[#4BA0A4] leading-tight flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-[#59AAAA] shrink-0" />
                        <span>{partner.role}</span>
                      </p>
                      <p className="text-xs text-[#94D4D4] font-normal leading-relaxed pt-1">
                        {partner.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Trust Tag */}
          <div className="bg-[#194447]/60 border border-[#4BA0A4]/25 rounded-2xl p-4 sm:p-5 text-center max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-[#94D4D4] font-medium">
            <div className="w-2 h-2 rounded-full bg-[#4BA0A4] animate-ping shrink-0" />
            <span>
              YouthMind Company beroperasi secara resmi dalam ekosistem <strong className="text-white">JA Student Company</strong> binaan <strong className="text-white">Prestasi Junior Indonesia</strong> & <strong className="text-white">Z Zurich Foundation</strong>.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ScenePartners;
