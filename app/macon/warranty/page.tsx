import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Shield, CheckCircle2, Clock, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "30-Day Warranty on All Services | Parts & Labor Guaranteed | Tech Medics Macon",
  description:
    "Every service at Tech Medics Macon includes a 30-day warranty covering both parts and labor. If something isn't right, bring it back — we'll make it right at no extra cost.",
  alternates: { canonical: "https://techmedicsmacon.com/macon/warranty/" },
};

export default function WarrantyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            30-Day Warranty.<br className="hidden md:block" /> Every Service. No Exceptions.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            We stand behind our work. Every device that leaves our shop is backed by a comprehensive
            30-day warranty on both parts and labor. If anything goes wrong, bring it back.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="tel:+14782596371">
                <Phone className="mr-2 h-5 w-5" />
                Call (478) 259-6371
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link href="/macon/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Our Shop
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What's Covered */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What&apos;s Covered
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <CheckCircle2 className="h-8 w-8 text-green-600 mb-4" />
              <h3 className="text-lg font-bold mb-4 text-green-700">Included in Your Warranty</h3>
              <ul className="space-y-3 text-sm">
                {[
                  "Defective replacement parts (screens, batteries, ports, etc.)",
                  "Labor to re-service the device at no additional cost",
                  "Any issue directly related to the original service performed",
                  "Parts that stop functioning under normal use within 30 days",
                  "Touchscreen responsiveness issues after screen service",
                  "Battery health discrepancies after battery swap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <AlertCircle className="h-8 w-8 text-muted-foreground mb-4" />
              <h3 className="text-lg font-bold mb-4">Not Covered</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {[
                  "New physical damage (drops, cracks, bends) after service",
                  "Liquid damage occurring after the device was returned",
                  "Issues unrelated to the original service performed",
                  "Devices opened or serviced by another provider after our service",
                  "Software issues or data loss (always back up before service)",
                  "Cosmetic wear from normal use",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <AlertCircle className="h-4 w-4 text-muted-foreground mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How to Use Your Warranty
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Bring It Back",
                desc: "Visit us at 3742 Eisenhower Parkway within 30 days of your original service. No receipt needed — we keep records.",
              },
              {
                step: "2",
                title: "Quick Inspection",
                desc: "Our technician will evaluate the device to confirm the issue is related to the original service.",
              },
              {
                step: "3",
                title: "Free Re-Service",
                desc: "If it's covered, we'll resolve the issue at no cost — same-day in most cases. No questions asked.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why Our Warranty Matters
          </h2>
          <p className="text-muted-foreground mb-8">
            Many shops offer no warranty or charge extra for coverage. At Tech Medics, every
            service includes our 30-day guarantee — it&apos;s built into the price because we
            trust the quality of our parts and our work.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-sm">Parts Guaranteed</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-sm">30 Full Days</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-sm">Labor Included</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Service You Can Trust
          </h2>
          <p className="text-lg opacity-90 mb-8">
            100+ five-star reviews. 30-day warranty on every job. Genuine Apple parts available.
            Bring your device to Tech Medics today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8">
              <Link href="tel:+14782596371">
                <Phone className="mr-2 h-5 w-5" />
                Call (478) 259-6371
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/macon/contact">
                <MapPin className="mr-2 h-5 w-5" />
                Visit Us Today
              </Link>
            </Button>
          </div>
          <p className="mt-6 text-sm opacity-75">
            3742 Eisenhower Parkway, Macon, GA 31206 • Mon–Fri 10am–6pm • Sat 10am–5pm
          </p>
        </div>
      </section>
    </>
  );
}
