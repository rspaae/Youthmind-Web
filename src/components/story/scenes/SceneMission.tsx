"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Target } from "lucide-react";

const missions = [
  {
    number: "01",
    text: "Membantu mencapai keseimbangan mental dengan cara sederhana.",
  },
  {
    number: "02",
    text: "Meningkatkan kesadaran akan kesehatan mental.",
  },
  {
    number: "03",
    text: "Memperkuat hubungan antar-manusia.",
  },
  {
    number: "04",
    text: "Menyediakan pengalaman bermain yang joyful.",
  },
  {
    number: "05",
    text: "Menyediakan akses mendukung kesejahteraan mental.",
  },
];

export const SceneMission: React.FC = () => {
  return (
    <section
      id="mission"
      className="py-20 sm:py-32 bg-[#123638] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#59AAAA]/15 rounded-full blur-[130px] pointer-events-none" />

      <Container size="small">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-10"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex flex-col items-center gap-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 flex items-center justify-center shadow-md">
                <Target className="w-6 h-6 sm:w-7 sm:h-7 text-[#59AAAA]" />
              </div>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 border border-[#4BA0A4]/30 px-4 py-1.5 rounded-full">
                Misi Perusahaan
              </span>
            </div>

            <h2 className="text-xl sm:text-3xl font-black tracking-tight text-white">
              <span className="text-image-clip">Misi</span>
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 pt-1">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4BA0A4]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#4BA0A4]" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4BA0A4]" />
            </div>
          </div>

          {/* Mission Items */}
          <div className="space-y-3.5 sm:space-y-4">
            {missions.map((mission, idx) => (
              <motion.div
                key={mission.number}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: "easeOut" }}
                whileHover={{ scale: 1.015, x: 4 }}
                className="group flex items-center gap-4 sm:gap-6 bg-[#194447] hover:bg-[#1E5256] border border-[#4BA0A4]/30 hover:border-[#4BA0A4] rounded-2xl px-5 sm:px-7 py-4 sm:py-5 transition-all duration-300 shadow-md hover:shadow-lg cursor-default"
              >
                {/* Number badge */}
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 group-hover:border-[#4BA0A4] flex items-center justify-center transition-colors">
                  <span className="text-xs sm:text-sm font-black text-[#59AAAA] group-hover:text-white transition-colors">
                    {mission.number}
                  </span>
                </div>

                {/* Text */}
                <p className="text-sm sm:text-base lg:text-lg text-[#E0F4F4] group-hover:text-white font-semibold leading-snug transition-colors">
                  {mission.text}
                </p>

                {/* Right accent line */}
                <div className="ml-auto flex-shrink-0 w-0.5 h-6 sm:h-8 rounded-full bg-teal-200 group-hover:bg-[#4BA0A4] transition-colors" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SceneMission;
