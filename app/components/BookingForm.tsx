"use client";

import { useState } from "react";
import { Phone, MapPin, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const DEVICE_OPTIONS = [
  "iPhone 16 Pro Max", "iPhone 16 Pro", "iPhone 16 Plus", "iPhone 16", "iPhone 16e",
  "iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15 Plus", "iPhone 15",
  "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14",
  "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13",
  "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12",
  "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11",
  "iPhone SE", "iPad", "MacBook", "Game Console", "Other",
];

const SERVICE_OPTIONS = [
  "Screen Repair", "Battery Replacement", "Charging Port Repair",
  "Camera Repair", "Water Damage", "Back Glass Repair",
  "Speaker/Mic Repair", "Other",
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    device: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Repair Request: ${formData.device} - ${formData.service}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDevice: ${formData.device}\nService: ${formData.service}\nDetails: ${formData.message}`
    );
    window.location.href = `mailto:mytechmedics1@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section className="py-20 px-4 bg-secondary/20" id="book-repair">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-foreground">Request Submitted!</h2>
          <p className="text-lg text-muted-foreground mb-6">Your email client should open with your repair details. Send the email and we&apos;ll get back to you ASAP.</p>
          <p className="text-muted-foreground mb-8">For fastest service, call us directly:</p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a>
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-secondary/20" id="book-repair">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">Book Your Repair Online</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Fill out the form below to request your repair. We&apos;ll confirm your appointment and have your device ready to fix when you walk in. Or call for immediate service.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-3">
            <Card className="p-6 md:p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                    <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                    <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                      placeholder="(478) 000-0000" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email (optional)</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    placeholder="you@email.com" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="device" className="block text-sm font-medium text-foreground mb-1.5">Device Model *</label>
                    <select id="device" name="device" required value={formData.device} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                      <option value="">Select your device</option>
                      {DEVICE_OPTIONS.map((d) => <option key={d} value={d}>{d}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Repair Needed *</label>
                    <select id="service" name="service" required value={formData.service} onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                      <option value="">Select repair type</option>
                      {SERVICE_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Additional Details (optional)</label>
                  <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                    placeholder="Describe the issue — cracked corner, won't charge, etc." />
                </div>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="mr-2 h-5 w-5" />Submit Repair Request
                </Button>
                <p className="text-xs text-muted-foreground text-center">Walk-ins always welcome &mdash; no appointment needed for same-day service</p>
              </form>
            </Card>
          </div>

          <div className="md:col-span-2 space-y-4">
            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-3 flex items-center"><Phone className="mr-2 h-5 w-5 text-primary" />Prefer to Call?</h3>
              <p className="text-muted-foreground text-sm mb-4">For the fastest service, call us directly. We can give you a quote over the phone.</p>
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="tel:(478)259-6371"><Phone className="mr-2 h-4 w-4" />(478) 259-6371</a>
              </Button>
            </Card>

            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-3 flex items-center"><MapPin className="mr-2 h-5 w-5 text-primary" />Visit Our Shop</h3>
              <p className="text-sm text-foreground font-medium">3742 Eisenhower Parkway</p>
              <p className="text-sm text-muted-foreground mb-2">Macon, GA 31206</p>
              <div className="text-sm text-muted-foreground space-y-1 mb-4">
                <p><strong>Mon&ndash;Fri:</strong> 10am &ndash; 6pm</p>
                <p><strong>Saturday:</strong> 10am &ndash; 5pm</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
              <Button asChild variant="outline" className="w-full border-2">
                <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">
                  <MapPin className="mr-2 h-4 w-4" />Get Directions
                </a>
              </Button>
            </Card>

            <Card className="p-6 border-border bg-primary/5">
              <h3 className="font-bold text-foreground mb-2">What to Expect</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Free diagnostic &amp; quote</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />Most repairs in 30 minutes</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />30-day parts &amp; labor warranty</li>
                <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />No fix, no fee guarantee</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
