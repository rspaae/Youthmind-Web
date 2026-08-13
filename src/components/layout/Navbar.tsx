"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import { NAV_ITEMS } from "@/constants/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Mail,
  Sparkles,
  Home,
  Info,
  Gamepad2,
  Users,
  Milestone,
  ChevronRight,
} from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

// Icon mapping for navigation items
const NAV_ICONS: Record<string, React.ElementType> = {
  "#hero": Home,
  "#about": Info,
  "#philosophy": Sparkles,
  "#products": Gamepad2,
  "#journey": Milestone,
  "#team": Users,
  "#contact": Mail,
};

const NAV_DESCS: Record<string, string> = {
  "#hero": "Halaman Utama",
  "#about": "Profil & Pilar Perusahaan",
  "#philosophy": "Nilai & Visi Misi Kami",
  "#products": "Board Game Edukasi",
  "#journey": "Pencapaian & Jejak Langkah",
  "#team": "Struktur Tim & Talenta",
  "#contact": "Hubungi & Berkolaborasi",
};

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section tracking for active state
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    const sectionId = href.replace("#", "");
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* ── Top Fixed Navigation Bar ────────────────────────────────────────────── */}
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out",
          isScrolled
            ? "py-3 bg-[#0E2A2C]/95 backdrop-blur-xl border-b border-[#4BA0A4]/30 shadow-xl shadow-[#0E2A2C]/90"
            : "py-3.5 sm:py-6 bg-gradient-to-b from-[#0E2A2C]/95 via-[#0E2A2C]/70 to-transparent"
        )}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Logo & Brand */}
            <a
              href="#hero"
              onClick={() => handleLinkClick("#hero")}
              className="flex items-center gap-2.5 group focus:outline-none flex-shrink-0"
            >
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-[#4BA0A4]/40 via-[#59AAAA]/20 to-teal-400/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                  <YouthMindLogo variant="iconOnly" size="md" />
                </div>
              </div>

              <div className="flex flex-col leading-none gap-0.5">
                <span
                  className="font-black tracking-tight text-white text-[16px] sm:text-[19px] leading-none"
                  style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
                >
                  Youth<span className="text-[#4BA0A4]">Mind</span>
                </span>
                <span className="text-[8px] sm:text-[8.5px] font-bold tracking-[0.2em] uppercase text-[#59AAAA] leading-none">
                  Student&nbsp;Company
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav aria-label="Navigasi Utama" className="hidden lg:flex items-center gap-1 bg-[#194447]/80 p-1.5 rounded-full border border-[#4BA0A4]/30 backdrop-blur-md shadow-xl shadow-black/30 ring-1 ring-white/10">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => handleLinkClick(item.href)}
                    className={clsx(
                      "relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5 focus:outline-none",
                      isActive
                        ? "text-white font-bold bg-[#4BA0A4]/30 border border-[#4BA0A4]/60 shadow-sm"
                        : "text-[#94D4D4] hover:text-white hover:bg-[#23585C]/60"
                    )}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4BA0A4] animate-pulse shadow-sm shadow-teal-400" />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Buttons (Desktop CTA & Mobile Toggle) */}
            <div className="flex items-center gap-2.5">
              {/* Desktop CTA Button */}
              <a
                href="mailto:youthmindcompany@gmail.com"
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black bg-gradient-to-r from-[#4BA0A4] via-[#59AAAA] to-teal-300 text-[#0E2A2C] shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
              >
                <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Hubungi Kami</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Mobile Top Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden px-3.5 py-2 rounded-xl bg-[#194447] border border-[#4BA0A4]/40 text-white hover:text-teal-200 active:scale-95 transition-all shadow-lg flex items-center gap-2 text-xs font-bold focus:outline-none"
                aria-label="Toggle Menu Navigasi"
              >
                {isMobileMenuOpen ? (
                  <>
                    <X className="w-4 h-4 text-[#4BA0A4]" />
                    <span className="text-[#94D4D4]">Tutup</span>
                  </>
                ) : (
                  <>
                    <Menu className="w-4 h-4 text-[#4BA0A4]" />
                    <span className="text-white font-extrabold">Menu</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* ── Fullscreen Animated Mobile Sheet / Drawer Overlay ─────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-40 bg-[#0E2A2C]/98 backdrop-blur-2xl pt-20 pb-8 px-5 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-5 max-w-md mx-auto w-full pt-2">
              {/* Drawer Header Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-[#4BA0A4]/25">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#4BA0A4]" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#59AAAA]">
                    Menu Navigasi
                  </span>
                </div>
                <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-[#4BA0A4]/20 text-[#94D4D4] border border-[#4BA0A4]/30">
                  SMKN 11 Bandung
                </span>
              </div>

              {/* Navigation Items List (All 7 items) */}
              <nav aria-label="Navigasi Seluler Lengkap" className="grid gap-2">
                {NAV_ITEMS.map((item, idx) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;
                  const Icon = NAV_ICONS[item.href] || Info;
                  const desc = NAV_DESCS[item.href] || "";

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03 }}
                      onClick={() => handleLinkClick(item.href)}
                      className={clsx(
                        "flex items-center justify-between p-3.5 rounded-2xl transition-all border group",
                        isActive
                          ? "bg-[#4BA0A4]/25 border-[#4BA0A4]/60 text-white shadow-lg shadow-teal-500/10"
                          : "bg-[#143B3D]/80 border-[#4BA0A4]/20 text-[#E0F4F4] hover:bg-[#194447]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={clsx(
                            "w-9 h-9 rounded-xl flex items-center justify-center border transition-colors",
                            isActive
                              ? "bg-[#4BA0A4] text-[#0E2A2C] border-[#4BA0A4]"
                              : "bg-[#194447] text-[#4BA0A4] border-[#4BA0A4]/30"
                          )}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex flex-col text-left">
                          <span className="text-sm font-black text-white group-hover:text-[#4BA0A4] transition-colors leading-tight">
                            {item.label}
                          </span>
                          <span className="text-[10px] text-[#94D4D4] font-medium leading-tight">
                            {desc}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5">
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-[#4BA0A4] animate-ping" />
                        )}
                        <ChevronRight
                          className={clsx(
                            "w-4 h-4 transition-transform",
                            isActive ? "text-[#4BA0A4] translate-x-0.5" : "text-[#5A9090] group-hover:translate-x-0.5"
                          )}
                        />
                      </div>
                    </motion.a>
                  );
                })}
              </nav>

              {/* Email CTA */}
              <a
                href="mailto:youthmindcompany@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-2xl bg-gradient-to-r from-[#4BA0A4] via-[#59AAAA] to-teal-300 text-[#0E2A2C] font-black text-xs shadow-xl shadow-teal-500/25 active:scale-98 transition-all mt-2"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>Hubungi YouthMind via Email</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Drawer Footer Branding */}
            <div className="pt-4 border-t border-[#4BA0A4]/20 text-center space-y-0.5 max-w-md mx-auto w-full mt-4">
              <p className="text-xs font-extrabold text-white">YouthMind Company · Student Company</p>
              <p className="text-[10px] text-[#94D4D4]">SMKN 11 Bandung · Pelopor Board Game Kesehatan Mental</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

