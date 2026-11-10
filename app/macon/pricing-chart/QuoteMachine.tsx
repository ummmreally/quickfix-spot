"use client";

import { useState, useMemo } from "react";
import { Phone, MapPin, Search, ChevronRight, CheckCircle, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type ServiceList = string[];
interface CategoryData { label: string; models: Record<string, ServiceList>; }

const S_IP  = ["Screen Repair","Battery Replacement","Charging Port Repair","Back Glass Repair","Camera Repair","Speaker Repair","Water Damage Diagnostic"];
const S_PAD = ["Screen Repair","Battery Replacement","Charging Port Repair","Camera Repair","Speaker Repair","Water Damage Diagnostic"];
const S_MB  = ["Screen Repair","Battery Replacement","Keyboard Repair","Charging Port Repair","Data Recovery","Water Damage Diagnostic"];
const S_GC  = ["HDMI Port Repair","Disc Drive Repair","Controller Repair","Fan / Overheating","Battery Replacement","Screen Repair"];

const PRICING: Record<string, CategoryData> = {
  iphone: {
    label:"iPhone",
    models:{
      "iPhone 16 Pro Max":  S_IP,
      "iPhone 16 Pro":      S_IP,
      "iPhone 16 Plus":     S_IP,
      "iPhone 16":          S_IP,
      "iPhone 16e":         S_IP,
      "iPhone 15 Pro Max":  S_IP,
      "iPhone 15 Pro":      S_IP,
      "iPhone 15 Plus":     S_IP,
      "iPhone 15":          S_IP,
      "iPhone 14 Pro Max":  S_IP,
      "iPhone 14 Pro":      S_IP,
      "iPhone 14 Plus":     S_IP,
      "iPhone 14":          S_IP,
      "iPhone 13 Pro Max":  S_IP,
      "iPhone 13 Pro":      S_IP,
      "iPhone 13":          S_IP,
      "iPhone 13 mini":     S_IP,
      "iPhone 12 Pro Max":  S_IP,
      "iPhone 12 Pro":      S_IP,
      "iPhone 12":          S_IP,
      "iPhone 12 mini":     S_IP,
      "iPhone 11 Pro Max":  S_IP,
      "iPhone 11 Pro":      S_IP,
      "iPhone 11":          S_IP,
      "iPhone XS Max":      S_IP,
      "iPhone XS":          S_IP,
      "iPhone XR":          S_IP,
      "iPhone X":           S_IP,
      "iPhone 8 Plus":      S_IP,
      "iPhone 8":           S_IP,
      "iPhone 7 Plus":      S_IP,
      "iPhone 7":           S_IP,
    },
  },
  ipad: {
    label:"iPad",
    models:{
      "iPad Pro 13\" (M4)": S_PAD,
      "iPad Pro 11\" (M4)": S_PAD,
      "iPad Pro 13\" (M2)": S_PAD,
      "iPad Pro 11\" (M2)": S_PAD,
      "iPad Air 13\" (M2)": S_PAD,
      "iPad Air 11\" (M2)": S_PAD,
      "iPad Air (M1)":      S_PAD,
      "iPad mini 7":        S_PAD,
      "iPad mini 6":        S_PAD,
      "iPad (10th gen)":    S_PAD,
      "iPad (9th gen)":     S_PAD,
      "iPad (8th gen)":     S_PAD,
    },
  },
  macbook: {
    label:"MacBook",
    models:{
      "MacBook Air 15\" (M4)": S_MB,
      "MacBook Air 13\" (M4)": S_MB,
      "MacBook Air 15\" (M3)": S_MB,
      "MacBook Air 13\" (M3)": S_MB,
      "MacBook Air (M2)":      S_MB,
      "MacBook Air (M1)":      S_MB,
      "MacBook Pro 16\" (M4)": S_MB,
      "MacBook Pro 14\" (M4)": S_MB,
      "MacBook Pro 16\" (M3)": S_MB,
      "MacBook Pro 14\" (M3)": S_MB,
      "MacBook Pro 13\" (M2)": S_MB,
      "MacBook Pro 13\" (M1)": S_MB,
    },
  },
  console: {
    label:"Game Console",
    models:{
      "PlayStation 5":        S_GC,
      "PlayStation 5 Slim":   S_GC,
      "Xbox Series X":        S_GC,
      "Xbox Series S":        S_GC,
      "Nintendo Switch OLED": S_GC,
      "Nintendo Switch":      S_GC,
      "Nintendo Switch Lite": S_GC,
      "Steam Deck":           S_GC,
    },
  },
};

export default function QuoteMachine() {
  const [cat, setCat] = useState("iphone");
  const [model, setModel] = useState("");
  const [search, setSearch] = useState("");

  const category = PRICING[cat];
  const filteredModels = useMemo(() => {
    const all = Object.keys(category.models);
    return search.trim() ? all.filter(m => m.toLowerCase().includes(search.toLowerCase())) : all;
  }, [category, search]);

  const serviceKeys = model ? category.models[model] ?? [] : [];

  function changeCategory(k: string) { setCat(k); setModel(""); setSearch(""); }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-secondary/5 py-14 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Repair Pricing &amp; Quote</h1>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-6">
          Select your device and model to see exact repair prices. Walk-ins welcome — no appointment needed.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call for Free Quote</a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-2">
            <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
              <MapPin className="mr-2 h-5 w-5" />Get Directions
            </a>
          </Button>
        </div>
      </section>

      {/* Tool */}
      <section className="max-w-5xl mx-auto px-4 py-10">

        {/* Step 1 */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">Step 1 — Select Device Type</p>
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {Object.entries(PRICING).map(([key, c]) => (
            <button key={key} onClick={() => changeCategory(key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all ${cat === key ? "bg-primary border-primary text-primary-foreground shadow-md" : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-primary/5"}`}>
              {c.label}
            </button>
          ))}
        </div>

        {/* Step 2 */}
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">Step 2 — Select Your Model</p>
        <div className="relative mb-3 max-w-sm mx-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder={`Search ${category.label} models…`} value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-1 mb-8">
          {filteredModels.length === 0 && <p className="text-muted-foreground text-sm col-span-full py-4 text-center">No models found</p>}
          {filteredModels.map(m => (
            <button key={m} onClick={() => setModel(m)}
              className={`text-left px-3 py-2.5 rounded-lg border text-sm font-medium transition-all leading-tight ${model === m ? "bg-primary border-primary text-primary-foreground shadow-sm" : "bg-card border-border text-foreground hover:border-primary/50 hover:bg-primary/5"}`}>
              {model === m && <CheckCircle className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />}{m}
            </button>
          ))}
        </div>

        {/* Step 3 */}
        {!model && (
          <Card className="p-10 text-center border-dashed border-2">
            <p className="text-muted-foreground text-lg">Select your device model above to see available services</p>
          </Card>
        )}

        {model && serviceKeys.length > 0 && (
          <>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3 text-center">Step 3 — Available Services</p>
            <Card className="overflow-hidden shadow-md mb-6">
              <div className="bg-primary px-6 py-4 flex items-center justify-between">
                <div>
                  <p className="text-primary-foreground/70 text-xs font-semibold uppercase tracking-wider">{category.label}</p>
                  <h2 className="text-primary-foreground text-xl font-bold">{model}</h2>
                </div>
                <div className="text-primary-foreground/80 text-xs text-right">
                  <p>Walk-ins welcome</p>
                  <p className="font-semibold">30-min most repairs</p>
                </div>
              </div>
              <div className="divide-y divide-border">
                {serviceKeys.map(service => (
                  <div key={service} className="flex items-center justify-between px-6 py-4 hover:bg-muted/40 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full flex-shrink-0 bg-primary" />
                      <span className="font-medium text-sm text-foreground">{service}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button asChild size="sm" className="bg-primary hover:bg-primary/90 h-8 text-xs px-3">
                        <a href="tel:(478)259-6371">Call for Price</a>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-muted/50 px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Info className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                  <span>Call or walk in for an exact quote. All repairs include a 30-day warranty. No fix, no fee.</span>
                </div>
                <Button asChild className="bg-primary hover:bg-primary/90 shrink-0">
                  <a href="tel:(478)259-6371"><Phone className="mr-2 h-4 w-4" />(478) 259-6371</a>
                </Button>
              </div>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { href:"tel:(478)259-6371", icon:<Phone className="h-5 w-5 text-primary"/>, title:"Call to Confirm Price", sub:"(478) 259-6371" },
                { href:"https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206", icon:<MapPin className="h-5 w-5 text-primary"/>, title:"Walk In — No Appointment", sub:"3742 Eisenhower Pkwy, Macon" },
              ].map(item => (
                <Card key={item.title} className="p-5 hover:shadow-md transition-shadow">
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-center gap-4 w-full">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">{item.icon}</div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-primary font-medium text-sm">{item.sub}</p>
                    </div>
                    <ChevronRight className="ml-auto h-5 w-5 text-muted-foreground" />
                  </a>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>

      {/* Trust bar */}
      <section className="bg-card border-t border-border py-8 px-4 mt-8">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { label:"30-Day Warranty", sub:"Every repair, every time" },
            { label:"Same-Day Service", sub:"Most repairs in 30 min" },
            { label:"No Fix, No Fee", sub:"You only pay if we fix it" },
            { label:"Walk-Ins Welcome", sub:"No appointment needed" },
          ].map(item => (
            <div key={item.label}>
              <p className="font-bold text-foreground text-sm">{item.label}</p>
              <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
