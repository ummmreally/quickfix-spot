import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLoader from "@/components/PageLoader";

// Core pages - named chunks for better caching
const Home = lazy(() => import(/* webpackChunkName: "home" */ "./pages/Home"));
const Index = lazy(() => import(/* webpackChunkName: "index" */ "./pages/Index"));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ "./pages/Contact"));
const PricingChart = lazy(() => import(/* webpackChunkName: "pricing" */ "./pages/PricingChart"));
const About = lazy(() => import(/* webpackChunkName: "about" */ "./pages/About"));
const Business = lazy(() => import(/* webpackChunkName: "business" */ "./pages/Business"));
const Education = lazy(() => import(/* webpackChunkName: "education" */ "./pages/Education"));
const Privacy = lazy(() => import(/* webpackChunkName: "privacy" */ "./pages/Privacy"));
const DIYRepair = lazy(() => import(/* webpackChunkName: "diy" */ "./pages/DIYRepair"));
const NotFound = lazy(() => import(/* webpackChunkName: "notfound" */ "./pages/NotFound"));

// Device pages - grouped chunk
const IPhonePage = lazy(() => import(/* webpackChunkName: "devices" */ "./pages/iPhone"));
const IPadPage = lazy(() => import(/* webpackChunkName: "devices" */ "./pages/iPad"));
const MacBookPage = lazy(() => import(/* webpackChunkName: "devices" */ "./pages/MacBook"));

// Neighborhood pages - grouped chunk
const Vineville = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/Vineville"));
const Ingleside = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/Ingleside"));
const NorthMacon = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/NorthMacon"));
const Downtown = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/Downtown"));
const EastMacon = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/EastMacon"));
const SouthMacon = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/SouthMacon"));
const Rutland = lazy(() => import(/* webpackChunkName: "neighborhoods" */ "./pages/neighborhoods/Rutland"));

// Blog pages - grouped chunk
const Blog = lazy(() => import(/* webpackChunkName: "blog" */ "./pages/blog/Index"));
const IPhoneScreenRepair = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPhoneScreenRepair"));
const IPhoneBatteryReplacement = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPhoneBatteryReplacement"));
const TechMedicsVsAppleStore = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/TechMedicsVsAppleStore"));
const MacBookRepairMacon = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/MacBookRepairMacon"));
const IPadScreenRepair = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPadScreenRepair"));
const OEMvsAftermarket = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/OEMvsAftermarket"));
const IPhoneNotTurningOn = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPhoneNotTurningOn"));
const ChoosePhoneRepairShop = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/ChoosePhoneRepairShop"));
const WaterDamagedIPhone = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/WaterDamagedIPhone"));
const CrackedScreenCost = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/CrackedScreenCost"));
const IPhoneRepairNearMe = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPhoneRepairNearMe"));
const FastIPhoneRepair = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/FastIPhoneRepair"));
const HolidayIPhoneRepairChecklist = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/HolidayIPhoneRepairChecklist"));
const RepairShareDriveMacon = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/RepairShareDriveMacon"));
const WinterDevicePrepMacon = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/WinterDevicePrepMacon"));
const IPhoneBatteryReplacement2025 = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPhoneBatteryReplacement2025"));
const IPhoneDyingFast = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/IPhoneDyingFast"));
const MercerUniversityIPhoneRepair = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/MercerUniversityIPhoneRepair"));
const SwollenIPhoneBattery = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/SwollenIPhoneBattery"));
const MacBookScreenCostMacon = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/MacBookScreenCostMacon"));
const SpringMaintenanceMacon = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/SpringMaintenanceMacon"));
const IPhoneVsAndroidRepairCosts = lazy(() => import(/* webpackChunkName: "blog-posts" */ "./pages/blog/iPhoneVsAndroidRepairCosts"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Suspense fallback={<PageLoader />}>
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
