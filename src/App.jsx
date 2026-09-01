import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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

export default function App() {
  return (
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
  );
}
