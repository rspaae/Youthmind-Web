"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Rocket, Flame, TrendingUp, Users, Star, Trophy, ImageIcon } from "lucide-react";

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
    color: "text-amber-500",
    borderColor: "border-amber-500/40",
    badgeColor: "text-amber-800 dark:text-amber-300 border-amber-500/30 bg-amber-500/15",
    title: "YouthMind Lahir dari Keresahan",
    desc: "Berawal dari keprihatinan siswa-siswi SMKN 11 Bandung terhadap minimnya ruang diskusi kesehatan mental remaja yang menyenangkan. Tim pertama terbentuk, riset dimulai, dan visi mulai dirangkai.",
    side: "right",
    photoAlt: "Dokumentasi Pembentukan Tim",
  },
  {
    year: "2024",
    label: "Desain & Prototipe",
    icon: Star,
    color: "text-teal-500",
    borderColor: "border-teal-500/40",
    badgeColor: "text-teal-800 dark:text-teal-300 border-teal-500/30 bg-teal-500/15",
    title: "Mekanik Permainan Dirancang",
    desc: "LudoLadder dan Codenopoly dirancang, diuji, dan divalidasi bersama siswa dan pendidik. Setiap skenario diskusi diseleksi agar benar-benar relevan dengan realita kesehatan mental remaja.",
    side: "left",
    photoAlt: "Dokumentasi Prototipe Board Game",
  },
  {
    year: "2024",
    label: "Grand Launching",
    icon: Rocket,
    color: "text-emerald-500",
    borderColor: "border-emerald-500/50",
    badgeColor: "text-emerald-800 dark:text-emerald-300 border-emerald-500/30 bg-emerald-500/15",
    title: "Grand Launching YouthMind Company",
    desc: "Momen bersejarah. YouthMind resmi diluncurkan — dua board game edukasi kesehatan mental hadir ke publik untuk pertama kalinya, membuka babak baru pembelajaran berbasis permainan di SMKN 11 Bandung.",
    side: "right",
    photoAlt: "Foto Grand Launching YouthMind 2024",
  },
  {
    year: "2024 — 2025",
    label: "Kompetisi Nasional",
    icon: Trophy,
    color: "text-amber-500",
    borderColor: "border-amber-500/60",
    badgeColor: "text-amber-800 dark:text-amber-300 border-amber-500/40 bg-amber-500/20 font-bold",
    title: "The Best Student Company @ ISCC",
    desc: "Puncak prestasi! YouthMind SMKN 11 Bandung berhasil meraih predikat 'The Best Student Company' di ajang Indonesia Student Company Competition (ISCC) oleh Prestasi Junior Indonesia & Zurich.",
    side: "left",
    highlight: true,
    photoAlt: "Dokumentasi Kemenangan YouthMind di ISCC",
  },
  {
    year: "Pasca ISCC",
    label: "Pertumbuhan & Ekspansi",
    icon: TrendingUp,
    color: "text-sky-500",
    borderColor: "border-sky-500/40",
    badgeColor: "text-sky-800 dark:text-sky-300 border-sky-500/30 bg-sky-500/15",
    title: "Distribusi & Kemitraan Meluas",
    desc: "YouthMind berkembang menjangkau lebih banyak sekolah, lembaga, dan komunitas pemuda. Produk board game mulai didistribusikan secara lebih luas di Bandung dan sekitarnya.",
    side: "right",
    photoAlt: "Dokumentasi Ekspansi YouthMind",
  },
  {
    year: "2025 — Kini",
    label: "Regenerasi Perusahaan",
    icon: Users,
    color: "text-[#4BA0A4]",
    borderColor: "border-[#4BA0A4]/60",
    badgeColor: "text-teal-800 dark:text-teal-300 border-teal-500/30 bg-teal-500/15",
    title: "YouthMind Second Generation",
    desc: "Tahun ini giliran kami. Generasi baru SMKN 11 Bandung yang sekarang pegang kendali YouthMind — belajar dari generasi pertama, tapi dengan cerita dan semangat kami sendiri.",
    side: "right",
    isCurrent: true,
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
      className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden border bg-ym-card border-ym ${
        highlight ? "ring-2 ring-emerald-400/40 shadow-md" : ""
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
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ym-subtle">
          <div className="w-10 h-10 rounded-full bg-ym-card flex items-center justify-center border border-ym shadow-sm">
            <ImageIcon className="w-4 h-4 text-ym-accent" />
          </div>
          <p className="text-[11px] text-ym-muted text-center px-4 leading-snug font-medium">
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
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? ["100%", "100%"] : ["0%", "100%"]);

  return (
    <section
      id="journey"
      ref={containerRef}
      className="py-20 sm:py-36 bg-ym-subtle/30 text-ym-body relative border-t border-ym overflow-hidden transition-colors duration-300"
    >
      {/* Giant Translucent Watermark */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2rem] sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        JOURNEY
      </span>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#59AAAA]/15 rounded-full blur-[180px] pointer-events-none" />

      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-16 sm:mb-24 px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-ym-accent bg-[#4BA0A4]/15 px-3 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Perjalanan & Rekam Jejak
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-ym-heading leading-tight">
            Jejak Sejarah YouthMind
          </h2>
          <p className="text-ym-body text-xs sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
            Dari satu ide di ruang kelas SMKN 11 Bandung — hingga Grand Launching dan regenerasi yang penuh semangat.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
          {/* Garis background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#4BA0A4]/30 -translate-x-1/2" />
          {/* Garis scroll animasi */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-0.5 bg-gradient-to-b from-amber-500 via-[#4BA0A4] to-[#396E6E] -translate-x-1/2 origin-top"
          />

          <div className="space-y-10 sm:space-y-20">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ duration: 0.5, delay: 0.06 }}
                  className="relative grid grid-cols-2 gap-3 sm:gap-10 items-center"
                >
                  {/* Dot timeline — selalu di tengah */}
                  <div
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shadow-md z-10 border-2 ${
                      item.highlight
                        ? "bg-emerald-500 border-emerald-300 shadow-emerald-400/40 scale-125"
                        : item.isCurrent
                          ? "bg-[#4BA0A4] border-white shadow-teal-400/40"
                          : "bg-ym-card border-ym"
                      }`}
                  >
                    <Icon
                      className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                        item.highlight || item.isCurrent ? "text-white" : "text-ym-accent"
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
      className={`rounded-2xl p-4 sm:p-6 border bg-ym-card hover:border-[#4BA0A4] transition-all duration-300 hover:-translate-y-1 cursor-default shadow-md hover:shadow-lg ${item.borderColor} ${
        item.highlight
          ? "ring-2 ring-emerald-400/40"
          : item.isCurrent
            ? "ring-2 ring-[#4BA0A4]/40"
            : ""
      }`}
    >
      <span
        className={`text-[10px] sm:text-xs font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border inline-flex items-center gap-1 ${item.badgeColor}`}
      >
        {item.year} · {item.label}
      </span>
      <h3
        className="text-base sm:text-xl font-black text-ym-heading mt-2.5 leading-snug"
      >
        {item.title}
      </h3>
      <p className="text-xs sm:text-sm text-ym-muted leading-relaxed mt-2">
        {item.desc}
      </p>
      {item.isCurrent && (
        <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] text-ym-accent font-extrabold">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4BA0A4] animate-pulse inline-block" />
          Aktif Saat Ini
        </div>
      )}
    </div>
  );
}

export default SceneJourney;
