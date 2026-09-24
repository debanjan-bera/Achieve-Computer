import React from 'react';
import { motion } from 'framer-motion';
import {
  Clock,
  ArrowRight,
  Check,
  Sparkles
} from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

// ==========================================
// OFFICIAL / ACTUAL COURSE BRAND ICONS
// ==========================================

// 1. Official Microsoft Office / 365 4-Color Logo
const MicrosoftOfficeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="6" y="6" width="36" height="36" rx="4" fill="#F25022" />
    <rect x="46" y="6" width="36" height="36" rx="4" fill="#7FBA00" />
    <rect x="6" y="46" width="36" height="36" rx="4" fill="#00A4EF" />
    <rect x="46" y="46" width="36" height="36" rx="4" fill="#FFB900" />
  </svg>
);

// 2. Official Microsoft Excel Logo
const MicrosoftExcelIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="22" y="10" width="64" height="76" rx="9" fill="#107C41" />
    {/* Grid sheets */}
    <rect x="40" y="24" width="38" height="48" rx="4" fill="#0A5C2F" />
    <line x1="40" y1="40" x2="78" y2="40" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
    <line x1="40" y1="56" x2="78" y2="56" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
    <line x1="59" y1="24" x2="59" y2="72" stroke="#FFFFFF" strokeWidth="2.5" opacity="0.75" />
    {/* Front X Folder Tile with soft shadow */}
    <rect x="10" y="24" width="46" height="48" rx="8" fill="#107C41" stroke="#23A566" strokeWidth="2" />
    <path d="M22 36L44 60M44 36L22 60" stroke="#FFFFFF" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// 3. Official TallyPrime Brand Logo
const TallyPrimeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="96" height="96" rx="18" fill="#0F172A" />
    {/* Tally iconic colored geometric mark */}
    <rect x="18" y="18" width="26" height="26" rx="6" fill="#008080" />
    <rect x="52" y="18" width="26" height="26" rx="6" fill="#F59E0B" />
    <rect x="18" y="50" width="26" height="18" rx="4" fill="#3B82F6" />
    <rect x="52" y="50" width="26" height="18" rx="4" fill="#10B981" />
    <text x="48" y="84" fill="#F8FAFC" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="system-ui" letterSpacing="1">TALLY</text>
  </svg>
);

// 4. Official Certified Diploma / Degree Gold Seal Logo
const DiplomaDegreeIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <circle cx="48" cy="42" r="32" fill="#2563EB" />
    <circle cx="48" cy="42" r="26" fill="#1D4ED8" stroke="#FBBF24" strokeWidth="2" strokeDasharray="4 2" />
    {/* Star in Center */}
    <path d="M48 25L51.5 35.5H62.5L53.5 42L57 52.5L48 46L39 52.5L42.5 42L33.5 35.5H44.5L48 25Z" fill="#FBBF24" />
    {/* Ribbons */}
    <path d="M36 62L28 88L42 82L48 88L44 64" fill="#DC2626" />
    <path d="M60 62L68 88L54 82L48 88L52 64" fill="#EF4444" />
  </svg>
);

// 5. Official Adobe Photoshop (Ps) Logo
const PhotoshopDesignIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="96" height="96" rx="18" fill="#001E36" stroke="#31A8FF" strokeWidth="2.5" />
    <text x="48" y="66" fill="#31A8FF" fontSize="48" fontWeight="800" textAnchor="middle" fontFamily="system-ui">Ps</text>
  </svg>
);

// 6. Official Python Dual-Snake Logo
const PythonIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="pyBlue" x1="15.8" y1="15.5" x2="71.7" y2="71.4" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pyYellow" x1="61.5" y1="61.7" x2="114.7" y2="114.9" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>
    {/* Top Snake (Blue) */}
    <path
      d="M63.5 8C35.2 8 36.9 20.3 36.9 20.3L37 33.1H64.4V37H25.8C7.6 37 8 54.8 8 54.8C8 72.8 24.3 72.4 24.3 72.4H33.9V58.7C33.9 44.8 45.4 45.1 45.4 45.1H72.8C84.4 45.1 84.1 33.7 84.1 33.7V19.7C84.1 19.7 85.3 8 63.5 8ZM48.6 17.5C52.2 17.5 55.1 20.4 55.1 24C55.1 27.6 52.2 30.5 48.6 30.5C45 30.5 42.1 27.6 42.1 24C42.1 20.4 45 17.5 48.6 17.5Z"
      fill="url(#pyBlue)"
    />
    {/* Bottom Snake (Yellow) */}
    <path
      d="M64.5 120C92.8 120 91.1 107.7 91.1 107.7L91 94.9H63.6V91H102.2C120.4 91 120 73.2 120 73.2C120 55.2 103.7 55.6 103.7 55.6H94.1V69.3C94.1 83.2 82.6 82.9 82.6 82.9H55.2C43.6 82.9 43.9 94.3 43.9 94.3V108.3C43.9 108.3 42.7 120 64.5 120ZM79.4 110.5C75.8 110.5 72.9 107.6 72.9 104C72.9 100.4 75.8 97.5 79.4 97.5C83 97.5 85.9 100.4 85.9 104C85.9 107.6 83 110.5 79.4 110.5Z"
      fill="url(#pyYellow)"
    />
  </svg>
);

// ==========================================
// 3D / VECTOR HEADER GRAPHIC ILLUSTRATIONS
// ==========================================

const OfficeSuiteIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-36 h-28 object-contain">
    <defs>
      <filter id="shadow-office" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#F59E0B" floodOpacity="0.25" />
      </filter>
      <linearGradient id="laptopGrad" x1="20" y1="50" x2="110" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F8FAFC" />
        <stop offset="1" stopColor="#CBD5E1" />
      </linearGradient>
      <linearGradient id="screenGrad" x1="30" y1="35" x2="95" y2="80" gradientUnits="userSpaceOnUse">
        <stop stopColor="#38BDF8" />
        <stop offset="1" stopColor="#1E40AF" />
      </linearGradient>
      <linearGradient id="wordGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1D4ED8" />
      </linearGradient>
      <linearGradient id="excelGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="pptGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FB923C" />
        <stop offset="1" stopColor="#EA580C" />
      </linearGradient>
      <linearGradient id="accessGrad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse">
        <stop stopColor="#E11D48" />
        <stop offset="1" stopColor="#9F1239" />
      </linearGradient>
    </defs>

    {/* Laptop Base & Screen */}
    <g filter="url(#shadow-office)">
      <polygon points="40,32 108,22 114,72 44,82" fill="url(#screenGrad)" />
      <polygon points="43,35 105,26 110,70 47,79" fill="#0F172A" opacity="0.85" />
      <line x1="52" y1="46" x2="80" y2="42" stroke="#93C5FD" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="52" y1="54" x2="95" y2="48" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <line x1="52" y1="62" x2="75" y2="58" stroke="#E2E8F0" strokeWidth="2" strokeLinecap="round" opacity="0.7" />

      <polygon points="22,86 112,74 136,96 42,106" fill="url(#laptopGrad)" />
      <polygon points="32,87 106,77 125,95 48,103" fill="#94A3B8" opacity="0.5" />
      <polygon points="70,95 95,91 100,99 74,102" fill="#E2E8F0" />
    </g>

    {/* Floating App Icons in 3D */}
    <g transform="translate(18, 16) rotate(-8)">
      <rect width="22" height="22" rx="5" fill="url(#wordGrad)" className="drop-shadow-md" />
      <text x="11" y="15.5" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">W</text>
    </g>

    <g transform="translate(112, 18) rotate(10)">
      <rect width="24" height="24" rx="5" fill="url(#excelGrad)" className="drop-shadow-md" />
      <text x="12" y="16.5" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">X</text>
    </g>

    <g transform="translate(18, 54) rotate(-5)">
      <rect width="21" height="21" rx="5" fill="url(#pptGrad)" className="drop-shadow-md" />
      <text x="10.5" y="15" fill="white" fontSize="11" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">P</text>
    </g>

    <g transform="translate(118, 58) rotate(6)">
      <rect width="20" height="20" rx="4" fill="url(#accessGrad)" className="drop-shadow-md" />
      <text x="10" y="14" fill="white" fontSize="10" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">A</text>
    </g>

    <circle cx="138" cy="14" r="2.5" fill="#F59E0B" />
    <circle cx="20" cy="8" r="1.5" fill="#FBBF24" />
    <path d="M142 38L144 42L148 44L144 46L142 50L140 46L136 44L140 42Z" fill="#F59E0B" opacity="0.8" />
  </svg>
);

const AdvancedExcelIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-36 h-28 object-contain">
    <defs>
      <filter id="shadow-excel" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#10B981" floodOpacity="0.25" />
      </filter>
      <linearGradient id="mainXGrad" x1="0" y1="0" x2="34" y2="34" gradientUnits="userSpaceOnUse">
        <stop stopColor="#10B981" />
        <stop offset="1" stopColor="#047857" />
      </linearGradient>
      <linearGradient id="sheetHeader" x1="0" y1="0" x2="80" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#059669" />
        <stop offset="1" stopColor="#10B981" />
      </linearGradient>
    </defs>

    {/* Main Spreadsheet Card */}
    <g filter="url(#shadow-excel)">
      <rect x="36" y="22" width="94" height="72" rx="8" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1.5" />
      <rect x="36" y="22" width="94" height="16" rx="8" fill="url(#sheetHeader)" />
      <rect x="36" y="32" width="94" height="6" fill="url(#sheetHeader)" />

      <circle cx="45" cy="30" r="2" fill="#FEE2E2" />
      <circle cx="51" cy="30" r="2" fill="#FEF3C7" />
      <circle cx="57" cy="30" r="2" fill="#DCFCE7" />

      <line x1="36" y1="48" x2="130" y2="48" stroke="#F1F5F9" strokeWidth="1.5" />
      <line x1="36" y1="62" x2="130" y2="62" stroke="#F1F5F9" strokeWidth="1.5" />
      <line x1="36" y1="76" x2="130" y2="76" stroke="#F1F5F9" strokeWidth="1.5" />

      <line x1="68" y1="38" x2="68" y2="94" stroke="#F1F5F9" strokeWidth="1.5" />
      <line x1="100" y1="38" x2="100" y2="94" stroke="#F1F5F9" strokeWidth="1.5" />

      <path d="M42 56L56 52L72 58L88 44L104 50L122 42" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* 3D Excel [X] Badge */}
    <g transform="translate(16, 12)" className="drop-shadow-lg">
      <rect width="32" height="32" rx="7" fill="url(#mainXGrad)" />
      <text x="16" y="22" fill="white" fontSize="17" fontWeight="900" textAnchor="middle" fontFamily="system-ui">X</text>
    </g>

    {/* Rising 3D Bar Chart */}
    <g transform="translate(100, 48)" className="drop-shadow-md">
      <rect x="0" y="14" width="8" height="24" rx="2" fill="#38BDF8" />
      <rect x="12" y="6" width="8" height="32" rx="2" fill="#0284C7" />
      <rect x="24" y="0" width="8" height="38" rx="2" fill="#059669" />
    </g>

    {/* Donut Chart Accent */}
    <g transform="translate(86, 68)">
      <circle cx="14" cy="14" r="12" fill="none" stroke="#E2E8F0" strokeWidth="5" />
      <circle cx="14" cy="14" r="12" fill="none" stroke="#059669" strokeWidth="5" strokeDasharray="40 80" strokeDashoffset="0" />
      <circle cx="14" cy="14" r="12" fill="none" stroke="#38BDF8" strokeWidth="5" strokeDasharray="25 80" strokeDashoffset="-40" />
    </g>

    <circle cx="145" cy="20" r="2.5" fill="#10B981" />
  </svg>
);

const AccountingTallyIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-36 h-28 object-contain">
    <defs>
      <filter id="shadow-tally" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#6366F1" floodOpacity="0.25" />
      </filter>
      <linearGradient id="monitorGrad" x1="45" y1="18" x2="135" y2="82" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E293B" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
      <linearGradient id="calcGrad" x1="0" y1="0" x2="28" y2="40" gradientUnits="userSpaceOnUse">
        <stop stopColor="#334155" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="goldCoin" x1="0" y1="0" x2="18" y2="18" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDE047" />
        <stop offset="1" stopColor="#EAB308" />
      </linearGradient>
    </defs>

    {/* Monitor in Background */}
    <g filter="url(#shadow-tally)">
      <rect x="52" y="16" width="86" height="60" rx="6" fill="url(#monitorGrad)" stroke="#64748B" strokeWidth="1.5" />
      <rect x="56" y="20" width="78" height="48" rx="3" fill="#FFFFFF" />

      <rect x="56" y="20" width="78" height="12" fill="#F8FAFC" />
      <rect x="86" y="23" width="7" height="7" fill="#0284C7" rx="1.5" />
      <rect x="94" y="23" width="7" height="7" fill="#EAB308" rx="1.5" />
      <text x="95" y="38" fill="#1E293B" fontSize="6.5" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">TallyPrime</text>

      <rect x="62" y="44" width="28" height="18" rx="2" fill="#F1F5F9" />
      <line x1="66" y1="56" x2="72" y2="48" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="72" y1="48" x2="78" y2="52" stroke="#4F46E5" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="78" y1="52" x2="84" y2="46" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" />

      <line x1="96" y1="46" x2="126" y2="46" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      <line x1="96" y1="52" x2="120" y2="52" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />
      <line x1="96" y1="58" x2="114" y2="58" stroke="#CBD5E1" strokeWidth="2" strokeLinecap="round" />

      <path d="M88 76L85 86H105L102 76H88Z" fill="#94A3B8" />
      <rect x="78" y="86" width="34" height="4" rx="2" fill="#64748B" />
    </g>

    {/* Calculator */}
    <g transform="translate(18, 40)" className="drop-shadow-lg">
      <rect width="28" height="44" rx="5" fill="url(#calcGrad)" stroke="#475569" strokeWidth="1" />
      <rect x="3" y="4" width="22" height="9" rx="2" fill="#A7F3D0" />
      <text x="21" y="11" fill="#065F46" fontSize="6.5" fontWeight="bold" textAnchor="end" fontFamily="monospace">8,450</text>
      <circle cx="7" cy="18" r="2" fill="#64748B" />
      <circle cx="14" cy="18" r="2" fill="#64748B" />
      <circle cx="21" cy="18" r="2" fill="#6366F1" />
      <circle cx="7" cy="24" r="2" fill="#64748B" />
      <circle cx="14" cy="24" r="2" fill="#64748B" />
      <circle cx="21" cy="24" r="2" fill="#64748B" />
      <circle cx="7" cy="30" r="2" fill="#64748B" />
      <circle cx="14" cy="30" r="2" fill="#64748B" />
      <circle cx="21" cy="30" r="2" fill="#10B981" />
      <rect x="5" y="34" width="18" height="5" rx="2" fill="#6366F1" />
    </g>

    {/* GST Bill Receipt */}
    <g transform="translate(108, 48) rotate(4)" className="drop-shadow-md">
      <rect width="34" height="44" rx="3" fill="#FFFFFF" stroke="#E2E8F0" strokeWidth="1" />
      <rect x="4" y="5" width="16" height="4" fill="#6366F1" rx="1" />
      <text x="28" y="9" fill="#1E293B" fontSize="5" fontWeight="bold" textAnchor="end" fontFamily="system-ui">GST</text>
      <line x1="4" y1="14" x2="30" y2="14" stroke="#E2E8F0" strokeWidth="1" />
      <line x1="4" y1="20" x2="22" y2="20" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="4" y1="26" x2="26" y2="26" stroke="#94A3B8" strokeWidth="1.5" />
      <line x1="4" y1="32" x2="18" y2="32" stroke="#94A3B8" strokeWidth="1.5" />
      <rect x="4" y="36" width="26" height="4" fill="#DCFCE7" rx="1" />
    </g>

    {/* Golden Coins */}
    <g transform="translate(126, 78)">
      <ellipse cx="10" cy="14" rx="9" ry="4" fill="#CA8A04" />
      <ellipse cx="10" cy="12" rx="9" ry="4" fill="url(#goldCoin)" />
      <ellipse cx="10" cy="8" rx="9" ry="4" fill="#CA8A04" />
      <ellipse cx="10" cy="6" rx="9" ry="4" fill="url(#goldCoin)" />
      <ellipse cx="10" cy="2" rx="9" ry="4" fill="#CA8A04" />
      <ellipse cx="10" cy="0" rx="9" ry="4" fill="url(#goldCoin)" />
      <text x="10" y="2" fill="#854D0E" fontSize="5" fontWeight="bold" textAnchor="middle">₹</text>
    </g>
  </svg>
);

const DiplomaIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-36 h-28 object-contain">
    <defs>
      <filter id="shadow-diploma" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#2563EB" floodOpacity="0.25" />
      </filter>
      <linearGradient id="certGrad" x1="20" y1="15" x2="100" y2="85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#F8FAFC" />
      </linearGradient>
      <linearGradient id="capGrad" x1="0" y1="0" x2="40" y2="30" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1E293B" />
        <stop offset="1" stopColor="#0F172A" />
      </linearGradient>
    </defs>

    <g filter="url(#shadow-diploma)">
      <rect x="26" y="22" width="102" height="74" rx="6" fill="url(#certGrad)" stroke="#CBD5E1" strokeWidth="1.5" />
      <rect x="31" y="27" width="92" height="64" rx="4" fill="none" stroke="#2563EB" strokeWidth="1" strokeDasharray="4 2" />
      <rect x="52" y="34" width="50" height="5" rx="2.5" fill="#2563EB" />
      <line x1="42" y1="46" x2="112" y2="46" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
      <line x1="48" y1="53" x2="106" y2="53" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="56" y1="60" x2="98" y2="60" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" />

      {/* Gold Seal with Ribbons */}
      <circle cx="50" cy="74" r="8" fill="#F59E0B" />
      <circle cx="50" cy="74" r="6" fill="#FDE047" />
      <path d="M48 71L50 69L52 71L55 72L53 74L54 77L50 75L46 77L47 74L45 72Z" fill="#D97706" />
      <path d="M46 80L43 89L48 87L51 90L49 81" fill="#DC2626" />
      <path d="M54 80L57 89L52 87L49 90L51 81" fill="#EF4444" />
    </g>

    {/* Graduation Cap */}
    <g transform="translate(94, 8) rotate(12)" className="drop-shadow-lg">
      <polygon points="26,0 52,10 26,20 0,10" fill="url(#capGrad)" />
      <polygon points="12,15 40,15 36,25 16,25" fill="#1E293B" />
      <circle cx="26" cy="10" r="2.5" fill="#F59E0B" />
      <path d="M26 10C24 16 18 20 16 28" stroke="#F59E0B" strokeWidth="1.5" fill="none" />
      <rect x="14" y="27" width="4" height="6" fill="#F59E0B" rx="1" />
    </g>

    <circle cx="138" cy="48" r="2.5" fill="#2563EB" />
  </svg>
);

const GraphicDesignIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-36 h-28 object-contain">
    <defs>
      <filter id="shadow-dtp" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#E11D48" floodOpacity="0.25" />
      </filter>
      <linearGradient id="canvasGrad" x1="30" y1="20" x2="110" y2="85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFF1F2" />
        <stop offset="1" stopColor="#FFE4E6" />
      </linearGradient>
      <linearGradient id="psGrad" x1="0" y1="0" x2="26" y2="26" gradientUnits="userSpaceOnUse">
        <stop stopColor="#001E36" />
        <stop offset="1" stopColor="#000A14" />
      </linearGradient>
    </defs>

    <g filter="url(#shadow-dtp)">
      <rect x="36" y="20" width="94" height="74" rx="8" fill="#FFFFFF" stroke="#FECDD3" strokeWidth="1.5" />
      <rect x="42" y="26" width="82" height="62" rx="5" fill="url(#canvasGrad)" />

      <circle cx="94" cy="42" r="9" fill="#FB923C" />
      <polygon points="46,78 72,48 92,78" fill="#E11D48" opacity="0.8" />
      <polygon points="76,78 98,54 118,78" fill="#BE123C" opacity="0.9" />

      <path d="M48 42 C 65 24, 80 62, 102 36" stroke="#4F46E5" strokeWidth="2" strokeDasharray="3 3" fill="none" />
      <circle cx="48" cy="42" r="3" fill="#4F46E5" />
      <circle cx="102" cy="36" r="3" fill="#4F46E5" />
    </g>

    {/* Photoshop [Ps] Icon */}
    <g transform="translate(16, 16) rotate(-8)" className="drop-shadow-md">
      <rect width="26" height="26" rx="6" fill="url(#psGrad)" stroke="#38BDF8" strokeWidth="1" />
      <text x="13" y="18" fill="#38BDF8" fontSize="13" fontWeight="bold" textAnchor="middle" fontFamily="system-ui">Ps</text>
    </g>

    {/* Color Swatches */}
    <g transform="translate(112, 60)" className="drop-shadow-md">
      <rect width="34" height="14" rx="7" fill="#FFFFFF" stroke="#E2E8F0" />
      <circle cx="7" cy="7" r="4.5" fill="#E11D48" />
      <circle cx="17" cy="7" r="4.5" fill="#F59E0B" />
      <circle cx="27" cy="7" r="4.5" fill="#3B82F6" />
    </g>

    <path d="M140 22L142 26L146 28L142 30L140 34L138 30L134 28L138 26Z" fill="#E11D48" />
  </svg>
);

// Programming & Python Illustration featuring the official 3D Python snake logo & Code editor
const PythonProgrammingIllustration = () => (
  <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-32 sm:w-36 h-28 object-contain">
    <defs>
      <filter id="shadow-pycode" x="-10%" y="-10%" width="130%" height="130%" filterUnits="userSpaceOnUse">
        <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0D9488" floodOpacity="0.25" />
      </filter>
      <linearGradient id="codeTermGrad2" x1="30" y1="18" x2="120" y2="85" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0F172A" />
        <stop offset="1" stopColor="#1E293B" />
      </linearGradient>
      <linearGradient id="pyBlue3D" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#387EB8" />
        <stop offset="1" stopColor="#25537B" />
      </linearGradient>
      <linearGradient id="pyYellow3D" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFE873" />
        <stop offset="1" stopColor="#FFD43B" />
      </linearGradient>
    </defs>

    {/* Terminal / Code Window */}
    <g filter="url(#shadow-pycode)">
      <rect x="34" y="20" width="98" height="74" rx="8" fill="url(#codeTermGrad2)" stroke="#334155" strokeWidth="1.5" />

      {/* Title Bar */}
      <rect x="34" y="20" width="98" height="15" rx="8" fill="#1E293B" />
      <rect x="34" y="27" width="98" height="8" fill="#1E293B" />
      <circle cx="44" cy="28" r="2.5" fill="#EF4444" />
      <circle cx="51" cy="28" r="2.5" fill="#F59E0B" />
      <circle cx="58" cy="28" r="2.5" fill="#10B981" />
      <text x="84" y="30.5" fill="#94A3B8" fontSize="6.5" fontFamily="monospace">main.py</text>

      {/* Python Code Syntax */}
      <text x="42" y="46" fill="#F43F5E" fontSize="7" fontFamily="monospace">def <tspan fill="#38BDF8">solve</tspan><tspan fill="#F8FAFC">():</tspan></text>
      <text x="46" y="56" fill="#FBBF24" fontSize="7" fontFamily="monospace">  data = <tspan fill="#34D399">[1, 2, 3]</tspan></text>
      <text x="46" y="66" fill="#38BDF8" fontSize="7" fontFamily="monospace">  print(<tspan fill="#FFE873">"Success!"</tspan>)</text>
      <text x="42" y="76" fill="#A855F7" fontSize="7" fontFamily="monospace">solve()</text>

      <rect x="80" y="70" width="2" height="7" fill="#38BDF8" />
    </g>

    {/* 3D Python Logo Badge (Floating Top Right) */}
    <g transform="translate(106, 8)" className="drop-shadow-xl">
      <circle cx="20" cy="20" r="19" fill="#0F172A" stroke="#387EB8" strokeWidth="1.5" />
      {/* Python Dual Snake Mini Inset */}
      <g transform="translate(6, 6) scale(0.22)">
        <path d="M63.5 8C35.2 8 36.9 20.3 36.9 20.3L37 33.1H64.4V37H25.8C7.6 37 8 54.8 8 54.8C8 72.8 24.3 72.4 24.3 72.4H33.9V58.7C33.9 44.8 45.4 45.1 45.4 45.1H72.8C84.4 45.1 84.1 33.7 84.1 33.7V19.7C84.1 19.7 85.3 8 63.5 8ZM48.6 17.5C52.2 17.5 55.1 20.4 55.1 24C55.1 27.6 52.2 30.5 48.6 30.5C45 30.5 42.1 27.6 42.1 24C42.1 20.4 45 17.5 48.6 17.5Z" fill="url(#pyBlue3D)" />
        <path d="M64.5 120C92.8 120 91.1 107.7 91.1 107.7L91 94.9H63.6V91H102.2C120.4 91 120 73.2 120 73.2C120 55.2 103.7 55.6 103.7 55.6H94.1V69.3C94.1 83.2 82.6 82.9 82.6 82.9H55.2C43.6 82.9 43.9 94.3 43.9 94.3V108.3C43.9 108.3 42.7 120 64.5 120ZM79.4 110.5C75.8 110.5 72.9 107.6 72.9 104C72.9 100.4 75.8 97.5 79.4 97.5C83 97.5 85.9 100.4 85.9 104C85.9 107.6 83 110.5 79.4 110.5Z" fill="url(#pyYellow3D)" />
      </g>
    </g>

    {/* Floating Language Tag on Left */}
    <g transform="translate(14, 20) rotate(-8)" className="drop-shadow-md">
      <rect width="28" height="22" rx="5" fill="#0D9488" />
      <text x="14" y="15" fill="#FFFFFF" fontSize="9.5" fontWeight="bold" textAnchor="middle" fontFamily="monospace">&lt;/&gt;</text>
    </g>

    <circle cx="140" cy="56" r="2.5" fill="#14B8A6" />
    <circle cx="24" cy="74" r="1.5" fill="#FBBF24" />
  </svg>
);

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const courseList = [
    {
      id: 'basic-office',
      category: 'office',
      titlePrefix: 'Basic Computer & ',
      titleHighlight: 'MS Office Suite',
      badge: 'Essential & Popular',
      duration: '3 - 6 Months',
      description: 'Master computer operations, typing proficiency, official document formatting, spreadsheets, and internet applications from scratch.',
      highlights: [
        'Keyboard typing & mouse coordination',
        'Official letters, formatting & printing',
        'Email communication & online portals',
        'File management, USB drives & backup'
      ],
      icon: MicrosoftOfficeIcon,
      illustration: OfficeSuiteIllustration,
      theme: {
        glowBlob: 'from-amber-100/80 via-amber-50/50 to-transparent',
        badgeBg: 'bg-[#FFF3BF]',
        badgeText: 'text-[#854D0E]',
        badgeBorder: 'border-[#F6C945]/40',
        iconBg: 'bg-[#FFF3BF]',
        titleHighlightColor: 'text-[#B45309]',
        checkBg: 'bg-[#FEF3C7]',
        checkColor: 'text-[#B45309]',
        clockBg: 'bg-[#FEF3C7]',
        clockColor: 'text-[#B45309]',
        buttonBg: 'bg-[#F6C945] hover:bg-[#EAB308]',
        buttonText: 'text-[#172554]',
        buttonBorder: 'border-[#F6C945]',
        hoverShadow: 'hover:shadow-amber-500/10 hover:border-amber-200'
      }
    },
    {
      id: 'advanced-excel',
      category: 'office',
      titlePrefix: 'Advanced Excel & ',
      titleHighlight: 'MIS Reporting',
      badge: 'Skill for Better Career',
      duration: '2 - 3 Months',
      description: 'Comprehensive practical training in complex formulas, automated calculations, data analysis, and professional MIS reporting.',
      highlights: [
        'Advanced formulas & nested functions',
        'Data sorting, filtering & chart creation',
        'Hands-on practice with live business datasets',
        'Productivity shortcuts & workbook automation'
      ],
      icon: MicrosoftExcelIcon,
      illustration: AdvancedExcelIllustration,
      theme: {
        glowBlob: 'from-emerald-100/80 via-emerald-50/50 to-transparent',
        badgeBg: 'bg-[#DCFCE7]',
        badgeText: 'text-[#166534]',
        badgeBorder: 'border-emerald-200',
        iconBg: 'bg-[#DCFCE7]',
        titleHighlightColor: 'text-[#059669]',
        checkBg: 'bg-[#DCFCE7]',
        checkColor: 'text-[#15803D]',
        clockBg: 'bg-[#DCFCE7]',
        clockColor: 'text-[#15803D]',
        buttonBg: 'bg-[#059669] hover:bg-[#047857]',
        buttonText: 'text-white',
        buttonBorder: 'border-[#059669]',
        hoverShadow: 'hover:shadow-emerald-500/10 hover:border-emerald-200'
      }
    },
    {
      id: 'tally-gst',
      category: 'accounting',
      titlePrefix: 'Financial Accounting ',
      titleHighlight: '(TallyPrime & GST)',
      badge: 'High Employment Demand',
      duration: '3 - 4 Months',
      description: 'Practical business accounting, GST invoicing, ledger management, inventory control, and financial reporting.',
      highlights: [
        'Core accounting fundamentals made easy',
        'Sales & Purchase voucher entry on live software',
        'GST calculation, tax invoices & e-way bills',
        'Bank reconciliation & balance sheet preparation'
      ],
      icon: TallyPrimeIcon,
      illustration: AccountingTallyIllustration,
      theme: {
        glowBlob: 'from-indigo-100/80 via-purple-50/50 to-transparent',
        badgeBg: 'bg-[#EDE9FE]',
        badgeText: 'text-[#5B21B6]',
        badgeBorder: 'border-indigo-200',
        iconBg: 'bg-[#EDE9FE]',
        titleHighlightColor: 'text-[#4F46E5]',
        checkBg: 'bg-[#EDE9FE]',
        checkColor: 'text-[#6D28D9]',
        clockBg: 'bg-[#EDE9FE]',
        clockColor: 'text-[#6D28D9]',
        buttonBg: 'bg-[#4F46E5] hover:bg-[#4338CA]',
        buttonText: 'text-white',
        buttonBorder: 'border-[#4F46E5]',
        hoverShadow: 'hover:shadow-indigo-500/10 hover:border-indigo-200'
      }
    },
    {
      id: 'dita-adca',
      category: 'diploma',
      titlePrefix: 'DITA / ADCA ',
      titleHighlight: '(Diploma in Comp Applications)',
      badge: 'Government & Job Certified',
      duration: '6 - 12 Months',
      description: 'A complete, career-focused diploma covering basic to advanced office tools, computerized accounting, DTP, and web fundamentals.',
      highlights: [
        'All essential computer software in one curriculum',
        'Valid certification for government & corporate jobs',
        'Regular module tests & project assignments',
        'Career counseling & practical interview prep'
      ],
      icon: DiplomaDegreeIcon,
      illustration: DiplomaIllustration,
      theme: {
        glowBlob: 'from-blue-100/80 via-sky-50/50 to-transparent',
        badgeBg: 'bg-[#DBEAFE]',
        badgeText: 'text-[#1E40AF]',
        badgeBorder: 'border-blue-200',
        iconBg: 'bg-[#DBEAFE]',
        titleHighlightColor: 'text-[#2563EB]',
        checkBg: 'bg-[#DBEAFE]',
        checkColor: 'text-[#1D4ED8]',
        clockBg: 'bg-[#DBEAFE]',
        clockColor: 'text-[#1D4ED8]',
        buttonBg: 'bg-[#2563EB] hover:bg-[#1D4ED8]',
        buttonText: 'text-white',
        buttonBorder: 'border-[#2563EB]',
        hoverShadow: 'hover:shadow-blue-500/10 hover:border-blue-200'
      }
    },
    {
      id: 'graphic-dtp',
      category: 'design',
      titlePrefix: 'Graphic Design & ',
      titleHighlight: 'Desktop Publishing (DTP)',
      badge: 'Creative & Practical',
      duration: '3 - 4 Months',
      description: 'Hands-on training in photo editing, banner creation, regional typing, visiting cards, and print layout preparation.',
      highlights: [
        'Passport photo creation & background removal',
        'Flex banners, posters & invitation card layouts',
        'Fast and accurate typing speed development',
        'Printing color profiles & margin guidelines'
      ],
      icon: PhotoshopDesignIcon,
      illustration: GraphicDesignIllustration,
      theme: {
        glowBlob: 'from-rose-100/80 via-pink-50/50 to-transparent',
        badgeBg: 'bg-[#FFE4E6]',
        badgeText: 'text-[#9F1239]',
        badgeBorder: 'border-rose-200',
        iconBg: 'bg-[#FFE4E6]',
        titleHighlightColor: 'text-[#E11D48]',
        checkBg: 'bg-[#FFE4E6]',
        checkColor: 'text-[#BE123C]',
        clockBg: 'bg-[#FFE4E6]',
        clockColor: 'text-[#BE123C]',
        buttonBg: 'bg-[#E11D48] hover:bg-[#BE123C]',
        buttonText: 'text-white',
        buttonBorder: 'border-[#E11D48]',
        hoverShadow: 'hover:shadow-rose-500/10 hover:border-rose-200'
      }
    },
    {
      id: 'coding-basics',
      category: 'diploma',
      titlePrefix: 'Python Programming & ',
      titleHighlight: 'Web Basics',
      badge: 'Logic & Code Building',
      duration: '3 - 6 Months',
      description: 'Build strong logical reasoning and programming fundamentals with Python. Covers academic computer syllabus, algorithms, and website development.',
      highlights: [
        'Python syntax, variables, lists & data logic',
        'Loops, functions & problem-solving practice',
        'School/College practical exam syllabus preparation',
        'Creating interactive projects & web pages'
      ],
      icon: PythonIcon,
      illustration: PythonProgrammingIllustration,
      image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1280px-Python-logo-notext.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
      theme: {
        glowBlob: 'from-teal-100/80 via-cyan-50/50 to-transparent',
        badgeBg: 'bg-[#CCFBF1]',
        badgeText: 'text-[#115E59]',
        badgeBorder: 'border-teal-200',
        iconBg: 'bg-[#CCFBF1]',
        titleHighlightColor: 'text-[#0D9488]',
        checkBg: 'bg-[#CCFBF1]',
        checkColor: 'text-[#0F766E]',
        clockBg: 'bg-[#CCFBF1]',
        clockColor: 'text-[#0F766E]',
        buttonBg: 'bg-[#0D9488] hover:bg-[#0F766E]',
        buttonText: 'text-white',
        buttonBorder: 'border-[#0D9488]',
        hoverShadow: 'hover:shadow-teal-500/10 hover:border-teal-200'
      }
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } as const },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.04 } },
  };

  return (
    <section id="courses" className="py-20 bg-[#F8FAFC]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3BF] border border-[#F6C945]/60 text-[#172554] text-xs font-bold mb-3 shadow-xs">
            <Sparkles size={13} className="text-[#B45309]" />
            <span>Practical &amp; Career-Oriented Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172554] tracking-tight leading-tight">
            Choose the <span className="highlight-yellow">Right Course</span> for Your Goals
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-relaxed">
            Every course includes 100% hands-on practical lab training, a dedicated computer for each student, and step-by-step guidance from experienced faculty.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {courseList.map((course) => {
            const IconComponent = course.icon;
            const IllustrationComponent = course.illustration;
            const fullTitle = `${course.titlePrefix}${course.titleHighlight}`;

            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                className={`relative bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.05)] hover:shadow-[0_16px_32px_-6px_rgba(15,23,42,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-7 group ${course.theme.hoverShadow}`}
              >
                {/* Organic Glowing Corner Blob Background */}
                <div
                  className={`absolute -top-6 -right-6 w-52 h-44 rounded-bl-[90px] bg-gradient-to-bl ${course.theme.glowBlob} pointer-events-none transition-transform duration-500 group-hover:scale-105`}
                />

                {/* Top Section */}
                <div className="relative z-10">
                  {/* Top Bar: Icon + Pill Badge (Left) & 3D Illustration (Right) */}
                  <div className="flex items-start justify-between min-h-[96px] mb-4">
                    {/* Left: Actual Brand Icon & Pill Badge */}
                    <div className="flex items-center gap-2">
                      <div className={`w-10 h-10 rounded-xl ${course.theme.iconBg} flex items-center justify-center shrink-0 shadow-2xs p-1.5`}>
                        {course.image ? <img src={course.image} className='w-6 h-6 object-contain' alt="" /> : <IconComponent className="w-6 h-6 object-contain" />}
                      </div>
                      <span className={`text-[11.5px] font-bold px-3 py-1 rounded-full ${course.theme.badgeBg} ${course.theme.badgeText} border ${course.theme.badgeBorder} whitespace-nowrap`}>
                        {course.badge}
                      </span>
                    </div>

                    {/* Right: Themed 3D/Vector Illustration */}
                    <div className="absolute top-0 -right-7 mr-1 mt-1 pointer-events-none group-hover:translate-y-[-2px] transition-transform duration-300">
                      <IllustrationComponent />
                    </div>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-[21px] font-extrabold text-[#0F172A] leading-snug tracking-tight mb-2.5">
                    <span>{course.titlePrefix}</span>
                    <span className={course.theme.titleHighlightColor}>{course.titleHighlight}</span>
                  </h3>

                  {/* Course Description */}
                  <p className="text-[13.5px] text-[#475569] leading-relaxed mb-6 font-normal min-h-[60px]">
                    {course.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-2.5 mb-7">
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-[13px] text-[#334155]">
                        <div className={`w-[18px] h-[18px] rounded-full ${course.theme.checkBg} ${course.theme.checkColor} flex items-center justify-center shrink-0 mt-0.5 shadow-2xs`}>
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Bar: Duration & Action Button */}
                <div className="relative z-10 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  {/* Duration Info */}
                  <div className="flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full ${course.theme.clockBg} ${course.theme.clockColor} flex items-center justify-center shrink-0`}>
                      <Clock size={16} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10.5px] font-bold text-[#94A3B8] uppercase tracking-wider leading-none mb-1">Duration</span>
                      <span className="text-[13.5px] font-extrabold text-[#1E293B] leading-none whitespace-nowrap">{course.duration}</span>
                    </div>
                  </div>

                  {/* Course Details Button */}
                  <button
                    onClick={() => onSelectCourse(fullTitle)}
                    className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-[13px] transition-all duration-200 flex items-center gap-1.5 cursor-pointer shadow-xs hover:shadow-md active:scale-95 group/btn shrink-0 ${course.theme.buttonBg} ${course.theme.buttonText}`}
                  >
                    <span>Course Details</span>
                    <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Helper Note */}
        <div className="mt-14 text-center p-6 bg-[#FFFCF5] rounded-2xl border border-[#F6C945]/30 max-w-2xl mx-auto shadow-2xs">
          <p className="text-sm text-[#1E293B] font-medium leading-relaxed">
            💡 <strong>Not sure which course fits your career goal?</strong> Visit our centre to speak with Sir directly and choose the best course for your requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
