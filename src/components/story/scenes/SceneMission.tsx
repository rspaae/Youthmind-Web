"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Target, CheckCircle2 } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";

const missions = [
  {
    number: "01",
    text: "Membantu mencapai keseimbangan mental secara sederhana & menyenangkan.",
  },
  {
    number: "02",
    text: "Meningkatkan kesadaran dan kepekaan masyarakat terhadap kesehatan mental.",
  },
  {
    number: "03",
    text: "Memperkuat hubungan interpersonal dan komunikasi emosional antar-manusia.",
  },
  {
    number: "04",
    text: "Menyediakan pengalaman belajar berbasis permainan (joyful learning) yang bermakna.",
  },
  {
    number: "05",
    text: "Memperluas akses edukasi untuk mendukung kesejahteraan emosional generasi muda.",
  },
];

export const SceneMission: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <section
      id="mission"
      className="py-24 sm:py-36 bg-[#123638] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#59AAAA]/10 rounded-full blur-[180px] pointer-events-none" />

      <Container>
        <div className="space-y-14 max-w-4xl mx-auto relative z-10">
          {/* Giant Watermark Background Text */}
          <span className="absolute -top-10 sm:-top-16 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4]/10 pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
            MISSION
          </span>

          {/* Header */}
          <div className="text-center space-y-4 max-w-xl mx-auto relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/20 border border-[#4BA0A4]/30 text-[#59AAAA] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest">
              <Target className="w-3.5 h-3.5 text-[#4BA0A4]" />
              <span>Misi Utama Perusahaan</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Misi YouthMind Company
            </h2>

            <p className="text-xs sm:text-base text-[#94D4D4] leading-relaxed font-medium">
              Komitmen nyata YouthMind dalam setiap karya dan aksi sosial perusahaan.
            </p>
          </div>

          {/* Beautified Vertical Mission List */}
          <div className="space-y-4 sm:space-y-5">
            {missions.map((mission, idx) => (
              <motion.div
                key={mission.number}
                initial={isMobile ? false : { opacity: 0, x: -20 }}
                whileInView={isMobile ? undefined : { opacity: 1, x: 0 }}
                viewport={isMobile ? undefined : { once: true }}
                transition={{ duration: 0.4, delay: isMobile ? 0 : idx * 0.08 }}
                className="relative group bg-gradient-to-r from-[#194447] via-[#143B3D] to-[#0E2A2C] border border-[#4BA0A4]/30 hover:border-[#4BA0A4] rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex items-center justify-between gap-5 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#4BA0A4]/15 hover:translate-x-2"
              >
                {/* Left Glowing Accent Edge */}
                <div className="absolute left-0 top-4 bottom-4 w-[3px] bg-[#4BA0A4] rounded-r-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-center gap-4 sm:gap-6">
                  {/* Number Badge */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 group-hover:border-[#4BA0A4] group-hover:bg-[#4BA0A4] flex items-center justify-center shrink-0 transition-all duration-300 shadow-md">
                    <span className="text-sm sm:text-base font-black font-mono text-[#59AAAA] group-hover:text-white transition-colors">
                      {mission.number}
                    </span>
                  </div>

                  {/* Mission Text */}
                  <p className="text-sm sm:text-lg font-bold text-[#E0F4F4] group-hover:text-white transition-colors leading-snug">
                    {mission.text}
                  </p>
                </div>

                {/* Right Indicator Icon */}
                <div className="shrink-0 hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-[#0E2A2C]/60 border border-[#4BA0A4]/20 group-hover:border-[#4BA0A4]/60 text-[#59AAAA] group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-[#4BA0A4]" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneMission;
