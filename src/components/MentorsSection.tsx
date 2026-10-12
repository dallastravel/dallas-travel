import React from 'react';
import { SPIRITUAL_LEADERS } from '../data/dallasData';
import { UserCheck, Stethoscope, CheckCircle2, HeartHandshake } from 'lucide-react';

export const MentorsSection: React.FC = () => {
  const religiousMentors = SPIRITUAL_LEADERS.filter(m => !m.name.includes('Dr. Imbar'));
  const medicalMentor = SPIRITUAL_LEADERS.find(m => m.name.includes('Dr. Imbar'));

  return (
    <section id="pembimbing" className="py-20 bg-white border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (From PDF Page 4) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            OUR TEAM · TEAM PEMBIMBING
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Berpengalaman · Profesional · Amanah
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            "Bersama Menuju Ibadah Yang Lebih Baik." Setiap rombongan didampingi langsung oleh asatidz bersertifikat Kemenag RI dan tenaga medis berlisensi IDI.
          </p>
        </div>

        {/* Highlight Medical Leader Card (From PDF Page 4) */}
        {medicalMentor && (
          <div className="mb-12 p-6 sm:p-8 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 shadow-lg relative overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#C5A059] text-[#071E33] flex items-center justify-center shrink-0 shadow-md">
                  <Stethoscope className="w-7 h-7" />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#DFB76C] font-cinzel font-bold">
                    <span>PEMBIMBING KESEHATAN RESMI</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-cinzel">
                    {medicalMentor.name}
                  </h3>
                  <div className="text-xs sm:text-sm text-[#DFB76C] font-semibold">
                    {medicalMentor.certification}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans-clean pt-1 max-w-2xl font-light">
                    Memastikan pemantauan kondisi fisik, pendampingan lansia, ketersediaan obat-obatan esensial, serta pertolongan pertama selama beribadah di Tanah Suci.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#071E33] border border-[#C5A059]/30 text-xs text-slate-200 space-y-1 shrink-0 w-full md:w-auto">
                <div className="flex items-center gap-2 text-[#DFB76C] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Siaga 24 Jam di Hotel Makkah & Madinah</span>
                </div>
                <div className="flex items-center gap-2 text-[#DFB76C] font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Konsultasi Medis Pra-Keberangkatan</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Religious Mentors Grid (From PDF Page 4: Pembimbing Ibadah) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {religiousMentors.map((mentor, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#FAF8F3] border border-[#E2D9C8] hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0E2A47] text-[#DFB76C] flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 transition-transform">
                  <UserCheck className="w-6 h-6" />
                </div>

                <h4 className="text-base font-bold text-[#0E2A47] font-cinzel mb-1 group-hover:text-[#C5A059] transition-colors">
                  {mentor.name}
                </h4>

                <div className="text-xs font-semibold text-[#C5A059] mb-2 font-sans-clean">
                  {mentor.role}
                </div>

                {mentor.certification && (
                  <div className="text-[11px] font-mono text-[#0E2A47] bg-[#EBF0F5] p-2 rounded-lg border border-[#D0DBE5] mb-3 font-semibold">
                    {mentor.certification}
                  </div>
                )}

                <p className="text-xs text-slate-600 font-sans-clean leading-relaxed font-light">
                  {mentor.specialization}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#E5E0D8] flex items-center gap-1.5 text-xs text-[#0E2A47] font-semibold">
                <HeartHandshake className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Bimbingan Sesuai Sunnah</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
