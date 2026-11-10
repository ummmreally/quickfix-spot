"use client";

import { Button } from "@/components/ui/button";
import { Phone, Menu, MapPin, Clock } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

const categoryLinks = [
  { href: "/macon/iphone", label: "iPhone" },
  { href: "/macon/ipad", label: "iPad" },
  { href: "/macon/macbook", label: "MacBook" },
  { href: "/macon/imac", label: "iMac" },
  { href: "/macon/game-console-repair", label: "Game Console" },
  { href: "/macon/screen-repair", label: "Screen Repair" },
  { href: "/macon/battery-replacement", label: "Battery" },
  { href: "/macon/charging-port-repair", label: "Charging Port" },
  { href: "/macon/water-damage", label: "Water Damage" },
  { href: "/macon/data-recovery", label: "Data Recovery" },
  { href: "/macon/pricing-chart", label: "Pricing" },
  { href: "/blog", label: "Blog" },
];

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const normalizedPath = pathname?.toLowerCase() || "";
  const isMaconLanding = normalizedPath === "/macon" || normalizedPath === "/macon/";

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-foreground text-background py-1.5 px-4 text-xs hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3 w-3" />
              3742 Eisenhower Pkwy, Macon GA
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3 w-3" />
              Mon-Fri 10-6 | Sat 10-5
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/macon/about" className="hover:text-primary-foreground/80 transition-colors">About</Link>
            <Link href="/macon/contact" className="hover:text-primary-foreground/80 transition-colors">Contact</Link>
            <Link href="/macon/reviews" className="hover:text-primary-foreground/80 transition-colors">Reviews</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20 gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <img
                src="/images/logo.webp"
                alt="Tech Medics Macon GA - iPhone iPad MacBook repair service logo"
                width="947"
                height="349"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {isMaconLanding ? (
              <Link href="/" className="flex items-center justify-center p-2 hover:bg-secondary/50 rounded-full transition-colors" aria-label="Go to Home">
                <Home className="h-6 w-6 text-primary" />
              </Link>
            ) : (
              <>
                {/* Center: Quick info - desktop */}
                <div className="hidden lg:flex items-center gap-6 text-sm text-muted-foreground">
                  <Link href="/macon/services" className="font-medium text-foreground hover:text-primary transition-colors">All Services</Link>
                  <Link href="/macon/apple-genuine-parts" className="font-medium text-foreground hover:text-primary transition-colors">Genuine Parts</Link>
                  <Link href="/macon/pricing-chart" className="font-medium text-foreground hover:text-primary transition-colors">Pricing</Link>
                </div>

                {/* Right: Phone CTA */}
                <div className="flex items-center gap-3">
                  <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold hidden sm:flex">
                    <a href="tel:(478)259-6371">
                      <Phone className="mr-2 h-4 w-4" />
                      (478) 259-6371
                    </a>
                  </Button>
                  <a href="tel:(478)259-6371" className="sm:hidden text-primary">
                    <Phone className="h-5 w-5" />
                  </a>

                  {/* Mobile menu */}
                  <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                        <Menu className="h-6 w-6" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] bg-background overflow-y-auto">
                      <nav className="flex flex-col gap-4 mt-8">
                        <Link href="/" className="text-foreground hover:text-primary transition-colors font-semibold text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                        <div className="border-t border-border pt-3">
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Device Repair</p>
                          {[
                            { href: "/macon/iphone", label: "iPhone Repair" },
                            { href: "/macon/ipad", label: "iPad Repair" },
                            { href: "/macon/macbook", label: "MacBook Repair" },
                            { href: "/macon/imac", label: "iMac Repair" },
                            { href: "/macon/game-console-repair", label: "Game Console Repair" },
                            { href: "/macon/ps5-repair", label: "PS5 Repair" },
                            { href: "/macon/xbox-repair", label: "Xbox Repair" },
                            { href: "/macon/console-hdmi-stick-drift", label: "HDMI & Stick Drift" },
                          ].map((item) => (
                            <Link key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors block py-1.5" onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                          ))}
                        </div>
                        <div className="border-t border-border pt-3">
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">Repair by Issue</p>
                          {[
                            { href: "/macon/screen-repair", label: "Screen Repair" },
                            { href: "/macon/battery-replacement", label: "Battery Replacement" },
                            { href: "/macon/charging-port-repair", label: "Charging Port" },
                            { href: "/macon/water-damage", label: "Water Damage" },
                            { href: "/macon/data-recovery", label: "Data Recovery" },
                            { href: "/macon/camera-repair", label: "Camera Repair" },
                            { href: "/macon/back-glass-repair", label: "Back Glass Repair" },
                          ].map((item) => (
                            <Link key={item.href} href={item.href} className="text-foreground hover:text-primary transition-colors block py-1.5" onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                          ))}
                        </div>
                        <div className="border-t border-border pt-3 space-y-2">
                          <Link href="/macon/services" className="text-foreground hover:text-primary transition-colors font-semibold block" onClick={() => setMobileMenuOpen(false)}>All Services</Link>
                          <Link href="/macon/about" className="text-foreground hover:text-primary transition-colors font-semibold block" onClick={() => setMobileMenuOpen(false)}>About</Link>
                          <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-semibold block" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
                          <Link href="/macon/contact" className="text-foreground hover:text-primary transition-colors font-semibold block" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
                          <Link href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-semibold block" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
                        </div>
                        <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full mt-2">
                          <a href="tel:(478)259-6371">
                            <Phone className="mr-2 h-4 w-4" />
                            (478) 259-6371
                          </a>
                        </Button>
                      </nav>
                    </SheetContent>
                  </Sheet>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Category navigation bar - Mobilesentrix style */}
        {!isMaconLanding && (
          <div className="border-t border-border bg-white">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center overflow-x-auto scrollbar-hide" aria-label="Service categories">
                {categoryLinks.map((cat) => (
                  <Link
                    key={cat.href}
                    href={cat.href}
                    className={`whitespace-nowrap px-4 py-2.5 text-sm font-medium transition-colors hover:text-primary hover:bg-primary/5 ${
                      normalizedPath.startsWith(cat.href.toLowerCase())
                        ? "text-primary border-b-2 border-primary"
                        : "text-foreground"
                    }`}
                  >
                    {cat.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navigation;
