"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Heart,
  Sparkles,
  Building2,
  Building,
  GraduationCap,
  Users,
  User,
  Coins,
  Gift,
  MapPin,
  Megaphone,
  UserCheck,
  Handshake,
  ArrowRight,
  HeartHandshake,
  Eye,
  BadgeCheck,
  Share2,
  Trophy,
  Award,
  Camera,
  School,
  Target,
} from "lucide-react";

export const SceneSupportJourney: React.FC = () => {
  const supporters = [
    { name: "Perusahaan", icon: Building2 },
    { name: "Brand", icon: Building },
    { name: "Institusi", icon: GraduationCap },
    { name: "Komunitas", icon: Users },
    { name: "Individu", icon: User },
  ];

  const supportTypes = [
    { name: "Sponsorship", icon: Coins },
    { name: "Funding", icon: Heart },
    { name: "Product Support", icon: Gift },
    { name: "Venue Support", icon: MapPin },
    { name: "Media Partnership", icon: Megaphone },
    { name: "Mentorship", icon: UserCheck },
    { name: "Collaboration", icon: Handshake },
  ];

  const sponsorBenefits = [
    {
      title: "Brand Exposure",
      desc: "Visibilitas brand kepada pelajar, pendidik, dan komunitas",
      icon: Eye,
    },
    {
      title: "Logo Placement",
      desc: "Penempatan logo pada produk, banner, & materi publikasi",
      icon: BadgeCheck,
    },
    {
      title: "Social Media Exposure",
      desc: "Publikasi & jangkauan kampanye di media sosial YouthMind",
      icon: Share2,
    },
    {
      title: "Event Collaboration",
      desc: "Kolaborasi acara sosialisasi, workshop, & pameran",
      icon: Trophy,
    },
    {
      title: "School Community Reach",
      desc: "Akses jaringan langsung ke komunitas sekolah & siswa",
      icon: School,
    },
    {
      title: "CSR / Social Impact",
      desc: "Peluang dampak sosial nyata pada edukasi kesehatan mental",
      icon: Target,
    },
    {
      title: "Partnership Certificate",
      desc: "Sertifikat & apresiasi kemitraan resmi perusahaan",
      icon: Award,
    },
    {
      title: "Documentation & Coverage",
      desc: "Dokumentasi kegiatan lengkap & publikasi media",
      icon: Camera,
    },
  ];

  const handleCtaClick = (type: "sponsor" | "partner") => {
    if (typeof window !== "undefined") {
      const messageText =
        type === "sponsor"
          ? "Halo Tim YouthMind, kami tertarik menjadi sponsor untuk mendukung gerakan dan perjalanan YouthMind."
          : "Halo Tim YouthMind, kami bermaksud untuk menjalin partnership / kolaborasi bersama YouthMind.";

      const categoryName = type === "sponsor" ? "Sponsorship & Funding" : "Kemitraan & Partnership";

      window.dispatchEvent(
        new CustomEvent("set-contact-category", {
          detail: categoryName,
        })
      );
    }
  };

  return (
    <section id="support-journey" className="py-24 sm:py-36 bg-ym-page text-ym-body relative border-t border-ym overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#4BA0A4]/15 rounded-full blur-[180px] pointer-events-none" />

      {/* Watermark Background Text */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2rem] sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        HELP US GROW
      </span>

      <Container>
        <div className="max-w-5xl mx-auto space-y-14 sm:space-y-20 relative z-10">
          {/* Header Section */}
          <div className="text-center space-y-4 max-w-3xl mx-auto px-2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent text-[11px] sm:text-xs font-black uppercase tracking-widest shadow-sm">
              <Sparkles className="w-4 h-4 text-[#4BA0A4]" />
              <span>Help Us Grow</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-ym-heading tracking-tight leading-tight">
              Support Our <span className="text-image-clip inline-block">Journey</span>
            </h2>

            <p className="text-xs sm:text-base sm:leading-relaxed text-ym-body font-medium leading-relaxed max-w-2xl mx-auto pt-1">
              YouthMind dibangun oleh siswa yang ingin menciptakan <strong className="text-ym-heading font-extrabold">impact</strong> melalui <span className="text-[#4BA0A4] font-bold">mental health education</span>, <span className="text-[#4BA0A4] font-bold">game-based learning</span>, dan <span className="text-[#4BA0A4] font-bold">entrepreneurship</span>.
            </p>
          </div>

          {/* Grid 2 Column: Terbuka Untuk & Bentuk Dukungan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            {/* Card 1: Terbuka Untuk Dukungan Dari */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative bg-ym-card border border-ym hover:border-[#4BA0A4]/60 rounded-3xl p-6 sm:p-9 shadow-2xl flex flex-col justify-between space-y-6 transition-all duration-300 overflow-hidden group hover:-translate-y-1 hover:shadow-teal-500/15"
            >
              {/* Glowing Top Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 flex items-center justify-center text-[#4BA0A4] group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-ym-subtle border border-ym text-ym-accent">
                    Terbuka Untuk
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-ym-heading">
                    Dukungan Dari
                  </h3>
                  <p className="text-xs text-ym-muted font-medium leading-relaxed">
                    Untuk terus berkembang, kami menyambut baik kolaborasi dari berbagai elemen masyarakat:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {supporters.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-ym-subtle border border-ym hover:border-[#4BA0A4]/60 text-ym-heading text-xs font-extrabold shadow-sm transition-colors cursor-default"
                      >
                        <Icon className="w-4 h-4 text-[#4BA0A4]" />
                        <span>{item.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            {/* Card 2: Bentuk Dukungan */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="relative bg-ym-card border border-ym hover:border-[#4BA0A4]/60 rounded-3xl p-6 sm:p-9 shadow-2xl flex flex-col justify-between space-y-6 transition-all duration-300 overflow-hidden group hover:-translate-y-1 hover:shadow-teal-500/15"
            >
              {/* Glowing Top Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#59AAAA] to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />

              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#59AAAA]/20 border border-[#59AAAA]/40 flex items-center justify-center text-[#59AAAA] group-hover:scale-110 transition-transform duration-300 shadow-md">
                    <Gift className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-ym-subtle border border-ym text-ym-accent">
                    Bentuk Kerjasama
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-black text-ym-heading">
                    Bentuk Dukungan
                  </h3>
                  <p className="text-xs text-ym-muted font-medium leading-relaxed">
                    Bentuk dukungan yang dapat Anda berikan untuk membantu kami menjangkau lebih banyak siswa:
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {supportTypes.map((item) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        whileHover={{ scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-ym-subtle border border-ym hover:border-[#4BA0A4]/60 text-ym-heading text-xs font-extrabold shadow-sm transition-colors cursor-default"
                      >
                        <Icon className="w-4 h-4 text-[#4BA0A4]" />
                        <span>{item.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── WHAT SPONSORS GET SECTION ── */}
          <div className="space-y-8 pt-4">
            <div className="text-center space-y-2 max-w-2xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent inline-block">
                Benefits & Impact
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-ym-heading tracking-tight">
                What Sponsors Get
              </h3>
              <p className="text-xs sm:text-base text-ym-muted font-medium leading-relaxed">
                Nilai tambah & dampak positif yang akan didapatkan sponsor dan mitra YouthMind:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {sponsorBenefits.map((benefit, bIdx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: bIdx * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="bg-ym-card border border-ym hover:border-[#4BA0A4]/50 rounded-2xl p-5 shadow-lg flex flex-col space-y-3 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 flex items-center justify-center text-[#4BA0A4] group-hover:bg-[#4BA0A4] group-hover:text-[#091D1E] transition-colors shrink-0">
                      <BenefitIcon className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-black text-ym-heading leading-tight group-hover:text-ym-accent transition-colors">
                        {benefit.title}
                      </h4>
                      <p className="text-[11px] text-ym-muted font-medium leading-relaxed">
                        {benefit.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href="#contact"
              onClick={() => handleCtaClick("sponsor")}
              className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#4BA0A4] via-[#59AAAA] to-[#396E6E] hover:opacity-95 active:scale-95 text-[#091D1E] font-black text-xs sm:text-sm shadow-xl shadow-teal-500/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Become Our Sponsor</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              onClick={() => handleCtaClick("partner")}
              className="w-full sm:w-auto flex-1 px-6 py-3.5 rounded-xl bg-ym-card border border-[#4BA0A4]/40 hover:border-[#4BA0A4] hover:bg-[#4BA0A4]/15 active:scale-95 text-ym-heading font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Partner With Us</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneSupportJourney;
