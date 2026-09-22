import React from 'react';
import { motion } from 'framer-motion';
import { 
  Monitor, 
  Languages, 
  CalendarClock, 
  Users, 
  WalletCards, 
  FileCheck2,
  Sparkles,
  Check
} from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const headerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: Monitor,
      title: '1 Student = 1 Dedicated PC',
      description: 'Zero screen sharing. Every student gets their own individual PC, keyboard, and mouse for the entire class duration.',
      tag: 'Individual Workstation'
    },
    {
      icon: Languages,
      title: 'Clear & Simple Teaching',
      description: 'Complex technical concepts explained with real-world examples in plain, straightforward language.',
      tag: 'Easy To Understand'
    },
    {
      icon: CalendarClock,
      title: 'Flexible Batch Timings',
      description: 'Convenient morning, afternoon, and evening slots designed to fit school, college, and work schedules.',
      tag: 'Flexible Schedule'
    },
    {
      icon: Users,
      title: 'Extra Care for Beginners',
      description: 'Special attention and extra practice time for students touching a computer or practicing typing for the first time.',
      tag: 'Beginner Friendly'
    },
    {
      icon: WalletCards,
      title: 'Affordable & Transparent Fees',
      description: 'Fair and affordable monthly fee structure designed for middle-class families with zero hidden costs.',
      tag: 'Value For Money'
    },
    {
      icon: FileCheck2,
      title: 'Valid Course Certification',
      description: 'Rigorous practical testing followed by recognized certificates valid for job applications and career growth.',
      tag: 'Verified Certificate'
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-[#FFFCF5] border-y border-[#E2E8F0]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3BF] border border-[#F6C945]/60 text-[#172554] text-xs font-bold mb-3">
            <Sparkles size={13} />
            <span>Why Students Choose Us</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172554] tracking-tight">
            Why Choose <span className="z-10 highlight-yellow">Achieve Computer Centre</span>?
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-[1.7]">
            We prioritize real student skills, deep practical understanding, and long-term career confidence above all else.
          </p>
        </motion.div>

        {/* 6 Grid Cards — staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="flex flex-col justify-between p-7 rounded-2xl bg-[#ffffff] border border-[#E2E8F0] hover:border-[#172554]/30 hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] text-[#172554] group-hover:bg-[#F6C945] flex items-center justify-center transition-colors shadow-2xs">
                      <Icon size={24} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-white text-[#15803D] border border-[#E2E8F0] flex items-center gap-1">
                      <Check size={12} />
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#172554] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#1E293B] leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
