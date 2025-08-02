import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import App from './App.tsx'
import ReviewFunnel from './pages/ReviewFunnel.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFound from './pages/NotFound.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import QuotePage from './pages/QuotePage.tsx'
import AssessmentPage from './pages/AssessmentPage.tsx'
import PriorityRepairsPage from './pages/EmergencyPage.tsx'
import ServicesAreasPage from './pages/ServicesAreasPage.tsx'
import ThankYouPage from './pages/ThankYouPage.tsx'
import SydneyCBDPage from './pages/areas/SydneyCBDPage.tsx'
import EasternSuburbsPage from './pages/areas/EasternSuburbsPage.tsx'
import NorthShorePage from './pages/areas/NorthShorePage.tsx'
import NorthernBeachesPage from './pages/areas/NorthernBeachesPage.tsx'
import InnerWestPage from './pages/areas/InnerWestPage.tsx'
import GreaterSydneyPage from './pages/areas/GreaterSydneyPage.tsx'
import MasonryPage from './pages/services/MasonryPage.tsx'
import RestorationPage from './pages/services/RestorationPage.tsx'
import FoundationRepairsPage from './pages/services/FoundationRepairsPage.tsx'
import StructuralRepairsPage from './pages/services/StructuralRepairsPage.tsx'
import HeritageRestorationPage from './pages/services/HeritageRestorationPage.tsx'
import BuildingRestorationPage from './pages/services/BuildingRestorationPage.tsx'
import ConcreteRepairsPage from './pages/services/ConcreteRepairsPage.tsx'
import WaterproofingPage from './pages/services/WaterproofingPage.tsx'
import RemedialBuildingPage from './pages/services/RemedialBuildingPage.tsx'
import InspectionsPage from './pages/services/InspectionsPage.tsx'
import AdminPage from './pages/AdminPage.tsx'
import WebhookConfigPage from './pages/WebhookConfigPage.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<Layout><AboutPage /></Layout>} />
      <Route path="/projects" element={<Layout><ProjectsPage /></Layout>} />
      <Route path="/quote" element={<Layout><QuotePage /></Layout>} />
      <Route path="/assessment" element={<Layout><AssessmentPage /></Layout>} />
      <Route path="/emergency" element={<Layout><PriorityRepairsPage /></Layout>} />
      <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
      <Route path="/services/masonry" element={<Layout><MasonryPage /></Layout>} />
      <Route path="/services/restoration" element={<Layout><RestorationPage /></Layout>} />
      <Route path="/services/foundation-repairs" element={<Layout><FoundationRepairsPage /></Layout>} />
      <Route path="/services/structural-repairs" element={<Layout><StructuralRepairsPage /></Layout>} />
      <Route path="/services/heritage-restoration" element={<Layout><HeritageRestorationPage /></Layout>} />
      <Route path="/services/building-restoration" element={<Layout><BuildingRestorationPage /></Layout>} />
      <Route path="/services/concrete-repairs" element={<Layout><ConcreteRepairsPage /></Layout>} />
      <Route path="/services/waterproofing" element={<Layout><WaterproofingPage /></Layout>} />
      <Route path="/services/remedial-building" element={<Layout><RemedialBuildingPage /></Layout>} />
      <Route path="/services/inspections" element={<Layout><InspectionsPage /></Layout>} />
      <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
      <Route path="/thank-you" element={<Layout><ThankYouPage /></Layout>} />
      <Route path="/review" element={<ReviewFunnel />} />
      <Route path="/areas" element={<Layout><ServicesAreasPage /></Layout>} />
      <Route path="/areas/sydney-cbd" element={<Layout><SydneyCBDPage /></Layout>} />
      <Route path="/areas/inner-sydney" element={<Layout><SydneyCBDPage /></Layout>} />
      <Route path="/areas/eastern-suburbs" element={<Layout><EasternSuburbsPage /></Layout>} />
      <Route path="/areas/north-shore" element={<Layout><NorthShorePage /></Layout>} />
      <Route path="/areas/northern-beaches" element={<Layout><NorthernBeachesPage /></Layout>} />
      <Route path="/areas/inner-west" element={<Layout><InnerWestPage /></Layout>} />
      <Route path="/areas/greater-sydney" element={<Layout><GreaterSydneyPage /></Layout>} />
      <Route path="/admin" element={<Layout><AdminPage /></Layout>} />
      <Route path="/admin/webhooks" element={<Layout><WebhookConfigPage /></Layout>} />
      <Route path="*" element={<Layout><NotFound /></Layout>} />
    </Routes>
  </BrowserRouter>
);