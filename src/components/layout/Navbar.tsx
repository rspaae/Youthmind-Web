"use client";

import React, { useState, useEffect } from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import { NAV_ITEMS } from "@/constants/navigation";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-md border-b border-[#396E6E]/40 py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <Container>
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center group focus:outline-none flex-shrink-0"
          >
            <YouthMindLogo variant="horizontal" size="lg" />
          </a>

          {/* Nav Desktop */}
          <nav className="hidden md:flex items-center gap-0.5 bg-slate-900/80 p-1.5 rounded-full border border-[#396E6E]/50 backdrop-blur-md">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-[#396E6E]/40 rounded-full transition-all duration-150"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Desktop — email */}
          <a
            href="mailto:youthmindcompany@gmail.com"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#4BA0A4]/20 text-[#59AAAA] border border-[#4BA0A4]/40 hover:bg-[#4BA0A4]/30 hover:text-white transition-all duration-200 flex-shrink-0"
          >
            {/* Gmail icon */}
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 18V6.825L11.025 10.9L16.05 6.825V18H6ZM17.05 7.975V18H20V5.55L17.05 7.975ZM4 18H6.95V7.975L4 5.55V18Z" fill="#EA4335"/>
              <path d="M6 6.825L11.025 10.9L16.05 6.825L11.025 3.1L6 6.825Z" fill="#FBBC04"/>
            </svg>
            Hubungi Kami
          </a>

          {/* Tombol Hamburger Mobile */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl text-slate-200 hover:bg-slate-800 active:bg-slate-800 focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Buka Menu Navigasi"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#4BA0A4]" />
            ) : (
              <Menu className="w-6 h-6 text-[#4BA0A4]" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bottom-0 z-40 bg-slate-950/97 backdrop-blur-xl flex flex-col justify-between px-5 py-6 animate-in fade-in duration-200">
          <div className="space-y-4">
            {/* Header drawer */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-widest text-[#4BA0A4]">
                Navigasi
              </span>
              <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#4BA0A4]/10 text-[#59AAAA] border border-[#4BA0A4]/30 font-semibold">
                SMKN 11 Bandung
              </span>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col space-y-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-base font-semibold text-slate-100 hover:text-[#59AAAA] hover:bg-slate-900 active:bg-slate-900 rounded-2xl transition-all border border-transparent hover:border-slate-800 min-h-[48px]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#4BA0A4] opacity-60">→</span>
                </a>
              ))}
            </nav>

            {/* Email CTA mobile */}
            <a
              href="mailto:youthmindcompany@gmail.com"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3.5 mt-2 rounded-2xl border border-[#4BA0A4]/40 bg-[#4BA0A4]/10 text-[#59AAAA] font-semibold text-sm min-h-[48px] hover:bg-[#4BA0A4]/20 transition-all"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 18V6.825L11.025 10.9L16.05 6.825V18H6ZM17.05 7.975V18H20V5.55L17.05 7.975ZM4 18H6.95V7.975L4 5.55V18Z" fill="#EA4335"/>
                <path d="M6 6.825L11.025 10.9L16.05 6.825L11.025 3.1L6 6.825Z" fill="#FBBC04"/>
              </svg>
              youthmindcompany@gmail.com
            </a>
          </div>

          <div className="pt-6 border-t border-slate-800 text-center space-y-1.5">
            <p className="text-xs font-medium text-slate-400">YouthMind Company · Student Company</p>
            <p className="text-[11px] text-slate-500">Pelopor Board Game Edukasi Kesehatan Mental</p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
