import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./pages/Home"));
const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));
const PricingChart = lazy(() => import("./pages/PricingChart"));
const About = lazy(() => import("./pages/About"));
const Business = lazy(() => import("./pages/Business"));
const Education = lazy(() => import("./pages/Education"));
const IPhonePage = lazy(() => import("./pages/iPhone"));
const IPadPage = lazy(() => import("./pages/iPad"));
const MacBookPage = lazy(() => import("./pages/MacBook"));
const Privacy = lazy(() => import("./pages/Privacy"));
const DIYRepair = lazy(() => import("./pages/DIYRepair"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Vineville = lazy(() => import("./pages/neighborhoods/Vineville"));
const Ingleside = lazy(() => import("./pages/neighborhoods/Ingleside"));
const NorthMacon = lazy(() => import("./pages/neighborhoods/NorthMacon"));
const Downtown = lazy(() => import("./pages/neighborhoods/Downtown"));
const EastMacon = lazy(() => import("./pages/neighborhoods/EastMacon"));
const SouthMacon = lazy(() => import("./pages/neighborhoods/SouthMacon"));
const Rutland = lazy(() => import("./pages/neighborhoods/Rutland"));
const Blog = lazy(() => import("./pages/blog/Index"));
const IPhoneScreenRepair = lazy(() => import("./pages/blog/IPhoneScreenRepair"));
const IPhoneBatteryReplacement = lazy(() => import("./pages/blog/IPhoneBatteryReplacement"));
const TechMedicsVsAppleStore = lazy(() => import("./pages/blog/TechMedicsVsAppleStore"));
const MacBookRepairMacon = lazy(() => import("./pages/blog/MacBookRepairMacon"));
const IPadScreenRepair = lazy(() => import("./pages/blog/IPadScreenRepair"));
const OEMvsAftermarket = lazy(() => import("./pages/blog/OEMvsAftermarket"));
const IPhoneNotTurningOn = lazy(() => import("./pages/blog/IPhoneNotTurningOn"));
const ChoosePhoneRepairShop = lazy(() => import("./pages/blog/ChoosePhoneRepairShop"));
const WaterDamagedIPhone = lazy(() => import("./pages/blog/WaterDamagedIPhone"));
const CrackedScreenCost = lazy(() => import("./pages/blog/CrackedScreenCost"));
const IPhoneRepairNearMe = lazy(() => import("./pages/blog/IPhoneRepairNearMe"));
const FastIPhoneRepair = lazy(() => import("./pages/blog/FastIPhoneRepair"));
const HolidayIPhoneRepairChecklist = lazy(() => import("./pages/blog/HolidayIPhoneRepairChecklist"));
const RepairShareDriveMacon = lazy(() => import("./pages/blog/RepairShareDriveMacon"));
const WinterDevicePrepMacon = lazy(() => import("./pages/blog/WinterDevicePrepMacon"));
const IPhoneBatteryReplacement2025 = lazy(() => import("./pages/blog/IPhoneBatteryReplacement2025"));
const IPhoneDyingFast = lazy(() => import("./pages/blog/IPhoneDyingFast"));
const MercerUniversityIPhoneRepair = lazy(() => import("./pages/blog/MercerUniversityIPhoneRepair"));
const SwollenIPhoneBattery = lazy(() => import("./pages/blog/SwollenIPhoneBattery"));
const MacBookScreenCostMacon = lazy(() => import("./pages/blog/MacBookScreenCostMacon"));
const SpringMaintenanceMacon = lazy(() => import("./pages/blog/SpringMaintenanceMacon"));
const IPhoneVsAndroidRepairCosts = lazy(() => import("./pages/blog/iPhoneVsAndroidRepairCosts"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense
          fallback={
            <div className="flex h-screen items-center justify-center bg-background text-muted-foreground">
              Loading…
            </div>
          }
        >
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
          <Route path="/blog/water-damaged-iphone-repair" element={<WaterDamagedIPhone />} />
          <Route path="/blog/iphone-not-turning-on-fix" element={<IPhoneNotTurningOn />} />
          <Route path="/blog/oem-vs-aftermarket-iphone-screens" element={<OEMvsAftermarket />} />
          <Route path="/blog/iphone-battery-replacement-signs-2025" element={<IPhoneBatteryReplacement2025 />} />
          <Route path="/blog/iphone-dying-fast-after-charging" element={<IPhoneDyingFast />} />
          <Route path="/blog/iphone-repair-mercer-university-student-discount" element={<MercerUniversityIPhoneRepair />} />
          <Route path="/blog/swollen-iphone-battery-replacement-macon" element={<SwollenIPhoneBattery />} />
          <Route path="/blog/macbook-screen-repair-cost-macon" element={<MacBookScreenCostMacon />} />
          <Route path="/blog/spring-maintenance-macon-2025" element={<SpringMaintenanceMacon />} />
          <Route path="/blog/iphone-vs-android-repair-costs-macon" element={<IPhoneVsAndroidRepairCosts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
