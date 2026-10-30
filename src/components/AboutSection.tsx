import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Cpu, Microscope, Rocket, ShieldCheck, Compass, Target, CheckCircle2 } from 'lucide-react';
import { ABOUT_CONTENT, ExpertiseArea } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const iconMap: Record<ExpertiseArea['iconName'], React.FC<{ className?: string }>> = {
  cpu: Cpu,
  microscope: Microscope,
  rocket: Rocket,
  shieldCheck: ShieldCheck,
};

export const AboutSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-24 lg:py-28 bg-white border-b border-[#002C71]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div id="about-heading">
          <SectionHeader
            number="01"
            eyebrow="ABOUT"
            title={ABOUT_CONTENT.fullName}
            subtitle="Connecting Artificial Intelligence, academic research, entrepreneurship, and institutional excellence to create enduring real-world impact."
          />
        </div>

        {/* Executive Narrative + Vision & Mission Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left 7 Columns: First-Person Introduction */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 space-y-5"
          >
            {ABOUT_CONTENT.introduction.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'text-lg sm:text-xl font-medium leading-[1.7] text-[#002C71]'
                    : idx === ABOUT_CONTENT.introduction.length - 1
                      ? 'text-base sm:text-lg font-medium leading-[1.7] text-[#002C71] pl-5 border-l-2 border-[#00A99D] py-1'
                      : 'text-base sm:text-[1.05rem] leading-[1.8] text-[#5E5858]'
                }
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Right 5 Columns: My Vision & My Mission */}
          <div className="lg:col-span-5 grid grid-cols-1 gap-5">
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.52, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 rounded-2xl bg-[#002C71]/[0.025] border border-[#002C71]/12 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#002C71]" aria-hidden="true" />
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-white border border-[#002C71]/12 flex items-center justify-center text-[#00A99D]">
                  <Compass className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-bold tracking-[-0.015em] text-[#002C71]">
                  {ABOUT_CONTENT.vision.title}
                </h3>
              </div>
              <p className="text-sm sm:text-[15px] leading-[1.72] text-[#5E5858]">
                {ABOUT_CONTENT.vision.statement}
              </p>
            </motion.div>

            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.52, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 sm:p-7 rounded-2xl bg-[#00A99D]/[0.04] border border-[#00A99D]/25 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00A99D]" aria-hidden="true" />
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-white border border-[#00A99D]/25 flex items-center justify-center text-[#002C71]">
                  <Target className="w-4 h-4" />
                </span>
                <h3 className="text-lg font-bold tracking-[-0.015em] text-[#002C71]">
                  {ABOUT_CONTENT.mission.title}
                </h3>
              </div>
              <p className="text-sm sm:text-[15px] leading-[1.72] text-[#5E5858]">
                {ABOUT_CONTENT.mission.statement}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Areas of Expertise — 2x2 Interactive Capability Grid */}
        <div className="mt-20 sm:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00A99D] block mb-2">
                Core Capabilities
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                Areas of Expertise
              </h3>
            </div>
            <p className="text-sm text-[#5E5858] max-w-md">
              Strategic pillars across AI technology, scholarly innovation, startup incubation, and
              institutional growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ABOUT_CONTENT.areasOfExpertise.map((area, index) => {
              const IconComponent = iconMap[area.iconName];
              return (
                <motion.article
                  key={area.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{
                    duration: 0.48,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative p-7 sm:p-8 rounded-2xl bg-white border border-[#002C71]/12 hover:border-[#00A99D] transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className="absolute top-0 left-7 right-7 h-[2px] bg-[#00A99D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                    aria-hidden="true"
                  />
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-11 h-11 rounded-xl bg-[#002C71]/[0.04] group-hover:bg-[#00A99D]/12 border border-[#002C71]/10 group-hover:border-[#00A99D]/30 flex items-center justify-center text-[#002C71] group-hover:text-[#00A99D] transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold tracking-[0.18em] text-[#00A99D] tabular-nums">
                      {area.index}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold tracking-[-0.02em] text-[#002C71] mb-3 group-hover:text-[#002C71]">
                    {area.title}
                  </h4>
                  <p className="text-sm sm:text-[15px] leading-[1.75] text-[#5E5858]">
                    {area.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* What I Do — 8 Executive Practice Areas */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-[#002C71]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00A99D] block mb-2">
                Executive Focus
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71] mb-3">
                What I Do
              </h3>
              <p className="text-sm sm:text-[15px] leading-[1.7] text-[#5E5858]">
                Translating strategic vision into structured programmes across technology, academia,
                intellectual property, and entrepreneurship.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {ABOUT_CONTENT.whatIDo.map((item, idx) => (
                <motion.div
                  key={item}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  className="group flex items-center gap-3.5 p-4 rounded-xl bg-[#002C71]/[0.02] hover:bg-white border border-[#002C71]/10 hover:border-[#00A99D]/50 transition-colors"
                >
                  <span className="text-xs font-bold text-[#00A99D] tabular-nums shrink-0 w-6">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="text-sm font-semibold text-[#002C71] leading-snug flex-1">
                    {item}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#00A99D] opacity-60 group-hover:opacity-100 transition-opacity shrink-0" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Closing Brand Statement */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="mt-16 sm:mt-20 p-8 sm:p-10 rounded-2xl bg-[#002C71] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-10 rounded-full bg-[#00A99D] shrink-0" aria-hidden="true" />
            <p className="text-xl sm:text-2xl lg:text-[1.65rem] font-bold tracking-[-0.02em] text-white leading-snug">
              {ABOUT_CONTENT.closingStatement}
            </p>
          </div>
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#00A99D] shrink-0">
            Guiding Philosophy
          </span>
        </motion.div>
      </div>
    </section>
  );
};

