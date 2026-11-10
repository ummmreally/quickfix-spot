import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Recycle, Smartphone, Laptop, Gamepad2, ShieldCheck, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Trade In Your Old Device | Get Credit & Recycle Responsibly | Tech Medics Macon",
  description:
    "Trade in your old iPhone, iPad, MacBook, or game console at Tech Medics Macon. Get credit toward services or accessories. Secure data erasure included. Eco-friendly recycling.",
  alternates: { canonical: "https://techmedicsmacon.com/macon/trade-in/" },
};

export default function TradeInPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-green-50 to-background dark:from-green-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300 text-sm font-semibold mb-6">
            <Leaf className="inline h-4 w-4 mr-1 -mt-0.5" />
            Eco-Friendly Device Recycling
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Trade In Your Old Device.<br className="hidden md:block" /> Get Credit. Save the Planet.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Got an old phone, tablet, or laptop collecting dust? Bring it to Tech Medics and
            get credit toward services or accessories. We&apos;ll securely erase your data and
            recycle responsibly.
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

      {/* What We Accept */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Devices We Accept
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Smartphone,
                title: "iPhones",
                desc: "Any model, any condition — working, cracked, or dead. iPhone 6 and newer.",
              },
              {
                icon: Smartphone,
                title: "iPads",
                desc: "All iPad models including Pro, Air, Mini. Working or non-working.",
              },
              {
                icon: Laptop,
                title: "MacBooks",
                desc: "MacBook Air and Pro, any year. Even with screen damage or battery issues.",
              },
              {
                icon: Gamepad2,
                title: "Game Consoles",
                desc: "PS5, Xbox Series, Nintendo Switch, Steam Deck. Any condition.",
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

      {/* How It Works */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Trade-In Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Bring It In",
                desc: "Walk in with your old device. No appointment needed.",
              },
              {
                step: "2",
                title: "We Evaluate",
                desc: "Quick assessment of model, condition, and functionality.",
              },
              {
                step: "3",
                title: "Get Your Credit",
                desc: "Receive store credit toward any service or accessory purchase.",
              },
              {
                step: "4",
                title: "Secure Wipe",
                desc: "We securely erase all personal data before recycling or refurbishing.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-green-600 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Trade In at Tech Medics?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Recycle,
                title: "Eco-Friendly Recycling",
                desc: "Devices are responsibly recycled or refurbished — not dumped in a landfill. Reduce e-waste and protect the environment.",
              },
              {
                icon: ShieldCheck,
                title: "Secure Data Erasure",
                desc: "Military-grade data wipe ensures your photos, passwords, and personal information are permanently removed.",
              },
              {
                icon: Smartphone,
                title: "Any Condition Accepted",
                desc: "Cracked screen? Dead battery? Won't turn on? We'll still take it. Every device has value.",
              },
              {
                icon: MapPin,
                title: "Instant In-Store Credit",
                desc: "Get credit applied immediately. Use it toward a screen service, battery swap, accessories, or anything else.",
              },
              {
                icon: Leaf,
                title: "Reduce Your E-Waste",
                desc: "The average person has 3-5 old devices at home. Give them a second life instead of letting them decay.",
              },
              {
                icon: Phone,
                title: "Quick & Easy",
                desc: "The whole process takes 5-10 minutes. Walk in, hand it over, walk out with credit.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-lg p-6">
                <item.icon className="h-8 w-8 text-green-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <Recycle className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Got Old Devices? Bring Them In.
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Don&apos;t let old tech sit in a drawer. Trade it in at Tech Medics for instant credit,
            secure data erasure, and responsible recycling. Every device counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 bg-white text-green-800 hover:bg-white/90">
              <Link href="tel:+14782596371">
                <Phone className="mr-2 h-5 w-5" />
                Call (478) 259-6371
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white/30 text-white hover:bg-white/10"
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
