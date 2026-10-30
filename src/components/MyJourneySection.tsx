import React, { useRef, useState } from 'react';
import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  BadgeCheck,
  Building,
  Compass,
  HeartHandshake,
  Mail,
  Globe,
  MapPin,
  Copy,
  Check,
  ArrowUp,
  ArrowUpRight,
  Linkedin,
} from 'lucide-react';
import { JOURNEY_CONTENT, CONTACT_CONTENT } from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';
import { GalleryCuratorBlock } from './GalleryCuratorBlock';
import { EventsPortfolioSection } from './EventsPortfolioSection';

const JOURNEY_CHAPTERS = [
  { id: 'journey-experience', code: 'A', label: 'Experience' },
  { id: 'journey-education', code: 'B', label: 'Education' },
  { id: 'journey-events', code: 'C', label: 'Events, Programs & Workshops' },
  { id: 'journey-visits', code: 'D', label: 'Institutional Visits' },
  { id: 'journey-travel', code: 'E', label: 'Travel Journal' },
  { id: 'journey-life', code: 'F', label: 'Life Beyond Work' },
];

export const MyJourneySection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 75%', 'end 65%'],
  });
  const timelineScaleY = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 26,
  });

  const scrollToSubId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 96;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_CONTENT.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    } catch {
      window.location.href = `mailto:${CONTACT_CONTENT.email}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      id="my-journey"
      aria-labelledby="my-journey-heading"
      className="pt-20 sm:pt-24 lg:pt-28 bg-[#002C71]/[0.015] scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div id="my-journey-heading">
          <SectionHeader
            number="04"
            eyebrow="MY JOURNEY"
            title="Leadership Timeline, Academic Credentials & Visual Chronicles"
            subtitle="A chronological story of entrepreneurial ventures, academic foundations, speaking engagements, institutional collaborations, and personal reflections."
          />
        </div>

        {/* Internal Chapter Navigation Strip (Within Section 04 Only) */}
        <div className="mb-16 p-2 rounded-2xl bg-white border border-[#002C71]/12 flex flex-wrap items-center gap-1.5">
          {JOURNEY_CHAPTERS.map((ch) => (
            <a
              key={ch.id}
              href={`#${ch.id}`}
              onClick={(e) => scrollToSubId(e, ch.id)}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold text-[#002C71] hover:bg-[#002C71]/[0.04] hover:text-[#00A99D] transition-colors"
            >
              <span className="text-[11px] font-bold text-[#00A99D]">{ch.code}.</span>
              <span>{ch.label}</span>
            </a>
          ))}
        </div>

        {/* ============================================================
            A. PROFESSIONAL EXPERIENCE — Interactive Vertical Timeline
           ============================================================ */}
        <div id="journey-experience" className="scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#002C71] text-white text-xs font-bold flex items-center justify-center">
                A
              </span>
              <div>
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] block">
                  2019 – Present
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                  Professional Experience
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#5E5858] max-w-md">
              Progressive founding and executive leadership milestones across research, publishing,
              media, startups, technology, and public-impact institutions.
            </p>
          </div>

          <div ref={timelineRef} className="relative pl-7 sm:pl-12">
            {/* Static Spine */}
            <div
              className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-[#002C71]/12"
              aria-hidden="true"
            />
            {/* Animated Teal Progress Spine */}
            {!prefersReducedMotion && (
              <motion.div
                style={{ scaleY: timelineScaleY }}
                className="absolute left-[11px] sm:left-[19px] top-3 bottom-3 w-[2px] bg-[#00A99D] origin-top"
                aria-hidden="true"
              />
            )}

            <div className="space-y-6">
              {JOURNEY_CONTENT.professionalExperience.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  {/* Node */}
                  <span
                    className="absolute -left-[23px] sm:-left-[35px] top-6 w-4 h-4 rounded-full bg-white border-[3px] border-[#002C71] group-hover:border-[#00A99D] transition-colors"
                    aria-hidden="true"
                  />

                  <div className="p-6 sm:p-7 rounded-2xl bg-white border border-[#002C71]/12 group-hover:border-[#00A99D] transition-all duration-250 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#002C71]/[0.04] border border-[#002C71]/10 flex items-center justify-center text-[#002C71] group-hover:text-[#00A99D] transition-colors shrink-0 mt-0.5">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="inline-block text-[11px] font-semibold tracking-[0.14em] uppercase text-[#00A99D] mb-1">
                          {item.category}
                        </span>
                        <h4 className="text-lg sm:text-xl font-bold text-[#002C71] tracking-[-0.015em]">
                          {item.organization}
                        </h4>
                        <p className="mt-1 text-sm font-semibold text-[#5E5858]">{item.role}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 md:flex-col md:items-end shrink-0">
                      <span className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-[#002C71]/[0.04] border border-[#002C71]/12 text-xs font-semibold text-[#002C71] tabular-nums">
                        {item.period}
                      </span>
                      {item.website && (
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#00A99D] hover:text-[#002C71] transition-colors"
                        >
                          <span>Website</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            B. EDUCATION & ACADEMIC QUALIFICATIONS + CERTIFICATIONS
           ============================================================ */}
        <div id="journey-education" className="mt-24 pt-18 border-t border-[#002C71]/12 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#00A99D] text-white text-xs font-bold flex items-center justify-center">
                B
              </span>
              <div>
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] block">
                  Academic Foundation
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                  Education &amp; Academic Qualifications
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {JOURNEY_CONTENT.education.map((edu, idx) => (
              <motion.div
                key={edu.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.05 }}
                className={`p-6 sm:p-7 rounded-2xl bg-white border transition-colors flex flex-col justify-between ${
                  edu.id === 'edu-pdf' || edu.id === 'edu-phd'
                    ? 'border-[#00A99D]/40 bg-white'
                    : 'border-[#002C71]/12 hover:border-[#00A99D]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#002C71]/[0.04] border border-[#002C71]/10 flex items-center justify-center text-[#00A99D]">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#002C71]/[0.04] text-[11px] font-semibold text-[#002C71]">
                      {edu.badge}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-[#002C71] leading-snug mb-2">
                    {edu.degree}
                  </h4>
                </div>

                <p className="pt-4 mt-4 border-t border-[#002C71]/10 text-sm font-medium text-[#5E5858]">
                  {edu.institution}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Professional Certifications & Training */}
          <div className="mt-12 p-7 sm:p-8 rounded-2xl bg-white border border-[#002C71]/12">
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck className="w-5 h-5 text-[#00A99D]" />
              <h4 className="text-lg sm:text-xl font-bold text-[#002C71] tracking-[-0.015em]">
                Professional Certifications &amp; Training
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {JOURNEY_CONTENT.certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 sm:p-5 rounded-xl bg-[#002C71]/[0.025] border border-[#002C71]/10 flex flex-col justify-between gap-2"
                >
                  <div className="flex items-start justify-between gap-2">
                    <span className="text-sm sm:text-[15px] font-bold text-[#002C71] leading-snug">
                      {cert.title}
                    </span>
                    {cert.status && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#00A99D]/12 border border-[#00A99D]/30 text-[11px] font-semibold text-[#002C71] shrink-0">
                        {cert.status}
                      </span>
                    )}
                  </div>
                  {cert.issuer && <span className="text-xs text-[#5E5858]">{cert.issuer}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================
            C. MY EVENTS & PROFESSIONAL ENGAGEMENTS (71 Records + Media Gallery)
           ============================================================ */}
        <EventsPortfolioSection />

        {/* ============================================================
            D. INSTITUTIONAL & ACADEMIC VISITS
           ============================================================ */}
        <div id="journey-visits" className="mt-24 pt-18 border-t border-[#002C71]/12 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#00A99D] text-white text-xs font-bold flex items-center justify-center">
                D
              </span>
              <div>
                <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] block">
                  Campus &amp; Industry Outreach
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                  Institutional &amp; Academic Visits
                </h3>
              </div>
            </div>
            <Building className="w-6 h-6 text-[#00A99D] hidden sm:block" />
          </div>

          <GalleryCuratorBlock
            galleryId="visits"
            categories={JOURNEY_CONTENT.visitCategories}
            initialItems={JOURNEY_CONTENT.visitsGallery.map((item) => ({
              id: item.id,
              imageUrl: item.imageUrl,
              title: item.title,
              category: item.category,
              subtitle: item.institution,
              date: item.date,
              description: item.caption,
            }))}
            emptyTitle="Institutional & Academic Visits Gallery"
            emptyDescription="Dedicated visual archive for university collaborations, school student interactions, research centre visits, startup incubation reviews, and academic leadership dialogues across 150+ partner institutions."
            supportedFields={[
              'Visit Photograph',
              'Category Filter',
              'Partner Institution',
              'Session Focus',
              'Lightbox Inspection',
            ]}
          />
        </div>

        {/* ============================================================
            E. TRAVEL & PERSONAL EXPERIENCES
           ============================================================ */}
        <div id="journey-travel" className="mt-24 pt-18 border-t border-[#002C71]/12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-10">
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-[#002C71] text-white text-xs font-bold flex items-center justify-center">
                  E
                </span>
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] block">
                    Personal Travel Journal
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                    Travel &amp; Personal Experiences
                  </h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-3">
              {JOURNEY_CONTENT.travelIntroduction.map((para, idx) => (
                <p
                  key={idx}
                  className={
                    idx === 1
                      ? 'text-sm sm:text-[15px] font-semibold text-[#002C71] pl-4 border-l-2 border-[#00A99D]'
                      : 'text-sm sm:text-[15px] leading-[1.72] text-[#5E5858]'
                  }
                >
                  {para}
                </p>
              ))}
            </div>
          </div>

          <GalleryCuratorBlock
            galleryId="travel"
            categories={JOURNEY_CONTENT.travelThemes}
            initialItems={JOURNEY_CONTENT.travelGallery.map((item) => ({
              id: item.id,
              imageUrl: item.imageUrl,
              title: item.title,
              category: item.category,
              location: item.location,
              description: item.caption,
            }))}
            emptyTitle="Personal Travel Journal & Destinations Archive"
            emptyDescription="Curated photographic journal reserved exclusively for authentic travel photographs, international and national visits, cultural perspectives, and memorable moments."
            supportedFields={[
              'Authentic Photograph',
              'Location Label',
              'Travel Category',
              'Short Caption',
            ]}
          />
        </div>

        {/* ============================================================
            F. LIFE BEYOND WORK
           ============================================================ */}
        <div id="journey-life" className="mt-24 pt-18 border-t border-[#002C71]/12 scroll-mt-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-[#00A99D] text-white text-xs font-bold flex items-center justify-center">
                  F
                </span>
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] block">
                    Reflections &amp; Perspectives
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-[-0.025em] text-[#002C71]">
                    Life Beyond Work
                  </h3>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-6 rounded-2xl bg-white border border-[#002C71]/12 flex items-start gap-4">
                <HeartHandshake className="w-6 h-6 text-[#00A99D] shrink-0 mt-0.5" />
                <p className="text-base leading-[1.75] text-[#002C71] font-medium">
                  {JOURNEY_CONTENT.lifeBeyondWork}
                </p>
              </div>
            </div>
          </div>

          <GalleryCuratorBlock
            galleryId="personal"
            initialItems={JOURNEY_CONTENT.personalGallery.map((item) => ({
              id: item.id,
              imageUrl: item.imageUrl,
              title: item.title,
              description: item.caption,
            }))}
            emptyTitle="Life Beyond Work — Personal Moments Archive"
            emptyDescription="Personal gallery dedicated to authentic moments of community connection, lifelong learning, networking, and shared experiences outside formal executive responsibilities."
            supportedFields={['Personal Photograph', 'Moment Title', 'Short Reflection']}
          />
        </div>
      </div>

      {/* ============================================================
          9. CONTACT / CLOSING EXPERIENCE (At the End of MY JOURNEY)
         ============================================================ */}
      <div
        id="contact"
        className="mt-24 sm:mt-28 bg-[#002C71] text-white pt-20 pb-14 sm:pt-24 sm:pb-16 scroll-mt-20 relative overflow-hidden"
      >
        {/* Subtle Teal Ambient Highlight */}
        <div
          className="pointer-events-none absolute -top-32 right-0 w-[420px] h-[420px] rounded-full bg-[#00A99D]/12 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-16 border-b border-white/15">
            {/* Left 7 Columns: Closing Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6">
                <Compass className="w-3.5 h-3.5 text-[#00A99D]" />
                <span className="text-xs font-semibold tracking-[0.16em] uppercase text-white">
                  Collaborate &amp; Connect
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold tracking-[-0.03em] leading-[1.12] text-white">
                {CONTACT_CONTENT.headline}
              </h3>

              <p className="mt-5 text-base sm:text-lg leading-[1.75] text-white/80 max-w-2xl">
                {CONTACT_CONTENT.description}
              </p>

              {/* Direct Primary Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${CONTACT_CONTENT.email}`}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#00A99D] text-white hover:bg-white hover:text-[#002C71] transition-colors text-sm font-semibold tracking-[0.03em]"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send an Email</span>
                </a>

                <a
                  href={CONTACT_CONTENT.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white/10 text-white border border-white/25 hover:bg-white hover:text-[#002C71] transition-colors text-sm font-semibold tracking-[0.03em]"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn · {CONTACT_CONTENT.linkedInLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right 5 Columns: Structured Contact Details */}
            <div className="lg:col-span-5 space-y-3.5">
              {/* Email Card with Copy Button */}
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#00A99D]/20 border border-[#00A99D]/40 flex items-center justify-center text-[#00A99D] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 block">
                      Email
                    </span>
                    <a
                      href={`mailto:${CONTACT_CONTENT.email}`}
                      className="text-sm sm:text-[15px] font-semibold text-white hover:text-[#00A99D] transition-colors truncate block"
                    >
                      {CONTACT_CONTENT.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#00A99D] text-white text-xs font-medium transition-colors shrink-0 cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Official Website Card */}
              <a
                href={CONTACT_CONTENT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 hover:border-[#00A99D] transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#00A99D]/20 border border-[#00A99D]/40 flex items-center justify-center text-[#00A99D] shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 block">
                      Official Website
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-white group-hover:text-[#00A99D] transition-colors truncate block">
                      {CONTACT_CONTENT.websiteDisplay}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#00A99D] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* LinkedIn Card */}
              <a
                href={CONTACT_CONTENT.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/15 hover:border-[#00A99D] transition-all flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-[#00A99D]/20 border border-[#00A99D]/40 flex items-center justify-center text-[#00A99D] shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 block">
                      LinkedIn
                    </span>
                    <span className="text-sm sm:text-[15px] font-semibold text-white group-hover:text-[#00A99D] transition-colors truncate block">
                      {CONTACT_CONTENT.linkedInLabel}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#00A99D] shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-white/[0.06] border border-white/15 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#00A99D]/20 border border-[#00A99D]/40 flex items-center justify-center text-[#00A99D] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/60 block">
                    Location
                  </span>
                  <span className="text-sm sm:text-[15px] font-semibold text-white">
                    {CONTACT_CONTENT.location}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Final Brand Statement & Back-to-Top Footer */}
          <div className="pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-sm sm:text-base font-extrabold tracking-[0.14em] uppercase text-[#00A99D]">
                {CONTACT_CONTENT.finalBrandStatement}
              </p>
              <p className="mt-2 text-xs text-white/65">
                &copy; {new Date().getFullYear()} Dr. V. Nagaraj, M.E., M.B.A., Ph.D., PDF (USA).
                All rights reserved.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/10 hover:bg-[#00A99D] border border-white/20 text-white text-xs font-semibold tracking-[0.1em] uppercase transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

