"use client";

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
import Link from "next/link";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-secondary/30 border-b border-border py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">Mon-Fri: 10AM-6PM | Sat: 10AM-5PM</span>
          </div>
          <a
            href="tel:(478)259-6371"
            className="text-primary hover:text-primary/80 transition-colors font-medium flex items-center gap-2"
          >
            <Phone className="h-4 w-4" />
            Call Now: (478) 259-6371
          </a>
        </div>
      </div>

      <header className="glass-nav sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link href="/">
              <img
                src="/images/logo.webp"
                alt="Tech Medics Macon GA - iPhone iPad MacBook repair service logo"
                width="947"
                height="349"
                className="h-12 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-background border-border z-50">
                  <DropdownMenuItem asChild>
                    <Link href="/macon/iphone" className="cursor-pointer w-full">iPhone Repair</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/macon/ipad" className="cursor-pointer w-full">iPad Repair</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/macon/macbook" className="cursor-pointer w-full">MacBook Repair</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/macon/warner-robins" className="cursor-pointer w-full">Warner Robins</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/macon/byron" className="cursor-pointer w-full">Byron</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/macon/perry" className="cursor-pointer w-full">Perry</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/macon/forsyth" className="cursor-pointer w-full">Forsyth</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">Blog</Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371">
                  <Phone className="mr-2 h-4 w-4" />
                  (478) 259-6371
                </a>
              </Button>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open navigation menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-background">
                <nav className="flex flex-col gap-6 mt-8">
                  <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Home</Link>
                  <div className="border-t border-border pt-2">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">Device Repair</p>
                    <Link href="/macon/iphone" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>iPhone Repair</Link>
                    <Link href="/macon/ipad" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>iPad Repair</Link>
                    <Link href="/macon/macbook" className="text-foreground hover:text-primary transition-colors font-medium text-lg block mb-3" onClick={() => setMobileMenuOpen(false)}>MacBook Repair</Link>
                    <p className="text-sm font-semibold text-muted-foreground mb-2 mt-4">Nearby Cities</p>
                    <Link href="/macon/warner-robins" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>Warner Robins</Link>
                    <Link href="/macon/byron" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>Byron</Link>
                    <Link href="/macon/perry" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>Perry</Link>
                    <Link href="/macon/forsyth" className="text-foreground hover:text-primary transition-colors font-medium block mb-2" onClick={() => setMobileMenuOpen(false)}>Forsyth</Link>
                  </div>
                  <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>Blog</Link>
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
    </>
  );
};

export default Navigation;
