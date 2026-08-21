"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Award, Globe, GraduationCap, Building2, Radio, Users, ShieldCheck, Handshake, Heart } from "lucide-react";

// 1. Supported By (PJI, Zurich, SMKN 11 Bandung)
const supportedBy = [
  {
    id: "pji",
    name: "Prestasi Junior Indonesia",
    role: "Member of JA Worldwide · Pembina Resmi",
    category: "Supported By",
    logo: "/assets/partners/pji.png",
    icon: Globe,
    badgeColor: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30",
    topGradient: "from-amber-400 via-yellow-400 to-transparent",
    hoverBorder: "hover:border-amber-400/50",
  },
  {
    id: "zurich",
    name: "Zurich Indonesia",
    role: "Z Zurich Foundation · Sponsor Utama",
    category: "Supported By",
    logo: "/assets/partners/zurich.png",
    icon: Award,
    badgeColor: "bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-500/30",
    topGradient: "from-sky-400 via-teal-400 to-transparent",
    hoverBorder: "hover:border-sky-400/50",
  },
  {
    id: "smkn11",
    name: "SMKN 11 Bandung",
    role: "Sekolah Induk & Pembina",
    category: "Supported By",
    logo: "/assets/partners/smkn11.png",
    icon: GraduationCap,
    badgeColor: "bg-teal-500/15 text-teal-800 dark:text-teal-300 border-teal-500/30",
    topGradient: "from-teal-400 via-emerald-400 to-transparent",
    hoverBorder: "hover:border-teal-400/50",
  },
];

// 2. Partners (Media, Digital, Psychological & Academic Partners)
const partners = [
  {
    id: "chlorine",
    name: "PT Chlorine Digital Media",
    role: "Mitra Digital & Media Strategis",
    category: "Partner",
    logo: "/assets/partners/chlorine.png",
    icon: Building2,
    badgeColor: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
    topGradient: "from-emerald-400 via-teal-400 to-transparent",
    hoverBorder: "hover:border-emerald-400/50",
  },
  {
    id: "oz-cool-school",
    name: "OZ Cool School",
    role: "Mitra Media & Komunitas Sekolah",
    category: "Partner",
    logo: "/assets/partners/oz-cool-school.png",
    icon: Radio,
    badgeColor: "bg-orange-500/15 text-orange-800 dark:text-orange-300 border-orange-500/30",
    topGradient: "from-orange-400 via-amber-400 to-transparent",
    hoverBorder: "hover:border-orange-400/50",
  },
  {
    id: "fkkmbk-upi",
    name: "FKKMBK UPI",
    role: "Mitra Akademis Bimbingan Konseling",
    category: "Partner",
    logo: "/assets/partners/fkkmbk-upi.png",
    icon: Users,
    badgeColor: "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/30",
    topGradient: "from-cyan-400 via-blue-400 to-transparent",
    hoverBorder: "hover:border-cyan-400/50",
  },
  {
    id: "edulity",
    name: "Lembaga Psikologi Edulity",
    role: "Mitra Layanan & Edukasi Psikologi",
    category: "Partner",
    logo: "/assets/partners/edulity.png",
    icon: Heart,
    badgeColor: "bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30",
    topGradient: "from-pink-400 via-rose-400 to-transparent",
    hoverBorder: "hover:border-rose-400/50",
  },
];

export const ScenePartners: React.FC = () => {
  return (
    <section id="partners" className="py-20 sm:py-32 bg-ym-subtle/30 text-ym-body border-t border-ym relative overflow-hidden transition-colors duration-300">
      {/* Giant Translucent Watermark */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2rem] sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        PARTNERS
      </span>

      {/* Ambient Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4BA0A4]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container>
        <div className="space-y-16 max-w-6xl mx-auto relative z-10">

          {/* ── SECTION 1: SUPPORTED BY ── */}
          <div className="space-y-8">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent text-[11px] font-black uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4BA0A4]" />
                <span>Supported By</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-ym-heading tracking-tight">
                Didukung Oleh
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportedBy.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`relative bg-ym-card border border-ym rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4BA0A4]/15 ${item.hoverBorder}`}
                  >
                    {/* Glowing Top Edge Line */}
                    <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.topGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="space-y-4">
                      {/* Badge Header */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${item.badgeColor}`}>
                          <ItemIcon className="w-3 h-3" />
                          {item.category}
                        </span>
                      </div>

                      {/* Logo Display Frame */}
                      <div className="bg-white/95 rounded-2xl p-4 flex items-center justify-center h-28 border border-ym shadow-inner group-hover:border-[#4BA0A4] transition-colors">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.name} Logo`}
                            className="max-h-20 max-w-[200px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <span className="text-[#0E2A2C] font-extrabold text-sm text-center">
                            {item.name}
                          </span>
                        )}
                      </div>

                      {/* Title & Role Only */}
                      <div className="space-y-1 text-center pt-1">
                        <h3 className="text-base sm:text-lg font-black text-ym-heading group-hover:text-ym-accent transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#4BA0A4]">
                          {item.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── SECTION 2: PARTNERS ── */}
          <div className="space-y-8 pt-6 border-t border-ym/60">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent text-[11px] font-black uppercase tracking-widest">
                <Handshake className="w-3.5 h-3.5 text-[#4BA0A4]" />
                <span>Partners</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-ym-heading tracking-tight">
                Mitra Kolaborasi
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {partners.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    className={`relative bg-ym-card border border-ym rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl group hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#4BA0A4]/15 ${item.hoverBorder}`}
                  >
                    {/* Glowing Top Edge Line */}
                    <div className={`absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r ${item.topGradient} opacity-60 group-hover:opacity-100 transition-opacity duration-300`} />

                    <div className="space-y-4">
                      {/* Badge Header */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full border flex items-center gap-1.5 ${item.badgeColor}`}>
                          <ItemIcon className="w-3 h-3" />
                          {item.category}
                        </span>
                      </div>

                      {/* Logo Display Frame */}
                      <div className="bg-white/95 rounded-2xl p-4 flex items-center justify-center h-28 border border-ym shadow-inner group-hover:border-[#4BA0A4] transition-colors">
                        {item.logo ? (
                          <img
                            src={item.logo}
                            alt={`${item.name} Logo`}
                            className="max-h-20 max-w-[180px] w-auto h-auto object-contain transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <span className="text-[#0E2A2C] font-extrabold text-sm text-center">
                            {item.name}
                          </span>
                        )}
                      </div>

                      {/* Title & Role Only */}
                      <div className="space-y-1 text-center pt-1">
                        <h3 className="text-base sm:text-lg font-black text-ym-heading group-hover:text-ym-accent transition-colors leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-xs font-semibold text-[#4BA0A4]">
                          {item.role}
                        </p>
                      </div>
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

export default ScenePartners;
