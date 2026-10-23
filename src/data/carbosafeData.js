// ==============================================================
// CARBO SAFE - CORE PLATFORM DATA SPECIFICATIONS
// ClimateTech • Artificial Intelligence • Carbon Markets • Blockchain-Ready
// ==============================================================

export const platformMeta = {
  name: "CarboSafe",
  tagline: "Measuring, Predicting and Reducing Carbon Footprints with AI",
  badgePills: [
    "ClimateTech",
    "Artificial Intelligence",
    "Carbon Markets",
    "Blockchain-ready"
  ],
  oneLinePitch: "CarboSafe is an AI-powered, blockchain-ready carbon credit marketplace that connects farmers generating carbon reductions with industries seeking credible ways to offset their emissions.",
  mission: "Make carbon credits more trustworthy, transparent, and fair to the people who help protect the environment.",
  collegePitch: {
    title: "CarboSafe — Measuring, Predicting and Reducing Carbon Footprints with AI",
    summary: "The IT industry is growing rapidly, but data centres, cloud computing, and digital infrastructure also contribute to greenhouse gas emissions. At the same time, carbon markets face challenges involving verification, transparency, and fair compensation for farmers.",
    highlights: [
      "AI-powered, blockchain-ready carbon credit marketplace connecting farmers with industries",
      "Sustainable agricultural projects registered with satellite imagery & sensor telemetry",
      "Traceable carbon credits with tamper-evident records & anti-double-counting safeguards",
      "Farmer-first revenue model directing 70–90% of net distributable proceeds directly to farmers"
    ]
  }
};

export const problemsData = [
  {
    id: "A",
    title: "Rising Carbon Emissions",
    category: "Industrial & IT Impact",
    summary: "IT companies, data centers, cement plants, steel manufacturers, and energy companies consume electricity and generate greenhouse gas emissions. Cloud computing and AI workloads accelerate energy demand.",
    icon: "bi-cloud-slash",
    stat: "High Growth",
    statLabel: "Cloud & AI Energy Demand",
    color: "#ea4335",
    bullets: [
      "Massive server farms and hyperscale data centers require 24/7 cooling and power",
      "Hardware manufacturing, transport, and e-waste generate significant Scope 3 emissions",
      "Rapid explosion of generative AI training & inference workloads compounds power footprint"
    ]
  },
  {
    id: "B",
    title: "Lack of Trust in Carbon Credits",
    category: "Market Integrity",
    summary: "Buyers need confidence that a credit represents a real, measurable reduction or removal of emissions. Weak verification, greenwashing, and double-counting severely undermine global market trust.",
    icon: "bi-shield-exclamation",
    stat: "Integrity Gap",
    statLabel: "Authenticity & Double-Counting Risks",
    color: "#f59e0b",
    bullets: [
      "Paper-based manual accounting leads to frequent errors and lack of auditable provenance",
      "Credits historically challenged for authenticity due to static unverified estimates",
      "Duplicate claims across multiple voluntary registries without central cryptographic verification"
    ]
  },
  {
    id: "C",
    title: "Farmers Receive Insufficient Value",
    category: "Farmer Inequity",
    summary: "Farmers using agroforestry, tree planting, and regenerative agricultural practices help store carbon, but struggle to access carbon markets and receive a fair share of revenue.",
    icon: "bi-cash-stack",
    stat: "Opaque Splits",
    statLabel: "Middlemen Drain Value",
    color: "#10b981",
    bullets: [
      "Traditional brokers and intermediaries capture the majority of carbon finance margins",
      "Smallholder farmers face complex paperwork, certification fees, and tech barriers",
      "Delayed payouts leave farmers without working capital to sustain soil restoration"
    ]
  },
  {
    id: "D",
    title: "The Climate Impact Gap",
    category: "Financing Bottleneck",
    summary: "When credits are difficult to verify and farmers lack incentives, credible climate projects become harder to finance and scale, widening the gap between corporate climate targets and real removal.",
    icon: "bi-graph-down-arrow",
    stat: "Capital Delay",
    statLabel: "High-Potential Projects Unfunded",
    color: "#6366f1",
    bullets: [
      "Industries hesitate to purchase voluntary offsets due to reputation and greenwashing fears",
      "High-potential nature-based carbon sinks remain under-resourced in developing regions",
      "Lack of real-time monitoring means reversals or tree die-offs go undetected"
    ]
  }
];

export const centralProblemStatement = {
  headline: "The Central Problem Statement",
  statement: "Carbon markets need a reliable way to connect measurable environmental benefits with buyers while improving transparency, preventing duplicate claims, and ensuring that farmers receive a fair share of the value.",
  disclaimer: "Important: Statistics cited in preliminary pitch decks (e.g. claims of authenticity challenges or manual accounting error rates) represent initial presentation estimates that must be validated with independent empirical research before formal registry filings."
};

export const solutionSteps = [
  {
    step: "01",
    title: "Farmers Register Projects",
    subtitle: "Onboarding & Field Geofencing",
    desc: "Farmers submit land coordinates, agricultural practices (agroforestry, regenerative soil, tree planting), parcel boundary polygons, and baseline historical records.",
    icon: "bx-map-pin",
    badge: "Land Geofencing",
    accent: "#10b981",
    features: [
      "Simple mobile-accessible UI for low-bandwidth rural connectivity",
      "GPS polygon boundary tagging and land tenure documentation",
      "Baseline crop, soil type, and agroforestry species cataloging"
    ]
  },
  {
    step: "02",
    title: "Measure and Verify with AI",
    subtitle: "Multi-Sensor Environmental Telemetry",
    desc: "AI models analyse high-resolution Sentinel-2 and drone imagery alongside IoT soil moisture and organic carbon telemetry to track environmental changes over time.",
    icon: "bx-radar",
    badge: "Satellite & Drone AI",
    accent: "#0284c7",
    features: [
      "NDVI, biomass volume, and canopy cover time-series computer vision",
      "IoT sensor integration for ground-truth soil moisture and carbon flux",
      "Automated anomaly flags for sudden clearing, drought, or degradation"
    ]
  },
  {
    step: "03",
    title: "Validate Carbon Reductions",
    subtitle: "Rigorous Methodology Accounting",
    desc: "Standardized carbon accounting engines compute net CO₂e sequestered, deduct conservative uncertainty buffers, and coordinate independent third-party auditor validation.",
    icon: "bx-check-shield",
    badge: "Methodology Engine",
    accent: "#8b5cf6",
    features: [
      "Calculations adhere to accepted IPCC / Verra / Gold Standard frameworks",
      "Conservative uncertainty discounting prevents over-crediting",
      "Independent verifier portal for transparent audit and sign-off"
    ]
  },
  {
    step: "04",
    title: "Industries Purchase Credits",
    subtitle: "Transparent Corporate Offsetting",
    desc: "Enterprises browse verified project listings, inspect multi-year satellite evidence and audit reports, and execute atomic credit purchases with instant certificate retirement.",
    icon: "bx-building",
    badge: "Atomic Execution",
    accent: "#f59e0b",
    features: [
      "Project-level evidence dossier: satellite time-lapse & audit proofs",
      "Atomic transaction engine guaranteeing no double-issuance or overselling",
      "Immutable retirement certificates mapped to corporate Scope 1, 2, or 3 reporting"
    ]
  },
  {
    step: "05",
    title: "Transparent Farmer Payouts",
    subtitle: "70–90% Direct Value Routing",
    desc: "Smart contracts automatically disburse agreed proceeds (70–90%) directly to the project farmer's wallet, with every rupee logged in a public, tamper-evident ledger.",
    icon: "bx-wallet",
    badge: "Direct Distribution",
    accent: "#10b981",
    features: [
      "Direct bank / UPI / smart wallet transfer with zero middleman deductions",
      "Full public audit trail showing exact fee breakdown and farmer compensation",
      "Ongoing milestone-based payouts incentivizing long-term permanence"
    ]
  }
];

export const stakeholdersData = [
  {
    id: "farmers",
    role: "Farmers",
    subrole: "Project Creators & Land Stewards",
    icon: "bx-user-pin",
    accent: "#10b981",
    tagline: "Monetize sustainable agriculture with dignity, transparency, and fair compensation.",
    capabilities: [
      "Register land parcels and sustainability projects via simple smartphone workflow",
      "Submit project details, GPS coordinates, area, and supporting photographs",
      "Track satellite verification status and estimated carbon credits in real-time",
      "View credit sales, live earnings balance, and transparent withdrawal history"
    ],
    dashboardMock: {
      stat1: "12.4 Hectares",
      stat1Label: "Registered Agroforestry",
      stat2: "480 Tonnes",
      stat2Label: "Verified CO₂e Sequestered",
      stat3: "₹3,84,000",
      stat3Label: "Total Farmer Earnings (80%)",
      badge: "Active Farmer Node #208"
    }
  },
  {
    id: "industries",
    role: "Industries",
    subrole: "Credit Buyers & Corporate Off-takers",
    icon: "bx-buildings",
    accent: "#1a73e8",
    tagline: "Neutralize unavoidable emissions with verified, tamper-evident nature-based credits.",
    capabilities: [
      "Browse high-integrity projects with satellite evidence and methodology ratings",
      "Review independent verification reports, risk scores, and co-benefits",
      "Purchase credits via secure atomic transactions with instant receipt generation",
      "Retire credits permanently with unique cryptographic certificates for ESG disclosure"
    ],
    dashboardMock: {
      stat1: "1,250 Tonnes",
      stat1Label: "Retired Offsets (FY 2026)",
      stat2: "100% Traceable",
      stat2Label: "Blockchain Proof of Retirement",
      stat3: "₹12.5 Lakhs",
      stat3Label: "Direct Farmer Climate Impact",
      badge: "Enterprise Tier: Tech Infra Ltd."
    }
  },
  {
    id: "verifiers",
    role: "Verifiers & Admins",
    subrole: "Market Integrity & Independent Validation",
    icon: "bx-check-double",
    accent: "#9333ea",
    tagline: "Ensure strict methodology adherence, investigate anomalies, and prevent fraud.",
    capabilities: [
      "Review project documentation, land ownership records, and baseline data",
      "Investigate suspicious sensor telemetry or satellite anomaly flags",
      "Approve, reject, or request field corrections prior to credit issuance",
      "Monitor transaction ledgers to prevent duplicate credit issuance across registries"
    ],
    dashboardMock: {
      stat1: "99.4%",
      stat1Label: "Verification Confidence Index",
      stat2: "24 Projects",
      stat2Label: "Under Active Satellite Surveillance",
      stat3: "Zero",
      stat3Label: "Duplicate Issuances Allowed",
      badge: "Registry Integrity Council"
    }
  }
];

export const techLayers = [
  {
    layer: "Layer 1",
    title: "Data Collection",
    status: "Active MVP + Planned IoT",
    desc: "Collect project locations, polygon land area, agricultural practices, Sentinel-2 / Landsat satellite imagery, drone high-res surveys, IoT soil sensors, and relevant emissions records.",
    currentStatus: "Initial version: user-submitted project information stored in Supabase with spatial boundaries.",
    icon: "bi-layers-half",
    color: "#1a73e8"
  },
  {
    layer: "Layer 2",
    title: "AI Measurement & Verification Support",
    status: "Planned & Modeling",
    desc: "Estimate carbon changes through computer vision canopy models, predict longitudinal biomass outcomes, perform NDVI time-series analysis, and flag suspicious submissions.",
    currentStatus: "Planned: computer vision models trained on tropical agroforestry + Sentinel imagery pipelines.",
    icon: "bi-cpu",
    color: "#8b5cf6"
  },
  {
    layer: "Layer 3",
    title: "Carbon Credit Engine",
    status: "Methodology Pipeline",
    desc: "Convert eligible, verified net reductions into standardized credits where 1 carbon credit = 1 metric tonne of CO₂ equivalent reduced or removed.",
    currentStatus: "Methodology-based calculations, strict issuance state machine (Draft → Verified → Issued → Retired).",
    icon: "bi-calculator",
    color: "#10b981"
  },
  {
    layer: "Layer 4",
    title: "Blockchain & Payouts",
    status: "Smart Contract Architecture",
    desc: "Record credit minting, ownership transfers, and retirement with immutable cryptographic identifiers. Smart contracts automate agreed revenue distributions to farmers.",
    currentStatus: "Planned: tamper-evident ledger integration, ERC-1155 / audited smart contract escrow for payouts.",
    icon: "bi-link-45deg",
    color: "#f59e0b"
  }
];

export const techSynergyTable = [
  {
    tech: "Satellite and drone imagery",
    purpose: "Observe land canopy, biomass density, and vegetation changes over time at scale",
    role: "Remote Observation"
  },
  {
    tech: "IoT soil & weather sensors",
    purpose: "Collect ground-truth field-level moisture, temperature, and carbon flux readings",
    role: "Ground Truth"
  },
  {
    tech: "AI & computer vision",
    purpose: "Analyse multi-spectral imagery, predict biomass yield, and flag potential anomalies",
    role: "Intelligent Analytics"
  },
  {
    tech: "Carbon accounting engine",
    purpose: "Estimate net emissions reductions using rigorous, standardized methodologies",
    role: "Quantification"
  },
  {
    tech: "Blockchain registry",
    purpose: "Provide tamper-evident, immutable records of credit issuance, ownership, and retirement",
    role: "Provenance & Integrity"
  },
  {
    tech: "Smart contracts",
    purpose: "Enforce programmed transaction rules, atomic swaps, and automated farmer payouts",
    role: "Autonomous Execution"
  }
];

export const techDistinctionNote = {
  headline: "An Important Distinction: AI + Blockchain Reality Check",
  text: "AI can support measurement and fraud detection, but it cannot prove every carbon claim by itself. Blockchain preserves records; it cannot guarantee that the original measurements were truthful. Strong carbon accounting, independent verification, and checks against double-counting are still necessary foundations."
};

export const itIndustrySection = {
  headline: "How CarboSafe Helps the IT Industry Specifically",
  context: "With the carbon footprint of IT, data centres, cloud computing, and AI expanding exponentially, technology enterprises require credible, transparent decarbonization pathways.",
  emissionsSources: [
    {
      title: "Data Centres & Cloud Infrastructure",
      desc: "Massive round-the-clock electricity consumption for servers, high-density compute racks, and uninterrupted backup generators.",
      icon: "bi-server"
    },
    {
      title: "Cooling Systems & Thermal Power",
      desc: "HVAC chillers and water-cooling arrays required to prevent thermal throttling consume up to 40% of data centre facility power.",
      icon: "bi-snow2"
    },
    {
      title: "Hardware Manufacturing & Scope 3",
      desc: "Silicon fabrication, raw rare-earth minerals, semiconductor logistics, packaging, and rapid hardware replacement cycles.",
      icon: "bi-cpu-fill"
    },
    {
      title: "AI Workloads & LLM Training",
      desc: "Training and serving large frontier models consumes tens of megawatt-hours, dramatically inflating corporate power bills.",
      icon: "bi-lightning-charge-fill"
    }
  ],
  fiveStepProcess: [
    {
      step: 1,
      title: "Measure",
      desc: "The company calculates its emissions using electricity bills, PUE server data, and GHG Protocol standards."
    },
    {
      step: 2,
      title: "Reduce First",
      desc: "It optimizes server utilization, software efficiency, green hosting, and shifts to renewable electricity."
    },
    {
      step: 3,
      title: "Explore Eligible Credits",
      desc: "For remaining unavoidable emissions, it reviews independently verified, high-integrity projects on CarboSafe."
    },
    {
      step: 4,
      title: "Purchase and Retire",
      desc: "It purchases verified credits with immutable retirement proof recorded against its chosen emissions claim."
    },
    {
      step: 5,
      title: "Support Farmers",
      desc: "Eligible project proceeds are distributed directly (70–90%) to the rural stewards protecting the land."
    }
  ],
  workedExample: {
    reportedEmissions: 1000,
    offsetPurchased: 100,
    clarification: "If an IT company reports 1,000 tonnes of CO₂e emissions and purchases 100 tonnes of verified CarboSafe credits, that does NOT mean its actual operational emissions fell to 900 tonnes. The emissions (1,000 t) and the offsets (100 t) must be reported separately under GHG accounting guidelines.",
    positioning: "CarboSafe helps companies measure and reduce emissions first, then access credible carbon projects for any remaining emissions they choose to offset."
  }
};

export const revenueModelData = {
  headline: "Proposed Revenue Model",
  subheadline: "Balancing platform sustainability with maximum farmer compensation.",
  farmerFirstSplit: {
    farmerSharePercent: 80,
    platformSharePercent: 20,
    range: "70% – 90% direct to farmers & project stewards",
    sampleGross: 100000,
    sampleFarmerAmount: 80000,
    samplePlatformAmount: 20000,
    note: "Illustrative calculation only. Actual payouts depend on fees, verification costs, project agreements, and the final revenue-sharing policy."
  },
  streams: [
    {
      stream: "Marketplace Commission",
      mechanism: "A transparent disclosed percentage on completed credit secondary and primary sales."
    },
    {
      stream: "Verification Services",
      mechanism: "Fixed coordination fees for high-precision satellite, drone, and auditor field validation."
    },
    {
      stream: "Enterprise Subscription",
      mechanism: "Premium corporate sustainability dashboards, Scope 1-3 audit exports, and API access."
    },
    {
      stream: "Data & Environmental Analytics",
      mechanism: "Canopy growth tracking, biodiversity indices, and longitudinal soil carbon analytics."
    },
    {
      stream: "Enterprise Integrations",
      mechanism: "Direct ERP and ESG software connectors (SAP, Salesforce Net Zero Cloud, Workiva)."
    }
  ]
};

export const differentiators = [
  {
    id: 1,
    title: "Evidence-Driven Verification",
    desc: "Build a connection between project claims and measurable environmental evidence instead of relying solely on uploaded paper documents.",
    icon: "bi-camera-video-fill",
    color: "#1a73e8"
  },
  {
    id: 2,
    title: "Farmer-First Economics",
    desc: "Make the farmer's share (70–90%), deductions, project status, and payments visible with no hidden intermediary markups.",
    icon: "bi-heart-fill",
    color: "#10b981"
  },
  {
    id: 3,
    title: "Traceable Carbon Credits",
    desc: "Give each issued credit a unique identifier and maintain a clear issuance, ownership, and retirement history to eliminate double-counting.",
    icon: "bi-qr-code",
    color: "#8b5cf6"
  },
  {
    id: 4,
    title: "Industrial Buyer Experience",
    desc: "Help businesses find high-integrity projects, review evidence, manage purchases, and maintain compliance records for ESG reporting.",
    icon: "bi-briefcase-fill",
    color: "#f59e0b"
  }
];

export const mvpStatusData = {
  headline: "What We Have Built So Far",
  subhead: "Actual development progress from our Lovable and VS Code engineering sessions.",
  components: [
    {
      title: "Supabase Connection",
      desc: "Lovable connected the project to the live Supabase PostgreSQL project named carbosafe.",
      status: "Connected",
      badgeClass: "badge-success"
    },
    {
      title: "Authentication & User Roles",
      desc: "Email/password signup and login with Farmer and Industry roles and automatic profile creation.",
      status: "Functional",
      badgeClass: "badge-success"
    },
    {
      title: "Database Schema & RLS",
      desc: "Generated schema includes profiles, projects, and transactions with Row Level Security policies.",
      status: "Drafted",
      badgeClass: "badge-warning"
    },
    {
      title: "Farmer Dashboard (src/pages/Farmers.tsx)",
      desc: "Submit projects, list the farmer's projects, show wallet balance, and display withdrawal placeholder.",
      status: "Drafted UI",
      badgeClass: "badge-warning"
    },
    {
      title: "Industry Dashboard (src/pages/Industries.tsx)",
      desc: "Browse projects and initiate credit purchases with project details.",
      status: "Drafted UI",
      badgeClass: "badge-warning"
    },
    {
      title: "Transparency Page (src/pages/Transparency.tsx)",
      desc: "Display public transaction ledger and retirement status.",
      status: "Drafted UI",
      badgeClass: "badge-warning"
    }
  ],
  issuesToFix: [
    {
      id: 1,
      title: "Secure Purchases with Atomic RPC",
      desc: "The drafted industry page inserts a transaction, changes available credits, and calls increment_wallet separately. This must be refactored into a single atomic PostgreSQL transaction / RPC to avoid corrupted balances.",
      severity: "Critical"
    },
    {
      id: 2,
      title: "Prevent Fake Credit Claims",
      desc: "Farmers should not be able to declare arbitrary CO₂ reductions and immediately have them treated as tradeable credits. Keep initial estimates strictly separate from verified and issued credits.",
      severity: "High"
    },
    {
      id: 3,
      title: "Review Database Permissions & RLS",
      desc: "Publicly displaying transaction information on the Transparency page must not expose private user account details. Row Level Security policies require an exhaustive audit.",
      severity: "High"
    },
    {
      id: 4,
      title: "Fix & Test Data Relationships",
      desc: "Fix drafted industry queries referencing p.farmer_id without selecting farmer_id. Securely implement the increment_wallet RPC function before production deployment.",
      severity: "Medium"
    },
    {
      id: 5,
      title: "Verify Application End-to-End",
      desc: "Execute complete multi-role integration tests: registration, login, project submission, browsing, atomic purchase, wallet updates, and public transparency records.",
      severity: "Medium"
    }
  ]
};

export const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Working Marketplace MVP",
    desc: "Finish the React application, Supabase authentication, farmer project submission, industry browsing, and transparency views.",
    status: "Current In-Progress"
  },
  {
    phase: "Phase 2",
    title: "Secure Transaction Engine",
    desc: "Implement atomic credit purchases, server-side validation, transaction history, wallet accounting, and payout requests. Integrate payment gateways only after purchase flow is rock solid.",
    status: "Up Next"
  },
  {
    phase: "Phase 3",
    title: "Project Verification Workflow",
    desc: "Add project evidence uploads, geolocation boundary validation, project review, verification status states, and administrator approval. Enforce separation between estimates and approved credits.",
    status: "Planned"
  },
  {
    phase: "Phase 4",
    title: "AI Environmental Monitoring",
    desc: "Integrate satellite imagery APIs, computer vision canopy models, field sensor telemetry, and carbon estimation methodologies. Validate predictions against empirical measurements.",
    status: "Planned"
  },
  {
    phase: "Phase 5",
    title: "Blockchain Integration",
    desc: "Introduce unique cryptographic credit identifiers, auditable issuance and retirement records, and smart contracts to eliminate duplicate claims across registries.",
    status: "Planned"
  },
  {
    phase: "Phase 6",
    title: "Pilot with Real Users",
    desc: "Work with progressive farmers, environmental scientists, independent verifiers, and pilot corporate buyers. Establish accredited crediting methodologies before full public trading.",
    status: "Planned"
  }
];

export const risksAndChallenges = [
  {
    title: "Measurement Accuracy",
    desc: "Carbon stored in soil and vegetation is complex to quantify. Requires rigorous baseline surveys, uncertainty discount models, and periodic sensor checks.",
    icon: "bi-rulers"
  },
  {
    title: "Additionality & Permanence",
    desc: "Projects must prove they would not have occurred without carbon finance, and buffer pools must protect against wildfire or timber harvesting reversals.",
    icon: "bi-shield-check"
  },
  {
    title: "Double-Counting Prevention",
    desc: "The exact same tonne of CO₂e cannot be sold or claimed across multiple registries. Cryptographic hash registries eliminate double-issuance.",
    icon: "bi-fingerprint"
  },
  {
    title: "Regulatory Compliance",
    desc: "Navigating emerging Indian Carbon Market (ICM) rules, Bureau of Energy Efficiency guidelines, and international Article 6 compliance.",
    icon: "bi-journal-text"
  },
  {
    title: "Farmer Adoption",
    desc: "Software must function smoothly on low-cost Android smartphones in regional languages with minimal cognitive overhead.",
    icon: "bi-phone"
  },
  {
    title: "Commercial Viability",
    desc: "Market credit pricing, verification overhead, buyer demand, and net farmer compensation must be grounded in economic viability.",
    icon: "bi-currency-exchange"
  }
];

export const successMetrics = [
  { metric: "Farmer Participation", target: "Active farmers & registered hectares under sustainable management" },
  { metric: "Verification Quality", target: "Low measurement uncertainty (< 8%) and transparent audit coverage" },
  { metric: "Credit Integrity", target: "100% of credits issued, transferred & retired with zero duplication" },
  { metric: "Farmer Earnings", target: "Total payouts disbursed with an average 70–90% farmer value share" },
  { metric: "Industry Adoption", target: "Active corporate buyers with recurring quarterly emissions retirement" },
  { metric: "Climate Impact", target: "Verified tonnes of CO₂e sequestered or reduced, reported with rigor" },
  { metric: "Operational Efficiency", target: "Reduced verification turnaround time and automated compliance" }
];

// ==============================================================
// CARBON CREDIT PROJECTS (MODULES EQUIVALENT FOR THE MARKETPLACE)
// 12 High-Integrity Nature-Based Climate Projects
// ==============================================================

export const projectsCatalog = [
  {
    id: 1,
    title: "Vidarbha Agroforestry & Teak Sequestration",
    shortTitle: "Vidarbha Agroforestry",
    category: "Agroforestry",
    location: "Maharashtra, India",
    farmerName: "Rameshwar Patil & Cooperative",
    hectares: "320 Ha",
    verifiedTonnes: 4800,
    availableCredits: 1250,
    pricePerCredit: "₹1,850",
    farmerShare: "82%",
    methodology: "VM0017 / Agroforestry Biomass",
    satelliteScore: 98.4,
    status: "Verified & Issued",
    icon: "bx-leaf",
    description: "Multi-strata agroforestry system combining indigenous teak, moringa, and nitrogen-fixing pulses to enrich degraded cotton soil while generating certified carbon sequestration.",
    features: [
      "High-resolution Sentinel-2 monthly canopy tracking",
      "IoT ground soil organic carbon (SOC) telemetry probes",
      "82% of credit sale routed directly to smallholder farmers",
      "Verra VM0017 compliant methodology with 15% permanence buffer",
      "Biodiversity co-benefit: restored habitat for endemic pollinators"
    ]
  },
  {
    id: 2,
    title: "Konkan Coastal Mangrove Blue Carbon",
    shortTitle: "Konkan Mangrove Blue Carbon",
    category: "Blue Carbon",
    location: "Ratnagiri Coast, India",
    farmerName: "Coastal Fisherfolk & Mangrove Trust",
    hectares: "185 Ha",
    verifiedTonnes: 6200,
    availableCredits: 2100,
    pricePerCredit: "₹2,400",
    farmerShare: "85%",
    methodology: "VM0033 / Tidal Wetland Restoration",
    satelliteScore: 99.1,
    status: "Verified & Issued",
    icon: "bx-water",
    description: "Restoration of critical mangrove estuaries providing massive subterranean blue carbon storage alongside coastal storm-surge protection for fishing villages.",
    features: [
      "Sub-surface sediment carbon core validation and SAR water level monitoring",
      "85% direct compensation to coastal restoration communities",
      "Zero deforestation enforcement via continuous radar imagery",
      "High permanence score with community stewardship bylaws",
      "Significant marine nursery and crab fishery co-benefits"
    ]
  },
  {
    id: 3,
    title: "Punjab Regenerative Soil & Stubble Abatement",
    shortTitle: "Punjab Regenerative Soil",
    category: "Soil Carbon",
    location: "Ludhiana District, Punjab",
    farmerName: "Harpreet Singh & 45 Farming Families",
    hectares: "540 Ha",
    verifiedTonnes: 5100,
    availableCredits: 890,
    pricePerCredit: "₹1,650",
    farmerShare: "80%",
    methodology: "VM0042 / Soil Organic Carbon",
    satelliteScore: 96.8,
    status: "Verified & Issued",
    icon: "bx-landscape",
    description: "Zero-tillage Happy Seeder farming and biochar soil amendment replacing crop residue burning, preventing severe seasonal air pollution and locking carbon in soil.",
    features: [
      "Thermal anomaly satellite monitoring proves zero stubble fire incidents",
      "Direct laboratory lab-verified soil organic carbon increments",
      "80% net revenue distributed every harvest cycle",
      "Substantial PM2.5 air quality improvement for Delhi-NCR region",
      "Reduces chemical fertilizer consumption by 35%"
    ]
  },
  {
    id: 4,
    title: "Western Ghats High-Canopy Coffee Agroforestry",
    shortTitle: "Coorg Coffee Canopy Sink",
    category: "Agroforestry",
    location: "Coorg, Karnataka",
    farmerName: "Coorg Organic Planters Guild",
    hectares: "290 Ha",
    verifiedTonnes: 3950,
    availableCredits: 1400,
    pricePerCredit: "₹2,100",
    farmerShare: "81%",
    methodology: "Plan Vivo / Agroforestry Standard",
    satelliteScore: 97.9,
    status: "Verified & Issued",
    icon: "bx-tree",
    description: "Shade-grown multi-tier Arabica coffee estates preserving ancient rainforest canopy trees, native pepper vines, and deep subterranean root biomass.",
    features: [
      "Multi-spectral LiDAR drone canopy height calibration",
      "Strict preservation of native jungle hardwood trees over 40 years old",
      "81% direct revenue share to family-owned small plantations",
      "Preserves UNESCO Western Ghats wildlife migration corridor",
      "Organically certified shade management practices"
    ]
  },
  {
    id: 5,
    title: "Deccan Biochar & Soil Regeneration Collective",
    shortTitle: "Deccan Biochar Collective",
    category: "Carbon Removal",
    location: "Ahmednagar, Maharashtra",
    farmerName: "Kisan Biochar Innovation Cluster",
    hectares: "210 Ha",
    verifiedTonnes: 3200,
    availableCredits: 750,
    pricePerCredit: "₹2,800",
    farmerShare: "84%",
    methodology: "Puro.earth / Biochar Carbon Removal",
    satelliteScore: 99.5,
    status: "Verified & Issued",
    icon: "bx-cube",
    description: "Pyrolysis of agricultural waste into high-stability biochar, permanently locking recalcitrant carbon in drought-prone Deccan soil for 500+ years.",
    features: [
      "500-year permanence benchmark accredited by Puro.earth carbon standard",
      "84% revenue paid to farmers upon verified soil field incorporation",
      "Improves soil water-holding capacity in drought-prone rainfed belt",
      "IoT thermocouple logs verify complete smoke-free pyrolysis",
      "Eliminates open-field burning of sugarcane bagasse"
    ]
  },
  {
    id: 6,
    title: "Sundarbans Community Mangrove Carbon Reserve",
    shortTitle: "Sundarbans Mangrove Reserve",
    category: "Blue Carbon",
    location: "West Bengal, India",
    farmerName: "Sundarbans Women’s Climate Self-Help Groups",
    hectares: "410 Ha",
    verifiedTonnes: 7400,
    availableCredits: 2800,
    pricePerCredit: "₹2,650",
    farmerShare: "88%",
    methodology: "VM0033 / Blue Carbon Mangrove",
    satelliteScore: 98.9,
    status: "Verified & Issued",
    icon: "bx-anchor",
    description: "Community-driven afforestation of tidal mudflats with Rhizophora and Avicennia mangroves, stabilizing islands and sequestering extraordinary blue carbon.",
    features: [
      "Weekly Sentinel-1 SAR and optical satellite flood-tide analysis",
      "88% distributed directly to 280 women members of climate SHGs",
      "Natural coastal defense shield against Bay of Bengal cyclones",
      "Zero chemical input, 100% natural seed dispersal management",
      "Cryptographic retirement certificate with GPS polygon mapping"
    ]
  },
  {
    id: 7,
    title: "Himalayan Foothills Bamboo & Mixed Forest Sink",
    shortTitle: "Himalayan Bamboo Sink",
    category: "Reforestation",
    location: "Dehradun, Uttarakhand",
    farmerName: "Shivalik Agroforestry Consortium",
    hectares: "340 Ha",
    verifiedTonnes: 4100,
    availableCredits: 960,
    pricePerCredit: "₹1,950",
    farmerShare: "80%",
    methodology: "Gold Standard / Afforestation",
    satelliteScore: 97.4,
    status: "Verified & Issued",
    icon: "bx-trending-up",
    description: "Rapid biomass accumulation through clumping non-invasive bamboo varieties and broadleaf forest restoration on eroded sub-Himalayan terraced slopes.",
    features: [
      "Rapid carbon uptake rate (4.8 tonnes CO₂e / ha / year)",
      "High soil erosion mitigation on vulnerable landslide terraces",
      "80% direct value distribution to mountain farmers",
      "Annual drone photogrammetry biomass volume estimation",
      "Sustainable handicraft raw material harvest from selective thinning"
    ]
  },
  {
    id: 8,
    title: "Rajasthan Agri-voltaic & Moringa Carbon Oasis",
    shortTitle: "Arid Zone Moringa & Solar",
    category: "Agroforestry",
    location: "Bikaner, Rajasthan",
    farmerName: "Thar Green Energy Farmers Alliance",
    hectares: "280 Ha",
    verifiedTonnes: 3500,
    availableCredits: 1120,
    pricePerCredit: "₹1,750",
    farmerShare: "82%",
    methodology: "VM0017 / Arid Land Afforestation",
    satelliteScore: 96.2,
    status: "Verified & Issued",
    icon: "bx-sun",
    description: "Innovative desert farming cultivating drought-resilient Moringa oleifera beneath elevated solar agri-voltaic panels, conserving water and creating an arid carbon sink.",
    features: [
      "Dual climate impact: clean solar generation + biological carbon sink",
      "Drip irrigation powered 100% by on-site solar pumps",
      "82% farmer payout supporting Thar desert agricultural resilience",
      "Deep taproot carbon storage in sandy desert soils",
      "Continuous IoT soil moisture telemetry"
    ]
  }
];
