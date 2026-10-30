import {
  PortfolioEventCategory,
  PortfolioEventRecord,
  UncategorizedEventPhoto,
} from '../types/events';

export const EVENT_PORTFOLIO_CATEGORIES: PortfolioEventCategory[] = [
  "AI & Emerging Technologies",
  "Research & Innovation",
  "Entrepreneurship & Startups",
  "Intellectual Property Rights",
  "Faculty Development Programmes",
  "Workshops & Training",
  "Guest Lectures & Keynote Sessions",
  "Conferences & Summits",
  "Jury & Mentorship Activities",
  "Professional & Industry Engagements"
];

export const EVENT_PORTFOLIO_YEARS = [2026, 2025, 2024, 2023, 2022] as const;

export const PORTFOLIO_EVENTS_DATABASE: PortfolioEventRecord[] = [
  {
    "id": "EVT_001",
    "serialNumber": 1,
    "title": "Training on TRL, MRL & ISO Certification (IIC – Activity 1: R&D Cell Activity)",
    "sourceCategory": "Institutional Training (R&D / Commercialisation)",
    "categories": [
      "Research & Innovation",
      "Workshops & Training"
    ],
    "year": 2026,
    "programDate": "23 Oct 2026, 10:00 AM onwards",
    "institution": "Mahendra Engineering College (Autonomous) – Dept. of ECE, IIC & R&D Cell",
    "venue": "Vivekanandar Arangam, Mahendra Engineering College",
    "audience": "Researchers, faculty members and student innovators",
    "topic": "Technology Readiness Level (TRL); Manufacturing Readiness Level (MRL); ISO certification procedures; research-to-commercialisation",
    "role": "Trainer (Resource Person)",
    "organizingOrganization": "Mahendra Engineering College; Resource Person: Dr. Nagaraj V (Trueline Research Pvt. Ltd.)",
    "linkedInPostDates": [
      "23 Oct 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7519313218612195328/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "This institutional R&D Cell training programme at Mahendra Engineering College focused on Technology Readiness Levels (TRL), Manufacturing Readiness Levels (MRL), ISO certification procedures, and translating academic research toward commercialisation.",
    "descriptionLine2": "Invited as the Resource Person representing Trueline Research Private Limited, I structured the training focus for researchers, faculty members, and student innovators navigating structured research-to-market frameworks.",
    "media": [
      {
        "id": "EVT_001_MEDIA_01",
        "src": "/events/EVT_001/posters/EVT_001_Poster_01_D5622AQHdiv8DXJSP3g.jpg",
        "driveId": "1C-SWEuKS1K6eWfpf7z9bNAAsHGegesNv",
        "kind": "poster",
        "caption": "Training on TRL, MRL & ISO Certification (IIC – Activity 1: R&D Cell Activity) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_002",
    "serialNumber": 2,
    "title": "HCT SDG Challenge '26 – 2-Day Hackathon",
    "sourceCategory": "Hackathon (Jury / Evaluation)",
    "categories": [
      "Jury & Mentorship Activities",
      "Research & Innovation",
      "AI & Emerging Technologies"
    ],
    "year": 2026,
    "programDate": "14–15 Oct 2026",
    "institution": "Hindusthan College of Technology (Autonomous) – Centre for Innovation & Entrepreneurship; with StartupTN Pre-Incubation Centre, Yi YUVA and Vcreate",
    "venue": "Salem",
    "audience": "Student teams (50 teams)",
    "topic": "UN SDG-focused prototypes and deep-tech concepts; ₹75,000 prize pool",
    "role": "Jury Member",
    "organizingOrganization": "Hindusthan College of Technology; Dr. Nagaraj V as MD, Trueline Research & Yi Innovation Chair – Salem",
    "linkedInPostDates": [
      "14 Oct 2026",
      "17 Oct 2026",
      "20 Oct 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7516064707057901568/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7517214586828271616/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7518293014117552129/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted by Hindusthan College of Technology in collaboration with StartupTN Pre-Incubation Centre, Yi YUVA, and Vcreate, this two-day hackathon brought together 50 student teams developing UN Sustainable Development Goal prototypes and deep-tech concepts.",
    "descriptionLine2": "I served on the evaluation jury as Managing Director of Trueline Research and Yi Innovation Chair – Salem, assessing technical prototypes and mentoring student innovators on real-world feasibility.",
    "media": [
      {
        "id": "EVT_002_MEDIA_01",
        "src": "/events/EVT_002/posters/EVT_002_Poster_01_D5622AQFuKEeXKeFCmg.jpg",
        "driveId": "1pil0o4Ei4kphqxkbRw9_nnD3U47KwrWT",
        "kind": "poster",
        "caption": "HCT SDG Challenge '26 – 2-Day Hackathon — Official Programme Poster"
      },
      {
        "id": "EVT_002_MEDIA_02",
        "src": "/events/EVT_002/posters/EVT_002_Poster_02_D5622AQFhIlZQMroTpw.jpg",
        "driveId": "1JjU08-4nzCBpC37C4AWPOFfW93pczDbl",
        "kind": "poster",
        "caption": "HCT SDG Challenge '26 – 2-Day Hackathon — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_003",
    "serialNumber": 3,
    "title": "AI Conclave – \"AI 2030: Building an Intelligent, Responsible Future\"",
    "sourceCategory": "Conclave / Keynote Session",
    "categories": [
      "AI & Emerging Technologies",
      "Guest Lectures & Keynote Sessions",
      "Conferences & Summits"
    ],
    "year": 2026,
    "programDate": "18 Sep 2026, 10:00 AM",
    "institution": "K.S. Rangasamy College of Arts and Science for Women (KSRCASW) – School of Computing",
    "venue": "Visvesvaraya Hall, KSRCASW, Tiruchengode",
    "audience": "Students and faculty of B.Sc. CS, BCA and B.Sc. CS (AI & DS)",
    "topic": "Generative AI, ethical AI design, deep-tech research, startup ideation; turning mini-projects into solutions, patents and ventures",
    "role": "Speaker (Keynote Resource Person)",
    "organizingOrganization": "KSRCASW; Keynote by Dr. Nagaraj V (Trueline Research)",
    "linkedInPostDates": [
      "17 Sep 2026",
      "03 Oct 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7506305344478892032/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7512130941805322242/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the School of Computing at K.S. Rangasamy College of Arts and Science for Women in Tiruchengode, this AI Conclave examined Generative AI, ethical AI design, deep-tech research, and startup ideation.",
    "descriptionLine2": "I delivered the keynote address to computing students and faculty, sharing practical pathways for transforming academic mini-projects into impactful solutions, patents, and scalable ventures.",
    "media": [
      {
        "id": "EVT_003_MEDIA_01",
        "src": "/events/EVT_003/posters/EVT_003_Poster_01_D5622AQH2nXs8LXAhfA.jpg",
        "driveId": "1grVwdRB52Oj-rn0WQl8BvS7y4GTjHGkh",
        "kind": "poster",
        "caption": "AI Conclave – \"AI 2030: Building an Intelligent, Responsible Future\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_004",
    "serialNumber": 4,
    "title": "57th Valuers Day Celebration – Eminent Speaker Session",
    "sourceCategory": "Professional Seminar / Talk",
    "categories": [
      "Professional & Industry Engagements",
      "Intellectual Property Rights",
      "AI & Emerging Technologies"
    ],
    "year": 2026,
    "programDate": "2 Oct 2026, 3:00–5:30 PM",
    "institution": "Institution of Valuers (IOV) – Salem Branch",
    "venue": "Ashwa Park Hotel, Salem",
    "audience": "Valuation professionals",
    "topic": "Valuation in the era of innovation, intellectual property, AI and technology commercialisation; intangible assets",
    "role": "Speaker (Eminent Speaker)",
    "organizingOrganization": "Institution of Valuers – Salem Branch",
    "linkedInPostDates": [
      "02 Oct 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7511762867050962944/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Convened by the Institution of Valuers – Salem Branch at Ashwa Park Hotel, this professional forum explored valuation practices across intellectual property, intangible assets, Artificial Intelligence, and technology commercialisation.",
    "descriptionLine2": "Invited as an Eminent Speaker for the 57th Valuers Day Celebration, my session addressed how emerging technologies and innovation assets reshape modern valuation frameworks.",
    "media": [
      {
        "id": "EVT_004_MEDIA_01",
        "src": "/events/EVT_004/posters/EVT_004_Poster_01_D5622AQHHyl4QyyA2mw.jpg",
        "driveId": "1dyeXmVS7gXaQpb_JnKv6WzxihaEAELJj",
        "kind": "poster",
        "caption": "57th Valuers Day Celebration – Eminent Speaker Session — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_005",
    "serialNumber": 5,
    "title": "First Year Orientation Programme 2026 – \"Engineering Excellence & AI-Driven Innovation: From Idea to Product\"",
    "sourceCategory": "Student Orientation / Guest Lecture",
    "categories": [
      "Guest Lectures & Keynote Sessions",
      "AI & Emerging Technologies",
      "Research & Innovation"
    ],
    "year": 2026,
    "programDate": "8 Sep 2026, 11:30 AM–1:15 PM",
    "institution": "EASA College of Engineering & Technology (ECET) – School of Science and Humanities",
    "venue": "Seminar Hall, EASA College of Engineering & Technology, Coimbatore",
    "audience": "First-year engineering students",
    "topic": "Bridging academic foundations and market-ready products; AI-driven research; innovation mindset",
    "role": "Speaker (Resource Person)",
    "organizingOrganization": "EASA College of Engineering & Technology",
    "linkedInPostDates": [
      "08 Sep 2026",
      "25 Sep 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7502973575285514240/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7509205469329047553/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted by the School of Science and Humanities at EASA College of Engineering & Technology in Coimbatore, this orientation programme introduced incoming engineering students to AI-driven research and product-oriented thinking.",
    "descriptionLine2": "I served as the Resource Person and guided first-year students on cultivating an innovation mindset that bridges foundational engineering studies with market-ready product development.",
    "media": [
      {
        "id": "EVT_005_MEDIA_01",
        "src": "/events/EVT_005/posters/EVT_005_Poster_01_D5622AQG3zBDQKGxISw.jpg",
        "driveId": "1urYAbuCDJGyts-TYB8SWx2YT5ve6S4S3",
        "kind": "poster",
        "caption": "First Year Orientation Programme 2026 – \"Engineering Excellence & AI-Driven Innovation: From Idea to Product\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_006",
    "serialNumber": 6,
    "title": "JCI Rising Stars 2026 – Session 18: \"Bootstrapping Your Goal\"",
    "sourceCategory": "Training Session (Online)",
    "categories": [
      "Workshops & Training",
      "Professional & Industry Engagements",
      "Entrepreneurship & Startups"
    ],
    "year": 2026,
    "programDate": "10 Sep 2026, 6:45–8:00 PM",
    "institution": "JCI Salem Steel Blossom (host); JCI Zone 29 Faculty Cell",
    "venue": "Online (Zoom)",
    "audience": null,
    "topic": "Goal setting; bootstrapping; turning ideas into action",
    "role": "Trainer",
    "organizingOrganization": "JCI (Junior Chamber International) – Zone 29",
    "linkedInPostDates": [
      "10 Sep 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7503778443537305600/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised under JCI Zone 29 Faculty Cell and hosted online by JCI Salem Steel Blossom, Session 18 of JCI Rising Stars 2026 centred on structured goal setting, resourcefulness, and translating ideas into disciplined action.",
    "descriptionLine2": "Featured as the session Trainer, I framed practical bootstrapping principles to help participants move purposefully from ambition to execution.",
    "media": [
      {
        "id": "EVT_006_MEDIA_01",
        "src": "/events/EVT_006/posters/EVT_006_Poster_01_D5622AQHL9cj1uLkJHw.jpg",
        "driveId": "1gkXlKtSt2DFqwzgIyNx_JV04aKnQD_HJ",
        "kind": "poster",
        "caption": "JCI Rising Stars 2026 – Session 18: \"Bootstrapping Your Goal\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_007",
    "serialNumber": 7,
    "title": "One Day Workshop – \"Innovation by DESIGN: From Problem to PRODUCT\"",
    "sourceCategory": "Student Workshop (Innovation)",
    "categories": [
      "Workshops & Training",
      "Research & Innovation",
      "Entrepreneurship & Startups"
    ],
    "year": 2026,
    "programDate": "8 Aug 2026, 10:00 AM",
    "institution": "Annapoorana Engineering College – Science and Innovation Club (Innovista)",
    "venue": "Class Room and Tech Park, Annapoorana Engineering College, Salem",
    "audience": "Students",
    "topic": "Transforming real-world problems into market-ready products through strategic design; hands-on training",
    "role": "Trainer (Resource Person)",
    "organizingOrganization": "Annapoorana Engineering College; Resource Person: Dr. Nagaraj V (Trueline Research)",
    "linkedInPostDates": [
      "08 Aug 2026",
      "28 Aug 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7491733920665841664/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7499070390258847744/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Science and Innovation Club (Innovista) at Annapoorana Engineering College in Salem, this hands-on workshop trained students in transforming real-world challenges into viable, market-ready products.",
    "descriptionLine2": "I conducted the workshop as Resource Person from Trueline Research, engaging students in strategic design methodologies and structured problem-to-product execution.",
    "media": [
      {
        "id": "EVT_007_MEDIA_01",
        "src": "/events/EVT_007/posters/EVT_007_Poster_01_D5622AQGwWW63Rhu19A.jpg",
        "driveId": "1E2nbhlWU-qtS4nP0ZrUXs7v7We94MM9z",
        "kind": "poster",
        "caption": "One Day Workshop – \"Innovation by DESIGN: From Problem to PRODUCT\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_008",
    "serialNumber": 8,
    "title": "National Level Technical Symposium (Phoenix Association)",
    "sourceCategory": "Technical Symposium – Chief Guest",
    "categories": [
      "Conferences & Summits",
      "Guest Lectures & Keynote Sessions",
      "AI & Emerging Technologies"
    ],
    "year": 2026,
    "programDate": "19 Aug 2026",
    "institution": "PGP College of Engineering and Technology (Autonomous) – Dept. of CSE (Phoenix Association)",
    "venue": "Engineering Block, PGP College of Engineering and Technology, Namakkal",
    "audience": "Students",
    "topic": "Emerging technologies; innovation",
    "role": "Speaker (Chief Guest)",
    "organizingOrganization": "PGP College of Engineering and Technology",
    "linkedInPostDates": [
      "18 Aug 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7495471895753076737/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Hosted by the Department of Computer Science and Engineering (Phoenix Association) at PGP College of Engineering and Technology in Namakkal, this national-level technical symposium spotlighted emerging technologies and student innovation.",
    "descriptionLine2": "Invited as the Chief Guest, my address focused on inspiring engineering students to engage deeply with frontier technologies and applied problem-solving.",
    "media": [
      {
        "id": "EVT_008_MEDIA_01",
        "src": "/events/EVT_008/posters/EVT_008_Poster_01_D5622AQHlRACaBheupA.jpg",
        "driveId": "1-lR0cMZom6uwa_TrJI15FsUAW8A3vD0m",
        "kind": "poster",
        "caption": "National Level Technical Symposium (Phoenix Association) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_009",
    "serialNumber": 9,
    "title": "Workshop on Protecting IPR and IP Management for Start-ups",
    "sourceCategory": "Workshop (IPR)",
    "categories": [
      "Intellectual Property Rights",
      "Workshops & Training",
      "Entrepreneurship & Startups"
    ],
    "year": 2026,
    "programDate": "7 Aug 2026, 10:30 AM",
    "institution": "The Kavery Engineering College – Dept. of ECE with IIC-TKEC",
    "venue": "APJ Hall, The Kavery Engineering College",
    "audience": "Students",
    "topic": "Translating ideas into intellectual property; IP management for startups",
    "role": "Speaker (Chief Guest)",
    "organizingOrganization": "The Kavery Engineering College",
    "linkedInPostDates": [
      "07 Aug 2026",
      "13 Aug 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7491361902326026241/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7493654584880418816/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Presented by the Department of Electronics and Communication Engineering and IIC at The Kavery Engineering College, this workshop examined intellectual property protection and strategic IP management for emerging startups.",
    "descriptionLine2": "I participated as Chief Guest and addressed students on converting technical concepts into protected intellectual property assets that strengthen early-stage ventures.",
    "media": [
      {
        "id": "EVT_009_MEDIA_01",
        "src": "/events/EVT_009/posters/EVT_009_Poster_01_D5622AQESmT3LAYfj4Q.jpg",
        "driveId": "1kA2Q57pJoSG50IUM-JEmx9Zz6hpM5pV_",
        "kind": "poster",
        "caption": "Workshop on Protecting IPR and IP Management for Start-ups — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_010",
    "serialNumber": 10,
    "title": "HR CONNECT – \"Contemporary HR Practices and Career Perspectives\"",
    "sourceCategory": "Guest Lecture / Workshop (Management)",
    "categories": [
      "Guest Lectures & Keynote Sessions",
      "Workshops & Training",
      "Professional & Industry Engagements"
    ],
    "year": 2026,
    "programDate": "7 Apr 2026, 11:00 AM–12:30 PM",
    "institution": "NPR College of Engineering and Technology (Autonomous) – Dept. of Management Studies",
    "venue": "Srinivasa Ramanujan Hall, NPR College of Engineering and Technology",
    "audience": "MBA students",
    "topic": "Contemporary HR practices; career perspectives",
    "role": "Trainer (Resource Person)",
    "organizingOrganization": "NPR College of Engineering and Technology",
    "linkedInPostDates": [
      "07 Apr 2026",
      "22 May 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7447210064899391488/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7463494256398151681/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of Management Studies at NPR College of Engineering and Technology, the HR CONNECT programme explored modern human resource practices and evolving leadership expectations for MBA students.",
    "descriptionLine2": "I led the session as Resource Person, sharing executive industry perspectives on organisational talent practices and long-term career readiness.",
    "media": [
      {
        "id": "EVT_010_MEDIA_01",
        "src": "/events/EVT_010/posters/EVT_010_Poster_01_D5622AQG-sZchnkKJFg.jpg",
        "driveId": "1tWJbtpRh8Thg7llbBw9x8xURk358abAp",
        "kind": "poster",
        "caption": "HR CONNECT – \"Contemporary HR Practices and Career Perspectives\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_011",
    "serialNumber": 11,
    "title": "National Startup Day Celebration 2026 – \"Unlocking the Entrepreneurial Mindset & Building Scalable Startups\"",
    "sourceCategory": "Entrepreneurship Talk",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2026,
    "programDate": "28 Jan 2026, 10:30 AM–12:30 PM",
    "institution": "Gnanamani College of Technology (Autonomous) – Dept. of Mathematics & IIC",
    "venue": "Ramanujan Hall, Gnanamani College of Technology, Namakkal",
    "audience": "Students and faculty",
    "topic": "Startup lifecycle; opportunities for student entrepreneurs; idea-to-execution roadmap",
    "role": "Speaker (Guest Speaker)",
    "organizingOrganization": "Gnanamani College of Technology",
    "linkedInPostDates": [
      "27 Jan 2026",
      "20 May 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7421885787429957632/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7462852910016548864/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Held at Gnanamani College of Technology in Namakkal by the Department of Mathematics and IIC, this National Startup Day programme examined the startup lifecycle and campus entrepreneurship opportunities.",
    "descriptionLine2": "I addressed students and faculty as Guest Speaker, outlining a structured idea-to-execution roadmap for cultivating an entrepreneurial mindset and building scalable startups.",
    "media": [
      {
        "id": "EVT_011_MEDIA_01",
        "src": "/events/EVT_011/posters/EVT_011_Poster_01_D5622AQEkp0xB1Vbybw.jpg",
        "driveId": "1HxI0o_1xcUUfUTsN41PDjwCPtu6t0cPK",
        "kind": "poster",
        "caption": "National Startup Day Celebration 2026 – \"Unlocking the Entrepreneurial Mindset & Building Scalable Startups\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_012",
    "serialNumber": 12,
    "title": "Research Workshop – \"Turning Ideas into Assets: Writing Patents & Winning Proposals\"",
    "sourceCategory": "Research Workshop (IPR & Proposals)",
    "categories": [
      "Research & Innovation",
      "Intellectual Property Rights",
      "Workshops & Training"
    ],
    "year": 2026,
    "programDate": "25 Mar 2026, 10:00 AM–5:00 PM",
    "institution": "Sona College of Technology – Dept. of Biomedical Engineering (Student Association: Uyirmaruthuvam)",
    "venue": "APJ Abdul Kalam Hall, ECE Block, Sona College of Technology",
    "audience": "Students",
    "topic": "Patent writing; winning research proposals; I&E ecosystem; startup team building",
    "role": "Trainer (Resource Person, with Ms. Preethy Rajan, Regional Head – Kerala, Trueline)",
    "organizingOrganization": "Sona College of Technology; Resource Persons from Trueline Research",
    "linkedInPostDates": [
      "28 Mar 2026",
      "07 May 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7443557119280295936/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7458107560496123905/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted by the Department of Biomedical Engineering and Uyirmaruthuvam student association at Sona College of Technology, this full-day research workshop covered patent drafting, competitive research proposals, and startup team formation.",
    "descriptionLine2": "I conducted the training as Resource Person alongside Trueline Research leadership, guiding students on converting innovative concepts into protectable intellectual property and funded research initiatives.",
    "media": [
      {
        "id": "EVT_012_MEDIA_01",
        "src": "/events/EVT_012/posters/EVT_012_Poster_01_D5622AQGLU_bOtINUQw.jpg",
        "driveId": "1V9cWqpwPCW4sTOMZGqwZ8vfoIoyD5Cs-",
        "kind": "poster",
        "caption": "Research Workshop – \"Turning Ideas into Assets: Writing Patents & Winning Proposals\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_013",
    "serialNumber": 13,
    "title": "Workshop on Innovation and Start-up for Computer Engineers",
    "sourceCategory": "Workshop (Innovation & Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Workshops & Training",
      "Research & Innovation"
    ],
    "year": 2026,
    "programDate": "12 Mar 2026, 10:00 AM–1:00 PM",
    "institution": "Mahendra Engineering College – Dept. of ECE with IIC",
    "venue": "VOC Seminar Hall, Mahendra Engineering College",
    "audience": "Students",
    "topic": "Turning ideas into startup solutions using modern technologies",
    "role": "Trainer (Resource Person)",
    "organizingOrganization": "Mahendra Engineering College",
    "linkedInPostDates": [
      "12 Mar 2026",
      "27 Apr 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7437718821148266496/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7454514933565665280/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of ECE and Institution’s Innovation Council at Mahendra Engineering College, this workshop focused on translating computing concepts into viable startup solutions through modern technologies.",
    "descriptionLine2": "I led the workshop as Resource Person, mentoring engineering students on identifying real-world problems and structuring technology-driven venture concepts.",
    "media": [
      {
        "id": "EVT_013_MEDIA_01",
        "src": "/events/EVT_013/posters/EVT_013_Poster_01_D5622AQGw0oVHzJph2g.jpg",
        "driveId": "1ETQnty2olzfYvPcBlj0491AmwC8aCaVu",
        "kind": "poster",
        "caption": "Workshop on Innovation and Start-up for Computer Engineers — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_014",
    "serialNumber": 14,
    "title": "One-day Research Excellence Workshop – \"Patent Drafting and AI Based Paper Writing\"",
    "sourceCategory": "Research Workshop",
    "categories": [
      "Research & Innovation",
      "Intellectual Property Rights",
      "AI & Emerging Technologies",
      "Workshops & Training"
    ],
    "year": 2026,
    "programDate": "1 Apr 2026, 10:00 AM–5:00 PM",
    "institution": "Sona College of Technology (Autonomous) – Dept. of Mechatronics Engineering",
    "venue": "Robotics Lab, Sona College of Technology",
    "audience": null,
    "topic": "Patent drafting; AI-based academic paper writing",
    "role": "Speaker (Guest Speaker)",
    "organizingOrganization": "Sona College of Technology",
    "linkedInPostDates": [
      "01 Apr 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7444817105021190145/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Presented by the Department of Mechatronics Engineering at Sona College of Technology, this full-day research excellence workshop brought together structured patent drafting methodologies and AI-assisted scholarly writing.",
    "descriptionLine2": "Invited as Guest Speaker, my session focused on equipping researchers with ethical AI workflows for academic publishing alongside rigorous patent documentation standards.",
    "media": [
      {
        "id": "EVT_014_MEDIA_01",
        "src": "/events/EVT_014/posters/EVT_014_Poster_01_D5622AQF5iAVlr0qjLw.jpg",
        "driveId": "1zu2TobIHoQ1x0xpasfPOYpKcimB9lrPM",
        "kind": "poster",
        "caption": "One-day Research Excellence Workshop – \"Patent Drafting and AI Based Paper Writing\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_015",
    "serialNumber": 15,
    "title": "One Day Seminar – \"Engineering Your Entrepreneurial Future: Mastering Sales, Marketing & Product Development\"",
    "sourceCategory": "Seminar (Entrepreneurship)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2026,
    "programDate": "26 Mar 2026, 9:30 AM",
    "institution": "The Kavery Engineering College – Dept. of Agricultural Engineering with IIC-TKEC & ISTE Students' Chapter",
    "venue": "APJ Hall, The Kavery Engineering College",
    "audience": "Students",
    "topic": "Sales, marketing and product development for future entrepreneurs",
    "role": "Speaker (Resource Person)",
    "organizingOrganization": "The Kavery Engineering College",
    "linkedInPostDates": [
      "26 Mar 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7442792825240395776/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised by the Department of Agricultural Engineering with IIC-TKEC and the ISTE Students' Chapter at The Kavery Engineering College, this seminar addressed core product development, sales, and go-to-market fundamentals for aspiring student founders.",
    "descriptionLine2": "Invited as the Resource Person, I centred my talk on connecting engineering product thinking with customer discovery, market positioning, and commercial execution.",
    "media": [
      {
        "id": "EVT_015_MEDIA_01",
        "src": "/events/EVT_015/posters/EVT_015_Poster_01_D5622AQHo1yqtQsvoQQ.jpg",
        "driveId": "1x8YSWs2KFZ1TOl32nWBhrPH6d70eiOGI",
        "kind": "poster",
        "caption": "One Day Seminar – \"Engineering Your Entrepreneurial Future: Mastering Sales, Marketing & Product Development\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_016",
    "serialNumber": 16,
    "title": "\"AI in your Hands – From Classrooms to Career\"",
    "sourceCategory": "Workshop (AI)",
    "categories": [
      "AI & Emerging Technologies",
      "Workshops & Training"
    ],
    "year": 2026,
    "programDate": "9 Mar 2026, 11:00 AM",
    "institution": "Dhirajlal Gandhi College of Technology (DGCT) – Dept. of AI & Data Science and Astroz Association; organised by Young Indians",
    "venue": "Communication Lab, DGCT, Salem",
    "audience": "Students",
    "topic": "Evolution of AI; bridging academic AI learning and industry applications",
    "role": "Trainer (Resource Person)",
    "organizingOrganization": "Young Indians (Yi) with DGCT",
    "linkedInPostDates": [
      "09 Mar 2026",
      "11 Mar 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7436634954605830145/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7437494892324356096/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by Young Indians (Yi) in collaboration with the Department of AI & Data Science and Astroz Association at Dhirajlal Gandhi College of Technology in Salem, this workshop traced the evolution of Artificial Intelligence from classroom theory to industry practice.",
    "descriptionLine2": "I delivered the session as Resource Person, guiding students on applying academic AI foundations to real-world engineering workflows and emerging career pathways.",
    "media": [
      {
        "id": "EVT_016_MEDIA_01",
        "src": "/events/EVT_016/posters/EVT_016_Poster_01_D5622AQFIUNWWEDtH-Q.jpg",
        "driveId": "1VU_0Qe0gDdQnvMn4ksmtCy0QD1zZnybA",
        "kind": "poster",
        "caption": "\"AI in your Hands – From Classrooms to Career\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_017",
    "serialNumber": 17,
    "title": "122nd Engineers' Talk Webinar – \"Global Minds, Local Impact: International Research Collaboration\"",
    "sourceCategory": "Webinar – Keynote",
    "categories": [
      "Research & Innovation",
      "Guest Lectures & Keynote Sessions",
      "Professional & Industry Engagements"
    ],
    "year": 2026,
    "programDate": "4 Mar 2026, 7:00 PM",
    "institution": "The Institution of Engineers (India) – Salem Local Centre",
    "venue": "Online (Zoom)",
    "audience": null,
    "topic": "Building international research networks; translating global collaboration into local impact",
    "role": "Speaker (Chief Guest & Keynote)",
    "organizingOrganization": "IEI – Salem Local Centre",
    "linkedInPostDates": [
      "04 Mar 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7434966465780420608/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Hosted online by The Institution of Engineers (India) – Salem Local Centre, the 122nd Engineers' Talk Webinar examined strategies for building international research networks that deliver meaningful regional outcomes.",
    "descriptionLine2": "Featured as Chief Guest and Keynote Speaker, my address focused on fostering cross-border academic partnerships and translating global research collaboration into local technological impact.",
    "media": [
      {
        "id": "EVT_017_MEDIA_01",
        "src": "/events/EVT_017/posters/EVT_017_Poster_01_D5622AQHOJG0FSSHZ5w.jpg",
        "driveId": "1pPb8pSs59LkHPCbzB_ISIsebZ93fIVlR",
        "kind": "poster",
        "caption": "122nd Engineers' Talk Webinar – \"Global Minds, Local Impact: International Research Collaboration\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_018",
    "serialNumber": 18,
    "title": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards)",
    "sourceCategory": "International Conference (Organised)",
    "categories": [
      "Conferences & Summits",
      "Research & Innovation"
    ],
    "year": 2026,
    "programDate": "23–26 Feb 2026",
    "institution": "Shinawatra University (host venue)",
    "venue": "Shinawatra University, Bangkok, Thailand (hybrid)",
    "audience": "Researchers, scholars and students",
    "topic": "Integrated research & innovation; researcher awards; MoU ceremony; Indo-Thai collaboration",
    "role": "Organizer (Co-organiser)",
    "organizingOrganization": "Trueline Research Pvt. Ltd., Trueline Publisher & SKRGC Academy (jointly presented)",
    "linkedInPostDates": [
      "28 Dec 2025",
      "02 Mar 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7411011522962980864/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7434179707321069568/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted in hybrid format at Shinawatra University in Bangkok, Thailand, ICIRI-2026 brought together researchers, scholars, and students for multidisciplinary paper presentations, institutional MoU exchanges, and Indo-Thai researcher recognitions.",
    "descriptionLine2": "I co-organised this international conference jointly through Trueline Research Private Limited and Trueline Publisher alongside SKRGC Academy, strengthening cross-border scholarly publishing and academic collaboration.",
    "media": [
      {
        "id": "EVT_018_MEDIA_01",
        "src": "/events/EVT_018/photos/EVT_018_Photo_01_D5622AQHFTiLZiLTNog.jpg",
        "driveId": "1306HB8y_yv7sq3z9elIvdHlZnIEFgMyt",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_02",
        "src": "/events/EVT_018/photos/EVT_018_Photo_02_D5622AQEiQk8KG6GVjw.jpg",
        "driveId": "11BgyIF8tCdwRRQdJ_w4stUlHEPlgHqma",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_03",
        "src": "/events/EVT_018/photos/EVT_018_Photo_03_D5622AQGy43n0sdNs0Q.jpg",
        "driveId": "195N4L6Kg0eS0XNSGEXoRMRn86zwN_lrr",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_04",
        "src": "/events/EVT_018/photos/EVT_018_Photo_04_D5622AQEnyZOW8nyQRA.jpg",
        "driveId": "161_jzSfBuDgPd0zELakXkgqy0J2kLXSK",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_05",
        "src": "/events/EVT_018/photos/EVT_018_Photo_05_D5622AQGI7qw8CNnicQ.jpg",
        "driveId": "1WGm5O32AY1AaPfCNNZGccdcDAdMKqfBY",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_06",
        "src": "/events/EVT_018/photos/EVT_018_Photo_06_D5622AQGQ861Zb2eoBg.jpg",
        "driveId": "1gZSJghEOpcn-PDVLXWGJ2t2ISTSa5KgK",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_07",
        "src": "/events/EVT_018/photos/EVT_018_Photo_07_D5622AQH78nJ_aX-z_Q.jpg",
        "driveId": "1fDL7Gs32TJxIQJvJqUn4mCk3HZmAmQkn",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_08",
        "src": "/events/EVT_018/photos/EVT_018_Photo_08_D5622AQE5OlmHjt7Z8A.jpg",
        "driveId": "1e-PkBvzTTPuEagp2iQ6N6eQDBOryC-Nn",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_09",
        "src": "/events/EVT_018/photos/EVT_018_Photo_09_D5622AQHPF2DCrxob4g.jpg",
        "driveId": "1iObeWnQU_J1VeYHfb53fX8iF6sQtmfLH",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_10",
        "src": "/events/EVT_018/photos/EVT_018_Photo_10_D5622AQGj2U7Qx_v2Xw.jpg",
        "driveId": "1LHULru472dU4na_8OUPLrC_WSZtKat1Q",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_11",
        "src": "/events/EVT_018/photos/EVT_018_Photo_11_D5622AQH7oBccB5sVIQ.jpg",
        "driveId": "1yc76u9Mk-0D_bEyoKlC5t6QqjR7sASHG",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_12",
        "src": "/events/EVT_018/photos/EVT_018_Photo_12_D5622AQHlbScBHqnn9w.jpg",
        "driveId": "1Gp98S0l8oT-IkyqFoXhHJ_GAMXADe5Yc",
        "kind": "photo",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Shinawatra University (host venue)"
      },
      {
        "id": "EVT_018_MEDIA_13",
        "src": "/events/EVT_018/posters/EVT_018_Poster_01_D5622AQFAapLKEc7cyQ.jpg",
        "driveId": "1KxwvPgL3BYqc4guHkJ339tV3yWeWLH_M",
        "kind": "poster",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Official Programme Poster"
      },
      {
        "id": "EVT_018_MEDIA_14",
        "src": "/events/EVT_018/posters/EVT_018_Poster_02_D5622AQEce79IFQ9E2A.jpg",
        "driveId": "1hS0M70IgXYLcTn-hWR0SeA2UE83K2Sxf",
        "kind": "poster",
        "caption": "ICIRI-2026 – International Conference on Integrated Research & Innovation (Indo-Thai Awards) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_019",
    "serialNumber": 19,
    "title": "\"How AI Turns Every Business into a Smart Business\" – First AI Session in Rasipuram",
    "sourceCategory": "Business Awareness Session – Keynote",
    "categories": [
      "AI & Emerging Technologies",
      "Professional & Industry Engagements",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2026,
    "programDate": "Sat, 21 Feb (2026 per post date), 4:00–6:00 PM",
    "institution": "Rasipuram AI Community in association with Yaa Creations",
    "venue": "Yaa Creations, Kendy Plaza, TVS Road, V Nagar, Rasipuram, Namakkal",
    "audience": "Local businesses and professionals",
    "topic": "Practical AI applications in business; real-world AI solutions",
    "role": "Speaker (Keynote)",
    "organizingOrganization": "Rasipuram AI Community; Yaa Creations (group partner company)",
    "linkedInPostDates": [
      "20 Feb 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7430497233936064512/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Convened by the Rasipuram AI Community in association with Yaa Creations in Namakkal district, this business learning and networking forum introduced local enterprises and professionals to practical Artificial Intelligence adoption.",
    "descriptionLine2": "Invited as the Keynote Speaker, my talk focused on real-world AI workflows and operational strategies that help everyday businesses modernise and scale intelligently.",
    "media": [
      {
        "id": "EVT_019_MEDIA_01",
        "src": "/events/EVT_019/posters/EVT_019_Poster_01_D5622AQFJADLd0jNNvw.jpg",
        "driveId": "134R_-0kEl9vvGP-SxofGOE-qNPx9HEGJ",
        "kind": "poster",
        "caption": "\"How AI Turns Every Business into a Smart Business\" – First AI Session in Rasipuram — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_020",
    "serialNumber": 20,
    "title": "Olimayam 4.0 – 36-Hour Startup Boot Camp (session: \"R&D Journey: Creating Solutions at Trueline Research\")",
    "sourceCategory": "Startup Bootcamp – Session & Knowledge Partner",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation",
      "Workshops & Training"
    ],
    "year": 2025,
    "programDate": "23–24 Dec 2025 (his session 24 Dec, 2:00–2:15 PM)",
    "institution": "K.S. Rangasamy College of Technology; organised by Young Indians (Yi), CII, StartupTN, KSRCT and CII Southern Region",
    "venue": "K.S. Rangasamy College of Technology, Tiruchengode, Namakkal",
    "audience": "Student innovators",
    "topic": "R&D journey; startup ideas; pitching",
    "role": "Speaker; Trueline Research as Knowledge Partner",
    "organizingOrganization": "Young Indians / CII / StartupTN / KSRCT; Trueline Research (Knowledge Partner)",
    "linkedInPostDates": [
      "01 Dec 2025",
      "23 Dec 2025",
      "04 Feb 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7401179813144797184/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7409122527916093440/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7424847124250382337/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised at K.S. Rangasamy College of Technology by Young Indians, CII, StartupTN, and KSRCT, Olimayam 4.0 was a 36-hour startup boot camp immersing student innovators in ideation, R&D problem-solving, and venture pitching.",
    "descriptionLine2": "With Trueline Research serving as Knowledge Partner, I was scheduled to present a dedicated session sharing our R&D journey in building applied innovation solutions.",
    "media": [
      {
        "id": "EVT_020_MEDIA_01",
        "src": "/events/EVT_020/posters/EVT_020_Poster_01_D4E22AQG-WQo5CVmuJw.jpg",
        "driveId": "1c5aa_PlI7PDGfzRvHEjTu_5rEuOljKUM",
        "kind": "poster",
        "caption": "Olimayam 4.0 – 36-Hour Startup Boot Camp (session: \"R&D Journey: Creating Solutions at Trueline Research\") — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_021",
    "serialNumber": 21,
    "title": "Beyond Odyssey 2.0 – A Startup Leadership Conclave",
    "sourceCategory": "Conclave (Entrepreneurship)",
    "categories": [
      "Conferences & Summits",
      "Entrepreneurship & Startups",
      "AI & Emerging Technologies"
    ],
    "year": 2026,
    "programDate": "21 Jan 2026",
    "institution": "Stella Mary's College of Engineering (Autonomous) – Dept. of Management Studies, with StartupTN and SMIIF",
    "venue": "Nagercoil",
    "audience": "Startup founders, industry leaders, educators and aspiring entrepreneurs",
    "topic": "Leadership; AI-driven innovation; building scalable startups; industry–academia collaboration",
    "role": "Speaker",
    "organizingOrganization": "Stella Mary's College of Engineering / SMIIF / StartupTN",
    "linkedInPostDates": [
      "16 Jan 2026",
      "20 Jan 2026",
      "26 Jan 2026"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7417965878882885633/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7419259328559362048/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7421512712821858305/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted in Nagercoil by Stella Mary's College of Engineering alongside StartupTN and SMIIF, Beyond Odyssey 2.0 convened startup founders, industry leaders, educators, and aspiring entrepreneurs around scalable venture leadership.",
    "descriptionLine2": "I spoke at the conclave on AI-driven innovation, entrepreneurial leadership, and building sustained collaboration between academic institutions and emerging startups.",
    "media": [
      {
        "id": "EVT_021_MEDIA_01",
        "src": "/events/EVT_021/posters/EVT_021_Poster_01_D5622AQG3otfLtbJWzA.jpg",
        "driveId": "1eyz7KciFQbmtHx_iDMhjDCUmQGbVMYA5",
        "kind": "poster",
        "caption": "Beyond Odyssey 2.0 – A Startup Leadership Conclave — Official Programme Poster"
      },
      {
        "id": "EVT_021_MEDIA_02",
        "src": "/events/EVT_021/posters/EVT_021_Poster_02_D5622AQH-K0sj7pLDbA.jpg",
        "driveId": "19jCnza5kITxPrTPjCVhNKjSrffk2u-2z",
        "kind": "poster",
        "caption": "Beyond Odyssey 2.0 – A Startup Leadership Conclave — Official Programme Poster"
      },
      {
        "id": "EVT_021_MEDIA_03",
        "src": "/events/EVT_021/posters/EVT_021_Poster_03_D5622AQH3Q8fzacj06g.jpg",
        "driveId": "1w71RZyDGVCojGj6XT3XQ9UnxtRhnuzDL",
        "kind": "poster",
        "caption": "Beyond Odyssey 2.0 – A Startup Leadership Conclave — Official Programme Poster"
      },
      {
        "id": "EVT_021_MEDIA_04",
        "src": "/events/EVT_021/posters/EVT_021_Poster_04_D5622AQFilYkpnJxvqA.jpg",
        "driveId": "1jlxETx15IA4YpN9_KU3JF5t9XcY_BmQK",
        "kind": "poster",
        "caption": "Beyond Odyssey 2.0 – A Startup Leadership Conclave — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_022",
    "serialNumber": 22,
    "title": "One-Day Symposium – \"AI Impact on Business & Society\"",
    "sourceCategory": "Symposium – Keynote",
    "categories": [
      "AI & Emerging Technologies",
      "Guest Lectures & Keynote Sessions",
      "Conferences & Summits"
    ],
    "year": 2025,
    "programDate": "17 Sep 2025",
    "institution": "SakthiKailash Women's College – School of Commerce",
    "venue": "Dharmapuri",
    "audience": "Commerce students",
    "topic": "AI-driven digital leadership; innovation ecosystems; AI careers and entrepreneurship for commerce students",
    "role": "Speaker (Keynote)",
    "organizingOrganization": "SakthiKailash Women's College",
    "linkedInPostDates": [
      "17 Sep 2025",
      "11 Nov 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7373898725372395520/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7393995430625214465/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the School of Commerce at SakthiKailash Women's College in Dharmapuri, this one-day symposium explored how Artificial Intelligence is reshaping commerce, digital leadership, and societal transformation.",
    "descriptionLine2": "I delivered the keynote address, introducing commerce students to AI-enabled career avenues, entrepreneurial opportunities, and inclusive innovation ecosystems.",
    "media": [
      {
        "id": "EVT_022_MEDIA_01",
        "src": "/events/EVT_022/posters/EVT_022_Poster_01_D5622AQGnwmemfJoYcQ.jpg",
        "driveId": "13YVo89TtSKBZjzzAWvOsBISxhTUoGng2",
        "kind": "poster",
        "caption": "One-Day Symposium – \"AI Impact on Business & Society\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_023",
    "serialNumber": 23,
    "title": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth",
    "sourceCategory": "Faculty & Student Session (AI for Research)",
    "categories": [
      "AI & Emerging Technologies",
      "Research & Innovation",
      "Faculty Development Programmes"
    ],
    "year": 2025,
    "programDate": "5 Jul 2025",
    "institution": "Vivekananda College of Arts and Science for Women, with Young Indians (Yi) Salem Chapter (CII) – Bharat Rising initiative",
    "venue": "Tiruchengode",
    "audience": "Faculty and students",
    "topic": "AI-driven research platforms and productivity tools; innovation strategies; funding, publishing and academic-industry collaboration",
    "role": "Trainer (Session Lead)",
    "organizingOrganization": "Young Indians (Yi) Salem Chapter with Vivekananda College; led by Dr. Nagaraj V (Trueline Research)",
    "linkedInPostDates": [
      "05 Nov 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7391799957181165568/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Conducted at Vivekananda College of Arts and Science for Women in Tiruchengode with the Young Indians (Yi) Salem Chapter under CII’s Bharat Rising initiative, this programme examined AI research platforms and academic growth strategies.",
    "descriptionLine2": "I led the session as Trainer, guiding faculty and students through AI productivity tools, research funding avenues, scholarly publishing, and industry-academia collaboration.",
    "media": [
      {
        "id": "EVT_023_MEDIA_01",
        "src": "/events/EVT_023/photos/EVT_023_Photo_01_D5622AQF4OWPlu3bBnQ.jpg",
        "driveId": "1J8cVg8xWRR1675f5gmG51U6h9zxnilew",
        "kind": "photo",
        "caption": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth — Vivekananda College of Arts and Science for Women, with Young Indians (Yi) Salem Chapter (CII) – Bharat Rising initiative"
      },
      {
        "id": "EVT_023_MEDIA_02",
        "src": "/events/EVT_023/photos/EVT_023_Photo_02_D5622AQENN-A3Llwgwg.jpg",
        "driveId": "13sXDalssdpDOmByx80XD8Fr6ZPKO10F6",
        "kind": "photo",
        "caption": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth — Vivekananda College of Arts and Science for Women, with Young Indians (Yi) Salem Chapter (CII) – Bharat Rising initiative"
      },
      {
        "id": "EVT_023_MEDIA_03",
        "src": "/events/EVT_023/photos/EVT_023_Photo_03_D5622AQG5HZpmnFqOsg.jpg",
        "driveId": "1eOWpG0xBpQEMJqL5JjkBYAKJAzzVcS7S",
        "kind": "photo",
        "caption": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth — Vivekananda College of Arts and Science for Women, with Young Indians (Yi) Salem Chapter (CII) – Bharat Rising initiative"
      },
      {
        "id": "EVT_023_MEDIA_04",
        "src": "/events/EVT_023/posters/EVT_023_Poster_01_D5622AQFm5D7dOonRfA.jpg",
        "driveId": "1d2EKYX-PH-vx6yoAPb_Kqw9A2HHUUeCz",
        "kind": "poster",
        "caption": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth — Official Programme Poster"
      },
      {
        "id": "EVT_023_MEDIA_05",
        "src": "/events/EVT_023/posters/EVT_023_Poster_02_D5622AQGrA2gYJRnU-A.jpg",
        "driveId": "1eQwtF-yjav2MqTAecm-yh9aRTsybEGh4",
        "kind": "poster",
        "caption": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth — Official Programme Poster"
      },
      {
        "id": "EVT_023_MEDIA_06",
        "src": "/events/EVT_023/posters/EVT_023_Poster_03_D5622AQH0BYSAw4AyQw.jpg",
        "driveId": "1gNVTte1FWy_Z0IWzDv_c09UuHnwXtadQ",
        "kind": "poster",
        "caption": "Research Revolution: AI Technologies for Innovation, Startups & Academic Growth — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_024",
    "serialNumber": 24,
    "title": "Faculty Development Programme – AI-Powered Research Tools & Research Planning",
    "sourceCategory": "Faculty Development Programme (FDP)",
    "categories": [
      "Faculty Development Programmes",
      "AI & Emerging Technologies",
      "Research & Innovation"
    ],
    "year": 2025,
    "programDate": "July 2025",
    "institution": "Sri Shanmugha Educational Institutions",
    "venue": null,
    "audience": "Faculty",
    "topic": "AI-powered research tools; research planning & publication support; national and international funding schemes",
    "role": "Organizer & Trainer",
    "organizingOrganization": "Trueline Research Pvt. Ltd.",
    "linkedInPostDates": [
      "30 Oct 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7389626829508132864/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Conducted at Sri Shanmugha Educational Institutions, this Faculty Development Programme equipped educators with AI-powered research tools, structured research planning methods, and guidance on national and international grant schemes.",
    "descriptionLine2": "Through Trueline Research Private Limited, I organised and led the programme as Trainer, supporting faculty members in strengthening publication quality and funded research readiness.",
    "media": []
  },
  {
    "id": "EVT_025",
    "serialNumber": 25,
    "title": "Vibathon 2025 – AI-Based Hackathon",
    "sourceCategory": "Hackathon (Jury / Evaluation)",
    "categories": [
      "Jury & Mentorship Activities",
      "AI & Emerging Technologies"
    ],
    "year": 2025,
    "programDate": "26 Sep 2025",
    "institution": "K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe",
    "venue": "Emerald Hall, K.S.R. College of Engineering",
    "audience": "Student teams (40 teams)",
    "topic": "Vibe coding; AI-based solutions",
    "role": "Jury Member",
    "organizingOrganization": "StartNet Vibe (StartNet – group partner company)",
    "linkedInPostDates": [
      "24 Sep 2025",
      "04 Oct 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7376602145380339712/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7380288037873840128/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by StartNet Vibe at Emerald Hall, K.S.R. College of Engineering, Vibathon 2025 engaged 40 student teams in rapid vibe coding and building applied AI-based software solutions.",
    "descriptionLine2": "I served as a Jury Member for the hackathon, evaluating AI prototypes and offering constructive product feedback to competing student developers.",
    "media": [
      {
        "id": "EVT_025_MEDIA_01",
        "src": "/events/EVT_025/photos/EVT_025_Photo_01_D5622AQFhZpC2-t_1ag.jpg",
        "driveId": "18zgVdMJizGZUProp-kFe9xgblwh3Io-L",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_02",
        "src": "/events/EVT_025/photos/EVT_025_Photo_02_D5622AQGHWcdvorpm-w.jpg",
        "driveId": "1KToGJDXIlIH-QosKDUmHV9m0Mg7GSTmt",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_03",
        "src": "/events/EVT_025/photos/EVT_025_Photo_03_D5622AQGbONa1Evbmpw.jpg",
        "driveId": "161ctMVysCZhhyX9dQBWhYss8kH7jG5Bh",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_04",
        "src": "/events/EVT_025/photos/EVT_025_Photo_04_D5622AQG-i0DEWb7Urw.jpg",
        "driveId": "19B5M0h1NSSEl9bTXG3VoP-Pytejc0OPj",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_05",
        "src": "/events/EVT_025/photos/EVT_025_Photo_05_D5622AQEwFsjbVYOnMg.jpg",
        "driveId": "15UoD3678xrOvD64xhJdDHqUU3F-DXQQA",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_06",
        "src": "/events/EVT_025/photos/EVT_025_Photo_06_D5622AQGfmue4nAGBhA.jpg",
        "driveId": "1l1mLa-bkX7Kh0y9kEaBIETIbvARF51KG",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_07",
        "src": "/events/EVT_025/photos/EVT_025_Photo_07_D5622AQE3MSAZNRDnog.jpg",
        "driveId": "1LCwve7MOecNhXnSeMHaaJtHYihrEYg1-",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_08",
        "src": "/events/EVT_025/photos/EVT_025_Photo_08_D5622AQFh_jP0Tp3miQ.jpg",
        "driveId": "1-PtDSRgBfO-yxg2uR48g0SKn44Ppw2_7",
        "kind": "photo",
        "caption": "Vibathon 2025 – AI-Based Hackathon — K.S.R. College of Engineering (Autonomous); organised by StartNet Vibe"
      },
      {
        "id": "EVT_025_MEDIA_09",
        "src": "/events/EVT_025/posters/EVT_025_Poster_01_D5622AQGEgCVSc61Hyg.jpg",
        "driveId": "1QetYvX-p4rPPpKjfSNgI0WtQm9GRCxtE",
        "kind": "poster",
        "caption": "Vibathon 2025 – AI-Based Hackathon — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_026",
    "serialNumber": 26,
    "title": "\"Accelerators / Incubation – Opportunities for Students & Faculties\"",
    "sourceCategory": "Seminar / Session (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2025,
    "programDate": "19 Sep 2025, 10:00 AM",
    "institution": "The Kavery Engineering College",
    "venue": "APJ Abdul Kalam Hall, The Kavery Engineering College",
    "audience": "Students and faculty of ECE & IEI Student Chapters",
    "topic": "Startups, incubators and accelerators for students and faculty",
    "role": "Speaker (Session Speaker)",
    "organizingOrganization": "The Kavery Engineering College",
    "linkedInPostDates": [
      "19 Sep 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7374667976920219648/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Hosted at APJ Abdul Kalam Hall at The Kavery Engineering College for ECE and IEI Student Chapters, this seminar examined startup incubation and accelerator pathways within higher education.",
    "descriptionLine2": "Named as Session Speaker, I focused the presentation on how students and faculty members can leverage incubators and accelerators to advance early-stage ventures.",
    "media": [
      {
        "id": "EVT_026_MEDIA_01",
        "src": "/events/EVT_026/posters/EVT_026_Poster_01_D5622AQEcYvLlAyydDg.jpg",
        "driveId": "1nT4MmNM2iKVuALGRoeEM9E9pbjudwRvC",
        "kind": "poster",
        "caption": "\"Accelerators / Incubation – Opportunities for Students & Faculties\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_027",
    "serialNumber": 27,
    "title": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\"",
    "sourceCategory": "Webinar (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions",
      "Research & Innovation"
    ],
    "year": 2025,
    "programDate": null,
    "institution": "Madanapalle Institute of Technology & Science (MITS), Deemed University",
    "venue": "Madanapalle, Annamayya District, Andhra Pradesh (online)",
    "audience": "Computer Science & Engineering students",
    "topic": "Startup ecosystem; transforming academic ideas into enterprises",
    "role": "Speaker",
    "organizingOrganization": "MITS",
    "linkedInPostDates": [
      "27 Aug 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7366431072911314944/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted online by Madanapalle Institute of Technology & Science (Deemed University) in Andhra Pradesh, this webinar introduced Computer Science and Engineering students to startup ecosystems and enterprise creation.",
    "descriptionLine2": "I delivered the session as Speaker, guiding students on validating academic innovations and translating promising technical projects into sustainable enterprises.",
    "media": [
      {
        "id": "EVT_027_MEDIA_01",
        "src": "/events/EVT_027/photos/EVT_027_Photo_01_D5622AQGssN1ibxXNKw.jpg",
        "driveId": "1LWhfCJAsCooMUo7zXRulgPmefpaOXza_",
        "kind": "photo",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Madanapalle Institute of Technology & Science (MITS), Deemed University"
      },
      {
        "id": "EVT_027_MEDIA_02",
        "src": "/events/EVT_027/photos/EVT_027_Photo_02_D5622AQEtQKcIzCNoXg.jpg",
        "driveId": "1_dqQlwBtoLKNwYKoojlPIB_VyGOFRMmi",
        "kind": "photo",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Madanapalle Institute of Technology & Science (MITS), Deemed University"
      },
      {
        "id": "EVT_027_MEDIA_03",
        "src": "/events/EVT_027/photos/EVT_027_Photo_03_D5622AQEUiox6_3ORcA.jpg",
        "driveId": "1vJVn5VaoZmcLclRgSeQ7DMWvZWpDY4SL",
        "kind": "photo",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Madanapalle Institute of Technology & Science (MITS), Deemed University"
      },
      {
        "id": "EVT_027_MEDIA_04",
        "src": "/events/EVT_027/photos/EVT_027_Photo_04_D5622AQEvNcahryCVgg.jpg",
        "driveId": "1krk0XKnNt3u3cGnp358rGEVSBPOvvY53",
        "kind": "photo",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Madanapalle Institute of Technology & Science (MITS), Deemed University"
      },
      {
        "id": "EVT_027_MEDIA_05",
        "src": "/events/EVT_027/photos/EVT_027_Photo_05_D5622AQH00cvFGieI6Q.jpg",
        "driveId": "1nwtv5QpTxn4AxfoGg51-6DXKWVlmW83C",
        "kind": "photo",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Madanapalle Institute of Technology & Science (MITS), Deemed University"
      },
      {
        "id": "EVT_027_MEDIA_06",
        "src": "/events/EVT_027/photos/EVT_027_Photo_06_D5622AQEfbWKdLgC7MA.jpg",
        "driveId": "1osQfnjfNlvgWO3j2gHrKYk6tcdnW4JSq",
        "kind": "photo",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Madanapalle Institute of Technology & Science (MITS), Deemed University"
      },
      {
        "id": "EVT_027_MEDIA_07",
        "src": "/events/EVT_027/posters/EVT_027_Poster_01_D5622AQFSx1VVuQE16w.jpg",
        "driveId": "10TFUULkcHkUCNBGpHhWz3vNioD4nQm1m",
        "kind": "poster",
        "caption": "Webinar – \"From Innovation to Startup: Transforming Ideas into Enterprises\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_028",
    "serialNumber": 28,
    "title": "\"Bridging Technology: AI Tools for the Civil Engineer's Toolkit\"",
    "sourceCategory": "Professional Talk",
    "categories": [
      "AI & Emerging Technologies",
      "Professional & Industry Engagements",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2025,
    "programDate": "13 Aug 2025",
    "institution": "Association of Consulting Civil Engineers (ACCE) India – Salem Centre",
    "venue": "Travellers Inn, Sarada College, Salem",
    "audience": "Civil engineering professionals",
    "topic": "AI tools for civil engineering",
    "role": "Speaker (Guest)",
    "organizingOrganization": "ACCE (India) – Salem Centre",
    "linkedInPostDates": [
      "13 Aug 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7361343565760794624/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Association of Consulting Civil Engineers (India) – Salem Centre, this professional technical talk explored practical Artificial Intelligence tools relevant to civil engineering planning and execution.",
    "descriptionLine2": "I delivered an interactive guest session for practising civil engineers on integrating modern AI workflows into their professional engineering toolkit.",
    "media": [
      {
        "id": "EVT_028_MEDIA_01",
        "src": "/events/EVT_028/posters/EVT_028_Poster_01_D5622AQF9fUvEQCKsIQ.jpg",
        "driveId": "1RXuyuCOvXkylTg8KSa9X3PiEWQ-902_2",
        "kind": "poster",
        "caption": "\"Bridging Technology: AI Tools for the Civil Engineer's Toolkit\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_029",
    "serialNumber": 29,
    "title": "Vibe Marketing Summit (1st edition)",
    "sourceCategory": "Summit (Organised)",
    "categories": [
      "Conferences & Summits",
      "AI & Emerging Technologies",
      "Entrepreneurship & Startups"
    ],
    "year": 2025,
    "programDate": "26 Jul 2025",
    "institution": "StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation",
    "venue": "Sona Incubation Foundation, Salem",
    "audience": "Students, marketers, entrepreneurs (150+)",
    "topic": "AI-enhanced marketing; marketing automation; AI tools",
    "role": null,
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (organiser per StartNet Vibe post)",
    "linkedInPostDates": [
      "24 Jul 2025",
      "28 Jul 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7354128086625390594/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7355548706751877121/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – StartNet event; personal role not stated",
    "descriptionLine1": "Organised by StartNet Ventures Private Limited under the StartNet Vibe initiative in association with Sona Incubation Foundation in Salem, this inaugural summit explored AI-enhanced marketing and automation tools for students, marketers, and entrepreneurs.",
    "descriptionLine2": "Through our StartNet Ventures ecosystem partnership, I supported and shared this summit initiative advancing applied AI adoption across regional marketing and startup communities.",
    "media": [
      {
        "id": "EVT_029_MEDIA_01",
        "src": "/events/EVT_029/photos/EVT_029_Photo_01_D5622AQHux5-9Muo3QA.jpg",
        "driveId": "1ixGJFNTKoWiGQIzM-F7T_nEH_jxHzBgB",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_02",
        "src": "/events/EVT_029/photos/EVT_029_Photo_02_D5622AQG6Y_71t4z9LQ.jpg",
        "driveId": "1y-zaXWIP3N2FCzpMUw4yMedjXQNg0zaW",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_03",
        "src": "/events/EVT_029/photos/EVT_029_Photo_03_D5622AQHsDV1NtCU6jw.jpg",
        "driveId": "1yk07C8XK-1ImRDTOfpPN9fhXkB1l8QsQ",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_04",
        "src": "/events/EVT_029/photos/EVT_029_Photo_04_D5622AQEn1FWi3xIGrQ.jpg",
        "driveId": "1TfEHvlDbZFnO4w1D8BHosVLBVQxxc2SG",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_05",
        "src": "/events/EVT_029/photos/EVT_029_Photo_05_D5622AQHqeSWdi8PpJg.jpg",
        "driveId": "1Kmy8P3YSnyA1NQUIeiVOejOW9bjnTJPS",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_06",
        "src": "/events/EVT_029/photos/EVT_029_Photo_06_D5622AQFBwXTJxWC9qg.jpg",
        "driveId": "1-rr9Hcuey86xnfJ4ceHIEUxufo2L3BY-",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_07",
        "src": "/events/EVT_029/photos/EVT_029_Photo_07_D5622AQFXBDIXRFXB6g.jpg",
        "driveId": "1TlpVYC099qguStnuhgOYZ1vetM5VEAht",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_08",
        "src": "/events/EVT_029/photos/EVT_029_Photo_08_D5622AQHzw7lHpw6A9Q.jpg",
        "driveId": "1vWNY1PmJac1o06W4-PEC5FoYZr93S_sn",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_09",
        "src": "/events/EVT_029/photos/EVT_029_Photo_09_D5622AQHRTxwHoGg6Ug.jpg",
        "driveId": "18nXcm1bxOEVHnp8c4MYyWw-XdwPJ8hUV",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_10",
        "src": "/events/EVT_029/photos/EVT_029_Photo_10_D5622AQEwvfxYrwjYGA.jpg",
        "driveId": "1R9-P9VCSRxG-QJaUH8NzsydwiqtlssOh",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_11",
        "src": "/events/EVT_029/photos/EVT_029_Photo_11_D5622AQHBCc-hkKCAnA.jpg",
        "driveId": "1P3GEhTO8YnCHS71qR7MgU3shXyq31mRO",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_12",
        "src": "/events/EVT_029/photos/EVT_029_Photo_12_D5622AQEPq0Y2cnFJjw.jpg",
        "driveId": "1_ipoAF6XhI6QJmhIEWKLQhUr-UVcZBrn",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_13",
        "src": "/events/EVT_029/photos/EVT_029_Photo_13_D5622AQGYhkwVM8dRxA.jpg",
        "driveId": "1FX_EbOdBB7NuuBz0izZe7chZkDGGU-0c",
        "kind": "photo",
        "caption": "Vibe Marketing Summit (1st edition) — StartNet Vibe / StartNet Ventures Pvt. Ltd. with Sona Incubation Foundation"
      },
      {
        "id": "EVT_029_MEDIA_14",
        "src": "/events/EVT_029/posters/EVT_029_Poster_01_D5622AQHLnK7oQinrew.jpg",
        "driveId": "1SPXLIH8bWUu-XQnsqmt4GYJx04uiS2i6",
        "kind": "poster",
        "caption": "Vibe Marketing Summit (1st edition) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_030",
    "serialNumber": 30,
    "title": "Vibe Coding Summit (Coimbatore)",
    "sourceCategory": "Summit (Organised)",
    "categories": [
      "Conferences & Summits",
      "AI & Emerging Technologies",
      "Entrepreneurship & Startups"
    ],
    "year": 2025,
    "programDate": "14 Jun 2025",
    "institution": "StartNet Vibe",
    "venue": "Coimbatore",
    "audience": "Entrepreneurs, developers",
    "topic": "AI-powered MVP development; vibe coding",
    "role": null,
    "organizingOrganization": "StartNet Vibe (StartNet)",
    "linkedInPostDates": [
      "12 Jun 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7338838712870416385/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – StartNet event; personal role not stated",
    "descriptionLine1": "Presented in Coimbatore by StartNet Vibe, this technology summit brought together entrepreneurs and developers around AI-powered minimum viable product development and modern vibe coding practices.",
    "descriptionLine2": "Connected through the StartNet ecosystem, I supported outreach for this developer and founder gathering focused on accelerating AI-assisted product creation.",
    "media": [
      {
        "id": "EVT_030_MEDIA_01",
        "src": "/events/EVT_030/posters/EVT_030_Poster_01_D5622AQFLdtCv8xlPtw.jpg",
        "driveId": "1pjOyL8h59B1jbI-26Zy37W8nvp1f74MS",
        "kind": "poster",
        "caption": "Vibe Coding Summit (Coimbatore) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_031",
    "serialNumber": 31,
    "title": "One-Day Seminar on IPR – \"Demystifying Intellectual Property: Rights, Protection, and Compliance\"",
    "sourceCategory": "Seminar (IPR)",
    "categories": [
      "Intellectual Property Rights"
    ],
    "year": 2025,
    "programDate": "8 Apr 2025, 10:00 AM",
    "institution": "Government Arts College (Autonomous), Salem – Dept. of Business Administration with IIC",
    "venue": "Seminar Hall, MGR Building, Government Arts College, Salem",
    "audience": null,
    "topic": "IP rights, protection and compliance",
    "role": null,
    "organizingOrganization": "Government Arts College (Autonomous), Salem",
    "linkedInPostDates": [
      "08 Apr 2025"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7315194658156879872/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – role not stated",
    "descriptionLine1": "Hosted by the Department of Business Administration and Institution’s Innovation Council at Government Arts College (Autonomous), Salem, this one-day seminar examined intellectual property rights, protection mechanisms, and regulatory compliance.",
    "descriptionLine2": "I participated in and contributed to this academic initiative supporting institutional awareness of intellectual property frameworks.",
    "media": [
      {
        "id": "EVT_031_MEDIA_01",
        "src": "/events/EVT_031/posters/EVT_031_Poster_01_D5622AQEeVnLl8gxLvg.jpg",
        "driveId": "1p1UkVKEJiI5FiqS0wgANiXobns7Dwgrw",
        "kind": "poster",
        "caption": "One-Day Seminar on IPR – \"Demystifying Intellectual Property: Rights, Protection, and Compliance\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_032",
    "serialNumber": 32,
    "title": "NIRF Higher Ed Summit: Coimbatore 2024",
    "sourceCategory": "Summit – Featured Speaker",
    "categories": [
      "Conferences & Summits",
      "Research & Innovation",
      "Professional & Industry Engagements"
    ],
    "year": 2024,
    "programDate": "19 Oct 2024, 9:30 AM–5:00 PM",
    "institution": null,
    "venue": "Hotel Le Meridien, Coimbatore",
    "audience": "Education leaders, institutions",
    "topic": "Decoding NIRF; boosting institutional rankings",
    "role": "Speaker (Featured Speaker)",
    "organizingOrganization": null,
    "linkedInPostDates": [
      "16 Oct 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7252290149391163393/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Convened at Hotel Le Meridien in Coimbatore for higher-education leaders and academic institutions, this summit focused on decoding National Institutional Ranking Framework (NIRF) methodologies and institutional excellence benchmarks.",
    "descriptionLine2": "Named among the Featured Speakers as Managing Director and Founder of Trueline Research Private Limited, my focus centred on strategic approaches to strengthening research output and institutional rankings.",
    "media": [
      {
        "id": "EVT_032_MEDIA_01",
        "src": "/events/EVT_032/posters/EVT_032_Poster_01_D5622AQERZLk1aoj7jA.jpg",
        "driveId": "1VI7fy0Kyt1SSXxwRE1tDPyOpXZ4z_jQk",
        "kind": "poster",
        "caption": "NIRF Higher Ed Summit: Coimbatore 2024 — Official Programme Poster"
      },
      {
        "id": "EVT_032_MEDIA_02",
        "src": "/events/EVT_032/posters/EVT_032_Poster_02_D5622AQHM_9ePAlKH4w.jpg",
        "driveId": "1KFBvUyIcpfFt7xna6gokkPKLwEZrVNRd",
        "kind": "poster",
        "caption": "NIRF Higher Ed Summit: Coimbatore 2024 — Official Programme Poster"
      },
      {
        "id": "EVT_032_MEDIA_03",
        "src": "/events/EVT_032/posters/EVT_032_Poster_03_D5622AQGLQzTFNhSlSw.jpg",
        "driveId": "1zaKg74hNkeNOBnvOP2elcSh5ibjp6Dbg",
        "kind": "poster",
        "caption": "NIRF Higher Ed Summit: Coimbatore 2024 — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_033",
    "serialNumber": 33,
    "title": "Guest Lecture – \"Patents in the Digital Age: Safeguarding IT Inventions\"",
    "sourceCategory": "Guest Lecture (IPR)",
    "categories": [
      "Intellectual Property Rights",
      "Guest Lectures & Keynote Sessions",
      "AI & Emerging Technologies"
    ],
    "year": 2024,
    "programDate": "16 Oct 2024, 2:00–5:00 PM",
    "institution": "Sona College of Technology",
    "venue": "PG Auditorium, Sona College of Technology",
    "audience": "Students",
    "topic": "IT patents; digital IP protection; safeguarding software innovations; AI and patent law",
    "role": "Speaker (Guest Lecture)",
    "organizingOrganization": "Sona College of Technology",
    "linkedInPostDates": [
      "15 Oct 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7251948343814193152/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Scheduled at the PG Auditorium of Sona College of Technology, this guest lecture addressed digital intellectual property protection, software patentability, and emerging intersections between Artificial Intelligence and patent law.",
    "descriptionLine2": "Invited to present this Guest Lecture, I structured the session to help students understand practical safeguards for protecting information-technology inventions.",
    "media": [
      {
        "id": "EVT_033_MEDIA_01",
        "src": "/events/EVT_033/posters/EVT_033_Poster_01_D5622AQESAYTfTLQVag.jpg",
        "driveId": "10VCDZ4u6apHIzivXFl0BB69o_Vh3UoJ_",
        "kind": "poster",
        "caption": "Guest Lecture – \"Patents in the Digital Age: Safeguarding IT Inventions\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_034",
    "serialNumber": 34,
    "title": "Webinar – \"Building a Sustainable Startup: Balancing Profit with Purpose\"",
    "sourceCategory": "Webinar (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2024,
    "programDate": "10 Oct 2024, 3:00 PM",
    "institution": "Vel Tech – Institution's Innovation Council",
    "venue": "Online",
    "audience": "Aspiring entrepreneurs and startup founders",
    "topic": "Sustainable business models; aligning profit with social purpose; long-term strategy",
    "role": "Speaker",
    "organizingOrganization": "Vel Tech IIC",
    "linkedInPostDates": [
      "09 Oct 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7249707414357229569/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Hosted online by Vel Tech's Institution's Innovation Council for aspiring entrepreneurs and startup founders, this webinar examined sustainable business models that align commercial viability with societal purpose.",
    "descriptionLine2": "Featured as the webinar Speaker, my session addressed long-term venture strategy for building resilient, purpose-driven startups.",
    "media": [
      {
        "id": "EVT_034_MEDIA_01",
        "src": "/events/EVT_034/posters/EVT_034_Poster_01_D5622AQElUfjnTwPn2A.jpg",
        "driveId": "1sPxnQzHJBQB1frVDT5gCVypSHjesZ6JU",
        "kind": "poster",
        "caption": "Webinar – \"Building a Sustainable Startup: Balancing Profit with Purpose\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_035",
    "serialNumber": 35,
    "title": "Seminar on AI Innovations for IT Professionals (with IT Association Inauguration & MoU Exchange)",
    "sourceCategory": "Seminar (AI)",
    "categories": [
      "AI & Emerging Technologies",
      "Guest Lectures & Keynote Sessions",
      "Professional & Industry Engagements"
    ],
    "year": 2024,
    "programDate": "8 Oct 2024, 10:00 AM",
    "institution": "Selvam College of Technology (Autonomous) – Dept. of Information Technology",
    "venue": "EEE Seminar Hall, Selvam College of Technology",
    "audience": null,
    "topic": "AI innovations shaping the future of IT",
    "role": "Speaker (Resource Person)",
    "organizingOrganization": "Selvam College of Technology; MoU with Trueline Research",
    "linkedInPostDates": [
      "08 Oct 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7249232127823654912/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised by the Department of Information Technology at Selvam College of Technology alongside its IT Association inauguration and an institutional MoU exchange with Trueline Research, this seminar explored AI innovations transforming information technology.",
    "descriptionLine2": "Invited as the Resource Person, I focused the session on frontier Artificial Intelligence developments and academic-industry collaboration pathways.",
    "media": [
      {
        "id": "EVT_035_MEDIA_01",
        "src": "/events/EVT_035/posters/EVT_035_Poster_01_D5622AQG8CkkPBnaDxw.jpg",
        "driveId": "1CMwBRb-4P24aNHG2YMw0Bp5Ng47hvVZK",
        "kind": "poster",
        "caption": "Seminar on AI Innovations for IT Professionals (with IT Association Inauguration & MoU Exchange) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_036",
    "serialNumber": 36,
    "title": "AICTE ATAL Academy FDP – \"Scope of Data Analytics with Mathematical Applications\"",
    "sourceCategory": "Faculty Development Programme (FDP)",
    "categories": [
      "Faculty Development Programmes",
      "AI & Emerging Technologies",
      "Research & Innovation"
    ],
    "year": 2024,
    "programDate": "23 Sep 2024, 9:30 AM–12:00 PM",
    "institution": "Dr. SNS Rajalakshmi College of Arts and Science (AICTE Training & Learning (ATAL) Academy FDP)",
    "venue": "Coimbatore",
    "audience": "Faculty",
    "topic": "Integrating data analytics, mathematics and statistics for decision making",
    "role": "Speaker (FDP Resource Person)",
    "organizingOrganization": "AICTE ATAL Academy / Dr. SNS Rajalakshmi College of Arts and Science",
    "linkedInPostDates": [
      "22 Sep 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7243672810496139264/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Conducted under the AICTE Training and Learning (ATAL) Academy at Dr. SNS Rajalakshmi College of Arts and Science in Coimbatore, this Faculty Development Programme examined data analytics grounded in mathematical and statistical foundations.",
    "descriptionLine2": "Invited as an FDP Resource Person, I prepared perspectives for faculty participants on integrating quantitative analytics into modern research and decision-making.",
    "media": []
  },
  {
    "id": "EVT_037",
    "serialNumber": 37,
    "title": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event)",
    "sourceCategory": "Pitching Event (Jury / Evaluation)",
    "categories": [
      "Jury & Mentorship Activities",
      "Entrepreneurship & Startups"
    ],
    "year": 2024,
    "programDate": "13 Sep 2024",
    "institution": "StartupTN Salem Regional Hub",
    "venue": "Salem",
    "audience": "Aspiring entrepreneurs and students from Salem and Namakkal",
    "topic": "Idea validation; startup pitches",
    "role": "Jury Member",
    "organizingOrganization": "StartupTN",
    "linkedInPostDates": [
      "14 Sep 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7240707504022691840/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted in Salem by the StartupTN Salem Regional Hub, Aadukalam 1.0 brought together aspiring entrepreneurs and student founders from Salem and Namakkal for structured startup pitch evaluations and idea validation.",
    "descriptionLine2": "I served as a Jury Member for the pitching forum, assessing early-stage venture concepts and mentoring founders on problem-solution fit.",
    "media": [
      {
        "id": "EVT_037_MEDIA_01",
        "src": "/events/EVT_037/photos/EVT_037_Photo_01_D5622AQFAN6Fci6HlgA.jpg",
        "driveId": "142XCJdNVY-PI89dTKeNM6mN3E1CKIZug",
        "kind": "photo",
        "caption": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event) — StartupTN Salem Regional Hub"
      },
      {
        "id": "EVT_037_MEDIA_02",
        "src": "/events/EVT_037/photos/EVT_037_Photo_02_D5622AQH-4w0XIy-dXg.jpg",
        "driveId": "1Q9TSHvhi1eRc-PRR_mcUeU3x7PewuIFj",
        "kind": "photo",
        "caption": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event) — StartupTN Salem Regional Hub"
      },
      {
        "id": "EVT_037_MEDIA_03",
        "src": "/events/EVT_037/photos/EVT_037_Photo_03_D5622AQEK44XETeJeug.jpg",
        "driveId": "1eXczO4iHzD5gxl-zI_PCEjUeEv_my-Vj",
        "kind": "photo",
        "caption": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event) — StartupTN Salem Regional Hub"
      },
      {
        "id": "EVT_037_MEDIA_04",
        "src": "/events/EVT_037/photos/EVT_037_Photo_04_D5622AQF5QFC4maHWsg.jpg",
        "driveId": "1gW2Hfq6omv0oDQ1nrnRWGioFWiGGzjoF",
        "kind": "photo",
        "caption": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event) — StartupTN Salem Regional Hub"
      },
      {
        "id": "EVT_037_MEDIA_05",
        "src": "/events/EVT_037/photos/EVT_037_Photo_05_D5622AQE6Fo5FNTgNGQ.jpg",
        "driveId": "1psYixlIykm00wD7rB_6-0McMVzM17u05",
        "kind": "photo",
        "caption": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event) — StartupTN Salem Regional Hub"
      },
      {
        "id": "EVT_037_MEDIA_06",
        "src": "/events/EVT_037/photos/EVT_037_Photo_06_D5622AQHFiyIDGgdOFw.jpg",
        "driveId": "1tYEm9piVkzekBKFNKWE6boQi-DdaL5Hl",
        "kind": "photo",
        "caption": "Aadukalam 1.0 – Salem Edition (Idea Validation Pitching Event) — StartupTN Salem Regional Hub"
      }
    ]
  },
  {
    "id": "EVT_038",
    "serialNumber": 38,
    "title": "Seminar – \"Execution of Innovative Ideas\"",
    "sourceCategory": "Seminar (Entrepreneurship)",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2024,
    "programDate": "11 Sep 2024, 10:00 AM",
    "institution": "Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC",
    "venue": "Dr. J.K.K. Angappa Chettiar Memorial Auditorium, Salem Sowdeswari College",
    "audience": "Students; aspiring women entrepreneurs",
    "topic": "Innovation process; executing business ideas; entrepreneurship",
    "role": "Speaker",
    "organizingOrganization": "Salem Sowdeswari College (For Women)",
    "linkedInPostDates": [
      "10 Sep 2024",
      "13 Sep 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7239296740363771904/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7240184727624695808/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of Corporate Secretaryship and Entrepreneurship Development Cell at Salem Sowdeswari College (For Women), this seminar guided students and aspiring women founders on translating innovative ideas into executable ventures.",
    "descriptionLine2": "I delivered the seminar session as Speaker, sharing actionable frameworks for navigating the innovation process and executing business concepts with clarity.",
    "media": [
      {
        "id": "EVT_038_MEDIA_01",
        "src": "/events/EVT_038/photos/EVT_038_Photo_01_D5622AQFGP5pjdp6qvg.jpg",
        "driveId": "1ZIigYweExLUy6pULR3t3NaxT6jHzVnVo",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_02",
        "src": "/events/EVT_038/photos/EVT_038_Photo_02_D5622AQFiWI2Frmqrvw.jpg",
        "driveId": "1bGuhnLEL0o47AX2cicSkxoglpgG_EpJY",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_03",
        "src": "/events/EVT_038/photos/EVT_038_Photo_03_D5622AQGgkwDsEBN0fA.jpg",
        "driveId": "1qmoaD-Ge6JzENY-Mikh1M7ei2FEQ16nE",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_04",
        "src": "/events/EVT_038/photos/EVT_038_Photo_04_D5622AQFKjWznfwEO7Q.jpg",
        "driveId": "1EIBTNZGY5D1MivOvsgkKXNfzbu12y_0i",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_05",
        "src": "/events/EVT_038/photos/EVT_038_Photo_05_D5622AQG_BogeXpm6IA.jpg",
        "driveId": "1c2RjntrrT4CBcV_dccRhtKtbh715nhyx",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_06",
        "src": "/events/EVT_038/photos/EVT_038_Photo_06_D5622AQH7rqUL-9r0GA.jpg",
        "driveId": "1muxGGR01CQyD56VRs0Asg2b-Ya4CEH6L",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_07",
        "src": "/events/EVT_038/photos/EVT_038_Photo_07_D5622AQFPn1_vhERpRQ.jpg",
        "driveId": "1ummqiGgpGVChoflefrD_XAv4QQGyjTJD",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      },
      {
        "id": "EVT_038_MEDIA_08",
        "src": "/events/EVT_038/photos/EVT_038_Photo_08_D5622AQGTrPxnwg5DGA.jpg",
        "driveId": "1Fv5zYy0YUsBaFZKCSZA_nYBMeNfwhUWm",
        "kind": "photo",
        "caption": "Seminar – \"Execution of Innovative Ideas\" — Salem Sowdeswari College (For Women) – Dept. of Corporate Secretaryship & EDC"
      }
    ]
  },
  {
    "id": "EVT_039",
    "serialNumber": 39,
    "title": "IIC Mentor-Mentee Program 2023-24 – \"Accelerators Opportunities for Students and Faculties – Early Stage Entrepreneurs\"",
    "sourceCategory": "Virtual Session (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Jury & Mentorship Activities",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2024,
    "programDate": "5 Aug 2024, 11:00 AM",
    "institution": "M. Kumarasamy College of Engineering, Karur – IIC (with five partner institutions)",
    "venue": "Virtual session",
    "audience": "Students and faculty of six institutions",
    "topic": "Accelerator programmes for early-stage entrepreneurs",
    "role": "Speaker",
    "organizingOrganization": "M. Kumarasamy College of Engineering IIC",
    "linkedInPostDates": [
      "05 Aug 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7226085775396757506/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised virtually by the Institution’s Innovation Council at M. Kumarasamy College of Engineering, Karur alongside five partner institutions under the IIC Mentor-Mentee Program 2023–24, this session spotlighted accelerator opportunities for early-stage campus founders.",
    "descriptionLine2": "Featured as the Speaker across the six participating institutions, my talk outlined how students and faculty innovators can access startup accelerators and structured mentorship.",
    "media": [
      {
        "id": "EVT_039_MEDIA_01",
        "src": "/events/EVT_039/posters/EVT_039_Poster_01_D5622AQHs2HUxzxHupw.jpg",
        "driveId": "1EZLwT_ntBagoL-aDgKEco7-IbiODyjPW",
        "kind": "poster",
        "caption": "IIC Mentor-Mentee Program 2023-24 – \"Accelerators Opportunities for Students and Faculties – Early Stage Entrepreneurs\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_040",
    "serialNumber": 40,
    "title": "StartNet 1st Anniversary & StartNet 2.0 Launch",
    "sourceCategory": "Startup Ecosystem Event (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Conferences & Summits",
      "Professional & Industry Engagements"
    ],
    "year": 2024,
    "programDate": "22 Jun 2024, from 4:30 PM",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "CJ Pallazzio",
    "audience": "Startups, founders and ecosystem partners",
    "topic": "StartNet 1.0 journey; StartNet 2.0 roadmap; Rising Star Startup Awards; MoUs; founder sessions",
    "role": "Organizer (Co-Founder & CIO) & Speaker",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (group partner company)",
    "linkedInPostDates": [
      "20 Jun 2024",
      "21 Jun 2024",
      "24 Jun 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7209548742939533313/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7209809696742854656/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7210986608223768578/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted at CJ Pallazzio by StartNet Ventures Private Limited, this milestone gathering celebrated StartNet’s first anniversary and unveiled the StartNet 2.0 roadmap alongside Rising Star Startup Awards, MoUs, and founder sessions.",
    "descriptionLine2": "As Co-Founder and Chief Innovation Officer of StartNet Ventures, I co-organised the celebration and addressed founders and ecosystem partners on the StartNet 1.0 journey.",
    "media": [
      {
        "id": "EVT_040_MEDIA_01",
        "src": "/events/EVT_040/posters/EVT_040_Poster_01_D5622AQGqJFOTlk7LNw.jpg",
        "driveId": "1P5qPmuGBoI-NW1x97lXUmlcNsngdszwo",
        "kind": "poster",
        "caption": "StartNet 1st Anniversary & StartNet 2.0 Launch — Official Programme Poster"
      },
      {
        "id": "EVT_040_MEDIA_02",
        "src": "/events/EVT_040/posters/EVT_040_Poster_02_D5622AQF9BmgQ9e5bvg.jpg",
        "driveId": "16OHwfxmZC3KSzWzN6Vo646UxBQrYfHAX",
        "kind": "poster",
        "caption": "StartNet 1st Anniversary & StartNet 2.0 Launch — Official Programme Poster"
      },
      {
        "id": "EVT_040_MEDIA_03",
        "src": "/events/EVT_040/posters/EVT_040_Poster_03_D5622AQE_yNHBgu1wCQ.jpg",
        "driveId": "1pecf3nEVq3fsXC9FwMDs_aqtm9c-_ED_",
        "kind": "poster",
        "caption": "StartNet 1st Anniversary & StartNet 2.0 Launch — Official Programme Poster"
      },
      {
        "id": "EVT_040_MEDIA_04",
        "src": "/events/EVT_040/posters/EVT_040_Poster_04_D5622AQGHd68kNCIKSA.jpg",
        "driveId": "1vPSjVVNtqcm9caikl0QTPVOeWjnfJhAM",
        "kind": "poster",
        "caption": "StartNet 1st Anniversary & StartNet 2.0 Launch — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_041",
    "serialNumber": 41,
    "title": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\"",
    "sourceCategory": "Event Talk (Health Sciences)",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2024,
    "programDate": "8 Jun 2024",
    "institution": "Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)",
    "venue": "Skill Lab, SAHS, VMRF-DU, Salem",
    "audience": "Optometry students and professionals",
    "topic": "Entrepreneurship and innovation in optometry",
    "role": "Speaker",
    "organizingOrganization": "School of Allied Health Sciences, VMRF-DU",
    "linkedInPostDates": [
      "07 Jun 2024",
      "09 Jun 2024",
      "24 Jun 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7204851035616550912/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7205563085468663809/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7210807073599627264/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted by the Department of Optometry at the School of Allied Health Sciences, VMRF-DU in Salem, V-OPTO 2024 OPTOTHON explored healthcare innovation and entrepreneurial pathways in optometry.",
    "descriptionLine2": "I participated as a Speaker and delivered a session guiding optometry students and clinicians on identifying venture opportunities within allied health sciences.",
    "media": [
      {
        "id": "EVT_041_MEDIA_01",
        "src": "/events/EVT_041/photos/EVT_041_Photo_01_D5622AQG9WSlO5Q7FxA.jpg",
        "driveId": "1uV4KuIs9nAfXCuSlOK5-bge7s3ugQGyW",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_02",
        "src": "/events/EVT_041/photos/EVT_041_Photo_02_D5622AQHjl1PIH2XpsQ.jpg",
        "driveId": "1ALGmmtbZVvVsYds9M7RkprATc4N_vDjT",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_03",
        "src": "/events/EVT_041/photos/EVT_041_Photo_03_D5622AQEGEnqH_rf35w.jpg",
        "driveId": "1eTQyeIssH0p-b8vS8hlwVh7ZxHBmL0ss",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_04",
        "src": "/events/EVT_041/photos/EVT_041_Photo_04_D5622AQHKR7pQSDpd2A.jpg",
        "driveId": "17Tra2Vm0mhCiYhm--J2F-C3hXzDbMxyF",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_05",
        "src": "/events/EVT_041/photos/EVT_041_Photo_05_D5622AQHmOSclC1NTXg.jpg",
        "driveId": "1O3AJ4PW4f3qgXFbq5tbOnrywymzQxtjM",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_06",
        "src": "/events/EVT_041/photos/EVT_041_Photo_06_D5622AQHrbtd0pK2gbA.jpg",
        "driveId": "1oDUQ6XMLMS9dUpKSo9S0-nhomcmHdF9f",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_07",
        "src": "/events/EVT_041/photos/EVT_041_Photo_07_D5622AQHjrBr-DSLYZw.jpg",
        "driveId": "1kvyVpcJyN67DBpgHhQ3WVvrNfLR5KrcW",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_08",
        "src": "/events/EVT_041/photos/EVT_041_Photo_08_D5622AQFiKpIwVje2Ww.jpg",
        "driveId": "1PiTx4zHwQEjBG6UrlcntwsP66BTF6w_X",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_09",
        "src": "/events/EVT_041/photos/EVT_041_Photo_09_D5622AQGcVOWLY67XeA.jpg",
        "driveId": "1KTFwzbaUUysH931odhp7P_0cyDssdOMx",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_10",
        "src": "/events/EVT_041/photos/EVT_041_Photo_10_D5622AQGiqBRTsoq1Zw.jpg",
        "driveId": "1gNm1r0fXQgD4xPHFsjqW51npD7e0qxX3",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_11",
        "src": "/events/EVT_041/photos/EVT_041_Photo_11_D5622AQFecsdVYGR5GA.jpg",
        "driveId": "1y1VJClN34K9gVM6wnp9o-4_9bGh4yKzS",
        "kind": "photo",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Dept. of Optometry, School of Allied Health Sciences, VMRF-DU (VIMS Hospital Campus)"
      },
      {
        "id": "EVT_041_MEDIA_12",
        "src": "/events/EVT_041/posters/EVT_041_Poster_01_D5622AQG0823ySZjO2w.jpg",
        "driveId": "1SaY8XxyIuhe6EXYyzRioBrasT9Dr2HpT",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_13",
        "src": "/events/EVT_041/posters/EVT_041_Poster_02_D5622AQFlrz2aOciAXA.jpg",
        "driveId": "1ypySkHrAuNQBMXb7t3zLLNjRU8pKUBgO",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_14",
        "src": "/events/EVT_041/posters/EVT_041_Poster_03_D5622AQEzdL40n7t_Zg.jpg",
        "driveId": "1NtD11k4_jFwPnwKBAzIL9l-tBz4DdHyg",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_15",
        "src": "/events/EVT_041/posters/EVT_041_Poster_04_D5622AQEzjJriEgvsrg.jpg",
        "driveId": "1j9OU3_JaNrG6FAFmlA1rU-WDxbWnWErk",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_16",
        "src": "/events/EVT_041/posters/EVT_041_Poster_05_D5622AQFWyvo9Abmbew.jpg",
        "driveId": "1frB4puVOFF6MqmWXbAQuAOoMn7AupSw2",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_17",
        "src": "/events/EVT_041/posters/EVT_041_Poster_06_D5622AQGvZVSuhjkgzg.jpg",
        "driveId": "1mygJ-4w-cyYVamJtVLq07aYeKWbax_RB",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_18",
        "src": "/events/EVT_041/posters/EVT_041_Poster_07_D5622AQHBwlR2n9KZIw.jpg",
        "driveId": "1IUdRwpa_dek_nv45kHTdr21ahZ5kV6Tk",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_19",
        "src": "/events/EVT_041/posters/EVT_041_Poster_08_D5622AQE8DrpCz68FpQ.jpg",
        "driveId": "1TvVTfyHAGEyYDTnVegOptDo2QH85PfAe",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_20",
        "src": "/events/EVT_041/posters/EVT_041_Poster_09_D5622AQF6lk76KFZwQg.jpg",
        "driveId": "1sIZkjpP2H1VVBUOaBIj2A3W7JJzyAZMn",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_21",
        "src": "/events/EVT_041/posters/EVT_041_Poster_10_D5622AQGeLyIh8ocL6w.jpg",
        "driveId": "1j6CfHEZnse2zhdNSascUZJyRQMBNygLw",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_22",
        "src": "/events/EVT_041/posters/EVT_041_Poster_11_D5622AQENJGigwQxgzw.jpg",
        "driveId": "1iNYPMyRWoWseG8qYK_w1wdmjEuV8jzRO",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_23",
        "src": "/events/EVT_041/posters/EVT_041_Poster_12_D5622AQHhYG0iXig_ng.jpg",
        "driveId": "1NewoSpci-fXHGdRZJDv3WU4IFQui0zDf",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_24",
        "src": "/events/EVT_041/posters/EVT_041_Poster_13_D5622AQGuO-dXfG-ovg.jpg",
        "driveId": "1718j_Yl5OOIPVTcObIHFS6bPUqhHrKk6",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      },
      {
        "id": "EVT_041_MEDIA_25",
        "src": "/events/EVT_041/posters/EVT_041_Poster_14_D5622AQEXN5nYeMDqaw.jpg",
        "driveId": "1-Xzo-zNzEgbHXaqYB9SUyppyu_7bMiXN",
        "kind": "poster",
        "caption": "V-OPTO 2024 OPTOTHON – \"Visionary Ventures: Unlocking Entrepreneurial Opportunities in Optometry\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_042",
    "serialNumber": 42,
    "title": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\"",
    "sourceCategory": "Professional Talk",
    "categories": [
      "AI & Emerging Technologies",
      "Professional & Industry Engagements",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2024,
    "programDate": null,
    "institution": "Rotary Club Salem South",
    "venue": "Salem",
    "audience": "Rotary members",
    "topic": "AI tools for business strategy",
    "role": "Speaker (Guest Speaker)",
    "organizingOrganization": "Rotary Club Salem South",
    "linkedInPostDates": [
      "04 Jun 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7203730924272779264/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Convened during the 47th weekly meeting of Rotary Club Salem South in Salem, this executive talk examined practical Artificial Intelligence tools reshaping contemporary business strategy.",
    "descriptionLine2": "I addressed Rotary members as Guest Speaker, demonstrating how leaders and enterprises can adopt accessible AI capabilities to enhance strategic decision-making.",
    "media": [
      {
        "id": "EVT_042_MEDIA_01",
        "src": "/events/EVT_042/photos/EVT_042_Photo_01_D5622AQELrUx5qWf6HA.jpg",
        "driveId": "1JX8BdJEt74-1qRa-WnGY8te3WqgW0OaK",
        "kind": "photo",
        "caption": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\" — Rotary Club Salem South"
      },
      {
        "id": "EVT_042_MEDIA_02",
        "src": "/events/EVT_042/photos/EVT_042_Photo_02_D5622AQGHRHpfaYaAKQ.jpg",
        "driveId": "1hKF_-UvRFk3oMb6CUySaqIrNY8pSiUU_",
        "kind": "photo",
        "caption": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\" — Rotary Club Salem South"
      },
      {
        "id": "EVT_042_MEDIA_03",
        "src": "/events/EVT_042/photos/EVT_042_Photo_03_D5622AQEykSBsPswNhA.jpg",
        "driveId": "1F0malQPIvpCimGB6S10Q6069bzfuz_Mv",
        "kind": "photo",
        "caption": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\" — Rotary Club Salem South"
      },
      {
        "id": "EVT_042_MEDIA_04",
        "src": "/events/EVT_042/photos/EVT_042_Photo_04_D5622AQGESdK9obl94Q.jpg",
        "driveId": "1MOQwr-qqljb6mq27ba6YzU_ZljsBN2D6",
        "kind": "photo",
        "caption": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\" — Rotary Club Salem South"
      },
      {
        "id": "EVT_042_MEDIA_05",
        "src": "/events/EVT_042/photos/EVT_042_Photo_05_D5622AQFjUPI4-yffTA.jpg",
        "driveId": "1SekLAvvfDuGmbOaPYygvIvC6_MjWzsfL",
        "kind": "photo",
        "caption": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\" — Rotary Club Salem South"
      },
      {
        "id": "EVT_042_MEDIA_06",
        "src": "/events/EVT_042/photos/EVT_042_Photo_06_D5622AQH6V_Fj-91gVw.jpg",
        "driveId": "1UZeMC947forWmJyLsN8yjya9s3F7lTUQ",
        "kind": "photo",
        "caption": "Rotary Club Salem South – 47th Weekly Meet: \"AI Toolbox: Revolutionizing Business Strategies\" — Rotary Club Salem South"
      }
    ]
  },
  {
    "id": "EVT_043",
    "serialNumber": 43,
    "title": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown)",
    "sourceCategory": "Summit & Expo (Organised)",
    "categories": [
      "AI & Emerging Technologies",
      "Conferences & Summits",
      "Entrepreneurship & Startups"
    ],
    "year": 2024,
    "programDate": "27 Apr 2024",
    "institution": "StartNet Ventures Pvt. Ltd. (presented by ZautoAI)",
    "venue": "Radisson Hotel, Salem",
    "audience": "Startups, industry, academia and students (500+ attendees)",
    "topic": "Generative AI across industries; industry-specific innovations; startup showcase & pitching; AITN launch",
    "role": "Organizer",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (group partner company)",
    "linkedInPostDates": [
      "11 Mar 2024",
      "10 Apr 2024",
      "30 Apr 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7172857303539412993/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7183803596306612225/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7190920494118834177/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Held at the Radisson Hotel in Salem by StartNet Ventures Private Limited and presented by ZautoAI, GenAI.Connect Summit & Expo 2024 united over 500 participants from startups, industry, and academia for Generative AI showcases, pitching, and the AITN launch.",
    "descriptionLine2": "I served on the organising leadership through StartNet Ventures, bringing together ecosystem stakeholders to accelerate applied Generative AI adoption across sectors.",
    "media": [
      {
        "id": "EVT_043_MEDIA_01",
        "src": "/events/EVT_043/photos/EVT_043_Photo_01_D5622AQGXzzQ58yJtAg.jpg",
        "driveId": "1CPzBVkBz8bNAroQNTgNzi_iDCBFcpC8R",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_02",
        "src": "/events/EVT_043/photos/EVT_043_Photo_02_D5622AQF5vZsEO5v9Mg.jpg",
        "driveId": "1rcgCWdmIpdPBWeZ8xMSv9hg5IxGhusLZ",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_03",
        "src": "/events/EVT_043/photos/EVT_043_Photo_03_D5622AQFj3B2R46dh7g.jpg",
        "driveId": "1krqNaKhRh8ETVRJ0VP_icMFkft5rzN4D",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_04",
        "src": "/events/EVT_043/photos/EVT_043_Photo_04_D5622AQEjTz2fzMKnMQ.jpg",
        "driveId": "1DARoejGa4DO0QDcOWZkQ-fNU8awIkC7_",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_05",
        "src": "/events/EVT_043/photos/EVT_043_Photo_05_D5622AQG_EcXrtrlGOg.jpg",
        "driveId": "1Q9ZRW8IhkS188mG76ITqBuqo10fCtcN5",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_06",
        "src": "/events/EVT_043/photos/EVT_043_Photo_06_D5622AQEZaCSL1P6-9g.jpg",
        "driveId": "1ul_6T-dfPFDyUldyHnfyedO0Obk2ZydP",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_07",
        "src": "/events/EVT_043/photos/EVT_043_Photo_07_D5622AQEHyEbJyCcO-Q.jpg",
        "driveId": "1MOR_dGnD-iUAZsuzXLeSdUWrSlwzC9N9",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_08",
        "src": "/events/EVT_043/photos/EVT_043_Photo_08_D5622AQHtBO8YqI--UQ.jpg",
        "driveId": "1kzualuUGKtlwUagWF8Ebi-ZnKkGyDQ2C",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_09",
        "src": "/events/EVT_043/photos/EVT_043_Photo_09_D5622AQG14ASLAYF9tA.jpg",
        "driveId": "14M7VHenOXJZ_-_-Qh7uvBANjcv77IZrU",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_10",
        "src": "/events/EVT_043/photos/EVT_043_Photo_10_D5622AQESoKIC_kkq4g.jpg",
        "driveId": "1GZBCkHTBloPLoZt_BQ-nxhobNzwp5DSb",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_11",
        "src": "/events/EVT_043/photos/EVT_043_Photo_11_D5622AQEkFtq5vYU29A.jpg",
        "driveId": "1nIyOsbuwMjtItPrP-2ZoIMo9Fu6DZyAK",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_12",
        "src": "/events/EVT_043/photos/EVT_043_Photo_12_D5622AQEWPxkuANZaRg.jpg",
        "driveId": "1xZqGWvTwwBqi8uzicxQF_rSJbvKaFcOD",
        "kind": "photo",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — StartNet Ventures Pvt. Ltd. (presented by ZautoAI)"
      },
      {
        "id": "EVT_043_MEDIA_13",
        "src": "/events/EVT_043/posters/EVT_043_Poster_01_D5622AQEJSflgNLgIxA.jpg",
        "driveId": "1EFcyFy0Giapc0khhH_zoOp_6eI-vqxlH",
        "kind": "poster",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — Official Programme Poster"
      },
      {
        "id": "EVT_043_MEDIA_14",
        "src": "/events/EVT_043/posters/EVT_043_Poster_02_D5622AQHu6jzugLPWWg.jpg",
        "driveId": "1uU1AyUcaoAeAaLx8DZEMEHdAPzbmBXw7",
        "kind": "poster",
        "caption": "GenAI.Connect Summit & Expo 2024 (incl. GenAI Pitch Showdown) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_044",
    "serialNumber": 44,
    "title": "Gen AI Mini Hackathon (2024)",
    "sourceCategory": "Hackathon",
    "categories": [
      "AI & Emerging Technologies",
      "Research & Innovation"
    ],
    "year": 2024,
    "programDate": null,
    "institution": null,
    "venue": null,
    "audience": null,
    "topic": "Generative AI projects in healthcare, education, finance and creative fields",
    "role": null,
    "organizingOrganization": "Linked in the post to GenAI.Connect Summit presented by StartNet",
    "linkedInPostDates": [
      "21 Apr 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7187831303696793600/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – organiser, role and date not stated",
    "descriptionLine1": "Connected with the GenAI.Connect Summit ecosystem presented by StartNet, the Gen AI Mini Hackathon showcased applied Generative AI projects spanning healthcare, education, finance, and creative domains.",
    "descriptionLine2": "I engaged with and recognised the participating builders, mentors, judges, and sponsors advancing hands-on Generative AI experimentation.",
    "media": []
  },
  {
    "id": "EVT_045",
    "serialNumber": 45,
    "title": "Session on Intellectual Property Rights (IPR)",
    "sourceCategory": "Guest Session (IPR) – Chief Guest",
    "categories": [
      "Intellectual Property Rights",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2024,
    "programDate": null,
    "institution": "Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering",
    "venue": "Komarapalayam, Namakkal",
    "audience": "Students",
    "topic": "Patents, trademarks, copyrights and geographical indications",
    "role": "Speaker (Chief Guest)",
    "organizingOrganization": "Excel Engineering College",
    "linkedInPostDates": [
      "10 Mar 2024",
      "10 Mar 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7172598310468349952/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7172603465544790016/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of Aeronautical Engineering at Excel Engineering College in Komarapalayam, Namakkal, this academic session examined patents, trademarks, copyrights, and geographical indications.",
    "descriptionLine2": "I served as Chief Guest and addressed engineering students on protecting technical inventions through comprehensive intellectual property strategies.",
    "media": [
      {
        "id": "EVT_045_MEDIA_01",
        "src": "/events/EVT_045/photos/EVT_045_Photo_01_D5622AQHnLoDWS5PBBA.jpg",
        "driveId": "1rYArGgsLXLrr2FlT8oo9vtbhXlOmAW-o",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_02",
        "src": "/events/EVT_045/photos/EVT_045_Photo_02_D5622AQEtTYKxIbkVRQ.jpg",
        "driveId": "1ZvM7-SJY8mu4LHW0fNBw2yhqH6NgLu6f",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_03",
        "src": "/events/EVT_045/photos/EVT_045_Photo_03_D5622AQF_6_Lzmml0hg.jpg",
        "driveId": "1-2PL9KWiOXCCd7KtdEgNjuFs_Xnx09LP",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_04",
        "src": "/events/EVT_045/photos/EVT_045_Photo_04_D5622AQFycr-RvZXcUw.jpg",
        "driveId": "1-MJbbeqoJDEv-tJhId2IBaj55XwYHRKf",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_05",
        "src": "/events/EVT_045/photos/EVT_045_Photo_05_D5622AQHP2FZ-h9_LcA.jpg",
        "driveId": "1mtsJI4D7l8O1Z5PM25gHOJ0Lj1yeq_BP",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_06",
        "src": "/events/EVT_045/photos/EVT_045_Photo_06_D5622AQHE9Vlf14yt5A.jpg",
        "driveId": "14T6Crxn2xxKc9PB4A67KkzhOKQdF1Fd8",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_07",
        "src": "/events/EVT_045/photos/EVT_045_Photo_07_D5622AQFFueYC1ajOkg.jpg",
        "driveId": "1TbUYo8F0jg5hLXO9VsyN3WGGJIHPrVoA",
        "kind": "photo",
        "caption": "Session on Intellectual Property Rights (IPR) — Excel Engineering College (Autonomous) – Dept. of Aeronautical Engineering"
      },
      {
        "id": "EVT_045_MEDIA_08",
        "src": "/events/EVT_045/posters/EVT_045_Poster_01_D5622AQHJRZJq4oAqNg.jpg",
        "driveId": "17WBz6cWQg0lYOcsVnfjm3KPdy-Bt8BcT",
        "kind": "poster",
        "caption": "Session on Intellectual Property Rights (IPR) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_046",
    "serialNumber": 46,
    "title": "Digital Politics Conclave (Salem)",
    "sourceCategory": "Conclave (Organised)",
    "categories": [
      "Conferences & Summits",
      "AI & Emerging Technologies",
      "Professional & Industry Engagements"
    ],
    "year": 2024,
    "programDate": "2 Feb 2024",
    "institution": "Forum of Digital Politics in association with StartNet",
    "venue": "Hotel CJ Pallazzio, Salem",
    "audience": "Politicians, political consultants, civic-tech founders",
    "topic": "Technology in political engagement; AI in campaigning and polling; startup pitches",
    "role": "Organizer",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. with Forum of Digital Politics",
    "linkedInPostDates": [
      "28 Jan 2024",
      "09 Feb 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7157390355082924032/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7161728174186254337/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Held at Hotel CJ Pallazzio in Salem by StartNet Ventures Private Limited in association with the Forum of Digital Politics, this conclave examined AI-driven polling, digital civic engagement, and civic-tech startup pitches.",
    "descriptionLine2": "I co-organised the conclave through StartNet Ventures, convening public leaders, strategists, and technology founders to explore data-driven civic innovation.",
    "media": [
      {
        "id": "EVT_046_MEDIA_01",
        "src": "/events/EVT_046/photos/EVT_046_Photo_01_D5622AQGiSAUpv_kV5A.jpg",
        "driveId": "1DKXgv5Y8AVrU6rAzf59B_V9fhrEjiYtf",
        "kind": "photo",
        "caption": "Digital Politics Conclave (Salem) — Forum of Digital Politics in association with StartNet"
      },
      {
        "id": "EVT_046_MEDIA_02",
        "src": "/events/EVT_046/photos/EVT_046_Photo_02_D5622AQFClZ9SXtXN_Q.jpg",
        "driveId": "12r65ft06JjJkpuhVAN27-HJrS2c0SCEl",
        "kind": "photo",
        "caption": "Digital Politics Conclave (Salem) — Forum of Digital Politics in association with StartNet"
      },
      {
        "id": "EVT_046_MEDIA_03",
        "src": "/events/EVT_046/photos/EVT_046_Photo_03_D5622AQH-MTUuRC58xw.jpg",
        "driveId": "1l7qcPh01DhuUMXoG63I0CSA-5rRQTJg6",
        "kind": "photo",
        "caption": "Digital Politics Conclave (Salem) — Forum of Digital Politics in association with StartNet"
      },
      {
        "id": "EVT_046_MEDIA_04",
        "src": "/events/EVT_046/photos/EVT_046_Photo_04_D5622AQGR-GudopVFRA.jpg",
        "driveId": "1c9mZJGij_fLeQ1i-8V68MUpxwO7WjsSZ",
        "kind": "photo",
        "caption": "Digital Politics Conclave (Salem) — Forum of Digital Politics in association with StartNet"
      },
      {
        "id": "EVT_046_MEDIA_05",
        "src": "/events/EVT_046/posters/EVT_046_Poster_01_D5622AQEX20a-yktUEw.jpg",
        "driveId": "17p_1_MudzeFF0fQp6TcyeZc3ReJ0EBwJ",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      },
      {
        "id": "EVT_046_MEDIA_06",
        "src": "/events/EVT_046/posters/EVT_046_Poster_02_D5622AQF0JNqYjUEU8g.jpg",
        "driveId": "1kaMgWtsuhSthCBNZZ7nueF9l6SaNyIR_",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      },
      {
        "id": "EVT_046_MEDIA_07",
        "src": "/events/EVT_046/posters/EVT_046_Poster_03_D5622AQHwervv45jivA.jpg",
        "driveId": "1XA4kkGUuqsaFXePrf7h6-y2Bl7gRE8Qk",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      },
      {
        "id": "EVT_046_MEDIA_08",
        "src": "/events/EVT_046/posters/EVT_046_Poster_04_D5622AQETlcb8zU0vig.jpg",
        "driveId": "1LhTnA5x-RbjAChFK8Nm3JRtTxJ6YT0YV",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      },
      {
        "id": "EVT_046_MEDIA_09",
        "src": "/events/EVT_046/posters/EVT_046_Poster_05_D5622AQGU4j_uzXcfqA.jpg",
        "driveId": "1m7XJItbOyYc7ASCCQHWSlEAxKEKlW2Vi",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      },
      {
        "id": "EVT_046_MEDIA_10",
        "src": "/events/EVT_046/posters/EVT_046_Poster_06_D5622AQEuMX0FL9YQsA.jpg",
        "driveId": "1W55kq0z0tQ86kciYj28FItJn2ms4Obia",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      },
      {
        "id": "EVT_046_MEDIA_11",
        "src": "/events/EVT_046/posters/EVT_046_Poster_07_D5622AQH1eQsdhJI-Ew.jpg",
        "driveId": "1LNj3l7nqTBl_NcvMrb9UOtO5KNHJJTHB",
        "kind": "poster",
        "caption": "Digital Politics Conclave (Salem) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_047",
    "serialNumber": 47,
    "title": "\"Ikigai Guided Goal for 2024\"",
    "sourceCategory": "Entrepreneurship Workshop / Networking Event (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Workshops & Training",
      "Professional & Industry Engagements"
    ],
    "year": 2024,
    "programDate": null,
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "T2Hub, Salem",
    "audience": "Aspiring entrepreneurs",
    "topic": "Ikigai-based goal setting; self-discovery workshops; networking",
    "role": "Organizer",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd.",
    "linkedInPostDates": [
      "02 Jan 2024"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7147978621582794754/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted at T2Hub in Salem by StartNet Ventures Private Limited, this founder workshop and networking forum combined Ikigai-inspired self-discovery exercises with structured annual goal planning.",
    "descriptionLine2": "I organised the programme with the StartNet Ventures team to help aspiring entrepreneurs align personal purpose with actionable venture goals.",
    "media": [
      {
        "id": "EVT_047_MEDIA_01",
        "src": "/events/EVT_047/photos/EVT_047_Photo_01_D5622AQFoOnb7_4hMBg.jpg",
        "driveId": "1Ov0MviCcSGvtsbCxoHQkCf8Ang3XdSGY",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_02",
        "src": "/events/EVT_047/photos/EVT_047_Photo_02_D5622AQGCFZhx8AdyVA.jpg",
        "driveId": "1u1Dv5Q0XwyfWyCYRwSaKmH7N-GB1j9wT",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_03",
        "src": "/events/EVT_047/photos/EVT_047_Photo_03_D5622AQGYoCNt0lRFIQ.jpg",
        "driveId": "1TenhYInhEoe0pRPXVcRcs9Jmi3qOC2PJ",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_04",
        "src": "/events/EVT_047/photos/EVT_047_Photo_04_D5622AQEnEBjkhxaQkg.jpg",
        "driveId": "13QlP_HLKjF7FdWBQ5SInsWi5N-mWfzBS",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_05",
        "src": "/events/EVT_047/photos/EVT_047_Photo_05_D5622AQEG-3OOary9RQ.jpg",
        "driveId": "1WnALySlO2Y90bUvKr2sv_39dBOKb0CJi",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_06",
        "src": "/events/EVT_047/photos/EVT_047_Photo_06_D5622AQH-prmQ2xPoww.jpg",
        "driveId": "1fmkzmL45BwHWenkc2s0WMtq-CkE0AdU6",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_07",
        "src": "/events/EVT_047/photos/EVT_047_Photo_07_D5622AQESfRVubWro5A.jpg",
        "driveId": "1F6EqSA-CBPldSxx0VhNAEjZqyInuEe8v",
        "kind": "photo",
        "caption": "\"Ikigai Guided Goal for 2024\" — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_047_MEDIA_08",
        "src": "/events/EVT_047/posters/EVT_047_Poster_01_D5622AQEsSUYO8oF-7g.jpg",
        "driveId": "18tNv3EGNc3ScY5bFJE288GtVY3VEu8vO",
        "kind": "poster",
        "caption": "\"Ikigai Guided Goal for 2024\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_048",
    "serialNumber": 48,
    "title": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023)",
    "sourceCategory": "Networking & Masterclass Series (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Professional & Industry Engagements",
      "Workshops & Training"
    ],
    "year": 2023,
    "programDate": "Jul 2023; Aug 2023; Sep 2023; Nov 2023; 30 Dec 2023 (9:00 AM–1:00 PM)",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "Salem (Dec 2023: Hotel CJ Pallazzio, Junction Main Rd, Salem)",
    "audience": "Startup founders and entrepreneurs",
    "topic": "Masterclasses: Product management (Jul), Personal branding (Aug), GTM strategy (Sep), Growth mindset (Nov), Blockchain & crypto (Dec)",
    "role": "Organizer (StartNet)",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (group partner company)",
    "linkedInPostDates": [
      "31 Jul 2023",
      "29 Aug 2023",
      "09 Sep 2023",
      "22 Nov 2023",
      "29 Dec 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7091685212346073088/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7101997787046703104/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7106202405263867904/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7133003209366786048/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7146480614865612800/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – consolidated series; personal role per meeting not stated",
    "descriptionLine1": "Organised across Salem between July and December 2023 by StartNet Ventures Private Limited, the monthly StartConnect series paired founder networking with masterclasses on product management, personal branding, go-to-market strategy, growth mindset, and blockchain.",
    "descriptionLine2": "Through StartNet Ventures, I supported founder coordination and community engagement across this recurring entrepreneurship learning series.",
    "media": [
      {
        "id": "EVT_048_MEDIA_01",
        "src": "/events/EVT_048/photos/EVT_048_Photo_01_D5622AQHwG1BN7400QQ.jpg",
        "driveId": "1mz5yURlK5hqRANoqrFq8anCb_CzAnQNk",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_02",
        "src": "/events/EVT_048/photos/EVT_048_Photo_02_D5622AQEFZhg-bdwjAQ.jpg",
        "driveId": "1IyJzC71NvSX4DT2R5NyJhOK_MGzffoUi",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_03",
        "src": "/events/EVT_048/photos/EVT_048_Photo_03_D5622AQGedzpXM-mbQA.jpg",
        "driveId": "1pw_ge-5WgGyzv5rBIEDlXj2NAEZboy20",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_04",
        "src": "/events/EVT_048/photos/EVT_048_Photo_04_D5622AQGBQXmmBLbfbg.jpg",
        "driveId": "130rdlhVX8EAHkuSnezyCpdPy8IHQhjkP",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_05",
        "src": "/events/EVT_048/photos/EVT_048_Photo_05_D5622AQHgVezjwAaMrQ.jpg",
        "driveId": "1g1wOQzA-QXZqsO8FIPomeZpU3ENRfK3h",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_06",
        "src": "/events/EVT_048/photos/EVT_048_Photo_06_D5622AQEK1Nzv-5Lm5w.jpg",
        "driveId": "1d33RdMr_g4AQmuc9npT2p45cp6AiERTl",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_07",
        "src": "/events/EVT_048/photos/EVT_048_Photo_07_D5622AQFlnO9UQAO9DQ.jpg",
        "driveId": "1margnlyCyj5oMsQTPhzSDhkD3rbzphlz",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_08",
        "src": "/events/EVT_048/photos/EVT_048_Photo_08_D5622AQE92k8u5jwJ2g.jpg",
        "driveId": "19s6WuencYE7jE32chJm1Jgjg-paX7uiK",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_09",
        "src": "/events/EVT_048/photos/EVT_048_Photo_09_D5622AQGHdlX0_DPfHw.jpg",
        "driveId": "11KNHigCXFxHjJucRU-dip1PMxizLLDJj",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_10",
        "src": "/events/EVT_048/photos/EVT_048_Photo_10_D5622AQGQtFTEQKXyBA.jpg",
        "driveId": "1smZaN7WS8A1uUgzYY9PuWktKOYX-lSCl",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_11",
        "src": "/events/EVT_048/photos/EVT_048_Photo_11_D5622AQHTZpczB6tsAg.jpg",
        "driveId": "1MNWeAO8riYDJQ_92CJ_RgYzIottzJm5b",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_12",
        "src": "/events/EVT_048/photos/EVT_048_Photo_12_D5622AQHvxXqv15slrA.jpg",
        "driveId": "1GP4cQg5SURI08RAjeUXJDcs1b1-lOva2",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_13",
        "src": "/events/EVT_048/photos/EVT_048_Photo_13_D5622AQGFKfyzH19Q-Q.jpg",
        "driveId": "1DO3Ybg5Q8BOm4ED6ofe3gt-gZuZ9BM7n",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_14",
        "src": "/events/EVT_048/photos/EVT_048_Photo_14_D5622AQE_XPoYhdrOFA.jpg",
        "driveId": "1TltiSKMheBQMIx4iHN9rFtGlvViJAc3J",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_15",
        "src": "/events/EVT_048/photos/EVT_048_Photo_15_D5622AQH40sSJcv8xFQ.jpg",
        "driveId": "1-rpm4mNuujAk8Y3LVJoUZK0NIQw2M7ef",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_16",
        "src": "/events/EVT_048/photos/EVT_048_Photo_16_D5622AQEDZbeLSrH_fA.jpg",
        "driveId": "1Fh2JZedjU0ZzbeK2HTiQiRRwCh4MBrXi",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_17",
        "src": "/events/EVT_048/photos/EVT_048_Photo_17_D5622AQHhv-IuC8gBOQ.jpg",
        "driveId": "1YAAMboNrt4R3Bl6JYg-WRrfGVzLdk9YK",
        "kind": "photo",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — StartNet Ventures Pvt. Ltd."
      },
      {
        "id": "EVT_048_MEDIA_18",
        "src": "/events/EVT_048/posters/EVT_048_Poster_01_D5622AQG5RbGGU4OE5A.jpg",
        "driveId": "1dn1Rjew4iSCkhzizEPOk6UZMYgvC8MRA",
        "kind": "poster",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — Official Programme Poster"
      },
      {
        "id": "EVT_048_MEDIA_19",
        "src": "/events/EVT_048/posters/EVT_048_Poster_02_D5622AQFUQyfz8lrzJw.jpg",
        "driveId": "19sBGpaiYIJhoLR7IaEzYLtht7G2PHFq_",
        "kind": "poster",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — Official Programme Poster"
      },
      {
        "id": "EVT_048_MEDIA_20",
        "src": "/events/EVT_048/posters/EVT_048_Poster_03_D5622AQFZMBEUCLToZQ.jpg",
        "driveId": "1z6oZG24m3eqYxczlla46e8BZ95skB-FF",
        "kind": "poster",
        "caption": "StartConnect – StartNet Monthly Networking Meetings (Jul–Dec 2023) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_049",
    "serialNumber": 49,
    "title": "Session – \"Motivational Session by Successful Entrepreneur\"",
    "sourceCategory": "Guest Talk (Entrepreneurship)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "30 Nov 2023",
    "institution": "Vivek College of Commerce – Centre for Innovation, Incubation & Entrepreneurship",
    "venue": "Mumbai",
    "audience": null,
    "topic": "Entrepreneurial motivation",
    "role": "Speaker",
    "organizingOrganization": "Vivek College of Commerce",
    "linkedInPostDates": [
      "30 Nov 2023",
      "02 Dec 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7135730030654988289/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7136735178156122112/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised by the Centre for Innovation, Incubation & Entrepreneurship at Vivek College of Commerce in Mumbai, this session focused on inspiring entrepreneurial confidence and founder resilience.",
    "descriptionLine2": "Invited as a Speaker, my session shared practical entrepreneurial perspectives to motivate aspiring student innovators.",
    "media": [
      {
        "id": "EVT_049_MEDIA_01",
        "src": "/events/EVT_049/photos/EVT_049_Photo_01_D5622AQHwbUwYjvGHwA.jpg",
        "driveId": "16KIRWrD-rzLra189WwuCi9k3GZGTIwxU",
        "kind": "photo",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Vivek College of Commerce – Centre for Innovation, Incubation & Entrepreneurship"
      },
      {
        "id": "EVT_049_MEDIA_02",
        "src": "/events/EVT_049/photos/EVT_049_Photo_02_D5622AQFMZRNDhOXAuQ.jpg",
        "driveId": "12Z0YaeQq7AgLRbQOrk7jCdha4jWB79Mk",
        "kind": "photo",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Vivek College of Commerce – Centre for Innovation, Incubation & Entrepreneurship"
      },
      {
        "id": "EVT_049_MEDIA_03",
        "src": "/events/EVT_049/photos/EVT_049_Photo_03_D5622AQEwzLuGkgiOiw.jpg",
        "driveId": "1sN3-6OcqQ7faw6nOND22PePxBb5HJWlQ",
        "kind": "photo",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Vivek College of Commerce – Centre for Innovation, Incubation & Entrepreneurship"
      },
      {
        "id": "EVT_049_MEDIA_04",
        "src": "/events/EVT_049/photos/EVT_049_Photo_04_D5622AQGL5BC4hKB7Rw.jpg",
        "driveId": "1P4-ZA8Mc-QGE3CaEgjN9m5XcImV5qvCv",
        "kind": "photo",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Vivek College of Commerce – Centre for Innovation, Incubation & Entrepreneurship"
      },
      {
        "id": "EVT_049_MEDIA_05",
        "src": "/events/EVT_049/photos/EVT_049_Photo_05_D5622AQEOwAbTk2wN2Q.jpg",
        "driveId": "1ZL9CAliTogNwKT7TAB7GwWVTegaO1NjR",
        "kind": "photo",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Vivek College of Commerce – Centre for Innovation, Incubation & Entrepreneurship"
      },
      {
        "id": "EVT_049_MEDIA_06",
        "src": "/events/EVT_049/posters/EVT_049_Poster_01_D4D22AQHjrCp6Kek76w.jpg",
        "driveId": "1UgHXrrH0JgNVPot1rF2C12Ytp6MZquOv",
        "kind": "poster",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Official Programme Poster"
      },
      {
        "id": "EVT_049_MEDIA_07",
        "src": "/events/EVT_049/posters/EVT_049_Poster_02_D5622AQHXP-zKKtd9rA.jpg",
        "driveId": "1WLJX8en_EpPnPRf0dX9CXMOMA9fl2k2W",
        "kind": "poster",
        "caption": "Session – \"Motivational Session by Successful Entrepreneur\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_050",
    "serialNumber": 50,
    "title": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing)",
    "sourceCategory": "Seminar (Entrepreneurship)",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation"
    ],
    "year": 2023,
    "programDate": "4 Oct 2023",
    "institution": "Bharathiyar Institute of Engineering for Women",
    "venue": "Salem",
    "audience": null,
    "topic": "Innovation to entrepreneurship",
    "role": null,
    "organizingOrganization": "Bharathiyar Institute of Engineering for Women; MoU with Trueline Research",
    "linkedInPostDates": [
      "04 Oct 2023",
      "05 Oct 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7115189234596003840/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7115489350108266497/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – role not stated",
    "descriptionLine1": "Held at Bharathiyar Institute of Engineering for Women in Salem alongside an institutional MoU signing with Trueline Research Private Limited, this one-day seminar focused on translating campus innovation into entrepreneurship.",
    "descriptionLine2": "Representing Trueline Research Private Limited, I participated in this academic collaboration strengthening research and entrepreneurial linkages for women engineering students.",
    "media": [
      {
        "id": "EVT_050_MEDIA_01",
        "src": "/events/EVT_050/photos/EVT_050_Photo_01_D5622AQFv0nTDuWq48Q.jpg",
        "driveId": "1HTjmQByY5F5NOLvh6qLN4UxdS5DqoBdY",
        "kind": "photo",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Bharathiyar Institute of Engineering for Women"
      },
      {
        "id": "EVT_050_MEDIA_02",
        "src": "/events/EVT_050/photos/EVT_050_Photo_02_D5622AQFVFzLBdlqEfg.jpg",
        "driveId": "1bgEgwhiOZTJoLFumQJQ6_ZnzVPjFzjUE",
        "kind": "photo",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Bharathiyar Institute of Engineering for Women"
      },
      {
        "id": "EVT_050_MEDIA_03",
        "src": "/events/EVT_050/photos/EVT_050_Photo_03_D5622AQFRS5Oz58eG2A.jpg",
        "driveId": "1w5c1Gk1uCGRorPxCzkhgPg-nxRlwzNPP",
        "kind": "photo",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Bharathiyar Institute of Engineering for Women"
      },
      {
        "id": "EVT_050_MEDIA_04",
        "src": "/events/EVT_050/photos/EVT_050_Photo_04_D5622AQFTVWpHx0PqyQ.jpg",
        "driveId": "1cePhLOFsqAsQQ7rJXNscpazLCan7iWWk",
        "kind": "photo",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Bharathiyar Institute of Engineering for Women"
      },
      {
        "id": "EVT_050_MEDIA_05",
        "src": "/events/EVT_050/photos/EVT_050_Photo_05_D5622AQFrhJ4-gi68Rw.jpg",
        "driveId": "1X9_HDMKAW5i6_o5L1e7UUbRyPw9uHEyg",
        "kind": "photo",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Bharathiyar Institute of Engineering for Women"
      },
      {
        "id": "EVT_050_MEDIA_06",
        "src": "/events/EVT_050/photos/EVT_050_Photo_06_D5622AQHNlsgpuhIWJA.jpg",
        "driveId": "1lXTcAicZ8KXUHpN4n-yO5eIq8iukUe5Z",
        "kind": "photo",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Bharathiyar Institute of Engineering for Women"
      },
      {
        "id": "EVT_050_MEDIA_07",
        "src": "/events/EVT_050/posters/EVT_050_Poster_01_D5622AQG6AvJol-KiNQ.jpg",
        "driveId": "1rtHLdSe26-ByBEmCBx_XRgjFe5Th56PM",
        "kind": "poster",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Official Programme Poster"
      },
      {
        "id": "EVT_050_MEDIA_08",
        "src": "/events/EVT_050/posters/EVT_050_Poster_02_D5622AQFVWAlB1cSjIQ.jpg",
        "driveId": "1aw9MOqWK5ATyx-M5IkCzDD1Gj3cSXUnk",
        "kind": "poster",
        "caption": "Seminar – \"Innovation into Entrepreneurs: Idea and Experience\" (with MoU signing) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_051",
    "serialNumber": 51,
    "title": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\"",
    "sourceCategory": "Seminar (IPR & Startups)",
    "categories": [
      "Intellectual Property Rights",
      "Entrepreneurship & Startups",
      "Research & Innovation"
    ],
    "year": 2023,
    "programDate": "22 Sep 2023",
    "institution": "P.S.V College of Engineering & Technology",
    "venue": "Krishnagiri",
    "audience": null,
    "topic": "IPR management; innovation; startup ecosystem",
    "role": null,
    "organizingOrganization": "P.S.V College of Engineering & Technology; MoU with Trueline Research",
    "linkedInPostDates": [
      "22 Sep 2023",
      "23 Sep 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7110806403472117760/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7111200265709506560/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – role not stated",
    "descriptionLine1": "Organised at P.S.V College of Engineering & Technology in Krishnagiri alongside an MoU partnership with Trueline Research Private Limited, this seminar connected global intellectual property practices with regional startup ecosystems.",
    "descriptionLine2": "Through Trueline Research Private Limited, I contributed to this institutional collaboration advancing campus awareness of IPR management and innovation ecosystems.",
    "media": [
      {
        "id": "EVT_051_MEDIA_01",
        "src": "/events/EVT_051/photos/EVT_051_Photo_01_D5622AQG5qoH5JIzuTA.jpg",
        "driveId": "1T7Q4Yp-8ytLWEgrTZl5_OZrFU_nzM7dG",
        "kind": "photo",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — P.S.V College of Engineering & Technology"
      },
      {
        "id": "EVT_051_MEDIA_02",
        "src": "/events/EVT_051/photos/EVT_051_Photo_02_D5622AQFgsCeBmwRSSg.jpg",
        "driveId": "1caG0AmdVIRswm5FWGwjhMRnIUpl_I_jM",
        "kind": "photo",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — P.S.V College of Engineering & Technology"
      },
      {
        "id": "EVT_051_MEDIA_03",
        "src": "/events/EVT_051/photos/EVT_051_Photo_03_D5622AQEFY5lvvx77Cg.jpg",
        "driveId": "1rCfU9cnBvoTzGKpSvpu6xHmln_H0peH1",
        "kind": "photo",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — P.S.V College of Engineering & Technology"
      },
      {
        "id": "EVT_051_MEDIA_04",
        "src": "/events/EVT_051/photos/EVT_051_Photo_04_D5622AQFXoJQrJmq4iQ.jpg",
        "driveId": "1atQQ1YV1zVYxHEUFBje8Gad9zj4t9kB7",
        "kind": "photo",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — P.S.V College of Engineering & Technology"
      },
      {
        "id": "EVT_051_MEDIA_05",
        "src": "/events/EVT_051/photos/EVT_051_Photo_05_D5622AQEHDHcRJLR5cA.jpg",
        "driveId": "1Z6k_D4-2BWhlA0ct8z7lIJRFrA0zD-iA",
        "kind": "photo",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — P.S.V College of Engineering & Technology"
      },
      {
        "id": "EVT_051_MEDIA_06",
        "src": "/events/EVT_051/photos/EVT_051_Photo_06_D5622AQG6RyJ1g3hXKQ.jpg",
        "driveId": "1qMvHh3n5YY-p8bN9Rd_Z8oEUqDK-v5Dp",
        "kind": "photo",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — P.S.V College of Engineering & Technology"
      },
      {
        "id": "EVT_051_MEDIA_07",
        "src": "/events/EVT_051/posters/EVT_051_Poster_01_D5622AQFapeH_-AmO7g.jpg",
        "driveId": "1R6joNYryEpqopXVkFMEIxvd8mLFZtqnW",
        "kind": "poster",
        "caption": "Seminar – \"IPR Management, Innovation & Startup Ecosystem from Global Level to Regional Level\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_052",
    "serialNumber": 52,
    "title": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\"",
    "sourceCategory": "Seminar (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation"
    ],
    "year": 2023,
    "programDate": "13 Sep 2023",
    "institution": "Kongunadu College of Engineering & Technology (Autonomous)",
    "venue": null,
    "audience": null,
    "topic": "Creativity in the startup ecosystem",
    "role": null,
    "organizingOrganization": "Kongunadu College of Engineering & Technology",
    "linkedInPostDates": [
      "13 Sep 2023",
      "14 Sep 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7107531615177707520/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7107892718567096320/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – role not stated",
    "descriptionLine1": "Organised by Kongunadu College of Engineering & Technology (Autonomous), this academic seminar explored cultivating creative thinking within collegiate startup ecosystems.",
    "descriptionLine2": "Through Trueline Research Private Limited, I partnered in this campus initiative supporting student creativity and innovation engagement.",
    "media": [
      {
        "id": "EVT_052_MEDIA_01",
        "src": "/events/EVT_052/photos/EVT_052_Photo_01_D5622AQHd3OGoE-tPkg.jpg",
        "driveId": "1ai4fCalfoNfcc27fqIOxjAaZvmrhvztv",
        "kind": "photo",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Kongunadu College of Engineering & Technology (Autonomous)"
      },
      {
        "id": "EVT_052_MEDIA_02",
        "src": "/events/EVT_052/photos/EVT_052_Photo_02_D5622AQHY8jV_xux89Q.jpg",
        "driveId": "1XzjFW2UBEZnhdSJ74IRCIEZPZlyCUqLS",
        "kind": "photo",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Kongunadu College of Engineering & Technology (Autonomous)"
      },
      {
        "id": "EVT_052_MEDIA_03",
        "src": "/events/EVT_052/photos/EVT_052_Photo_03_D5622AQGzthaUdY19pg.jpg",
        "driveId": "1qjSyQVqKLS8Di-l4SmU-gH1rRjX3nd1Z",
        "kind": "photo",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Kongunadu College of Engineering & Technology (Autonomous)"
      },
      {
        "id": "EVT_052_MEDIA_04",
        "src": "/events/EVT_052/photos/EVT_052_Photo_04_D5622AQF7wEw2o6WQWw.jpg",
        "driveId": "1bmexisDBgEjwT2enAgEJ9g7lTg6_qHTR",
        "kind": "photo",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Kongunadu College of Engineering & Technology (Autonomous)"
      },
      {
        "id": "EVT_052_MEDIA_05",
        "src": "/events/EVT_052/photos/EVT_052_Photo_05_D5622AQGLNk3Ze2yIqA.jpg",
        "driveId": "1VxLEi-md_c9aIVWzK0foK7sm0ld3ifZX",
        "kind": "photo",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Kongunadu College of Engineering & Technology (Autonomous)"
      },
      {
        "id": "EVT_052_MEDIA_06",
        "src": "/events/EVT_052/photos/EVT_052_Photo_06_D5622AQHVWzcHs1M7HA.jpg",
        "driveId": "1WqRUrCfUP7WaDoRGzQimmlo5Blt-0g_u",
        "kind": "photo",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Kongunadu College of Engineering & Technology (Autonomous)"
      },
      {
        "id": "EVT_052_MEDIA_07",
        "src": "/events/EVT_052/posters/EVT_052_Poster_01_D4D22AQGx1NigMNrNOA.jpg",
        "driveId": "1tXq-yNHcoCgEFdD-XmVlZXhiquGWWdg_",
        "kind": "poster",
        "caption": "Seminar – \"Fostering Culture of Creativity in Startup Ecosystem\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_053",
    "serialNumber": 53,
    "title": "Webinar (Tamil) – Design Thinking for Startup / Business Growth",
    "sourceCategory": "Webinar (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Workshops & Training"
    ],
    "year": 2023,
    "programDate": "9 Sep 2023, 7:00–8:30 PM",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "Online (Zoom)",
    "audience": "Students, members and non-members",
    "topic": "Design thinking for startups and businesses",
    "role": null,
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (speaker: Dr. R. Sethuraman)",
    "linkedInPostDates": [
      "08 Sep 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7105752997669834752/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – StartNet event; personal role not stated",
    "descriptionLine1": "Hosted online on Zoom by StartNet Ventures Private Limited with speaker Dr. R. Sethuraman, this Tamil-language webinar introduced students and founders to design thinking for startup and business growth.",
    "descriptionLine2": "Through StartNet Ventures Private Limited, I supported ecosystem outreach to make structured design-thinking education accessible to regional entrepreneurs.",
    "media": [
      {
        "id": "EVT_053_MEDIA_01",
        "src": "/events/EVT_053/posters/EVT_053_Poster_01_D5622AQHF3uskQSIAqA.jpg",
        "driveId": "1Co49p62alMTWP9pRdaz_U5xHNib-ZYiR",
        "kind": "poster",
        "caption": "Webinar (Tamil) – Design Thinking for Startup / Business Growth — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_054",
    "serialNumber": 54,
    "title": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\"",
    "sourceCategory": "Seminar (IPR)",
    "categories": [
      "Intellectual Property Rights"
    ],
    "year": 2023,
    "programDate": "31 Aug 2023",
    "institution": "Sona School of Business and Management (Autonomous)",
    "venue": null,
    "audience": "Students and faculty",
    "topic": "Patent publication and grant process",
    "role": null,
    "organizingOrganization": "Sona School of Business and Management",
    "linkedInPostDates": [
      "31 Aug 2023",
      "02 Sep 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7102842129202221056/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7103575379805683712/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – role not stated",
    "descriptionLine1": "Organised at Sona School of Business and Management (Autonomous) for students and faculty, this IPR seminar detailed patent publication procedures and grant workflows relevant to business and management disciplines.",
    "descriptionLine2": "I collaborated in supporting this academic seminar initiative advancing intellectual property literacy among management scholars and educators.",
    "media": [
      {
        "id": "EVT_054_MEDIA_01",
        "src": "/events/EVT_054/photos/EVT_054_Photo_01_D5622AQE2Xh5_qD8znw.jpg",
        "driveId": "1NpuRDoXVn6O376DClssWU-iI2hmMih51",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_02",
        "src": "/events/EVT_054/photos/EVT_054_Photo_02_D5622AQE7pMdTbv3MwA.jpg",
        "driveId": "1OjUcgiHKU0rQ-PA_dAy5IVkqDBxKjBZW",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_03",
        "src": "/events/EVT_054/photos/EVT_054_Photo_03_D5622AQH8htdjis7yhg.jpg",
        "driveId": "1oTXKfAM6N2Yood7Y8jw_AHGd0u2YJSb-",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_04",
        "src": "/events/EVT_054/photos/EVT_054_Photo_04_D5622AQF970i0MZIbaA.jpg",
        "driveId": "1tMVdES7uMKY1vCTZgltIi19wqJoRTwG5",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_05",
        "src": "/events/EVT_054/photos/EVT_054_Photo_05_D5622AQE6YMFGi5b7vg.jpg",
        "driveId": "1AGCbv-z38gPzf75sr7tfUGj8ux-RKV6Q",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_06",
        "src": "/events/EVT_054/photos/EVT_054_Photo_06_D5622AQGhP2QiZMcmoA.jpg",
        "driveId": "1he90cQXxFKFP4zA9oOcBjS4y5ncJNd5h",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_07",
        "src": "/events/EVT_054/photos/EVT_054_Photo_07_D5622AQH1Rey9dKpUAg.jpg",
        "driveId": "1CFuyHoBzLnJDL2n_YDoMZEBsoyjpfUgN",
        "kind": "photo",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Sona School of Business and Management (Autonomous)"
      },
      {
        "id": "EVT_054_MEDIA_08",
        "src": "/events/EVT_054/posters/EVT_054_Poster_01_D5622AQGTsENazMWkSw.jpg",
        "driveId": "119x7SYpYN8gKfITaC0YGZT_5EoX4EyWD",
        "kind": "poster",
        "caption": "Seminar on IPR – \"Patent Publication and Granting Process for Business and Management\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_055",
    "serialNumber": 55,
    "title": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\"",
    "sourceCategory": "Seminar (Startups) – Chief Guest",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "29 Aug 2023",
    "institution": "Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC",
    "venue": "Namakkal",
    "audience": "Students and faculty",
    "topic": "Accelerators and incubation for early-stage entrepreneurs",
    "role": "Speaker (Chief Guest)",
    "organizingOrganization": "Gnanamani College of Technology; StartNet Ventures",
    "linkedInPostDates": [
      "29 Aug 2023",
      "30 Aug 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7102122221187301376/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7102665823621697537/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of Information Technology and IIC at Gnanamani College of Technology in Namakkal alongside StartNet Ventures, this seminar explored incubation and accelerator pathways for early-stage campus founders.",
    "descriptionLine2": "I served as Chief Guest and addressed students and faculty on utilising institutional incubators and ecosystem networks to launch viable startups.",
    "media": [
      {
        "id": "EVT_055_MEDIA_01",
        "src": "/events/EVT_055/photos/EVT_055_Photo_01_D5622AQESdF4w33fXew.jpg",
        "driveId": "19YqbosXVwUfIqaXf-drYI7fFj1t9Chhj",
        "kind": "photo",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC"
      },
      {
        "id": "EVT_055_MEDIA_02",
        "src": "/events/EVT_055/photos/EVT_055_Photo_02_D5622AQFHkD_mtazoVQ.jpg",
        "driveId": "1vTl8QpJuLugirTFbUb5TZlGE-CblXjR4",
        "kind": "photo",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC"
      },
      {
        "id": "EVT_055_MEDIA_03",
        "src": "/events/EVT_055/photos/EVT_055_Photo_03_D5622AQHSLc1aMqy2EQ.jpg",
        "driveId": "1dG4Wrr5r-BD1qpwOrwTc9krunSHpHvre",
        "kind": "photo",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC"
      },
      {
        "id": "EVT_055_MEDIA_04",
        "src": "/events/EVT_055/photos/EVT_055_Photo_04_D5622AQFrfOSBtR2MrQ.jpg",
        "driveId": "1t246qZCNsUtOtCOHjrBtGbwQgAI4uAF_",
        "kind": "photo",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC"
      },
      {
        "id": "EVT_055_MEDIA_05",
        "src": "/events/EVT_055/photos/EVT_055_Photo_05_D5622AQG_tZaDFXtIZg.jpg",
        "driveId": "1kMVT2q0cZ0oVBBqXL4sABTurL9NJ7PvD",
        "kind": "photo",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC"
      },
      {
        "id": "EVT_055_MEDIA_06",
        "src": "/events/EVT_055/photos/EVT_055_Photo_06_D5622AQGwChu2brzH6A.jpg",
        "driveId": "1f90Z4XsbEu3TThrwwIvisoiZ3iMgaMLS",
        "kind": "photo",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Gnanamani College of Technology (Autonomous) – Dept. of IT with IIC"
      },
      {
        "id": "EVT_055_MEDIA_07",
        "src": "/events/EVT_055/posters/EVT_055_Poster_01_D5622AQHy4FGY7eCKIg.jpg",
        "driveId": "1T45gXhUqyDR4UU9lAeVTR5CuuwIwS7Lr",
        "kind": "poster",
        "caption": "Seminar – \"Accelerator / Incubation Opportunities for Students and Faculty on the Early Stage Entrepreneurs\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_056",
    "serialNumber": 56,
    "title": "Session – \"The Lean Startup: How Entrepreneurs Create Radically Successful Business\" (AVS)",
    "sourceCategory": "Seminar (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "24 Aug 2023, 10:30 AM",
    "institution": "AVS Engineering College – IIC and EDC",
    "venue": "Dennis Ritchie Seminar Hall, AVS Engineering College, Salem",
    "audience": null,
    "topic": "Lean startup methodology",
    "role": "Speaker (Resource Speaker)",
    "organizingOrganization": "AVS Engineering College",
    "linkedInPostDates": [
      "24 Aug 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7100251908447117312/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Hosted by the Institution’s Innovation Council and Entrepreneurship Development Cell at Dennis Ritchie Seminar Hall, AVS Engineering College in Salem, this seminar focused on Lean Startup principles for building resilient businesses.",
    "descriptionLine2": "Invited as Resource Speaker in my capacity as Managing Director and Founder of Trueline Research, my session centred on iterative validation and disciplined venture creation.",
    "media": [
      {
        "id": "EVT_056_MEDIA_01",
        "src": "/events/EVT_056/posters/EVT_056_Poster_01_D5622AQHaEUiJVF7GRg.jpg",
        "driveId": "1RO_fEn7dVJwXB9yF1ILJlNatwavJjUpd",
        "kind": "poster",
        "caption": "Session – \"The Lean Startup: How Entrepreneurs Create Radically Successful Business\" (AVS) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_057",
    "serialNumber": 57,
    "title": "Seminar – \"Intellectual Property Rights (IPR) and IP Management for Startup\" (RP Sarathy)",
    "sourceCategory": "Seminar (IPR)",
    "categories": [
      "Intellectual Property Rights",
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "18 Aug 2023, 10:00 AM",
    "institution": "R P Sarathy Institute of Technology – Dept. of CSE & IIC",
    "venue": "Seminar Hall-1, R P Sarathy Institute of Technology, Salem",
    "audience": null,
    "topic": "IPR and IP management for startups",
    "role": "Speaker (Resource Speaker)",
    "organizingOrganization": "R P Sarathy Institute of Technology",
    "linkedInPostDates": [
      "17 Aug 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7097974236387950592/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Organised by the Department of Computer Science and Engineering and IIC at R P Sarathy Institute of Technology in Salem, this seminar examined intellectual property rights and IP portfolio management for emerging startups.",
    "descriptionLine2": "Featured as the Resource Speaker, I structured the session around safeguarding technical innovations and embedding IP strategy into early-stage ventures.",
    "media": [
      {
        "id": "EVT_057_MEDIA_01",
        "src": "/events/EVT_057/posters/EVT_057_Poster_01_D5622AQF4sFEct-IFKw.jpg",
        "driveId": "1AD97ABaDmnJnQt0eK7vTJ_HlA_OUmx4-",
        "kind": "poster",
        "caption": "Seminar – \"Intellectual Property Rights (IPR) and IP Management for Startup\" (RP Sarathy) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_058",
    "serialNumber": 58,
    "title": "Seminar – \"GATE Exam Awareness\"",
    "sourceCategory": "Seminar (Higher Education) – Chief Guest",
    "categories": [
      "Guest Lectures & Keynote Sessions",
      "Research & Innovation"
    ],
    "year": 2023,
    "programDate": null,
    "institution": "Salem College of Engineering and Technology – Higher Education Cell",
    "venue": "Salem",
    "audience": "Students",
    "topic": "GATE examination awareness",
    "role": "Speaker (Chief Guest)",
    "organizingOrganization": "Salem College of Engineering and Technology",
    "linkedInPostDates": [
      "17 Aug 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7097947276756619264/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Higher Education Cell at Salem College of Engineering and Technology in Salem, this student guidance seminar highlighted postgraduate engineering, research fellowships, and career pathways through the GATE examination.",
    "descriptionLine2": "I participated as Chief Guest and addressed engineering students on strategic preparation for higher technical education and research careers.",
    "media": [
      {
        "id": "EVT_058_MEDIA_01",
        "src": "/events/EVT_058/photos/EVT_058_Photo_01_D5622AQHBFDCpe_g1SQ.jpg",
        "driveId": "1dYWmSS0C6p3wJV5TiAEx4k-mfNUiqeOW",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      },
      {
        "id": "EVT_058_MEDIA_02",
        "src": "/events/EVT_058/photos/EVT_058_Photo_02_D5622AQFi1zMelBvndg.jpg",
        "driveId": "1ftlPcHONZ3dKDAJ9SDNs3XeNsCa1FjXU",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      },
      {
        "id": "EVT_058_MEDIA_03",
        "src": "/events/EVT_058/photos/EVT_058_Photo_03_D5622AQEQ1HlJJp529g.jpg",
        "driveId": "1D88Z3OHKKmnJPpIqQ-eACUUnnBxNJxgL",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      },
      {
        "id": "EVT_058_MEDIA_04",
        "src": "/events/EVT_058/photos/EVT_058_Photo_04_D5622AQF8eY39GqFaWA.jpg",
        "driveId": "1xm0fPw-FW4NWZViIW2YDEab9h-slGwq7",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      },
      {
        "id": "EVT_058_MEDIA_05",
        "src": "/events/EVT_058/photos/EVT_058_Photo_05_D5622AQGgPjvdqDN8dQ.jpg",
        "driveId": "1ltLuNA55wyjJc0f0K_78k0WB9tbufeCj",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      },
      {
        "id": "EVT_058_MEDIA_06",
        "src": "/events/EVT_058/photos/EVT_058_Photo_06_D5622AQE-BmSww6MtMw.jpg",
        "driveId": "12y4f6IP748P_pBzOkBLUInz4kg6Qj028",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      },
      {
        "id": "EVT_058_MEDIA_07",
        "src": "/events/EVT_058/photos/EVT_058_Photo_07_D5622AQEdslFSuXNgMw.jpg",
        "driveId": "1LpdoC7zAvOsREVJFKtDsyrc4zPk0DEYR",
        "kind": "photo",
        "caption": "Seminar – \"GATE Exam Awareness\" — Salem College of Engineering and Technology – Higher Education Cell"
      }
    ]
  },
  {
    "id": "EVT_059",
    "serialNumber": 59,
    "title": "\"Ask Me Anything\" Session on Startup Incubation",
    "sourceCategory": "Online Session (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Jury & Mentorship Activities"
    ],
    "year": 2023,
    "programDate": "11 Aug 2023, 7:00–8:30 PM",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "Online (Twitter Spaces)",
    "audience": "Startup enthusiasts, founders, investors",
    "topic": "Startup incubation in Tamil Nadu",
    "role": null,
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (guest: Gautham Palaniswamy, StartupTN)",
    "linkedInPostDates": [
      "11 Aug 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7095752488733069313/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – StartNet event; personal role not stated",
    "descriptionLine1": "Hosted live on Twitter Spaces by StartNet Ventures Private Limited featuring guest Gautham Palaniswamy of StartupTN, this interactive session addressed founder questions on startup incubation across Tamil Nadu.",
    "descriptionLine2": "Through StartNet Ventures Private Limited, I supported ecosystem outreach connecting startup enthusiasts, founders, and investors with regional incubation resources.",
    "media": [
      {
        "id": "EVT_059_MEDIA_01",
        "src": "/events/EVT_059/posters/EVT_059_Poster_01_D5622AQG2uVbYHo87Vw.jpg",
        "driveId": "1CyvIVK92hxyex21FhWvMh0Qx5r_uzl0j",
        "kind": "poster",
        "caption": "\"Ask Me Anything\" Session on Startup Incubation — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_060",
    "serialNumber": 60,
    "title": "Webinar – \"Goal Crafting for Growth: Driving Your Startup with OKRs\"",
    "sourceCategory": "Webinar (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Workshops & Training"
    ],
    "year": 2023,
    "programDate": "5 Aug 2023, 7:00–8:30 PM",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "Online (Zoom)",
    "audience": "Startups",
    "topic": "OKRs for startup growth",
    "role": null,
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (speaker: Dr. R. Sethuraman)",
    "linkedInPostDates": [
      "02 Aug 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7092484106852171776/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – StartNet event; personal role not stated",
    "descriptionLine1": "Presented online on Zoom by StartNet Ventures Private Limited with speaker Dr. R. Sethuraman, this founder webinar explored Objectives and Key Results (OKRs) as a disciplined framework for startup growth.",
    "descriptionLine2": "Through StartNet Ventures Private Limited, I promoted and supported this capability-building session for early-stage startup teams.",
    "media": [
      {
        "id": "EVT_060_MEDIA_01",
        "src": "/events/EVT_060/posters/EVT_060_Poster_01_D5622AQEb3SHwHZaiKg.jpg",
        "driveId": "14ZCUXAHsHuQFmWFVQ6ZcNH6lEWIWUDcI",
        "kind": "poster",
        "caption": "Webinar – \"Goal Crafting for Growth: Driving Your Startup with OKRs\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_061",
    "serialNumber": 61,
    "title": "Session – \"Innovation and Start-up Ecosystem with Enablers from the Regional Level\"",
    "sourceCategory": "Seminar (Innovation & Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "26 Jul 2023, 10:30 AM",
    "institution": "Paavai Engineering College (Autonomous) – Dept. of Biomedical Engineering & IIC",
    "venue": "Cute Hall, Paavai Engineering College, Namakkal",
    "audience": null,
    "topic": "Innovation and startup ecosystem; regional enablers",
    "role": "Speaker (Resource Speaker)",
    "organizingOrganization": "Paavai Engineering College",
    "linkedInPostDates": [
      "25 Jul 2023",
      "30 Jul 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7089609656951574529/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7091433872848015360/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of Biomedical Engineering and IIC at Cute Hall, Paavai Engineering College in Namakkal, this seminar examined innovation pipelines and regional startup ecosystem enablers.",
    "descriptionLine2": "I delivered the session as Resource Speaker, guiding participants on connecting campus innovations with regional incubation and entrepreneurship support networks.",
    "media": [
      {
        "id": "EVT_061_MEDIA_01",
        "src": "/events/EVT_061/photos/EVT_061_Photo_01_D5622AQFVCb83iNNuKw.jpg",
        "driveId": "1RXKJg2FOas0_GwIFQg-y7Orr435VXU3y",
        "kind": "photo",
        "caption": "Session – \"Innovation and Start-up Ecosystem with Enablers from the Regional Level\" — Paavai Engineering College (Autonomous) – Dept. of Biomedical Engineering & IIC"
      },
      {
        "id": "EVT_061_MEDIA_02",
        "src": "/events/EVT_061/photos/EVT_061_Photo_02_D5622AQEZssxdA1hX3Q.jpg",
        "driveId": "1EMR83bimjHn8MKZjDjxX2-9yfxcT_qCA",
        "kind": "photo",
        "caption": "Session – \"Innovation and Start-up Ecosystem with Enablers from the Regional Level\" — Paavai Engineering College (Autonomous) – Dept. of Biomedical Engineering & IIC"
      },
      {
        "id": "EVT_061_MEDIA_03",
        "src": "/events/EVT_061/photos/EVT_061_Photo_03_D5622AQHPcNZ_7SuNzg.jpg",
        "driveId": "1WasU4WGwGiHDjV3mim-Y8UUUBg47eF0w",
        "kind": "photo",
        "caption": "Session – \"Innovation and Start-up Ecosystem with Enablers from the Regional Level\" — Paavai Engineering College (Autonomous) – Dept. of Biomedical Engineering & IIC"
      },
      {
        "id": "EVT_061_MEDIA_04",
        "src": "/events/EVT_061/photos/EVT_061_Photo_04_D5622AQHqLViSAKfurw.jpg",
        "driveId": "1CkVzl2YmNlCEh4YuPMy1d2D15ji9H2Fo",
        "kind": "photo",
        "caption": "Session – \"Innovation and Start-up Ecosystem with Enablers from the Regional Level\" — Paavai Engineering College (Autonomous) – Dept. of Biomedical Engineering & IIC"
      },
      {
        "id": "EVT_061_MEDIA_05",
        "src": "/events/EVT_061/posters/EVT_061_Poster_01_D5622AQHMMdSHjhayFw.jpg",
        "driveId": "1qV6l_SkdXpAPURzh22fYRqPlgSRRWNBH",
        "kind": "poster",
        "caption": "Session – \"Innovation and Start-up Ecosystem with Enablers from the Regional Level\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_062",
    "serialNumber": 62,
    "title": "Seminar – \"The Lean Startup: How Entrepreneurs Create Radically Successful Business\" (SKCET)",
    "sourceCategory": "Seminar (Startups)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "14 Jul 2023, 11:00 AM",
    "institution": "Sri Krishna College of Engineering and Technology (Autonomous)",
    "venue": "Seminar Hall, SKCET, Coimbatore",
    "audience": "Students",
    "topic": "Lean startup methodology",
    "role": "Speaker",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. & Trueline Research Pvt. Ltd.",
    "linkedInPostDates": [
      "24 Jul 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7089157271175262208/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Presented at Sri Krishna College of Engineering and Technology (Autonomous) in Coimbatore in association with StartNet Ventures and Trueline Research, this student seminar unpacked Lean Startup methodologies.",
    "descriptionLine2": "I addressed engineering students as Speaker, illustrating how rapid experimentation and customer-validated learning build resilient businesses.",
    "media": [
      {
        "id": "EVT_062_MEDIA_01",
        "src": "/events/EVT_062/photos/EVT_062_Photo_01_D5622AQE9bEpjMWBW_A.jpg",
        "driveId": "12rt4yTmXYX8rtqz9j3Xh-7gT13uT9KP8",
        "kind": "photo",
        "caption": "Seminar – \"The Lean Startup: How Entrepreneurs Create Radically Successful Business\" (SKCET) — Sri Krishna College of Engineering and Technology (Autonomous)"
      },
      {
        "id": "EVT_062_MEDIA_02",
        "src": "/events/EVT_062/photos/EVT_062_Photo_02_D5622AQGzj3V7ROSYLA.jpg",
        "driveId": "1xh3GDzpdFXet6BYpUAizyv-AD_i2A8O1",
        "kind": "photo",
        "caption": "Seminar – \"The Lean Startup: How Entrepreneurs Create Radically Successful Business\" (SKCET) — Sri Krishna College of Engineering and Technology (Autonomous)"
      },
      {
        "id": "EVT_062_MEDIA_03",
        "src": "/events/EVT_062/photos/EVT_062_Photo_03_D5622AQFhrKwHFdf18A.jpg",
        "driveId": "1U_tj8-B8OTKJe6rbr81OVzkBY1p-QOpE",
        "kind": "photo",
        "caption": "Seminar – \"The Lean Startup: How Entrepreneurs Create Radically Successful Business\" (SKCET) — Sri Krishna College of Engineering and Technology (Autonomous)"
      }
    ]
  },
  {
    "id": "EVT_063",
    "serialNumber": 63,
    "title": "StartupPro Workshop – ChatGPT & Generative AI for Startups & Business Owners",
    "sourceCategory": "Workshop (Organised – Hybrid)",
    "categories": [
      "AI & Emerging Technologies",
      "Entrepreneurship & Startups",
      "Workshops & Training"
    ],
    "year": 2023,
    "programDate": "22 Jul 2023, 9:30 AM–12:30 PM",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "Hotel Windsor Castle (hybrid with virtual streaming)",
    "audience": "Startups and business owners",
    "topic": "ChatGPT and Generative AI for business",
    "role": null,
    "organizingOrganization": "StartNet Ventures Pvt. Ltd. (trainer: M.K. Elango)",
    "linkedInPostDates": [
      "08 Jul 2023",
      "21 Jul 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7083436572309663745/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7088075674992726016/"
    ],
    "verificationStatus": "Needs Verification",
    "verificationNote": "Needs Verification – StartNet event; personal role not stated",
    "descriptionLine1": "Hosted in hybrid format at Hotel Windsor Castle by StartNet Ventures Private Limited with trainer M.K. Elango, the StartupPro Workshop introduced startups and business owners to practical ChatGPT and Generative AI workflows.",
    "descriptionLine2": "Through StartNet Ventures Private Limited, I supported ecosystem outreach for this hybrid training initiative helping founders adopt Generative AI tools.",
    "media": [
      {
        "id": "EVT_063_MEDIA_01",
        "src": "/events/EVT_063/posters/EVT_063_Poster_01_D5622AQH8FJIfsDREbw.jpg",
        "driveId": "1YZF9Tfkq0my-EGZYvJfOF_ZAQ90Au2sd",
        "kind": "poster",
        "caption": "StartupPro Workshop – ChatGPT & Generative AI for Startups & Business Owners — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_064",
    "serialNumber": 64,
    "title": "StartNet Launch & Salem Chapter Launch",
    "sourceCategory": "Launch Event (Organised)",
    "categories": [
      "Entrepreneurship & Startups",
      "Conferences & Summits",
      "Professional & Industry Engagements"
    ],
    "year": 2023,
    "programDate": "22 Jun 2023, 5:30–7:30 PM",
    "institution": "StartNet Ventures Pvt. Ltd.",
    "venue": "Hotel Windsor Castle, Salem",
    "audience": "Startups, entrepreneurs and industry experts",
    "topic": "StartNet platform launch; inaugural address by StartupTN Director & CEO (virtual)",
    "role": "Organizer",
    "organizingOrganization": "StartNet Ventures Pvt. Ltd.",
    "linkedInPostDates": [
      "18 Jun 2023",
      "22 Jun 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7076023428406784000/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7077557670685126657/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Held at Hotel Windsor Castle in Salem with a virtual inaugural address by the Director and CEO of StartupTN, this milestone event marked the official launch of StartNet Ventures and its Salem Chapter.",
    "descriptionLine2": "I co-organised the launch gathering to unite startups, entrepreneurs, and industry experts within a collaborative regional founder network.",
    "media": [
      {
        "id": "EVT_064_MEDIA_01",
        "src": "/events/EVT_064/posters/EVT_064_Poster_01_D5622AQEdESjagiBngw.jpg",
        "driveId": "1yFDo8Nofp4skShRtBNRQDcYt4trDcuHH",
        "kind": "poster",
        "caption": "StartNet Launch & Salem Chapter Launch — Official Programme Poster"
      },
      {
        "id": "EVT_064_MEDIA_02",
        "src": "/events/EVT_064/posters/EVT_064_Poster_02_D5622AQFv_MsCaqjLcw.jpg",
        "driveId": "168XhMPw1TQk4zalWEeraHtJjrrVkfk3I",
        "kind": "poster",
        "caption": "StartNet Launch & Salem Chapter Launch — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_065",
    "serialNumber": 65,
    "title": "Mock Interview for MBA Students",
    "sourceCategory": "Placement / Career Training",
    "categories": [
      "Workshops & Training",
      "Jury & Mentorship Activities",
      "Professional & Industry Engagements"
    ],
    "year": 2023,
    "programDate": null,
    "institution": "Sona School of Management",
    "venue": null,
    "audience": "MBA students",
    "topic": "Mock interviews",
    "role": "Organizer & Trainer",
    "organizingOrganization": "Trueline Research Pvt. Ltd.",
    "linkedInPostDates": [
      "21 May 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7065868233349726208/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Conducted at Sona School of Management for MBA students, this career-readiness programme provided structured mock interview assessments aligned with industry recruitment standards.",
    "descriptionLine2": "Through Trueline Research Private Limited, I organised and led the mock interview sessions as Trainer, offering actionable executive feedback to strengthen students’ placement readiness.",
    "media": [
      {
        "id": "EVT_065_MEDIA_01",
        "src": "/events/EVT_065/photos/EVT_065_Photo_01_D5622AQG0e37oh4TyKQ.jpg",
        "driveId": "1_m_vWE19jG-7NfgMimrUC0WBxxxXq3xU",
        "kind": "photo",
        "caption": "Mock Interview for MBA Students — Sona School of Management"
      }
    ]
  },
  {
    "id": "EVT_066",
    "serialNumber": 66,
    "title": "Virtual International Technical Congress Summit – \"Roles of AI & ML in Industry 5.0\"",
    "sourceCategory": "Virtual Summit Talk",
    "categories": [
      "AI & Emerging Technologies",
      "Conferences & Summits",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": null,
    "institution": "Sri Venkateswara College of Engineering & Technology (SVCET) – Dept. of CSE",
    "venue": "Andhra Pradesh (virtual)",
    "audience": null,
    "topic": "AI & ML in Industry 5.0",
    "role": "Speaker (Guest Speaker)",
    "organizingOrganization": "SVCET; Trueline Research & Trueline Academic and Research Centre",
    "linkedInPostDates": [
      "05 Apr 2023",
      "01 May 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7049399703829966848/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7058753649103011840/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Hosted virtually by the Department of Computer Science and Engineering at Sri Venkateswara College of Engineering & Technology in Andhra Pradesh alongside Trueline Research and Trueline Academic and Research Centre, this international congress examined Artificial Intelligence and Machine Learning in Industry 5.0.",
    "descriptionLine2": "I delivered a Guest Speaker address exploring human-centric intelligent automation and next-generation industrial applications of AI and ML.",
    "media": [
      {
        "id": "EVT_066_MEDIA_01",
        "src": "/events/EVT_066/photos/EVT_066_Photo_01_D5622AQGqPVOYiYTqTA.jpg",
        "driveId": "1ArAn8XtpURB65-VUMEgs2NCAHxy90424",
        "kind": "photo",
        "caption": "Virtual International Technical Congress Summit – \"Roles of AI & ML in Industry 5.0\" — Sri Venkateswara College of Engineering & Technology (SVCET) – Dept. of CSE"
      },
      {
        "id": "EVT_066_MEDIA_02",
        "src": "/events/EVT_066/photos/EVT_066_Photo_02_D5622AQHU2-KjhJg03Q.jpg",
        "driveId": "1WeT8VoeA_w-IA-pymVugpFOxORZ-UcmY",
        "kind": "photo",
        "caption": "Virtual International Technical Congress Summit – \"Roles of AI & ML in Industry 5.0\" — Sri Venkateswara College of Engineering & Technology (SVCET) – Dept. of CSE"
      },
      {
        "id": "EVT_066_MEDIA_03",
        "src": "/events/EVT_066/posters/EVT_066_Poster_01_D5622AQGQEXh3n9YRVw.jpg",
        "driveId": "1G30gG_pebe5-9L46bTiEZ-IZpc_14O_O",
        "kind": "poster",
        "caption": "Virtual International Technical Congress Summit – \"Roles of AI & ML in Industry 5.0\" — Official Programme Poster"
      },
      {
        "id": "EVT_066_MEDIA_04",
        "src": "/events/EVT_066/posters/EVT_066_Poster_02_D5622AQHgh1Jiz8QgBQ.jpg",
        "driveId": "1qdboiKV7qW9BcPynyKdnZXly5AU818zc",
        "kind": "poster",
        "caption": "Virtual International Technical Congress Summit – \"Roles of AI & ML in Industry 5.0\" — Official Programme Poster"
      },
      {
        "id": "EVT_066_MEDIA_05",
        "src": "/events/EVT_066/posters/EVT_066_Poster_03_D5622AQHXWx96G9zW-w.jpg",
        "driveId": "1Wper3DgCaQxJ3aLZrxPdB11omDxCyHgH",
        "kind": "poster",
        "caption": "Virtual International Technical Congress Summit – \"Roles of AI & ML in Industry 5.0\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_067",
    "serialNumber": 67,
    "title": "Guest Lecture – \"How to Do Research Activities for UG & PG Students\" (with MoU signing)",
    "sourceCategory": "Guest Lecture (Research)",
    "categories": [
      "Research & Innovation",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": null,
    "institution": "J J College of Engineering & Technology – Dept. of ECE",
    "venue": "Trichy",
    "audience": "UG & PG students",
    "topic": "Research activities for UG & PG students",
    "role": "Speaker (Guest Lecture)",
    "organizingOrganization": "J J College of Engineering & Technology; MoU with Trueline Research",
    "linkedInPostDates": [
      "19 Apr 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7054240073822720000/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised by the Department of Electronics and Communication Engineering at J J College of Engineering & Technology in Trichy alongside an institutional MoU signing with Trueline Research, this guest lecture introduced undergraduate and postgraduate students to structured academic research.",
    "descriptionLine2": "I delivered the Guest Lecture, guiding students on problem formulation, literature synthesis, and translating academic studies into quality publications.",
    "media": [
      {
        "id": "EVT_067_MEDIA_01",
        "src": "/events/EVT_067/posters/EVT_067_Poster_01_D5622AQEYQSe6ySQqdQ.jpg",
        "driveId": "1ctMz6oHJDiDlL2rIOXDyhaJcNoOkNdds",
        "kind": "poster",
        "caption": "Guest Lecture – \"How to Do Research Activities for UG & PG Students\" (with MoU signing) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_068",
    "serialNumber": 68,
    "title": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE)",
    "sourceCategory": "Workshop (IPR)",
    "categories": [
      "Intellectual Property Rights",
      "Workshops & Training",
      "Entrepreneurship & Startups"
    ],
    "year": 2023,
    "programDate": "12 Apr 2023, 2:30–4:30 PM",
    "institution": "Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE",
    "venue": "Kalams Chamber, Paavai Engineering College, Namakkal",
    "audience": null,
    "topic": "IPR and IP management for startups",
    "role": "Trainer (Resource Speaker)",
    "organizingOrganization": "Trueline Research Pvt. Ltd.",
    "linkedInPostDates": [
      "11 Apr 2023",
      "13 Apr 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7051528553909145600/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7052074305664253952/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Conducted at Kalams Chamber, Paavai Engineering College in Namakkal by the Department of CSE with IIC and ISTE, this workshop addressed intellectual property protection and startup IP management.",
    "descriptionLine2": "Representing Trueline Research Private Limited, I led the workshop as Resource Speaker and trained participants on patenting strategies for technology ventures.",
    "media": [
      {
        "id": "EVT_068_MEDIA_01",
        "src": "/events/EVT_068/photos/EVT_068_Photo_01_D5622AQFHt6PQrvpL0g.jpg",
        "driveId": "18cgCgpik1RxBRBOwerKzV9ytahCG_Kge",
        "kind": "photo",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE"
      },
      {
        "id": "EVT_068_MEDIA_02",
        "src": "/events/EVT_068/photos/EVT_068_Photo_02_D5622AQHBADxqmHnn2w.jpg",
        "driveId": "1TbTYySON7jQui1xsuiafMEDgzoupa3en",
        "kind": "photo",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE"
      },
      {
        "id": "EVT_068_MEDIA_03",
        "src": "/events/EVT_068/photos/EVT_068_Photo_03_D5622AQFBfbISe2fB9w.jpg",
        "driveId": "1bP-h9yjpPRMoH0nLFruSjDQRXXAyPv4g",
        "kind": "photo",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE"
      },
      {
        "id": "EVT_068_MEDIA_04",
        "src": "/events/EVT_068/photos/EVT_068_Photo_04_D5622AQFBP9j53SRwNw.jpg",
        "driveId": "1yK6EDGJMSx4BLzXTV_6D38el_pI8ljp7",
        "kind": "photo",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE"
      },
      {
        "id": "EVT_068_MEDIA_05",
        "src": "/events/EVT_068/photos/EVT_068_Photo_05_D5622AQETnxap9MTQcA.jpg",
        "driveId": "1tj3yuDQ4S_0krSXf5eHVpqkAz5guVPyF",
        "kind": "photo",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE"
      },
      {
        "id": "EVT_068_MEDIA_06",
        "src": "/events/EVT_068/photos/EVT_068_Photo_06_D5622AQFsKbCSrgP5bA.jpg",
        "driveId": "1TbdBR4ZmAJ-PYjA0PjzyKYJdWLzrC4r6",
        "kind": "photo",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Paavai Engineering College (Autonomous) – Dept. of CSE with IIC & ISTE"
      },
      {
        "id": "EVT_068_MEDIA_07",
        "src": "/events/EVT_068/posters/EVT_068_Poster_01_D5622AQErShkk3mktwg.jpg",
        "driveId": "15bLc2KtS7X-Kj4md80s2Xjqi21Yg3oAJ",
        "kind": "poster",
        "caption": "Workshop on Intellectual Property Rights and IP Management for Startup (Paavai CSE) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_069",
    "serialNumber": 69,
    "title": "Seminar – \"How to Build a Career through Startup\" (with MoU signing)",
    "sourceCategory": "Seminar (Startups / Careers)",
    "categories": [
      "Entrepreneurship & Startups",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2023,
    "programDate": "15 Feb 2023, 10:00 AM",
    "institution": "Salem College of Engineering and Technology",
    "venue": "Seminar Hall, SCET",
    "audience": "Students",
    "topic": "Building a career through startups",
    "role": "Speaker",
    "organizingOrganization": "Trueline Research Pvt. Ltd.",
    "linkedInPostDates": [
      "15 Feb 2023",
      "15 Feb 2023"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7031420000380862464/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7031653308339548160/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Held at the Seminar Hall of Salem College of Engineering and Technology alongside an institutional MoU signing with Trueline Research Private Limited, this seminar introduced students to career pathways in the startup ecosystem.",
    "descriptionLine2": "I addressed the students as Speaker, highlighting how entrepreneurial problem-solving and early-stage ventures create meaningful career opportunities.",
    "media": [
      {
        "id": "EVT_069_MEDIA_01",
        "src": "/events/EVT_069/photos/EVT_069_Photo_01_C5622AQHH_4NWDBHBBQ.jpg",
        "driveId": "1EXT4GwE5kicsogKBajdK6NgxZSaCWFeX",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_02",
        "src": "/events/EVT_069/photos/EVT_069_Photo_02_C5622AQENtCa4oK1FHA.jpg",
        "driveId": "1q712XShcPIoAOq1NK6HF2IcxNSR3TP8u",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_03",
        "src": "/events/EVT_069/photos/EVT_069_Photo_03_C5622AQFulzxQSfnHFA.jpg",
        "driveId": "16Ga-42zk6OMNtPSVv71ibEWkUJMnRHcg",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_04",
        "src": "/events/EVT_069/photos/EVT_069_Photo_04_C5622AQG7w9No2h_6zA.jpg",
        "driveId": "1Z7HBvKoUloZAnZ2dx28u1TgCilRDfDQi",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_05",
        "src": "/events/EVT_069/photos/EVT_069_Photo_05_C5622AQGp8QROOJwSvQ.jpg",
        "driveId": "11vHmwLaM_5nxLHn_cr4uaLIs-GEkh86v",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_06",
        "src": "/events/EVT_069/photos/EVT_069_Photo_06_C5622AQH3uo2LjnnE2g.jpg",
        "driveId": "1mCS2VHvXezZaCmwydK2ueZTz6As3nNcp",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_07",
        "src": "/events/EVT_069/photos/EVT_069_Photo_07_C5622AQEC8QDxU0wDsA.jpg",
        "driveId": "1ZqazDLFSPyQqUyt1KNXFTRvU-p4BQdF0",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_08",
        "src": "/events/EVT_069/photos/EVT_069_Photo_08_C5622AQHunVVuyiaPTg.jpg",
        "driveId": "1rPRCeSgS9_2L-HQq8zGlQDuT21yPpKSN",
        "kind": "photo",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Salem College of Engineering and Technology"
      },
      {
        "id": "EVT_069_MEDIA_09",
        "src": "/events/EVT_069/posters/EVT_069_Poster_01_C5622AQFy5Q_1Qodwvw.jpg",
        "driveId": "1xISKX2mj46v9dXvFwbiWGwTW86X95g8N",
        "kind": "poster",
        "caption": "Seminar – \"How to Build a Career through Startup\" (with MoU signing) — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_070",
    "serialNumber": 70,
    "title": "\"My Story – Motivational Session on Successful Innovators\"",
    "sourceCategory": "Motivational Session",
    "categories": [
      "Entrepreneurship & Startups",
      "Research & Innovation",
      "Guest Lectures & Keynote Sessions"
    ],
    "year": 2022,
    "programDate": null,
    "institution": "VSA Group of Institutions",
    "venue": "Salem",
    "audience": null,
    "topic": "Journeys of successful innovators",
    "role": "Speaker",
    "organizingOrganization": "Trueline Academic and Research Centre",
    "linkedInPostDates": [
      "25 Nov 2022",
      "28 Nov 2022"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:7001862631389089792/",
      "https://www.linkedin.com/feed/update/urn:li:activity:7002971566519046144/"
    ],
    "verificationStatus": "Verified",
    "verificationNote": "Verified",
    "descriptionLine1": "Organised at VSA Group of Institutions in Salem in association with Trueline Academic and Research Centre, this motivational session reflected on the journeys and mindsets of accomplished innovators.",
    "descriptionLine2": "I delivered the session as Speaker, sharing personal lessons from my research and entrepreneurial journey to inspire emerging student innovators.",
    "media": [
      {
        "id": "EVT_070_MEDIA_01",
        "src": "/events/EVT_070/photos/EVT_070_Photo_01_C5622AQHwp_K8iUMDZw.jpg",
        "driveId": "1X2UEcoaGEpT5BzlBnRY_RGpxShEzh84j",
        "kind": "photo",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — VSA Group of Institutions"
      },
      {
        "id": "EVT_070_MEDIA_02",
        "src": "/events/EVT_070/photos/EVT_070_Photo_02_C5622AQEAQ6MD1q0iiA.jpg",
        "driveId": "1dLL-Uqpqv2VU6coNocfeLvaFKrN5SjTL",
        "kind": "photo",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — VSA Group of Institutions"
      },
      {
        "id": "EVT_070_MEDIA_03",
        "src": "/events/EVT_070/photos/EVT_070_Photo_03_C5622AQFv0KMvAq-Jpw.jpg",
        "driveId": "1Ev1V80oIT36ztL0CyjTPirpGChMsBj-R",
        "kind": "photo",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — VSA Group of Institutions"
      },
      {
        "id": "EVT_070_MEDIA_04",
        "src": "/events/EVT_070/photos/EVT_070_Photo_04_C5622AQF_zm1ch4N2dA.jpg",
        "driveId": "1vTrsHbLw-b65RjefwyUinC5GWYytmq-Z",
        "kind": "photo",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — VSA Group of Institutions"
      },
      {
        "id": "EVT_070_MEDIA_05",
        "src": "/events/EVT_070/photos/EVT_070_Photo_05_C5622AQFGqSpbiSZaZQ.jpg",
        "driveId": "1o5VvpGDWdG3HSULjr8YMPoHCavGPUOxl",
        "kind": "photo",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — VSA Group of Institutions"
      },
      {
        "id": "EVT_070_MEDIA_06",
        "src": "/events/EVT_070/photos/EVT_070_Photo_06_C5622AQGvKR7sCeh8iw.jpg",
        "driveId": "1ZNqbXj8b8MFqXCKRBhla-ZP2fsuYR5jP",
        "kind": "photo",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — VSA Group of Institutions"
      },
      {
        "id": "EVT_070_MEDIA_07",
        "src": "/events/EVT_070/posters/EVT_070_Poster_01_C5622AQEdkZcPkut_iw.jpg",
        "driveId": "1jKBTqYWEOnt2bizuf2DedGkDUI6IGcHg",
        "kind": "poster",
        "caption": "\"My Story – Motivational Session on Successful Innovators\" — Official Programme Poster"
      }
    ]
  },
  {
    "id": "EVT_071",
    "serialNumber": 71,
    "title": "IICSTEM'22 – International Innovation Conference on Science, Technology, Engineering and Management (IdeatoResearch)",
    "sourceCategory": "International Conference (Organised)",
    "categories": [
      "Conferences & Summits",
      "Research & Innovation"
    ],
    "year": 2022,
    "programDate": "November 2022",
    "institution": "Project Contest Innovations LLP & Trueline Academic & Research Centre",
    "venue": null,
    "audience": "Researchers and innovators",
    "topic": "Research showcase before an international jury; journal publication",
    "role": "Organizer (Co-organiser)",
    "organizingOrganization": "Trueline Academic & Research Centre with Project Contest Innovations LLP",
    "linkedInPostDates": [
      "22 Sep 2022"
    ],
    "linkedInUrls": [
      "https://www.linkedin.com/feed/update/urn:li:activity:6978549206915383296/"
    ],
    "verificationStatus": "Verified – Announcement",
    "verificationNote": "Verified – Announcement (post states role, date & venue; delivery not separately confirmed)",
    "descriptionLine1": "Jointly organised by Project Contest Innovations LLP and Trueline Academic & Research Centre, IICSTEM'22 provided an international platform across science, technology, engineering, and management for researchers to present work before an international jury with scholarly publication avenues.",
    "descriptionLine2": "Serving as Co-organiser through Trueline Academic & Research Centre, I coordinated academic outreach to connect researchers and innovators with peer-reviewed presentation opportunities.",
    "media": [
      {
        "id": "EVT_071_MEDIA_01",
        "src": "/events/EVT_071/posters/EVT_071_Poster_01_C4D22AQH8bktovuNVtQ.jpg",
        "driveId": "1ALouuESa97mXTW-kDiwAn0HxoSXz9qQR",
        "kind": "poster",
        "caption": "IICSTEM'22 – International Innovation Conference on Science, Technology, Engineering and Management (IdeatoResearch) — Official Programme Poster"
      }
    ]
  }
];

// Photographs from Google Drive that cannot be confidently matched to a specific main-sheet event
// are surfaced here rather than assigned to an unrelated event.
export const UNCATEGORIZED_EVENT_PHOTOS: UncategorizedEventPhoto[] = [];

// Internal audit reference from "Not Included – Review" (14 records).
// Intentionally excluded from PORTFOLIO_EVENTS_DATABASE per source governance rules.
export const EXCLUDED_REVIEW_RECORDS = [
  { id: 1, title: 'Industry / Experts / MoU Partners Townhall – JKKN Institutions', reason: 'Attended as MoU partner and industry expert; no talk or training role stated.' },
  { id: 2, title: 'STEAM Future Tech 2026 – Masterclass Series & Startup Expo (StartupTN & Excel Group of Schools)', reason: '"Happy to be a Part of this Event" – role not stated.' },
  { id: 3, title: 'THINK SALEM 2025 (Sona Incubations)', reason: 'Trueline was Outreach Partner; not conducted by us.' },
  { id: 4, title: 'DevFest Salem 2025 (GDG Salem)', reason: 'Trueline was Official Knowledge Partner; not conducted by us.' },
  { id: 5, title: 'PoultryTech Summit & Expo 2024 (StartupTN Salem Hub & PoultryCare)', reason: 'Trueline was Outreach Partner; not conducted by us.' },
  { id: 6, title: 'D2C.Connect Summit & Expo 2024', reason: "Promoted by him and by StartNet's founder; organiser not stated in the posts." },
  { id: 7, title: 'AI@HigherEd Summit 2025 (StartNet Research)', reason: 'He congratulates StartNet Research and says he is "excited to be part"; role not stated.' },
  { id: 8, title: 'Digital Politics Conclave – Madurai edition', reason: 'Repost only; no organiser or role evidence for us.' },
  { id: 9, title: 'Tech Mingle – Blockchain for Startups (T2Hub)', reason: 'Announcement by M.K. Elango appearing in his activity; his role not stated.' },
  { id: 10, title: '"How to Grow Startups in Tier 2 & 3 Cities" (Sona School of Business & Management)', reason: '"Happy to be a part of this Event" – role not stated.' },
  { id: 11, title: 'Project Expo – KPR College of Arts Science and Research', reason: 'Attended the expo; no delivery role stated.' },
  { id: 12, title: 'SCI-FESTA Vol. 2 – Virtual Scientific Symposium (Project Contest Innovations)', reason: 'Trueline Academic & Research Centre listed as Ecosystem Partner only.' },
  { id: 13, title: 'Kerala Branch Grand Opening – Trueline Research', reason: 'Corporate inauguration, not a program or workshop.' },
  { id: 14, title: 'MoU signings (various colleges, 2023–2025)', reason: 'MoUs only. Where an MoU coincided with a seminar, the seminar is listed in the main sheet.' },
] as const;
                                    