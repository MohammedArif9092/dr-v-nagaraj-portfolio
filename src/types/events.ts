export type PortfolioEventCategory =
  | 'AI & Emerging Technologies'
  | 'Research & Innovation'
  | 'Entrepreneurship & Startups'
  | 'Intellectual Property Rights'
  | 'Faculty Development Programmes'
  | 'Workshops & Training'
  | 'Guest Lectures & Keynote Sessions'
  | 'Conferences & Summits'
  | 'Jury & Mentorship Activities'
  | 'Professional & Industry Engagements';

export type VerificationStatus =
  | 'Verified'
  | 'Verified – Announcement'
  | 'Needs Verification';

export interface EventMediaAsset {
  id: string;
  src: string;
  driveId: string;
  kind: 'photo' | 'poster';
  caption: string;
}

export interface PortfolioEventRecord {
  id: string; // EVT_001 .. EVT_071
  serialNumber: number; // 1 .. 71
  title: string; // Official verbatim title from Excel
  sourceCategory: string;
  categories: PortfolioEventCategory[];
  year: 2022 | 2023 | 2024 | 2025 | 2026;
  programDate: string | null; // Null when not stated in source
  institution: string | null;
  venue: string | null;
  audience: string | null;
  topic: string | null;
  role: string | null; // Null when personal role is not stated
  organizingOrganization: string | null;
  linkedInPostDates: string[];
  linkedInUrls: string[];
  verificationStatus: VerificationStatus; // Internal accuracy governance
  verificationNote: string; // Internal source note
  descriptionLine1: string; // Line 1: Event Overview
  descriptionLine2: string; // Line 2: First-person Contribution & Impact
  media: EventMediaAsset[]; // Authentic event photos first, followed by official posters
}

export interface UncategorizedEventPhoto {
  id: string;
  src: string;
  driveId: string;
  fileName: string;
  caption: string;
}

