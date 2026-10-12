import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, Send, ShieldCheck } from 'lucide-react';
import { PACKAGES } from '../data/dallasData';
import { DallasLogo } from './DallasLogo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPackage?: string;
  preselectedSchedule?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedPackage,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [packageChoice, setPackageChoice] = useState(preselectedPackage || 'platinum-9d');
  const [paxCount, setPaxCount] = useState(2);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMsg('Mohon cantumkan nama lengkap Anda.');
      return;
    }
    if (!phone.trim() || phone.length < 8) {
      setErrorMsg('Mohon masukkan nomor WhatsApp yang valid.');
      return;
    }

    setSubmitted(true);
    setErrorMsg('');
  };

  const selectedPkgData = PACKAGES.find(p => p.id === packageChoice);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white border border-[#C5A059]/50 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-y-auto max-h-[90vh] text-[#1E293B]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-[#0E2A47] p-1 rounded-lg focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-4">
              <DallasLogo variant="light" size="sm" />
            </div>

            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059] font-cinzel font-bold mb-1">
              <PhoneCall className="w-4 h-4" />
              <span>KONSULTASI IBADAH & PEMESANAN SEAT</span>
            </div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#0E2A47] font-cinzel mb-2">
              Bimbingan Khusyuk Menuju Baitullah
            </h3>

            <p className="text-xs text-slate-600 font-sans-clean mb-6">
              Konsultan Dallas Tour & Travel akan menghubungi Anda dalam waktu maksimal 15 menit pada jam operasional untuk konfirmasi ketersediaan seat dan bimbingan manasik.
            </p>

            {errorMsg && (
              <div className="p-3 mb-4 rounded-xl bg-red-50 border border-red-200 text-[#E5242A] text-xs font-semibold">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#0E2A47] font-bold mb-1">
                  Nama Lengkap Sesuai KTP / Paspor *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: H. Ahmad Subagio"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl p-3 text-[#0E2A47] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0E2A47] font-bold mb-1">
                    Nomor WhatsApp Aktif *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxxxxxx"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl p-3 text-[#0E2A47] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-[#0E2A47] font-bold mb-1">
                    Kota Domisili / Cabang Terdekat
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: Bandung / Jakarta / Bekasi"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl p-3 text-[#0E2A47] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0E2A47] font-bold mb-1">
                    Pilihan Paket Perjalanan
                  </label>
                  <select
                    value={packageChoice}
                    onChange={(e) => setPackageChoice(e.target.value)}
                    className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl p-3 text-[#0E2A47] focus:outline-none focus:border-[#C5A059]"
                  >
                    {PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[#0E2A47] font-bold mb-1">
                    Rencana Jumlah Jamaah
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={paxCount}
                    onChange={(e) => setPaxCount(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl p-3 text-[#0E2A47] focus:outline-none focus:border-[#C5A059] font-mono font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#0E2A47] font-bold mb-1">
                  Catatan Khusus / Permintaan Khusus (Opsional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Contoh: Butuh kursi roda untuk orang tua, rencana sekamar berdua, dll."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl p-3 text-[#0E2A47] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#E5242A] hover:bg-[#D32F2F] text-white font-bold uppercase tracking-wider text-xs transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Formulir Konsultasi</span>
                </button>
              </div>

              <div className="text-[11px] text-center text-slate-500 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Data terhubung langsung ke Kantor Pusat PT Delta Laras Wisata.</span>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-bold text-[#0E2A47] font-cinzel">
              Alhamdulillah, Permintaan Diterima!
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-sans-clean max-w-sm mx-auto leading-relaxed">
              Terima kasih Bpk/Ibu <strong className="text-[#0E2A47]">{fullName}</strong>. Data rencana ibadah untuk paket <strong className="text-[#C5A059]">{selectedPkgData?.name}</strong> ({paxCount} jamaah) telah tersimpan di sistem Dallas Tour & Travel.
            </p>

            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#E2D9C8] text-xs text-slate-700 text-left space-y-1">
              <div>Nomor Tiket: <span className="font-mono text-[#0E2A47] font-bold">DLW-LEAD-{Math.floor(100000 + Math.random() * 900000)}</span></div>
              <div>Hotline Resmi: <span className="font-mono text-[#0E2A47] font-bold">021 - 8087 8321</span></div>
              <div>Alamat: <span className="text-slate-600">Binawan Building Lobby 3 LG, Kalibata Raya, Jakarta Timur</span></div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                href={`https://wa.me/6281280878321?text=Halo%20Dallas%20Tour,%20saya%20sudah%20mengisi%20form%20konsultasi%20atas%20nama%20${encodeURIComponent(fullName)}%20(${phone})%20untuk%20paket%20${encodeURIComponent(selectedPkgData?.name || '')}.%20Mohon%20info%20lebih%20lanjut.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 rounded-xl bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-emerald-800"
              >
                <span>Buka Chat WhatsApp</span>
              </a>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="py-3 px-5 rounded-xl bg-[#0E2A47] text-white hover:bg-[#153B60] text-xs font-bold"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
