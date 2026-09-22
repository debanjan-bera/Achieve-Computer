import React from 'react';
import { motion } from 'framer-motion';
import {
  FileSpreadsheet,
  BookOpen,
  Calculator,
  Palette,
  Code2,
  Layers,
  CheckCircle,
  Clock,
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface CoursesProps {
  onSelectCourse: (courseName: string) => void;
}

export const Courses: React.FC<CoursesProps> = ({ onSelectCourse }) => {
  const courseList = [
    {
      id: 'basic-office',
      category: 'office',
      title: 'Basic Computer & MS Office Suite',
      badge: 'Essential & Popular',
      duration: '3 - 6 Months',
      timing: '2-3 Days / Week',
      target: 'School & College Students, Beginners',
      description: 'Master computer operations, typing proficiency, official document formatting, spreadsheets, and internet applications from scratch.',
      software: ['Windows 11', 'MS Word', 'MS Excel', 'PowerPoint', 'Internet & Email', 'Typing Skills'],
      highlights: [
        'Keyboard typing & mouse coordination',
        'Official letters, formatting & printing',
        'Email communication & online portals',
        'File management, USB drives & backup'
      ],
      icon: BookOpen,
    },
    {
      id: 'advanced-excel',
      category: 'office',
      title: 'Advanced Excel & MIS Reporting',
      badge: 'Job-Ready Skill',
      duration: '2 - 3 Months',
      timing: 'Live Projects Included',
      target: 'Job Seekers & Office Professionals',
      description: 'Comprehensive practical training in complex formulas, automated calculations, data analysis, and professional MIS reporting.',
      software: ['MS Excel 365', 'VLOOKUP / XLOOKUP', 'Pivot Tables', 'Data Validation', 'MIS Dashboard', 'Conditional Formatting'],
      highlights: [
        'Advanced formulas & nested functions',
        'Data sorting, filtering & chart creation',
        'Hands-on practice with live business datasets',
        'Productivity shortcuts & workbook automation'
      ],
      icon: FileSpreadsheet,
    },
    {
      id: 'tally-gst',
      category: 'accounting',
      title: 'Financial Accounting (TallyPrime & GST)',
      badge: 'High Employment Demand',
      duration: '3 - 4 Months',
      timing: 'Real Voucher Entry Practice',
      target: 'Commerce Students & Aspiring Accountants',
      description: 'Practical business accounting, GST invoicing, ledger management, inventory control, and financial reporting.',
      software: ['TallyPrime', 'GST Invoicing', 'E-Way Bill', 'Inventory Management', 'Payroll', 'Balance Sheet'],
      highlights: [
        'Core accounting fundamentals made easy',
        'Sales & Purchase voucher entry on live software',
        'GST calculation, tax invoices & e-way bills',
        'Bank reconciliation & balance sheet preparation'
      ],
      icon: Calculator,
    },
    {
      id: 'dita-adca',
      category: 'diploma',
      title: 'DITA / ADCA (Diploma in Computer Applications)',
      badge: 'Govt. & Private Job Recognized',
      duration: '6 - 12 Months',
      timing: 'Exams & Projects Included',
      target: '10th / 12th Pass Students & Graduates',
      description: 'A complete, career-focused diploma covering basic to advanced office tools, computerized accounting, DTP, and web fundamentals.',
      software: ['Windows OS', 'MS Office Full Suite', 'TallyPrime', 'DTP Photoshop', 'HTML Basics', 'Typing Skills'],
      highlights: [
        'All essential computer software in one curriculum',
        'Valid certification for government & corporate jobs',
        'Regular module tests & project assignments',
        'Career counseling & practical interview prep'
      ],
      icon: Layers,
    },
    {
      id: 'graphic-dtp',
      category: 'design',
      title: 'Graphic Design & Desktop Publishing (DTP)',
      badge: 'Printing & Creative',
      duration: '3 - 4 Months',
      timing: 'Design Portfolio Included',
      target: 'Creative Aspirants & Print Media Freelancers',
      description: 'Hands-on training in photo editing, banner creation, regional typing, visiting cards, and print layout preparation.',
      software: ['Adobe Photoshop', 'PageMaker / CorelDraw', 'Font Typing Tools', 'Print Layouts'],
      highlights: [
        'Passport photo creation & background removal',
        'Flex banners, posters & invitation card layouts',
        'Fast and accurate typing speed development',
        'Printing color profiles & margin guidelines'
      ],
      icon: Palette,
    },
    {
      id: 'coding-basics',
      category: 'diploma',
      title: 'Programming Foundations & Web Basics',
      badge: 'Curriculum & IT Prep',
      duration: '3 - 6 Months',
      timing: 'Live Coding Practice',
      target: 'School/College IT Students & Beginners',
      description: 'Build strong logical reasoning and coding fundamentals. Covers academic computer syllabus and basic website development.',
      software: ['C Language', 'C++', 'Python Basics', 'HTML & CSS', 'Logic Building'],
      highlights: [
        'Variables, loops, arrays & functions explained clearly',
        'School/College practical exam syllabus preparation',
        'Creating personal web pages from scratch',
        'Effective code debugging & error solving'
      ],
      icon: Code2,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } as const },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
  };

  return (
    <section id="courses" className="py-16  bg-[#FFFFFF] ">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <motion.div
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF3BF] border border-[#F6C945]/60 text-[#172554] text-xs font-bold mb-3">
            <Sparkles size={13} />
            <span>Practical &amp; Career-Oriented Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#172554] tracking-tight">
            Choose the <span className="highlight-yellow">Right Course</span> for Your Goals
          </h2>
          <p className="text-base sm:text-lg text-[#64748B] mt-4 leading-[1.7]">
            Every course includes 100% hands-on practical lab training, a dedicated computer for each student, and step-by-step guidance from experienced faculty.
          </p>
        </motion.div>
        {/* Courses Grid — staggered */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {courseList.map((course) => {
            const IconComponent = course.icon;
            return (
              <motion.div
                key={course.id}
                variants={cardVariants}
                className="flex flex-col justify-between bg-white rounded-2xl border border-[#E2E8F0] hover:border-[#172554]/30 hover:shadow-lg transition-all duration-300 p-6 group"
              >
                <div>
                  {/* Top Row: Icon & Badge */}
                  <div className="flex items-start justify-between gap-2 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E2E8F0] shadow-xs flex items-center justify-center text-[#172554] group-hover:bg-[#F6C945] transition-colors">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#FFF3BF] text-[#172554] border border-[#F6C945]/40">
                      {course.badge}
                    </span>
                  </div>

                  {/* Course Title */}
                  <h3 className="text-xl font-bold text-[#172554] leading-snug group-hover:text-[#172554] transition-colors mb-3">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#1E293B] leading-[1.65] mb-4">
                    {course.description}
                  </p>

                  {/* Software Tags */}
                  {/* <div className="mb-4">
                    <div className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider mb-2">
                      Software Covered:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {course.software.map((soft, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 bg-white border border-[#E2E8F0] rounded-lg text-[#1E293B] font-medium"
                        >
                          {soft}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Highlights Bullet points */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-[#E2E8F0]">
                    {course.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#1E293B]">
                        <CheckCircle size={14} className="text-[#15803D] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className='flex flex-row'>
                  <div className=" flex items-center gap-1.5 text-xs">
                    <Clock size={14} className="text-[#15803D]" />
                    <span className='w-20 '>{course.duration}</span>
                  </div>
                  <button
                    onClick={() => onSelectCourse(course.title)}
                    className="w-full py-2.5 px-4 bg-white hover:bg-[#F6C945] text-[#172554] hover:text-[#0F172A] font-bold text-sm rounded-xl border border-[#E2E8F0] hover:border-[#F6C945] transition-all flex items-center justify-center gap-2 group/btn cursor-pointer shadow-2xs"
                  >
                    <span>Course Details </span>
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Helper Note */}
        <div className="mt-12 text-center p-6 bg-[#FFFCF5] rounded-2xl border border-[#E2E8F0] max-w-2xl mx-auto">
          <p className="text-sm text-[#1E293B] font-medium">
            💡 <strong>Not sure which course fits your career goal?</strong> Visit our centre to speak with Sir directly and choose the best course for your requirements.
          </p>
        </div>

      </div>
    </section>
  );
};
