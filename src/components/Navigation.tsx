import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import logo from "@/assets/optimized/logo.webp";
import HoursDisplay from "@/components/HoursDisplay";
import PrefetchLink from "@/components/PrefetchLink";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top info bar */}
      <div className="bg-secondary/30 border-b border-border py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <HoursDisplay compact />
          <a 
            href="tel:(478)259-6371" 
            className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-2"
            data-track="phone-cta"
            data-location="nav-top-bar"
          >
            <Phone className="h-4 w-4" />
            Call Now: (478) 259-6371
          </a>
        </div>
      </div>
      
      <header className="glass-nav sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <PrefetchLink to="/">
            <img 
              src={logo} 
              alt="Tech Medics Macon GA - iPhone iPad MacBook repair service logo" 
              width="947" 
              height="349"
              className="h-12 w-auto" 
            />
          </PrefetchLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <PrefetchLink to="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </PrefetchLink>
            <PrefetchLink to="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
              Macon
            </PrefetchLink>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border z-50">
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/business" className="cursor-pointer w-full">Business</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/education" className="cursor-pointer w-full">Education</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/vineville" className="cursor-pointer w-full">Vineville</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/ingleside" className="cursor-pointer w-full">Ingleside</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/north-macon" className="cursor-pointer w-full">North Macon</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/downtown" className="cursor-pointer w-full">Downtown</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/east-macon" className="cursor-pointer w-full">East Macon</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/south-macon" className="cursor-pointer w-full">South Macon</PrefetchLink>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <PrefetchLink to="/macon/rutland" className="cursor-pointer w-full">Rutland</PrefetchLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <PrefetchLink to="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium">
              DIY Repair
            </PrefetchLink>
            <PrefetchLink to="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </PrefetchLink>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a 
                href="tel:(478)259-6371"
                data-track="phone-cta"
                data-location="nav-desktop"
              >
                <Phone className="mr-2 h-4 w-4" />
                (478) 259-6371
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <nav className="flex flex-col gap-6 mt-8">
                <PrefetchLink to="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </PrefetchLink>
                <PrefetchLink to="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Macon
                </PrefetchLink>
                <div className="border-t border-border pt-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                  <PrefetchLink to="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>
                    Business
                  </PrefetchLink>
                  <PrefetchLink to="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>
                    Education
                  </PrefetchLink>
                  <p className="text-sm font-semibold text-muted-foreground mb-2 mt-4">Neighborhoods</p>
                  <PrefetchLink to="/macon/vineville" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Vineville
                  </PrefetchLink>
                  <PrefetchLink to="/macon/ingleside" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Ingleside
                  </PrefetchLink>
                  <PrefetchLink to="/macon/north-macon" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    North Macon
                  </PrefetchLink>
                  <PrefetchLink to="/macon/downtown" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Downtown
                  </PrefetchLink>
                  <PrefetchLink to="/macon/east-macon" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    East Macon
                  </PrefetchLink>
                  <PrefetchLink to="/macon/south-macon" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    South Macon
                  </PrefetchLink>
                  <PrefetchLink to="/macon/rutland" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Rutland
                  </PrefetchLink>
                </div>
                <PrefetchLink to="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  DIY Repair
                </PrefetchLink>
                <PrefetchLink to="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </PrefetchLink>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <a 
                    href="tel:(478)259-6371"
                    data-track="phone-cta"
                    data-location="nav-mobile"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    (478) 259-6371
                  </a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    </>
  );
};

export default Navigation;
