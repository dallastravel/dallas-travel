import React, { useState } from 'react';
import { IMAGES } from '../assets/images';
import { PackageTier } from '../types';
import {
  Calendar,
  Plane,
  Building,
  CheckCircle2,
  XCircle,
  PhoneCall,
  MessageSquare,
  Sparkles,
  Download,
  Share2,
  Maximize2,
  X,
  CreditCard,
  ShieldCheck,
  Check,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

interface PackagesSectionProps {
  onSelectPackage?: (pkg: PackageTier) => void;
  onOpenDashboardCalculator?: () => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onOpenDashboardCalculator
}) => {
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [activeBrochureTab, setActiveBrochureTab] = useState<'ramadhan' | 'milad12' | 'milad10' | 'milad9' | 'private'>('ramadhan');

  const mainPosterData = {
    title: 'Paket Umrah Spesial Awal Ramadhan',
    subtitle: 'Raih Berkah Ramadhan di Tanah Suci',
    airline: 'Garuda Indonesia (Flight by Garuda)',
    duration: 'Program 9 Hari',
    departure: '13 Februari 2027',
    status: 'TICKET CONFIRM!!',
    dp: 'DP Hanya Rp 10 Jt / Orang',
    prices: {
      quad: 'Rp 33,8 Juta',
      triple: 'Rp 36,3 Juta',
      double: 'Rp 36,8 Juta'
    },
    hotels: {
      makkah: 'Maysan Al Maqom / Ghaleb Ajyad / Setaraf',
      madinah: 'Odst / Zowar / Setaraf'
    },
    included: [
      'Tiket Pesawat PP Ekonomi (Garuda Indonesia Direct)',
      'Visa Umrah Resmi MoFA & Bus Full AC Eksekutif',
      'Perlengkapan Umrah Eksklusif (Koper, Ihram/Mukena, Tas)',
      'Air Zam-zam 5 Liter Resmi Saudi',
      'Handling Bandara Soekarno-Hatta & Saudi',
      'Tour Leader & Muthawif Bersertifikat Kemenag RI',
      'Asuransi Perjalanan Ibadah Lengkap',
      'Free Iftar & Sahur Menu Indonesia di Tanah Suci',
      'CityTour Napak Tilas Makkah & Madinah (Tentative)'
    ],
    excluded: [
      'Biaya Pembuatan Paspor Mandiri',
      'Buku Kuning / Vaksin Meningitis & Polio',
      'Biaya Kelebihan Bagasi Maskapai (Excess Baggage)',
      'Transportasi Domestik dari Daerah Asal ke Jakarta',
      'Pengeluaran Pribadi (Laundry, Telepon, Room Service)'
    ],
    whatsappNumber: '6281578256809', // Dari brosur poster resmi
    displayPhone: '0815-7825-6809',
    secondaryPhone: '0812-8087-8321'
  };

  const getWaUrl = (roomType = 'Quad (Rp 33,8 Juta)') => {
    const text = encodeURIComponent(
      `Assalamu'alaikum Admin Dallas Tour & Travel, saya ingin mendaftar Paket Umrah Spesial Awal Ramadhan 13 Februari 2027 (Garuda Indonesia, ${roomType}). Mohon informasi sisa seat dan prosedur pembayaran DP Rp 10 Jt.`
    );
    return `https://wa.me/${mainPosterData.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="paket" className="py-20 bg-white border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            <Sparkles className="w-4 h-4 text-[#C5A059]" />
            <span>KATALOG RESMI PROMO SPESIAL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#0E2A47] font-cinzel tracking-tight">
            Paket Umrah Spesial Awal Ramadhan
          </h2>
          <div className="w-20 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-base sm:text-lg text-slate-700 font-serif-luxury italic">
            "Raih Berkah Ramadhan di Tanah Suci Bersama Dallas Tour & Travel"
          </p>
          <p className="text-xs sm:text-sm text-slate-500 font-sans-clean mt-1">
            Penerbangan langsung Garuda Indonesia · Kepastian Tiket Terkonfirmasi (Ticket Confirm!!) · Hotel Dekat Pelataran
          </p>
        </div>

        {/* Brochure Switcher Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 p-1.5 bg-[#FAF8F3] rounded-2xl border border-[#E2D9C8] mb-12 shadow-xs">
          <button
            onClick={() => setActiveBrochureTab('ramadhan')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 ${
              activeBrochureTab === 'ramadhan'
                ? 'bg-[#0E2A47] text-white shadow-md'
                : 'text-slate-600 hover:text-[#0E2A47]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Umrah Spesial Awal Ramadhan (Garuda 9H)</span>
          </button>

          <button
            onClick={() => setActiveBrochureTab('milad12')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeBrochureTab === 'milad12'
                ? 'bg-[#0E2A47] text-white shadow-md'
                : 'text-slate-600 hover:text-[#0E2A47]'
            }`}
          >
            <span>Milad 1 Dekade (12 Hari - Free Taif)</span>
          </button>

          <button
            onClick={() => setActiveBrochureTab('milad10')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeBrochureTab === 'milad10'
                ? 'bg-[#0E2A47] text-white shadow-md'
                : 'text-slate-600 hover:text-[#0E2A47]'
            }`}
          >
            <span>Milad 1 Dekade (10 Hari +Jeddah)</span>
          </button>

          <button
            onClick={() => setActiveBrochureTab('milad9')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeBrochureTab === 'milad9'
                ? 'bg-[#0E2A47] text-white shadow-md'
                : 'text-slate-600 hover:text-[#0E2A47]'
            }`}
          >
            <span>Milad 1 Dekade (9 Hari Saudia)</span>
          </button>

          <button
            onClick={() => setActiveBrochureTab('private')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
              activeBrochureTab === 'private'
                ? 'bg-[#0E2A47] text-white shadow-md'
                : 'text-slate-600 hover:text-[#0E2A47]'
            }`}
          >
            <span>Umrah Private Custom</span>
          </button>
        </div>

        {/* ================= HERO SHOWCASE: BROSUR UTAMA ================= */}
        {activeBrochureTab === 'ramadhan' && (
          <div className="bg-[#FAF8F3] border border-[#E2D9C8] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Kolom Kiri: Poster / Brosur Asli Terpampang Besar & Anggun */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="relative group w-full max-w-[460px] rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-2xl bg-black">
                  <img
                    src={IMAGES.brosurUmrahAwalRamadhan}
                    alt="Brosur Resmi Paket Umrah Spesial Awal Ramadhan PT Delta Laras Wisata"
                    className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay & Zoom Hint */}
                  <div
                    onClick={() => setIsZoomOpen(true)}
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 cursor-pointer"
                  >
                    <div className="flex items-center justify-between text-white text-xs">
                      <span className="font-semibold flex items-center gap-1.5">
                        <Maximize2 className="w-4 h-4 text-[#DFB76C]" />
                        <span>Klik untuk Perbesar Brosur HD</span>
                      </span>
                      <span className="bg-[#E5242A] px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider">
                        Brosur Resmi
                      </span>
                    </div>
                  </div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 bg-[#0E2A47]/90 backdrop-blur-md text-[#DFB76C] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-[#C5A059]/40 flex items-center gap-1.5 shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Garuda Indonesia · 9 Hari</span>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                  <button
                    onClick={() => setIsZoomOpen(true)}
                    className="text-[#0E2A47] font-semibold hover:text-[#C5A059] flex items-center gap-1 transition-colors"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Lihat Fullsize Brosur</span>
                  </button>
                  <span>·</span>
                  <a
                    href={getWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-semibold hover:underline flex items-center gap-1"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Bagikan Brosur</span>
                  </a>
                </div>
              </div>

              {/* Kolom Kanan: Rincian Lengkap & Tombol Aksi Cepat ke WhatsApp */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Header Rincian */}
                <div className="space-y-2 border-b border-[#E5E0D8] pb-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="bg-[#0E2A47] text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider font-cinzel">
                      Garuda Indonesia Direct
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{mainPosterData.status}</span>
                    </span>
                    <span className="bg-[#E5242A] text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider shadow-xs">
                      {mainPosterData.dp}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A47] font-cinzel">
                    {mainPosterData.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-sans-clean">
                    Penerbangan langsung berkelas dengan Garuda Indonesia menuju Tanah Suci. Nikmati kekhusyukan malam-malam awal Ramadhan di Masjidil Haram & Masjid Nabawi dengan paket all-in terpercaya.
                  </p>
                </div>

                {/* Grid Harga Kamar (Sesuai Brosur Resmi) */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  
                  {/* Quad */}
                  <div className="p-4 rounded-2xl bg-white border-2 border-[#C5A059] shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#C5A059] text-[#071E33] text-[9px] font-bold uppercase px-2 py-0.5 rounded-bl">
                      Paling Favorit
                    </div>
                    <div className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                      QUAD (4 Pax)
                    </div>
                    <div className="text-2xl font-bold text-[#E5242A] font-cinzel mt-1 tabular-nums">
                      {mainPosterData.prices.quad}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Sekamar berempat
                    </div>
                  </div>

                  {/* Triple */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E2D9C8] shadow-sm">
                    <div className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                      TRIPLE (3 Pax)
                    </div>
                    <div className="text-2xl font-bold text-[#0E2A47] font-cinzel mt-1 tabular-nums">
                      {mainPosterData.prices.triple}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Sekamar bertiga
                    </div>
                  </div>

                  {/* Double */}
                  <div className="p-4 rounded-2xl bg-white border border-[#E2D9C8] shadow-sm">
                    <div className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                      DOUBLE (2 Pax)
                    </div>
                    <div className="text-2xl font-bold text-[#0E2A47] font-cinzel mt-1 tabular-nums">
                      {mainPosterData.prices.double}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-0.5">
                      Sekamar berdua
                    </div>
                  </div>

                </div>

                {/* Info Jadwal & Hotel */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#0E2A47] font-bold uppercase">
                      <Calendar className="w-4 h-4 text-[#C5A059]" />
                      <span>Jadwal Keberangkatan</span>
                    </div>
                    <div className="font-bold text-sm text-[#0E2A47]">
                      {mainPosterData.departure}
                    </div>
                    <div className="text-slate-500">
                      Maskapai: {mainPosterData.airline}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#0E2A47] font-bold uppercase">
                      <Building className="w-4 h-4 text-[#C5A059]" />
                      <span>Akomodasi Hotel</span>
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Makkah:</span> {mainPosterData.hotels.makkah}
                    </div>
                    <div>
                      <span className="font-semibold text-slate-700">Madinah:</span> {mainPosterData.hotels.madinah}
                    </div>
                  </div>
                </div>

                {/* Fasilitas Termasuk Ringkas */}
                <div className="p-4 rounded-xl bg-white border border-[#E2D9C8]">
                  <div className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider mb-2.5 flex items-center justify-between">
                    <span>Fasilitas Sudah Termasuk (All-In):</span>
                    <span className="text-[11px] text-emerald-700 font-semibold font-mono">Free Iftar & Sahur</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {mainPosterData.included.slice(0, 6).map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* TOMBOL AKSI CEPAT KE WHATSAPP ADMIN */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href={getWaUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:brightness-110 text-white font-bold text-sm uppercase tracking-wider transition-all shadow-lg flex items-center justify-center gap-2.5 active:scale-95"
                  >
                    <MessageSquare className="w-5 h-5 fill-white" />
                    <span>Daftar Sekarang via WhatsApp Admin</span>
                  </a>

                  <a
                    href={`tel:${mainPosterData.displayPhone}`}
                    className="py-4 px-5 rounded-xl bg-[#0E2A47] hover:bg-[#153B60] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <PhoneCall className="w-4 h-4 text-[#DFB76C]" />
                    <span>Hubungi: {mainPosterData.displayPhone}</span>
                  </a>
                </div>

                <div className="text-[11px] text-slate-500 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-[#E5E0D8]">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                    <span>Izin Resmi Kemenag: PPIU No. 64/2020 & PIHK No. 690/2020</span>
                  </div>
                  <div className="text-slate-500">
                    *Harga sewaktu-waktu dapat berubah sesuai kebijakan maskapai & hotel.
                  </div>
                </div>

              </div>
            </div>
          </div>
        )}

        {/* TAB 2: MILAD 12 HARI */}
        {activeBrochureTab === 'milad12' && (
          <div className="bg-[#FAF8F3] border border-[#E2D9C8] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border-2 border-[#C5A059] shadow-lg text-center space-y-4">
                <span className="bg-[#E5242A] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Spesial 1 Dekade Milad Dallas
                </span>
                <h3 className="text-2xl font-bold text-[#0E2A47] font-cinzel">
                  Paket Umrah 12 Hari + Free City Tour Thaif
                </h3>
                <div className="p-4 rounded-xl bg-[#F8F6F0] border border-[#E5E0D8]">
                  <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Harga Mulai</div>
                  <div className="text-3xl font-bold text-[#E5242A] font-cinzel mt-1">Rp 35,9 Juta</div>
                  <div className="text-xs text-slate-600 mt-1 font-bold">DP Hanya Rp 5 Jt / Orang</div>
                </div>
                <div className="text-xs text-slate-600 space-y-1 text-left">
                  <div>✈ <strong>Maskapai:</strong> Saudia Airlines (Direct Madinah)</div>
                  <div>🗓 <strong>Keberangkatan:</strong> 11 November 2026</div>
                  <div>🏨 <strong>Hotel Makkah:</strong> Maysan Masaer (★★★★)</div>
                  <div>🏨 <strong>Hotel Madinah:</strong> Odst Madinah (★★★)</div>
                  <div>✨ <strong>Bonus:</strong> Free City Tour Thaif + 2 Kali Shalat Jum'at</div>
                </div>
                <a
                  href={`https://wa.me/6281578256809?text=${encodeURIComponent("Halo Admin Dallas, saya ingin daftar Paket Umrah 12 Hari Milad Dallas Rp 35,9 Jt (11 November 2026).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Daftar via WhatsApp (DP 5 Jt)</span>
                </a>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xl font-bold text-[#0E2A47] font-cinzel">
                  Keistimewaan Paket 12 Hari Milad Dallas:
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans-clean">
                  Merayakan 10 tahun perjalanan PT Delta Laras Wisata melayani tamu-tamu Allah. Paket ini memberikan waktu ibadah lebih leluasa (12 hari), kesempatan shalat Jum'at 2 kali di Tanah Suci, serta wisata religi eksklusif ke pegunungan sejuk Thaif.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Tiket PP Saudia Airlines Ekonomi</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Visa Umrah & Bus AC Eksekutif</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Makan 3x Sehari Fullboard Indonesia</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Perlengkapan Umrah Lengkap + Zamzam 5L</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Tour Leader & Muthawif Pendamping</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Handling Bandara Soetta & Saudi</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: MILAD 10 HARI */}
        {activeBrochureTab === 'milad10' && (
          <div className="bg-[#FAF8F3] border border-[#E2D9C8] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0E2A47] text-white border-2 border-[#C5A059] shadow-lg text-center space-y-4">
                <span className="bg-[#C5A059] text-[#071E33] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  1 Dekade Milad + Jeddah
                </span>
                <h3 className="text-2xl font-bold text-white font-cinzel">
                  Umrah Spesial 10 Hari (Free Tour Thaif)
                </h3>
                <div className="p-4 rounded-xl bg-[#071E33] border border-[#C5A059]/40">
                  <div className="text-xs text-slate-300 uppercase tracking-wider">Harga per Pax</div>
                  <div className="text-3xl font-bold text-[#DFB76C] font-cinzel mt-1">Rp 33.500.000</div>
                  <div className="text-xs text-[#E5242A] mt-1 font-bold bg-white px-2 py-0.5 rounded inline-block">DP Hanya Rp 5 Jt</div>
                </div>
                <div className="text-xs text-slate-300 space-y-1 text-left">
                  <div>✈ <strong>Maskapai:</strong> Saudia Airlines (Direct Madinah)</div>
                  <div>🗓 <strong>Keberangkatan:</strong> 11 November 2026</div>
                  <div>🏨 <strong>Hotel Makkah:</strong> Ghaleb Ajyad (★★★)</div>
                  <div>🏨 <strong>Hotel Madinah:</strong> Anwar Zahra / Setaraf (★★★)</div>
                </div>
                <a
                  href={`https://wa.me/6281578256809?text=${encodeURIComponent("Halo Admin Dallas, saya tertarik mendaftar Umrah 10 Hari Rp 33.500.000 keberangkatan 11 November 2026.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Daftar via WhatsApp Admin</span>
                </a>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xl font-bold text-[#0E2A47] font-cinzel">
                  Rincian Program 10 Hari + Jeddah:
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed font-sans-clean">
                  Kombinasi ideal 10 hari ibadah di Tanah Suci dengan penerbangan langsung Saudia Airlines, dilengkapi City Tour Jeddah & ziarah eksklusif ke Thaif.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-2">
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Tiket PP Saudia Airlines Direct</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Visa Umrah Resmi MoFA</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Makan 3x Sehari Fullboard</span></div>
                  <div className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-600" /><span>Air Zamzam 5 Liter Resmi</span></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: MILAD 9 HARI */}
        {activeBrochureTab === 'milad9' && (
          <div className="bg-[#FAF8F3] border border-[#E2D9C8] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 p-6 rounded-2xl bg-white border-2 border-[#E5E0D8] shadow-lg text-center space-y-4">
                <span className="bg-[#0E2A47] text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Special Umrah Satu Dekade
                </span>
                <h3 className="text-2xl font-bold text-[#0E2A47] font-cinzel">
                  Program 9 Hari Saudia Airlines
                </h3>
                <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] space-y-2">
                  <div>
                    <span className="text-[11px] font-semibold text-slate-500">Paket Bintang 3:</span>
                    <div className="text-2xl font-bold text-[#0E2A47] font-cinzel">Rp 32,4 Juta</div>
                  </div>
                  <div className="pt-2 border-t border-[#E5E0D8]">
                    <span className="text-[11px] font-semibold text-slate-500">Paket Bintang 4:</span>
                    <div className="text-2xl font-bold text-[#C5A059] font-cinzel">Rp 34,9 Juta</div>
                  </div>
                  <div className="text-xs text-[#E5242A] font-bold">DP Hanya Rp 5 Jt / Orang</div>
                </div>
                <div className="text-xs text-slate-600 space-y-1 text-left">
                  <div>✈ <strong>Rute:</strong> Jakarta - Jeddah / Madinah - Jakarta</div>
                  <div>🗓 <strong>Keberangkatan:</strong> 15 November 2026</div>
                  <div>✨ <strong>Bonus:</strong> Free City Tour Thaif</div>
                </div>
                <a
                  href={`https://wa.me/6281578256809?text=${encodeURIComponent("Halo Admin Dallas, saya ingin informasi pendaftaran Special Umrah 9 Hari 15 November 2026 (Rp 32,4 Jt / Rp 34,9 Jt).")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Daftar via WhatsApp Admin</span>
                </a>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <h4 className="text-xl font-bold text-[#0E2A47] font-cinzel">
                  Pilihan Hotel Bintang 3 & Bintang 4:
                </h4>
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8]">
                    <strong className="text-[#0E2A47]">Pilihan Bintang 3 (Rp 32,4 Jt):</strong>
                    <div>Makkah: Ghalib Ajyad / Setaraf (★★★) | Madinah: Odst / Setaraf (★★★)</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8]">
                    <strong className="text-[#C5A059]">Pilihan Bintang 4 (Rp 34,9 Jt):</strong>
                    <div>Makkah: Maysan Al Masaer / Setaraf (★★★★) | Madinah: Grand Plaza / Setaraf (★★★★)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: UMRAH PRIVATE */}
        {activeBrochureTab === 'private' && (
          <div className="bg-[#FAF8F3] border border-[#E2D9C8] rounded-3xl p-6 sm:p-10 shadow-xl overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="bg-[#0E2A47] text-[#DFB76C] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full font-cinzel">
                  LAYANAN EKSKLUSIF
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0E2A47] font-cinzel">
                  Umrah Private Dallas Tour & Travel
                </h3>
                <p className="text-sm text-slate-600 italic font-serif-luxury">
                  "Semua Bisa Sesuai Keinginan Kamu"
                </p>
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-2">
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#0E2A47] text-white flex items-center justify-center font-bold text-xs">1</span>
                    <span><strong>Bebas Pilih Tanggal & Durasi:</strong> Fleksibel berangkat kapan saja bersama keluarga tercinta.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#0E2A47] text-white flex items-center justify-center font-bold text-xs">2</span>
                    <span><strong>Bebas Pilih Hotel:</strong> Pilih hotel bintang 5 persis depan pelataran Ka'bah atau sesuai budget.</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white border border-[#E2D9C8] flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-[#0E2A47] text-white flex items-center justify-center font-bold text-xs">3</span>
                    <span><strong>Bebas Atur Rute Perjalanan:</strong> Mau tambah rute Dubai, Turki, Thaif, atau kereta cepat Haramain? Bisa!</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 p-6 rounded-2xl bg-[#0E2A47] text-white text-center space-y-4 shadow-xl">
                <h4 className="text-xl font-bold text-white font-cinzel">
                  Konsultasi Umrah Private / Rombongan Keluarga
                </h4>
                <p className="text-xs text-slate-300">
                  Hubungi konsultan resmi Dallas Tour & Travel untuk menyusun itinerary khusus dan penawaran harga terbaik.
                </p>
                <div className="p-4 rounded-xl bg-[#071E33] border border-[#C5A059]/40">
                  <div className="text-xs text-slate-300">Nomor Khusus Konsultasi Private:</div>
                  <div className="text-2xl font-bold text-[#DFB76C] font-mono mt-1">0815-7825-6809</div>
                </div>
                <a
                  href={`https://wa.me/6281578256809?text=${encodeURIComponent("Assalamu'alaikum Admin Dallas, saya ingin konsultasi rencana Umrah Private untuk keluarga saya. Mohon informasi pembuatan itinerary khusus.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 rounded-xl bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-105"
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                  <span>Chat WhatsApp Konsultan Private</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Modal Zoom Brosur HD */}
        {isZoomOpen && (
          <div
            onClick={() => setIsZoomOpen(false)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[92vh] overflow-y-auto bg-white rounded-2xl p-3 shadow-2xl"
            >
              <button
                onClick={() => setIsZoomOpen(false)}
                className="absolute top-4 right-4 bg-black/70 hover:bg-black text-white p-2 rounded-full focus:outline-none z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={IMAGES.brosurUmrahAwalRamadhan}
                alt="Fullsize Brosur Umrah Awal Ramadhan Dallas Tour & Travel"
                className="w-full h-auto rounded-xl"
              />

              <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#FAF8F3] mt-2 rounded-xl">
                <div>
                  <div className="text-xs font-bold text-[#0E2A47]">Paket Umrah Spesial Awal Ramadhan 1448H</div>
                  <div className="text-[11px] text-slate-500">PT Delta Laras Wisata (Dallas Tour & Travel)</div>
                </div>
                <a
                  href={getWaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Daftar via WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
