import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";
import logo from "@/assets/logo.png";
const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:478-259-6371";
  };
  const handleDirections = () => {
    window.open("https://maps.google.com", "_blank");
  };
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="iTech Medics logo" className="h-12 w-auto" />

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="https://www.mytechmedics.com"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </a>
              <a href="/pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Quote
              </a>
              <a href="/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
                Price List
              </a>
              <Button onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                (478) 259-6371
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Apple Accessories &amp; More</h1>
            <p className="text-xl text-muted-foreground mb-8">
              CONVENIENTLY LOCATED ON EISENHOWER. 30 MINUTES OR LESS. NO APPOINTMENT NEEDED
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={handleCall}
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" onClick={handleDirections} className="border-2 text-lg px-8">
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 text-foreground">
            WE CARRY SCREEN PROTECTORS  CASES SPEAKERS CHARGERS 
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            WE CARRY SCREEN PROTECTORS  CASES SPEAKERS CHARGERS 
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard title="iPhone" image={iphoneImage} />
            <ServiceCard title="MacBook" image={macbookImage} />
            <ServiceCard title="iPad" image={ipadImage} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Visit Us Today</h2>
              <div className="space-y-4 mb-8">
                <div>
                  <h3 className="font-semibold text-lg mb-1">Address</h3>
                  <p className="text-muted-foreground">
                    3742 Bloomfield Village Drive
                    <br />
                    Macon, GA 31206
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Hours</h3>
                  <p className="text-muted-foreground">
                    Mon-Fri: 10am - 6pm
                    <br />
                    Sat: 10am - 5pm
                    <br />
                    Sun: Closed
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">(478) 259-6371</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleCall}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
                <Button size="lg" variant="outline" onClick={handleDirections} className="border-2">
                  <MapPin className="mr-2 h-5 w-5" />
                  Get Directions
                </Button>
              </div>
            </div>

            <div className="bg-muted rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/place/Tech+Medics+–+iPhone+Repair+Macon+GA/@32.8150232,-83.7041795,1865m/data=!3m2!1e3!4b1!4m6!3m5!1s0x88f3fbd55c63a311:0xf023c20233e02758!8m2!3d32.8150232!4d-83.7016046!16s%2Fg%2F11whl6t0x_?entry=ttu&g_ep=EgoyMDI1MTAwNy4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Store location map"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 MyTechMedics. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
export default Index;
