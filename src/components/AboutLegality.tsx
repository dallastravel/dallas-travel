import React from 'react';
import { COMPANY_INFO } from '../data/dallasData';
import { ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';
import { DallasLogo } from './DallasLogo';

export const AboutLegality: React.FC = () => {
  return (
    <section className="py-20 bg-white border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            Integritas & Kepastian Hukum
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Mukadimah & Legalitas Resmi Perusahaan
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            Berdiri sejak tahun 2013, PT Delta Laras Wisata memegang izin operasional lengkap dari Kementerian Agama RI untuk menjamin keamanan ibadah Anda.
          </p>
        </div>

        {/* Mukadimah Highlight Card (From PDF Page 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-block">
              <span className="text-xs uppercase tracking-widest font-bold text-[#C5A059] font-cinzel">
                MUKADIMAH RESMI
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A47] font-cinzel">
              Biro Perjalanan Wisata Terpercaya Sejak 2013
            </h3>
            <p className="text-sm sm:text-base text-slate-700 font-sans-clean leading-relaxed font-light">
              <strong className="text-[#0E2A47] font-semibold">DALLAS TOUR & TRAVEL</strong> adalah Biro Perjalanan Wisata yang berdiri tahun 2013 dan telah mendapatkan izin resmi dari Kementerian Agama RI sebagai Penyelenggara Perjalanan Ibadah Umroh (PPIU) dan Penyelenggara Ibadah Haji Khusus (PIHK).
            </p>
            <p className="text-sm sm:text-base text-slate-700 font-sans-clean leading-relaxed font-light">
              Kami berkomitmen sepenuh hati melaksanakan prinsip-prinsip yang bermartabat dan berintegritas dalam aktivitas pelayanan ibadah umroh kepada masyarakat, menjamin pelayanan handal dan amanah dengan Tour Leader serta Pembimbing bersertifikat resmi.
            </p>

            <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5E0D8] flex items-start gap-3 mt-2">
              <Building2 className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div className="text-xs sm:text-sm text-slate-700 font-sans-clean">
                <span className="font-bold text-[#0E2A47]">Kantor Pusat Resmi:</span> {COMPANY_INFO.address}
              </div>
            </div>
          </div>

          {/* Quick Stats Grid in Prestigious Navy & Gold */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 text-center shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-[#DFB76C] font-cinzel tabular-nums">11+</div>
              <div className="text-xs text-slate-200 mt-1 font-semibold">Tahun Jam Terbang</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Berdiri Sejak 2013</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 text-center shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-[#DFB76C] font-cinzel tabular-nums">21</div>
              <div className="text-xs text-slate-200 mt-1 font-semibold">Cabang & Perwakilan</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Jaringan Nasional</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#071E33] text-white border border-[#C5A059]/40 text-center shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-[#DFB76C] font-cinzel tabular-nums">100%</div>
              <div className="text-xs text-slate-200 mt-1 font-semibold">Izin Kemenag Sah</div>
              <div className="text-[11px] text-slate-300 mt-0.5">PPIU 64 & PIHK 690</div>
            </div>
            <div className="p-6 rounded-2xl bg-[#071E33] text-white border border-[#C5A059]/40 text-center shadow-md">
              <div className="text-3xl sm:text-4xl font-bold text-[#DFB76C] font-cinzel tabular-nums">12K+</div>
              <div className="text-xs text-slate-200 mt-1 font-semibold">Jamaah Diberangkatkan</div>
              <div className="text-[11px] text-slate-300 mt-0.5">Aman & Penuh Berkah</div>
            </div>
          </div>

        </div>

        {/* Legalities Cards (From PDF Page 5 & 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPANY_INFO.legalities.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#FAF8F3] border border-[#E5E0D8] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    idx < 2 ? 'bg-[#0E2A47] text-[#DFB76C]' : 'bg-[#C5A059] text-[#071E33]'
                  }`}>
                    {idx < 2 ? <ShieldCheck className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#0E2A47] font-bold bg-[#EBF0F5] px-2.5 py-1 rounded">
                    Terverifikasi
                  </span>
                </div>
                <h4 className="text-base font-bold text-[#0E2A47] font-cinzel mb-1 group-hover:text-[#C5A059] transition-colors">
                  {item.title}
                </h4>
                <div className="text-sm font-bold text-[#C5A059] mb-2 font-sans-clean">
                  {item.number}
                </div>
                <p className="text-xs text-slate-600 font-sans-clean leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E0D8] flex items-center gap-1.5 text-xs text-[#0E2A47] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Dokumen Sah & Aktif Kemenag RI</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
