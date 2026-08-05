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
    <section id="news" className="py-20 sm:py-32 bg-slate-950 text-white border-t border-slate-900 relative">
      <Container>
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header Editorial */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-800/80">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#4BA0A4]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Kabar & Catatan Perjalanan</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Cerita Lapangan & Prestasi
              </h2>
              <p className="text-sm sm:text-base text-slate-400 font-normal leading-relaxed">
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
                        ? "bg-slate-200 text-slate-950 border-white font-bold"
                        : "bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
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
              className="relative bg-gradient-to-br from-amber-950/30 via-slate-900 to-slate-900/90 border border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden group hover:border-amber-400/60 transition-all"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md">
                      <Trophy className="w-3.5 h-3.5 stroke-[2.5]" />
                      {featuredItem.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {featuredItem.date}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight group-hover:text-amber-200 transition-colors">
                    {featuredItem.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                    {featuredItem.summary}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Award className="w-4 h-4" />
                    <span>{featuredItem.publisher}</span>
                  </div>
                </div>

                <div className="lg:col-span-4 flex lg:justify-end">
                  <div className="w-full lg:w-auto p-6 rounded-2xl bg-slate-950/80 border border-amber-500/30 text-center space-y-2">
                    <span className="text-3xl sm:text-4xl block">🏆</span>
                    <span className="text-xs font-bold text-amber-300 block uppercase tracking-wider">
                      The Best Student Company
                    </span>
                    <span className="text-[11px] text-slate-400 block leading-snug">
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
                  className="bg-slate-900/50 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-200 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-[#4BA0A4] bg-teal-500/10 px-2.5 py-0.5 rounded-md border border-teal-500/20">
                        {item.tag}
                      </span>
                      <span className="text-[11px] text-slate-500 font-medium">
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-teal-300 transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-400 font-normal leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
                    <span>{item.publisher}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#4BA0A4] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Press Kit Download Card */}
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base sm:text-lg font-bold text-white">
                Perlu Logo, Foto Produk, atau Berkas Resmi YouthMind?
              </h4>
              <p className="text-xs text-slate-400 max-w-xl leading-relaxed">
                Kami menyiapkan Press Kit berisi logo HD, foto-foto board game, dan profil perusahaan untuk keperluan liputan media atau publikasi mitra sekolah.
              </p>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href="mailto:youthmindcompany@gmail.com?subject=Permintaan%20Press%20Kit%20YouthMind"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#4BA0A4] hover:bg-[#59AAAA] text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
              >
                <Download className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Minta Press Kit</span>
              </a>
              <a
                href="https://instagram.com/youthmind_company"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs border border-slate-700 transition-all"
              >
                <span>Instagram</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneNews;
