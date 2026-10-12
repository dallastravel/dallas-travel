import React from 'react';
import { IMAGES } from '../assets/images';
import { Camera, Check, BookOpen } from 'lucide-react';

export const SpiritualJourney: React.FC = () => {
  return (
    <section id="pengalaman" className="py-20 bg-[#FBF9F5] border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (From PDF Page 11) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            TWO HOLY CITIES · ONE LIFE-CHANGING JOURNEY
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Makkah & Madinah Spiritual Experience
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            "Lebih dari sekadar bepergian, perjalanan ini adalah pengasahan ruhani, mempertebal iman, dan mendekatkan diri kepada Allah SWT serta Baginda Rasulullah SAW."
          </p>
        </div>

        {/* 2 Main Columns: Makkah & Madinah (From PDF Page 11) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Makkah Experience */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2D9C8] shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
                <span className="text-xs uppercase tracking-widest text-[#C5A059] font-cinzel font-bold">
                  MAKKAH AL-MUKARRAMAH
                </span>
                <span className="text-xs font-mono font-bold text-[#0E2A47]">
                  "Answering The Call"
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0E2A47] font-cinzel">
                Pengalaman Ruhani di Tanah Haram Makkah
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed font-light">
                Merengkuh keheningan dan keagungan Baitullah. Dipandu langsung oleh muthawwif yang sabar dan berpengalaman untuk memastikan rukun dan wajib Umroh terlaksana sempurna.
              </p>

              {/* Ritual & Experience List (Verbatim from PDF page 11) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Pelaksanaan Umrah Sesuai Sunnah',
                  'Tawaf Khusyuk & Sa\'i Shafa-Marwah',
                  'Shalat Berjamaah di Masjidil Haram',
                  'Kajian Spiritual & Muhasabah',
                  'Ziarah Sejarah & Historical Tour',
                  'Reflection Session Malam Hari',
                  'Family Bonding & Pendampingan',
                  'Program Khusus "My First Umrah"'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Special Moment Box (From PDF Page 11) */}
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#C5A059]/40 flex items-start gap-3 mt-4">
                <Camera className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider font-cinzel">
                    SPECIAL MOMENT: "MY FIRST UMRAH"
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Setiap lulusan/jamaah mendapatkan kesempatan untuk mengabadikan perjalanan Umrah pertamanya secara profesional bersama fotografer Dallas.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E2D9C8] aspect-[16/9] relative mt-4 shadow-sm">
              <img
                src={IMAGES.vipHospitality}
                alt="VIP Hospitality Dallas in Mecca"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white italic font-serif-luxury">
                  "Menghadirkan kenyamanan penuh berkah bagi para tamu Allah."
                </span>
              </div>
            </div>
          </div>

          {/* Madinah Experience */}
          <div className="p-8 rounded-2xl bg-white border border-[#E2D9C8] shadow-md space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
                <span className="text-xs uppercase tracking-widest text-[#0E2A47] font-cinzel font-bold">
                  MADINAH AL-MUNAWWARAH
                </span>
                <span className="text-xs font-mono font-bold text-[#C5A059]">
                  "The City of Rasulullah ﷺ"
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#0E2A47] font-cinzel">
                Kedamaian Hati di Kota Baginda Nabi SAW
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed font-light">
                Madinah menjadi oase ketenteraman jiwa. Jamaah diajak menelusuri jejak perjuangan Rasulullah SAW dan para sahabat dengan bimbingan tasreh Raudhah resmi.
              </p>

              {/* Sites & Rituals List (Verbatim from PDF page 11) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {[
                  'Ziarah & Shalat di Masjid Nabawi',
                  'Ziarah Raudhah As-Syarifah Resmi',
                  'Ziarah Makam Rasulullah ﷺ & Sahabat',
                  'Jabal Uhud (Napak Tilas Pejuang)',
                  'Masjid Quba (Pahala Setara Umrah)',
                  'Masjid Qiblatain (Dua Kiblat)',
                  'Khandaq / Masjid Sab\'ah',
                  'Kajian Sirah Nabawiyah Mendalam'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-[#0E2A47] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Spiritual Insight Box */}
              <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] flex items-start gap-3 mt-4">
                <BookOpen className="w-5 h-5 text-[#0E2A47] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider font-cinzel">
                    Kajian Sirah & Tasreh Raudhah Terpadu
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Proses pengurusan izin masuk ke Taman Surga (Raudhah) dipantau secara terkoordinasi melalui tasreh resmi pemerintah Arab Saudi.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl overflow-hidden border border-[#E2D9C8] aspect-[16/9] relative mt-4 shadow-sm">
              <img
                src={IMAGES.nabawiMosque}
                alt="Masjid Nabawi Medina with open umbrellas"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white italic font-serif-luxury">
                  "Masjid Nabawi — Tempat ketentraman dan kedamaian sanubari."
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
