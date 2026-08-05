"use client";

import React from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Eye } from "lucide-react";

export const SceneVision: React.FC = () => {
  return (
    <section
      id="vision"
      className="py-20 sm:py-32 bg-slate-950 text-white relative border-t border-slate-900 overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-teal-500/6 rounded-full blur-[140px]" />
      </div>

      <Container size="small">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative"
        >
          {/* Glass card */}
          <div className="bg-slate-900/70 backdrop-blur-xl rounded-3xl border border-[#4BA0A4]/30 shadow-2xl shadow-teal-950/40 overflow-hidden">
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent" />

            <div className="px-6 sm:px-12 py-10 sm:py-14 space-y-8 text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="flex flex-col items-center gap-3"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shadow-md shadow-teal-500/10">
                  <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-teal-400" />
                </div>
                <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-teal-300 bg-teal-500/10 border border-teal-500/20 px-4 py-1.5 rounded-full inline-block">
                  Visi Perusahaan
                </span>
              </motion.div>

              {/* Label Visi */}
              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-xl sm:text-3xl font-black tracking-tight text-white"
              >
                <span className="text-image-clip">Visi</span>
              </motion.h2>

              {/* Divider */}
              <div className="flex items-center justify-center gap-2">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4BA0A4]" />
                <div className="w-1.5 h-1.5 rounded-full bg-[#4BA0A4]" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4BA0A4]" />
              </div>

              {/* Teks Visi */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.22 }}
                className="text-base sm:text-xl lg:text-2xl text-slate-200 leading-relaxed sm:leading-loose font-medium max-w-2xl mx-auto"
              >
                Menjadi{" "}
                <span className="text-teal-300 font-bold">
                  pelopor dalam menciptakan pengalaman permainan yang seru dan
                  edukatif
                </span>{" "}
                untuk meningkatkan kesehatan mental, mendorong kebahagiaan dan
                ketenangan melalui{" "}
                <span className="text-teal-300 font-bold">
                  kesadaran dan kepekaan terhadap lingkungan sekitar
                </span>
                .
              </motion.p>

              {/* Decorative quote marks */}
              <div className="flex items-center justify-center gap-4 pt-2 opacity-20 select-none">
                <span className="text-5xl sm:text-7xl font-black text-teal-400 leading-none">"</span>
                <span className="text-5xl sm:text-7xl font-black text-teal-400 leading-none">"</span>
              </div>
            </div>

            {/* Bottom accent bar */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#4BA0A4]/40 to-transparent" />
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SceneVision;
