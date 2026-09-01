# 🏛️ SkillMitra (कौशलमित्र)
### AI-Powered Skill & Employment Intelligence Platform
**Problem Statement:** SIH26135 — Tracking Employment Outcomes, Skill Gaps, and the Impact of Skilling Initiatives  
**Sponsor:** Government of Maharashtra · Smart Education & Employment Department  
**Tagline:** *"Skills are everywhere. Opportunity shouldn't be."*

---

## 🌟 Overview

**SkillMitra** is a 2026 Indian GovTech platform built to close the gap between youth capabilities, training programs, employer vacancies, and statewide policy decisions. It provides:

- 🎯 **For Candidates**: Diagnostic skill assessment, real-time role benchmarking, personalized learning roadmaps, verified credentials, and high-match job opportunities.
- 🏛️ **For Government & Policymakers**: Real-time outcome monitoring across 36 Maharashtra districts, 5-stage placement funnels, scheme ROI auditing (PMKVY, MSSDS, SMART), and predictive demand forecasting.
- 🏢 **For Employers**: Direct search into pre-assessed talent with cryptographically verifiable qualification certificates.
- 🎓 **For Training Providers**: Cohort tracking, curriculum completion monitoring, and credential issuance.

---

## 🎨 Visual Identity & Design System

The platform is designed with a **modern, warm, editorial, and trustworthy GovTech design system**:
- **Primary Color:** Deep Forest (`#164B36`)
- **Background:** Warm White (`#FAF9F5`)
- **Primary Typography:** Charcoal (`#1D2421`), Muted Sage (`#789184`)
- **Accents:** Indian Saffron (`#E28A3B`), Terracotta (`#C9634C`)
- **Typography:** `Newsreader` / `Playfair Display` serif headlines + `Manrope` & `Inter` UI font family.
- **Topographic Context:** Abstract Maharashtra topographic contour patterns.

---

## 🚀 Key Feature Modules

1. **Editorial Landing Page (`/`)**: High-contrast hero, right-aligned interactive Skill Intelligence panel, and the 5-step **Skill-to-Employment Loop**.
2. **Candidate Dashboard (`/candidate`)**: Asymmetric layout with 78% Career Readiness gauge, personalized *"Your next best move"* recommendation, and verified job openings.
3. **Skill Intelligence Matrix (`/candidate/skills`)**: Horizontal dual-bar comparisons (`YOU` vs `ROLE`), target role switching, and AI insight blocks.
4. **Career Recommendations (`/candidate/careers`)**: Ranked pathways highlighting top matches across Pune, Mumbai, Nagpur, and Nashik.
5. **Learning Roadmap (`/candidate/learning`)**: 6-stage milestone journey (`SQL` → `Statistics` → `Power BI` → `Python` → `Portfolio` → `Job Ready`).
6. **Verifiable Credentials (`/candidate/certificates`)**: Tamper-evident certificate showcase with SHA-256 hash digests and a 4-phase Cryptographic Consensus Lifecycle.
7. **Government Intelligence (`/government`)**: Full-width Dark Forest executive band tracking 50,000 youth, placement progression curves, and district analytics.
8. **Geospatial GIS Heatmap (`/government/skills`)**: 36-district interactive demand map with talent supply and deficit drill-downs.
9. **Future Demand Forecasting (`/government/forecast`)**: 2025–2028 projections for AI/ML (+42%), Cloud (+35%), Cybersecurity (+31%), and Data Analytics (+28%).
10. **Program Impact & ROI (`/government/programs`)**: Comparative placement analysis across flagship state schemes.
11. **Corporate Employer Suite (`/employer`)**: Candidate search with match scores, skill filters, and 1-click shortlisting.
12. **Training Provider Suite (`/training`)**: Cohort lifecycle management and batch outcomes.
13. **Security & Trust (`/security`)**: 5 horizontal security controls (JWT, AES-256, RBAC, Audit Trail, WAF) with 92/100 compliance score.
14. **Ask SkillMitra AI Assistant**: Slide-over career and skill advisory drawer.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Data Visualization:** [Recharts](https://recharts.org/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

---

## 💻 Local Development Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- `npm` or `yarn` or `pnpm`

### Installation
```bash
# Clone the repository
git clone <your-github-repo-url>
cd SkillMitra

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
npm run build
npm run preview
```

---

## 📄 License
Government of Maharashtra · Smart India Hackathon (SIH26135).
