"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Eye } from "lucide-react";

export const SceneVision: React.FC = () => {
  return (
    <section
      id="vision"
      className="py-24 sm:py-36 bg-[#0E2A2C] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#4BA0A4]/12 rounded-full blur-[180px] pointer-events-none" />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          {/* Main Vision Glass Banner */}
          <div className="relative bg-gradient-to-b from-[#133A3D] via-[#0F2F31] to-[#0E2A2C] border border-[#4BA0A4]/35 rounded-3xl p-8 sm:p-14 lg:p-16 shadow-2xl overflow-hidden group">
            {/* Top Glowing Edge */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-80" />

            {/* Giant Watermark Background Text */}
            <span className="absolute -top-4 sm:-top-6 right-4 sm:right-8 text-5xl sm:text-9xl font-black text-[#4BA0A4]/10 pointer-events-none select-none font-mono tracking-tighter">
              VISION
            </span>

            <div className="relative z-10 space-y-8 text-center max-w-4xl mx-auto">
              {/* Badge Header */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/20 border border-[#4BA0A4]/30 text-[#59AAAA] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest">
                <Eye className="w-3.5 h-3.5 text-[#4BA0A4]" />
                <span>Our North Star · Visi Perusahaan</span>
              </div>

              {/* Main Statement */}
              <div className="space-y-4">
                <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                  "Menjadi pelopor permainan edukatif yang menginspirasi{" "}
                  <span className="text-[#59AAAA]">kebahagiaan, ketenangan,</span>{" "}
                  dan kesadaran{" "}
                  <span className="text-image-clip">kesehatan mental</span>."
                </p>
              </div>

              {/* Description Detail */}
              <p className="text-xs sm:text-base text-[#94D4D4] font-medium leading-relaxed max-w-2xl mx-auto pt-2">
                YouthMind Company berkomitmen mendorong kesehatan emosional generasi muda melalui pengalaman belajar berbasis board game yang edukatif, empati, dan ramah lingkungan.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SceneVision;
