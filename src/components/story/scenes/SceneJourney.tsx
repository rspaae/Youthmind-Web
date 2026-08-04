"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Rocket, Flame, TrendingUp, Users, Star, ImageIcon } from "lucide-react";

type Milestone = {
  year: string;
  label: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  badgeColor: string;
  title: string;
  desc: string;
  side: "left" | "right";
  highlight?: boolean;
  isCurrent?: boolean;
  photo?: string; // path ke file foto, contoh: "/photos/journey/grand-launching.jpg"
  photoAlt?: string;
};

const milestones: Milestone[] = [
  {
    year: "2024",
    label: "Pembentukan & Riset",
    icon: Flame,
    color: "text-amber-400",
    borderColor: "border-amber-500/40",
    badgeColor: "text-amber-300 border-amber-500/30 bg-amber-500/15",
    title: "YouthMind Lahir dari Keresahan",
    desc: "Berawal dari keprihatinan siswa-siswi SMKN 11 Bandung terhadap minimnya ruang diskusi kesehatan mental remaja yang menyenangkan. Tim pertama terbentuk, riset dimulai, dan visi mulai dirangkai.",
    side: "right",
    // photo: "/photos/journey/pembentukan.jpg",
    photoAlt: "Dokumentasi Pembentukan Tim",
  },
  {
    year: "2024",
    label: "Desain & Prototipe",
    icon: Star,
    color: "text-teal-400",
    borderColor: "border-teal-500/40",
    badgeColor: "text-teal-300 border-teal-500/30 bg-teal-500/15",
    title: "Mekanik Permainan Dirancang",
    desc: "LudoLadder dan Codenopoly dirancang, diuji, dan divalidasi bersama siswa dan pendidik. Setiap skenario diskusi diseleksi agar benar-benar relevan dengan realita kesehatan mental remaja.",
    side: "left",
    // photo: "/photos/journey/prototipe.jpg",
    photoAlt: "Dokumentasi Prototipe Board Game",
  },
  {
    year: "2024",
    label: "Grand Launching",
    icon: Rocket,
    color: "text-emerald-400",
    borderColor: "border-emerald-500/50",
    badgeColor: "text-emerald-300 border-emerald-500/30 bg-emerald-500/15",
    title: "Grand Launching YouthMind Company",
    desc: "Momen bersejarah. YouthMind resmi diluncurkan — dua board game edukasi kesehatan mental hadir ke publik untuk pertama kalinya, membuka babak baru pembelajaran berbasis permainan di SMKN 11 Bandung.",
    side: "right",
    highlight: true,
    // photo: "/photos/journey/grand-launching.jpg",
    photoAlt: "Foto Grand Launching YouthMind 2024",
  },
  {
    year: "Pasca Grand Launching",
    label: "Pertumbuhan & Ekspansi",
    icon: TrendingUp,
    color: "text-sky-400",
    borderColor: "border-sky-500/40",
    badgeColor: "text-sky-300 border-sky-500/30 bg-sky-500/15",
    title: "Distribusi & Kemitraan Meluas",
    desc: "YouthMind berkembang menjangkau lebih banyak sekolah, lembaga, dan komunitas pemuda. Produk board game mulai didistribusikan secara lebih luas di Bandung dan sekitarnya.",
    side: "left",
    // photo: "/photos/journey/ekspansi.jpg",
    photoAlt: "Dokumentasi Ekspansi YouthMind",
  },
  {
    year: "2025 — Kini",
    label: "Regenerasi Perusahaan",
    icon: Users,
    color: "text-[#4BA0A4]",
    borderColor: "border-[#4BA0A4]/60",
    badgeColor: "text-teal-300 border-teal-500/30 bg-teal-500/15",
    title: "YouthMind Second Generation",
    desc: "Estafet kepemimpinan berpindah tangan. YouthMind Generasi Kedua hadir — 19 siswa-siswi terpilih SMKN 11 Bandung melanjutkan misi, memperbarui struktur organisasi, dan membawa YouthMind ke panggung yang lebih besar.",
    side: "right",
    isCurrent: true,
    // photo: "/photos/journey/generasi-2.jpg",
    photoAlt: "Foto YouthMind Second Generation",
  },
];

/* ─── Komponen Slot Foto ─────────────────────────────────────────── */
function PhotoSlot({
  photo,
  alt,
  borderColor,
  highlight,
}: {
  photo?: string;
  alt?: string;
  borderColor: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border bg-slate-900 ${borderColor} ${
        highlight ? "ring-1 ring-emerald-500/30 shadow-xl shadow-emerald-500/10" : ""
      }`}
    >
      {photo ? (
        <Image
          src={photo}
          alt={alt ?? "Dokumentasi YouthMind"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        /* Placeholder cantik saat foto belum diisi */
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-slate-900/80">
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
            <ImageIcon className="w-4 h-4 text-slate-500" />
          </div>
          <p className="text-[11px] text-slate-500 text-center px-4 leading-snug">
            {alt ?? "Foto akan ditambahkan"}
          </p>
        </div>
      )}
    </div>
  );
}

/* ─── Scene Utama ─────────────────────────────────────────────────── */
export const SceneJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-20 sm:py-36 bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-16 sm:mb-24 px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4BA0A4] bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
            Perjalanan & Rekam Jejak
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Jejak Sejarah YouthMind
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-xl mx-auto">
            Dari satu ide di ruang kelas SMKN 11 Bandung — hingga Grand Launching dan regenerasi yang penuh semangat.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
          {/* Garis background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-800/80 -translate-x-1/2" />
          {/* Garis scroll animasi */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-amber-400 via-teal-500 to-[#4BA0A4] -translate-x-1/2 origin-top"
          />

          <div className="space-y-10 sm:space-y-20">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0; // even = teks kiri, foto kanan | odd = foto kiri, teks kanan

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: 0.06 }}
                  className="relative grid grid-cols-2 gap-3 sm:gap-10 items-center"
                >
                  {/* Dot timeline — selalu di tengah */}
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-xl z-10 border-2 ${
                      item.highlight
                        ? "bg-emerald-500 border-emerald-300 shadow-emerald-500/40 scale-125"
                        : item.isCurrent
                        ? "bg-[#4BA0A4] border-teal-300 shadow-teal-500/40"
                        : "bg-slate-900 border-slate-700"
                    }`}
                  >
                    <Icon
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                        item.highlight || item.isCurrent ? "text-white" : item.color
                      }`}
                    />
                  </div>

                  {/* Kolom 1 */}
                  <div>
                    {isEven ? (
                      <ContentCard item={item} />
                    ) : (
                      <PhotoSlot
                        photo={item.photo}
                        alt={item.photoAlt}
                        borderColor={item.borderColor}
                        highlight={item.highlight}
                      />
                    )}
                  </div>

                  {/* Kolom 2 */}
                  <div>
                    {isEven ? (
                      <PhotoSlot
                        photo={item.photo}
                        alt={item.photoAlt}
                        borderColor={item.borderColor}
                        highlight={item.highlight}
                      />
                    ) : (
                      <ContentCard item={item} />
                    )}
                  </div>
                </motion.div>

              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

/* ─── Card Konten Teks ───────────────────────────────────────────── */
function ContentCard({ item }: { item: Milestone }) {
  return (
    <div
      className={`rounded-2xl p-4 sm:p-6 border bg-slate-900/60 hover:bg-slate-900/90 transition-all duration-300 hover:-translate-y-1 cursor-default ${item.borderColor} ${
        item.highlight
          ? "ring-1 ring-emerald-500/30 shadow-xl shadow-emerald-500/10"
          : item.isCurrent
          ? "ring-1 ring-[#4BA0A4]/30 shadow-xl shadow-teal-500/10"
          : ""
      }`}
    >
      <span
        className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border inline-flex items-center gap-1 ${item.badgeColor}`}
      >
        {item.year} · {item.label}
      </span>
      <h3
        className={`text-base sm:text-xl font-black text-white mt-2.5 leading-snug ${
          item.highlight ? "text-emerald-50" : ""
        }`}
      >
        {item.title}
      </h3>
      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
        {item.desc}
      </p>
      {item.isCurrent && (
        <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-teal-300 font-extrabold">
          <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse inline-block" />
          Aktif Saat Ini
        </div>
      )}
    </div>
  );
}

export default SceneJourney;
