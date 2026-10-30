# Personal Portfolio — Dr. V. Nagaraj

Official executive personal portfolio website for **Dr. V. Nagaraj, M.E., M.B.A., Ph.D., PDF (USA)** — Founder & Managing Director, AI Innovation Leader, Researcher, and Academic Entrepreneur.

## Strict Four-Color Brand Identity
- **Primary Blue**: `#002C71`
- **Accent Green**: `#00A99D`
- **Secondary Gray**: `#5E5858`
- **Background**: `#FFFFFF`

## Navigation Structure
Strictly organized into four main navigation sections (with Contact placed at the closing of **MY JOURNEY**):
1. **ABOUT** (`#about`)
2. **COMPANY & MEMBERSHIP** (`#company-membership`)
3. **ACHIEVEMENTS** (`#achievements`)
4. **MY JOURNEY** (`#my-journey` + `#journey-events` + `#contact`)

## Complete Events, Programs & Workshops Media Gallery (`2022 – 2026`)
- **71 Official Program & Workshop Records** extracted from the verified workbook (`Programs & Workshops` sheet) in `src/data/eventsDatabase.ts` (keeping the 14 `Not Included – Review` records excluded per source governance rules).
- **294 Original Event Photographs & Programme Posters** collected from Google Drive (`public/events/EVT_001` through `public/events/EVT_071`), verified via SHA-256 content hashing with 0 duplicates.
- **Bespoke Two-Line Descriptions** for every single event (Line 1: Event Overview; Line 2: First-person Contribution & Impact, calibrated strictly to `Verified`, `Verified – Announcement`, and `Needs Verification` evidence).
- **Dynamic Filtering & Search**: Instant search by event title, institution, venue, or topic; Year filters (`2022`–`2026`); 10 multi-label Category filters; `Events (71)` vs `Media Gallery (294)` view switcher; and interactive **Event Detail Modal** with touch/keyboard photo gallery & full-screen Lightbox.

## Development & Production
```bash
npm install
npm run dev      # Start local development server
npm run build    # Type-check and build production bundle
npm run preview  # Preview production build locally
```
