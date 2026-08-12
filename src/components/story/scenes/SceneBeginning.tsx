"use client";

import React from "react";
import Container from "@/components/ui/Container";
import RevealText from "@/components/story/RevealText";

export const SceneBeginning: React.FC = () => {
  return (
    <section id="beginning" className="py-20 sm:py-36 bg-[#0E2A2C] text-white relative border-t border-[#4BA0A4]/20 overflow-hidden">
      {/* Giant Translucent Watermark */}
      <span className="absolute -top-8 sm:-top-12 left-1/2 -translate-x-1/2 text-5xl sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4]/5 pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        BEGINNING
      </span>

      <Container size="small">
        <div className="space-y-6 sm:space-y-8 text-center px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#59AAAA] bg-[#4BA0A4]/20 px-3.5 py-1 rounded-full border border-[#4BA0A4]/30 inline-block">
            Ruang Rasa & Cerita
          </span>

          <RevealText
            text="Every young person carries a story. Setiap remaja menyimpan rasa, gelisah, dan cerita yang sering kali tak terucapkan."
            className="text-xl sm:text-4xl md:text-5xl font-extrabold text-white justify-center leading-snug sm:leading-relaxed"
          />

          <p className="text-xs sm:text-base text-[#E0F4F4] max-w-xl mx-auto leading-relaxed pt-2 font-normal">
            Di tengah hiruk pikuk masa muda, banyak dari kita ragu untuk jujur tentang apa yang dirasakan. Di YouthMind, kami percaya percakapan paling berharga tidak harus kaku — sebuah permainan meja sederhana bisa menjadi jembatan awal untuk saling mendengarkan.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SceneBeginning;
