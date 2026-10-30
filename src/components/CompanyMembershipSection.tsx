import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Building2, Award, Network } from 'lucide-react';
import {
  COMPANIES_FOUNDED,
  PARTNERSHIP_COMPANIES,
  PROFESSIONAL_MEMBERSHIPS,
  CompanyItem,
} from '../data/portfolioData';
import { SectionHeader } from './SectionHeader';

const CompanyCard: React.FC<{ company: CompanyItem; index: number }> = ({ company, index }) => {
  const prefersReducedMotion = useReducedMotion();
  const [imgError, setImgError] = useState(false);

  return (
    <motion.article
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-white border border-[#002C71]/12 hover:border-[#00A99D] transition-all duration-300 hover:-translate-y-1"
    >
      {/* Subtle Top Teal Accent Sweep */}
      <div
        className="absolute top-0 left-7 right-7 h-[2px] bg-[#00A99D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
        aria-hidden="true"
      />

      <div>
        {/* Top Row: Official Logo / Brand Mark + Period */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-6 border-b border-[#002C71]/10">
          <div className="h-12 flex items-center">
            {company.logoSrc && !imgError ? (
              <img
                src={company.logoSrc}
                alt={`${company.name} Official Logo`}
                onError={() => setImgError(true)}
                loading="lazy"
                decoding="async"
                className={`max-h-11 w-auto max-w-[210px] object-contain ${
                  company.harmonizeLogo ? 'brand-harmonized-logo opacity-90' : ''
                }`}
              />
            ) : company.monogram ? (
              <div className="inline-flex items-center gap-3">
                <div className="h-10 px-3 rounded-lg bg-[#002C71] text-white flex items-center justify-center font-bold text-xs tracking-[0.14em]">
                  {company.monogram.badge}
                </div>
                <span className="text-xs font-semibold text-[#5E5858] leading-tight max-w-[150px]">
                  {company.monogram.subtitle}
                </span>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-lg bg-[#002C71]/[0.05] border border-[#002C71]/12 flex items-center justify-center text-[#002C71]">
                <Building2 className="w-5 h-5" />
              </div>
            )}
          </div>

          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-[0.06em] text-[#002C71] bg-[#002C71]/[0.04] border border-[#002C71]/10 tabular-nums">
            {company.period}
          </span>
        </div>

        {/* Company Name & Role */}
        <h4 className="text-xl font-bold tracking-[-0.02em] text-[#002C71] leading-snug">
          {company.name}
        </h4>

        <div className="mt-2 inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-[#00A99D]">
          <span>{company.designation}</span>
          <span className="text-[#002C71]/25">|</span>
          <span className="text-[#5E5858] font-medium tabular-nums">{company.period}</span>
        </div>

        {/* Two-line / Approved Company Introduction */}
        <div className="mt-4 space-y-2.5">
          {company.lines.map((line, i) => (
            <p key={i} className="text-sm sm:text-[15px] leading-[1.72] text-[#5E5858]">
              {line}
            </p>
          ))}
        </div>
      </div>

      {/* Official Website Link */}
      <div className="mt-7 pt-5 border-t border-[#002C71]/8 flex items-center justify-between">
        <a
          href={company.website}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs sm:text-[13px] font-semibold tracking-[0.03em] text-[#002C71] group-hover:text-[#00A99D] transition-colors"
        >
          <span>Visit Official Website</span>
          <span className="text-[#5E5858] font-normal">({company.websiteDisplay})</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00A99D]" />
        </a>
      </div>
    </motion.article>
  );
};

export const CompanyMembershipSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="company-membership"
      aria-labelledby="company-membership-heading"
      className="py-20 sm:py-24 lg:py-28 bg-[#002C71]/[0.018] border-b border-[#002C71]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div id="company-membership-heading">
          <SectionHeader
            number="02"
            eyebrow="COMPANY & MEMBERSHIP"
            title="Ventures Founded, Leadership Roles & Professional Bodies"
            subtitle="Building enduring institutions across AI research, scholarly publishing, science media, startup ecosystems, digital engineering, and policy innovation."
          />
        </div>

        {/* Subsection A: Companies I Founded */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#002C71] text-white text-xs font-bold flex items-center justify-center">
                A
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#002C71]">
                  Companies I Founded
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00A99D]">
              4 Founded Organizations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COMPANIES_FOUNDED.map((company, idx) => (
              <CompanyCard key={company.id} company={company} index={idx} />
            ))}
          </div>
        </div>

        {/* Subsection B: Partnership Companies & Leadership Roles */}
        <div className="mt-20 pt-16 border-t border-[#002C71]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#00A99D] text-white text-xs font-bold flex items-center justify-center">
                B
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#002C71]">
                  Partnership Companies &amp; Leadership Roles
                </h3>
              </div>
            </div>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#00A99D]">
              3 Executive Partnerships
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PARTNERSHIP_COMPANIES.map((company, idx) => (
              <CompanyCard key={company.id} company={company} index={idx} />
            ))}
          </div>
        </div>

        {/* Subsection C: Professional Memberships & Leadership */}
        <div className="mt-20 pt-16 border-t border-[#002C71]/10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-[#002C71] text-white text-xs font-bold flex items-center justify-center">
                C
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-[-0.02em] text-[#002C71]">
                  Professional Memberships &amp; Leadership
                </h3>
              </div>
            </div>
            <p className="text-sm text-[#5E5858]">
              Active leadership and standing across scientific societies and industry chambers.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROFESSIONAL_MEMBERSHIPS.map((group, groupIdx) => (
              <motion.div
                key={group.category}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: groupIdx * 0.08 }}
                className="rounded-2xl bg-white border border-[#002C71]/12 p-7 sm:p-8"
              >
                <div className="flex items-center justify-between pb-5 mb-6 border-b border-[#002C71]/10">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] block mb-1">
                      {group.subtitle}
                    </span>
                    <h4 className="text-xl font-bold tracking-[-0.02em] text-[#002C71]">
                      {group.category}
                    </h4>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#002C71]/[0.04] border border-[#002C71]/10 flex items-center justify-center text-[#002C71]">
                    {groupIdx === 0 ? (
                      <Award className="w-5 h-5 text-[#00A99D]" />
                    ) : (
                      <Network className="w-5 h-5 text-[#00A99D]" />
                    )}
                  </div>
                </div>

                <ul className="divide-y divide-[#002C71]/8">
                  {group.items.map((member) => (
                    <li
                      key={member.acronym}
                      className="py-3.5 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 sm:gap-4"
                    >
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#00A99D] shrink-0"
                          aria-hidden="true"
                        />
                        <span className="text-sm sm:text-[15px] font-bold text-[#002C71]">
                          {member.acronym}
                        </span>
                      </div>

                      <span
                        className={`text-xs sm:text-[13px] sm:text-right ${
                          member.highlightRole
                            ? 'inline-flex self-start sm:self-auto px-2.5 py-0.5 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/25 text-[#002C71] font-semibold'
                            : 'text-[#5E5858]'
                        }`}
                      >
                        {member.detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

