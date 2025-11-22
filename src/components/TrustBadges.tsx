import { Shield, Award, CheckCircle2, Cpu } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="py-8 px-4 bg-secondary/30 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="bg-background border-2 border-primary/20 rounded-full p-3">
              <CheckCircle2 className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">High-Quality Parts</p>
            <p className="text-xs text-muted-foreground">OEM & Premium Options</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-background border-2 border-primary/20 rounded-full p-3">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Certified Technicians</p>
            <p className="text-xs text-muted-foreground">Free Counter Diagnostics</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-background border-2 border-primary/20 rounded-full p-3">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">30 Day Warranty</p>
            <p className="text-xs text-muted-foreground">On All Repairs</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <div className="bg-background border-2 border-primary/20 rounded-full p-3">
              <Cpu className="h-6 w-6 text-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">Advanced Equipment</p>
            <p className="text-xs text-muted-foreground">Latest Repair Technology</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
