import React from 'react';
import { motion } from 'framer-motion';
import { Presentation, Laptop, UserCheck2, Award, Sparkles } from 'lucide-react';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const LearningProcess: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Concept Discussion',
      subtitle: 'Theory & Clarity',
      desc: 'Each topic begins with a clear, visual explanation on screen and whiteboard with real-life examples.',
      icon: Presentation,
      color: 'bg-[#172554] text-white',
    },
    {
      num: '2',
      title: 'Live Lab Practice',
      subtitle: 'Hands-On Exercises',
      desc: 'Students work on their individual workstations, executing commands and building live project files.',
      icon: Laptop,
      color: 'bg-[#F6C945] text-[#0F172A]',
    },
    {
      num: '3',
      title: '1-on-1 Review & Feedback',
      subtitle: 'Instant Doubt Clearing',
      desc: 'Sir directly reviews each screen, identifying errors and guiding step-by-step corrections on the spot.',
      icon: UserCheck2,
      color: 'bg-[#15803D] text-white',
    },
    {
      num: '4',
      title: 'Testing & Certification',
      subtitle: 'Recognized Credential',
      desc: 'Comprehensive module assessments followed by verified course certificates for jobs and academics.',
      icon: Award,
      color: 'bg-[#172554] text-[#F6C945]',
    },
  ];

  return (
    <section id="learning-process" className="py-20 md:py-28 bg-[#FFFCF5]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3BF] border border-[#F6C945]/60 text-[#172554] text-xs font-bold mb-3">
            <Sparkles size={13} />
            <span>Structured Learning Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172554] tracking-tight">
            How We Build Your <span className="highlight-yellow">Practical Proficiency</span>
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-[1.7]">
            A proven 4-step learning system designed to transform beginners into confident, skilled computer users.
          </p>
        </motion.div>

        {/* Process Flow Grid — staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="relative flex flex-col p-6 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 rounded-xl ${step.color} flex items-center justify-center font-bold shadow-xs`}>
                    <Icon size={22} />
                  </div>
                  <span className="text-2xl font-extrabold text-[#172554]/20 font-['Outfit',sans-serif]">
                    STEP {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#172554] mb-0.5">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#64748B] mb-3">
                  {step.subtitle}
                </div>

                <p className="text-sm text-[#1E293B] leading-[1.7]">
                  {step.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};
