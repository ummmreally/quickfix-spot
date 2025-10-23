import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import PricingChart from "./pages/PricingChart";
import About from "./pages/About";
import Business from "./pages/Business";
import Education from "./pages/Education";
import IPhonePage from "./pages/iPhone";
import IPadPage from "./pages/iPad";
import MacBookPage from "./pages/MacBook";
import Privacy from "./pages/Privacy";
import DIYRepair from "./pages/DIYRepair";
import NotFound from "./pages/NotFound";
import Vineville from "./pages/neighborhoods/Vineville";
import Ingleside from "./pages/neighborhoods/Ingleside";
import NorthMacon from "./pages/neighborhoods/NorthMacon";
import Downtown from "./pages/neighborhoods/Downtown";
import EastMacon from "./pages/neighborhoods/EastMacon";
import SouthMacon from "./pages/neighborhoods/SouthMacon";
import Rutland from "./pages/neighborhoods/Rutland";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/macon" element={<Index />} />
          <Route path="/macon/contact" element={<Contact />} />
          <Route path="/macon/pricing-chart" element={<PricingChart />} />
          <Route path="/macon/about" element={<About />} />
          <Route path="/macon/business" element={<Business />} />
          <Route path="/macon/education" element={<Education />} />
          <Route path="/macon/iphone" element={<IPhonePage />} />
          <Route path="/macon/ipad" element={<IPadPage />} />
          <Route path="/macon/macbook" element={<MacBookPage />} />
          <Route path="/macon/diy-repair" element={<DIYRepair />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/macon/vineville" element={<Vineville />} />
          <Route path="/macon/ingleside" element={<Ingleside />} />
          <Route path="/macon/north-macon" element={<NorthMacon />} />
          <Route path="/macon/downtown" element={<Downtown />} />
          <Route path="/macon/east-macon" element={<EastMacon />} />
          <Route path="/macon/south-macon" element={<SouthMacon />} />
          <Route path="/macon/rutland" element={<Rutland />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
