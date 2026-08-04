"use client";

import React from "react";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-900 text-white relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-start">
          {/* Kolom Informasi Kontak */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Hubungi Kami
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                Mari Berkolaborasi Bersama YouthMind
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                Tertarik dengan 2 produk board game edukasi kami, kemitraan sekolah, atau informasi pemesanan? Silakan hubungi tim kami melalui formulir atau kontak di bawah ini.
              </p>
            </div>

            {/* Informasi Kontak Resmi */}
            <div className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Alamat Institusi</h4>
                  <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                    SMKN 11 Bandung<br />
                    Jl. Budhi, Cilember, Kec. Cicendo, Kota Bandung, Jawa Barat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Email Resmi</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    contact@youthmindcompany.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Layanan WhatsApp / Kontak</h4>
                  <p className="text-xs text-slate-400 mt-0.5">
                    +62 (022) SMKN-11-BDG
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Formulir Kontak */}
          <div className="lg:col-span-7 bg-slate-950 p-6 sm:p-8 lg:p-10 rounded-3xl border border-slate-800 shadow-2xl w-full">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-5 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Formulir Pertanyaan & Pemesanan
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Nama Lengkap</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-base sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-300">Email / WhatsApp</label>
                  <input
                    type="text"
                    placeholder="nama@email.com / 0812xxx"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-base sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Subjek</label>
                <input
                  type="text"
                  placeholder="Pemesanan Board Game / Kemitraan Sekolah"
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-base sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-300">Pesan</label>
                <textarea
                  rows={4}
                  placeholder="Tuliskan detail pertanyaan atau kebutuhan kolaborasi Anda..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-base sm:text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-teal-500 transition-colors resize-none"
                />
              </div>

              <Button variant="primary" fullWidth size="lg" icon={<Send className="w-4 h-4" />}>
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
