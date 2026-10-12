import React from 'react';
import { IMAGES } from '../assets/images';
import { COMPANY_INFO } from '../data/dallasData';
import { ShieldCheck, Award, MapPin, Calendar, Sparkles, ChevronDown, ArrowRight } from 'lucide-react';

interface HeroProps {
  onOpenConsultation: () => void;
  onOpenDashboard: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onOpenDashboard }) => {
  return (
    <section id="hero" className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Hero Image with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.heroKaaba}
          alt="Masjidil Haram Kaaba Mecca Twilight"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Measured Contrast Scrims matching PDF Cover (Deep Navy + Gold Radial Warmth) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#071E33] via-[#071E33]/85 to-[#0E2A47]/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(197,160,89,0.12)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          
          {/* Top Brand Subtitle & Spiritual Kicker (From PDF Cover) */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#DFB76C] font-cinzel">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#C5A059]" />
            <span>PINTU MENUJU BAITULLAH · JOURNEY OF FAITH</span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#C5A059]" />
          </div>

          {/* Primary Main Headline (Verbatim from PDF Page 2 & 4) */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white font-cinzel leading-none sm:leading-tight">
            Ingat Umrah, <br />
            <span className="text-[#DFB76C] drop-shadow-md">Ingat Dallas</span>
          </h1>

          {/* Slogan & Value Proposition (From PDF) */}
          <p className="text-base sm:text-xl text-[#F5F2EB] font-serif-luxury italic max-w-2xl mx-auto leading-relaxed">
            "Keberkahan Setiap Langkah Menuju Ridha Allah"
          </p>

          <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed font-sans-clean font-light">
            Biro Resmi Penyelenggara Perjalanan Ibadah Umroh & Haji Khusus berizin Kementerian Agama RI 
            dengan komitmen <strong className="text-[#DFB76C] font-semibold">Amanah, Profesional, Nyaman,</strong> dan berorientasi pada kemabruran ibadah Anda.
          </p>

          {/* Action Buttons (Dallas Gold + Dallas Red Accent) */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#layanan"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide text-[#071E33] bg-gradient-to-r from-[#DFB76C] via-[#C5A059] to-[#B88E3E] hover:brightness-110 shadow-xl shadow-black/40 active:scale-95 transition-all text-center flex items-center justify-center gap-2 border border-[#DFB76C]/50"
            >
              <span>Lihat Paket Umroh & Haji</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenDashboard}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide text-white bg-[#0E2A47]/90 hover:bg-[#153B60] border border-[#C5A059]/40 backdrop-blur-sm transition-all text-center flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#DFB76C]" />
              <span>Simulator Biaya & Jadwal Kursi</span>
            </button>
          </div>

          {/* Editorial Quotes Banner from PDF (Sayyidina Ali bin Abi Thalib RA) */}
          <div className="pt-6 border-t border-[#C5A059]/30 max-w-3xl mx-auto">
            <p className="text-xs sm:text-sm text-slate-200 italic font-serif-luxury">
              "{COMPANY_INFO.quotes[0].quote}"
            </p>
            <div className="text-[11px] uppercase tracking-wider text-[#DFB76C] font-semibold mt-1">
              — {COMPANY_INFO.quotes[0].author}
            </div>
          </div>

          {/* Clean Unboxed Trust Bar (Zero-Pill Discipline, Royal Navy & Gold borders) */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-4 text-left border-t border-white/10">
            
            <div className="p-3.5 rounded-xl bg-[#0A233A]/90 border border-[#C5A059]/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#DFB76C] mb-1">
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#C5A059]" />
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#DFB76C] font-cinzel">Izin Resmi Kemenag</span>
              </div>
              <div className="text-sm font-bold text-white">PPIU 64 & PIHK 690</div>
              <div className="text-[11px] text-slate-300">Tahun 2020 Resmi Terdaftar</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0A233A]/90 border border-[#C5A059]/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#DFB76C] mb-1">
                <MapPin className="w-4 h-4 shrink-0 text-[#C5A059]" />
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#DFB76C] font-cinzel">Jaringan Nasional</span>
              </div>
              <div className="text-sm font-bold text-white">21 Kantor Cabang</div>
              <div className="text-[11px] text-slate-300">Hadir Lebih Dekat Melayani</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0A233A]/90 border border-[#C5A059]/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#DFB76C] mb-1">
                <Calendar className="w-4 h-4 shrink-0 text-[#C5A059]" />
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#DFB76C] font-cinzel">Pengalaman Nyata</span>
              </div>
              <div className="text-sm font-bold text-white">Sejak Tahun 2013</div>
              <div className="text-[11px] text-slate-300">11+ Tahun Melayani Tamu Allah</div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0A233A]/90 border border-[#C5A059]/30 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#DFB76C] mb-1">
                <Award className="w-4 h-4 shrink-0 text-[#C5A059]" />
                <span className="text-[11px] font-semibold tracking-wider uppercase text-[#DFB76C] font-cinzel">Akreditasi Mutu</span>
              </div>
              <div className="text-sm font-bold text-white">KAN · AMPHURI · IATA</div>
              <div className="text-[11px] text-slate-300">Standar Mutu Internasional</div>
            </div>

          </div>

        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center opacity-70 hover:opacity-100 transition-opacity">
        <a href="#profil" className="text-[10px] tracking-widest uppercase text-[#DFB76C] flex flex-col items-center gap-1">
          <span>Gulir Ke Bawah</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#DFB76C]" />
        </a>
      </div>
    </section>
  );
};
