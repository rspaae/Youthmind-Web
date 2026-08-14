"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Leaf, Heart, Sparkles, ShieldCheck, Zap, Star } from "lucide-react";

const companyValues = [
  {
    id: "sustainability",
    num: "01",
    title: "Sustainability",
    subtitle: "Keberlanjutan Dampak",
    desc: "Berkomitmen menghadirkan produk board game berstandar etis yang ramah lingkungan dan memberikan dampak sosial positif yang berkelanjutan.",
    highlight: "Eco-Conscious",
    icon: Leaf,
    badge: "Keberlanjutan",
    badgeColor: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/30",
    topGradient: "from-emerald-400 via-teal-400 to-transparent",
    hoverBorder: "hover:border-emerald-400/50",
    glowBg: "group-hover:bg-emerald-500/10",
    iconBox: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border-emerald-500/30 shadow-sm",
  },
  {
    id: "positive-impact",
    num: "02",
    title: "Positive Impact",
    subtitle: "Kesehatan Mental Remaja",
    desc: "Menciptakan ruang aman berekspresi serta membangun kepekaan empati untuk mendukung kesehatan mental generasi muda.",
    highlight: "Ruang Aman & Empati",
    icon: Heart,
    badge: "Empati & Edukasi",
    badgeColor: "bg-rose-500/15 text-rose-800 dark:text-rose-300 border-rose-500/30",
    topGradient: "from-rose-400 via-pink-400 to-transparent",
    hoverBorder: "hover:border-rose-400/50",
    glowBg: "group-hover:bg-rose-500/10",
    iconBox: "bg-rose-500/15 text-rose-700 dark:text-rose-300 border-rose-500/30 shadow-sm",
    isFeatured: true,
  },
  {
    id: "innovative",
    num: "03",
    title: "Innovative Experience",
    subtitle: "Game-Based Learning",
    desc: "Mengembangkan metode pembelajaran kesehatan mental yang interaktif, edukatif, dan menyenangkan melalui inovasi media permainan papan.",
    highlight: "Interaktif & Edukatif",
    icon: Sparkles,
    badge: "Inovasi Permainan",
    badgeColor: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/30",
    topGradient: "from-amber-400 via-yellow-400 to-transparent",
    hoverBorder: "hover:border-amber-400/50",
    glowBg: "group-hover:bg-amber-500/10",
    iconBox: "bg-amber-500/15 text-amber-700 dark:text-amber-300 border-amber-500/30 shadow-sm",
  },
];

export const SceneAbout: React.FC = () => {
  return (
    <section id="about" className="py-24 sm:py-36 bg-ym-page border-t border-ym text-ym-body relative overflow-hidden transition-colors duration-300">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-6 sm:-top-10 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        ABOUT US
      </span>

      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#4BA0A4]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#59AAAA]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Shining Floating Leaf, Heart & Star Elements Moving Diagonally (Tablet & Desktop) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden sm:block">
        {/* Element 1: Glowing Leaf (Daun Bersinar) - Top Left */}
        <motion.div
          animate={{
            x: [-15, 15, -15],
            y: [-15, 15, -15],
            rotate: [-15, 15, -15],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-[5%] flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border border-emerald-500/40 bg-ym-card shadow-lg"
        >
          <Leaf className="w-6 h-6 lg:w-7 lg:h-7 text-emerald-600 dark:text-emerald-300 fill-emerald-500/20 drop-shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse" />
        </motion.div>

        {/* Element 2: Glowing Heart (Love Bersinar) - Top Right */}
        <motion.div
          animate={{
            x: [18, -18, 18],
            y: [-15, 15, -15],
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-[6%] flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border border-rose-500/40 bg-ym-card shadow-lg"
        >
          <Heart className="w-6 h-6 lg:w-7 lg:h-7 text-rose-600 dark:text-rose-300 fill-rose-500/20 drop-shadow-[0_0_10px_rgba(244,63,94,0.5)] animate-pulse" />
        </motion.div>

        {/* Element 3: Glowing Star (Bintang Bersinar) - Bottom Left */}
        <motion.div
          animate={{
            x: [-15, 15, -15],
            y: [15, -15, 15],
            rotate: [0, 45, 0],
          }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-24 left-[5%] flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border border-amber-500/40 bg-ym-card shadow-lg"
        >
          <Star className="w-6 h-6 lg:w-7 lg:h-7 text-amber-600 dark:text-amber-300 fill-amber-500/20 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)] animate-pulse" />
        </motion.div>

        {/* Element 4: Glowing Sparkle Star (Bintang Kilau Teal) - Bottom Right */}
        <motion.div
          animate={{
            x: [18, -18, 18],
            y: [15, -15, 15],
            rotate: [0, -45, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-28 right-[6%] flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-2xl border border-[#4BA0A4]/40 bg-ym-card shadow-lg"
        >
          <Sparkles className="w-6 h-6 lg:w-7 lg:h-7 text-teal-700 dark:text-teal-300 drop-shadow-[0_0_10px_rgba(75,160,164,0.5)] animate-pulse" />
        </motion.div>
      </div>

      <Container>
        <div className="space-y-16 sm:space-y-20 max-w-6xl mx-auto relative z-10">
          {/* Main Statement Card with Mobile Optimized Padding & Floating Micro-Badges */}
          <div className="relative bg-ym-card border border-ym rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 shadow-2xl overflow-hidden group transition-colors duration-300">
            {/* Top Glowing Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-80" />

            <div className="max-w-3xl mx-auto text-center space-y-5">
              {/* Static Badges (SMKN 11 Bandung & Student Company) */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 mb-1">
                <div className="px-3.5 py-1.5 rounded-full bg-ym-subtle border border-ym text-ym-muted text-xs font-bold flex items-center gap-2 shadow-sm">
                  <img src="/assets/partners/smkn11.png" alt="SMKN 11 Bandung Logo" className="w-4 h-4 object-contain" />
                  <span>SMKN 11 Bandung</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-ym-subtle border border-ym text-ym-accent text-xs font-bold flex items-center gap-2 shadow-sm">
                  <img src="/assets/logo-ym.png" alt="YouthMind Logo" className="w-4 h-4 object-contain" />
                  <span>Student Company</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/20 border border-[#4BA0A4]/30 text-ym-accent text-[11px] sm:text-xs font-extrabold tracking-wider uppercase">
                <Zap className="w-3.5 h-3.5 text-[#4BA0A4] animate-pulse" />
                <span>Tentang YouthMind Company</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-ym-heading tracking-tight leading-tight">
                Membangun Generasi Muda Berdaya Melalui{" "}
                <span className="text-image-clip inline-block">Board Game Edukasi</span>
              </h2>

              <p className="text-sm sm:text-xl text-ym-body leading-relaxed font-medium pt-2">
                YouthMind Company adalah student company inovatif dari SMKN 11 Bandung yang berfokus pada{" "}
                <span className="text-ym-accent font-bold underline decoration-[#4BA0A4]/50 underline-offset-4">
                  pengembangan board game kesehatan mental
                </span>{" "}
                serta aktif menggelar sosialisasi dan workshop interaktif ke berbagai sekolah di Kota Bandung.
              </p>
            </div>
          </div>

          {/* Company Values Section Header */}
          <div className="space-y-12">
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-ym-subtle border border-ym text-ym-muted text-[11px] font-extrabold uppercase tracking-widest">
                <ShieldCheck className="w-3.5 h-3.5 text-[#4BA0A4]" />
                <span>Company Values</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-ym-heading tracking-tight">
                Nilai & Pilar Utama Perusahaan
              </h3>
              <p className="text-xs sm:text-sm text-ym-muted font-medium leading-relaxed">
                Tiga prinsip utama yang mendasari setiap karya, produk, dan aksi sosial YouthMind Company.
              </p>
            </div>

            {/* Unique Handcrafted Bento Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch pt-2">
              {companyValues.map((val, idx) => {
                const IconComp = val.icon;
                return (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className={`relative bg-ym-card border border-ym rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-500 shadow-xl group hover:shadow-2xl hover:shadow-[#4BA0A4]/15 ${val.hoverBorder} ${
                      val.isFeatured ? "lg:-translate-y-3 lg:border-[#4BA0A4]/60 ring-1 ring-[#4BA0A4]/30" : ""
                    }`}
                  >
                    {/* Top Animated Edge Accent */}
                    <div className={`absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r ${val.topGradient} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Giant Translucent Watermark Number */}
                    <span className="absolute bottom-6 right-6 text-6xl font-black font-mono tracking-tighter text-ym-muted/20 group-hover:text-ym-accent/40 transition-colors duration-500 pointer-events-none select-none">
                      {val.num}
                    </span>

                    {/* Ambient Hover Glow inside card */}
                    <div className={`absolute inset-0 rounded-3xl pointer-events-none transition-colors duration-500 ${val.glowBg}`} />

                    <div className="relative z-10 space-y-6">
                      {/* Card Top Row: Custom Icon & Badge */}
                      <div className="flex items-center justify-between gap-3">
                        <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:scale-110 ${val.iconBox}`}>
                          <IconComp className="w-6 h-6" />
                        </div>

                        <span className={`text-[10px] sm:text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${val.badgeColor}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                          {val.badge}
                        </span>
                      </div>

                      {/* Header Text Group */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-widest text-ym-muted block">
                          {val.subtitle}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-black text-ym-heading group-hover:text-ym-accent transition-colors leading-tight">
                          {val.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-ym-body leading-relaxed font-normal pt-1">
                          {val.desc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Highlight Pill */}
                    <div className="relative z-10 pt-6 mt-6 border-t border-ym flex items-center justify-between">
                      <div className="px-3.5 py-1.5 rounded-xl bg-ym-subtle border border-ym text-[11px] font-bold text-ym-accent group-hover:border-[#4BA0A4]/50 transition-colors">
                        {val.highlight}
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

export default SceneAbout;


