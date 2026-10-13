import React, { useState } from 'react';
import { PACKAGES, DEPARTURE_SCHEDULES, MOCK_TRACKING_DATA } from '../data/dallasData';
import { StatFlipCard } from './StatFlipCard';
import banner1 from '../assets/images/banner1.jpg'; // Import ornamen emas
import {
  LayoutDashboard,
  Calculator,
  CalendarDays,
  FileSearch,
  CheckCircle2,
  Clock,
  Users,
  Plane,
  Building,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Share2,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

interface InteractiveDashboardProps {
  onOpenConsultation: () => void;
  onBookSchedule: (scheduleId: string) => void;
}

export const InteractiveDashboard: React.FC<InteractiveDashboardProps> = ({
  onOpenConsultation,
  onBookSchedule
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'calculator' | 'schedules' | 'tracking'>('overview');

  // Simulator / Calculator States
  const [selectedPkgId, setSelectedPkgId] = useState<string>('platinum-9d');
  const [roomType, setRoomType] = useState<'quad' | 'triple' | 'double'>('quad');
  const [adultCount, setAdultCount] = useState<number>(2);
  const [childCount, setChildCount] = useState<number>(0);
  const [addOnHaramainTrain, setAddOnHaramainTrain] = useState<boolean>(true);
  const [addOnTaifTour, setAddOnTaifTour] = useState<boolean>(false);
  const [addOnSimCard, setAddOnSimCard] = useState<boolean>(true);
  const [addOnWheelchair, setAddOnWheelchair] = useState<boolean>(false);

  // Schedules Filter States
  const [scheduleAirlineFilter, setScheduleAirlineFilter] = useState<string>('all');
  const [scheduleTierFilter, setScheduleTierFilter] = useState<string>('all');

  // Tracking Search States
  const [searchBookingCode, setSearchBookingCode] = useState<string>('DLW-2025-0891');
  const [currentTracking, setCurrentTracking] = useState(MOCK_TRACKING_DATA['DLW-2025-0891']);
  const [trackingError, setTrackingError] = useState<string | null>(null);

  // Calculate package pricing
  const currentPkg = PACKAGES.find(p => p.id === selectedPkgId) || PACKAGES[0];
  const basePricePerPerson = roomType === 'quad' 
    ? currentPkg.quadPrice 
    : roomType === 'triple' 
      ? currentPkg.triplePrice 
      : currentPkg.doublePrice;

  const childPricePerPerson = basePricePerPerson * 0.85; // Child discount 15%
  const totalBase = (adultCount * basePricePerPerson) + (childCount * childPricePerPerson);

  // Add-ons
  const haramainTrainCost = addOnHaramainTrain ? (adultCount + childCount) * 1500000 : 0;
  const taifTourCost = addOnTaifTour ? (adultCount + childCount) * 950000 : 0;
  const simCardCost = addOnSimCard ? adultCount * 350000 : 0;
  const wheelchairCost = addOnWheelchair ? 1200000 : 0;
  const totalAddOns = haramainTrainCost + taifTourCost + simCardCost + wheelchairCost;

  // Group discount
  const isGroup = (adultCount + childCount) >= 5;
  const groupDiscount = isGroup ? (adultCount + childCount) * 500000 : 0;

  const grandTotal = totalBase + totalAddOns - groupDiscount;

  const formatIDR = (val: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSearchTracking = (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchBookingCode.trim().toUpperCase();
    if (MOCK_TRACKING_DATA[query]) {
      setCurrentTracking(MOCK_TRACKING_DATA[query]);
      setTrackingError(null);
    } else {
      const found = Object.values(MOCK_TRACKING_DATA).find(t => t.passportNo.toUpperCase() === query);
      if (found) {
        setCurrentTracking(found);
        setTrackingError(null);
      } else {
        setTrackingError(`Data dengan kode/paspor "${query}" tidak ditemukan. Coba gunakan: DLW-2025-0891 atau DLW-2025-1044.`);
      }
    }
  };

  // Filtered schedules
  const filteredSchedules = DEPARTURE_SCHEDULES.filter(sch => {
    const matchAirline = scheduleAirlineFilter === 'all' || sch.airline.toLowerCase().includes(scheduleAirlineFilter.toLowerCase());
    const matchTier = scheduleTierFilter === 'all' || sch.tier.toLowerCase() === scheduleTierFilter.toLowerCase();
    return matchAirline && matchTier;
  });

  return (
    <section id="dashboard-section" className="py-20 bg-[#F5F2EB] border-t border-[#E2D9C8] relative text-[#1E293B] overflow-hidden">
      
      {/* Background Ornamen Ukiran Emas (Subtle Texture) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-multiply">
        <img 
          src={banner1} 
          alt="Islamic Pattern Background" 
          className="w-full h-full object-cover object-center filter sepia contrast-125"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            <LayoutDashboard className="w-4 h-4" />
            <span>INTERACTIVE COMMAND CONSOLE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Dashboard Interaktif & Portal Jamaah
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            Kelola estimasi biaya, pantau ketersediaan kursi real-time, lacak visa & dokumen, serta akses ringkasan operasional PT Delta Laras Wisata.
          </p>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto gap-2 p-1.5 bg-white/90 backdrop-blur-md rounded-2xl border border-[#E2D9C8] mb-10 shadow-sm">
          {[
            { id: 'overview', label: 'Ringkasan & Visualisasi Data', icon: TrendingUp },
            { id: 'calculator', label: 'Simulator Biaya & Paket', icon: Calculator },
            { id: 'schedules', label: 'Jadwal Kursi Terkini', icon: CalendarDays },
            { id: 'tracking', label: 'Cek Status Visa & Berkas', icon: FileSearch },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#0E2A47] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#0E2A47] hover:bg-[#FAF8F3]'
                }`}
              >
                <Icon className="w-4 h-4 text-[#C5A059]" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: OVERVIEW & DATA VISUALIZATION */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Top 4 KPI Metrics with 3D Flip Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <StatFlipCard
                title="Total Jamaah"
                value="12,480+"
                subtitle="Sejak 2013 hingga musim 1446H"
                frontIcon={Users}
                frontBadge={{ text: "11+ Tahun Melayani" }}
                accentColor="#C5A059"
                backTitle="Breakdown Jamaah"
                backSubtitle="100% Berangkat Sesuai Jadwal"
                backBadgeText="2013 - 2025"
                backDetails={[
                  { label: "Umroh Reguler 9 Hari", value: "9.200+ Pax" },
                  { label: "Umroh Plus & Arbain", value: "2.100+ Pax" },
                  { label: "Haji Khusus / Furoda", value: "1.180+ Pax" },
                ]}
              />

              <StatFlipCard
                title="Jaringan Cabang"
                value="21 Titik"
                subtitle="Nasional: Jabar, DKI, Banten, Luar Jawa"
                frontIcon={Building}
                frontBadge={{ text: "Hadir Lebih Dekat" }}
                accentColor="#0E2A47"
                backTitle="Distribusi Wilayah"
                backSubtitle="Lihat Tab Cabang Untuk PIC"
                backBadgeText="Kantor Resmi"
                backDetails={[
                  { label: "Bandung & Sekitarnya", value: "7 Kantor" },
                  { label: "Jabodetabek & Banten", value: "6 Kantor" },
                  { label: "Priangan & Sukabumi", value: "5 Kantor" },
                  { label: "Luar Pulau Jawa", value: "3 Kantor" },
                ]}
              />

              <StatFlipCard
                title="Kelulusan Visa MoFA"
                value="99.8%"
                subtitle="Provider resmi terintegrasi Saudi"
                frontIcon={ShieldCheck}
                frontBadge={{ text: "E-Visa Terintegrasi" }}
                accentColor="#10B981"
                backTitle="Sistem Visa Saudi"
                backSubtitle="Zero Overstay Record"
                backBadgeText="Provider Sah"
                backDetails={[
                  { label: "Rata-rata Terbit", value: "2x24 Jam" },
                  { label: "Asuransi Medis", value: "Termasuk" },
                  { label: "Tasreh Raudhah", value: "Terverifikasi" },
                ]}
              />

              <StatFlipCard
                title="Ketepatan Jadwal"
                value="100%"
                subtitle="Garuda Indonesia & Saudia Airlines"
                frontIcon={Plane}
                frontBadge={{ text: "Direct Flight Sah" }}
                accentColor="#C5A059"
                backTitle="Fasilitas Terbang"
                backSubtitle="Terbang Nyaman Tanpa Transit"
                backBadgeText="Garuda / Saudia"
                backDetails={[
                  { label: "Rute Utama", value: "CGK-JED / MED" },
                  { label: "Airport Lounge", value: "Terminal 3 Soetta" },
                  { label: "Jatah Bagasi", value: "30kg + 5L Zamzam" },
                ]}
              />
            </div>

            {/* Visual Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Chart 1: Distribusi Paket Pilihan Jamaah */}
              <div className="lg:col-span-6 p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2D9C8] shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
                  <h3 className="text-base font-bold text-[#0E2A47] font-cinzel">
                    Distribusi Pilihan Paket Ibadah
                  </h3>
                  <span className="text-[11px] text-slate-500 font-mono font-semibold">Tahun 2024-2025</span>
                </div>

                <div className="space-y-4">
                  {[
                    { label: 'Paket Gold 4★ (9 Hari)', percent: 45, count: '5,616 Jamaah', color: 'bg-[#C5A059]' },
                    { label: 'Paket Platinum 5★ Ring Satu', percent: 32, count: '3,993 Jamaah', color: 'bg-[#0E2A47]' },
                    { label: 'Paket Silver 3★ Hemat', percent: 13, count: '1,622 Jamaah', color: 'bg-[#506375]' },
                    { label: 'Paket Arbain 15 Hari Madinah', percent: 7, count: '873 Jamaah', color: 'bg-emerald-600' },
                    { label: 'Haji Khusus / Furoda Mujamalah', percent: 3, count: '376 Jamaah', color: 'bg-[#E5242A]' },
                  ].map((bar, i) => (
                    <div key={i} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-800 font-semibold">{bar.label}</span>
                        <span className="text-slate-500 font-mono">{bar.percent}% ({bar.count})</span>
                      </div>
                      <div className="h-3 w-full bg-[#F0EBE1] rounded-full overflow-hidden">
                        <div
                          className={`h-full ${bar.color} rounded-full transition-all duration-700`}
                          style={{ width: `${bar.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t border-[#F0EBE1] text-xs text-slate-500 italic">
                  * Berdasarkan data operasional resmi PT Delta Laras Wisata.
                </div>
              </div>

              {/* Chart 2: Tren Alokasi Kursi Bulanan */}
              <div className="lg:col-span-6 p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2D9C8] shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-[#F0EBE1] pb-3">
                  <h3 className="text-base font-bold text-[#0E2A47] font-cinzel">
                    Alokasi Seat Keberangkatan 2025/2026
                  </h3>
                  <span className="text-[11px] text-[#C5A059] font-mono font-bold">1446-1447 Hijriah</span>
                </div>

                {/* Monthly Histogram */}
                <div className="grid grid-cols-7 gap-2 items-end h-44 pt-6 pb-2 border-b border-[#F0EBE1]">
                  {[
                    { month: 'Okt', seats: 280, height: '40%' },
                    { month: 'Nov', seats: 420, height: '65%' },
                    { month: 'Des', seats: 650, height: '95%', highlight: true },
                    { month: 'Jan', seats: 380, height: '55%' },
                    { month: 'Feb', seats: 490, height: '70%' },
                    { month: 'Mar (Ram)', seats: 720, height: '100%', highlight: true },
                    { month: 'Mei (Haji)', seats: 310, height: '45%' },
                  ].map((col, idx) => (
                    <div key={idx} className="flex flex-col items-center h-full justify-end group">
                      <div className="text-[10px] text-slate-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity mb-1 tabular-nums font-bold">
                        {col.seats}
                      </div>
                      <div
                        className={`w-full rounded-t-lg transition-all duration-500 group-hover:brightness-110 ${
                          col.highlight
                            ? 'bg-[#E5242A]'
                            : 'bg-[#0E2A47]'
                        }`}
                        style={{ height: col.height }}
                      />
                      <span className="text-[10px] text-slate-700 mt-2 font-bold truncate w-full text-center">
                        {col.month}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#E5242A] inline-block" />
                    <span>Peak Season (Akhir Tahun & Ramadhan)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-sm bg-[#0E2A47] inline-block" />
                    <span>Reguler Season</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: CALCULATOR & SIMULATOR */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
            
            {/* Left Configuration Panel */}
            <div className="lg:col-span-7 p-7 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2D9C8] shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0E2A47] font-cinzel">
                Simulator Perjalanan Ibadah Dallas
              </h3>
              <p className="text-xs text-slate-600">
                Pilih jenis paket, tipe kamar, serta opsi tambahan untuk mendapatkan rincian biaya transparan dan akurat.
              </p>

              {/* 1. Pilih Paket */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                  1. Pilih Jenis Paket
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPkgId(pkg.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        selectedPkgId === pkg.id
                          ? 'bg-[#0E2A47] text-white border-[#0E2A47] shadow-sm'
                          : 'bg-[#FAF8F3] border-[#E2D9C8] text-slate-700 hover:border-[#C5A059]'
                      }`}
                    >
                      <div className="text-xs font-bold font-cinzel">{pkg.name}</div>
                      <div className={`text-[11px] mt-1 font-mono font-semibold ${
                        selectedPkgId === pkg.id ? 'text-[#DFB76C]' : 'text-[#C5A059]'
                      }`}>
                        Mulai {formatIDR(pkg.quadPrice)}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Pilih Tipe Kamar */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                  2. Tipe Kamar (Room Occupancy)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'quad', label: 'Quad (4 Pax)', sub: 'Sekamar Berempat' },
                    { id: 'triple', label: 'Triple (3 Pax)', sub: 'Sekamar Bertiga' },
                    { id: 'double', label: 'Double (2 Pax)', sub: 'Sekamar Berdua' },
                  ].map((room) => (
                    <button
                      key={room.id}
                      onClick={() => setRoomType(room.id as any)}
                      className={`p-3 rounded-xl text-center border transition-all ${
                        roomType === room.id
                          ? 'bg-[#C5A059] text-[#071E33] border-[#C5A059] font-bold shadow-sm'
                          : 'bg-[#FAF8F3] border-[#E2D9C8] text-slate-700 hover:bg-white'
                      }`}
                    >
                      <div className="text-xs font-bold">{room.label}</div>
                      <div className="text-[10px] opacity-80">{room.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. Jumlah Jamaah */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Jumlah Jamaah Dewasa
                  </label>
                  <div className="flex items-center gap-3 bg-[#FAF8F3] border border-[#E2D9C8] rounded-xl p-2">
                    <button
                      onClick={() => setAdultCount(Math.max(1, adultCount - 1))}
                      className="w-8 h-8 rounded-lg bg-[#0E2A47] text-white font-bold flex items-center justify-center hover:bg-[#153B60]"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-[#0E2A47] font-mono">{adultCount}</span>
                    <button
                      onClick={() => setAdultCount(adultCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#0E2A47] text-white font-bold flex items-center justify-center hover:bg-[#153B60]"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-700">
                    Anak-anak (Diskon 15%)
                  </label>
                  <div className="flex items-center gap-3 bg-[#FAF8F3] border border-[#E2D9C8] rounded-xl p-2">
                    <button
                      onClick={() => setChildCount(Math.max(0, childCount - 1))}
                      className="w-8 h-8 rounded-lg bg-[#0E2A47] text-white font-bold flex items-center justify-center hover:bg-[#153B60]"
                    >
                      -
                    </button>
                    <span className="flex-1 text-center font-bold text-[#0E2A47] font-mono">{childCount}</span>
                    <button
                      onClick={() => setChildCount(childCount + 1)}
                      className="w-8 h-8 rounded-lg bg-[#0E2A47] text-white font-bold flex items-center justify-center hover:bg-[#153B60]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* 4. Layanan Tambahan (Add-ons) */}
              <div className="space-y-2.5 pt-2">
                <label className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                  4. Layanan Tambahan (Optional Add-ons)
                </label>
                
                <div className="space-y-2">
                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] cursor-pointer hover:border-[#C5A059]">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addOnHaramainTrain}
                        onChange={(e) => setAddOnHaramainTrain(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0E2A47] accent-[#0E2A47]"
                      />
                      <span className="text-xs text-slate-800">Kereta Cepat Haramain Bullet Train (Makkah-Madinah 2 Jam)</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0E2A47]">+Rp 1.500.000 / pax</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] cursor-pointer hover:border-[#C5A059]">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addOnTaifTour}
                        onChange={(e) => setAddOnTaifTour(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0E2A47] accent-[#0E2A47]"
                      />
                      <span className="text-xs text-slate-800">City Tour & Cable Car Pegunungan Taif</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0E2A47]">+Rp 950.000 / pax</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] cursor-pointer hover:border-[#C5A059]">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addOnSimCard}
                        onChange={(e) => setAddOnSimCard(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0E2A47] accent-[#0E2A47]"
                      />
                      <span className="text-xs text-slate-800">Sim Card Saudi Unlimited Internet 14 Hari</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0E2A47]">+Rp 350.000 / pax</span>
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] cursor-pointer hover:border-[#C5A059]">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={addOnWheelchair}
                        onChange={(e) => setAddOnWheelchair(e.target.checked)}
                        className="w-4 h-4 rounded text-[#0E2A47] accent-[#0E2A47]"
                      />
                      <span className="text-xs text-slate-800">Pendamping Muthawwif Kursi Roda Tawaf & Sa'i</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-[#0E2A47]">+Rp 1.200.000</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary Invoice Receipt Card in Deep Navy */}
            <div className="lg:col-span-5 p-7 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 flex flex-col justify-between shadow-xl space-y-6">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div>
                    <h4 className="text-base font-bold text-white font-cinzel">Rincian Estimasi Biaya</h4>
                    <span className="text-[11px] text-[#DFB76C]">Dallas Official Quote</span>
                  </div>
                  <span className="text-xs font-mono text-[#DFB76C] font-semibold">
                    ID: DLW-SIM-{Math.floor(1000 + Math.random() * 9000)}
                  </span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Paket:</span>
                    <span className="font-semibold text-white text-right">{currentPkg.name}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Tipe Kamar:</span>
                    <span className="font-semibold text-[#DFB76C] uppercase">{roomType} Room</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Dewasa ({adultCount} pax):</span>
                    <span className="font-mono text-white">{formatIDR(adultCount * basePricePerPerson)}</span>
                  </div>
                  {childCount > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>Anak ({childCount} pax):</span>
                      <span className="font-mono text-white">{formatIDR(childCount * childPricePerPerson)}</span>
                    </div>
                  )}

                  {totalAddOns > 0 && (
                    <div className="flex justify-between text-slate-300 pt-2 border-t border-white/10">
                      <span>Layanan Tambahan (Add-ons):</span>
                      <span className="font-mono text-[#DFB76C]">+{formatIDR(totalAddOns)}</span>
                    </div>
                  )}

                  {isGroup && (
                    <div className="flex justify-between text-emerald-400 pt-2 border-t border-white/10">
                      <span>Diskon Rombongan (≥5 Orang):</span>
                      <span className="font-mono">-{formatIDR(groupDiscount)}</span>
                    </div>
                  )}

                  {/* Grand Total */}
                  <div className="p-4 rounded-xl bg-[#071E33] border border-[#C5A059]/40 mt-4">
                    <div className="text-[11px] uppercase tracking-wider text-slate-300">
                      Total Estimasi Investasi Ibadah:
                    </div>
                    <div className="text-2xl sm:text-3xl font-bold text-[#DFB76C] font-cinzel tabular-nums mt-1">
                      {formatIDR(grandTotal)}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-1">
                      * Termasuk tiket pesawat PP, visa resmi, akomodasi, makan 3x sehari & perlengkapan ibadah.
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-4">
                <a
                  href={`https://wa.me/6281280878321?text=Halo%20Dallas%20Tour,%20saya%20sudah%20simulasi%20paket%20${encodeURIComponent(currentPkg.name)}%20tipe%20${roomType}%20untuk%20${adultCount}%20dewasa.%20Estimasi%20total%20${encodeURIComponent(formatIDR(grandTotal))}.%20Mohon%20info%20ketersediaan%20seat.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-[#E5242A] hover:bg-[#D32F2F] text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  <span>Kirim Estimasi ke WhatsApp Konsultan</span>
                </a>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#071E33] hover:bg-[#0A233A] text-white border border-[#C5A059]/40 text-xs font-bold transition-all flex items-center justify-center gap-2"
                >
                  <CreditCard className="w-4 h-4 text-[#DFB76C]" />
                  <span>Ajukan Pemesanan Porsi / DP</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* TAB 3: SCHEDULES & SEAT AVAILABILITY */}
        {activeTab === 'schedules' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Filter Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E2D9C8] shadow-sm">
              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-700 font-bold">Filter Maskapai:</span>
                <div className="flex items-center gap-2">
                  {['all', 'Garuda', 'Saudia'].map((air) => (
                    <button
                      key={air}
                      onClick={() => setScheduleAirlineFilter(air)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        scheduleAirlineFilter === air
                          ? 'bg-[#0E2A47] text-white'
                          : 'bg-[#FAF8F3] text-slate-700 hover:text-[#0E2A47] border border-[#E2D9C8]'
                      }`}
                    >
                      {air === 'all' ? 'Semua Maskapai' : air}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs text-slate-700 font-bold">Filter Paket:</span>
                <div className="flex items-center gap-2">
                  {['all', 'Platinum', 'Gold', 'Silver'].map((tier) => (
                    <button
                      key={tier}
                      onClick={() => setScheduleTierFilter(tier)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                        scheduleTierFilter === tier
                          ? 'bg-[#0E2A47] text-white'
                          : 'bg-[#FAF8F3] text-slate-700 hover:text-[#0E2A47] border border-[#E2D9C8]'
                      }`}
                    >
                      {tier === 'all' ? 'Semua Kategori' : tier}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Table Schedules */}
            <div className="overflow-x-auto rounded-2xl border border-[#E2D9C8] bg-white/95 backdrop-blur-md shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-[#0E2A47] text-[#DFB76C] font-cinzel uppercase text-[11px] tracking-wider">
                  <tr>
                    <th className="py-4 px-4">Tanggal Keberangkatan</th>
                    <th className="py-4 px-4">Program & Tier</th>
                    <th className="py-4 px-4">Maskapai & Rute</th>
                    <th className="py-4 px-4">Pembimbing Ustadz</th>
                    <th className="py-4 px-4">Sisa Seat</th>
                    <th className="py-4 px-4">Mulai Dari</th>
                    <th className="py-4 px-4 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E5E0D8] text-slate-700">
                  {filteredSchedules.map((sch) => {
                    const remainingSeats = sch.totalSeats - sch.bookedSeats;
                    return (
                      <tr key={sch.id} className="hover:bg-[#FAF8F3] transition-colors">
                        <td className="py-4 px-4">
                          <div className="font-bold text-[#0E2A47]">{sch.date}</div>
                          <span className="text-[11px] text-slate-500 font-mono">{sch.id}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-bold text-[#0E2A47]">{sch.program}</div>
                          <span className="text-[11px] text-slate-500">Tier Bintang {sch.tier === 'Platinum' ? '5' : sch.tier === 'Gold' ? '4' : '3'}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="text-slate-800 font-medium">{sch.airline}</div>
                          <div className="text-[11px] text-slate-500">{sch.flightRoute}</div>
                        </td>
                        <td className="py-4 px-4">
                          <span className="text-[#0E2A47] font-semibold">{sch.leadUstadz}</span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <span className={`font-mono font-bold ${
                              remainingSeats <= 5 ? 'text-[#E5242A]' : 'text-emerald-700'
                            }`}>
                              {remainingSeats} / {sch.totalSeats}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                              sch.status === 'Tersedia'
                                ? 'bg-emerald-100 text-emerald-800'
                                : sch.status === 'Hampir Penuh'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-red-100 text-[#E5242A]'
                            }`}>
                              {sch.status}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-mono font-bold text-[#0E2A47]">
                            {formatIDR(sch.priceStartFrom)}
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <button
                            onClick={() => onBookSchedule(sch.id)}
                            disabled={sch.status === 'Penuh'}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                              sch.status === 'Penuh'
                                ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                                : 'bg-[#E5242A] text-white hover:bg-[#D32F2F] shadow-xs'
                            }`}
                          >
                            {sch.status === 'Penuh' ? 'Seat Full' : 'Booking Seat'}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: TRACKING STATUS DOKUMEN & VISA */}
        {activeTab === 'tracking' && (
          <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in duration-300">
            {/* Search Box */}
            <div className="p-6 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2D9C8] shadow-sm">
              <form onSubmit={handleSearchTracking} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Masukkan Nomor Booking (contoh: DLW-2025-0891) atau No Paspor..."
                  value={searchBookingCode}
                  onChange={(e) => setSearchBookingCode(e.target.value)}
                  className="flex-1 bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl py-3 px-4 text-sm text-[#0E2A47] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#0E2A47] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#153B60] transition-all flex items-center justify-center gap-2"
                >
                  <FileSearch className="w-4 h-4 text-[#DFB76C]" />
                  <span>Lacak Status</span>
                </button>
              </form>
              <div className="text-[11px] text-slate-500 mt-2">
                Contoh kode terdaftar untuk pengujian: <span className="text-[#0E2A47] font-mono font-bold">DLW-2025-0891</span>, <span className="text-[#0E2A47] font-mono font-bold">DLW-2025-1044</span>, atau <span className="text-[#0E2A47] font-mono font-bold">DLW-2026-0120</span>.
              </div>
            </div>

            {trackingError && (
              <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-[#E5242A] text-xs font-semibold">
                {trackingError}
              </div>
            )}

            {currentTracking && (
              <div className="p-8 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E2D9C8] shadow-md space-y-6">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#F0EBE1] pb-5">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#C5A059] font-cinzel font-bold">
                      DATA REGISTRASI JAMAAH
                    </span>
                    <h3 className="text-xl font-bold text-[#0E2A47] font-cinzel">
                      {currentTracking.passengerName}
                    </h3>
                    <div className="text-xs text-slate-600 mt-0.5">
                      {currentTracking.packageType}
                    </div>
                  </div>

                  <div className="text-left sm:text-right space-y-1">
                    <div className="text-xs text-slate-500">Kode Booking:</div>
                    <div className="text-base font-bold text-[#0E2A47] font-mono">
                      {currentTracking.bookingId}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      No. Paspor: <span className="font-mono text-slate-800 font-semibold">{currentTracking.passportNo}</span>
                    </div>
                  </div>
                </div>

                {/* Progress Steps Timeline */}
                <div className="space-y-4 pt-2">
                  <div className="text-xs font-bold text-[#0E2A47] uppercase tracking-wider">
                    Tahapan Pemrosesan Dokumen & Keberangkatan:
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    {[
                      { key: 'passportCheck', title: '1. Verifikasi Paspor & Rekam Medis', desc: 'Masa berlaku paspor ≥ 7 bulan & sertifikat vaksin' },
                      { key: 'biometricVisa', title: '2. Rekam Biometrik Bio Visa', desc: 'Pemindaian sidik jari & wajah aplikasi resmi' },
                      { key: 'mofaVisaUmrah', title: '3. Penerbitan E-Visa Umroh MoFA', desc: 'Visa elektronik resmi Kementerian Haji Arab Saudi' },
                      { key: 'flightTicket', title: '4. Penerbitan Tiket Pesawat PP', desc: 'Garuda Indonesia / Saudia Airlines confirmed' },
                      { key: 'hotelVoucher', title: '5. Konfirmasi Voucher Hotel Makkah/Madinah', desc: 'Room booking verified ring satu' },
                      { key: 'tasrehRaudhah', title: '6. Tasreh Masuk Raudhah As-Syarifah', desc: 'Jadwal izin ibadah di Taman Surga Masjid Nabawi' },
                      { key: 'travelKitSent', title: '7. Distribusi Perlengkapan Koper & Ihram', desc: 'Koper fiber eksklusif Dallas telah dikirimkan' },
                    ].map((step, idx) => {
                      const isComplete = currentTracking.steps[step.key as keyof typeof currentTracking.steps];
                      return (
                        <div
                          key={idx}
                          className={`p-3.5 rounded-xl border flex items-start gap-3 transition-all ${
                            isComplete
                              ? 'bg-[#FAF8F3] border-emerald-400'
                              : 'bg-white border-[#E2D9C8] opacity-60'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isComplete ? (
                              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                            ) : (
                              <Clock className="w-5 h-5 text-amber-500" />
                            )}
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0E2A47]">
                              {step.title}
                            </div>
                            <div className="text-[11px] text-slate-500 mt-0.5">
                              {step.desc}
                            </div>
                            <div className="text-[10px] mt-1 font-mono">
                              {isComplete ? (
                                <span className="text-emerald-700 font-bold">✓ SELESAI & TERVERIFIKASI</span>
                              ) : (
                                <span className="text-amber-700 font-semibold">⏳ Dalam Proses Antrean</span>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EBE1] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
                  <div>
                    Pembaruan Terakhir: <span className="text-[#0E2A47] font-mono font-semibold">{currentTracking.lastUpdated}</span>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="text-[#0E2A47] hover:text-[#C5A059] font-bold flex items-center gap-1.5"
                  >
                    <span>Ada Kendala? Hubungi Petugas Dallas</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                  </button>
                </div>

              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};