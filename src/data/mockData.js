// SKILLMITRA — Realistic Indian & Maharashtra GovTech Mock Datasets
// Government of Maharashtra | Smart Education & Skilling Platform

export const CURRENT_USER = {
  name: "Shweta Sharma",
  role: "Candidate",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  email: "shweta.sharma@skillmitra.mahagov.in",
  district: "Pune",
  state: "Maharashtra",
  education: "B.Tech Computer Science (2025)",
  institution: "Government College of Engineering, Pune (COEP)",
  targetRole: "Data Analyst",
  overallReadiness: 78,
  employmentProbability: 84,
  skillsAssessed: 12,
  skillGapsCount: 3,
  jobMatchesCount: 24,
  verifiedBadgesCount: 4,
};

export const ROLES_DATA = [
  {
    id: "candidate",
    title: "Candidate / Youth",
    badge: "Job Seeker & Learner",
    icon: "GraduationCap",
    color: "cyan",
    path: "/candidate",
    description: "Discover skill gaps, follow AI-curated learning roadmaps, earn verified credentials, and apply to high-match jobs.",
    metrics: "Over 50,000+ Maharashtra youth actively upskilling",
    accent: "border-cyan-500/30 bg-cyan-500/5 hover:border-cyan-400"
  },
  {
    id: "government",
    title: "Government Officer",
    badge: "Policymaker & Admin",
    icon: "Building2",
    color: "saffron",
    path: "/government",
    description: "Real-time state-wide employment outcomes, district skill demand heatmaps, scheme ROI, and predictive workforce analytics.",
    metrics: "36 Districts of Maharashtra connected in real-time",
    accent: "border-amber-500/30 bg-amber-500/5 hover:border-amber-400"
  },
  {
    id: "employer",
    title: "Corporate Employer",
    badge: "Hiring & Talent Acquisition",
    icon: "Briefcase",
    color: "blue",
    path: "/employer",
    description: "Post dynamic vacancies, match pre-assessed verified talent, compare candidate skill matrix, and hire effortlessly.",
    metrics: "480+ Indian Tech & Industrial partners onboarded",
    accent: "border-blue-500/30 bg-blue-500/5 hover:border-blue-400"
  },
  {
    id: "training",
    title: "Training Provider",
    badge: "VTP / Academic Partner",
    icon: "BookOpen",
    color: "emerald",
    path: "/training",
    description: "Manage student cohorts, track course completion rates, issue blockchain certificates, and track employment outcomes.",
    metrics: "120+ Accredited VTPs across Maharashtra",
    accent: "border-emerald-500/30 bg-emerald-500/5 hover:border-emerald-400"
  },
  {
    id: "security",
    title: "Security & Trust Officer",
    badge: "Cyber & Compliance",
    icon: "ShieldCheck",
    color: "purple",
    path: "/security",
    description: "Monitor AES-256 encryption, inspect JWT authentication streams, verify blockchain ledger proofs, and audit data access.",
    metrics: "92/100 Security & Governance Trust Score",
    accent: "border-purple-500/30 bg-purple-500/5 hover:border-purple-400"
  }
];

// Target Roles with Skill Gap Benchmark Data
export const TARGET_ROLES = {
  "Data Analyst": {
    title: "Data Analyst",
    category: "Analytics & AI",
    overallMatch: 78,
    salaryRange: "₹5.5L - ₹12.0L LPA",
    demandIndex: "High (Pune / Mumbai)",
    growthTrend: "+28% YoY",
    currentSkills: [
      { name: "SQL & Querying", score: 90, required: 85, status: "Mastered", color: "#10b981" },
      { name: "Java Fundamentals", score: 80, required: 60, status: "Proficient", color: "#10b981" },
      { name: "Python for Analytics", score: 60, required: 85, status: "Gap Identified", color: "#f59e0b" },
      { name: "Statistics & Probability", score: 60, required: 80, status: "Gap Identified", color: "#f59e0b" },
      { name: "Power BI & Tableau", score: 50, required: 80, status: "Critical Gap", color: "#ef4444" },
      { name: "Data Warehousing", score: 40, required: 70, status: "Critical Gap", color: "#ef4444" },
    ],
    missingSkills: ["Advanced Power BI", "Applied Statistics", "Advanced Python (Pandas/NumPy)", "ETL Pipelines"],
    strengths: ["Relational Database Queries", "Logical Structuring", "Java Core Architecture"],
    aiExplanation: "Your SQL foundation (90%) and logical programming (80%) strongly match the Data Analyst role. By closing the gap in Power BI dashboards and applied statistics, your employment probability increases from 78% to 94% within 4 weeks."
  },
  "AI & ML Engineer": {
    title: "AI & Machine Learning Engineer",
    category: "Emerging Tech",
    overallMatch: 64,
    salaryRange: "₹8.0L - ₹18.5L LPA",
    demandIndex: "Very High (Pune / Nagpur)",
    growthTrend: "+42% YoY",
    currentSkills: [
      { name: "Python Core", score: 60, required: 90, status: "Gap Identified", color: "#f59e0b" },
      { name: "Linear Algebra & Calculus", score: 70, required: 85, status: "Moderate", color: "#f59e0b" },
      { name: "Scikit-Learn & Models", score: 45, required: 85, status: "Critical Gap", color: "#ef4444" },
      { name: "Deep Learning (PyTorch)", score: 30, required: 80, status: "Critical Gap", color: "#ef4444" },
      { name: "SQL & Data Prep", score: 90, required: 75, status: "Mastered", color: "#10b981" },
    ],
    missingSkills: ["PyTorch / TensorFlow", "Model Deployment (FastAPI/Docker)", "Feature Engineering"],
    strengths: ["Data Manipulation", "Mathematical Foundation"],
    aiExplanation: "Strong mathematical foundation and SQL expertise give you an edge. Prioritize PyTorch and hands-on ML model deployments to qualify for top product engineering roles."
  },
  "Cloud & DevOps Engineer": {
    title: "Cloud & DevOps Engineer",
    category: "Infrastructure",
    overallMatch: 58,
    salaryRange: "₹7.0L - ₹16.0L LPA",
    demandIndex: "High (Mumbai / Pune)",
    growthTrend: "+35% YoY",
    currentSkills: [
      { name: "Linux & Shell Scripting", score: 75, required: 85, status: "Proficient", color: "#10b981" },
      { name: "AWS Cloud Fundamentals", score: 50, required: 85, status: "Gap Identified", color: "#f59e0b" },
      { name: "Docker & Kubernetes", score: 35, required: 80, status: "Critical Gap", color: "#ef4444" },
      { name: "CI/CD Pipelines (Jenkins/GitHub)", score: 40, required: 75, status: "Critical Gap", color: "#ef4444" },
      { name: "Networking & Security", score: 65, required: 75, status: "Moderate", color: "#f59e0b" },
    ],
    missingSkills: ["Kubernetes Cluster Orchestration", "Terraform (IaC)", "CI/CD Automation"],
    strengths: ["Linux Command Line", "Networking Basics"],
    aiExplanation: "Transitioning to DevOps requires mastering container orchestration (Kubernetes) and Terraform Infrastructure-as-Code."
  },
  "Full Stack Developer": {
    title: "Full Stack Web Developer",
    category: "Software Development",
    overallMatch: 82,
    salaryRange: "₹6.0L - ₹14.0L LPA",
    demandIndex: "Extremely High (All Districts)",
    growthTrend: "+24% YoY",
    currentSkills: [
      { name: "JavaScript / TypeScript", score: 85, required: 85, status: "Mastered", color: "#10b981" },
      { name: "React.js & Tailwind CSS", score: 88, required: 85, status: "Mastered", color: "#10b981" },
      { name: "Node.js & Express", score: 78, required: 80, status: "Proficient", color: "#10b981" },
      { name: "PostgreSQL & Prisma", score: 85, required: 80, status: "Mastered", color: "#10b981" },
      { name: "System Design & Microservices", score: 55, required: 75, status: "Gap Identified", color: "#f59e0b" },
    ],
    missingSkills: ["Microservices Architecture", "Redis Caching", "GraphQL API Design"],
    strengths: ["Modern React Ecosystem", "Relational Database Modelling", "Clean UI Design"],
    aiExplanation: "You have strong frontend and backend fundamentals. Adding caching with Redis and system design will qualify you for Senior/Mid-level engineering roles."
  }
};

// Recommended Careers with animated match rings
export const CAREER_RECOMMENDATIONS = [
  {
    id: "car-1",
    role: "Data Analyst",
    matchScore: 91,
    category: "Business Intelligence",
    avgSalary: "₹6.8 LPA",
    openingsInMH: "1,420 Openings",
    topLocations: ["Pune", "Mumbai", "Nagpur"],
    requiredSkills: ["SQL", "Power BI", "Python", "Applied Statistics"],
    missingSkills: ["Power BI DAX", "Time-Series Forecasting"],
    growthRating: "High Demand",
    recommendedPath: "MahaSkill Advanced Data Analytics Track",
    badge: "Best Match For You"
  },
  {
    id: "car-2",
    role: "Business Analyst (Fintech)",
    matchScore: 84,
    category: "Financial Analytics",
    avgSalary: "₹8.2 LPA",
    openingsInMH: "890 Openings",
    topLocations: ["Mumbai BKC", "Pune Hinjawadi"],
    requiredSkills: ["SQL", "Excel Modeling", "Jira", "Financial KPIs"],
    missingSkills: ["Financial Risk Modeling", "BRD Documentation"],
    growthRating: "High Growth",
    recommendedPath: "Fintech Business Intelligence FastTrack",
    badge: "High Salary Growth"
  },
  {
    id: "car-3",
    role: "BI & Reporting Developer",
    matchScore: 78,
    category: "Enterprise Software",
    avgSalary: "₹6.5 LPA",
    openingsInMH: "640 Openings",
    topLocations: ["Pune Kharadi", "Nashik", "Thane"],
    requiredSkills: ["Tableau", "Power BI", "Data Warehousing", "ETL"],
    missingSkills: ["SSIS / ETL Pipelines", "Data Modeling"],
    growthRating: "Stable",
    recommendedPath: "Enterprise BI Specialization",
    badge: "Fast Track Hiring"
  },
  {
    id: "car-4",
    role: "Junior AI & Data Scientist",
    matchScore: 72,
    category: "Artificial Intelligence",
    avgSalary: "₹9.5 LPA",
    openingsInMH: "1,150 Openings",
    topLocations: ["Pune", "Mumbai", "Aurangabad IT Park"],
    requiredSkills: ["Python", "Machine Learning", "Statistics", "FastAPI"],
    missingSkills: ["Deep Learning", "Model Deployment", "Docker"],
    growthRating: "Explosive Growth",
    recommendedPath: "Govt. of Maharashtra AI Upskilling Cohort",
    badge: "Emerging Domain"
  }
];

// Interactive Learning Roadmap DAG Nodes
export const LEARNING_ROADMAP = [
  {
    id: "step-1",
    title: "Advanced SQL & Query Optimization",
    category: "Database Engineering",
    duration: "2 Weeks (18 Hours)",
    provider: "MahaSkill Digital Academy & IIT Bombay NPTEL",
    level: "Intermediate",
    status: "completed",
    progress: 100,
    skillsGained: ["Window Functions", "Query Execution Plans", "CTEs", "Database Indexing"],
    description: "Deep dive into enterprise SQL, complex subqueries, indexing strategies, and PostgreSQL optimization.",
    certificateEarned: "SKL-9281 (Verified on Ledger)",
    icon: "Database"
  },
  {
    id: "step-2",
    title: "Applied Statistics for Business Intelligence",
    category: "Mathematical Foundations",
    duration: "3 Weeks (24 Hours)",
    provider: "COEP Skilling & Swayam Portal",
    level: "Intermediate",
    status: "in-progress",
    progress: 65,
    skillsGained: ["Hypothesis Testing", "A/B Testing", "Probability Distributions", "Regression Analysis"],
    description: "Hands-on statistics for data-driven decisions: ANOVA, p-values, standard error, and Bayesian inference.",
    certificateEarned: "Pending Final Assessment",
    icon: "TrendingUp"
  },
  {
    id: "step-3",
    title: "Enterprise Power BI & Interactive Dashboards",
    category: "Visualization",
    duration: "2.5 Weeks (20 Hours)",
    provider: "Microsoft & Maharashtra State Skill Mission",
    level: "Advanced",
    status: "locked",
    progress: 0,
    skillsGained: ["DAX Formulas", "Power Query M", "Row-Level Security (RLS)", "Automated Refresh"],
    description: "Building production-grade executive dashboards with dynamic filtering, DAX measures, and mobile layouts.",
    certificateEarned: "Microsoft Certified Power BI Associate",
    icon: "BarChart3"
  },
  {
    id: "step-4",
    title: "Python for Analytics (Pandas & Seaborn)",
    category: "Programming & Wrangling",
    duration: "3 Weeks (25 Hours)",
    provider: "Persistent Systems Skilling Foundation",
    level: "Advanced",
    status: "locked",
    progress: 0,
    skillsGained: ["Pandas Dataframes", "NumPy Vectorization", "Data Cleansing", "Seaborn Plotting"],
    description: "End-to-end data pipelines in Python, automated CSV/API ingestion, missing data imputation, and exploratory analysis.",
    certificateEarned: "Persistent Certified Python Data Associate",
    icon: "Code2"
  },
  {
    id: "step-5",
    title: "Real-world Capstone: Maharashtra Agritech & Market Analysis",
    category: "Practical Application",
    duration: "2 Weeks (30 Hours)",
    provider: "Government of Maharashtra Smart Governance Lab",
    level: "Expert",
    status: "locked",
    progress: 0,
    skillsGained: ["Real Data Processing", "Stakeholder Presentation", "Portfolio Project", "Git Workflow"],
    description: "Analyze live mandi prices and crop yield datasets from Maharashtra APMC markets to build an interactive forecasting dashboard.",
    certificateEarned: "Govt of Maharashtra Merit Certificate",
    icon: "Award"
  },
  {
    id: "step-6",
    title: "Job Ready & Direct Interview Placement",
    category: "Career Launch",
    duration: "Continuous",
    provider: "SkillMitra Corporate Placement Cell",
    level: "Placement Guaranteed",
    status: "locked",
    progress: 0,
    skillsGained: ["AI Mock Interviews", "Resume Optimization", "Direct Fast-track Interviews"],
    description: "Connect directly with hiring managers at Bajaj Finserv, TCS, Tech Mahindra, and 120+ partner organizations.",
    certificateEarned: "Placement Readiness Endorsement",
    icon: "CheckCircle2"
  }
];

// Curated Job Matches in Maharashtra
export const JOB_MATCHES = [
  {
    id: "job-1",
    title: "Junior Data Analyst",
    company: "Tata Consultancy Services (TCS)",
    logo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=80&auto=format&fit=crop&q=80",
    location: "Pune (Hinjawadi Phase 3)",
    type: "Full Time",
    workMode: "Hybrid",
    experience: "0-2 Years",
    salary: "₹6.2L - ₹8.5L LPA",
    matchScore: 94,
    skillsRequired: ["SQL", "Power BI", "Python", "Data Cleansing"],
    missingSkills: ["Power BI DAX"],
    postedDays: "1 day ago",
    applicants: 34,
    description: "TCS Enterprise Analytics division is hiring Data Analysts to build financial and operational reporting pipelines for global banking clients.",
    urgent: true
  },
  {
    id: "job-2",
    title: "Business Intelligence Analyst",
    company: "Bajaj Finserv",
    logo: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=80&auto=format&fit=crop&q=80",
    location: "Pune (Viman Nagar)",
    type: "Full Time",
    workMode: "On-site",
    experience: "Freshers / 1 Year",
    salary: "₹7.0L - ₹9.2L LPA",
    matchScore: 89,
    skillsRequired: ["SQL", "Advanced Excel", "Statistics", "Tableau"],
    missingSkills: ["Credit Risk Modeling"],
    postedDays: "2 days ago",
    applicants: 48,
    description: "Analyze customer lending profiles, transaction patterns, and risk metrics using SQL and statistical modeling.",
    urgent: false
  },
  {
    id: "job-3",
    title: "Associate Data Engineer",
    company: "Tech Mahindra",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&auto=format&fit=crop&q=80",
    location: "Mumbai (Airoli Mindspace)",
    type: "Full Time",
    workMode: "Hybrid",
    experience: "0-2 Years",
    salary: "₹6.5L - ₹8.8L LPA",
    matchScore: 86,
    skillsRequired: ["Java", "SQL", "Python", "PostgreSQL"],
    missingSkills: ["Apache Spark Basics"],
    postedDays: "3 days ago",
    applicants: 62,
    description: "Build robust data pipelines, ETL staging tables, and automated database sync workflows for telecom intelligence.",
    urgent: false
  },
  {
    id: "job-4",
    title: "BI Developer & Visualizer",
    company: "Persistent Systems",
    logo: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=80&auto=format&fit=crop&q=80",
    location: "Pune (Senapati Bapat Road)",
    type: "Full Time",
    workMode: "Hybrid",
    experience: "1-3 Years",
    salary: "₹7.5L - ₹10.5L LPA",
    matchScore: 82,
    skillsRequired: ["Power BI", "SQL Server", "DAX", "Data Modeling"],
    missingSkills: ["SSRS Reports", "DAX Advanced"],
    postedDays: "4 days ago",
    applicants: 29,
    description: "Design executive dashboards, optimize queries, and implement role-based access security for healthcare analytics.",
    urgent: false
  },
  {
    id: "job-5",
    title: "Data Operations Associate",
    company: "L&T Technology Services",
    logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&auto=format&fit=crop&q=80",
    location: "Mumbai (Powai)",
    type: "Full Time",
    workMode: "On-site",
    experience: "0-1 Year",
    salary: "₹5.8L - ₹7.2L LPA",
    matchScore: 88,
    skillsRequired: ["SQL", "Python", "Excel", "Data Validation"],
    missingSkills: ["Industrial IoT Basics"],
    postedDays: "Just now",
    applicants: 12,
    description: "Monitor smart manufacturing telemetry data, run validation checks, and generate daily yield variance reports.",
    urgent: true
  },
  {
    id: "job-6",
    title: "Analytics Consultant",
    company: "Infosys",
    logo: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=80&auto=format&fit=crop&q=80",
    location: "Nagpur (MIHAN SEZ)",
    type: "Full Time",
    workMode: "Hybrid",
    experience: "0-2 Years",
    salary: "₹6.0L - ₹8.0L LPA",
    matchScore: 85,
    skillsRequired: ["SQL", "Statistics", "Power BI", "Presentation"],
    missingSkills: ["Cloud Dataflow"],
    postedDays: "5 days ago",
    applicants: 41,
    description: "Work with global enterprise clients in Nagpur MIHAN campus to translate raw logs into actionable marketing insights.",
    urgent: false
  }
];

// Government State-level Analytics Data
export const GOV_METRICS = {
  candidatesTrained: 50000,
  certifiedCount: 38420,
  employedCount: 24680,
  employmentRate: 64.3,
  skillGapIndex: 34.0,
  avgSalarySecured: "₹4.85 LPA",
  activeInstitutes: 342,
  districtsConnected: 36,
  industryPartners: 480,
};

// Funnel Data for Recharts
export const SKILLING_FUNNEL_DATA = [
  { stage: "Registered Youth", count: 75400, fill: "#3b82f6", dropRate: "0%" },
  { stage: "Undergoing Training", count: 50000, fill: "#06b6d4", dropRate: "-33.6%" },
  { stage: "Certified & Assessed", count: 38420, fill: "#10b981", dropRate: "-23.1%" },
  { stage: "Job Matched & Applied", count: 31200, fill: "#a855f7", dropRate: "-18.7%" },
  { stage: "Successfully Employed", count: 24680, fill: "#00f0ff", dropRate: "-20.8%" },
];

// Training Program Impact Comparison
export const PROGRAM_IMPACT_DATA = [
  {
    id: "prog-1",
    name: "Pramod Mahajan Kaushalya Vikas (PMKVY-MH)",
    enrolled: 18500,
    completed: 16200,
    certified: 14800,
    employed: 11840,
    placementRate: 72.4,
    avgSalary: "₹5.2 LPA",
    retentionRate: "88%",
    topDomain: "AI, IT & Cloud"
  },
  {
    id: "prog-2",
    name: "Maharashtra State Skill Dev. Society (MSSDS)",
    enrolled: 14200,
    completed: 11900,
    certified: 10400,
    employed: 7380,
    placementRate: 61.5,
    avgSalary: "₹4.4 LPA",
    retentionRate: "82%",
    topDomain: "Electronics & Auto"
  },
  {
    id: "prog-3",
    name: "SMART Agri-Skilling Initiative",
    enrolled: 9400,
    completed: 7800,
    certified: 6900,
    employed: 3450,
    placementRate: 43.8,
    avgSalary: "₹3.6 LPA",
    retentionRate: "76%",
    topDomain: "Agri-Tech & Supply Chain"
  },
  {
    id: "prog-4",
    name: "DDU-GKY Rural Skilling Mission",
    enrolled: 7900,
    completed: 6500,
    certified: 6320,
    employed: 4010,
    placementRate: 53.4,
    avgSalary: "₹3.9 LPA",
    retentionRate: "79%",
    topDomain: "Logistics & Retail"
  }
];

// Quarterly Employment Outcomes Over Time
export const EMPLOYMENT_TIMELINE_DATA = [
  { quarter: "Q1 2024", candidatesTrained: 9200, placed: 4800, avgSalary: 3.8 },
  { quarter: "Q2 2024", candidatesTrained: 11400, placed: 6600, avgSalary: 4.1 },
  { quarter: "Q3 2024", candidatesTrained: 13800, placed: 8900, avgSalary: 4.4 },
  { quarter: "Q4 2024", candidatesTrained: 16100, placed: 11200, avgSalary: 4.6 },
  { quarter: "Q1 2025", candidatesTrained: 19500, placed: 14600, avgSalary: 4.8 },
  { quarter: "Q2 2025 (Projected)", candidatesTrained: 24000, placed: 18900, avgSalary: 5.2 },
];

// Skill Gap Distribution by Domain
export const DOMAIN_SKILL_GAP_DATA = [
  { domain: "Cloud & DevOps", industryDemand: 92, candidateReadiness: 54, gap: 38 },
  { domain: "AI & Data Science", industryDemand: 96, candidateReadiness: 48, gap: 48 },
  { domain: "Full Stack Web", industryDemand: 88, candidateReadiness: 72, gap: 16 },
  { domain: "Cybersecurity", industryDemand: 84, candidateReadiness: 42, gap: 42 },
  { domain: "Industrial Automation", industryDemand: 76, candidateReadiness: 58, gap: 18 },
  { domain: "Fintech & Analytics", industryDemand: 82, candidateReadiness: 61, gap: 21 },
];

// Future Skill Demand Forecasting
export const FUTURE_SKILL_DEMAND_DATA = [
  { skill: "Generative AI & LLM Engineering", growth: "+42%", currentDemand: 78, projected2026: 98, urgency: "Critical", icon: "Sparkles" },
  { skill: "Cloud Architecture (AWS/Azure)", growth: "+35%", currentDemand: 82, projected2026: 95, urgency: "High", icon: "Cloud" },
  { skill: "Cybersecurity & Zero Trust", growth: "+31%", currentDemand: 70, projected2026: 91, urgency: "High", icon: "Shield" },
  { skill: "Applied Data Analytics & BI", growth: "+28%", currentDemand: 85, projected2026: 96, urgency: "High", icon: "BarChart2" },
  { skill: "Modern Java & Microservices", growth: "+24%", currentDemand: 80, projected2026: 90, urgency: "Medium", icon: "Cpu" },
  { skill: "EV Battery & Smart Mobility", growth: "+38%", currentDemand: 60, projected2026: 88, urgency: "Emerging", icon: "Zap" },
];

// Maharashtra 36 Districts Detailed Dataset
export const MAHARASHTRA_DISTRICTS = {
  "Pune": {
    name: "Pune",
    division: "Pune Division",
    zone: "Western Maharashtra",
    topSkills: ["AI & Machine Learning", "Cloud Architecture", "Data Analytics", "Automotive CAD"],
    demandIndex: 94,
    availableCandidates: 14200,
    skillGap: 24,
    employmentRate: 78.4,
    futureDemand: "+36% (Tech & Auto Clusters)",
    topEmployers: ["TCS", "Infosys", "Bajaj Auto", "Persistent", "Wipro", "Tata Motors"],
    avgLPA: "₹6.4 LPA",
    status: "Very High Demand"
  },
  "Mumbai": {
    name: "Mumbai (City & Suburban)",
    division: "Konkan Division",
    zone: "Coastal Hub",
    topSkills: ["Fintech Analytics", "Cybersecurity", "Cloud Infrastructure", "Full Stack Dev"],
    demandIndex: 96,
    availableCandidates: 18500,
    skillGap: 22,
    employmentRate: 81.2,
    futureDemand: "+32% (Fintech & BFSI)",
    topEmployers: ["Reliance Jio", "Morgan Stanley", "HDFC Bank", "L&T Infotech", "Tata Digital"],
    avgLPA: "₹7.8 LPA",
    status: "Peak Demand"
  },
  "Nashik": {
    name: "Nashik",
    division: "Nashik Division",
    zone: "Northern Maharashtra",
    topSkills: ["Industrial Automation", "Precision Manufacturing", "Supply Chain", "Embedded Systems"],
    demandIndex: 78,
    availableCandidates: 6800,
    skillGap: 38,
    employmentRate: 62.5,
    futureDemand: "+28% (Defence & EV Park)",
    topEmployers: ["HAL", "Bosch", "Mahindra & Mahindra", "ABB India"],
    avgLPA: "₹4.6 LPA",
    status: "High Growth"
  },
  "Nagpur": {
    name: "Nagpur",
    division: "Nagpur Division",
    zone: "Vidarbha",
    topSkills: ["IT Services (MIHAN)", "Cybersecurity", "Multi-modal Logistics", "Data Entry & BPO"],
    demandIndex: 82,
    availableCandidates: 8400,
    skillGap: 34,
    employmentRate: 67.0,
    futureDemand: "+34% (MIHAN SEZ Expansion)",
    topEmployers: ["TCS MIHAN", "Infosys MIHAN", "HCL Tech", "Concor Logistics"],
    avgLPA: "₹5.1 LPA",
    status: "High Growth"
  },
  "Kolhapur": {
    name: "Kolhapur",
    division: "Pune Division",
    zone: "Southern Maharashtra",
    topSkills: ["Foundry & Metallurgy", "Auto Components", "Sugar Tech & Agri-IoT", "CAD/CAM"],
    demandIndex: 72,
    availableCandidates: 4900,
    skillGap: 41,
    employmentRate: 59.8,
    futureDemand: "+22% (Smart Foundry Cluster)",
    topEmployers: ["Menon Pistons", "Kirloskar Oil Engines", "Ghatge Patil", "Mahalaxmi Auto"],
    avgLPA: "₹4.2 LPA",
    status: "Moderate Demand"
  },
  "Chhatrapati Sambhajinagar": {
    name: "Chhatrapati Sambhajinagar (Aurangabad)",
    division: "Chhatrapati Sambhajinagar Division",
    zone: "Marathwada",
    topSkills: ["Pharma Manufacturing", "Automotive Assembly", "Beer & Beverage Automation", "Industrial IoT"],
    demandIndex: 76,
    availableCandidates: 5600,
    skillGap: 36,
    employmentRate: 64.1,
    futureDemand: "+30% (AURIC Smart City Hub)",
    topEmployers: ["Bajaj Auto", "Skoda Auto", "Endress+Hauser", "Lupin Pharma", "AURIC IT"],
    avgLPA: "₹4.9 LPA",
    status: "High Growth"
  },
  "Thane": {
    name: "Thane",
    division: "Konkan Division",
    zone: "MMR",
    topSkills: ["IT Operations", "Data Analytics", "Chemical Process Tech", "Supply Chain"],
    demandIndex: 88,
    availableCandidates: 11200,
    skillGap: 26,
    employmentRate: 74.5,
    futureDemand: "+29% (Tech Hubs & Logistics)",
    topEmployers: ["Tata Consultancy Services", "Voltas", "Bayer", "Godrej"],
    avgLPA: "₹5.9 LPA",
    status: "High Demand"
  },
  "Solapur": {
    name: "Solapur",
    division: "Pune Division",
    zone: "Western Maharashtra",
    topSkills: ["Textile Automation", "Powerloom Modernization", "Solar Energy Tech", "Agri-Processing"],
    demandIndex: 64,
    availableCandidates: 3800,
    skillGap: 46,
    employmentRate: 52.3,
    futureDemand: "+18% (Renewable Energy)",
    topEmployers: ["NTPC Solapur", "Solapur Textiles", "Kirloskar Ferrous"],
    avgLPA: "₹3.7 LPA",
    status: "Emerging"
  },
  "Amravati": {
    name: "Amravati",
    division: "Amravati Division",
    zone: "Vidarbha",
    topSkills: ["Textile Processing", "Agri-Biotech", "Warehouse Management", "Digital Marketing"],
    demandIndex: 61,
    availableCandidates: 3400,
    skillGap: 48,
    employmentRate: 49.5,
    futureDemand: "+20% (Nandgaon Peth Mega Textile Park)",
    topEmployers: ["Raymonds", "Siyaram", "Finolex Cables"],
    avgLPA: "₹3.5 LPA",
    status: "Emerging"
  }
};

// Verified Blockchain Credential Demo
export const VERIFIED_CREDENTIAL = {
  candidateName: "Shweta Sharma",
  certificateTitle: "Data Analytics & SQL Mastery Certification",
  certificateId: "SKL-9281",
  issuingAuthority: "Maharashtra State Skill Development Society (MSSDS)",
  accreditation: "National Council for Vocational Education and Training (NCVET)",
  issueDate: "14 January 2025",
  expiryDate: "Lifetime Validity",
  status: "VERIFIED_ON_CHAIN",
  ledgerNetwork: "Maharashtra Gov Public Proof Ledger (Polygon / Hyperledger)",
  blockNumber: 4819204,
  transactionHash: "0x8f4c91a3b4e2d7c0f19a8264e10b938f29d71c49e01827fa93c82e01b7a6e4d2",
  sha256Hash: "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
  grade: "Grade A+ (94.2% Marks)",
  verifiedNodes: 16,
  tamperProofAudit: "PASSED — 0 Alterations Detected"
};

// Security Center & System Trust Data
export const SECURITY_AUDIT_DATA = {
  trustScore: 92,
  protocols: [
    { name: "JWT Stateless Authentication", status: "Active & Enforced", latency: "14ms", badge: "256-bit Signatures" },
    { name: "Role-Based Access Control (RBAC)", status: "Active & Enforced", latency: "8ms", badge: "5 Granular Tiers" },
    { name: "AES-256 Data-at-Rest Encryption", status: "Active & Enforced", latency: "FIPS 140-2", badge: "Gov Compliant" },
    { name: "API Rate Limiting & WAF Protection", status: "Active & Enforced", latency: "DDoS Shield", badge: "Cloudflare/Gov" },
    { name: "SIEM Audit Logging & Alerting", status: "Active & Enforced", latency: "Real-time", badge: "Immutable Store" },
    { name: "Sandboxed File & Resume Scanning", status: "Active & Enforced", latency: "Malware Clean", badge: "Zero-Trust" }
  ],
  liveLogs: [
    { id: "log-1", time: "18:24:12", event: "Blockchain Certificate Hash Verified [SKL-9281]", ip: "103.21.124.45 (Pune)", status: "Success", level: "info" },
    { id: "log-2", time: "18:22:05", event: "JWT Token Issued for Candidate [Shweta Sharma]", ip: "103.21.124.45 (Pune)", status: "Success", level: "info" },
    { id: "log-3", time: "18:18:44", event: "RBAC Permission Validation for Gov Dashboard", ip: "115.112.89.12 (Mantralaya Mumbai)", status: "Authorized", level: "info" },
    { id: "log-4", time: "18:14:02", event: "API Rate-Limit Threshold Check", ip: "Gateway Node 04", status: "Healthy (0 Throttle)", level: "info" },
    { id: "log-5", time: "18:05:30", event: "Candidate Resume Uploaded & Malware Scanned", ip: "103.21.124.45 (Pune)", status: "Clean 0 Threats", level: "info" },
  ]
};

// Employer Talent Pool Search Data
export const EMPLOYER_CANDIDATES = [
  {
    id: "cand-1",
    name: "Shweta Sharma",
    role: "Data Analyst / BI Specialist",
    location: "Pune, Maharashtra",
    matchScore: 94,
    education: "B.Tech Computer Science (COEP)",
    skills: ["SQL (90%)", "Java (80%)", "Python (60%)", "Power BI (50%)"],
    experience: "Fresher (Immediate Joiner)",
    verifiedCertificates: 2,
    badge: "Top AI Recommendation",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "cand-2",
    name: "Pooja Deshmukh",
    role: "Full Stack Engineer",
    location: "Mumbai, Maharashtra",
    matchScore: 91,
    education: "B.E. IT (VJTI Mumbai)",
    skills: ["React.js (92%)", "Node.js (88%)", "PostgreSQL (85%)", "Tailwind (90%)"],
    experience: "1 Year",
    verifiedCertificates: 3,
    badge: "Strong Frontend",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
  },
  {
    id: "cand-3",
    name: "Aditya Kulkarni",
    role: "Cloud & DevOps Associate",
    location: "Nagpur, Maharashtra",
    matchScore: 87,
    education: "B.Tech Electronics (VNIT Nagpur)",
    skills: ["Linux (90%)", "Docker (80%)", "AWS (75%)", "Python (70%)"],
    experience: "Fresher",
    verifiedCertificates: 1,
    badge: "Certified AWS Cloud",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
  }
];

// Training Provider Cohort Stats
export const TRAINING_PROVIDER_STATS = {
  providerName: "MahaSkill Apex Technical Training Center (Pune)",
  studentsEnrolled: 1240,
  studentsCompleted: 980,
  studentsEmployed: 620,
  employmentRate: 63.2,
  activeCohorts: 8,
  averageSalary: "₹4.65 LPA",
  batches: [
    { name: "Batch 24-A (Data Analytics)", students: 160, completed: 152, placed: 128, rate: 84.2, status: "Placed" },
    { name: "Batch 24-B (Full Stack Web)", students: 180, completed: 165, placed: 135, rate: 81.8, status: "Placed" },
    { name: "Batch 24-C (Cloud & DevOps)", students: 140, completed: 120, placed: 86, rate: 71.6, status: "Ongoing Interviews" },
    { name: "Batch 25-A (Applied AI & ML)", students: 200, completed: 110, placed: 45, rate: 40.9, status: "In Training" },
  ]
};

// Notification Center Items
export const NOTIFICATIONS_DATA = [
  {
    id: "notif-1",
    title: "AI Skill Gap Diagnostics Updated",
    message: "AI identified 3 new high-priority skill gaps for Data Analyst roles in Pune.",
    time: "10 mins ago",
    type: "ai",
    unread: true,
    link: "/candidate/skills"
  },
  {
    id: "notif-2",
    title: "Career Readiness Boost",
    message: "Your Data Analyst readiness increased to 78% after completing Advanced SQL.",
    time: "2 hours ago",
    type: "success",
    unread: true,
    link: "/candidate"
  },
  {
    id: "notif-3",
    title: "New High-Match Job in Pune",
    message: "Tata Consultancy Services (TCS) posted 'Junior Data Analyst' (94% match).",
    time: "5 hours ago",
    type: "job",
    unread: false,
    link: "/candidate/jobs"
  },
  {
    id: "notif-4",
    title: "Blockchain Credential Verified",
    message: "Certificate SKL-9281 successfully anchored to Maharashtra Public Proof Ledger.",
    time: "1 day ago",
    type: "security",
    unread: false,
    link: "/candidate/certificates"
  }
];

// MitraAI Knowledge Responses
export const MITRA_AI_RESPONSES = {
  "skills": "For the **Data Analyst** role, your SQL (90%) and Java (80%) are solid! You are currently missing:\n\n1. **Advanced Power BI & DAX** (Priority 1)\n2. **Applied Statistics & Probability** (Priority 2)\n3. **Python Pandas/NumPy** (Priority 3)\n\nCompleting these three modules will increase your readiness score from **78% to 94%** and unlock 14+ new job matches in Pune and Mumbai.",
  "careers": "Based on your technical profile and aptitude test, your top 3 AI-recommended careers are:\n\n1. **Data Analyst** — 91% Match (₹6.8 LPA)\n2. **Business Analyst (Fintech)** — 84% Match (₹8.2 LPA)\n3. **BI & Reporting Developer** — 78% Match (₹6.5 LPA)\n\nData Analyst has the highest concentration of immediate openings in Maharashtra.",
  "pune": "In **Pune**, the top 4 in-demand skill clusters for 2025-2026 are:\n\n1. **AI / Machine Learning & LLMs** (+42% YoY growth)\n2. **Cloud Architecture & DevOps** (+35% YoY growth)\n3. **Enterprise Data Analytics & BI** (+28% YoY growth)\n4. **Automotive Embedded & EV Systems** (+38% YoY growth)\n\nHinjawadi, Kharadi, and Magarpatta have over 14,200 active vacancies.",
  "schemes": "Among Government of Maharashtra skilling initiatives, **Pramod Mahajan Kaushalya Vikas Abhiyan (PMKVY-MH)** leads with a **72.4% employment outcome rate** and an average starting package of ₹5.2 LPA, followed by MSSDS Technical Cohorts at 61.5%."
};
