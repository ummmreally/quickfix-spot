"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  // Make the check robust against trailing slashes and different cases
  const normalizedPath = pathname?.toLowerCase() || "";
  const isMaconLanding = normalizedPath === "/macon" || normalizedPath === "/macon/";

  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className={`grid gap-8 mb-8 ${isMaconLanding ? "md:grid-cols-1 max-w-md mx-auto" : "md:grid-cols-2 lg:grid-cols-4"}`}>
          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Contact</h3>
            <p className="text-muted-foreground mb-2">3742 Eisenhower Parkway</p>
            <p className="text-muted-foreground mb-4">Macon, GA 31206</p>
            <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371">
                <Phone className="mr-2 h-4 w-4" />
                (478) 259-6371
              </a>
            </Button>
          </div>

          {!isMaconLanding && (
            <>
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Repair Services</h3>
                <div className="space-y-2">
                  <Link href="/macon/iphone" className="block text-muted-foreground hover:text-primary transition-colors">iPhone Repair</Link>
                  <Link href="/macon/ipad" className="block text-muted-foreground hover:text-primary transition-colors">iPad Repair</Link>
                  <Link href="/macon/macbook" className="block text-muted-foreground hover:text-primary transition-colors">MacBook Repair</Link>
                  <Link href="/macon/screen-repair" className="block text-muted-foreground hover:text-primary transition-colors">Screen Repair</Link>
                  <Link href="/macon/battery-replacement" className="block text-muted-foreground hover:text-primary transition-colors">Battery Replacement</Link>
                  <Link href="/macon/camera-repair" className="block text-muted-foreground hover:text-primary transition-colors">Camera Repair</Link>
                  <Link href="/macon/water-damage" className="block text-muted-foreground hover:text-primary transition-colors">Water Damage</Link>
                  <Link href="/macon/console-hdmi-stick-drift" className="block text-muted-foreground hover:text-primary transition-colors">HDMI & Stick Drift</Link>
                  <Link href="/macon/data-recovery" className="block text-muted-foreground hover:text-primary transition-colors">Data Recovery</Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Areas We Serve</h3>
                <div className="space-y-2">
                  <Link href="/macon/downtown" className="block text-muted-foreground hover:text-primary transition-colors">Downtown Macon</Link>
                  <Link href="/macon/north-macon" className="block text-muted-foreground hover:text-primary transition-colors">North Macon</Link>
                  <Link href="/macon/vineville" className="block text-muted-foreground hover:text-primary transition-colors">Vineville</Link>
                  <Link href="/macon/ingleside" className="block text-muted-foreground hover:text-primary transition-colors">Ingleside</Link>
                  <Link href="/macon/east-macon" className="block text-muted-foreground hover:text-primary transition-colors">East Macon</Link>
                  <Link href="/macon/rutland" className="block text-muted-foreground hover:text-primary transition-colors">Rutland</Link>
                  <Link href="/macon/warner-robins-iphone-repair" className="block text-muted-foreground hover:text-primary transition-colors">Warner Robins</Link>
                  <Link href="/macon/byron-iphone-repair" className="block text-muted-foreground hover:text-primary transition-colors">Byron</Link>
                  <Link href="/macon/perry-iphone-repair" className="block text-muted-foreground hover:text-primary transition-colors">Perry</Link>
                  <Link href="/macon/forsyth-iphone-repair" className="block text-muted-foreground hover:text-primary transition-colors">Forsyth</Link>
                  <Link href="/macon/houston-county-phone-repair" className="block text-muted-foreground hover:text-primary transition-colors">Houston County</Link>
                  <Link href="/macon/bibb-county-phone-repair" className="block text-muted-foreground hover:text-primary transition-colors">Bibb County</Link>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">Resources</h3>
                <div className="space-y-2">
                  <Link href="/blog" className="block text-muted-foreground hover:text-primary transition-colors">Repair Blog</Link>
                  <Link href="/macon/apple-genuine-parts" className="block text-muted-foreground hover:text-primary transition-colors">Genuine Apple Parts</Link>
                  <Link href="/macon/pricing-chart" className="block text-muted-foreground hover:text-primary transition-colors">Pricing Chart</Link>
                  <Link href="/macon/reviews" className="block text-muted-foreground hover:text-primary transition-colors">Customer Reviews</Link>
                  <Link href="/macon/accessories" className="block text-muted-foreground hover:text-primary transition-colors">Accessories</Link>
                  <Link href="/blog/iphone-screen-repair-cost-macon" className="block text-muted-foreground hover:text-primary transition-colors">Screen Repair Cost Guide</Link>
                  <Link href="/blog/oem-vs-aftermarket-iphone-screens" className="block text-muted-foreground hover:text-primary transition-colors">OEM vs Aftermarket Screens</Link>
                  <Link href="/blog/tech-medics-vs-apple-store-repair" className="block text-muted-foreground hover:text-primary transition-colors">Tech Medics vs Apple Store</Link>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="text-center text-muted-foreground border-t border-border pt-6 space-y-2">
          {isMaconLanding ? (
            <>
              <p>&copy; 2026 Tech Medics Macon &ndash; Device Accessories in Macon, GA</p>
              <p className="text-xs">Phone Cases | Screen Protectors | Chargers | Cables | Walk-Ins Welcome</p>
              <p className="text-xs mt-2 text-muted-foreground font-medium">Disclaimer: We specialize in retail device accessories. We do not offer software troubleshooting or remote technical support.</p>
            </>
          ) : (
            <>
              <p>&copy; 2026 Tech Medics Macon &ndash; Expert iPhone, iPad &amp; MacBook Repair in Macon, GA</p>
              <p className="text-xs">iPhone Screen Repair Macon GA | iPad Screen Replacement | MacBook Repair | Same-Day Service | Walk-Ins Welcome</p>
            </>
          )}
          <p className="text-xs"><Link href="/warranty-policy" className="hover:text-primary transition-colors">Warranty Policy</Link> &middot; <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
