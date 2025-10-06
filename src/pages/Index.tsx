import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import heroImage from "@/assets/hero-devices.jpg";
import iphoneImage from "@/assets/iphone-repair.jpg";
import macbookImage from "@/assets/macbook-repair.jpg";
import ipadImage from "@/assets/ipad-repair.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  const handleCall = () => {
    window.location.href = "tel:+1234567890";
  };

  const handleDirections = () => {
    window.open("https://maps.google.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Logo Header */}
      <header className="fixed top-0 left-0 right-0 z-50 py-6 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="flex justify-center">
          <img 
            src={logo} 
            alt="iTech Medics logo"
            className="h-16 md:h-20 w-auto"
          />
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Professional device repair services"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Expert Device Repair
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
            Fast. Professional. Trusted.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
            <Button 
              size="lg"
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-premium)] text-lg px-8 py-6 rounded-full"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDirections}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          We Fix It All
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard 
            title="iPhone Repair"
            image={iphoneImage}
          />
          <ServiceCard 
            title="MacBook Repair"
            image={macbookImage}
          />
          <ServiceCard 
            title="iPad Repair"
            image={ipadImage}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
            Ready to Fix Your Device?
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Expert repairs, quick turnaround
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={handleCall}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[var(--shadow-premium)] text-lg px-8 py-6 rounded-full"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={handleDirections}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 rounded-full"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Get Directions
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Device Repair Experts. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
