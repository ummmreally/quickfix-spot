import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, Zap, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Same-Day Walk-In Service | No Appointment Needed | Tech Medics Macon GA",
  description:
    "Walk in today for same-day device service at Tech Medics Macon. Most devices ready in 30 minutes. No appointment required. Open Mon-Fri 10-6, Sat 10-5. 3742 Eisenhower Pkwy.",
  alternates: { canonical: "https://techmedicsmacon.com/macon/walk-in/" },
};

export default function WalkInPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
            No Appointment Needed
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Walk In. Walk Out.<br className="hidden md:block" /> Done in 30 Minutes.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Skip the wait. Bring your device to Tech Medics and most services are completed
            while you wait — no scheduling, no coming back tomorrow.
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

      {/* What to Expect */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            What to Expect When You Visit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "1. Walk In & Check In",
                desc: "Head to our counter at 3742 Eisenhower Parkway. Tell us what's going on with your device. No paperwork, no waiting room.",
              },
              {
                icon: Zap,
                title: "2. Quick Assessment",
                desc: "Our technician evaluates your device right at the counter — usually in under 5 minutes. You'll get an exact price and time estimate before we start.",
              },
              {
                icon: CheckCircle2,
                title: "3. Same-Day Completion",
                desc: "Most services finish in 30 minutes or less. Wait in our shop, grab lunch nearby, or we'll text you when it's ready.",
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

      {/* Hours & Location */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Hours & Location
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between"><span>Monday – Friday</span><span className="font-semibold">10:00 AM – 6:00 PM</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-semibold">10:00 AM – 5:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="text-muted-foreground">Closed</span></li>
              </ul>
              <p className="text-xs text-muted-foreground mt-4">
                Walk-ins accepted up to 30 minutes before closing to ensure same-day completion.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <MapPin className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold mb-4">Find Us</h3>
              <p className="text-sm text-muted-foreground mb-4">
                3742 Eisenhower Parkway<br />
                Macon, GA 31206
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                Easy access from I-75. Free parking directly in front of the shop. 20 minutes from Warner Robins.
              </p>
              <Button asChild variant="outline" size="sm">
                <Link href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Walk-In */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Customers Choose Walk-In Service
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "No appointment scheduling — come when it suits you",
              "Most services done in 30 minutes or less",
              "See the price before committing — free assessment",
              "100+ five-star Google reviews for a reason",
              "Genuine Apple parts available",
              "30-day warranty on every service",
              "Pay with Afterpay — split into 4 interest-free payments",
              "Open 6 days a week including Saturdays",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready? Just Walk In.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            No appointment. No waiting days for a slot. Bring your device to 3742 Eisenhower Parkway
            and we&apos;ll take care of it while you wait.
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
            Mon–Fri 10am–6pm • Sat 10am–5pm • Walk-ins always welcome
          </p>
        </div>
      </section>
    </>
  );
}
