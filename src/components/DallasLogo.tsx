import React from 'react';

interface DallasLogoProps {
  variant?: 'light' | 'dark' | 'auto';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DallasLogo: React.FC<DallasLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md'
}) => {
  const isLight = variant === 'light'; // Light background -> navy text

  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-14 h-14'
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl sm:text-4xl'
  };

  const badgeSizes = {
    sm: 'text-[7px] px-1.5 py-0.5',
    md: 'text-[9px] px-2 py-0.5',
    lg: 'text-[11px] px-3 py-1'
  };

  const subtitleSizes = {
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[10px] tracking-[0.25em]',
    lg: 'text-xs tracking-[0.3em]'
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Emblem Icon from PDF */}
      <div className={`${iconSizes[size]} relative shrink-0 flex items-center justify-center`}>
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Top Red Wing/Curve */}
          <path
            d="M 12 28 C 12 16, 26 10, 42 12 C 48 13, 50 17, 46 21 C 36 29, 22 28, 12 28 Z"
            fill="#E5242A"
          />
          {/* Bottom Navy Wing/Base */}
          <path
            d="M 14 32 C 24 32, 38 31, 46 39 C 50 43, 46 48, 40 48 C 24 49, 12 42, 14 32 Z"
            fill="#0E2A47"
          />
          {/* Islamic Green Crescent / Swoosh */}
          <path
            d="M 32 10 C 44 8, 54 16, 52 24 C 50 18, 42 13, 32 10 Z"
            fill="#34A853"
          />
        </svg>
      </div>

      {/* Typography Lockup from PDF */}
      <div className="flex flex-col leading-none">
        <div className="relative flex items-center">
          <span
            className={`font-sans font-black tracking-tight ${titleSizes[size]} ${
              isLight ? 'text-[#0E2A47]' : 'text-white'
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: '-0.03em' }}
          >
            Dallas
          </span>
          {/* Green leaf accent arching over "allas" */}
          <svg
            viewBox="0 0 40 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute -top-2 left-10 w-9 h-3"
          >
            <path
              d="M 2 10 C 14 2, 30 2, 38 8 C 28 5, 14 6, 2 10 Z"
              fill="#34A853"
            />
          </svg>
        </div>

        {/* Red Official Badge */}
        <div className="mt-1">
          <span
            className={`inline-block font-sans font-bold uppercase tracking-wider text-white bg-[#E5242A] rounded-[2px] ${badgeSizes[size]}`}
          >
            PT. DELTA LARAS WISATA
          </span>
        </div>

        {/* Subtitle */}
        <div
          className={`font-sans uppercase font-semibold mt-1 ${subtitleSizes[size]} ${
            isLight ? 'text-[#0E2A47]/80' : 'text-slate-300'
          }`}
        >
          TOUR & TRAVEL
        </div>
      </div>
    </div>
  );
};
