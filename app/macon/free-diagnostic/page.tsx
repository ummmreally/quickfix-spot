import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Search, CheckCircle2, Clock, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Device Diagnostic | No-Cost Assessment | Tech Medics Macon GA",
  description:
    "Not sure what's wrong with your device? Get a free diagnostic at Tech Medics Macon. No-cost, no-obligation assessment. Walk in today — 3742 Eisenhower Pkwy. Call (478) 259-6371.",
  alternates: { canonical: "https://techmedicsmacon.com/macon/free-diagnostic/" },
};

export default function FreeDiagnosticPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <Search className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Free Device Diagnostic.<br className="hidden md:block" /> Know Before You Pay.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Not sure what&apos;s wrong? Bring your device in and our technician will assess it
            at the counter — completely free. You&apos;ll get an honest answer and a clear price
            before deciding anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8">
              <Link href="tel:+14782596371">
                <Phone className="mr-2 h-5 w-5" />
                Call (478) 259-6371
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8">
              <Link href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How the Free Diagnostic Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Walk In Anytime",
                desc: "No appointment needed. Visit our shop during business hours and tell us what your device is doing (or not doing).",
              },
              {
                icon: Search,
                title: "Technician Assessment",
                desc: "Our technician examines your device right at the counter. We'll identify the issue, explain what's happening, and give you options.",
              },
              {
                icon: DollarSign,
                title: "Get a Clear Quote",
                desc: "You'll receive an exact price and time estimate. No pressure, no obligation. You decide if and when to proceed.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6 text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues We Diagnose */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Issues We Assess
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Cracked or unresponsive screen",
              "Battery draining too fast or not charging",
              "Device won't turn on",
              "Charging port not connecting",
              "Camera not focusing or showing black",
              "Liquid exposure or water indicator tripped",
              "Overheating during normal use",
              "Speaker or microphone not working",
              "Buttons stuck or unresponsive",
              "Slow performance or freezing",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Free */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Why We Offer Free Diagnostics
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            We believe you deserve to know what&apos;s wrong with your device before spending any money.
            Some shops charge $30–$50 just to look. We don&apos;t. Our free assessment means you can
            make an informed decision with zero risk.
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-lg p-4">
              <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-sm">$0 to Diagnose</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-sm">5-Minute Assessment</p>
            </div>
            <div className="bg-card border border-border rounded-lg p-4">
              <CheckCircle2 className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="font-bold text-sm">No Obligation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Curious What&apos;s Wrong? Come Find Out — Free.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Walk into Tech Medics with your device. We&apos;ll tell you exactly what&apos;s going on,
            what it costs, and how long it takes. No charge for the assessment, ever.
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
              <Link href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
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
