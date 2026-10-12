import React, { useState } from 'react';
import { BRANCH_OFFICES } from '../data/dallasData';
import { Search, MessageSquare } from 'lucide-react';

export const BranchesDirectory: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<'All' | 'Jabodetabek' | 'Jawa Barat' | 'Luar Jawa'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBranches = BRANCH_OFFICES.filter((branch) => {
    const matchesRegion = selectedRegion === 'All' || branch.region === selectedRegion;
    const matchesSearch =
      branch.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      branch.address.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRegion && matchesSearch;
  });

  return (
    <section id="cabang" className="py-20 bg-[#FBF9F5] border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (From PDF Page 6) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            PERWAKILAN DAN CABANG
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Hadir Lebih Dekat Untuk Melayani
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            "Dari Indonesia Untuk Tanah Suci." Jaringan kantor cabang dan pusat informasi resmi tersebar di 21 wilayah strategis di seluruh Indonesia.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-[#E2D9C8] shadow-sm">
          
          {/* Region Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Jabodetabek', 'Jawa Barat', 'Luar Jawa'] as const).map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedRegion === region
                    ? 'bg-[#0E2A47] text-white shadow-sm'
                    : 'bg-[#F8F6F0] text-slate-600 hover:text-[#0E2A47] border border-[#E5E0D8]'
                }`}
              >
                {region === 'All' ? 'Semua Cabang (21)' : region}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari kota atau cabang..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#FAF8F3] border border-[#D0DBE5] rounded-xl py-2 pl-9 pr-3 text-xs text-[#0E2A47] placeholder-slate-400 focus:outline-none focus:border-[#C5A059]"
            />
          </div>

        </div>

        {/* Branches Grid (21 Points matching PDF Page 6) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div
              key={branch.id}
              className={`p-6 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-sm hover:shadow-md ${
                branch.id === 15
                  ? 'border-[#C5A059] ring-2 ring-[#C5A059]/20'
                  : 'border-[#E2D9C8] hover:border-[#C5A059]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-md bg-[#0E2A47] text-[#DFB76C] text-xs font-bold font-mono flex items-center justify-center">
                      {branch.id}
                    </span>
                    <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                      {branch.region}
                    </span>
                  </div>
                  {branch.id === 15 && (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-white bg-[#E5242A] px-2 py-0.5 rounded font-cinzel shadow-xs">
                      Kantor Pusat
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-[#0E2A47] font-cinzel mb-1 group-hover:text-[#C5A059] transition-colors">
                  {branch.name}
                </h3>
                <div className="text-xs font-semibold text-[#C5A059] mb-2">
                  {branch.city}
                </div>

                <p className="text-xs text-slate-600 font-sans-clean leading-relaxed font-light mb-4">
                  {branch.address}
                </p>

                <div className="text-[11px] text-slate-500 pt-2 border-t border-[#F0EBE1] space-y-1">
                  <div>PIC / Manajer: <span className="text-[#0E2A47] font-semibold">{branch.manager}</span></div>
                  <div>Telepon: <span className="text-[#0E2A47] font-mono font-medium">{branch.phone}</span></div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#F0EBE1] flex items-center gap-2">
                <a
                  href={`https://wa.me/6281280878321?text=Halo%20Dallas%20Tour,%20saya%20ingin%20konsultasi%20di%20${encodeURIComponent(branch.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-[#0E2A47] hover:bg-[#153B60] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#DFB76C]" />
                  <span>Hubungi Kantor Cabang</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredBranches.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            Tidak ditemukan kantor cabang dengan kata kunci "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
