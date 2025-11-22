import { Clock } from "lucide-react";

interface HoursDisplayProps {
  compact?: boolean;
}

const HoursDisplay = ({ compact = false }: HoursDisplayProps) => {
  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <Clock className="h-4 w-4 text-primary" />
        <span className="text-muted-foreground">
          Mon-Fri: 10AM-6PM | Sat: 10AM-5PM
        </span>
      </div>
    );
  }

  return (
    <div>
      <h3 className="font-semibold text-lg mb-1 flex items-center gap-2">
        <Clock className="h-5 w-5 text-primary" />
        Hours
      </h3>
      <p className="text-muted-foreground ml-7">
        Monday - Friday: 10:00 AM - 6:00 PM
        <br />
        Saturday: 10:00 AM - 5:00 PM
        <br />
        Sunday: Closed
      </p>
    </div>
  );
};

export default HoursDisplay;
