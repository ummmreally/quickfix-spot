import { useState, useEffect } from "react";
import { Phone, MapPin, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const DiscountPanel = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    // Slide in after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
      }`}
    >
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="bg-primary text-primary-foreground rounded-3xl shadow-2xl px-6 py-4 max-w-xs hover:scale-105 transition-transform cursor-pointer relative group"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse" />
          <div className="flex items-start gap-3">
            <span className="text-2xl">💬</span>
            <div className="text-left">
              <p className="font-semibold text-sm leading-tight">
                Hey Macon! Get $10 off your next iPhone repair — click to unlock.
              </p>
            </div>
          </div>
        </button>
      ) : (
        <div className="bg-card border-2 border-primary rounded-2xl shadow-2xl p-6 max-w-sm relative animate-scale-in">
          <button
            onClick={() => setIsExpanded(false)}
            className="absolute top-3 right-3 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
          
          <div className="mb-4">
            <div className="text-3xl mb-2">🎉</div>
            <h3 className="font-bold text-xl mb-2 text-foreground">$10 Off iPhone Repair!</h3>
            <p className="text-muted-foreground text-sm">
              Special offer for Macon customers. Call now or visit us today!
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              asChild
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a href="tel:(478)259-6371">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="w-full border-2"
            >
              <a
                href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiscountPanel;
