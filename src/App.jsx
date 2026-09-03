import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// 3D Motion Background System (Persistent across all routes)
import PersistentBackground from './components/3d/PersistentBackground';
import PrismaticClickEffect from './components/common/PrismaticClickEffect';

// Pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';

// Candidate Pages
import CandidateDashboard from './pages/candidate/CandidateDashboard';
import SkillIntelligencePage from './pages/candidate/SkillIntelligencePage';
import CareerRecommendationsPage from './pages/candidate/CareerRecommendationsPage';
import JobMatchesPage from './pages/candidate/JobMatchesPage';
import LearningRoadmapPage from './pages/candidate/LearningRoadmapPage';
import VerifiedCredentialsPage from './pages/candidate/VerifiedCredentialsPage';

// Government Pages
import GovernmentDashboard from './pages/government/GovernmentDashboard';
import MaharashtraHeatmapPage from './pages/government/MaharashtraHeatmapPage';
import FutureDemandPage from './pages/government/FutureDemandPage';
import TrainingProgramsImpactPage from './pages/government/TrainingProgramsImpactPage';

// Employer & Training Pages
import EmployerDashboard from './pages/employer/EmployerDashboard';
import TrainingProviderDashboard from './pages/training/TrainingProviderDashboard';

// Security Center
import SecurityCenterPage from './pages/SecurityCenterPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)] selection:bg-[#22D3EE]/30 selection:text-[#0284C7] dark:selection:text-[#22D3EE] transition-colors duration-300">
        {/* PERSISTENT 3D MOTION BACKGROUND CANVAS */}
        <PersistentBackground />

        {/* INTERACTIVE PRISMATIC CLICK & ROTATORY FX */}
        <PrismaticClickEffect />

        {/* Auto Scroll to Top on Navigation */}
        <ScrollToTop />

        {/* Foreground Interactive Application */}
        <div className="relative z-10">
          <Routes>
            {/* Landing & Gateway */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Candidate Suite */}
            <Route path="/candidate" element={<CandidateDashboard />} />
            <Route path="/candidate/skills" element={<SkillIntelligencePage />} />
            <Route path="/candidate/careers" element={<CareerRecommendationsPage />} />
            <Route path="/candidate/learning" element={<LearningRoadmapPage />} />
            <Route path="/candidate/jobs" element={<JobMatchesPage />} />
            <Route path="/candidate/certificates" element={<VerifiedCredentialsPage />} />

            {/* Government Intelligence Suite */}
            <Route path="/government" element={<GovernmentDashboard />} />
            <Route path="/government/analytics" element={<GovernmentDashboard />} />
            <Route path="/government/skills" element={<MaharashtraHeatmapPage />} />
            <Route path="/government/forecast" element={<FutureDemandPage />} />
            <Route path="/government/programs" element={<TrainingProgramsImpactPage />} />

            {/* Employer & Training Suite */}
            <Route path="/employer" element={<EmployerDashboard />} />
            <Route path="/training" element={<TrainingProviderDashboard />} />

            {/* Security & Trust Center */}
            <Route path="/security" element={<SecurityCenterPage />} />

            {/* Fallback to Home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}
