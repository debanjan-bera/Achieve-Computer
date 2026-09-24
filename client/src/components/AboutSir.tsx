import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Monitor,
  Sparkles,
  ArrowRight,
  BookOpen,
  UserCheck,
  TrendingUp,
  GraduationCap
} from 'lucide-react';

interface AboutSirProps {
  onOpenContact: () => void;
}

export const AboutSir: React.FC<AboutSirProps> = ({ onOpenContact }) => {
  return (
    <section id="about-sir" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Classroom & Lab Photo Card */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[420px]">
              {/* Outer decorative yellow offset border frame */}
              <div className="absolute -bottom-3 -left-3 w-full h-full rounded-[32px] border-[3.5px] border-[#F6C945] -z-10" />

              {/* Photo Container */}
              <div className="relative rounded-[28px] overflow-hidden shadow-xl border-4 border-white bg-slate-100">
                <img
                  src="/images/about-sir.jpg"
                  alt="Students learning computer at Achieve Computer Centre"
                  className="w-full object-cover aspect-[4/4.5] sm:aspect-[4/4.6]"
                />

                {/* Floating Bottom Left Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 border border-slate-100 shadow-lg flex items-center gap-3.5"
                >
                  <div className="w-11 h-11 rounded-xl bg-[#FFF3BF] text-[#854D0E] flex items-center justify-center shrink-0">
                    <GraduationCap size={22} className="text-[#854D0E]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] leading-tight">Achieve Computer Centre</h4>
                    <p className="text-[12px] text-[#64748B] font-medium leading-tight mt-0.5">Learn • Practice • Grow</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bengali Content & Features */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            
            {/* Top Row: Pill Badge & Handwritten Note */}
            <div className="w-full flex items-center justify-between gap-4 mb-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FFF3BF] border border-[#F6C945]/60 text-[#172554] text-xs font-bold shadow-2xs">
                <Sparkles size={13} className="text-[#B45309]" />
                <span>Practical &amp; Personal Learning</span>
              </div>

              {/* Handwritten Note in Blue with Gold Sparkle & Underline */}
              <div className="handwritten-note text-right select-none hidden sm:inline-block">
                শেখা হোক আজ, আরও<br />
                উজ্জ্বল আগামী
              </div>
            </div>

            {/* Main Bengali Headline with Decorative Accent */}
            <div className="relative mb-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight leading-[1.25]">
                কম্পিউটার শেখা হোক <br />
                <span className="text-[#2563EB] inline-flex items-center gap-2">
                  সহজ ও বাস্তবভিত্তিক
                  {/* Decorative golden rays */}
                  <svg className="w-8 h-8 text-[#F59E0B] inline-block -mt-1" viewBox="0 0 32 32" fill="none">
                    <path d="M4 16H8M8 8L11 11M16 4V8M24 8L21 11M28 16H24" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-[15px] sm:text-base text-[#475569] leading-relaxed mb-8">
              <strong>Achieve Computer Centre</strong>-এ কম্পিউটার শেখানো হয় সহজভাবে, ধাপে ধাপে। Basic Computer ও MS Office থেকে Advanced Excel, TallyPrime, GST এবং অন্যান্য job-ready skills—প্রতিটি বিষয় শেখানো হয় practical কাজের মাধ্যমে।
            </p>

            {/* Two Modern Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
              
              {/* Card 1: Environment */}
              <div className="p-5 rounded-2xl bg-[#FFFDF7] border border-[#FEF3C7] shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#FFF4C2] text-[#854D0E] flex items-center justify-center font-bold mb-3.5">
                  <Users size={22} />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1.5">মন দিয়ে শেখার পরিবেশ</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  ছোট ব্যাচে শেখার সুযোগ, যেখানে প্রতিটি ছাত্র নিজের প্রশ্ন করতে পারে এবং প্রয়োজন অনুযায়ী guidance পায়।
                </p>
              </div>

              {/* Card 2: Practical Learning */}
              <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-2xs hover:shadow-md transition-shadow">
                <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] text-[#1D4ED8] flex items-center justify-center font-bold mb-3.5">
                  <Monitor size={22} />
                </div>
                <h4 className="text-base font-bold text-[#0F172A] mb-1.5">শুধু বই নয়, Practical Learning</h4>
                <p className="text-xs text-[#64748B] leading-relaxed">
                  Office-এর বাস্তব কাজ, Excel-এর data, accounting এবং everyday computer tasks-এর মাধ্যমে শেখানো হয় প্রয়োজনীয় skills।
                </p>
              </div>

            </div>

            {/* Bottom Action Bar: Button & Micro Trust Badges */}
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-sm rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-3 cursor-pointer group active:scale-95 shrink-0"
              >
                <span>Centre সম্পর্কে জানুন</span>
                <div className="w-6 h-6 rounded-full bg-[#F6C945] text-[#0F172A] flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={13} strokeWidth={2.5} />
                </div>
              </button>

              {/* Micro Badges */}
              <div className="flex items-center gap-4 text-xs font-semibold text-[#64748B] flex-wrap">
                <div className="flex items-center gap-1.5">
                  <BookOpen size={15} className="text-[#0F172A]" />
                  <span>Practical Learning</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <UserCheck size={15} className="text-[#0F172A]" />
                  <span>Personal Guidance</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp size={15} className="text-[#0F172A]" />
                  <span>Career Focused</span>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
