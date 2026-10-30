import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, ArrowDown, Maximize2, AlertCircle } from 'lucide-react';
import { HERO_CONTENT } from '../data/portfolioData';
import { LightboxModal, LightboxSlide } from './LightboxModal';

export const HeroSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [portraitSrc, setPortraitSrc] = useState<string>(HERO_CONTENT.portrait.localSrc);
  const [triedFallback, setTriedFallback] = useState(false);
  const [portraitFailed, setPortraitFailed] = useState(false);
  const [portraitLightboxOpen, setPortraitLightboxOpen] = useState(false);

  const handlePortraitError = () => {
    if (!triedFallback) {
      setTriedFallback(true);
      setPortraitSrc(HERO_CONTENT.portrait.officialDriveUrl);
    } else {
      setPortraitFailed(true);
    }
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = 84;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const portraitSlide: LightboxSlide[] = [
    {
      id: 'official-ceo-portrait',
      imageUrl: portraitSrc,
      title: 'Dr. V. Nagaraj, M.E., M.B.A., Ph.D., PDF (USA)',
      category: 'Official Executive Portrait',
      subtitle: 'Founder & Managing Director — Trueline Research Private Limited',
      location: 'Tamil Nadu, India',
      description:
        'Founder, AI Innovation Leader, Researcher, and Academic Entrepreneur working at the intersection of Artificial Intelligence, research, technology, and entrepreneurship.',
    },
  ];

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative overflow-hidden bg-white pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24 border-b border-[#002C71]/10"
    >
      {/* Subtle Architectural Editorial Background Elements (Strictly Navy & Teal Tints) */}
      <div
        className="pointer-events-none absolute inset-0 editorial-grid-bg opacity-65"
        aria-hidden="true"
      />
      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                opacity: [0.45, 0.7, 0.45],
                scale: [1, 1.04, 1],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-28 right-[8%] w-[460px] h-[460px] rounded-full bg-[#00A99D]/[0.05] blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Main Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Editorial Typography & Personal Brand Statement */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Small Introductory Label */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#002C71]/[0.035] border border-[#002C71]/12 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-[#00A99D]" aria-hidden="true" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-[0.16em] uppercase text-[#002C71]">
                {HERO_CONTENT.eyebrow}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="text-4xl sm:text-5xl xl:text-[3.65rem] font-extrabold tracking-[-0.032em] leading-[1.08] text-[#002C71]">
                <span className="block font-medium text-[#5E5858] text-2xl sm:text-3xl xl:text-[2.1rem] tracking-[-0.02em] mb-1.5">
                  {HERO_CONTENT.headingPrefix}
                </span>
                <span className="relative inline-block">
                  {HERO_CONTENT.headingName}
                  {/* Subtle Editorial Signature Accent Line */}
                  <svg
                    viewBox="0 0 320 12"
                    fill="none"
                    aria-hidden="true"
                    className="w-44 sm:w-64 h-3 mt-1 text-[#00A99D]"
                  >
                    <motion.path
                      d="M2 8.5C78 2.5 204 1.8 318 6.5"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      initial={prefersReducedMotion ? { pathLength: 1 } : { pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.85, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-2 text-xs sm:text-sm font-semibold tracking-[0.12em] uppercase text-[#002C71]/80">
                {HERO_CONTENT.credentials}
              </p>
            </motion.div>

            {/* Supporting Headline */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-xl sm:text-2xl font-semibold tracking-[-0.018em] leading-[1.35] text-[#002C71] max-w-2xl"
            >
              Building <span className="text-[#00A99D]">AI Innovation</span>. Empowering Research.
              Creating Entrepreneurial Impact.
            </motion.p>

            {/* Description */}
            <motion.p
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 text-base sm:text-[1.05rem] leading-[1.75] text-[#5E5858] max-w-2xl"
            >
              {HERO_CONTENT.description}
            </motion.p>

            {/* Two Primary & Secondary CTA Links */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#my-journey"
                onClick={(e) => scrollToSection(e, 'my-journey')}
                className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#002C71] text-white hover:bg-[#00A99D] transition-colors duration-250 text-sm font-semibold tracking-[0.03em]"
              >
                <span>{HERO_CONTENT.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#002C71] border border-[#002C71]/20 hover:border-[#00A99D] hover:text-[#00A99D] transition-colors duration-250 text-sm font-semibold tracking-[0.03em]"
              >
                <span>{HERO_CONTENT.secondaryCta.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>

            {/* Executive Identity Tags */}
            <motion.div
              initial={prefersReducedMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.34 }}
              className="mt-9 pt-7 border-t border-[#002C71]/10"
            >
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-[#5E5858]">
                {HERO_CONTENT.identityPillars.map((pillar, index) => (
                  <span key={pillar} className="inline-flex items-center gap-2">
                    {index > 0 && (
                      <span className="w-1 h-1 rounded-full bg-[#00A99D]" aria-hidden="true" />
                    )}
                    <span>{pillar}</span>
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Official CEO Portrait */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.68, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[390px] sm:max-w-[420px]">
              {/* Subtle Architectural Offset Frame */}
              <div
                className="absolute -inset-3 rounded-[28px] border border-[#002C71]/10 bg-[#002C71]/[0.02] pointer-events-none"
                aria-hidden="true"
              />
              {/* Subtle Teal Corner Hairline Accents */}
              <div
                className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#00A99D] rounded-tr-[28px] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#00A99D] rounded-bl-[28px] pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait Container */}
              <div className="relative rounded-2xl overflow-hidden bg-[#002C71]/[0.04] border border-[#002C71]/15 aspect-[4/5]">
                {!portraitFailed ? (
                  <>
                    <img
                      src={portraitSrc}
                      alt={HERO_CONTENT.portrait.alt}
                      data-official-source={HERO_CONTENT.portrait.officialDriveUrl}
                      onError={handlePortraitError}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-[50%_18%] transition-transform duration-700 hover:scale-[1.015]"
                    />
                    <button
                      type="button"
                      onClick={() => setPortraitLightboxOpen(true)}
                      aria-label="View full official portrait of Dr. V. Nagaraj"
                      className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full bg-white/90 hover:bg-[#002C71] text-[#002C71] hover:text-white border border-[#002C71]/12 flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </>
                ) : (
                  <div className="w-full h-full p-8 flex flex-col items-center justify-center text-center bg-white">
                    <AlertCircle className="w-8 h-8 text-[#00A99D] mb-3" />
                    <p className="text-sm font-semibold text-[#002C71] mb-1">
                      Official Portrait Asset Unavailable
                    </p>
                    <p className="text-xs text-[#5E5858] leading-relaxed mb-4">
                      Unable to reach the official portrait asset. Please verify network access to
                      the official Google Drive image source.
                    </p>
                    <a
                      href={HERO_CONTENT.portrait.officialDriveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#00A99D] underline"
                    >
                      Open Official Source URL
                    </a>
                  </div>
                )}

                {/* Subtle Editorial Nameplate */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 px-4 py-3 rounded-xl bg-white/94 backdrop-blur-md border border-[#002C71]/12 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-bold text-[#002C71] tracking-[-0.01em]">
                      Dr. V. Nagaraj
                    </div>
                    <div className="text-[11px] text-[#5E5858]">
                      Founder &amp; Managing Director · Trueline Research
                    </div>
                  </div>
                  <span
                    className="shrink-0 inline-block w-2 h-2 rounded-full bg-[#00A99D]"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Understated Impact Metrics Bar + Begin Reading Cue */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 lg:mt-18 pt-8 border-t border-[#002C71]/12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 flex-1">
            {HERO_CONTENT.heroHighlights.map((metric) => (
              <div key={metric.label} className="border-l-2 border-[#00A99D]/45 pl-4">
                <div className="text-2xl sm:text-[1.65rem] font-bold tracking-[-0.03em] text-[#002C71] tabular-nums">
                  {metric.value}
                </div>
                <div className="mt-0.5 text-xs text-[#5E5858] leading-snug">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

          <a
            href="#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="group self-start lg:self-center inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.14em] uppercase text-[#002C71] hover:text-[#00A99D] transition-colors shrink-0"
          >
            <span>01 / About</span>
            <span className="w-7 h-7 rounded-full border border-[#002C71]/20 group-hover:border-[#00A99D] flex items-center justify-center transition-colors">
              <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
            </span>
          </a>
        </motion.div>
      </div>

      {/* Optional Lightbox Inspection for Official Portrait */}
      <LightboxModal
        slides={portraitSlide}
        activeIndex={portraitLightboxOpen ? 0 : null}
        onClose={() => setPortraitLightboxOpen(false)}
        onChangeIndex={() => {}}
      />
    </section>
  );
};

