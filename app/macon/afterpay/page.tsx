import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, CheckCircle2, DollarSign, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Afterpay Available – Pay for Repairs in 4 Interest-Free Installments | Tech Medics Macon",
  description:
    "Split your phone, tablet, or laptop repair into 4 interest-free payments with Afterpay at Tech Medics Macon. No credit check, no hidden fees. Walk in today.",
  alternates: { canonical: "https://techmedicsmacon.com/macon/afterpay/" },
};

export default function AfterpayPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-[#b2fce4]/20 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#b2fce4] text-[#000] text-sm font-semibold mb-6">
            Now Accepting Afterpay
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Fix Now. Pay Later.<br className="hidden md:block" /> Interest-Free.
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Split your repair cost into <strong>4 easy payments</strong> with Afterpay.
            No interest, no hidden fees, no credit check. Get your device fixed today
            and pay over time.
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

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How Afterpay Works
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Get Your Repair",
                desc: "Walk in with your broken device. We'll diagnose and fix it — often in 30 minutes.",
              },
              {
                step: "2",
                title: "Choose Afterpay",
                desc: "At checkout, select Afterpay as your payment method. Quick setup on your phone.",
              },
              {
                step: "3",
                title: "Pay 25% Today",
                desc: "Only pay the first installment upfront. Walk out with your repaired device immediately.",
              },
              {
                step: "4",
                title: "3 More Payments",
                desc: "Afterpay automatically charges the remaining 3 payments every 2 weeks. Zero interest.",
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

      {/* Benefits */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Pay with Afterpay?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: "Zero Interest, Always",
                desc: "Unlike credit cards, Afterpay never charges interest. The price you see is the price you pay — split into 4 equal parts.",
              },
              {
                icon: Shield,
                title: "No Credit Check",
                desc: "Afterpay doesn't run a hard credit inquiry. Your credit score stays untouched when you use it for your repair.",
              },
              {
                icon: Clock,
                title: "Get Fixed Today",
                desc: "Don't wait weeks to save up. Get your cracked screen or dead battery fixed now and spread the cost over 6 weeks.",
              },
              {
                icon: CheckCircle2,
                title: "No Hidden Fees",
                desc: "No sign-up fees, no account fees, no processing fees. If you pay on time, you pay exactly the repair cost — nothing more.",
              },
              {
                icon: Phone,
                title: "Easy Setup",
                desc: "Download the Afterpay app or sign up at checkout in under 2 minutes. All you need is a debit or credit card.",
              },
              {
                icon: MapPin,
                title: "In-Store Convenience",
                desc: "Use Afterpay right at our counter. No online ordering required — walk in, get repaired, pay over time.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-card border border-border rounded-lg p-6"
              >
                <item.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Breakdown */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            See How Much You Save vs. Credit Cards
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Example: $200 iPhone screen repair
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-primary">With Afterpay</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Payment 1 (today)</span>
                  <span className="font-semibold">$50.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Payment 2 (2 weeks)</span>
                  <span className="font-semibold">$50.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Payment 3 (4 weeks)</span>
                  <span className="font-semibold">$50.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Payment 4 (6 weeks)</span>
                  <span className="font-semibold">$50.00</span>
                </li>
                <li className="flex justify-between border-t pt-3 mt-3">
                  <span className="font-bold">Total Paid</span>
                  <span className="font-bold text-primary">$200.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Interest Charged</span>
                  <span className="font-bold text-green-600">$0.00</span>
                </li>
              </ul>
            </div>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4 text-destructive">With a Credit Card (20% APR)</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between">
                  <span>Monthly payment (~6 weeks)</span>
                  <span className="font-semibold">~$50/mo</span>
                </li>
                <li className="flex justify-between">
                  <span>Total if paid over 6 months</span>
                  <span className="font-semibold">$210–$220</span>
                </li>
                <li className="flex justify-between border-t pt-3 mt-3">
                  <span className="font-bold">Interest Charged</span>
                  <span className="font-bold text-destructive">$10–$20+</span>
                </li>
                <li className="flex justify-between">
                  <span>Late fee risk</span>
                  <span className="font-bold text-destructive">$25–$40</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there a minimum or maximum repair amount for Afterpay?",
                a: "Afterpay generally works for purchases between $1 and $2,000. Most of our repairs fall well within this range.",
              },
              {
                q: "What happens if I miss a payment?",
                a: "Afterpay may charge a late fee (capped at 25% of the order value). They'll send reminders before each payment is due so you never forget.",
              },
              {
                q: "Do I need good credit to use Afterpay?",
                a: "No. Afterpay does a soft check that doesn't affect your credit score. Most customers are approved instantly.",
              },
              {
                q: "Can I use Afterpay for any repair?",
                a: "Yes — iPhone screen repair, battery replacement, MacBook fixes, game console repairs, and accessories. Anything we sell or service at our shop.",
              },
              {
                q: "How do I sign up?",
                a: "Download the Afterpay app or tell our technician at checkout that you'd like to pay with Afterpay. Setup takes about 2 minutes.",
              },
            ].map((item) => (
              <div key={item.q} className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-bold mb-2">{item.q}</h3>
                <p className="text-muted-foreground text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 px-4 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Don&apos;t Let Cost Stop You From Fixing Your Device
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Walk into Tech Medics today. Pay just 25% now and take home your fully repaired device.
            No interest, no hassle.
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
