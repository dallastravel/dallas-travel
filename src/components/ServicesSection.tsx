import React from 'react';
import { SERVICES } from '../data/dallasData';
import { IMAGES } from '../assets/images';
import { Crown, Compass, Bus, Plane, FileBadge, Globe, UtensilsCrossed, ArrowRight, Check } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crown': return <Crown className="w-6 h-6 text-white" />;
      case 'Compass': return <Compass className="w-6 h-6 text-white" />;
      case 'Bus': return <Bus className="w-6 h-6 text-white" />;
      case 'Plane': return <Plane className="w-6 h-6 text-white" />;
      case 'FileBadge': return <FileBadge className="w-6 h-6 text-white" />;
      case 'Globe': return <Globe className="w-6 h-6 text-white" />;
      default: return <Compass className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="layanan" className="py-20 bg-[#FBF9F5] border-t border-[#E5E0D8] relative text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (From PDF Page 7) */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs uppercase tracking-widest text-[#C5A059] font-bold font-cinzel mb-2">
            PRODUK DAN LAYANAN
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0E2A47] font-cinzel">
            Solusi Perjalanan Terpercaya
          </h2>
          <div className="w-16 h-0.5 bg-[#C5A059] mx-auto mt-4 mb-4" />
          <p className="text-sm text-slate-600 font-sans-clean">
            "Kami hadir untuk memberikan layanan terbaik, profesional dan terpercaya dalam setiap perjalanan Anda."
          </p>
        </div>

        {/* 6 Core Services Grid (From PDF Page 7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl bg-white border border-[#E2D9C8] hover:border-[#C5A059] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-sm hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-xl bg-[#0E2A47] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0E2A47] font-cinzel mb-1 group-hover:text-[#C5A059] transition-colors">
                  {service.title}
                </h3>
                <div className="text-xs font-semibold text-[#C5A059] mb-3 font-sans-clean">
                  {service.subtitle}
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-sans-clean leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between">
                <button
                  onClick={() => onSelectService(service.id)}
                  className="text-xs font-bold text-[#0E2A47] hover:text-[#C5A059] flex items-center gap-1.5 transition-colors group-hover:translate-x-0.5"
                >
                  <span>Detail & Konsultasi</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C5A059]" />
                </button>
                <span className="text-[11px] text-slate-400 font-sans-clean">
                  Resmi Dallas
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Spotlight: Authentic Indonesian Culinary & Hospitality Feature (From PDF Page 9) */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#071E33] text-white border border-[#C5A059]/40 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#DFB76C] font-cinzel font-bold">
                <UtensilsCrossed className="w-4 h-4" />
                <span>AUTHENTIC CULINARY EXPERIENCE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-cinzel">
                Kelezatan Masakan Indonesia 3x Sehari Selama di Tanah Suci
              </h3>
              <p className="text-sm text-slate-300 font-sans-clean leading-relaxed font-light">
                Kesehatan dan stamina prima adalah kunci kekhusyukan ibadah di Makkah dan Madinah. Dallas Tour & Travel secara konsisten menyajikan menu hidangan khas nusantara bercita rasa autentik 3 kali sehari yang disiapkan secara higienis oleh chef berpengalaman.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Menu Nusantara Segar Setiap Hari</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Prasmanan Higienis Restoran Hotel</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Air Zamzam Murni Berlimpah</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-[#DFB76C] shrink-0" />
                  <span>Katering Khusus Ramadhan & Haji</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-xl aspect-[4/3]">
              <img
                src={IMAGES.culinaryDining}
                alt="Authentic Indonesian Culinary Hospitality in Mecca"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-serif-luxury italic text-[#DFB76C]">
                  "A pleasant part of your journey — Santapan lezat penuh berkah."
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
