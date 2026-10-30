export interface NavItem {
  id: 'about' | 'company-membership' | 'achievements' | 'my-journey';
  label: string;
  number: string;
}

export interface ExpertiseArea {
  id: string;
  index: string;
  title: string;
  description: string;
  iconName: 'cpu' | 'microscope' | 'rocket' | 'shieldCheck';
}

export interface CompanyItem {
  id: string;
  name: string;
  designation: string;
  period: string;
  lines: string[];
  website: string;
  websiteDisplay: string;
  logoSrc?: string;
  harmonizeLogo?: boolean;
  monogram?: {
    badge: string;
    subtitle: string;
  };
}

export interface MembershipGroup {
  category: string;
  subtitle: string;
  items: {
    acronym: string;
    detail: string;
    highlightRole?: boolean;
  }[];
}

export interface ImpactMetric {
  id: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface AwardItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  certificateImage?: string;
}

export interface ExperienceTimelineItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  website?: string;
  category: 'Founded Venture' | 'Publication & Media' | 'Strategic Leadership';
}

export interface EducationItem {
  id: string;
  degree: string;
  specialization?: string;
  institution: string;
  badge: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  status?: string;
}

export interface EventGalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  organizer: string;
  date: string;
  role: string;
  category: string;
  description: string;
}

export interface VisitGalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  institution: string;
  category: string;
  date?: string;
  caption?: string;
}

export interface TravelGalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  location?: string;
  category: string;
  caption?: string;
}

export interface PersonalGalleryItem {
  id: string;
  imageUrl: string;
  title: string;
  caption?: string;
}

// STRICT FOUR MAIN NAVIGATION HEADINGS
export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'ABOUT', number: '01' },
  { id: 'company-membership', label: 'COMPANY & MEMBERSHIP', number: '02' },
  { id: 'achievements', label: 'ACHIEVEMENTS', number: '03' },
  { id: 'my-journey', label: 'MY JOURNEY', number: '04' },
];

export const HERO_CONTENT = {
  eyebrow: 'FOUNDER | AI INNOVATION LEADER | RESEARCHER',
  headingPrefix: "Hello, I'm",
  headingName: 'Dr. V. Nagaraj.',
  credentials: 'M.E., M.B.A., Ph.D., PDF (USA)',
  supportingHeadline:
    'Building AI Innovation. Empowering Research. Creating Entrepreneurial Impact.',
  description:
    'I am an entrepreneur, researcher, and innovation leader working at the intersection of Artificial Intelligence, research, technology, and entrepreneurship. My mission is to transform ideas into meaningful innovations through collaboration, technology, and sustainable innovation ecosystems.',
  primaryCta: {
    label: 'Explore My Journey',
    href: '#about',
  },
  secondaryCta: {
    label: "Let's Connect",
    href: '#contact',
  },
  portrait: {
    localSrc: '/images/dr-v-nagaraj-portrait.png',
    officialDriveUrl:
      'https://drive.google.com/thumbnail?id=1SDQpMWYEwvXVfH9nH9vG8bNafOrTKUc7&sz=w1000',
    alt: 'Dr. V. Nagaraj, M.E., M.B.A., Ph.D., PDF (USA) — Official Portrait',
  },
  identityPillars: [
    'Founder & Managing Director',
    'AI Innovation Leader',
    'Researcher & Academic Entrepreneur',
    'Technology & Innovation Strategist',
    'Startup Ecosystem Builder',
    'Research & Industry Collaboration Leader',
  ],
  heroHighlights: [
    { value: '13+ Years', label: 'Academic, Research & Industry Experience' },
    { value: '150+', label: 'Institutions & Universities Engaged' },
    { value: '1,500+', label: 'Research Publications Supported' },
    { value: '200+', label: 'Intellectual Property Rights' },
  ],
};

export const ABOUT_CONTENT = {
  fullName: 'Dr. V. Nagaraj, M.E., M.B.A., Ph.D., PDF (USA)',
  introduction: [
    'I am an entrepreneur, researcher, and innovation leader with 13+ years of experience spanning academia, research, technology, and industry. My work focuses on building innovation ecosystems that connect Artificial Intelligence, research, entrepreneurship, and industry.',
    'Through my entrepreneurial ventures and professional engagements, I work towards transforming research into real-world solutions, empowering institutions, mentoring startups, and creating opportunities for technology-driven growth.',
    'I believe innovation creates its greatest impact when research, technology, and entrepreneurship work together.',
  ],
  vision: {
    title: 'My Vision',
    statement:
      'To create globally connected innovation ecosystems that turn ideas into impactful technologies, sustainable businesses, and meaningful societal progress.',
  },
  mission: {
    title: 'My Mission',
    statement:
      'To connect research, academia, industry, and entrepreneurship through AI-driven innovation, collaboration, and technology development.',
  },
  areasOfExpertise: [
    {
      id: 'ai-tech',
      index: '01',
      title: 'Artificial Intelligence & Technology',
      description:
        'I explore and develop next-generation AI solutions, Generative AI platforms, Agentic AI systems, intelligent automation, and technology-driven business applications.',
      iconName: 'cpu',
    },
    {
      id: 'research-innovation',
      index: '02',
      title: 'Research & Innovation',
      description:
        'I work with academic institutions, researchers, and industries to strengthen research capabilities, establish innovation labs, promote scientific publications, and translate research into practical outcomes.',
      iconName: 'microscope',
    },
    {
      id: 'entrepreneurship-ecosystem',
      index: '03',
      title: 'Entrepreneurship & Ecosystem Development',
      description:
        'I support entrepreneurs and startups through mentorship, incubation, industry partnerships, business advisory, and idea-to-product development.',
      iconName: 'rocket',
    },
    {
      id: 'ip-institutional',
      index: '04',
      title: 'Intellectual Property & Institutional Development',
      description:
        'I contribute to patent, trademark, and copyright initiatives, research commercialization, institutional accreditation, ranking support, and global academic collaborations.',
      iconName: 'shieldCheck',
    },
  ] as ExpertiseArea[],
  whatIDo: [
    'AI Consulting, Development & Automation',
    'Research & Innovation Ecosystem Building',
    'Academic Publishing & Conference Organization',
    'Patent, Trademark & Copyright Support',
    'Institutional Accreditation & Ranking Advisory',
    'Startup Mentorship & Entrepreneurship Development',
    'Faculty Development & Student Training',
    'Industry-Academia Collaboration',
  ],
  closingStatement: 'Connect Knowledge. Enable Innovation. Create Impact.',
};

export const COMPANIES_FOUNDED: CompanyItem[] = [
  {
    id: 'trueline-research',
    name: 'Trueline Research Private Limited',
    designation: 'Founder & Managing Director',
    period: '2023 – Present',
    lines: [
      'I founded Trueline Research to develop an integrated research and AI innovation ecosystem connecting academia, industry, and startups.',
      'I focus on AI solutions, research and innovation infrastructure, technology development, intellectual property, institutional development, and entrepreneurship.',
    ],
    website: 'https://truelineresearch.in/',
    websiteDisplay: 'truelineresearch.in',
    logoSrc: '/logos/trueline-research.png',
  },
  {
    id: 'trueline-publisher',
    name: 'Trueline Publisher',
    designation: 'Founder & CEO',
    period: '2019 – Present',
    lines: [
      'I established Trueline Publisher to support researchers, academicians, and authors through academic publishing, ISBN book publications, research publication support, editing, and international conference organization.',
    ],
    website: 'https://www.truelinepublisher.in/',
    websiteDisplay: 'truelinepublisher.in',
    logoSrc: '/logos/trueline-publisher.png',
  },
  {
    id: 'jaeid',
    name: 'Journal of AI Enabled Innovation and Discovery (JAEID)',
    designation: 'Editor-in-Chief & Founder',
    period: '2026 – Present',
    lines: [
      'I founded JAEID as an international peer-reviewed scholarly journal dedicated to advancing Artificial Intelligence research across science, engineering, technology, healthcare, and society.',
    ],
    website: 'https://www.jaeid.com/',
    websiteDisplay: 'jaeid.com',
    monogram: {
      badge: 'JAEID',
      subtitle: 'Peer-Reviewed International AI Journal',
    },
  },
  {
    id: 'trueline-spectrum',
    name: 'Trueline Spectrum',
    designation: 'Editor & Founder',
    period: '2026 – Present',
    lines: [
      'I founded Trueline Spectrum as a monthly magazine and media platform connecting industry, education, research, science, technology, innovation, and entrepreneurship.',
    ],
    website: 'https://www.truelinespectrum.in/',
    websiteDisplay: 'truelinespectrum.in',
    logoSrc: '/logos/trueline-spectrum.png',
  },
];

export const PARTNERSHIP_COMPANIES: CompanyItem[] = [
  {
    id: 'startnet-ventures',
    name: 'StartNet Ventures Private Limited',
    designation: 'Co-Founder & Chief Innovation Officer',
    period: '2023 – Present',
    lines: [
      'I contribute to building a startup ecosystem through corporate-startup partnerships, mentorship, advisory services, networking, and entrepreneurship development.',
    ],
    website: 'https://www.startnet.in/',
    websiteDisplay: 'startnet.in',
    monogram: {
      badge: 'STARTNET',
      subtitle: 'StartNet Ventures Pvt. Ltd.',
    },
  },
  {
    id: 'yaa-creations',
    name: 'Yaa Creations',
    designation: 'Chief Operating Officer (COO)',
    period: '2026 – Present',
    lines: [
      'I lead operational strategy, delivery excellence, and scalable growth initiatives in a technology company specializing in AI, software development, web and mobile applications, and digital transformation.',
    ],
    website: 'https://www.yaacreations.com/',
    websiteDisplay: 'yaacreations.com',
    logoSrc: '/logos/yaa-creations.png',
    harmonizeLogo: true,
  },
  {
    id: 'think-tn-foundation',
    name: 'Think TN Foundation',
    designation: 'Director & Co-Founder',
    period: '2026 – Present',
    lines: [
      "I contribute to advancing Tamil Nadu's long-term development through AI, emerging technologies, education, research, innovation, public programmes, and cross-sector collaboration.",
    ],
    website: 'https://www.thinktn.in/',
    websiteDisplay: 'thinktn.in',
    monogram: {
      badge: 'THINK TN',
      subtitle: 'Think TN Foundation',
    },
  },
];

export const PROFESSIONAL_MEMBERSHIPS: MembershipGroup[] = [
  {
    category: 'Engineering & Technology',
    subtitle: 'Global & National Scientific Bodies',
    items: [
      { acronym: 'IEEE', detail: 'Senior Member', highlightRole: true },
      {
        acronym: 'IETE',
        detail: 'Institution of Electronics and Telecommunication Engineers',
      },
      { acronym: 'ISTE', detail: 'Indian Society for Technical Education' },
      { acronym: 'IE', detail: 'Institution of Engineers' },
      { acronym: 'CSI', detail: 'Computer Society of India' },
      { acronym: 'ACM', detail: 'Association for Computing Machinery' },
      {
        acronym: 'IET',
        detail: 'Member & Executive Committee Member',
        highlightRole: true,
      },
    ],
  },
  {
    category: 'Industry & Entrepreneurship',
    subtitle: 'Industrial Chambers & Leadership Networks',
    items: [
      { acronym: 'CII', detail: 'Confederation of Indian Industry' },
      {
        acronym: 'Young Indians (Yi), Salem',
        detail: 'Zone Panelist, Education, Skilling & Startups',
        highlightRole: true,
      },
      { acronym: 'BNI', detail: 'Business Networking International' },
      {
        acronym: 'JCI',
        detail: 'Vice President, Growth & Development',
        highlightRole: true,
      },
      { acronym: 'SESD', detail: 'Executive Member', highlightRole: true },
    ],
  },
];

export const ACHIEVEMENTS_CONTENT = {
  metrics: [
    {
      id: 'institutions',
      numericValue: 150,
      suffix: '+',
      label: 'Institutions & Universities',
    },
    {
      id: 'ip-rights',
      numericValue: 200,
      suffix: '+',
      label: 'Intellectual Property Rights',
    },
    {
      id: 'publications',
      numericValue: 1500,
      suffix: '+',
      label: 'Research Publications',
    },
    {
      id: 'startups',
      numericValue: 70,
      suffix: '+',
      label: 'Startups Mentored',
    },
    {
      id: 'conferences',
      numericValue: 60,
      suffix: '+',
      label: 'Scientific Conferences & Publications',
    },
    {
      id: 'industry-partners',
      numericValue: 10,
      suffix: '+',
      label: 'Industry Partners',
    },
    {
      id: 'students-trained',
      numericValue: 15000,
      suffix: '+',
      label: 'Students Trained',
    },
    {
      id: 'faculty-trained',
      numericValue: 5000,
      suffix: '+',
      label: 'Faculty Members Trained',
    },
  ] as ImpactMetric[],
  keyContributions: [
    'Established research and innovation initiatives with cutting-edge laboratories.',
    'Supported patent filing, research publications, and prototype development.',
    'Mentored startups through incubation programmes and supported early-stage funding opportunities.',
    'Engaged with 150+ research institutions and universities through collaborative programmes.',
    'Trained students and faculty across various technology and research domains.',
    'Organized international conferences and supported academic publishing.',
    'Contributed to institutional accreditation, rankings, and research excellence.',
    'Served in board-level positions in research and innovation organizations.',
  ],
  awards: [
    {
      id: 'award-2021',
      year: '2021',
      title: 'National Distinguished Researcher Award',
      organization: 'I20R, Punjab',
    },
    {
      id: 'award-2023',
      year: '2023',
      title: 'Young Entrepreneur of the Year Award',
      organization: 'Senthalir Human Development Trust',
    },
    {
      id: 'award-2024-innovation',
      year: '2024',
      title: 'Innovation and Entrepreneurship Award',
      organization: 'Senthalir Human Development Trust',
    },
    {
      id: 'award-2024-yi',
      year: '2024',
      title: 'Best EC Member',
      organization: 'CII – Young Indians, Salem',
    },
    {
      id: 'award-2024-jci',
      year: '2024',
      title: 'Outstanding Contributor Award – ABLE South 2024',
      organization: 'JCI Salem Midtown',
    },
    {
      id: 'award-2025-bni',
      year: '2025',
      title: 'Most Resilient President Award – BNI Future 2025',
      organization: 'BNI Salem',
    },
    {
      id: 'award-2026-skrgc',
      year: '2026',
      title: 'Best Teaching & Research Excellence Award',
      organization: 'SKRGC Academy & Shinawatra University, Thailand',
    },
  ] as AwardItem[],
};

export const JOURNEY_CONTENT = {
  professionalExperience: [
    {
      id: 'exp-trueline-publisher',
      organization: 'Trueline Publisher',
      role: 'Founder & CEO',
      period: 'April 2019 – Present',
      website: 'https://www.truelinepublisher.in/',
      category: 'Founded Venture',
    },
    {
      id: 'exp-trueline-research',
      organization: 'Trueline Research Private Limited',
      role: 'Managing Director & Founder',
      period: 'January 2023 – Present',
      website: 'https://truelineresearch.in/',
      category: 'Founded Venture',
    },
    {
      id: 'exp-startnet',
      organization: 'StartNet Ventures Private Limited',
      role: 'Co-Founder & Chief Innovation Officer',
      period: 'June 2023 – Present',
      website: 'https://www.startnet.in/',
      category: 'Strategic Leadership',
    },
    {
      id: 'exp-jaeid',
      organization: 'Journal of AI Enabled Innovation and Discovery (JAEID)',
      role: 'Editor-in-Chief & Founder',
      period: 'January 2026 – Present',
      website: 'https://www.jaeid.com/',
      category: 'Publication & Media',
    },
    {
      id: 'exp-spectrum',
      organization: 'Trueline Spectrum',
      role: 'Editor & Founder',
      period: 'January 2026 – Present',
      website: 'https://www.truelinespectrum.in/',
      category: 'Publication & Media',
    },
    {
      id: 'exp-yaa',
      organization: 'Yaa Creations',
      role: 'Chief Operating Officer',
      period: 'August 2026 – Present',
      website: 'https://www.yaacreations.com/',
      category: 'Strategic Leadership',
    },
    {
      id: 'exp-thinktn',
      organization: 'Think TN Foundation',
      role: 'Director & Co-Founder',
      period: 'August 2026 – Present',
      website: 'https://www.thinktn.in/',
      category: 'Strategic Leadership',
    },
  ] as ExperienceTimelineItem[],

  education: [
    {
      id: 'edu-phd',
      degree: 'Ph.D. – Information and Communication Engineering',
      institution: 'Anna University',
      badge: 'Doctoral Research',
    },
    {
      id: 'edu-me',
      degree: 'M.E. – Applied Electronics',
      institution: 'Paavai Group of Institutions, Anna University',
      badge: 'Postgraduate Engineering',
    },
    {
      id: 'edu-mba',
      degree: 'M.B.A. – System Management',
      institution: 'University of Madras',
      badge: 'Management Studies',
    },
    {
      id: 'edu-be',
      degree: 'B.E. – Electronics and Communication Engineering',
      institution: 'King College of Technology, Anna University',
      badge: 'Undergraduate Engineering',
    },
    {
      id: 'edu-pdf',
      degree: 'Postdoctoral Fellowship (PDF)',
      institution: 'University of South Florida, USA',
      badge: 'International Postdoctoral Fellowship',
    },
  ] as EducationItem[],

  certifications: [
    {
      id: 'cert-lss',
      title: 'Lean Six Sigma – Green Belt',
      issuer: 'MSME Technology Development Centre',
    },
    {
      id: 'cert-google',
      title: 'Google Certified Educator',
    },
    {
      id: 'cert-jci',
      title: 'Certified Trainer in JCI',
      status: 'Pursuing',
    },
  ] as CertificationItem[],

  eventCategories: [
    'International and National Academic Conferences',
    'AI & Emerging Technology Summits',
    'Research & Innovation Conferences',
    'Startup and Entrepreneurship Summits',
    'Faculty Development Programmes',
    'Workshops and Technical Training Programmes',
    'Industry-Academia Interaction Programmes',
    'Innovation and Intellectual Property Awareness Programmes',
    'Student Entrepreneurship and Startup Development Events',
    'Academic Leadership and Institutional Development Programmes',
  ],

  visitCategories: [
    'College and University Visits',
    'School Visits & Student Interaction',
    'Innovation and Entrepreneurship Programmes',
    'Faculty and Student Training Sessions',
    'Research and Innovation Centre Visits',
    'Industry and Startup Visits',
    'Academic Leadership Interactions',
    'Institutional Collaborations',
    'Mentorship and Knowledge-Sharing Sessions',
  ],

  travelThemes: [
    'Places I Have Explored',
    'Professional Travel & Business Visits',
    'National & International Events',
    'Institutional and Industry Visits',
    'Memorable Travel Experiences',
    'Photography & Personal Moments',
  ],

  travelIntroduction: [
    'Beyond my professional responsibilities, I enjoy travelling, exploring new destinations, meeting inspiring people, and discovering different cultures and perspectives.',
    'I believe every journey offers an opportunity to learn, connect, experience, and grow.',
  ],

  lifeBeyondWork:
    'I value meaningful relationships, continuous learning, networking, new experiences, and opportunities to exchange ideas with people from different backgrounds.',

  // Authenticated photographic galleries: populated strictly when real portfolio photographs are supplied.
  eventsGallery: [] as EventGalleryItem[],
  visitsGallery: [] as VisitGalleryItem[],
  travelGallery: [] as TravelGalleryItem[],
  personalGallery: [] as PersonalGalleryItem[],
};

export const CONTACT_CONTENT = {
  headline: "Let's Connect. Let's Collaborate. Let's Create Impact.",
  description:
    'I believe meaningful collaborations begin with conversations. I welcome opportunities to connect with researchers, academicians, entrepreneurs, industry leaders, startups, institutions, and innovators.',
  email: 'info@truelineresearch.in',
  website: 'https://truelineresearch.in/',
  websiteDisplay: 'https://truelineresearch.in/',
  linkedInLabel: 'Nagaraj Varatharaj',
  linkedInUrl: 'https://www.linkedin.com/in/nagaraj-varatharaj',
  location: 'Tamil Nadu, India',
  finalBrandStatement: 'BUILDING THE FUTURE THROUGH AI, RESEARCH & INNOVATION.',
};
