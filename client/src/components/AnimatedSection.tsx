import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  /** slide direction: 'up' (default) | 'left' | 'right' | 'none' */
  direction?: 'up' | 'left' | 'right' | 'none';
  /** delay in seconds */
  delay?: number;
  /** use stagger for child elements */
  stagger?: boolean;
}

const getInitial = (direction: AnimatedSectionProps['direction']) => {
  switch (direction) {
    case 'left':  return { opacity: 0, x: -40 };
    case 'right': return { opacity: 0, x: 40 };
    case 'none':  return { opacity: 0 };
    default:      return { opacity: 0, y: 36 };
  }
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
};

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  stagger = false,
}) => {
  if (stagger) {
    return (
      <motion.div
        className={className}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {children}
      </motion.div>
    );
  }

  const initial = getInitial(direction);
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

/** Wrap individual child cards/items with this inside a stagger parent */
export const AnimatedChild: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <motion.div className={className} variants={childVariants}>
    {children}
  </motion.div>
);
