import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Calendar,
  Building2,
  MapPin,
  UserCheck,
  Users,
  BookOpen,
  ExternalLink,
  Layers,
  Award,
} from 'lucide-react';
import { PortfolioEventRecord } from '../types/events';

interface EventDetailModalProps {
  event: PortfolioEventRecord | null;
  onClose: () => void;
}

export const EventDetailModal: React.FC<EventDetailModalProps> = ({ event, onClose }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeMediaIdx, setActiveMediaIdx] = useState(0);
  const [isFullscreenLightbox, setIsFullscreenLightbox] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    setActiveMediaIdx(0);
    setIsFullscreenLightbox(false);
  }, [event?.id]);

  const mediaCount = event?.media.length ?? 0;

  const goPrev = useCallback(() => {
    if (!mediaCount || mediaCount <= 1) return;
    setActiveMediaIdx((prev) => (prev - 1 + mediaCount) % mediaCount);
  }, [mediaCount]);

  const goNext = useCallback(() => {
    if (!mediaCount || mediaCount <= 1) return;
    setActiveMediaIdx((prev) => (prev + 1) % mediaCount);
  }, [mediaCount]);

  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        if (isFullscreenLightbox) {
          setIsFullscreenLightbox(false);
        } else {
          onClose();
        }
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goNext();
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [event, isFullscreenLightbox, onClose, goPrev, goNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 45) {
      if (deltaX > 0) {
        goPrev();
      } else {
        goNext();
      }
    }
    touchStartX.current = null;
  };

  const currentMedia = event && mediaCount > 0 ? event.media[activeMediaIdx] : null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="event-detail-title"
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#002C71]/88 backdrop-blur-md p-3 sm:p-6 md:p-8"
          onClick={onClose}
        >
          {/* Main Detail Container */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl border border-[#002C71]/15 overflow-hidden flex flex-col"
          >
            {/* Modal Top Header Bar */}
            <div className="px-5 sm:px-7 py-4 border-b border-[#002C71]/10 flex items-center justify-between gap-4 bg-white shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <span className="px-2.5 py-1 rounded-full bg-[#002C71] text-white text-[11px] font-bold tracking-[0.1em] tabular-nums shrink-0">
                  #{String(event.serialNumber).padStart(2, '0')}
                </span>
                <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#00A99D] truncate">
                  {event.sourceCategory}
                </span>
              </div>

              <button
                type="button"
                onClick={onClose}
                aria-label="Close event details (Escape)"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#002C71]/[0.05] hover:bg-[#002C71] text-[#002C71] hover:text-white text-xs font-semibold transition-colors cursor-pointer shrink-0"
              >
                <span>Close</span>
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Body Grid */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
              {/* Left 7 Columns: Related Event Photo Gallery */}
              <div className="lg:col-span-7 bg-[#002C71]/[0.03] border-b lg:border-b-0 lg:border-r border-[#002C71]/10 p-4 sm:p-6 flex flex-col justify-between">
                {currentMedia ? (
                  <>
                    <div
                      onTouchStart={handleTouchStart}
                      onTouchEnd={handleTouchEnd}
                      className="relative flex-1 min-h-[280px] sm:min-h-[380px] rounded-xl bg-white border border-[#002C71]/10 flex items-center justify-center overflow-hidden p-2 sm:p-4 select-none"
                    >
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentMedia.id}
                          src={currentMedia.src}
                          alt={currentMedia.caption}
                          initial={prefersReducedMotion ? false : { opacity: 0.4 }}
                          animate={{ opacity: 1 }}
                          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0.4 }}
                          transition={{ duration: 0.18 }}
                          className="max-h-[46vh] lg:max-h-[54vh] w-auto max-w-full object-contain rounded-lg cursor-zoom-in"
                          onClick={() => setIsFullscreenLightbox(true)}
                        />
                      </AnimatePresence>

                      {/* Media Counter & Kind Tag */}
                      <div className="absolute top-3 left-3 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002C71]/88 text-white text-[11px] font-semibold tabular-nums">
                        <span>
                          {activeMediaIdx + 1} / {mediaCount}
                        </span>
                        <span className="text-white/40">·</span>
                        <span className="uppercase tracking-wider text-[#00A99D]">
                          {currentMedia.kind === 'photo' ? 'Event Photo' : 'Programme Poster'}
                        </span>
                      </div>

                      {/* Full-screen Trigger */}
                      <button
                        type="button"
                        onClick={() => setIsFullscreenLightbox(true)}
                        aria-label="Open full-screen image lightbox"
                        className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 hover:bg-[#00A99D] text-[#002C71] hover:text-white border border-[#002C71]/15 text-[11px] font-semibold transition-colors cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Full Screen</span>
                      </button>

                      {/* Prev / Next Arrows */}
                      {mediaCount > 1 && (
                        <>
                          <button
                            type="button"
                            onClick={goPrev}
                            aria-label="Previous event image"
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-[#002C71] text-[#002C71] hover:text-white border border-[#002C71]/15 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <ChevronLeft className="w-5 h-5" />
                          </button>
                          <button
                            type="button"
                            onClick={goNext}
                            aria-label="Next event image"
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 hover:bg-[#002C71] text-[#002C71] hover:text-white border border-[#002C71]/15 flex items-center justify-center transition-colors cursor-pointer"
                          >
                            <ChevronRight className="w-5 h-5" />
                          </button>
                        </>
                      )}
                    </div>

                    {/* Thumbnail Filmstrip */}
                    {mediaCount > 1 && (
                      <div className="mt-4 pt-3 border-t border-[#002C71]/10">
                        <div className="flex items-center justify-between text-[11px] text-[#5E5858] mb-2">
                          <span className="font-semibold text-[#002C71]">
                            Related Event Gallery ({mediaCount} images)
                          </span>
                          <span>Swipe or use ← → keys</span>
                        </div>
                        <div className="flex items-center gap-2 overflow-x-auto pb-1">
                          {event.media.map((item, idx) => {
                            const isActive = idx === activeMediaIdx;
                            return (
                              <button
                                key={item.id}
                                type="button"
                                onClick={() => setActiveMediaIdx(idx)}
                                aria-label={`View image ${idx + 1} of ${mediaCount}`}
                                className={`relative w-16 h-12 rounded-lg overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                                  isActive
                                    ? 'border-[#00A99D] ring-2 ring-[#00A99D]/25'
                                    : 'border-[#002C71]/12 opacity-70 hover:opacity-100'
                                }`}
                              >
                                <img
                                  src={item.src}
                                  alt=""
                                  loading="lazy"
                                  className="w-full h-full object-cover"
                                />
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  /* Branded Placeholder when no Drive photo exists */
                  <div className="flex-1 min-h-[280px] rounded-xl bg-[#002C71] text-white p-8 flex flex-col justify-between relative overflow-hidden">
                    <div
                      className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#00A99D]/15 blur-2xl"
                      aria-hidden="true"
                    />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#00A99D]">
                        {event.year} Record
                      </span>
                      <Award className="w-6 h-6 text-[#00A99D]" />
                    </div>
                    <div className="relative z-10 my-6">
                      <p className="text-xs font-semibold tracking-[0.16em] uppercase text-white/65 mb-2">
                        Dr. V. Nagaraj · Official Event Record
                      </p>
                      <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                        {event.title}
                      </h4>
                    </div>
                    <p className="relative z-10 text-xs text-white/70">
                      {event.institution || event.organizingOrganization || 'Academic & Industry Engagement'}
                    </p>
                  </div>
                )}
              </div>

              {/* Right 5 Columns: Complete Event Information */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
                <div>
                  {/* Portfolio Categories */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {event.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 rounded-md bg-[#00A99D]/10 border border-[#00A99D]/25 text-[11px] font-semibold text-[#002C71]"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Full Official Event Title */}
                  <h3
                    id="event-detail-title"
                    className="text-xl sm:text-2xl font-bold tracking-[-0.02em] text-[#002C71] leading-snug"
                  >
                    {event.title}
                  </h3>

                  {/* Two-Line Description Block */}
                  <div className="mt-5 p-4 sm:p-5 rounded-xl bg-[#002C71]/[0.025] border-l-[3px] border-[#00A99D] space-y-2.5">
                    <p className="text-sm leading-[1.7] text-[#002C71] font-medium">
                      {event.descriptionLine1}
                    </p>
                    <p className="text-sm leading-[1.7] text-[#5E5858]">
                      {event.descriptionLine2}
                    </p>
                  </div>

                  {/* Verified Metadata Ledger */}
                  <dl className="mt-6 divide-y divide-[#002C71]/10 text-xs sm:text-[13px]">
                    {event.programDate && (
                      <div className="py-3 flex items-start gap-3">
                        <Calendar className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">Program Date</dt>
                          <dd className="text-[#5E5858] mt-0.5">{event.programDate}</dd>
                        </div>
                      </div>
                    )}

                    {event.institution && (
                      <div className="py-3 flex items-start gap-3">
                        <Building2 className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">
                            Institution / Organization
                          </dt>
                          <dd className="text-[#5E5858] mt-0.5">{event.institution}</dd>
                        </div>
                      </div>
                    )}

                    {event.venue && (
                      <div className="py-3 flex items-start gap-3">
                        <MapPin className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">Venue / Location</dt>
                          <dd className="text-[#5E5858] mt-0.5">{event.venue}</dd>
                        </div>
                      </div>
                    )}

                    {event.role && (
                      <div className="py-3 flex items-start gap-3">
                        <UserCheck className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">My Role</dt>
                          <dd className="text-[#002C71] font-medium mt-0.5">{event.role}</dd>
                        </div>
                      </div>
                    )}

                    {event.topic && (
                      <div className="py-3 flex items-start gap-3">
                        <BookOpen className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">Event Topic</dt>
                          <dd className="text-[#5E5858] mt-0.5">{event.topic}</dd>
                        </div>
                      </div>
                    )}

                    {event.audience && (
                      <div className="py-3 flex items-start gap-3">
                        <Users className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">Audience</dt>
                          <dd className="text-[#5E5858] mt-0.5">{event.audience}</dd>
                        </div>
                      </div>
                    )}

                    {event.organizingOrganization && (
                      <div className="py-3 flex items-start gap-3">
                        <Layers className="w-4 h-4 text-[#00A99D] shrink-0 mt-0.5" />
                        <div>
                          <dt className="font-semibold text-[#002C71]">
                            Organizing / Associated Body
                          </dt>
                          <dd className="text-[#5E5858] mt-0.5">
                            {event.organizingOrganization}
                          </dd>
                        </div>
                      </div>
                    )}
                  </dl>
                </div>

                {/* LinkedIn Source Post Links */}
                {event.linkedInUrls.length > 0 && (
                  <div className="mt-6 pt-5 border-t border-[#002C71]/12">
                    <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-[#5E5858] block mb-2.5">
                      Verified LinkedIn Source{event.linkedInUrls.length > 1 ? 's' : ''}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {event.linkedInUrls.map((url, idx) => (
                        <a
                          key={url}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#002C71] hover:bg-[#00A99D] text-white text-xs font-semibold transition-colors"
                        >
                          <span>
                            {event.linkedInUrls.length === 1
                              ? 'View LinkedIn Post'
                              : `LinkedIn Post ${idx + 1}${
                                  event.linkedInPostDates[idx]
                                    ? ` (${event.linkedInPostDates[idx]})`
                                    : ''
                                }`}
                          </span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Full-Screen Lightbox Overlay */}
          <AnimatePresence>
            {isFullscreenLightbox && currentMedia && (
              <motion.div
                initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0 }}
                transition={{ duration: 0.18 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreenLightbox(false);
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="fixed inset-0 z-[60] bg-[#002C71]/96 backdrop-blur-lg flex flex-col items-center justify-center p-4 sm:p-8 select-none"
              >
                <div className="fixed top-4 left-4 right-4 sm:top-6 sm:left-8 sm:right-8 flex items-center justify-between gap-4 z-10">
                  <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold tabular-nums">
                    <span className="w-2 h-2 rounded-full bg-[#00A99D]" />
                    <span>
                      {activeMediaIdx + 1} / {mediaCount}
                    </span>
                    <span className="hidden sm:inline text-white/40">|</span>
                    <span className="hidden sm:inline truncate max-w-md">{event.title}</span>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFullscreenLightbox(false);
                    }}
                    aria-label="Exit full screen (Escape)"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-[#002C71] hover:bg-[#00A99D] hover:text-white text-xs font-semibold transition-colors cursor-pointer"
                  >
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Exit Full Screen</span>
                  </button>
                </div>

                {mediaCount > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goPrev();
                      }}
                      aria-label="Previous image"
                      className="fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-[#00A99D] border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        goNext();
                      }}
                      aria-label="Next image"
                      className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/15 hover:bg-[#00A99D] border border-white/25 text-white flex items-center justify-center transition-colors cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}

                <img
                  src={currentMedia.src}
                  alt={currentMedia.caption}
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-[82vh] max-w-[92vw] w-auto object-contain rounded-lg"
                />

                <p className="mt-4 text-xs sm:text-sm text-white/85 text-center max-w-2xl">
                  {currentMedia.caption}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

