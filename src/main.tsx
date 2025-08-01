import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.tsx'
import ReviewFunnel from './pages/ReviewFunnel.tsx'
import ServicesPage from './pages/ServicesPage.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/review" element={<ReviewFunnel />} />
    </Routes>
  </BrowserRouter>
);