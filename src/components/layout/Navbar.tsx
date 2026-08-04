"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import { NAV_ITEMS } from "@/constants/navigation";
import { Menu, X, ArrowUpRight, Mail, Sparkles } from "lucide-react";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      // Section tracking for active state
      const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
      const scrollPos = window.scrollY + 120;

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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
        isScrolled
          ? "py-3 bg-slate-950/85 backdrop-blur-xl border-b border-teal-500/20 shadow-2xl shadow-slate-950/80"
          : "py-5 sm:py-6 bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand Badge */}
          <a
            href="#hero"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
          >
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <div className="absolute -inset-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full blur opacity-0 group-hover:opacity-60 transition duration-500" />
              <YouthMindLogo variant="horizontal" size="lg" />
            </div>
          </a>

          {/* Nav Desktop: Modern Glass Floating Capsule */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/70 p-1.5 rounded-full border border-teal-500/30 backdrop-blur-md shadow-lg shadow-black/40 ring-1 ring-white/5">
            {NAV_ITEMS.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={clsx(
                    "relative px-4 py-2 text-xs font-semibold rounded-full transition-all duration-300 flex items-center gap-1.5",
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

          {/* CTA Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="mailto:youthmindcompany@gmail.com"
              className="relative inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-black bg-gradient-to-r from-[#4BA0A4] via-teal-400 to-cyan-400 text-slate-950 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 active:scale-95 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Mail className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Hubungi Kami</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[3] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-slate-900/80 border border-teal-500/30 text-slate-200 hover:text-white hover:bg-slate-800 active:scale-95 focus:outline-none transition-all shadow-md"
            aria-label="Buka Menu Navigasi"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-teal-400" />
            ) : (
              <Menu className="w-6 h-6 text-teal-400" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[70px] bottom-0 z-40 bg-slate-950/95 backdrop-blur-2xl flex flex-col justify-between px-6 py-8 border-t border-teal-500/20 animate-in fade-in slide-in-from-top-4 duration-300 overflow-y-auto">
          <div className="space-y-6">
            {/* Header Drawer */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span className="text-xs font-black uppercase tracking-widest text-teal-300">
                  Navigasi Utama
                </span>
              </div>
              <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30">
                SMKN 11 Bandung
              </span>
            </div>

            {/* Nav Links */}
            <nav className="grid gap-2">
              {NAV_ITEMS.map((item) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      "flex items-center justify-between px-5 py-4 text-base font-bold rounded-2xl transition-all border",
                      isActive
                        ? "bg-teal-500/15 border-teal-500/40 text-teal-300 shadow-md"
                        : "bg-slate-900/50 border-slate-800/60 text-slate-200 hover:bg-slate-900 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight
                      className={clsx(
                        "w-5 h-5 transition-transform",
                        isActive ? "text-teal-400" : "text-slate-500"
                      )}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Email CTA Mobile */}
            <a
              href="mailto:youthmindcompany@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-center gap-3 px-5 py-4 rounded-2xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black text-sm shadow-lg shadow-teal-500/20 active:scale-98 transition-all"
            >
              <Mail className="w-4 h-4 stroke-[2.5]" />
              <span>Hubungi YouthMind via Email</span>
            </a>
          </div>

          <div className="pt-8 border-t border-slate-800/80 text-center space-y-1">
            <p className="text-xs font-bold text-slate-300">YouthMind Company · Student Company</p>
            <p className="text-[11px] text-slate-500">Pelopor Board Game Edukasi Kesehatan Mental</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
