import { motion } from 'framer-motion';
import { HeartHandshake, Award, Sparkles } from 'lucide-react';

interface AboutSirProps {
  onOpenContact: () => void;
}

export const AboutSir: React.FC<AboutSirProps> = ({ onOpenContact }) => {
  return (
    <section id="about-sir" className="py-20 md:py-28">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Teacher Photo — slides in from left */}
          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-[380px]">
              {/* Decorative yellow offset frame */}
              <div className="absolute top-4 left-4 w-full h-full rounded-3xl border-4 border-[#F6C945] -z-10" />

              {/* Photo card */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="/images/about-sir.jpg"
                  alt="Your Sir - Your Mentor"
                  className="w-full object-cover"
                  style={{ aspectRatio: '3/4', objectPosition: 'top center' }}
                />
                {/* Bottom label badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#172554] py-3 px-4 flex items-center justify-center">
                  <span className="text-white text-sm font-bold tracking-wide">
                    আপনার Sir - আপনার Mentor
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — slides in from right */}
          <motion.div
            className="lg:col-span-7 flex flex-col items-start space-y-6"
            initial={{ opacity: 0, x: 48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.65, delay: 0.1, ease: 'easeOut' }}
          >
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3BF] border border-[#F6C945]/60 text-[#172554] text-xs font-bold">
              <Sparkles size={13} />
              <span>Trusted &amp; Caring Education</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172554] tracking-tight leading-[1.3]">
              Personalized Attention for <span className="highlight-yellow">Every Student</span>
            </h2>

            <p className="text-base sm:text-lg text-[#1E293B] leading-[1.75]">
              In large commercial institutions, students often hesitate to ask doubts amidst the crowd. At Achieve Computer Centre, Sir dedicates personal time to understand each student's pace and ensures no one is left behind.
            </p>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full pt-2">
              
              <motion.div
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-2xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.25, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#172554]/5 text-[#172554] flex items-center justify-center font-bold mb-3">
                  <HeartHandshake size={20} />
                </div>
                <h4 className="text-base font-bold text-[#172554] mb-1">Friendly &amp; Supportive Learning</h4>
                <p className="text-xs text-[#64748B] leading-[1.65]">
                  Learn without anxiety. Mistakes are guided patiently until every concept becomes second nature.
                </p>
              </motion.div>

              <motion.div
                className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E2E8F0] shadow-2xs"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#15803D]/10 text-[#15803D] flex items-center justify-center font-bold mb-3">
                  <Award size={20} />
                </div>
                <h4 className="text-base font-bold text-[#172554] mb-1">Real-World Practical Syllabus</h4>
                <p className="text-xs text-[#64748B] leading-[1.65]">
                  Beyond textbook theory—focusing strictly on what companies and modern offices actually demand.
                </p>
              </motion.div>

            </div>

            {/* Button */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 bg-[#172554] hover:bg-[#0F172A] text-white font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <span>Visit Centre &amp; Speak with Sir</span>
                <span>→</span>
              </button>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
