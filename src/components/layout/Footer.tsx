import React from "react";
import Container from "@/components/ui/Container";
import YouthMindLogo from "@/components/ui/YouthMindLogo";
import {
  COMPANY_NAME,
  COMPANY_SUBTITLE,
  COMPANY_TAGLINE,
  NAV_ITEMS,
} from "@/constants/navigation";

/* ── SVG Brand Icons ──────────────────────────────────────────────── */
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const GmailIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.910 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="#EA4335"/>
    <path d="M6.545 4.64L12 9.548l5.455-4.91L12 1.274 6.545 4.64z" fill="#FBBC04"/>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/youthmind.official",
    icon: InstagramIcon,
    color: "hover:text-pink-400 hover:border-pink-500/50",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/youthmind",
    icon: LinkedInIcon,
    color: "hover:text-sky-400 hover:border-sky-500/50",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@youthmind",
    icon: YouTubeIcon,
    color: "hover:text-red-400 hover:border-red-500/50",
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@youthmind",
    icon: TikTokIcon,
    color: "hover:text-white hover:border-slate-400/60",
  },
];

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-[#396E6E]/40">
      {/* Top Section */}
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-14 border-b border-slate-800/80">
          {/* Brand */}
          <div className="md:col-span-5 space-y-5">
            <YouthMindLogo variant="horizontal" size="lg" />
            <p className="text-sm text-slate-400 max-w-xs leading-relaxed">
              {COMPANY_TAGLINE}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className={`w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 transition-all duration-200 ${s.color}`}
                >
                  <s.icon />
                </a>
              ))}
            </div>

            {/* Gmail contact */}
            <a
              href="mailto:youthmindcompany@gmail.com"
              className="inline-flex items-center gap-2.5 mt-1 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#4BA0A4]/60 hover:bg-slate-800/80 transition-all duration-200 group"
            >
              <GmailIcon />
              <span className="text-xs text-slate-300 group-hover:text-white transition-colors font-medium">
                youthmindcompany@gmail.com
              </span>
            </a>
          </div>

          {/* Navigasi */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Navigasi</h4>
            <ul className="space-y-2.5 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-[#59AAAA] transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#396E6E] group-hover:bg-[#59AAAA] transition-colors flex-shrink-0" />
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institusi */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Institusi & Lokasi</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                {/* Map pin icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4BA0A4] flex-shrink-0 mt-0.5" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div>
                  <p className="font-semibold text-white">SMKN 11 Bandung</p>
                  <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Jl. Budhi, Cilember, Kec. Cicendo,<br />Kota Bandung, Jawa Barat</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                {/* Tag icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#4BA0A4] flex-shrink-0" fill="currentColor">
                  <path d="M21.41 11.58L12.41 2.58C12.05 2.22 11.55 2 11 2H4C2.9 2 2 2.9 2 4V11C2 11.55 2.22 12.05 2.59 12.42L11.59 21.42C11.95 21.78 12.45 22 13 22C13.55 22 14.05 21.78 14.41 21.41L21.41 14.41C21.78 14.05 22 13.55 22 13C22 12.45 21.77 11.94 21.41 11.58ZM5.5 7C4.67 7 4 6.33 4 5.5C4 4.67 4.67 4 5.5 4C6.33 4 7 4.67 7 5.5C7 6.33 6.33 7 5.5 7Z"/>
                </svg>
                <p className="text-[#4BA0A4] font-semibold text-xs">Student Company · Board Game Edukasi Kesehatan Mental</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-400 font-medium">youthmind_company</span>{" "}
            ({COMPANY_SUBTITLE}). Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#59AAAA]" />
            <span className="w-2 h-2 rounded-full bg-[#4BA0A4]" />
            <span className="w-2 h-2 rounded-full bg-[#396E6E]" />
            <span className="ml-1 text-slate-600">YouthMind Brand Colors</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
