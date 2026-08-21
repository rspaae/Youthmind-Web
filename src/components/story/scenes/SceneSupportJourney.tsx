"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Heart,
  Sparkles,
  Building2,
  GraduationCap,
  Users,
  Handshake,
  ArrowRight,
  HeartHandshake,
  BadgeCheck,
  Share2,
  Trophy,
  School,
  Target,
  BarChart3,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
  Zap,
  MessageSquare,
  Compass,
  Smile,
  Dices,
} from "lucide-react";

interface PartnershipTrack {
  id: string;
  title: string;
  categoryName: string;
  badge: string;
  icon: React.ElementType;
  description: string;
  benefits: string[];
  impactDeliverables: string;
  ctaText: string;
}

export const SceneSupportJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("corporate");
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  // Jalur Kolaborasi Ramah Student Company
  const partnershipTracks: PartnershipTrack[] = [
    {
      id: "corporate",
      title: "Brand & Mitra Pendukung",
      categoryName: "Sponsorship & Funding",
      badge: "Dukungan Produksi & Event",
      icon: Building2,
      description:
        "Dukung tim siswa YouthMind untuk memproduksi lebih banyak board game dan memperluas kunjungan roadshow edukasi ke berbagai sekolah yang membutuhkan.",
      benefits: [
        "Penempatan logo mitra di box board game, modul panduan, dan materi publikasi",
        "Dokumentasi foto & video penyerahan karya dan interaksi bermain siswa",
        "Sorotan apresiasi di media sosial dan website resmi YouthMind",
        "Laporan kegiatan dan sertifikat kemitraan apresiasi dari Student Company",
      ],
      impactDeliverables: "Membantu ratusan teman sebaya mendapatkan akses media belajar kesehatan mental yang seru.",
      ctaText: "Dukung Tim Sebagai Sponsor",
    },
    {
      id: "education",
      title: "Sekolah & Guru BK",
      categoryName: "Undangan Sosialisasi / Workshop",
      badge: "Main Bareng di Sekolah",
      icon: GraduationCap,
      description:
        "Undang tim YouthMind ke sekolah Anda untuk sesi bermain board game interaktif, diskusi santai kesehatan mental, dan pengenalan peran konselor sebaya.",
      benefits: [
        "Sesi sosialisasi & fasilitasi bermain board game seru bareng siswa",
        "Unit board game edukasi untuk melengkapi fasilitas ruang Bimbingan Konseling (BK)",
        "Modul tips pendampingan teman sebaya yang mudah dipahami remaja",
        "Sertifikat apresiasi sekolah mitra dan dokumentasi kegiatan bersama",
      ],
      impactDeliverables: "Menciptakan ruang aman di sekolah agar siswa lebih terbuka dan saling peduli.",
      ctaText: "Undang Kami ke Sekolah Anda",
    },
    {
      id: "community",
      title: "Komunitas & Media Muda",
      categoryName: "Kemitraan & Partnership",
      badge: "Sinergi Kreatif",
      icon: Handshake,
      description:
        "Mari berkolaborasi membuat konten edukasi, IG Live, podcast, maupun event bersama untuk menggaungkan kesadaran kesehatan mental di kalangan anak muda.",
      benefits: [
        "Kolaborasi konten kreatif, sharing session, dan kampanye digital bersama",
        "Saling promosi kegiatan di platform komunitas dan jaringan pelajar",
        "Akses materi visual dan kesempatan co-host workshop kepemudaan",
        "Memperluas jejaring positif sesama inisiator muda dan pelajar",
      ],
      impactDeliverables: "Menjangkau ribuan anak muda agar tidak merasa sendirian menghadapi masalah emosional.",
      ctaText: "Ajak Kolaborasi Kreatif",
    },
    {
      id: "backer",
      title: "Sahabat Donatur & Alumni",
      categoryName: "Sponsorship & Funding",
      badge: "Donasi Paket Board Game",
      icon: Heart,
      description:
        "Bagi individu, alumni, atau sahabat yang ingin berdonasi untuk membiayai paket board game agar dapat dibagikan gratis ke sekolah atau panti asuhan.",
      benefits: [
        "Setiap donasi langsung dikonversi menjadi unit board game untuk adik-adik pelajar",
        "Pencantuman nama / dedikasi di Wall of Appreciation YouthMind",
        "Laporan foto penyaluran dan senyum ceria siswa penerima manfaat",
        "Ucapan terima kasih khusus dan sticker pack eksklusif YouthMind",
      ],
      impactDeliverables: "Satu board game donasi Anda bisa dimainkan berkali-kali oleh puluhan siswa bergantian.",
      ctaText: "Berdonasi untuk Pelajar",
    },
  ];

  // Keuntungan Bermitra dengan Student Company yang Inovatif
  const sponsorBenefits = [
    {
      title: "Dukungan Nyata Karya Pelajar",
      desc: "Menjadi bagian langsung dari perjalanan wirausaha muda dan inovasi sosial buatan siswa SMK.",
      icon: Trophy,
      tag: "Youth Innovation",
    },
    {
      title: "Interaksi Langsung dengan Remaja",
      desc: "Membangun hubungan positif dan otentik dengan pelajar dan tenaga pendidik di sekolah.",
      icon: School,
      tag: "Otentik & Nyata",
    },
    {
      title: "Media Edukasi yang Berulang Dimainkan",
      desc: "Bukan sekadar brosur sekali pakai, board game kami akan terus dimainkan di ruang kelas & BK.",
      icon: Dices,
      tag: "Dampak Panjang",
    },
    {
      title: "Dokumentasi & Laporan yang Rapi",
      desc: "Kami menyusun rekap foto kegiatan, testimoni siswa, dan feedback kegiatan dengan transparan.",
      icon: BadgeCheck,
      tag: "Transparan",
    },
    {
      title: "Ekosistem Binaan Terpercaya",
      desc: "YouthMind dibimbing melalui program JA Student Company oleh Prestasi Junior Indonesia.",
      icon: Compass,
      tag: "PJI & Zurich Supported",
    },
    {
      title: "Promosi Positif & Menginspirasi",
      desc: "Citra brand / institusi Anda terangkat sebagai pendukung kepedulian kesehatan mental generasi muda.",
      icon: Share2,
      tag: "Positive Vibe",
    },
  ];

  // Transparansi Alokasi Karya & Dana
  const fundAllocations = [
    {
      category: "Produksi & Cetak Board Game Berkualitas",
      percentage: 45,
      color: "bg-[#4BA0A4]",
      desc: "Pencetakan papan permainan tebal, kartu emosi, pion, dadu, dan box yang aman digunakan siswa.",
    },
    {
      category: "Kegiatan Roadshow & Kunjungan Sekolah",
      percentage: 30,
      color: "bg-[#59AAAA]",
      desc: "Transportasi tim, perlengkapan sosialisasi, dan fasilitasi sesi main bareng di sekolah.",
    },
    {
      category: "Pengembangan Konten & Website Edukasi",
      percentage: 15,
      color: "bg-[#79C5C7]",
      desc: "Pembuatan materi edukasi digital gratis, website interaktif, dan modul konseling sebaya.",
    },
    {
      category: "Dokumentasi, Logistik & Operasional Tim",
      percentage: 10,
      color: "bg-[#94D4D4]",
      desc: "Perekaman foto/video kegiatan, perlengkapan pameran, dan laporan pertanggungjawaban.",
    },
  ];

  // FAQ Ringan & Jelas
  const faqs = [
    {
      q: "Apa itu YouthMind Student Company?",
      a: "YouthMind adalah perusahaan siswa (Student Company) dari SMKN 11 Bandung yang dibina oleh Prestasi Junior Indonesia (PJI) dengan dukungan Z Zurich Foundation. Kami mengembangkan media permainan edukatif untuk kesehatan mental remaja.",
    },
    {
      q: "Bagaimana bentuk kerjasama atau sponsorship yang bisa diberikan?",
      a: "Bentuk dukungan sangat fleksibel! Anda bisa mendukung pendanaan produksi board game, menjadi sponsor kegiatan roadshow sekolah, menyediakan venue/merchandise, atau sekadar berdonasi unit game untuk sekolah mitra.",
    },
    {
      q: "Apakah kami akan mendapatkan dokumentasi dan bukti kegiatan?",
      a: "Pasti! Kami akan mengirimkan laporan kegiatan yang rapi berisi foto dan video saat board game dimainkan oleh para siswa di sekolah, testimoni peserta, serta sertifikat apresiasi kemitraan.",
    },
    {
      q: "Bagaimana jika sekolah kami ingin mengundang tim YouthMind?",
      a: "Sangat bisa! Silakan klik tombol 'Undang Kami ke Sekolah' atau hubungi kami lewat formulir di bawah. Kami akan menyesuaikan jadwal kunjungan untuk bermain dan berbagi tips kesehatan mental bersama siswa.",
    },
  ];

  const handleCtaClick = (categoryName: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("set-contact-category", {
          detail: categoryName,
        })
      );
      const contactElem = document.getElementById("contact");
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const activeTrackData = partnershipTracks.find((t) => t.id === activeTab) || partnershipTracks[0];
  const ActiveTrackIcon = activeTrackData.icon;

  return (
    <section
      id="support-journey"
      className="py-20 sm:py-32 bg-ym-page text-ym-body relative border-t border-ym overflow-hidden transition-colors duration-300"
    >
      {/* Background Ambient Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-[#4BA0A4]/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[#59AAAA]/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Watermark Background Text */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2.2rem] sm:text-9xl lg:text-[11.5rem] font-black text-[#4BA0A4] opacity-[0.03] dark:opacity-[0.05] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        HELP US GROW
      </span>

      <Container>
        <div className="max-w-6xl mx-auto space-y-14 sm:space-y-20 relative z-10">
          {/* ── 1. HEADER & MISSION STATS ── */}
          <div className="text-center space-y-4 max-w-3xl mx-auto px-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/35 text-ym-accent text-xs font-black uppercase tracking-widest shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-[#4BA0A4] animate-pulse" />
              <span>Student Company • Karya Nyata Pelajar</span>
            </motion.div>

            <h2 className="text-3xl sm:text-5xl font-black text-ym-heading tracking-tight leading-tight">
              Tumbuh Bersama <span className="text-image-clip inline-block">Karya Inovasi Siswa</span>
            </h2>

            <p className="text-xs sm:text-base sm:leading-relaxed text-ym-body font-medium leading-relaxed max-w-2xl mx-auto">
              YouthMind lahir dari keresahan kami sebagai pelajar yang ingin membantu teman sebaya menjaga kesehatan mental lewat media permainan yang seru, hangat, dan mudah dimainkan bersama.
            </p>

            {/* Quick Impact Metric Badges (Authentic & Inspiring) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 max-w-4xl mx-auto text-left">
              {[
                { label: "Karya Asli Siswa", value: "SMKN 11", icon: Users, sub: "Inisiatif Berkelanjutan" },
                { label: "Board Game Edukatif", value: "2 Produk", icon: Dices, sub: "Codenopoly & Ludo Ladder" },
                { label: "Aktivitas Lapangan", value: "Roadshow", icon: School, sub: "Sosialisasi ke Sekolah" },
                { label: "Misi Utama Kami", value: "Teman Sebaya", icon: Smile, sub: "Ruang Aman untuk Remaja" },
              ].map((stat, i) => {
                const StatIcon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-3.5 sm:p-4 rounded-2xl bg-ym-card/75 border border-ym/80 backdrop-blur-sm shadow-md hover:border-[#4BA0A4]/60 transition-all group"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-7 h-7 rounded-lg bg-[#4BA0A4]/20 flex items-center justify-center text-[#4BA0A4] group-hover:scale-110 transition-transform">
                        <StatIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base font-black text-ym-heading tracking-tight">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-[11px] text-ym-heading font-extrabold leading-tight">
                      {stat.label}
                    </p>
                    <p className="text-[10px] text-ym-muted font-medium pt-0.5">
                      {stat.sub}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── 2. INTERACTIVE PARTNERSHIP PATHWAYS (TAB SWITCHER) ── */}
          <div className="space-y-6">
            <div className="text-center space-y-1.5 max-w-2xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-ym-subtle border border-ym text-ym-accent inline-block">
                Pilih Bentuk Kolaborasi
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-ym-heading tracking-tight">
                Bagaimana Anda Ingin Bergerak Bersama Kami?
              </h3>
              <p className="text-xs text-ym-muted font-medium">
                Pilih peran Anda dan mari rancang aksi kolaborasi yang bermanfaat:
              </p>
            </div>

            {/* Tab Navigation Pill Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto p-1.5 rounded-2xl bg-ym-card border border-ym shadow-lg">
              {partnershipTracks.map((track) => {
                const TabIcon = track.icon;
                const isActive = activeTab === track.id;
                return (
                  <button
                    key={track.id}
                    onClick={() => setActiveTab(track.id)}
                    className={`flex items-center gap-2 px-3.5 sm:px-4 py-2.5 rounded-xl font-extrabold text-xs sm:text-sm transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-[#4BA0A4] text-[#091D1E] shadow-md scale-[1.02]"
                        : "text-ym-body hover:text-ym-heading hover:bg-ym-subtle"
                    }`}
                  >
                    <TabIcon className="w-4 h-4" />
                    <span>{track.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Track Highlight Card */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrackData.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="bg-ym-card border border-[#4BA0A4]/40 rounded-3xl p-6 sm:p-9 shadow-2xl relative overflow-hidden group"
                >
                  {/* Glowing Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-80" />

                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                    {/* Left: Info & Description (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3 flex-wrap">
                        <div className="w-11 h-11 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 flex items-center justify-center text-[#4BA0A4] shadow-md shrink-0">
                          <ActiveTrackIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#4BA0A4]/20 text-ym-accent border border-[#4BA0A4]/30">
                            {activeTrackData.badge}
                          </span>
                          <h4 className="text-lg sm:text-2xl font-black text-ym-heading pt-0.5">
                            {activeTrackData.title}
                          </h4>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-ym-body leading-relaxed font-medium">
                        {activeTrackData.description}
                      </p>

                      <div className="space-y-2 pt-1">
                        <span className="text-xs font-black uppercase tracking-wider text-ym-heading flex items-center gap-2">
                          <Zap className="w-3.5 h-3.5 text-[#4BA0A4]" />
                          Yang Kami Siapkan untuk Mitra:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {activeTrackData.benefits.map((b, bIdx) => (
                            <div
                              key={bIdx}
                              className="flex items-start gap-2 text-xs text-ym-body bg-ym-subtle/70 border border-ym/80 p-2.5 rounded-xl leading-snug"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#4BA0A4] shrink-0 mt-0.5" />
                              <span>{b}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right: Projected Impact Box & Instant Action (5 cols) */}
                    <div className="lg:col-span-5 bg-ym-subtle border border-ym rounded-2xl p-5 sm:p-6 space-y-4 flex flex-col justify-between shadow-inner">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#4BA0A4]">
                          <Target className="w-4 h-4" />
                          <span>Dampak Nyata yang Dihasilkan</span>
                        </div>
                        <p className="text-xs sm:text-sm font-extrabold text-ym-heading leading-relaxed">
                          &ldquo;{activeTrackData.impactDeliverables}&rdquo;
                        </p>
                      </div>

                      <div className="pt-3 border-t border-ym space-y-2.5">
                        <button
                          onClick={() => handleCtaClick(activeTrackData.categoryName)}
                          className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#4BA0A4] via-[#59AAAA] to-[#396E6E] hover:opacity-95 active:scale-95 text-[#091D1E] font-black text-xs sm:text-sm shadow-xl shadow-teal-500/20 transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                        >
                          <span>{activeTrackData.ctaText}</span>
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                        <p className="text-[11px] text-center text-ym-muted font-medium">
                          ⚡ Pesan akan langsung masuk ke tim sekretariat siswa YouthMind
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ── 3. WHAT PARTNERS GET (NILAI TAMBAH BERMITRA) ── */}
          <div className="space-y-6 pt-2">
            <div className="text-center space-y-1.5 max-w-2xl mx-auto">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent inline-block">
                Nilai Tambah Kemitraan
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-ym-heading tracking-tight">
                Mengapa Mendukung YouthMind?
              </h3>
              <p className="text-xs text-ym-muted font-medium leading-relaxed">
                Kami berkomitmen memberikan keterbukaan, dampak sosial yang nyata, dan dokumentasi yang rapi:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sponsorBenefits.map((benefit, bIdx) => {
                const BenefitIcon = benefit.icon;
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: bIdx * 0.05 }}
                    whileHover={{ y: -4 }}
                    className="bg-ym-card border border-ym hover:border-[#4BA0A4]/60 rounded-2xl p-5 shadow-lg flex flex-col justify-between space-y-3.5 transition-all group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 flex items-center justify-center text-[#4BA0A4] group-hover:bg-[#4BA0A4] group-hover:text-[#091D1E] transition-all shrink-0 shadow-sm">
                          <BenefitIcon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-ym-subtle border border-ym text-ym-accent">
                          {benefit.tag}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h4 className="text-sm sm:text-base font-black text-ym-heading group-hover:text-ym-accent transition-colors">
                          {benefit.title}
                        </h4>
                        <p className="text-[11px] text-ym-muted font-medium leading-relaxed">
                          {benefit.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── 4. TRANSPARENT FUND UTILIZATION ── */}
          <div className="bg-ym-card border border-ym rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-80" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent text-[10px] font-black uppercase tracking-widest">
                  <BarChart3 className="w-3.5 h-3.5 text-[#4BA0A4]" />
                  <span>Transparansi Student Company</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-ym-heading tracking-tight">
                  Alokasi Penggunaan Dukungan
                </h3>
                <p className="text-xs text-ym-muted leading-relaxed font-medium">
                  Sebagai student company binaan PJI, kami memprioritaskan setiap rupiah untuk kualitas produk dan efektivitas interaksi belajar siswa di sekolah.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3">
                {fundAllocations.map((item) => (
                  <div key={item.category} className="space-y-1 bg-ym-subtle/50 p-3 rounded-2xl border border-ym/70">
                    <div className="flex items-center justify-between text-xs font-bold text-ym-heading">
                      <span>{item.category}</span>
                      <span className="text-[#4BA0A4] font-black text-xs sm:text-sm">{item.percentage}%</span>
                    </div>
                    {/* Progress bar */}
                    <div className="w-full h-2 rounded-full bg-ym-page/80 overflow-hidden border border-ym/50">
                      <div
                        className={`h-full ${item.color} rounded-full transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-ym-muted font-medium pt-0.5">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── 5. FAQ ACCORDION ── */}
          <div className="space-y-5 max-w-3xl mx-auto">
            <div className="text-center space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-ym-subtle border border-ym text-ym-accent inline-block">
                Tanya Jawab Seputar Kerjasama
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-ym-heading">
                Pertanyaan yang Sering Diajukan
              </h3>
            </div>

            <div className="space-y-2.5">
              {faqs.map((faq, fIdx) => {
                const isOpen = openFaqIdx === fIdx;
                return (
                  <div
                    key={fIdx}
                    className="bg-ym-card border border-ym hover:border-[#4BA0A4]/40 rounded-2xl overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : fIdx)}
                      className="w-full p-4 flex items-center justify-between text-left gap-3 cursor-pointer"
                    >
                      <div className="flex items-center gap-2.5">
                        <HelpCircle className="w-4 h-4 text-[#4BA0A4] shrink-0" />
                        <span className="text-xs sm:text-sm font-extrabold text-ym-heading">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-[#4BA0A4] shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="px-4 pb-4 text-xs text-ym-muted leading-relaxed font-medium border-t border-ym/50 pt-2.5"
                        >
                          {faq.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── 6. FINAL CALL TO ACTION HUB ── */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-ym-card via-ym-subtle to-ym-card border-2 border-[#4BA0A4]/50 shadow-2xl text-center space-y-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-56 h-56 bg-[#4BA0A4]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-2xl mx-auto space-y-2.5 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 flex items-center justify-center text-[#4BA0A4] mx-auto shadow-md">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-ym-heading tracking-tight">
                Mari Berkolaborasi & Dukung Karya Teman-Teman Siswa
              </h3>
              <p className="text-xs sm:text-sm text-ym-body font-medium leading-relaxed">
                Punya ide kolaborasi seru atau ingin mengundang tim YouthMind untuk sesi main bareng di sekolah Anda? Kami sangat antusias menyambutnya!
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto relative z-10">
              <button
                onClick={() => handleCtaClick("Sponsorship & Funding")}
                className="w-full sm:w-auto flex-1 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#4BA0A4] via-[#59AAAA] to-[#396E6E] hover:opacity-95 active:scale-95 text-[#091D1E] font-black text-xs sm:text-sm shadow-xl shadow-teal-500/25 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span>Dukung Tim Kami</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handleCtaClick("Undangan Sosialisasi / Workshop")}
                className="w-full sm:w-auto flex-1 px-5 py-3.5 rounded-xl bg-ym-card border border-[#4BA0A4]/50 hover:border-[#4BA0A4] hover:bg-[#4BA0A4]/15 active:scale-95 text-ym-heading font-black text-xs sm:text-sm shadow-md transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#4BA0A4]" />
                <span>Undang Main Bareng</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneSupportJourney;
