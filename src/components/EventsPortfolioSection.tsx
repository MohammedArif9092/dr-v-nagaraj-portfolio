import React, { useState, useMemo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Search,
  X,
  Calendar,
  Building2,
  UserCheck,
  Images,
  ExternalLink,
  RotateCcw,
  LayoutGrid,
  Camera,
  ArrowUpRight,
  Award,
} from 'lucide-react';
import {
  EVENT_PORTFOLIO_CATEGORIES,
  EVENT_PORTFOLIO_YEARS,
  PORTFOLIO_EVENTS_DATABASE,
  UNCATEGORIZED_EVENT_PHOTOS,
} from '../data/eventsDatabase';
import { PortfolioEventCategory, PortfolioEventRecord } from '../types/events';
import { EventDetailModal } from './EventDetailModal';
import { LightboxModal, LightboxSlide } from './LightboxModal';

type GalleryViewMode = 'events' | 'photos';

const EventCard: React.FC<{
  event: PortfolioEventRecord;
  onSelect: (ev: PortfolioEventRecord) => void;
}> = ({ event, onSelect }) => {
  const [imgFailed, setImgFailed] = useState(false);
  const coverMedia = event.media[0] ?? null;
  const mediaCount = event.media.length;
  const primaryLinkedIn = event.linkedInUrls[0] ?? null;

  return (
    <article
      onClick={() => onSelect(event)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(event);
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Open details and photographs for ${event.title}`}
      className="group relative bg-white rounded-2xl border border-[#002C71]/12 hover:border-[#00A99D] transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Top Teal Accent Bar on Hover */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#00A99D] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-10"
        aria-hidden="true"
      />

      {/* 1. Event Photograph / Official Poster / Branded Placeholder */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#002C71]/10 bg-[#002C71]/[0.035]">
        {coverMedia && !imgFailed ? (
          <>
            {coverMedia.kind === 'photo' ? (
              <img
                src={coverMedia.src}
                alt={event.title}
                loading="lazy"
                decoding="async"
                onError={() => setImgFailed(true)}
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
              />
            ) : (
              /* Official Programme Posters: preserve full typography & portraits without harsh cropping */
              <div className="w-full h-full p-2.5 flex items-center justify-center bg-[#002C71]/[0.03]">
                <img
                  src={coverMedia.src}
                  alt={`${event.title} — Official Poster`}
                  loading="lazy"
                  decoding="async"
                  onError={() => setImgFailed(true)}
                  className="max-h-full max-w-full w-auto h-auto object-contain rounded-md transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Photo Count Badge */}
            <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#002C71]/90 text-white text-[11px] font-semibold tabular-nums">
              <Images className="w-3 h-3 text-[#00A99D]" />
              <span>
                {mediaCount === 1
                  ? coverMedia.kind === 'photo'
                    ? '1 Photo'
                    : '1 Poster'
                  : `${mediaCount} Images`}
              </span>
            </div>
          </>
        ) : (
          /* Clean Branded Placeholder with Official Event Title (Zero Stock / Unrelated Images) */
          <div className="w-full h-full bg-[#002C71] text-white p-5 flex flex-col justify-between relative overflow-hidden">
            <div
              className="pointer-events-none absolute -bottom-10 -right-10 w-36 h-36 rounded-full bg-[#00A99D]/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="relative z-10 flex items-center justify-between gap-2">
              <span className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#00A99D]">
                Dr. V. Nagaraj · {event.year}
              </span>
              <Award className="w-4 h-4 text-[#00A99D] shrink-0" />
            </div>
            <p className="relative z-10 text-sm font-bold text-white leading-snug line-clamp-3">
              {event.title}
            </p>
            <span className="relative z-10 text-[11px] text-white/75 truncate">
              {event.sourceCategory}
            </span>
          </div>
        )}

        {/* Year Chip */}
        <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 border border-[#002C71]/12 text-[11px] font-bold text-[#002C71] tabular-nums">
          {event.year}
        </span>
      </div>

      {/* Card Body: Visible Metadata, Official Title & Two-Line Description */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* 3 & 5. Event Date & Verified Role (only when verified in source) */}
          <div className="flex flex-wrap items-center gap-2 mb-3">
            {event.programDate && (
              <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#5E5858]">
                <Calendar className="w-3.5 h-3.5 text-[#00A99D] shrink-0" />
                <span>{event.programDate}</span>
              </span>
            )}
            {event.role && (
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/25 text-[11px] font-semibold text-[#002C71]">
                <UserCheck className="w-3 h-3 text-[#00A99D] shrink-0" />
                <span className="truncate max-w-[210px]">{event.role}</span>
              </span>
            )}
          </div>

          {/* 2. Official Event Name (Original Title Preserved) */}
          <h4 className="text-base sm:text-[17px] font-bold tracking-[-0.015em] text-[#002C71] group-hover:text-[#002C71] leading-snug mb-2">
            {event.title}
          </h4>

          {/* 4. Institution / Organization */}
          {(event.institution || event.venue) && (
            <div className="flex items-start gap-1.5 text-xs font-semibold text-[#002C71]/85 mb-3.5">
              <Building2 className="w-3.5 h-3.5 text-[#00A99D] shrink-0 mt-0.5" />
              <span className="leading-snug">
                {event.institution || event.venue}
              </span>
            </div>
          )}

          {/* 6. Exactly Two Lines of Event Description */}
          <div className="pt-3 border-t border-[#002C71]/8 space-y-2 text-xs sm:text-[13px] leading-[1.65]">
            <p className="text-[#5E5858]">{event.descriptionLine1}</p>
            <p className="text-[#002C71] font-medium">{event.descriptionLine2}</p>
          </div>
        </div>

        {/* 7 & 8. View Photos / View Details + LinkedIn Source Link */}
        <div className="mt-5 pt-4 border-t border-[#002C71]/10 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002C71] group-hover:text-[#00A99D] transition-colors">
            <span>{mediaCount > 0 ? `View Photos (${mediaCount})` : 'View Details'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#00A99D]" />
          </span>

          {primaryLinkedIn && (
            <a
              href={primaryLinkedIn}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`Open LinkedIn post for ${event.title}`}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#002C71]/[0.04] hover:bg-[#002C71] text-[#002C71] hover:text-white text-[11px] font-semibold transition-colors"
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export const EventsPortfolioSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [viewMode, setViewMode] = useState<GalleryViewMode>('events');
  const [selectedCategory, setSelectedCategory] = useState<'All Events' | PortfolioEventCategory>(
    'All Events'
  );
  const [selectedYear, setSelectedYear] = useState<'All' | number>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEvent, setActiveEvent] = useState<PortfolioEventRecord | null>(null);
  const [photoWallLightboxIdx, setPhotoWallLightboxIdx] = useState<number | null>(null);
  const [uncatLightboxIdx, setUncatLightboxIdx] = useState<number | null>(null);

  // Dynamic category counts across all 71 records
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    counts.set('All Events', PORTFOLIO_EVENTS_DATABASE.length);
    for (const cat of EVENT_PORTFOLIO_CATEGORIES) {
      counts.set(
        cat,
        PORTFOLIO_EVENTS_DATABASE.filter((ev) => ev.categories.includes(cat)).length
      );
    }
    return counts;
  }, []);

  // Dynamic year counts across all 71 records
  const yearCounts = useMemo(() => {
    const counts = new Map<number, number>();
    for (const yr of EVENT_PORTFOLIO_YEARS) {
      counts.set(yr, PORTFOLIO_EVENTS_DATABASE.filter((ev) => ev.year === yr).length);
    }
    return counts;
  }, []);

  // Total authentic photographs & posters count
  const totalMediaCount = useMemo(
    () => PORTFOLIO_EVENTS_DATABASE.reduce((acc, ev) => acc + ev.media.length, 0),
    []
  );

  // Filtered events based on search, category, and year
  const filteredEvents = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PORTFOLIO_EVENTS_DATABASE.filter((ev) => {
      if (selectedCategory !== 'All Events' && !ev.categories.includes(selectedCategory)) {
        return false;
      }
      if (selectedYear !== 'All' && ev.year !== selectedYear) {
        return false;
      }
      if (q) {
        const haystack = [
          ev.title,
          ev.institution ?? '',
          ev.venue ?? '',
          ev.topic ?? '',
          ev.role ?? '',
          ev.organizingOrganization ?? '',
        ]
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [selectedCategory, selectedYear, searchQuery]);

  // Flattened media stream for the Media Wall view (respecting active filters!)
  const filteredPhotoWall = useMemo(() => {
    const items: {
      mediaId: string;
      src: string;
      kind: 'photo' | 'poster';
      event: PortfolioEventRecord;
    }[] = [];
    for (const ev of filteredEvents) {
      for (const m of ev.media) {
        items.push({
          mediaId: m.id,
          src: m.src,
          kind: m.kind,
          event: ev,
        });
      }
    }
    return items;
  }, [filteredEvents]);

  const photoWallSlides: LightboxSlide[] = useMemo(
    () =>
      filteredPhotoWall.map((item) => ({
        id: item.mediaId,
        imageUrl: item.src,
        title: item.event.title,
        category: item.event.sourceCategory,
        subtitle: item.event.institution ?? undefined,
        date: item.event.programDate ?? `${item.event.year}`,
        role: item.event.role ?? undefined,
        location: item.event.venue ?? undefined,
        description: `${item.event.descriptionLine1} ${item.event.descriptionLine2}`,
      })),
    [filteredPhotoWall]
  );

  const uncatSlides: LightboxSlide[] = useMemo(
    () =>
      UNCATEGORIZED_EVENT_PHOTOS.map((u) => ({
        id: u.id,
        imageUrl: u.src,
        title: u.caption,
        category: 'Uncategorized Event Photos',
      })),
    []
  );

  const hasActiveFilters =
    selectedCategory !== 'All Events' || selectedYear !== 'All' || searchQuery.trim() !== '';

  const clearAllFilters = () => {
    setSelectedCategory('All Events');
    setSelectedYear('All');
    setSearchQuery('');
  };

  return (
    <div id="journey-events" className="mt-24 pt-18 border-t border-[#002C71]/12 scroll-mt-28">
      {/* Section Heading */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5 }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-9 h-9 rounded-xl bg-[#002C71] text-white text-xs font-bold flex items-center justify-center shrink-0">
              C
            </span>
            <span className="text-xs font-semibold tracking-[0.18em] uppercase text-[#00A99D]">
              2022 – 2026 · Complete Verified Archive
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-[2.2rem] font-extrabold tracking-[-0.025em] text-[#002C71] leading-tight">
            MY EVENTS &amp; PROFESSIONAL ENGAGEMENTS
          </h3>

          <p className="mt-3 text-base leading-relaxed text-[#5E5858]">
            Explore my journey through conferences, keynote sessions, workshops, academic
            engagements, innovation programs and industry interactions.
          </p>
        </div>

        {/* View Mode Switcher */}
        <div className="inline-flex items-center p-1.5 rounded-full bg-white border border-[#002C71]/14 self-start lg:self-end shrink-0">
          <button
            type="button"
            onClick={() => setViewMode('events')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'events'
                ? 'bg-[#002C71] text-white'
                : 'text-[#5E5858] hover:text-[#002C71]'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" />
            <span>Events ({PORTFOLIO_EVENTS_DATABASE.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('photos')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              viewMode === 'photos'
                ? 'bg-[#00A99D] text-white'
                : 'text-[#5E5858] hover:text-[#002C71]'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Media Gallery ({totalMediaCount})</span>
          </button>
        </div>
      </motion.div>

      {/* Filter & Search Console */}
      <div className="p-5 sm:p-7 rounded-2xl bg-white border border-[#002C71]/12 mb-10 space-y-5">
        {/* Top Row: Search Input + Year Filter Pills */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1 max-w-xl">
            <Search className="w-4 h-4 text-[#00A99D] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event name, institution, venue, or topic..."
              aria-label="Search events by name or institution"
              className="w-full pl-11 pr-10 py-2.5 rounded-full bg-[#002C71]/[0.025] border border-[#002C71]/15 focus:border-[#00A99D] text-sm text-[#002C71] placeholder:text-[#5E5858]/75 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full hover:bg-[#002C71]/10 flex items-center justify-center text-[#5E5858] cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Year Filters (2022–2026) */}
          <div
            role="group"
            aria-label="Filter events by year"
            className="flex flex-wrap items-center gap-1.5"
          >
            <button
              type="button"
              onClick={() => setSelectedYear('All')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                selectedYear === 'All'
                  ? 'bg-[#002C71] text-white'
                  : 'bg-[#002C71]/[0.035] text-[#002C71] hover:bg-[#002C71]/10'
              }`}
            >
              All Years
            </button>
            {EVENT_PORTFOLIO_YEARS.map((yr) => {
              const isSelected = selectedYear === yr;
              return (
                <button
                  key={yr}
                  type="button"
                  onClick={() => setSelectedYear(yr)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tabular-nums transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#00A99D] text-white'
                      : 'bg-[#002C71]/[0.035] text-[#002C71] hover:bg-[#00A99D]/15'
                  }`}
                >
                  {yr} ({yearCounts.get(yr) ?? 0})
                </button>
              );
            })}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div
          role="group"
          aria-label="Filter events by category"
          className="pt-4 border-t border-[#002C71]/10 flex flex-wrap items-center gap-2"
        >
          <button
            type="button"
            onClick={() => setSelectedCategory('All Events')}
            className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
              selectedCategory === 'All Events'
                ? 'bg-[#002C71] text-white'
                : 'bg-white text-[#5E5858] border border-[#002C71]/14 hover:border-[#00A99D] hover:text-[#002C71]'
            }`}
          >
            All Events ({categoryCounts.get('All Events') ?? 0})
          </button>

          {EVENT_PORTFOLIO_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            const count = categoryCounts.get(category) ?? 0;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#00A99D] text-white font-semibold'
                    : 'bg-white text-[#5E5858] border border-[#002C71]/12 hover:border-[#00A99D] hover:text-[#002C71]'
                }`}
              >
                {category} <span className="opacity-75 tabular-nums">({count})</span>
              </button>
            );
          })}
        </div>

        {/* Results Counter & Clear Filters Option */}
        <div className="pt-3 border-t border-[#002C71]/8 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-[#5E5858]">
            Showing{' '}
            <span className="font-bold text-[#002C71] tabular-nums">{filteredEvents.length}</span>{' '}
            of{' '}
            <span className="font-bold text-[#002C71] tabular-nums">
              {PORTFOLIO_EVENTS_DATABASE.length}
            </span>{' '}
            programs &amp; engagements
            {viewMode === 'photos' && (
              <>
                {' '}
                (<span className="font-bold text-[#00A99D] tabular-nums">{filteredPhotoWall.length}</span>{' '}
                matched photographs &amp; posters)
              </>
            )}
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAllFilters}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00A99D]/12 hover:bg-[#00A99D] text-[#002C71] hover:text-white font-semibold transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Clear Filters</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content Area: Either Event Cards Grid OR Media Wall */}
      {filteredEvents.length === 0 ? (
        <div className="rounded-2xl bg-white border border-[#002C71]/12 p-12 text-center">
          <p className="text-lg font-bold text-[#002C71] mb-2">
            No matching events found for the current filters
          </p>
          <p className="text-sm text-[#5E5858] mb-6">
            Try adjusting your search keywords, year selection, or event category.
          </p>
          <button
            type="button"
            onClick={clearAllFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#002C71] hover:bg-[#00A99D] text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      ) : viewMode === 'events' ? (
        /* 71 Event Portfolio Cards Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredEvents.map((ev) => (
            <EventCard key={ev.id} event={ev} onSelect={(selected) => setActiveEvent(selected)} />
          ))}
        </div>
      ) : (
        /* Complete Photographic Media Wall */
        <div className="space-y-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPhotoWall.map((item, idx) => (
              <div
                key={item.mediaId}
                className="group relative rounded-xl overflow-hidden bg-white border border-[#002C71]/12 hover:border-[#00A99D] transition-all flex flex-col"
              >
                <button
                  type="button"
                  onClick={() => setPhotoWallLightboxIdx(idx)}
                  aria-label={`View full image: ${item.event.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#002C71]/[0.035] cursor-pointer"
                >
                  <img
                    src={item.src}
                    alt={item.event.title}
                    loading="lazy"
                    decoding="async"
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      item.kind === 'photo' ? 'object-cover' : 'object-contain p-1.5'
                    }`}
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#002C71]/85 text-white text-[10px] font-semibold tabular-nums">
                    {item.event.year}
                  </span>
                </button>
                <div className="p-3 flex items-center justify-between gap-2 bg-white border-t border-[#002C71]/8">
                  <button
                    type="button"
                    onClick={() => setActiveEvent(item.event)}
                    className="text-left text-xs font-semibold text-[#002C71] hover:text-[#00A99D] line-clamp-1 cursor-pointer"
                  >
                    {item.event.title}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Uncategorized Event Photos Gallery (Rendered whenever unmatched Drive photos exist) */}
          {UNCATEGORIZED_EVENT_PHOTOS.length > 0 && (
            <div className="pt-10 border-t border-[#002C71]/12">
              <h4 className="text-xl font-bold text-[#002C71] mb-2">
                Uncategorized Event Photos
              </h4>
              <p className="text-sm text-[#5E5858] mb-6">
                Additional event photographs from the archive preserved without forced assignment to
                unrelated events.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {UNCATEGORIZED_EVENT_PHOTOS.map((photo, idx) => (
                  <button
                    key={photo.id}
                    type="button"
                    onClick={() => setUncatLightboxIdx(idx)}
                    className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#002C71]/12 hover:border-[#00A99D] cursor-pointer"
                  >
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Dedicated Uncategorized Event Photos Gallery when present in Events View too */}
      {viewMode === 'events' && UNCATEGORIZED_EVENT_PHOTOS.length > 0 && (
        <div className="mt-16 pt-12 border-t border-[#002C71]/12">
          <h4 className="text-xl font-bold text-[#002C71] mb-2">Uncategorized Event Photos</h4>
          <p className="text-sm text-[#5E5858] mb-6">
            Additional authentic event photographs preserved separately from specific program
            records.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {UNCATEGORIZED_EVENT_PHOTOS.map((photo, idx) => (
              <button
                key={photo.id}
                type="button"
                onClick={() => setUncatLightboxIdx(idx)}
                className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-white border border-[#002C71]/12 hover:border-[#00A99D] cursor-pointer"
              >
                <img
                  src={photo.src}
                  alt={photo.caption}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Event Detail Modal (Full Event Information + Complete Related Photo Gallery + Fullscreen Lightbox) */}
      <EventDetailModal event={activeEvent} onClose={() => setActiveEvent(null)} />

      {/* Media Wall Lightbox */}
      <LightboxModal
        slides={photoWallSlides}
        activeIndex={photoWallLightboxIdx}
        onClose={() => setPhotoWallLightboxIdx(null)}
        onChangeIndex={(next) => setPhotoWallLightboxIdx(next)}
      />

      {/* Uncategorized Photos Lightbox */}
      <LightboxModal
        slides={uncatSlides}
        activeIndex={uncatLightboxIdx}
        onClose={() => setUncatLightboxIdx(null)}
        onChangeIndex={(next) => setUncatLightboxIdx(next)}
      />
    </div>
  );
};

