import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ReviewFunnel from './pages/ReviewFunnel.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFound from './pages/NotFound.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import QuotePage from './pages/QuotePage.tsx'
import AssessmentPage from './pages/AssessmentPage.tsx'
import EmergencyPage from './pages/EmergencyPage.tsx'
import ServicesAreasPage from './pages/ServicesAreasPage.tsx'
import ThankYouPage from './pages/ThankYouPage.tsx'
import SydneyCBDPage from './pages/areas/SydneyCBDPage.tsx'
import InnerSydneyPage from './pages/areas/InnerSydneyPage.tsx'
import EasternSuburbsPage from './pages/areas/EasternSuburbsPage.tsx'
import NorthShorePage from './pages/areas/NorthShorePage.tsx'
import NorthernBeachesPage from './pages/areas/NorthernBeachesPage.tsx'
import InnerWestPage from './pages/areas/InnerWestPage.tsx'
import GreaterSydneyPage from './pages/areas/GreaterSydneyPage.tsx'
import MasonryPage from './pages/services/MasonryPage.tsx'
import RestorationPage from './pages/services/RestorationPage.tsx'
import FoundationRepairsPage from './pages/services/FoundationRepairsPage.tsx'
import StructuralRepairsPage from './pages/services/StructuralRepairsPage.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/quote" element={<QuotePage />} />
      <Route path="/assessment" element={<AssessmentPage />} />
      <Route path="/emergency" element={<EmergencyPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/masonry" element={<MasonryPage />} />
      <Route path="/services/restoration" element={<RestorationPage />} />
      <Route path="/services/foundation-repairs" element={<FoundationRepairsPage />} />
      <Route path="/services/structural-repairs" element={<StructuralRepairsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/thank-you" element={<ThankYouPage />} />
      <Route path="/review" element={<ReviewFunnel />} />
      <Route path="/areas" element={<ServicesAreasPage />} />
      <Route path="/areas/sydney-cbd" element={<SydneyCBDPage />} />
      <Route path="/areas/inner-sydney" element={<InnerSydneyPage />} />
      <Route path="/areas/eastern-suburbs" element={<EasternSuburbsPage />} />
      <Route path="/areas/north-shore" element={<NorthShorePage />} />
      <Route path="/areas/northern-beaches" element={<NorthernBeachesPage />} />
      <Route path="/areas/inner-west" element={<InnerWestPage />} />
      <Route path="/areas/greater-sydney" element={<GreaterSydneyPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);