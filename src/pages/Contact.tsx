import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  phone: z
    .string()
    .trim()
    .min(10, { message: "Please enter a valid phone number" })
    .max(20, { message: "Phone number must be less than 20 characters" })
    .regex(/^[\d\s\-\(\)\+]+$/, { message: "Phone number can only contain digits, spaces, and ()+-" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCall = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: "phone_call",
      event_category: "engagement",
      event_label: "Phone Call Click",
      value: "478-259-6371",
    });
    window.location.href = "tel:(478)259-6371";
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Encode data for WhatsApp
      const message = encodeURIComponent(
        `New Contact Form Submission:\n\nName: ${validatedData.name}\nEmail: ${validatedData.email}\nPhone: ${validatedData.phone}\n\nMessage:\n${validatedData.message}`,
      );

      // Open WhatsApp with the message (replace with your WhatsApp number)
      window.open(`https://wa.me/14782596371?text=${message}`, "_blank");

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as keyof ContactForm] = err.message;
          }
        });
        setErrors(fieldErrors);

        toast({
          title: "Validation Error",
          description: "Please check the form and try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Contact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our repair services? Get in touch with us and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Your name"
                    maxLength={100}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    maxLength={255}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="(478) 259-6371"
                    maxLength={20}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your device issue or question..."
                    maxLength={1000}
                    rows={5}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message ? (
                      <p className="text-sm text-destructive">{errors.message}</p>
                    ) : (
                      <p className="text-sm text-muted-foreground">{formData.message.length}/1000 characters</p>
                    )}
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                    <p className="text-muted-foreground mb-2">Speak with our team directly</p>
                    <a href="tel:(478)259-6371" className="text-primary hover:underline font-medium">
                      (478) 259-6371
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                    <p className="text-muted-foreground mb-2">
                      3742 Eisenhower Parkway
                      <br />
                      Macon, GA 31206
                    </p>
                    <Button asChild variant="outline" size="sm">
                      <a
                        href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 10:00 AM - 6:00 PM</p>
                      <p>Saturday: 10:00 AM - 5:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="font-semibold text-lg mb-2">Walk-Ins Welcome!</h3>
                <p className="text-muted-foreground">
                  No appointment necessary. Most iPhone screen repairs completed in 30 minutes or less.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>
            © 2024 Tech Medics. All rights reserved. |{" "}
            <Link to="/macon/about" className="hover:text-primary transition-colors">
              About
            </Link>
            {" | "}
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
