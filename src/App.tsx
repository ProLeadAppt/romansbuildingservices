import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "@/components/Layout";
import SinglePageApp from "./pages/SinglePageApp";
import UnderConstructionPage from "@/components/UnderConstructionPage";
import { PerformanceMonitor } from "@/components/PerformanceMonitor";
import { ErrorTrackingProvider } from "@/components/ErrorTracking";

const queryClient = new QueryClient();

// Toggle this to show/hide the under construction page
const SHOW_CONSTRUCTION_PAGE = true;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ErrorTrackingProvider>
      <TooltipProvider>
        <PerformanceMonitor />
        <Toaster />
        <Sonner />
        {SHOW_CONSTRUCTION_PAGE ? (
          <UnderConstructionPage />
        ) : (
          <Layout showBreadcrumbs={false}>
            <SinglePageApp />
          </Layout>
        )}
      </TooltipProvider>
    </ErrorTrackingProvider>
  </QueryClientProvider>
);

export default App;
