"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Image from "next/image";

const products = [
  {
    id: "ludo-ladder",
    image: "/assets/codenopoly.jpg",
    imageAlt: "Ludo Ladder — Board Game YouthMind",
    badge: "Board Game Utama",
    badgeColor: "bg-teal-100 text-teal-800",
    title: "Ludo Ladder",
    description:
      "Permainan papan berbasis ludo yang dirancang untuk membuka percakapan tentang kesehatan mental. Setiap langkah di papan membawa pemain pada skenario nyata tentang emosi, dukungan sosial, dan cara menghadapi tekanan.",
    specs: [
      { label: "Usia", value: "13+ Tahun" },
      { label: "Pemain", value: "3–6 Orang" },
      { label: "Durasi", value: "30–45 Menit" },
    ],
  },
  {
    id: "codenopoly",
    image: "/assets/ludo-ladder.jpg",
    imageAlt: "Codenopoly — Board Game YouthMind",
    badge: "Board Game Kedua",
    badgeColor: "bg-amber-100 text-amber-800",
    title: "Codenopoly",
    description:
      "Adaptasi Monopoly bertemakan dunia coding dan teknologi, dipadukan dengan momen refleksi kesehatan mental. Pemain belajar kolaborasi, manajemen stres, dan resiliensi dalam atmosfer kompetisi yang menyenangkan.",
    specs: [
      { label: "Usia", value: "13+ Tahun" },
      { label: "Pemain", value: "2–6 Orang" },
      { label: "Durasi", value: "20–30 Menit" },
    ],
  },
];

export const Product: React.FC = () => {
  return (
    <Section id="products">
      <Container>
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600">
            Produk Kami
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Dua Board Game yang{" "}
            <span className="text-image-clip inline-block">
              Mengubah Cara Bicara
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Dibuat oleh siswa SMKN 11 Bandung — bukan sekadar permainan, tapi
            jembatan percakapan tentang hal yang jarang dibicarakan.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
            >
              {/* Gambar Produk */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  quality={100}
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Konten */}
              <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full inline-block ${product.badgeColor}`}
                  >
                    {product.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {product.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Spesifikasi */}
                <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs text-slate-600 font-medium">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100"
                    >
                      <span className="block text-slate-400 text-[10px] uppercase font-bold mb-0.5">
                        {spec.label}
                      </span>
                      {spec.value}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default Product;
