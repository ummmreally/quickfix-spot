import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const StudentDiscountBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-y border-primary/20 py-4 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
        <div className="flex items-center gap-3">
          <div className="bg-primary/20 p-3 rounded-full">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-lg font-bold text-foreground">
              Student Discount Available!
            </p>
            <p className="text-sm text-muted-foreground">
              10% off repairs for students with valid ID
            </p>
          </div>
        </div>
        <Button 
          asChild 
          size="sm"
          className="bg-primary hover:bg-primary/90 text-primary-foreground whitespace-nowrap"
        >
          <a 
            href="tel:(478)259-6371"
            data-track="phone-cta"
            data-location="student-discount-banner"
          >
            Call to Claim Discount
          </a>
        </Button>
      </div>
    </div>
  );
};

export default StudentDiscountBanner;
