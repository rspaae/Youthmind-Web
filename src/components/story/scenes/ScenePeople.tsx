"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { Sparkles, ShieldCheck, Star } from "lucide-react";

interface Member {
  name: string;
  role: string;
  isDirector?: boolean;
  badgeLabel?: string;
  image?: string;
}

interface DivisionGroup {
  id: string;
  title: string;
  badge: string;
  badgeBg: string;
  members: Member[];
}

const teamStructure: DivisionGroup[] = [
  {
    id: "executive",
    title: "Executive Leadership",
    badge: "Pimpinan Utama",
    badgeBg: "bg-teal-500/15 text-teal-800 dark:text-teal-300 border-teal-500/40",
    members: [
      { name: "Muhammad Hatta Rasyahputra", role: "Chief Executive Officer (CEO)", isDirector: true, badgeLabel: "CEO", image: "/assets/TeamYM/CEO/Edit.png" },
      { name: "Bella Febriana", role: "Corporate Secretary", isDirector: false, image: "/assets/TeamYM/Corporate Secretary/Edit.png" },
    ],
  },
  {
    id: "hrd",
    title: "Human Resources (HRD)",
    badge: "Pengembangan SDM",
    badgeBg: "bg-sky-500/15 text-sky-800 dark:text-sky-300 border-sky-500/40",
    members: [
      { name: "Aurel Desiana Putri", role: "Director of HRD", isDirector: true, image: "/assets/TeamYM/HRD/Aurel/Edit.png" },
      { name: "Felita Nandatama Futura", role: "Attendance & Payroll Specialist", isDirector: false, image: "/assets/TeamYM/HRD/Felita/Edit.png" },
      { name: "Meylie Marta Indah Hutajulu", role: "Training & Development Manager", isDirector: false, image: "/assets/TeamYM/HRD/Meylie/Edit.png" },
    ],
  },
  {
    id: "pr",
    title: "Public Relations (PR)",
    badge: "Relasi Publik & Komunitas",
    badgeBg: "bg-emerald-500/15 text-emerald-800 dark:text-emerald-300 border-emerald-500/40",
    members: [
      { name: "Rafa Ramdani", role: "Director of Public Relations", isDirector: true, image: "/assets/TeamYM/Public Relations/Rafa/Edit.png" },
      { name: "Miska Okta Diva Aria", role: "Public Relations Manager", isDirector: false, image: "/assets/TeamYM/Public Relations/Miska/Edit.png" },
      { name: "Nisrina Maharani", role: "Community Relations Manager", isDirector: false, image: "/assets/TeamYM/Public Relations/Nisrina/Edit.png" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing & Creative",
    badge: "Pemasaran & Desain",
    badgeBg: "bg-teal-500/15 text-teal-800 dark:text-teal-300 border-teal-500/40",
    members: [
      { name: "Nabila Safa Lesmana", role: "Director of Marketing", isDirector: true, image: "/assets/TeamYM/Marketing/Nabila/Edit.png" },
      { name: "Jessica Olivia", role: "Creative Design Manager", isDirector: false, image: "/assets/TeamYM/Marketing/Jessica/Edit.png" },
      { name: "Nadila", role: "Event Manager", isDirector: false, image: "/assets/TeamYM/Marketing/Nadila/Gif.png" },
      { name: "Alyya Izzati Fadhilah", role: "Brand Manager", isDirector: false, image: "/assets/TeamYM/Marketing/Alyya/Edit.png" },
    ],
  },
  {
    id: "sales",
    title: "Sales & Commercial",
    badge: "Penjualan & Kemitraan",
    badgeBg: "bg-amber-500/15 text-amber-800 dark:text-amber-300 border-amber-500/40",
    members: [
      { name: "Nurianti Naesya Putriatna", role: "Director of Sales", isDirector: true, image: "/assets/TeamYM/Sales/Nuri/Edit.png" },
    ],
  },
  {
    id: "finance",
    title: "Finance & Audit",
    badge: "Keuangan & Akuntansi",
    badgeBg: "bg-cyan-500/15 text-cyan-800 dark:text-cyan-300 border-cyan-500/40",
    members: [
      { name: "Senita Aprilia", role: "Director of Finance", isDirector: true, image: "/assets/TeamYM/Finance/Senita/Edit.png" },
      { name: "Muhammad Azriel Setiawan", role: "Finance Manager", isDirector: false, image: "/assets/TeamYM/Finance/Azriel/Edit.png" },
      { name: "Muhammad Attariq Zildjian", role: "Finance Manager", isDirector: false, image: "/assets/TeamYM/Finance/Tariq/Edit.png" },
    ],
  },
  {
    id: "production",
    title: "Production & R&D",
    badge: "Manufaktur & Game Design",
    badgeBg: "bg-indigo-500/15 text-indigo-800 dark:text-indigo-300 border-indigo-500/40",
    members: [
      { name: "Muhammad Fahri Ismail", role: "Director of Production", isDirector: true, image: "/assets/TeamYM/Production/Fahri/Edit.png" },
      { name: "Ziffara Anindya Putri", role: "R&D Manager", isDirector: false, image: "/assets/TeamYM/Production/Ziffara/Edit.png" },
      { name: "Bilqist Aulya Zahra", role: "Production Manager", isDirector: false, image: "/assets/TeamYM/Production/Bilqist/Edit.png" },
      { name: "Charisa Rivani Salsabila", role: "Purchasing Manager", isDirector: false, image: "/assets/TeamYM/Production/Charisa/Edit.png" },
      { name: "Maura Natali Putri", role: "Quality Control Manager", isDirector: false, image: "/assets/TeamYM/Production/Maura/Edit.png" },
    ],
  },
];

// Helper for initials fallback
const getInitials = (name: string) => {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

export const ScenePeople: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-36 bg-ym-page text-ym-body relative border-t border-ym overflow-hidden transition-colors duration-300">
      {/* Giant Translucent Watermark */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2rem] sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        OUR TEAM
      </span>

      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#59AAAA]/15 rounded-full blur-[170px] pointer-events-none" />

      <Container>
        {/* Header Seksi Terpusat */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16 sm:mb-24 px-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent text-[11px] sm:text-xs font-extrabold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#4BA0A4]" />
            <span>Struktur Perusahaan Resmi · Second Generation</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-ym-heading leading-tight">
            Board of Directors & Management<br />
            <span className="text-image-clip inline-block">YouthMind Company</span>
          </h2>

          <p className="text-ym-muted text-xs sm:text-base max-w-xl mx-auto leading-relaxed font-medium">
            Struktur Kepemimpinan Divisi.
          </p>

          {/* Centered Decorative Divider */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="h-[2px] w-12 bg-gradient-to-r from-transparent via-[#4BA0A4] to-[#4BA0A4]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#4BA0A4] shadow-md shadow-teal-400" />
            <div className="h-[2px] w-12 bg-gradient-to-l from-transparent via-[#4BA0A4] to-[#4BA0A4]" />
          </div>
        </div>

        {/* Struktur Divisi Rapi: Ukuran Kartu Setara dengan Director di Sebelah Kiri */}
        <div className="space-y-16 sm:space-y-24">
          {teamStructure.map((group) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Judul Divisi Terpusat */}
              <div className="text-center space-y-2 max-w-md mx-auto">
                <span className={`text-[10px] sm:text-xs font-black uppercase tracking-widest px-3.5 py-1 rounded-full border inline-block ${group.badgeBg}`}>
                  {group.badge}
                </span>

                <h3 className="text-xl sm:text-3xl font-black text-ym-heading tracking-tight">
                  {group.title}
                </h3>
              </div>

              {/* Grid Anggota: Ukuran Lebih Besar di Desktop, Pas di Mobile */}
              <div className="flex flex-wrap justify-center items-stretch gap-4 sm:gap-6 lg:gap-8 max-w-6xl lg:max-w-7xl mx-auto">
                {group.members.map((member) => (
                  <motion.div
                    key={member.name}
                    whileHover={{ scale: 1.04, y: -6 }}
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    className={`w-[calc(50%-8px)] sm:w-56 md:w-64 lg:w-72 xl:w-80 bg-ym-card backdrop-blur-md rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 lg:p-6 border transition-all duration-300 shadow-lg text-center flex flex-col justify-between items-center group touch-manipulation ${
                      member.isDirector
                        ? "border-[#4BA0A4] ring-2 ring-[#4BA0A4]/30 shadow-teal-900/40"
                        : "border-ym hover:border-[#4BA0A4]/60"
                    }`}
                  >
                    <div className="w-full space-y-3 sm:space-y-4 flex flex-col items-center">
                      {/* Frame Foto Ukuran Sama Presisi (Tampilan Penuh Tanpa Zoom Tight) */}
                      <div className="relative aspect-square w-full rounded-xl sm:rounded-2xl overflow-hidden bg-ym-subtle border border-ym group-hover:border-[#4BA0A4]/60 transition-colors shadow-inner flex flex-col items-center justify-center p-1">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={`Foto ${member.name} — ${member.role}`}
                            fill
                            loading="lazy"
                            quality={85}
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                            className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                          />
                        ) : (
                          <div className="flex flex-col items-center justify-center p-2 text-center w-full h-full bg-ym-subtle">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 text-teal-800 dark:text-teal-200 font-extrabold text-xs sm:text-base lg:text-xl flex items-center justify-center mb-1.5 sm:mb-2 ring-4 ring-teal-500/10 group-hover:scale-105 transition-transform shadow-md">
                              {getInitials(member.name)}
                            </div>
                            <span className="text-[9px] sm:text-xs text-ym-muted font-medium">
                              Foto Member
                            </span>
                          </div>
                        )}

                        {/* Top Indicator Badge */}
                        {member.isDirector && (
                          <div className="absolute top-2.5 right-2.5">
                            <span className="text-[8px] sm:text-xs font-black uppercase px-2.5 py-1 rounded-full bg-[#4BA0A4] text-white tracking-wider shadow-md flex items-center gap-1">
                              <Star className="w-3 h-3 fill-white inline" />
                              {member.badgeLabel ?? "Director"}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Nama & Role */}
                      <div className="space-y-1 sm:space-y-1.5 w-full text-center px-1">
                        <h4 className="text-xs sm:text-base lg:text-lg font-extrabold text-ym-heading group-hover:text-ym-accent transition-colors leading-snug line-clamp-2">
                          {member.name}
                        </h4>
                        <p className="text-[10px] sm:text-xs lg:text-sm font-bold text-ym-muted leading-tight">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    {/* Footer Tag Setara */}
                    <div className="pt-2 sm:pt-3 mt-3 sm:mt-4 w-full border-t border-ym flex items-center justify-center gap-1.5 sm:gap-2 text-[9px] sm:text-xs text-ym-muted font-semibold">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#4BA0A4]" />
                      <span>YouthMind Company</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ScenePeople;
