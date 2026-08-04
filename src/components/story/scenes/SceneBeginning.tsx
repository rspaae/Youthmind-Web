"use client";

import React from "react";
import Container from "@/components/ui/Container";
import RevealText from "@/components/story/RevealText";

export const SceneBeginning: React.FC = () => {
  return (
    <section id="beginning" className="py-20 sm:py-36 bg-slate-950 text-white relative border-t border-slate-900">
      <Container size="small">
        <div className="space-y-6 sm:space-y-8 text-center px-2">
          <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#4BA0A4] bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
            Ruang Rasa & Cerita
          </span>

          <RevealText
            text="Every young person carries a story. Setiap remaja menyimpan rasa, gelisah, dan cerita yang sering kali tak terucapkan."
            className="text-xl sm:text-4xl md:text-5xl font-extrabold text-slate-100 justify-center leading-snug sm:leading-relaxed"
          />

          <p className="text-xs sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed pt-2">
            Di tengah hiruk pikuk masa muda, banyak dari kita ragu untuk jujur tentang apa yang dirasakan. Di YouthMind, kami percaya percakapan paling berharga tidak harus kaku — sebuah permainan meja sederhana bisa menjadi jembatan awal untuk saling mendengarkan.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SceneBeginning;
