"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !formData.email.includes("@")) newErrors.email = "Valid email required";
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = "Valid phone required";
    if (!formData.message.trim() || formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    const message = encodeURIComponent(
      `New Contact Form Submission:\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    window.open(`https://wa.me/14782596371?text=${message}`, "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our repair services? Get in touch and we&apos;ll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name <span className="text-destructive">*</span></label>
                  <Input id="name" type="text" value={formData.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Your name" maxLength={100} className={errors.name ? "border-destructive" : ""} />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email <span className="text-destructive">*</span></label>
                  <Input id="email" type="email" value={formData.email} onChange={(e) => handleInputChange("email", e.target.value)} placeholder="your.email@example.com" maxLength={255} className={errors.email ? "border-destructive" : ""} />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone <span className="text-destructive">*</span></label>
                  <Input id="phone" type="tel" value={formData.phone} onChange={(e) => handleInputChange("phone", e.target.value)} placeholder="(478) 259-6371" maxLength={20} className={errors.phone ? "border-destructive" : ""} />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message <span className="text-destructive">*</span></label>
                  <Textarea id="message" value={formData.message} onChange={(e) => handleInputChange("message", e.target.value)} placeholder="Tell us about your device issue or question..." maxLength={1000} rows={5} className={errors.message ? "border-destructive" : ""} />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? <p className="text-sm text-destructive">{errors.message}</p> : <p className="text-sm text-muted-foreground">{formData.message.length}/1000 characters</p>}
                  </div>
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>{isSubmitting ? "Sending..." : "Send Message"}</Button>
              </form>
            </Card>

            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak with our team directly</p>
                    <a href="tel:(478)259-6371" className="text-primary hover:underline font-medium">(478) 259-6371</a>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">3742 Eisenhower Parkway<br />Macon, GA 31206</p>
                    <Button asChild variant="outline" size="sm">
                      <a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer">Get Directions</a>
                    </Button>
                  </div>
                </div>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><Clock className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday – Friday: 10:00 AM – 6:00 PM</p>
                      <p>Saturday: 10:00 AM – 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-lg mb-2">Walk-Ins Welcome!</h3>
                <p className="text-muted-foreground">No appointment necessary. Most iPhone screen repairs completed in 30 minutes or less.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
