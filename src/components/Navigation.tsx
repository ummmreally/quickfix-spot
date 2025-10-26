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
import logo from "@/assets/logo.png";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="/">
            <img 
              src={logo} 
              alt="Tech Medics Macon GA - iPhone iPad MacBook repair service logo" 
              width="947" 
              height="349"
              className="h-12 w-auto" 
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
              Macon
            </a>
            <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
              Price List
            </a>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                Services
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border z-50">
                <DropdownMenuItem asChild>
                  <a href="/macon/business" className="cursor-pointer">Business</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/education" className="cursor-pointer">Education</a>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <a href="/macon/vineville" className="cursor-pointer">Vineville</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/ingleside" className="cursor-pointer">Ingleside</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/north-macon" className="cursor-pointer">North Macon</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/downtown" className="cursor-pointer">Downtown</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/east-macon" className="cursor-pointer">East Macon</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/south-macon" className="cursor-pointer">South Macon</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="/macon/rutland" className="cursor-pointer">Rutland</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <a href="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium">
              DIY Repair
            </a>
            <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              Blog
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="tel:(478)259-6371">
                <Phone className="mr-2 h-4 w-4" />
                (478) 259-6371
              </a>
            </Button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background">
              <nav className="flex flex-col gap-6 mt-8">
                <a href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Home
                </a>
                <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Macon
                </a>
                <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Price List
                </a>
                <div className="border-t border-border pt-2">
                  <p className="text-sm font-semibold text-muted-foreground mb-2">Services</p>
                  <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>
                    Business
                  </a>
                  <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>
                    Education
                  </a>
                  <p className="text-sm font-semibold text-muted-foreground mb-2 mt-4">Neighborhoods</p>
                  <a href="/macon/vineville" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Vineville
                  </a>
                  <a href="/macon/ingleside" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Ingleside
                  </a>
                  <a href="/macon/north-macon" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    North Macon
                  </a>
                  <a href="/macon/downtown" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Downtown
                  </a>
                  <a href="/macon/east-macon" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    East Macon
                  </a>
                  <a href="/macon/south-macon" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    South Macon
                  </a>
                  <a href="/macon/rutland" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>
                    Rutland
                  </a>
                </div>
                <a href="/macon/diy-repair" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  DIY Repair
                </a>
                <a href="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                  Blog
                </a>
                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                  <a href="tel:(478)259-6371">
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
  );
};

export default Navigation;
