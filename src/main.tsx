import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from '@/components/ui/sonner'
import { lazy, Suspense, useEffect } from 'react'
import { Layout } from '@/components/Layout'
import { ScrollToTop } from '@/components/ScrollToTop'
import { QuoteModalProvider } from '@/components/quote'
const QuoteSurveyModal = lazy(() => import('@/components/quote').then((m) => ({ default: m.QuoteSurveyModal })))
import SinglePageApp from './pages/SinglePageApp'
import './index.css'

/**
 * Loads SearchAtlas dynamic optimisation EXACTLY ONCE, after mount,
 * and only when the browser is idle. Loading this from index.html
 * caused Vite to duplicate the script tag (the data: URI loader and
 * the resolved real URL both got emitted), which redeclared a global
 * var and broke initial JS execution. By moving it into a React
 * effect, we (a) guarantee one instance, (b) keep it off the
 * critical render path, and (c) avoid pre-render clobbering.
 */
function SearchAtlasDynamicOptimization() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (document.getElementById('sa-dynamic-optimization-loader')) return
    const inject = () => {
      if (document.getElementById('sa-dynamic-optimization-loader')) return
      const s = document.createElement('script')
      s.id = 'sa-dynamic-optimization-loader'
      s.setAttribute('nowprocket', '')
      s.setAttribute('nitro-exclude', '')
      s.src = 'https://dashboard.searchatlas.com/scripts/dynamic_optimization.js'
      s.dataset.uuid = '3bc881e3-23ac-4d54-84d3-056a31ac9906'
      s.async = true
      document.head.appendChild(s)
    }
    if ('requestIdleCallback' in window) {
      ;(window as Window & { requestIdleCallback: (callback: () => void, options?: { timeout: number }) => void }).requestIdleCallback(inject, { timeout: 4000 })
    } else {
      setTimeout(inject, 1500)
    }
  }, [])
  return null
}

// Lazy-load main pages
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const GalleryPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const ServicesAreasPage = lazy(() => import('./pages/ServicesAreasPage'))
const SearchPage = lazy(() => import('./pages/SearchPage'))
const LearnPage = lazy(() => import('./pages/LearnPage'))
const MasonryVsRemedialPage = lazy(() => import('./pages/learn/MasonryVsRemedialPage'))
const RepointingSignsPage = lazy(() => import('./pages/learn/RepointingSignsPage'))
const ConcreteCancerSydneyPage = lazy(() => import('./pages/learn/ConcreteCancerSydneyPage'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Tier 1 service pages
const MasonryPage = lazy(() => import('./pages/services/MasonryPage'))
const HeritageRestorationPage = lazy(() => import('./pages/services/HeritageRestorationPage'))
const StructuralRepairsPage = lazy(() => import('./pages/services/StructuralRepairsPage'))
const BuildingRestorationPage = lazy(() => import('./pages/services/BuildingRestorationPage'))
const ConcreteRepairsPage = lazy(() => import('./pages/services/ConcreteRepairsPage'))
const FoundationRepairsPage = lazy(() => import('./pages/services/FoundationRepairsPage'))
const RemedialBuildingPage = lazy(() => import('./pages/services/RemedialBuildingPage'))

// Masonry sub-services
const BrickBlockWorkPage = lazy(() => import('./pages/services/masonry/BrickBlockWorkPage'))
const RepointingPage = lazy(() => import('./pages/services/masonry/RepointingPage'))
const StoneMasonryRepairsPage = lazy(() => import('./pages/services/masonry/StoneMasonryRepairsPage'))
const StructuralBrickworkPage = lazy(() => import('./pages/services/masonry/StructuralBrickworkPage'))
const RetainingWallsPage = lazy(() => import('./pages/services/masonry/RetainingWallsPage'))

// Heritage restoration sub-services
const HeritageMasonryPage = lazy(() => import('./pages/services/heritage-restoration/HeritageMasonryPage'))
const HeritageStoneRestorationPage = lazy(() => import('./pages/services/heritage-restoration/HeritageStoneRestorationPage'))
const HeritageBrickRepairsPage = lazy(() => import('./pages/services/heritage-restoration/HeritageBrickRepairsPage'))
const TraditionalStoneworkPage = lazy(() => import('./pages/services/heritage-restoration/TraditionalStoneworkPage'))
const PeriodMaterialsPage = lazy(() => import('./pages/services/heritage-restoration/PeriodMaterialsPage'))
const HistoricStuccosPage = lazy(() => import('./pages/services/heritage-restoration/HistoricStuccosPage'))

// Structural repairs sub-services
const LoadBearingWallsPage = lazy(() => import('./pages/services/structural-repairs/LoadBearingWallsPage'))
const BeamColumnPage = lazy(() => import('./pages/services/structural-repairs/BeamColumnPage'))
const StructuralCrackRepairPage = lazy(() => import('./pages/services/structural-repairs/StructuralCrackRepairPage'))
const BuildingReinforcementPage = lazy(() => import('./pages/services/structural-repairs/BuildingReinforcementPage'))
const SteelStructureRepairsPage = lazy(() => import('./pages/services/structural-repairs/SteelStructureRepairsPage'))

// Building restoration sub-services
const CompleteRestorationPage = lazy(() => import('./pages/services/building-restoration/CompleteRestorationPage'))
const FacadeRenovationPage = lazy(() => import('./pages/services/building-restoration/FacadeRenovationPage'))
const InteriorRestorationPage = lazy(() => import('./pages/services/building-restoration/InteriorRestorationPage'))
const HistoricUpgradesPage = lazy(() => import('./pages/services/building-restoration/HistoricUpgradesPage'))
const DefectRectificationPage = lazy(() => import('./pages/services/building-restoration/DefectRectificationPage'))

// Concrete repairs sub-services
const ConcreteCancerPage = lazy(() => import('./pages/services/concrete-repairs/ConcreteCancerPage'))
const SpallingRepairPage = lazy(() => import('./pages/services/concrete-repairs/SpallingRepairPage'))
const StructuralConcretePage = lazy(() => import('./pages/services/concrete-repairs/StructuralConcretePage'))
const ConcreteResurfacingPage = lazy(() => import('./pages/services/concrete-repairs/ConcreteResurfacingPage'))
const ProtectiveCoatingsPage = lazy(() => import('./pages/services/concrete-repairs/ProtectiveCoatingsPage'))

// Foundation repairs sub-services
const UnderpinningPage = lazy(() => import('./pages/services/foundation-repairs/UnderpinningPage'))
const StructuralFoundationPage = lazy(() => import('./pages/services/foundation-repairs/StructuralFoundationPage'))
const FoundationStonePage = lazy(() => import('./pages/services/foundation-repairs/FoundationStonePage'))
const PierBeamPage = lazy(() => import('./pages/services/foundation-repairs/PierBeamPage'))
const SettlementStabilisationPage = lazy(() => import('./pages/services/foundation-repairs/SettlementStabilisationPage'))

// Service × Area combos (dynamic — rendered from data/serviceAreas.ts)
const ServiceAreaPage = lazy(() => import('./pages/services/ServiceAreaPage'))

// Remedial building sub-services
const StrataRepairsPage = lazy(() => import('./pages/services/remedial-building/StrataRepairsPage'))
const StructuralDefectPage = lazy(() => import('./pages/services/remedial-building/StructuralDefectPage'))
const ComplianceUpgradesPage = lazy(() => import('./pages/services/remedial-building/ComplianceUpgradesPage'))
const EmergencyRepairsPage = lazy(() => import('./pages/services/remedial-building/EmergencyRepairsPage'))
const EmergencyStructuralSupportPage = lazy(() => import('./pages/services/remedial-building/EmergencyStructuralSupportPage'))

// Area pages
const SydneyCBDPage = lazy(() => import('./pages/areas/SydneyCBDPage'))
const EasternSuburbsPage = lazy(() => import('./pages/areas/EasternSuburbsPage'))
const NorthShorePage = lazy(() => import('./pages/areas/NorthShorePage'))
const NorthernBeachesPage = lazy(() => import('./pages/areas/NorthernBeachesPage'))
const InnerWestPage = lazy(() => import('./pages/areas/InnerWestPage'))
const GreaterSydneyPage = lazy(() => import('./pages/areas/GreaterSydneyPage'))

// Suburb pages (dynamic — rendered from data/suburbs.ts)
const SuburbPage = lazy(() => import('./pages/areas/suburbs/SuburbPage'))

// Problem pages (dynamic — rendered from data/problems.ts)
const ProblemsHubPage = lazy(() => import('./pages/problems/ProblemsHubPage'))
const ProblemPage = lazy(() => import('./pages/problems/ProblemPage'))
const ProblemAreaPage = lazy(() => import('./pages/problems/ProblemAreaPage'))

// Heritage era pages (dynamic — rendered from data/heritage.ts)
const HeritageHubPage = lazy(() => import('./pages/heritage/HeritageHubPage'))
const HeritageEraPage = lazy(() => import('./pages/heritage/HeritageEraPage'))

// Case studies (dynamic — rendered from data/caseStudies.ts)
const CaseStudiesIndexPage = lazy(() => import('./pages/case-studies/CaseStudiesIndexPage'))
const CaseStudyPage = lazy(() => import('./pages/case-studies/CaseStudyPage'))

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-navy border-t-amber rounded-full animate-spin" />
  </div>
)

const L = ({ children }: { children: React.ReactNode }) => <Layout>{children}</Layout>

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <QuoteModalProvider>
        <Toaster position="bottom-right" />
        <SearchAtlasDynamicOptimization />
        <Suspense fallback={null}>
          <QuoteSurveyModal />
        </Suspense>
        <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Home */}
          <Route path="/" element={<L><SinglePageApp /></L>} />

          {/* Main pages */}
          <Route path="/about" element={<L><AboutPage /></L>} />
          <Route path="/services" element={<L><ServicesPage /></L>} />
          <Route path="/gallery" element={<L><GalleryPage /></L>} />
          <Route path="/contact" element={<L><ContactPage /></L>} />
          <Route path="/areas" element={<L><ServicesAreasPage /></L>} />
          <Route path="/search" element={<L><SearchPage /></L>} />
          <Route path="/learn" element={<L><LearnPage /></L>} />
          <Route path="/learn/masonry-vs-remedial-building" element={<L><MasonryVsRemedialPage /></L>} />
          <Route path="/learn/repointing-signs" element={<L><RepointingSignsPage /></L>} />
          <Route path="/learn/concrete-cancer-sydney" element={<L><ConcreteCancerSydneyPage /></L>} />

          {/* Redirects */}
          <Route path="/projects" element={<Navigate to="/gallery" replace />} />
          <Route path="/services/waterproofing" element={<Navigate to="/services" replace />} />
          <Route path="/services/restoration" element={<Navigate to="/services/building-restoration" replace />} />

          {/* Tier 1: Masonry */}
          <Route path="/services/masonry" element={<L><MasonryPage /></L>} />
          <Route path="/services/masonry/brick-block-work" element={<L><BrickBlockWorkPage /></L>} />
          <Route path="/services/masonry/repointing" element={<L><RepointingPage /></L>} />
          <Route path="/services/masonry/stone-masonry-repairs" element={<L><StoneMasonryRepairsPage /></L>} />
          <Route path="/services/masonry/structural-brickwork" element={<L><StructuralBrickworkPage /></L>} />
          <Route path="/services/masonry/retaining-walls" element={<L><RetainingWallsPage /></L>} />

          {/* Tier 1: Heritage Restoration */}
          <Route path="/services/heritage-restoration" element={<L><HeritageRestorationPage /></L>} />
          <Route path="/services/heritage-restoration/heritage-masonry" element={<L><HeritageMasonryPage /></L>} />
          <Route path="/services/heritage-restoration/heritage-stone" element={<L><HeritageStoneRestorationPage /></L>} />
          <Route path="/services/heritage-restoration/heritage-brick-repairs" element={<L><HeritageBrickRepairsPage /></L>} />
          <Route path="/services/heritage-restoration/traditional-stonework" element={<L><TraditionalStoneworkPage /></L>} />
          <Route path="/services/heritage-restoration/period-materials" element={<L><PeriodMaterialsPage /></L>} />
          <Route path="/services/heritage-restoration/historic-stuccos-renders" element={<L><HistoricStuccosPage /></L>} />

          {/* Tier 1: Structural Repairs */}
          <Route path="/services/structural-repairs" element={<L><StructuralRepairsPage /></L>} />
          <Route path="/services/structural-repairs/load-bearing-walls" element={<L><LoadBearingWallsPage /></L>} />
          <Route path="/services/structural-repairs/beam-column-restoration" element={<L><BeamColumnPage /></L>} />
          <Route path="/services/structural-repairs/structural-crack-repair" element={<L><StructuralCrackRepairPage /></L>} />
          <Route path="/services/structural-repairs/building-reinforcement" element={<L><BuildingReinforcementPage /></L>} />
          <Route path="/services/structural-repairs/steel-structure-repairs" element={<L><SteelStructureRepairsPage /></L>} />

          {/* Tier 1: Building Restoration */}
          <Route path="/services/building-restoration" element={<L><BuildingRestorationPage /></L>} />
          <Route path="/services/building-restoration/complete-restoration" element={<L><CompleteRestorationPage /></L>} />
          <Route path="/services/building-restoration/facade-renovation" element={<L><FacadeRenovationPage /></L>} />
          <Route path="/services/building-restoration/interior-restoration" element={<L><InteriorRestorationPage /></L>} />
          <Route path="/services/building-restoration/historic-upgrades" element={<L><HistoricUpgradesPage /></L>} />
          <Route path="/services/building-restoration/defect-rectification" element={<L><DefectRectificationPage /></L>} />

          {/* Tier 1: Concrete Repairs */}
          <Route path="/services/concrete-repairs" element={<L><ConcreteRepairsPage /></L>} />
          <Route path="/services/concrete-repairs/concrete-cancer" element={<L><ConcreteCancerPage /></L>} />
          <Route path="/services/concrete-repairs/spalling-repair" element={<L><SpallingRepairPage /></L>} />
          <Route path="/services/concrete-repairs/structural-concrete" element={<L><StructuralConcretePage /></L>} />
          <Route path="/services/concrete-repairs/concrete-resurfacing" element={<L><ConcreteResurfacingPage /></L>} />
          <Route path="/services/concrete-repairs/protective-coatings" element={<L><ProtectiveCoatingsPage /></L>} />

          {/* Tier 1: Foundation Repairs */}
          <Route path="/services/foundation-repairs" element={<L><FoundationRepairsPage /></L>} />
          <Route path="/services/foundation-repairs/underpinning" element={<L><UnderpinningPage /></L>} />
          <Route path="/services/foundation-repairs/structural-foundation" element={<L><StructuralFoundationPage /></L>} />
          <Route path="/services/foundation-repairs/foundation-stone" element={<L><FoundationStonePage /></L>} />
          <Route path="/services/foundation-repairs/pier-beam" element={<L><PierBeamPage /></L>} />
          <Route path="/services/foundation-repairs/settlement-stabilisation" element={<L><SettlementStabilisationPage /></L>} />

          {/* Tier 1: Remedial Building */}
          <Route path="/services/remedial-building" element={<L><RemedialBuildingPage /></L>} />
          <Route path="/services/remedial-building/strata-repairs" element={<L><StrataRepairsPage /></L>} />
          <Route path="/services/remedial-building/structural-defect" element={<L><StructuralDefectPage /></L>} />
          <Route path="/services/remedial-building/compliance-upgrades" element={<L><ComplianceUpgradesPage /></L>} />
          <Route path="/services/remedial-building/emergency-repairs" element={<L><EmergencyRepairsPage /></L>} />
          <Route path="/services/remedial-building/emergency-structural" element={<L><EmergencyStructuralSupportPage /></L>} />

          {/* Service × Area combo pages (dynamic — only hand-written combos render) */}
          <Route path="/services/:service/:area" element={<L><ServiceAreaPage /></L>} />

          {/* Area pages */}
          <Route path="/areas/sydney-cbd" element={<L><SydneyCBDPage /></L>} />
          <Route path="/areas/eastern-suburbs" element={<L><EasternSuburbsPage /></L>} />
          <Route path="/areas/north-shore" element={<L><NorthShorePage /></L>} />
          <Route path="/areas/northern-beaches" element={<L><NorthernBeachesPage /></L>} />
          <Route path="/areas/inner-west" element={<L><InnerWestPage /></L>} />
          <Route path="/areas/greater-sydney" element={<L><GreaterSydneyPage /></L>} />

          {/* Suburb pages (dynamic) */}
          <Route path="/suburbs/:suburb" element={<L><SuburbPage /></L>} />

          {/* Problem pages (dynamic) */}
          <Route path="/problems" element={<L><ProblemsHubPage /></L>} />
          <Route path="/problems/:problem" element={<L><ProblemPage /></L>} />
          <Route path="/problems/:problem/:area" element={<L><ProblemAreaPage /></L>} />

          {/* Heritage era pages (dynamic) */}
          <Route path="/heritage" element={<L><HeritageHubPage /></L>} />
          <Route path="/heritage/:era" element={<L><HeritageEraPage /></L>} />

          {/* Case studies (dynamic) */}
          <Route path="/case-studies" element={<L><CaseStudiesIndexPage /></L>} />
          <Route path="/case-studies/heritage-sandstone-seawall-vaucluse" element={<Navigate to="/case-studies/heritage-sandstone-seawall-mosman/" replace />} />
          <Route path="/case-studies/:slug" element={<L><CaseStudyPage /></L>} />

          {/* 404 */}
          <Route path="*" element={<L><NotFound /></L>} />
        </Routes>
        </Suspense>
      </QuoteModalProvider>
    </BrowserRouter>
  </HelmetProvider>
)
