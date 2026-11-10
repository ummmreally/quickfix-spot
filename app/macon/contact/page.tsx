import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Contact Us</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have questions about our repair services? Give us a call or stop by — walk-ins always welcome.
            </p>
          </div>

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
      </section>
    </>
  );
}
