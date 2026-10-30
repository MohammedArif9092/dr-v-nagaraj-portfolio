import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CompanyMembershipSection } from './components/CompanyMembershipSection';
import { AchievementsSection } from './components/AchievementsSection';
import { MyJourneySection } from './components/MyJourneySection';

export const App: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [showFloatingTop, setShowFloatingTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowFloatingTop(window.scrollY > 900);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#002C71] flex flex-col">
      {/* Keyboard Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:rounded-lg focus:bg-[#002C71] focus:text-white focus:text-xs focus:font-semibold"
      >
        Skip to main content
      </a>

      {/* Sticky Header with Strictly Four Main Navigation Sections */}
      <Navbar />

      {/* Main Executive Portfolio Content */}
      <main id="main-content" className="flex-1">
        <HeroSection />
        <AboutSection />
        <CompanyMembershipSection />
        <AchievementsSection />
        <MyJourneySection />
      </main>

      {/* Subtle Floating Back-to-Top Action */}
      <AnimatePresence>
        {showFloatingTop && (
          <motion.button
            type="button"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-30 w-11 h-11 rounded-full bg-[#002C71] hover:bg-[#00A99D] text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;

