import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ReviewFunnel from './pages/ReviewFunnel.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import NotFound from './pages/NotFound.tsx'
import SydneyCBDPage from './pages/areas/SydneyCBDPage.tsx'
import MasonryPage from './pages/services/MasonryPage.tsx'
import RestorationPage from './pages/services/RestorationPage.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/masonry" element={<MasonryPage />} />
      <Route path="/services/restoration" element={<RestorationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/review" element={<ReviewFunnel />} />
      <Route path="/areas/sydney-cbd" element={<SydneyCBDPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);