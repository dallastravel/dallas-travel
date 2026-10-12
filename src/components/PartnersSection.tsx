import React from 'react';
import { PARTNERS } from '../data/dallasData';
import { Plane, Building, Handshake } from 'lucide-react';

export const PartnersSection: React.FC = () => {
  const visaRequirements = [
    'SK Penyelenggara Perjalanan Ibadah Umroh (PPIU)',
    'Paket Informasi Lengkap & Jadwal Perjalanan',
    'Tiket Asli PP (Indonesia - Saudi Arabia PP)',
    'Kontrak Hotel Makkah - Madinah yang Terverifikasi',
    'Asuransi Jamaah Perjalanan Ibadah Resmi',
    'Buku Kuning / Sertifikat Vaksinasi Meningitis',
    'Contact Land Arrangement & Tour Leader di Arab Saudi',
    'Penandatanganan Perjanjian Kerjasama MOU Kontrak'
  ];

  return (
    <section className="py-20 bg-white border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (From PDF Page 10) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            BERSINERGI UNTUK LAYANAN TERBAIK
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Kemitraan Strategis & Provider Visa
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            "Your Trusted Partner in Every Step of Your Umroh Journey." Berkolaborasi bersama maskapai penerbangan dunia, perbankan syariah terpercaya, dan muassasah perhotelan di Arab Saudi.
          </p>
        </div>

        {/* Partners Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Airlines */}
          <div className="p-7 rounded-2xl bg-[#FAF8F3] border border-[#E2D9C8] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#0E2A47]">
              <Plane className="w-5 h-5 text-[#C5A059] shrink-0" />
              <h3 className="text-lg font-bold font-cinzel text-[#0E2A47]">Maskapai Penerbangan</h3>
            </div>
            <p className="text-xs text-slate-600">
              Penerbangan langsung (direct flight) ke Jeddah & Madinah dengan kenyamanan kelas dunia:
            </p>
            <div className="space-y-3 pt-2">
              {PARTNERS.airlines.map((air, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white border border-[#E2D9C8] flex items-center justify-between shadow-xs">
                  <span className="text-sm font-bold text-[#0E2A47] font-cinzel">{air.name}</span>
                  <span className="text-xs text-[#C5A059] font-mono font-bold">{air.code}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Banking Partners */}
          <div className="p-7 rounded-2xl bg-[#FAF8F3] border border-[#E2D9C8] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#0E2A47]">
              <Building className="w-5 h-5 text-[#C5A059] shrink-0" />
              <h3 className="text-lg font-bold font-cinzel text-[#0E2A47]">Perbankan & Syariah</h3>
            </div>
            <p className="text-xs text-slate-600">
              Jaminan transaksi aman, rekening penampung porsi haji, dan tabungan umroh terpercaya:
            </p>
            <div className="space-y-2 pt-1">
              {PARTNERS.banking.map((bank, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-white border border-[#E2D9C8] shadow-xs">
                  <div className="text-xs font-bold text-[#0E2A47]">{bank.name}</div>
                  <div className="text-[10px] text-slate-500">{bank.role}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Muassasah & Hotel Provider */}
          <div className="p-7 rounded-2xl bg-[#FAF8F3] border border-[#E2D9C8] space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-[#0E2A47]">
              <Handshake className="w-5 h-5 text-[#C5A059] shrink-0" />
              <h3 className="text-lg font-bold font-cinzel text-[#0E2A47]">Muassasah Saudi</h3>
            </div>
            <p className="text-xs text-slate-600">
              Jaringan operasional resmi hotel bintang dan transportasi di Makkah & Madinah:
            </p>
            <div className="space-y-2 pt-1 max-h-60 overflow-y-auto pr-1">
              {PARTNERS.muassasah.map((item, i) => (
                <div key={i} className="p-2 rounded-lg bg-white border border-[#E2D9C8] shadow-xs">
                  <div className="text-xs font-bold text-[#0E2A47]">{item.name}</div>
                  <div className="text-[10px] text-emerald-700 font-medium">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Persyaratan Provider Visa Umroh (From PDF Page 10) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 shadow-xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#DFB76C] font-cinzel font-bold mb-1">
                LAYANAN B2B & PPIU KONSORSIUM
              </div>
              <h3 className="text-2xl font-bold text-white font-cinzel">
                Persyaratan Pengurusan Visa Umroh & Land Arrangement
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-[#071E33] bg-[#DFB76C] px-3 py-1.5 rounded-lg shrink-0">
              MoFA E-Visa Terintegrasi
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-200 font-sans-clean leading-relaxed mb-6 font-light">
            Sebagai Provider Visa Umroh terdaftar, Dallas Tour & Travel memfasilitasi penerbitan visa bagi travel agent, konsorsium PPIU, maupun rombongan jamaah dengan dokumen persyaratan resmi:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {visaRequirements.map((req, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-[#071E33] border border-[#C5A059]/30 flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#C5A059] text-[#071E33] flex items-center justify-center text-xs font-bold font-mono shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-xs text-slate-200 font-sans-clean leading-snug">
                  {req}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
