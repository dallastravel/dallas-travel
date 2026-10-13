import React, { useState, useEffect } from 'react';
import { LucideIcon, RotateCw } from 'lucide-react';

export interface StatFlipCardProps {
  // Front face props
  title: string;
  value: string;
  subtitle: string;
  frontIcon: LucideIcon;
  frontBadge?: {
    text: string;
    color?: string;
  };
  // Back face props
  backTitle: string;
  backSubtitle: string;
  backDetails: {
    label: string;
    value: string;
  }[];
  backBadgeText: string;
  accentColor?: string;
}

export const StatFlipCard: React.FC<StatFlipCardProps> = ({
  title,
  value,
  subtitle,
  frontIcon: FrontIcon,
  frontBadge,
  backTitle,
  backSubtitle,
  backDetails,
  backBadgeText,
  accentColor = '#C5A059',
}) => {
  const [isMobileFlipped, setIsMobileFlipped] = useState(false);

  // Fitur Auto-Flip Otomatis setiap 5 detik bergantian
  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsMobileFlipped((prev) => !prev);
    }, 5000); // Berputar otomatis tiap 5 detik

    return () => clearInterval(flipInterval);
  }, []);

  const toggleFlip = () => {
    setIsMobileFlipped(!isMobileFlipped);
  };

  return (
    <div
      onClick={toggleFlip}
      className="perspective-1000 group h-[210px] w-full cursor-pointer select-none"
    >
      {/* 3D Flipping Container with Luxury 900ms Ease-Out Transition */}
      <div
        style={{
          transition: 'transform 900ms cubic-bezier(0.25, 1, 0.35, 1)',
        }}
        className={`relative w-full h-full transform-style-3d group-hover:rotate-y-180 will-change-transform ${
          isMobileFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* ================= FRONT SIDE ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl bg-white border border-[#E2D9C8] p-5 shadow-sm group-hover:shadow-lg transition-shadow flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span className="font-semibold text-slate-600 truncate">{title}</span>
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-xs"
                style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
              >
                <FrontIcon className="w-4 h-4" />
              </div>
            </div>

            <div className="text-3xl font-bold text-[#0E2A47] font-cinzel tabular-nums tracking-tight mt-1">
              {value}
            </div>

            {frontBadge && (
              <div className="text-[11px] text-emerald-700 mt-1.5 flex items-center gap-1 font-semibold">
                <span>{frontBadge.text}</span>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-[#F0EBE1] flex items-center justify-between text-[11px] text-slate-500">
            <span className="truncate pr-2">{subtitle}</span>
            <span className="text-[10px] uppercase tracking-wider text-[#C5A059] font-bold flex items-center gap-1 shrink-0 opacity-80 group-hover:opacity-100">
              <RotateCw className="w-2.5 h-2.5" />
              <span>Auto-Flip</span>
            </span>
          </div>
        </div>

        {/* ================= BACK SIDE (ROTATED 180 DEG) ================= */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl bg-[#0E2A47] text-white border border-[#C5A059]/40 p-5 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2.5">
              <span className="text-xs font-bold text-[#DFB76C] font-cinzel uppercase tracking-wider">
                {backTitle}
              </span>
              <span className="text-[10px] text-slate-300 font-mono">
                {backBadgeText}
              </span>
            </div>

            <div className="space-y-1.5 text-xs">
              {backDetails.map((detail, idx) => (
                <div key={idx} className="flex items-center justify-between text-[11px]">
                  <span className="text-slate-300">{detail.label}</span>
                  <span className="font-bold text-white font-mono">{detail.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-300">
            <span className="truncate pr-1 text-[#DFB76C] italic">{backSubtitle}</span>
            <span className="text-slate-400 font-mono text-[9px] shrink-0">PT DELTA LARAS WISATA</span>
          </div>
        </div>
      </div>
    </div>
  );
};