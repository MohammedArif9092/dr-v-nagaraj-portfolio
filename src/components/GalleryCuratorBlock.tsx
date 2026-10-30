import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Camera, Maximize2, ImagePlus, Trash2, MapPin, Calendar, Building2, UserCheck } from 'lucide-react';
import { LightboxModal, LightboxSlide } from './LightboxModal';

export interface CuratedGalleryEntry {
  id: string;
  imageUrl: string;
  title: string;
  category?: string;
  subtitle?: string; // Institution or organizer
  date?: string;
  role?: string;
  location?: string;
  description?: string;
  isLocalPreview?: boolean;
}

interface GalleryCuratorBlockProps {
  galleryId: string;
  categories?: string[];
  initialItems: CuratedGalleryEntry[];
  emptyTitle: string;
  emptyDescription: string;
  supportedFields: string[];
  defaultNewItemRole?: string;
}

export const GalleryCuratorBlock: React.FC<GalleryCuratorBlockProps> = ({
  galleryId,
  categories = [],
  initialItems,
  emptyTitle,
  emptyDescription,
  supportedFields,
  defaultNewItemRole,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [sessionItems, setSessionItems] = useState<CuratedGalleryEntry[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const combinedItems = useMemo(
    () => [...initialItems, ...sessionItems],
    [initialItems, sessionItems]
  );

  const filteredItems = useMemo(() => {
    if (!categories.length || selectedCategory === 'All') {
      return combinedItems;
    }
    return combinedItems.filter((item) => item.category === selectedCategory);
  }, [combinedItems, categories.length, selectedCategory]);

  const lightboxSlides: LightboxSlide[] = useMemo(
    () =>
      filteredItems.map((item) => ({
        id: item.id,
        imageUrl: item.imageUrl,
        title: item.title,
        category: item.category,
        subtitle: item.subtitle,
        date: item.date,
        role: item.role,
        location: item.location,
        description: item.description,
      })),
    [filteredItems]
  );

  const handleLocalFilesSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const assignedCategory =
      categories.length > 0
        ? selectedCategory === 'All'
          ? categories[0]
          : selectedCategory
        : undefined;

    const added: CuratedGalleryEntry[] = Array.from(files).map((file, idx) => {
      const cleanName = file.name.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ');
      const formattedTitle =
        cleanName.charAt(0).toUpperCase() + cleanName.slice(1) || 'Portfolio Photograph';
      return {
        id: `${galleryId}-session-${Date.now()}-${idx}`,
        imageUrl: URL.createObjectURL(file),
        title: formattedTitle,
        category: assignedCategory,
        role: defaultNewItemRole,
        description: 'Session photograph preview loaded from local device.',
        isLocalPreview: true,
      };
    });

    setSessionItems((prev) => [...prev, ...added]);
    e.target.value = '';
  };

  const clearSessionPreviews = () => {
    sessionItems.forEach((item) => {
      if (item.isLocalPreview) {
        URL.revokeObjectURL(item.imageUrl);
      }
    });
    setSessionItems([]);
    setLightboxIndex(null);
  };

  return (
    <div>
      {/* Category Filter Pills */}
      {categories.length > 0 && (
        <div
          role="tablist"
          aria-label="Gallery category filter"
          className="flex flex-wrap items-center gap-2 mb-8"
        >
          <button
            type="button"
            role="tab"
            aria-selected={selectedCategory === 'All'}
            onClick={() => setSelectedCategory('All')}
            className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-[0.04em] transition-colors cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-[#002C71] text-white'
                : 'bg-white text-[#5E5858] border border-[#002C71]/14 hover:border-[#00A99D] hover:text-[#002C71]'
            }`}
          >
            All Categories ({categories.length})
          </button>

          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelectedCategory(category)}
                className={`relative px-3.5 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer text-left ${
                  isSelected
                    ? 'bg-[#00A99D] text-white font-semibold'
                    : 'bg-white text-[#5E5858] border border-[#002C71]/12 hover:border-[#00A99D]/60 hover:text-[#002C71]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      )}

      {/* Hidden File Input for Optional Real-Photo Session Preview */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        multiple
        onChange={handleLocalFilesSelected}
        className="hidden"
        aria-label="Select official photographs from your device to preview in this gallery"
      />

      {/* Populated Photographic Grid OR Structured Empty Gallery State */}
      {filteredItems.length > 0 ? (
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <span className="text-xs font-semibold text-[#002C71] tracking-wide">
              Showing {filteredItems.length}{' '}
              {filteredItems.length === 1 ? 'photograph' : 'photographs'}
              {selectedCategory !== 'All' ? ` in "${selectedCategory}"` : ''}
            </span>

            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-[#002C71] bg-white border border-[#002C71]/15 hover:border-[#00A99D] hover:text-[#00A99D] transition-colors cursor-pointer"
              >
                <ImagePlus className="w-3.5 h-3.5" />
                <span>Add Photographs</span>
              </button>
              {sessionItems.length > 0 && (
                <button
                  type="button"
                  onClick={clearSessionPreviews}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-[#5E5858] bg-white border border-[#002C71]/12 hover:border-[#002C71]/35 hover:text-[#002C71] transition-colors cursor-pointer"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Reset Preview</span>
                </button>
              )}
            </div>
          </div>

          <motion.div
            layout={!prefersReducedMotion}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, idx) => (
                <motion.article
                  key={item.id}
                  layout={!prefersReducedMotion}
                  initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setLightboxIndex(idx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setLightboxIndex(idx);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`Open photograph: ${item.title}`}
                  className="group rounded-2xl overflow-hidden bg-white border border-[#002C71]/12 hover:border-[#00A99D] transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#002C71]/[0.04]">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/92 text-[#002C71] group-hover:bg-[#00A99D] group-hover:text-white flex items-center justify-center transition-colors">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      {item.category && (
                        <span className="text-[11px] font-semibold tracking-[0.12em] uppercase text-[#00A99D] block mb-1.5">
                          {item.category}
                        </span>
                      )}
                      <h5 className="text-base font-bold text-[#002C71] leading-snug mb-2">
                        {item.title}
                      </h5>
                      {item.description && (
                        <p className="text-xs text-[#5E5858] leading-relaxed line-clamp-2 mb-3">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 border-t border-[#002C71]/8 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-[#5E5858]">
                      {item.subtitle && (
                        <span className="inline-flex items-center gap-1">
                          <Building2 className="w-3 h-3 text-[#00A99D]" />
                          {item.subtitle}
                        </span>
                      )}
                      {item.role && (
                        <span className="inline-flex items-center gap-1">
                          <UserCheck className="w-3 h-3 text-[#00A99D]" />
                          {item.role}
                        </span>
                      )}
                      {item.date && (
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-[#00A99D]" />
                          {item.date}
                        </span>
                      )}
                      {item.location && (
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-[#00A99D]" />
                          {item.location}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      ) : (
        /* Clearly Structured Empty Gallery State (Zero Fabricated Photos or Stock Placeholders) */
        <motion.div
          key={selectedCategory}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28 }}
          className="rounded-2xl bg-white border border-[#002C71]/14 p-7 sm:p-10 editorial-dots-bg"
        >
          <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-[#002C71]/10 p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A99D]/10 border border-[#00A99D]/25 text-[#002C71] text-[11px] font-semibold tracking-[0.12em] uppercase mb-4">
                <Camera className="w-3.5 h-3.5 text-[#00A99D]" />
                <span>
                  {selectedCategory === 'All'
                    ? 'Curated Photographic Archive'
                    : `Filtered Category: ${selectedCategory}`}
                </span>
              </div>

              <h5 className="text-lg sm:text-xl font-bold text-[#002C71] tracking-[-0.015em] mb-2">
                {selectedCategory === 'All' ? emptyTitle : selectedCategory}
              </h5>

              <p className="text-sm text-[#5E5858] leading-relaxed mb-5">
                {emptyDescription}
              </p>

              {/* Supported Metadata Schema Pills */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#002C71] mr-1">
                  Archive Schema:
                </span>
                {supportedFields.map((field) => (
                  <span
                    key={field}
                    className="px-2.5 py-1 rounded-md bg-[#002C71]/[0.035] border border-[#002C71]/10 text-[11px] font-medium text-[#5E5858]"
                  >
                    {field}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0 flex flex-col items-start lg:items-end gap-2.5 border-t lg:border-t-0 pt-5 lg:pt-0 border-[#002C71]/10">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#002C71] hover:bg-[#00A99D] text-white text-xs font-semibold tracking-[0.04em] transition-colors cursor-pointer"
              >
                <ImagePlus className="w-4 h-4" />
                <span>Preview Official Photographs</span>
              </button>
              <span className="text-[11px] text-[#5E5858]">
                Supports lightbox zoom &amp; keyboard navigation
              </span>
            </div>
          </div>
        </motion.div>
      )}

      {/* Accessible Lightbox Viewer */}
      <LightboxModal
        slides={lightboxSlides}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChangeIndex={(nextIdx) => setLightboxIndex(nextIdx)}
      />
    </div>
  );
};

