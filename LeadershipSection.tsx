import React from 'react';
import { LEADERSHIP, COMPANY_INFO } from '../data/dallasData';
import { Quote, UserCheck, HeartHandshake, Award } from 'lucide-react';
import logoDallas from '../assets/images/logo-dallas.png';
import banner1 from '../assets/images/banner1.jpg'; // Import gambar ornamen emas

export const LeadershipSection: React.FC = () => {
  return (
    <section id="profil" className="py-20 bg-[#FBF9F5] border-t border-[#E5E0D8] relative text-[#1E293B] overflow-hidden">
      
      {/* Background Ornamen Ukiran Emas (Subtle Texture) */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img 
          src={banner1} 
          alt="Islamic Pattern Background" 
          className="w-full h-full object-cover object-center filter sepia-[0.3]"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            Komitmen Kepemimpinan
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Sambutan Dewan Komisaris & Direksi
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            Dedikasi penuh menjaga amanah jamaah menuju Baitullah dengan bimbingan sesuai syariat dan kenyamanan paripurna.
          </p>
        </div>

        {/* Komisaris Utama Card (From PDF Page 2) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#E2D9C8] shadow-lg relative overflow-hidden mb-12">
          {/* Subtle gold glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
          
          {/* Top Dallas Logo from PNG */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#F0EBE1] pb-6 mb-8">
            <img 
              src={logoDallas} 
              alt="PT Delta Laras Wisata" 
              className="h-10 sm:h-12 w-auto object-contain" 
            />
            <div className="text-center sm:text-right">
              <span className="text-xs font-cinzel font-bold text-[#C5A059] uppercase tracking-wider block">
                DEWAN KOMISARIS
              </span>
              <span className="text-lg font-bold text-[#0E2A47] font-cinzel">
                SAMBUTAN RESMI
              </span>
            </div>
          </div>

          {/* Basmalah Calligraphy Styling */}
          <div className="text-center mb-8">
            <div className="text-[#C5A059] font-serif-luxury text-2xl sm:text-3xl tracking-widest font-normal">
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </div>
            <div className="text-xs text-slate-500 tracking-wider mt-2 uppercase font-cinzel font-semibold">
              Assalamu'alaikum Warahmatullahi Wabarakatuh
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans-clean">
              <p>
                Puji dan syukur saya panjatkan kepada Allah SWT atas Rahmat dan Karunia-Nya, serta Sholawat dan Salam senantiasa tercurah kepada Tauladan Mulia Nabi Muhammad SAW. Saya sebagai Komisaris Utama PT. Delta Laras Wisata (Dallas Tour and Travel) mengucapkan terima kasih kepada para Jamaah Umroh maupun Haji Khusus yang telah mempercayakan perjalanan ibadah suci kepada kami.
              </p>
              <p>
                Indonesia merupakan negara muslim terbesar di dunia, sekitar 80% penduduk Indonesia adalah muslim. Dallas Travel hadir sebagai <strong className="text-[#0E2A47]">Penyelenggara Umroh yang Amanah</strong> dan berkomitmen memberikan layanan Umroh yang Aman dan Nyaman, didukung oleh tim karyawan yang berdedikasi tinggi, amanah, dan bekerja keras.
              </p>
              <p>
                Komitmen kami adalah memahami dengan baik kebutuhan para Jamaah dalam melaksanakan Ibadah Umroh maupun Haji Khusus. Kami bermitra erat dengan provider yang kompeten dan berpengalaman dalam menyediakan akomodasi & hotel di Arab Saudi, penyediaan tiket airline, Bank maupun lembaga keuangan Syariah yang mendukung pelaksanaan ibadah dengan Amanah, Aman dan Nyaman.
              </p>

              <div className="pt-6 border-t border-[#F0EBE1] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-lg font-bold text-[#0E2A47] font-cinzel tracking-wide">
                    {LEADERSHIP.commissioner.name}
                  </div>
                  <div className="text-xs text-[#C5A059] font-semibold">
                    {LEADERSHIP.commissioner.role}
                  </div>
                </div>
                <div className="text-xs text-slate-500 italic font-serif-luxury">
                  Wassalamu'alaikum Warahmatullahi Wabarakatuh.
                </div>
              </div>
            </div>

            {/* Quote Accent & Core Pillars (From PDF Page 2 bottom: Trust, Service, Together) */}
            <div className="lg:col-span-4 p-6 rounded-xl bg-[#071E33] text-white border border-[#C5A059]/40 space-y-4 shadow-md">
              <Quote className="w-8 h-8 text-[#DFB76C]" />
              <blockquote className="text-sm font-serif-luxury italic text-[#F5F2EB] leading-relaxed">
                "{COMPANY_INFO.quotes[1].quote}"
              </blockquote>
              <div className="text-[11px] text-[#DFB76C] font-semibold uppercase tracking-wider">
                — {COMPANY_INFO.quotes[1].author}
              </div>

              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <UserCheck className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Trust in Every Journey</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <HeartHandshake className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Service with Purpose</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <Award className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Together Closer to Allah</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Direktur Utama & Visi Misi (From PDF Page 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Direktur Utama Card */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="text-xs uppercase tracking-widest text-[#DFB76C] font-cinzel font-semibold">
                OUR FUTURE · PESAN DIREKTUR UTAMA
              </div>
              <h3 className="text-2xl font-bold text-white font-cinzel">
                {LEADERSHIP.director.name}
              </h3>
              <p className="text-xs text-[#DFB76C] font-semibold">
                {LEADERSHIP.director.role}
              </p>
              <p className="text-sm text-slate-200 leading-relaxed font-sans-clean font-light pt-2">
                "{LEADERSHIP.director.speech}"
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#DFB76C] font-serif-luxury italic">
                "Together for a Meaningful Journey"
              </span>
              <span className="text-xs font-cinzel text-white tracking-wider font-bold">
                DALLAS TRAVEL
              </span>
            </div>
          </div>

          {/* Visi & Misi Box (From PDF Page 3) */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#E2D9C8] flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0E2A47] text-[#DFB76C] flex items-center justify-center font-cinzel font-bold text-base mb-4 shadow-sm">
                  01
                </div>
                <h4 className="text-lg font-bold text-[#0E2A47] font-cinzel mb-2">
                  Visi Perusahaan
                </h4>
                <p className="text-sm text-slate-600 font-sans-clean leading-relaxed">
                  {COMPANY_INFO.vision}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-xs text-[#0E2A47] font-bold">
                Handal · Terpercaya · Istiqomah
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#E2D9C8] flex flex-col justify-between shadow-md">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C5A059] text-[#071E33] flex items-center justify-center font-cinzel font-bold text-base mb-4 shadow-sm">
                  02
                </div>
                <h4 className="text-lg font-bold text-[#0E2A47] font-cinzel mb-2">
                  Misi Perusahaan
                </h4>
                <p className="text-sm text-slate-600 font-sans-clean leading-relaxed">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#F0EBE1] text-xs text-[#C5A059] font-bold">
                Sesuai Syariat Islam & Regulasi
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};