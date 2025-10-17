import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import PricingChart from "./pages/PricingChart";
import About from "./pages/About";
import Business from "./pages/Business";
import Education from "./pages/Education";
import IPhonePage from "./pages/iPhone";
import IPadPage from "./pages/iPad";
import MacBookPage from "./pages/MacBook";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/macon" element={<Index />} />
          <Route path="/macon/pricing" element={<Pricing />} />
          <Route path="/macon/pricing-chart" element={<PricingChart />} />
          <Route path="/macon/about" element={<About />} />
          <Route path="/macon/business" element={<Business />} />
          <Route path="/macon/education" element={<Education />} />
          <Route path="/macon/iphone" element={<IPhonePage />} />
          <Route path="/macon/ipad" element={<IPadPage />} />
          <Route path="/macon/macbook" element={<MacBookPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
