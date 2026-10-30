import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { MAIN_NAV_ITEMS, NavItem } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<NavItem['id'] | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      // Determine active section among ONLY the 4 approved sections
      const scrollPosition = window.scrollY + 180;
      if (window.scrollY < 320) {
        setActiveSection(null);
        return;
      }

      let current: NavItem['id'] | null = null;
      for (const item of MAIN_NAV_ITEMS) {
        const element = document.getElementById(item.id);
        if (element && element.offsetTop <= scrollPosition) {
          current = item.id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [mobileMenuOpen]);

  const scrollToId = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const target = document.getElementById(id);
    if (target) {
      const offset = 84;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-[#002C71]/10'
          : 'bg-white/85 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      {/* Subtle Top Scroll Progress Line */}
      <motion.div
        style={{ scaleX }}
        className="h-[2px] bg-[#00A99D] origin-left w-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-20 flex items-center justify-between gap-4">
        {/* Executive Signature / Brand Identity */}
        <a
          href="#top"
          onClick={(e) => scrollToId(e, 'top')}
          className="group flex items-center gap-3 shrink-0"
          aria-label="Dr. V. Nagaraj — Return to top"
        >
          <div className="w-9 h-9 rounded-lg bg-[#002C71] text-white flex items-center justify-center font-bold text-xs tracking-wider relative overflow-hidden transition-colors group-hover:bg-[#00A99D]">
            <span>VN</span>
            <span
              className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-[#00A99D] group-hover:bg-white transition-colors"
              aria-hidden="true"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-bold tracking-[-0.02em] text-[#002C71] leading-tight">
              Dr. V. Nagaraj
            </span>
            <span className="text-[11px] font-medium tracking-[0.04em] text-[#5E5858] hidden sm:inline">
              M.E., M.B.A., Ph.D., PDF (USA)
            </span>
          </div>
        </a>

        {/* Primary Desktop Navigation — Strictly Four Main Headings */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 rounded-full bg-[#002C71]/[0.03] border border-[#002C71]/10 px-2 py-1.5"
        >
          {MAIN_NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToId(e, item.id)}
                aria-current={isActive ? 'location' : undefined}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-[0.1em] transition-colors ${
                  isActive
                    ? 'text-[#002C71]'
                    : 'text-[#5E5858] hover:text-[#002C71]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavPill"
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    className="absolute inset-0 rounded-full bg-white border border-[#002C71]/12"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {isActive && (
                    <span
                      className="w-1.5 h-1.5 rounded-full bg-[#00A99D]"
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.label}</span>
                </span>
              </a>
            );
          })}
        </nav>

        {/* Contact CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => scrollToId(e, 'contact')}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#002C71] text-white hover:bg-[#00A99D] transition-colors duration-200 text-xs font-semibold tracking-[0.06em]"
          >
            <span>Let&apos;s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#002C71]/15 text-[#002C71] hover:border-[#00A99D] hover:text-[#00A99D] transition-colors cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer — Strictly Four Main Headings + Contact CTA */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-white border-b border-[#002C71]/12"
          >
            <nav
              aria-label="Mobile Navigation"
              className="max-w-7xl mx-auto px-5 py-6 flex flex-col gap-2"
            >
              {MAIN_NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => scrollToId(e, item.id)}
                    className={`flex items-center justify-between px-4 py-3.5 rounded-xl border transition-colors ${
                      isActive
                        ? 'bg-[#002C71]/[0.04] border-[#00A99D]/40 text-[#002C71]'
                        : 'bg-white border-[#002C71]/8 text-[#002C71] hover:border-[#002C71]/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold text-[#00A99D] tabular-nums">
                        {item.number}
                      </span>
                      <span className="text-sm font-semibold tracking-[0.08em]">
                        {item.label}
                      </span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#00A99D]" />
                    )}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={(e) => scrollToId(e, 'contact')}
                className="mt-3 flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#002C71] text-white hover:bg-[#00A99D] transition-colors text-xs font-semibold tracking-[0.08em] uppercase"
              >
                <span>Let&apos;s Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

