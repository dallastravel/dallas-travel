import React from 'react';
import { COMPANY_INFO } from '../data/dallasData';
import { MapPin, Phone, Mail, Globe, ArrowUp } from 'lucide-react';
import { DallasLogo } from './DallasLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071E33] text-slate-300 text-xs border-t border-[#C5A059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with Official Dallas Logo */}
          <div className="lg:col-span-5 space-y-4">
            <DallasLogo variant="dark" size="md" />

            <p className="text-xs text-slate-300 font-sans-clean leading-relaxed font-light max-w-sm pt-2">
              Biro Penyelenggara Perjalanan Ibadah Umroh (PPIU No. 64/2020) dan Ibadah Haji Khusus (PIHK No. 690/2020) berizin resmi Kementerian Agama Republik Indonesia.
            </p>

            <div className="pt-2 text-xs text-[#DFB76C] font-serif-luxury italic">
              "Pintu Menuju Baitullah · Journey of Faith, A Better You."
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Navigasi Halaman
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#hero" className="hover:text-[#DFB76C] transition-colors">Beranda Utama</a>
              </li>
              <li>
                <a href="#profil" className="hover:text-[#DFB76C] transition-colors">Profil Direksi & Mukadimah</a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-[#DFB76C] transition-colors">Layanan Unggulan & Catering</a>
              </li>
              <li>
                <a href="#paket" className="hover:text-[#DFB76C] transition-colors">Katalog Paket Umroh & Haji</a>
              </li>
              <li>
                <a href="#pengalaman" className="hover:text-[#DFB76C] transition-colors">Makkah & Madinah Experience</a>
              </li>
              <li>
                <a href="#pembimbing" className="hover:text-[#DFB76C] transition-colors">Team Pembimbing & Dokter Medis</a>
              </li>
              <li>
                <a href="#cabang" className="hover:text-[#DFB76C] transition-colors">21 Kantor Cabang Nasional</a>
              </li>
              <li>
                <a href="#dashboard-section" className="hover:text-[#DFB76C] transition-colors text-[#DFB76C] font-semibold">Dashboard Interaktif</a>
              </li>
            </ul>
          </div>

          {/* Office & Contacts (From PDF Page 1) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-cinzel">
              Kantor Pusat & Kontak
            </h4>
            
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFB76C] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <span>Telepon: <strong className="text-white font-mono">{COMPANY_INFO.phone}</strong> | Fax: <strong className="text-white font-mono">{COMPANY_INFO.fax}</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <span>Email: <strong className="text-white">{COMPANY_INFO.email}</strong></span>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#DFB76C] shrink-0" />
                <span>Website: <strong className="text-[#DFB76C]">{COMPANY_INFO.website}</strong></span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0E2A47] border border-[#C5A059]/40 text-slate-200 hover:text-white hover:border-[#DFB76C] transition-colors text-[11px]"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#DFB76C]" />
                <span>Kembali Ke Atas</span>
              </button>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Legal Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} PT Delta Laras Wisata (Dallas Tour & Travel). Seluruh hak cipta dilindungi undang-undang.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>PPIU Kemenag No. 64/2020</span>
            <span>·</span>
            <span>PIHK Kemenag No. 690/2020</span>
            <span>·</span>
            <span>AMPHURI & IATA</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
