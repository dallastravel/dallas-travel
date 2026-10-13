import React, { useState, useEffect } from 'react';
import { LayoutDashboard, PhoneCall, Menu, X } from 'lucide-react';
import logoDallas from '../assets/images/logo-dallas.png';

interface NavbarProps {
  activeTab: 'landing' | 'dashboard';
  setActiveTab: (tab: 'landing' | 'dashboard') => void;
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#hero' },
    { label: 'Profil & Legalitas', href: '#profil' },
    { label: 'Layanan & Paket', href: '#layanan' },
    { label: 'Pengalaman Ibadah', href: '#pengalaman' },
    { label: 'Pembimbing', href: '#pembimbing' },
    { label: '21 Cabang', href: '#cabang' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071E33]/95 backdrop-blur-md border-b border-[#C5A059]/30 shadow-xl py-2.5'
          : 'bg-gradient-to-b from-[#071E33]/90 via-[#0E2A47]/80 to-transparent border-b border-white/10 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Floating Badge Logo Overlapping Navbar & Hero */}
<div className="relative flex items-center">
  <button
    onClick={() => {
      setActiveTab('landing');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}
    className="group text-left focus:outline-none transition-transform hover:scale-105"
  >
    {/* Card/Badge Latar Terang yang Menggantung Melintasi 2 Section */}
    <div className="bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-b-2xl shadow-2xl border-x border-b border-[#C5A059]/50 flex items-center justify-center transform translate-y-3 sm:translate-y-4 transition-all">
      <img 
        src={logoDallas} 
        alt="PT Delta Laras Wisata" 
        className="h-12 sm:h-16 w-auto object-contain" 
      />
    </div>
  </button>
</div>
          
          {/* Zone 2: Nav Links (Clean typography with subtle gold underline) */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (activeTab === 'dashboard') {
                    setActiveTab('landing');
                  }
                }}
                className="text-xs sm:text-sm font-medium text-slate-200 hover:text-[#DFB76C] transition-colors whitespace-nowrap relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Toggle View: Dashboard Interaktif */}
            <button
              onClick={() => {
                setActiveTab(activeTab === 'landing' ? 'dashboard' : 'landing');
                if (activeTab === 'landing') {
                  const dashboardElem = document.getElementById('dashboard-section');
                  if (dashboardElem) dashboardElem.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold tracking-wide transition-all border ${
                activeTab === 'dashboard'
                  ? 'bg-[#C5A059] text-[#071E33] border-[#C5A059] font-bold shadow-md'
                  : 'bg-[#0E2A47]/80 text-[#DFB76C] border-[#C5A059]/40 hover:bg-[#153B60]'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{activeTab === 'dashboard' ? 'Tampilan Web Profil' : 'Dashboard Interaktif'}</span>
            </button>
          </nav>

          {/* Zone 3: Primary Action Button (Dallas Red + Gold Accent) */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 text-xs uppercase tracking-wider font-bold text-white bg-[#E5242A] hover:bg-[#D32F2F] rounded-lg shadow-md hover:shadow-lg active:scale-95 transition-all whitespace-nowrap flex items-center gap-2 border border-red-400/40"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Konsultasi Ibadah</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setActiveTab(activeTab === 'landing' ? 'dashboard' : 'landing')}
              className="p-2 rounded-lg bg-[#0E2A47] text-[#DFB76C] border border-[#C5A059]/50 text-xs"
              title="Dashboard"
            >
              <LayoutDashboard className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-200 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071E33]/98 border-b border-[#C5A059]/30 px-5 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (activeTab === 'dashboard') setActiveTab('landing');
                }}
                className="px-3 py-2 text-slate-200 hover:text-[#DFB76C] hover:bg-[#0E2A47] rounded-lg text-sm font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setActiveTab(activeTab === 'landing' ? 'dashboard' : 'landing');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#0E2A47] border border-[#C5A059]/50 text-[#DFB76C] text-sm font-semibold flex items-center justify-center gap-2"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>{activeTab === 'dashboard' ? 'Kembali ke Web Profil' : 'Buka Dashboard Interaktif'}</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-[#E5242A] text-white text-sm font-bold flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Konsultasi Ibadah Umroh / Haji</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
