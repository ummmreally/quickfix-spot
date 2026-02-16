import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
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

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Repair Services</h3>
            <div className="space-y-2">
              <Link href="/macon/iphone" className="block text-muted-foreground hover:text-primary transition-colors">iPhone Repair</Link>
              <Link href="/macon/ipad" className="block text-muted-foreground hover:text-primary transition-colors">iPad Repair</Link>
              <Link href="/macon/macbook" className="block text-muted-foreground hover:text-primary transition-colors">MacBook Repair</Link>
              <Link href="/macon/game-console-repair" className="block text-muted-foreground hover:text-primary transition-colors">Game Console Repair</Link>
              <Link href="/macon/screen-repair" className="block text-muted-foreground hover:text-primary transition-colors">Screen Repair</Link>
              <Link href="/macon/battery-replacement" className="block text-muted-foreground hover:text-primary transition-colors">Battery Replacement</Link>
              <Link href="/macon/water-damage" className="block text-muted-foreground hover:text-primary transition-colors">Water Damage Repair</Link>
              <Link href="/macon/data-recovery" className="block text-muted-foreground hover:text-primary transition-colors">Data Recovery</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Neighborhoods</h3>
            <div className="space-y-2">
              <Link href="/macon/downtown" className="block text-muted-foreground hover:text-primary transition-colors">Downtown Macon</Link>
              <Link href="/macon/north-macon" className="block text-muted-foreground hover:text-primary transition-colors">North Macon</Link>
              <Link href="/macon/vineville" className="block text-muted-foreground hover:text-primary transition-colors">Vineville</Link>
              <Link href="/macon/ingleside" className="block text-muted-foreground hover:text-primary transition-colors">Ingleside</Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-foreground">Nearby Cities</h3>
            <div className="space-y-2">
              <Link href="/macon/warner-robins" className="block text-muted-foreground hover:text-primary transition-colors">Phone Repair Warner Robins</Link>
              <Link href="/macon/byron" className="block text-muted-foreground hover:text-primary transition-colors">Phone Repair Byron GA</Link>
              <Link href="/macon/perry" className="block text-muted-foreground hover:text-primary transition-colors">Phone Repair Perry GA</Link>
              <Link href="/macon/forsyth" className="block text-muted-foreground hover:text-primary transition-colors">Phone Repair Forsyth GA</Link>
              <Link href="/macon/east-macon" className="block text-muted-foreground hover:text-primary transition-colors">East Macon</Link>
              <Link href="/macon/south-macon" className="block text-muted-foreground hover:text-primary transition-colors">South Macon</Link>
              <Link href="/macon/rutland" className="block text-muted-foreground hover:text-primary transition-colors">Rutland</Link>
            </div>
          </div>
        </div>

        <div className="text-center text-muted-foreground border-t border-border pt-6 space-y-2">
          <p>&copy; 2026 Tech Medics Macon &ndash; Expert iPhone, iPad &amp; MacBook Repair in Macon, GA</p>
          <p className="text-xs">iPhone Screen Repair Macon GA | iPad Screen Replacement | MacBook Repair | Same-Day Service | Walk-Ins Welcome</p>
          <p className="text-xs"><Link href="/warranty-policy" className="hover:text-primary transition-colors">Warranty Policy</Link> &middot; <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
