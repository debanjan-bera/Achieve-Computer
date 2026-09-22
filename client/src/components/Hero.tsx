import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  const scrollToCourses = () => {
    const el = document.querySelector('#courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative md:h-[92vh] bg-yellow-50/30 pb-16 md:pb-24 pt-12 md:pt-22 overflow-hidden bg-[#fafafa]">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
           style={{
             backgroundImage: 'linear-gradient(to right, #c2b9b9ff 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      />
      
      <div className="max-w-[1240px] h-full mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-start text-left space-y-7"
          >
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[#F6C945] bg-white shadow-sm">
              <span className="text-[#F6C945] text-lg">✨</span>
              <span className="text-[#172554] font-bold text-[0.7rem] md:text-xs  font-bengali">হাতে-কলমে শেখা · আত্মবিশ্বাসে এগিয়ে যাওয়া</span>
            </div>

            {/* Headline */}
            <h1 className="text-[35px] sm:text-5xl lg:text-[50px] text-[#172554] font-bold tracking-tight leading-[1.3] font-bengali">
              কম্পিউটার শেখা
              <br />
              হোক <span className="text-[#0052FF] highlight-yellow">সহজ</span>, সঠিক ও
              <br />
              আত্মবিশ্বাসের সঙ্গে।
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-[17px] text-[#475569] max-w-xl leading-relaxed font-medium font-bengali">
              Achieve Computer Centre-এ Word, PowerPoint, Excel, Advanced Excel, IT File, Photoshop, CorelDRAW সহ বিভিন্ন Computer Skill শিখুন।
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="w-full md:w-auto px-8 py-3.5 bg-[#F6C945] hover:bg-[#eab308] text-[#0F172A] font-bold text-base rounded-[6px] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <span>Admission Now</span>
                <ArrowRight size={20} />
              </button>
              
              <button
                onClick={scrollToCourses}
                className="w-full md:w-auto px-8 py-3.5 bg-transparent hover:bg-[#172554]/5 text-[#172554] border-[2px] border-[#172554] font-bold text-base rounded-[6px] transition-all flex items-center justify-center cursor-pointer shadow-sm font-bengali"
              >
                <span>আমাদের কোর্সসমূহ</span>
              </button>
            </div>


          </motion.div>

          {/* Right Column: Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-12 mx-4 md:mx-0 lg:mt-0"
          >
            {/* Visual Container */}
            <div className="relative w-full max-w-[500px]">
              
              {/* Yellow Background Box with Blue Border (Shadow) */}
              <div className="absolute -top-4 -left-5 w-[100%] h-[102%] bg-[#F6C945] rounded-[4px] border-[3px] border-[#172554] " />

              {/* Main Image Container */}
              <div className="relative rounded-[4px] overflow-hidden bg-[#FFFFFF] border-[3px] border-[#172554] aspect-[4/3] ">
                <img
                  src="/images/hero-student.jpg"
                  alt="Students learning computers at Achieve Computer Centre"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge 1: Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="absolute -top-5 -right-6 sm:-right-10 bg-[#172554] px-4 py-2 rounded-full shadow-lg z-10"
              >
                <span className="text-white text-xs sm:text-sm font-bold tracking-wide">Small Batch - Better Care</span>
              </motion.div>

              {/* Floating Badge 2: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-8 left-5 sm:-left-2 bg-[#FFFFFF] p-3 rounded-lg shadow-lg border border-[#E2E8F0] flex items-center gap-3 z-10"
              >
                <div className="w-10 h-10 rounded-md bg-[#F6C945] text-[#172554] flex items-center justify-center font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="14" x="2" y="3" rx="2" />
                    <line x1="8" x2="16" y1="21" y2="21" />
                    <line x1="12" x2="12" y1="17" y2="21" />
                    <path d="m9 10 2 2 4-4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-[#172554] leading-tight">100% Practical Training</div>
                  <div className="text-[11px] text-[#64748B] font-medium mt-0.5 font-bengali">প্রতিটি ক্লাসে নিজে কাজ করুন</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
