import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Award, Check } from 'lucide-react';
import { ACHIEVEMENTS_CONTENT, ImpactMetric } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const AnimatedMetricCard: React.FC<{ metric: ImpactMetric; index: number }> = ({
  metric,
  index,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(
    prefersReducedMotion ? metric.numericValue : 0
  );

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      setDisplayValue(metric.numericValue);
      return;
    }

    let animationFrameId: number;
    const duration = 1500;
    const startTime = performance.now();

    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out for smooth executive counter feel
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.round(eased * metric.numericValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setDisplayValue(metric.numericValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, metric.numericValue, prefersReducedMotion]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.48, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-7 sm:p-8 bg-white border border-[#002C71]/12 rounded-2xl hover:border-[#00A99D] transition-colors"
    >
      <div className="flex items-baseline gap-0.5 mb-3">
        <span className="text-4xl sm:text-[2.75rem] font-extrabold tracking-[-0.035em] text-[#002C71] tabular-nums leading-none">
          {displayValue.toLocaleString('en-US')}
        </span>
        <span className="text-2xl sm:text-3xl font-bold text-[#00A99D] leading-none">
          {metric.suffix}
        </span>
      </div>
      <div className="h-[2px] w-8 bg-[#002C71]/15 group-hover:w-14 group-hover:bg-[#00A99D] transition-all duration-300 mb-3" />
      <p className="text-sm font-semibold text-[#5E5858] leading-snug">{metric.label}</p>
    </motion.div>
  );
};

export const AchievementsSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="py-20 sm:py-24 lg:py-28 bg-white border-b border-[#002C71]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div id="achievements-heading">
          <SectionHeader
            number="03"
            eyebrow="ACHIEVEMENTS"
            title="Professional Impact, Contributions & Recognition"
            subtitle="Measurable outcomes across academic ecosystems, intellectual property, research publications, startup incubation, and institutional leadership."
          />
        </div>

        {/* Professional Impact — 8 Animated Metrics */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#002C71]">
              Professional Impact
            </h3>
            <span className="text-xs font-semibold tracking-[0.16em] uppercase text-[#00A99D]">
              Selected Ecosystem Metrics
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {ACHIEVEMENTS_CONTENT.metrics.map((metric, idx) => (
              <AnimatedMetricCard key={metric.id} metric={metric} index={idx} />
            ))}
          </div>
        </div>

        {/* Key Contributions */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-[#002C71]/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00A99D] block mb-2">
                Ecosystem Outcomes
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71] mb-3">
                Key Contributions
              </h3>
              <p className="text-sm sm:text-[15px] leading-[1.72] text-[#5E5858]">
                Sustained leadership initiatives strengthening research laboratories, intellectual
                property creation, academic publishing, startup funding readiness, and board-level
                governance.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {ACHIEVEMENTS_CONTENT.keyContributions.map((contribution, idx) => (
                <motion.div
                  key={idx}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.44, delay: idx * 0.04 }}
                  className="p-5 sm:p-6 rounded-2xl bg-[#002C71]/[0.02] border border-[#002C71]/10 flex items-start gap-4"
                >
                  <span className="w-7 h-7 rounded-full bg-[#00A99D]/12 border border-[#00A99D]/30 text-[#00A99D] flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                  </span>
                  <p className="text-sm sm:text-[15px] leading-[1.68] text-[#002C71] font-medium">
                    {contribution}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Awards & Recognition — Vertical Honours Timeline */}
        <div className="mt-20 sm:mt-24 pt-16 border-t border-[#002C71]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00A99D] block mb-2">
                Honours &amp; Distinctions
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                Awards &amp; Recognition
              </h3>
            </div>
            <p className="text-sm text-[#5E5858] max-w-md">
              National and international recognition across scientific research, entrepreneurship,
              executive resilience, and academic excellence.
            </p>
          </div>

          <div className="relative pl-6 sm:pl-10 border-l border-[#002C71]/18 space-y-5">
            {ACHIEVEMENTS_CONTENT.awards.map((award, idx) => (
              <motion.div
                key={award.id}
                initial={prefersReducedMotion ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="group relative"
              >
                {/* Timeline Node */}
                <span
                  className="absolute -left-[31px] sm:-left-[47px] top-6 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#002C71] group-hover:border-[#00A99D] group-hover:bg-[#00A99D] transition-colors"
                  aria-hidden="true"
                />

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-[#002C71]/12 group-hover:border-[#00A99D] transition-all duration-250 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start sm:items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#002C71]/[0.04] group-hover:bg-[#00A99D]/10 border border-[#002C71]/10 flex items-center justify-center text-[#00A99D] shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#002C71] tracking-[-0.015em] leading-snug">
                        {award.title}
                      </h4>
                      <p className="mt-1 text-sm text-[#5E5858]">{award.organization}</p>
                    </div>
                  </div>

                  <span className="self-start sm:self-center inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#002C71] group-hover:bg-[#00A99D] text-white text-xs font-bold tracking-[0.1em] tabular-nums transition-colors shrink-0">
                    {award.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

