"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import {
  Mail,
  MapPin,
  Send,
  Clock,
  Building2,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export const SceneFinal: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Pemesanan Board Game",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "b1db69cb-de44-4563-95d6-6ee8e311c5dd",
          subject: `[${formData.category}] Pengajuan dari ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          message: `Nama / Instansi: ${formData.name}\nEmail / Kontak: ${formData.email}\nKategori: ${formData.category}\n\nPesan Detail:\n${formData.message}`,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setFormSubmitted(true);
        setTimeout(() => {
          setFormSubmitted(false);
          setFormData({ name: "", email: "", category: "Pemesanan Board Game", message: "" });
        }, 6000);
      } else {
        alert("Gagal mengirim pesan. Silakan coba lagi atau hubungi via email langsung.");
      }
    } catch {
      alert("Terjadi kesalahan jaringan. Pastikan koneksi internet Anda aktif.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 sm:py-36 bg-ym-page text-ym-body relative border-t border-ym overflow-hidden transition-colors duration-300">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[#4BA0A4]/10 rounded-full blur-[190px] pointer-events-none" />

      {/* Giant Translucent Watermark Background Text */}
      <span className="absolute top-4 sm:top-0 left-1/2 -translate-x-1/2 text-[2rem] sm:text-9xl lg:text-[11rem] font-black text-[#4BA0A4] opacity-[0.04] dark:opacity-[0.07] pointer-events-none select-none font-mono tracking-tighter uppercase whitespace-nowrap z-0">
        CONTACT US
      </span>

      <Container size="medium">
        <div className="space-y-16 max-w-6xl mx-auto relative z-10">
          {/* Header Seksi Perusahaan */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#4BA0A4]/15 border border-[#4BA0A4]/30 text-ym-accent text-[11px] sm:text-xs font-black uppercase tracking-widest">
              <Building2 className="w-4 h-4 text-[#4BA0A4]" />
              <span>Kantor Pusat & Layanan Kemitraan</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-ym-heading tracking-tight leading-tight">
              Hubungi Tim <span className="text-image-clip inline-block">YouthMind Company</span>
            </h2>

            <p className="text-xs sm:text-base text-ym-muted max-w-2xl mx-auto leading-relaxed font-medium">
              Siap berkolaborasi untuk pemesanan board game edukasi, sosialisasi kesehatan mental di sekolah/instansi, maupun kemitraan strategis.
            </p>
          </div>

          {/* Grid Utama 2 Kolom: Informasi Perusahaan & Form Konsultasi/Kemitraan */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Official Enterprise Contact Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Headquarters Info Card */}
              <div className="bg-ym-card border border-ym rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden group transition-colors duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-80" />

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 flex items-center justify-center text-[#4BA0A4] shrink-0 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-ym-accent">Markas Utama</span>
                    <h3 className="text-lg font-black text-ym-heading">SMKN 11 Bandung</h3>
                  </div>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-ym-body leading-relaxed border-t border-ym pt-4">
                  <p className="font-semibold text-ym-heading">YouthMind Student Company Secretariat</p>
                  <p className="text-ym-muted">
                    Jl. Budhi, Cilember, Kec. Cicendo, Kota Bandung, Jawa Barat 40175, Indonesia
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[11px] font-bold text-ym-accent pt-1">
                  <Clock className="w-3.5 h-3.5 text-[#4BA0A4]" />
                  <span>Jam Operasional: Senin – Jumat (08:00 – 16:00 WIB)</span>
                </div>
              </div>

              {/* Direct Mail & Support Card */}
              <div className="bg-ym-card border border-ym rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden transition-colors duration-300">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#4BA0A4]/20 border border-[#4BA0A4]/40 flex items-center justify-center text-[#4BA0A4] shrink-0 shadow-md">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-ym-accent">Surel Resmi</span>
                      <h3 className="text-lg font-black text-ym-heading">Surat & Kemitraan</h3>
                    </div>
                  </div>

                  <a
                    href="mailto:youthmindcompany@gmail.com"
                    className="block p-4 rounded-2xl bg-ym-subtle border border-ym hover:border-[#4BA0A4] transition-all group"
                  >
                    <span className="text-xs text-ym-muted block mb-0.5">Email Resmi Perusahaan:</span>
                    <span className="text-sm sm:text-base font-extrabold text-ym-heading group-hover:text-ym-accent transition-colors flex items-center justify-between">
                      youthmindcompany@gmail.com
                      <ExternalLink className="w-4 h-4 text-[#4BA0A4] opacity-70 group-hover:opacity-100" />
                    </span>
                  </a>
                </div>

                <div className="pt-4 border-t border-ym space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-extrabold text-ym-accent uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-[#4BA0A4]" />
                    <span>Dukungan Program Resmi</span>
                  </div>
                  <p className="text-xs text-ym-muted leading-relaxed">
                    Didukung oleh <strong className="text-ym-heading">Prestasi Junior Indonesia</strong> & <strong className="text-ym-heading">Z Zurich Foundation</strong> (JA Student Company Program).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Enterprise Inquiry Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-ym-card border border-ym rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden transition-colors duration-300">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#4BA0A4] to-transparent opacity-80" />

                <div className="space-y-6">
                  <div>
                    <span className="text-[11px] font-black uppercase tracking-widest text-ym-accent bg-[#4BA0A4]/20 px-3 py-1 rounded-full border border-[#4BA0A4]/30 inline-block mb-3">
                      Formulir Kemitraan & Informasi
                    </span>
                    <h3 className="text-xl sm:text-3xl font-black text-ym-heading">
                      Kirim Pesan atau Pengajuan Kemitraan
                    </h3>
                    <p className="text-xs sm:text-sm text-ym-muted font-medium pt-1">
                      Isi formulir di bawah ini, tim sekretariat YouthMind Company akan merespon pesan Anda segera.
                    </p>
                  </div>

                  <AnimatePresence mode="wait">
                    {formSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="p-8 rounded-2xl bg-ym-subtle border border-[#4BA0A4] text-center space-y-4 my-8"
                      >
                        <div className="w-16 h-16 rounded-full bg-[#4BA0A4]/20 border border-[#4BA0A4] text-[#4BA0A4] flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-8 h-8 text-[#4BA0A4]" />
                        </div>
                        <h4 className="text-xl font-bold text-ym-heading">Pesan Anda Berhasil Terkirim!</h4>
                        <p className="text-xs sm:text-sm text-ym-muted max-w-md mx-auto leading-relaxed">
                          Terima kasih atas minat dan kepercayaan Anda pada YouthMind Company. Tim sekretariat kami akan merespon pesan Anda melalui email/kontak yang Anda berikan.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-1.5">
                            <label htmlFor="contact-name" className="text-xs font-extrabold text-ym-heading uppercase tracking-wider block">
                              Nama Lengkap / Instansi *
                            </label>
                            <input
                              id="contact-name"
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="cth. Budi Santoso / SMA Negeri 1 Bandung"
                              className="w-full px-4 py-3 rounded-xl bg-ym-subtle border border-ym text-ym-heading text-xs sm:text-sm focus:outline-none focus:border-[#4BA0A4] focus:ring-1 focus:ring-[#4BA0A4] transition-all placeholder-[#59AAAA]/50"
                            />
                          </div>

                          <div className="space-y-1.5">
                            <label htmlFor="contact-email" className="text-xs font-extrabold text-ym-heading uppercase tracking-wider block">
                              Alamat Email / WhatsApp *
                            </label>
                            <input
                              id="contact-email"
                              type="text"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="cth. budi@gmail.com / 08123456789"
                              className="w-full px-4 py-3 rounded-xl bg-ym-subtle border border-ym text-ym-heading text-xs sm:text-sm focus:outline-none focus:border-[#4BA0A4] focus:ring-1 focus:ring-[#4BA0A4] transition-all placeholder-[#59AAAA]/50"
                            />
                          </div>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-category" className="text-xs font-extrabold text-ym-heading uppercase tracking-wider block">
                            Kategori Keperluan *
                          </label>
                          <select
                            id="contact-category"
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                            className="w-full px-4 py-3 rounded-xl bg-ym-subtle border border-ym text-ym-heading text-xs sm:text-sm focus:outline-none focus:border-[#4BA0A4] focus:ring-1 focus:ring-[#4BA0A4] transition-all"
                          >
                            <option value="Pemesanan Board Game">Pemesanan Board Game (LudoLadder / Codenopoly)</option>
                            <option value="Undangan Sosialisasi & Workshop">Undangan Sosialisasi & Workshop Sekolah</option>
                            <option value="Kemitraan Perusahaan & Sponsor">Kemitraan Perusahaan / Sponsor / Media</option>
                            <option value="Informasi Umum & Pertanyaan">Informasi Umum & Pertanyaan</option>
                          </select>
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-message" className="text-xs font-extrabold text-ym-heading uppercase tracking-wider block">
                            Pesan / Detail Kerjasama *
                          </label>
                          <textarea
                            id="contact-message"
                            rows={4}
                            required
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tuliskan detail pesanan, tanggal acara sosialisasi, atau pertanyaan Anda..."
                            className="w-full px-4 py-3 rounded-xl bg-ym-subtle border border-ym text-ym-heading text-xs sm:text-sm focus:outline-none focus:border-[#4BA0A4] focus:ring-1 focus:ring-[#4BA0A4] transition-all placeholder-[#59AAAA]/50 leading-relaxed"
                          />
                        </div>

                        <button
                          type="submit"
                          disabled={isLoading}
                          className="w-full py-4 rounded-xl bg-[#4BA0A4] hover:bg-[#59AAAA] active:bg-[#396E6E] disabled:opacity-60 disabled:cursor-not-allowed text-white font-extrabold text-sm sm:text-base transition-all shadow-lg shadow-teal-500/25 flex items-center justify-center gap-2 group cursor-pointer"
                        >
                          {isLoading ? (
                            <>
                              <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              <span>Mengirim...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              <span>Kirim Pesan Kemitraan</span>
                            </>
                          )}
                        </button>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SceneFinal;

