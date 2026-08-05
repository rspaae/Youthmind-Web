"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import { NAV_ITEMS } from "@/constants/navigation";
import { Menu, X, ArrowUpRight, Mail, Sparkles, Home, Info, Gamepad2, Users, Compass } from "lucide-react";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "framer-motion";

// Bottom dock quick shortcuts for mobile
const QUICK_DOCK_ITEMS = [
  { label: "Beranda", href: "#hero", icon: Home },
  { label: "Tentang", href: "#about", icon: Info },
  { label: "Produk", href: "#products", icon: Gamepad2 },
  { label: "Tim", href: "#team", icon: Users },
];

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
            ? "py-3 bg-slate-950/90 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl shadow-slate-950/90"
            : "py-4 sm:py-6 bg-gradient-to-b from-slate-950/90 via-slate-950/40 to-transparent"
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
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-teal-500/30 via-[#4BA0A4]/20 to-cyan-500/10 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-teal-500/20 group-hover:border-teal-400/40 shadow-lg shadow-black/40 transition-all duration-300 overflow-hidden flex items-center justify-center group-hover:scale-105">
                  <YouthMindLogo variant="iconOnly" size="md" className="scale-110" />
                </div>
              </div>

              <div className="flex flex-col leading-none gap-0.5">
                <span
                  className="font-black tracking-tight text-white text-[17px] sm:text-[19px] leading-none"
                  style={{ fontFamily: "var(--font-fredoka), sans-serif" }}
                >
                  Youth<span className="text-[#4BA0A4]">Mind</span>
                </span>
                <span className="text-[8px] sm:text-[8.5px] font-bold tracking-[0.2em] uppercase text-teal-400/80 leading-none">
                  Student&nbsp;Company
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 p-1.5 rounded-full border border-teal-500/30 backdrop-blur-md shadow-xl shadow-black/40 ring-1 ring-white/5">
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
                        ? "text-teal-300 font-bold bg-teal-500/20 border border-teal-500/40 shadow-sm"
                        : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                    )}
                  >
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse shadow-sm shadow-teal-400" />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="mailto:youthmindcompany@gmail.com"
                className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black bg-gradient-to-r from-[#4BA0A4] via-teal-400 to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
              >
                <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
                <span>Hubungi Kami</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Mobile Top Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl bg-slate-900/90 border border-teal-500/30 text-slate-200 hover:text-white active:scale-95 transition-all shadow-md focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-teal-400" />
              ) : (
                <Menu className="w-5 h-5 text-teal-400" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* ── App-Style Floating Bottom Dock (Mobile) ────────────────────────────── */}
      <nav className="lg:hidden fixed bottom-4 inset-x-4 z-40 max-w-md mx-auto">
        <div className="bg-slate-950/90 backdrop-blur-2xl border border-teal-500/30 rounded-2xl p-1.5 shadow-2xl shadow-slate-950/90 flex items-center justify-around ring-1 ring-white/10">
          {QUICK_DOCK_ITEMS.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            const Icon = item.icon;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleLinkClick(item.href)}
                className={clsx(
                  "flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 text-[10px] font-bold gap-1 flex-1 text-center",
                  isActive
                    ? "bg-teal-500/20 text-teal-300 border border-teal-500/40 shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                )}
              >
                <Icon className={clsx("w-4 h-4", isActive ? "text-teal-400" : "text-slate-400")} />
                <span>{item.label}</span>
              </a>
            );
          })}

          {/* Full Menu Trigger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={clsx(
              "flex flex-col items-center justify-center py-1.5 px-3 rounded-xl transition-all duration-200 text-[10px] font-bold gap-1 flex-1 text-center border",
              isMobileMenuOpen
                ? "bg-teal-500 text-slate-950 border-teal-400 font-extrabold shadow-md shadow-teal-500/30"
                : "bg-slate-900/80 border-slate-800 text-teal-400 hover:bg-slate-800"
            )}
          >
            <Compass className="w-4 h-4" />
            <span>{isMobileMenuOpen ? "Tutup" : "Menu"}</span>
          </button>
        </div>
      </nav>

      {/* ── Fullscreen Animated Mobile Sheet / Drawer Overlay ─────────────────── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-3xl pt-24 pb-28 px-6 overflow-y-auto flex flex-col justify-between"
          >
            <div className="space-y-6 max-w-lg mx-auto w-full">
              {/* Drawer Header Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  <span className="text-xs font-black uppercase tracking-widest text-teal-300">
                    Navigasi Lengkap
                  </span>
                </div>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                  SMKN 11 Bandung
                </span>
              </div>

              {/* Navigation Items List */}
              <nav className="grid gap-2.5">
                {NAV_ITEMS.map((item, idx) => {
                  const sectionId = item.href.replace("#", "");
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                      onClick={() => handleLinkClick(item.href)}
                      className={clsx(
                        "flex items-center justify-between px-5 py-3.5 rounded-2xl transition-all border text-sm font-bold",
                        isActive
                          ? "bg-teal-500/20 border-teal-500/50 text-teal-300 shadow-lg shadow-teal-500/10"
                          : "bg-slate-900/60 border-slate-800/80 text-slate-200 hover:bg-slate-900"
                      )}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        className={clsx(
                          "w-4 h-4 transition-transform",
                          isActive ? "text-teal-400 translate-x-0.5 -translate-y-0.5" : "text-slate-600"
                        )}
                      />
                    </motion.a>
                  );
                })}
              </nav>

              {/* Email CTA */}
              <a
                href="mailto:youthmindcompany@gmail.com"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 px-5 py-4 rounded-2xl bg-gradient-to-r from-[#4BA0A4] via-teal-400 to-cyan-400 text-slate-950 font-black text-sm shadow-xl shadow-teal-500/25 active:scale-98 transition-all"
              >
                <Mail className="w-4 h-4 stroke-[2.5]" />
                <span>Hubungi YouthMind via Email</span>
              </a>
            </div>

            {/* Drawer Footer Branding */}
            <div className="pt-6 border-t border-slate-800/80 text-center space-y-1 max-w-lg mx-auto w-full">
              <p className="text-xs font-bold text-slate-300">YouthMind Company · Student Company</p>
              <p className="text-[11px] text-slate-500">SMKN 11 Bandung · Board Game Kesehatan Mental</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
