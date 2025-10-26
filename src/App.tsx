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
import Blog from "./pages/blog/Index";
import IPhoneScreenRepair from "./pages/blog/IPhoneScreenRepair";
import IPhoneBatteryReplacement from "./pages/blog/IPhoneBatteryReplacement";
import TechMedicsVsAppleStore from "./pages/blog/TechMedicsVsAppleStore";
import MacBookRepairMacon from "./pages/blog/MacBookRepairMacon";
import IPadScreenRepair from "./pages/blog/IPadScreenRepair";
import OEMvsAftermarket from "./pages/blog/OEMvsAftermarket";
import IPhoneNotTurningOn from "./pages/blog/IPhoneNotTurningOn";
import ChoosePhoneRepairShop from "./pages/blog/ChoosePhoneRepairShop";
import WaterDamagedIPhone from "./pages/blog/WaterDamagedIPhone";
import CrackedScreenCost from "./pages/blog/CrackedScreenCost";
import IPhoneRepairNearMe from "./pages/blog/IPhoneRepairNearMe";
import FastIPhoneRepair from "./pages/blog/FastIPhoneRepair";
import HolidayIPhoneRepairChecklist from "./pages/blog/HolidayIPhoneRepairChecklist";
import RepairShareDriveMacon from "./pages/blog/RepairShareDriveMacon";
import WinterDevicePrepMacon from "./pages/blog/WinterDevicePrepMacon";

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/iphone-screen-repair-macon-ga" element={<IPhoneScreenRepair />} />
          <Route path="/blog/iphone-battery-replacement-macon" element={<IPhoneBatteryReplacement />} />
          <Route path="/blog/tech-medics-vs-apple-store-repair" element={<TechMedicsVsAppleStore />} />
          <Route path="/blog/macbook-repair-macon-ga" element={<MacBookRepairMacon />} />
          <Route path="/blog/ipad-screen-repair-macon" element={<IPadScreenRepair />} />
          <Route path="/blog/oem-vs-aftermarket-iphone-screens" element={<OEMvsAftermarket />} />
          <Route path="/blog/iphone-not-turning-on-fix" element={<IPhoneNotTurningOn />} />
          <Route path="/blog/choose-phone-repair-shop-macon" element={<ChoosePhoneRepairShop />} />
          <Route path="/blog/water-damaged-iphone-repair" element={<WaterDamagedIPhone />} />
          <Route path="/blog/iphone-screen-repair-cost-macon" element={<CrackedScreenCost />} />
          <Route path="/blog/iphone-repair-near-me-macon" element={<IPhoneRepairNearMe />} />
          <Route path="/blog/same-day-iphone-repair-macon" element={<FastIPhoneRepair />} />
          <Route path="/blog/holiday-iphone-repair-checklist-macon-2025" element={<HolidayIPhoneRepairChecklist />} />
          <Route path="/blog/repair-share-drive-macon" element={<RepairShareDriveMacon />} />
          <Route path="/blog/winter-device-prep-macon-2025" element={<WinterDevicePrepMacon />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
