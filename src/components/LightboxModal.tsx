import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Building2, UserCheck } from 'lucide-react';

export interface LightboxSlide {
  id: string;
  imageUrl: string;
  title: string;
  category?: string;
  subtitle?: string;
  date?: string;
  role?: string;
  location?: string;
  description?: string;
}

interface LightboxModalProps {
  slides: LightboxSlide[];
  activeIndex: number | null;
  onClose: () => void;
  onChangeIndex: (newIndex: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  slides,
  activeIndex,
  onClose,
  onChangeIndex,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const isOpen = activeIndex !== null && slides[activeIndex] !== undefined;
  const current = isOpen && activeIndex !== null ? slides[activeIndex] : null;
  const hasMultiple = slides.length > 1;

  const goPrev = useCallback(() => {
    if (activeIndex === null || slides.length <= 1) return;
    onChangeIndex((activeIndex - 1 + slides.length) % slides.length);
  }, [activeIndex, slides.length, onChangeIndex]);

  const goNext = useCallback(() => {
    if (activeIndex === null || slides.length <= 1) return;
    onChangeIndex((activeIndex + 1) % slides.length);
  }, [activeIndex, slides.length, onChangeIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, goPrev, goNext]);

  return (
    <AnimatePresence>
      {isOpen && current && activeIndex !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#002C71]/92 backdrop-blur-md p-4 sm:p-6 md:p-10"
          onClick={onClose}
        >
          {/* Top Controls */}
          <div className="fixed top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between z-10 pointer-events-none">
            <div className="pointer-events-auto inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-medium tracking-wider tabular-nums">
              <span className="h-2 w-2 rounded-full bg-[#00A99D]" />
              <span>
                {activeIndex + 1} / {slides.length}
              </span>
              {current.category && (
                <>
                  <span className="text-white/40">|</span>
                  <span className="truncate max-w-[200px] sm:max-w-xs">{current.category}</span>
                </>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close image viewer (Escape)"
              className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-white text-[#002C71] hover:bg-[#00A99D] hover:text-white transition-colors text-xs font-semibold tracking-wide cursor-pointer"
            >
              <span>Close</span>
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Previous / Next Controls */}
          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous photograph (Left Arrow)"
                className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/12 hover:bg-[#00A99D] border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next photograph (Right Arrow)"
                className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/12 hover:bg-[#00A99D] border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Main Lightbox Frame */}
          <motion.div
            key={current.id}
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl bg-white rounded-2xl overflow-hidden border border-white/20 grid grid-cols-1 lg:grid-cols-12 max-h-[84vh]"
          >
            <div className="lg:col-span-8 bg-[#002C71]/[0.04] flex items-center justify-center p-3 sm:p-6 max-h-[55vh] lg:max-h-[84vh]">
              <img
                src={current.imageUrl}
                alt={current.title}
                className="max-h-[48vh] lg:max-h-[74vh] w-auto max-w-full object-contain rounded-lg"
              />
            </div>

            <div className="lg:col-span-4 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-t lg:border-t-0 lg:border-l border-[#002C71]/10 bg-white">
              <div>
                {current.category && (
                  <span className="inline-block text-[11px] font-semibold tracking-[0.16em] uppercase text-[#00A99D] mb-2.5">
                    {current.category}
                  </span>
                )}
                <h3 className="text-xl font-bold text-[#002C71] leading-snug mb-4">
                  {current.title}
                </h3>

                <div className="space-y-2.5 mb-5 text-xs text-[#5E5858]">
                  {current.subtitle && (
                    <div className="flex items-start gap-2">
                      <Building2 className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#002C71]">{current.subtitle}</span>
                    </div>
                  )}
                  {current.role && (
                    <div className="flex items-start gap-2">
                      <UserCheck className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                      <span>Role: {current.role}</span>
                    </div>
                  )}
                  {current.date && (
                    <div className="flex items-start gap-2">
                      <Calendar className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                      <span>{current.date}</span>
                    </div>
                  )}
                  {current.location && (
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                      <span>{current.location}</span>
                    </div>
                  )}
                </div>

                {current.description && (
                  <p className="text-sm text-[#5E5858] leading-relaxed pt-4 border-t border-[#002C71]/10">
                    {current.description}
                  </p>
                )}
              </div>

              {hasMultiple && (
                <div className="pt-6 mt-6 border-t border-[#002C71]/10 flex items-center justify-between text-[11px] text-[#5E5858]">
                  <span>Use ← → arrow keys to navigate</span>
                  <span>ESC to close</span>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

