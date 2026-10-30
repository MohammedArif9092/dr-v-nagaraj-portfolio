import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SectionHeaderProps {
  number: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  eyebrow,
  title,
  subtitle,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="mb-14 md:mb-18"
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="inline-flex items-center justify-center px-2.5 py-1 text-xs font-semibold tracking-[0.16em] uppercase text-[#00A99D] bg-[#00A99D]/8 border border-[#00A99D]/25 rounded-full tabular-nums">
          {number}
        </span>
        <span className="h-px w-8 bg-[#00A99D]" aria-hidden="true" />
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#002C71]">
          {eyebrow}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end pb-8 border-b border-[#002C71]/12">
        <div className="lg:col-span-7">
          <h2 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-[-0.028em] leading-[1.14] text-[#002C71]">
            {title}
          </h2>
        </div>
        {subtitle && (
          <div className="lg:col-span-5">
            <p className="text-base leading-relaxed text-[#5E5858]">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

