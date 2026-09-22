import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, Users, Star } from 'lucide-react';

// ── Counting hook ─────────────────────────────────────────────────────────────
function useCounter(end: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);
  return count;
}

// ── Stat definitions ─────────────────────────────────────────────────────────
const statItems = [
  {
    icon: BookOpen,
    numericEnd: 7,
    suffix: '+',
    label: 'Courses Available',
    sublabel: 'From basics to advanced',
    color: '#3B82F6',
    bg: '#EFF6FF',
  },
  {
    icon: Microscope,
    numericEnd: 100,
    suffix: '%',
    label: 'Practical Classes',
    sublabel: 'Hands-on, not just theory',
    color: '#15803D',
    bg: '#F0FDF4',
  },
  {
    icon: Users,
    numericEnd: 1,
    suffix: ':1',
    label: 'Personal Guidance',
    sublabel: 'One teacher, one student focus',
    color: '#7C3AED',
    bg: '#F5F3FF',
    isRatio: true,
  },
  {
    icon: Star,
    numericEnd: 80,
    suffix: '+',
    label: 'Years of Experience',
    sublabel: 'Trusted teaching since decades',
    color: '#D97706',
    bg: '#FFFBEB',
  },
];

// ── Animation variants ────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// ── StatCard ─────────────────────────────────────────────────────────────────
interface StatCardProps {
  icon: React.ElementType;
  numericEnd: number;
  suffix: string;
  label: string;
  sublabel: string;
  color: string;
  bg: string;
  isRatio?: boolean;
  started: boolean;
  delay?: number;
}

function StatCard({ icon: Icon, numericEnd, suffix, label, sublabel, color, bg, isRatio, started, delay = 0 }: StatCardProps) {
  const [localStart, setLocalStart] = useState(false);
  useEffect(() => {
    if (!started) return;
    const t = setTimeout(() => setLocalStart(true), delay);
    return () => clearTimeout(t);
  }, [started, delay]);

  const count = useCounter(numericEnd, 1600, localStart);

  const displayValue = isRatio ? `1:${count}` : `${count}${suffix}`;

  return (
    <motion.div
      variants={itemVariants}
      className="relative flex flex-col items-center text-center px-6 py-7 group"
    >
      {/* Icon bubble */}
      <div
        className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ background: bg }}
      >
        <Icon size={22} style={{ color }} />
      </div>

      {/* Number */}
      <h3
        className="text-3xl md:text-4xl font-extrabold mb-1 tabular-nums leading-none"
        style={{ color }}
      >
        {displayValue}
      </h3>

      {/* Label */}
      <p className="text-sm font-bold text-[#1E293B] mt-1">{label}</p>

      {/* Sublabel */}
      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{sublabel}</p>
    </motion.div>
  );
}

// ── Stats section ─────────────────────────────────────────────────────────────
export function Stats() {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-gray-50 py-6 md:py-10 shadow-sm" ref={ref}>
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Heading */}
        <p className="text-center text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
          A few facts about us in numbers
        </p>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-100"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {statItems.map((stat, idx) => (
            <StatCard
              key={idx}
              {...stat}
              started={started}
              delay={idx * 130}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
