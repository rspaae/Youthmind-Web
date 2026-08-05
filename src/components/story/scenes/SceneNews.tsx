"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import { Trophy, Newspaper, Calendar, ArrowUpRight, Download, Sparkles, MapPin, ExternalLink, Award } from "lucide-react";

type CategoryType = "all" | "prestasi" | "media" | "event";

interface NewsItem {
  id: string;
  category: "prestasi" | "media" | "event";
  date: string;
  title: string;
  publisher: string;
  summary: string;
  tag: string;
  isFeatured?: boolean;
}

const newsList: NewsItem[] = [
  {
    id: "iscc-winner-2024",
    category: "prestasi",
    date: "2024 — 2025",
    title: "Juara 1! YouthMind Meraih Gelar 'The Best Student Company' di ISCC",
    publisher: "Indonesia Student Company Competition · PJI & Zurich",
    summary:
      "Perjuangan panjang berbuah manis. Kerja keras seluruh tim SMKN 11 Bandung membuahkan piala The Best Student Company di ajang Indonesia Student Company Competition (ISCC) berkat inovasi board game LudoLadder & Codenopoly.",
    tag: "🏆 Champion ISCC",
    isFeatured: true,
  },
  {
    id: "school-roadshow-bandung",
    category: "event",
    date: "2024 — Berjalan",
    title: "Main Bareng & Ngobrolin Mental Health di Sekolah-Sekolah Bandung",
    publisher: "Tim Edukasi YouthMind Company",
    summary:
      "Kami keliling ke beberapa SMP & SMA/SMK di Bandung buat ngajak teman-teman sebaya main LudoLadder & Codenopoly. Lewat game ini, suasana diskusi kesehatan mental jadi cair dan enggak kaku.",
    tag: "🏫 Roadshow Bandung",
  },
  {
    id: "ja-sc-2024",
    category: "prestasi",
    date: "2024 — 2025",
    title: "Lolos & Didampingi Langsung oleh Mentor Zurich & PJI",
    publisher: "Prestasi Junior Indonesia & Zurich Foundation",
    summary:
      "Sejak awal perjalanan, kami berkesempatan dibimbing langsung oleh tim Prestasi Junior Indonesia dan Zurich Indonesia. Mulai dari riset pasar, desain komponen game, sampai strategi pengelolaan bisnis.",
    tag: "🚀 Mentorship",
  },
  {
    id: "media-mental-health",
    category: "media",
    date: "2024",
    title: "Board Game Edukasi Kesehatan Mental Diterima Hangat oleh Pendidik",
    publisher: "Komunitas & Media Edukasi",
    summary:
      "Senang sekali melihat LudoLadder dan Codenopoly mulai dipakai untuk sesi bimbingan konseling kelompok di sekolah. Para guru BK mengapresiasi cara baru ini dalam membuka komunikasi emosional remaja.",
    tag: "💬 Respon Guru BK",
  },
  {
    id: "exhibition-bandung",
    category: "event",
    date: "2024",
    title: "Keseruan Sesi Playtest & Exhibition Board Game Pertama",
    publisher: "Event & Pameran Bandung",
    summary:
      "Momen seru waktu pertama kali pameran dan playtest terbuka. Antusiasme teman-teman luar biasa saat mencoba kemasan Slide to Open! dan langsung larut dalam cerita pas main.",
    tag: "🎲 Playtest",
  },
  {
    id: "gen-2-launch",
    category: "prestasi",
    date: "2025",
    title: "Estafet Kepemimpinan: YouthMind Second Generation Dilantik",
    publisher: "Internal YouthMind",
    summary:
      "Perjalanan harus terus berlanjut. 19 siswa-siswi SMKN 11 Bandung siap meneruskan tongkat estafet untuk mengelola bisnis dan memperluas dampak positif YouthMind ke depannya.",
    tag: "🌱 Generasi 2",
  },
];

export const SceneNews: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  const filtered =
    activeCategory === "all"
      ? newsList
      : newsList.filter((item) => item.category === activeCategory);

  const featuredItem = newsList.find((item) => item.isFeatured);
  const regularItems = filtered.filter((item) =>
    activeCategory === "all" ? !item.isFeatured : true
  );

  return (
    <section id="news" className="py-20 sm:py-32 bg-[#0E2A2C] text-white border-t border-[#4BA0A4]/20">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Editorial */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#4BA0A4]/20">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#59AAAA] bg-[#4BA0A4]/20 px-3 py-1 rounded-full border border-[#4BA0A4]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#4BA0A4]" />
                <span>Kabar & Catatan Perjalanan</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Cerita Lapangan & Prestasi
              </h2>
              <p className="text-sm sm:text-base text-[#E0F4F4] font-normal leading-relaxed">
                Catatan kemenangan ISCC, roadshow sosialisasi ke sekolah-sekolah di Bandung, serta publikasi kegiatan YouthMind SMKN 11 Bandung.
              </p>
            </div>

            {/* Filter Category Chips */}
            <div className="flex flex-wrap items-center gap-2">
              {[
                { id: "all", label: "Semua" },
                { id: "prestasi", label: "Prestasi" },
                { id: "media", label: "Liputan" },
                { id: "event", label: "Kegiatan" },
              ].map((tab) => {
                const isActive = activeCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as CategoryType)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 border focus:outline-none ${
                      isActive
                        ? "bg-[#4BA0A4] text-white border-[#4BA0A4] font-bold shadow-md"
                        : "bg-[#4BA0A4]/15 text-[#E0F4F4] border-[#4BA0A4]/30 hover:text-white hover:bg-[#4BA0A4]/30"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Highlight Featured Card (Hanya muncul saat tab 'Semua' atau 'Prestasi') */}
          {(activeCategory === "all" || activeCategory === "prestasi") && featuredItem && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-gradient-to-br from-amber-500/20 via-[#194447] to-amber-500/10 border border-amber-400/50 rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden group hover:border-amber-400 transition-all"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-400/15 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-amber-500 text-white text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                      <Trophy className="w-3.5 h-3.5 stroke-[2.5]" />
                      {featuredItem.tag}
                    </span>
                    <span className="text-xs text-[#5A9090] font-medium">
                      {featuredItem.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight group-hover:text-[#59AAAA] transition-colors">
                    {featuredItem.title}
                  </h3>

                  <p className="text-[#E0F4F4] text-xs sm:text-base leading-relaxed">
                    {featuredItem.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-700">
                    <Award className="w-4 h-4" />
                    <span>{featuredItem.publisher}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="w-full lg:w-auto p-6 rounded-2xl bg-[#0E2A2C] border border-amber-400/30 text-center space-y-2 shadow-md">
                    <span className="text-3xl sm:text-4xl block">🏆</span>
                    <span className="text-xs font-bold text-amber-800 block uppercase tracking-wider">
                      The Best Student Company
                    </span>
                    <span className="text-[11px] text-[#5A9090] block leading-snug">
                      Juara Utama ISCC<br />Prestasi Junior Indonesia
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Regular News Items Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {regularItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-[#194447] border border-[#4BA0A4]/30 rounded-2xl p-6 flex flex-col justify-between hover:border-[#4BA0A4] hover:bg-[#1E5256] transition-all duration-200 shadow-sm hover:shadow-md group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-[#59AAAA] bg-[#4BA0A4]/20 px-2.5 py-0.5 rounded-md border border-[#4BA0A4]/30">
                        {item.tag}
                      </span>
                      <span className="text-[11px] text-[#94D4D4] font-medium">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#59AAAA] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-[#94D4D4] font-normal leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#4BA0A4]/20 flex items-center justify-between text-xs text-[#94D4D4]">
                    <span>{item.publisher}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#5A9090] group-hover:text-[#4BA0A4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Press Kit Download Card */}
          <div className="bg-[#194447] border border-[#4BA0A4]/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Perlu Logo, Foto Produk, atau Berkas Resmi YouthMind?
              </h4>
              <p className="text-xs text-[#94D4D4] max-w-xl leading-relaxed">
                Kami menyiapkan Press Kit berisi logo HD, foto-foto board game, dan profil perusahaan untuk keperluan liputan media atau publikasi mitra sekolah.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:youthmindcompany@gmail.com?subject=Permintaan%20Press%20Kit%20YouthMind"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4BA0A4] hover:bg-[#59AAAA] text-white font-bold text-xs transition-all shadow-md active:scale-95"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Minta Press Kit</span>
              </a>
              <a
                href="https://instagram.com/youthmind_company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#194447] hover:bg-[#1E5256] text-white font-semibold text-xs border border-[#4BA0A4]/30 transition-all shadow-sm"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#59AAAA]" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneNews;
