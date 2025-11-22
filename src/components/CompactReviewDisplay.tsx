import { Star, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CompactReviewDisplayProps {
  ratingValue?: string;
  reviewCount?: string;
}

const CompactReviewDisplay = ({ 
  ratingValue = "4.8", 
  reviewCount = "127" 
}: CompactReviewDisplayProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-6 px-4">
      <div className="flex items-center gap-2">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="h-5 w-5 fill-primary text-primary" 
            />
          ))}
        </div>
        <span className="text-lg font-bold text-foreground">
          {ratingValue} / 5.0
        </span>
      </div>
      <div className="text-center sm:text-left">
        <p className="text-sm text-muted-foreground">
          Based on <span className="font-semibold text-foreground">{reviewCount}+ verified reviews</span>
        </p>
      </div>
      <Button 
        asChild 
        variant="outline" 
        size="sm"
        className="border-primary/30 hover:bg-primary/5"
      >
        <a 
          href="https://www.google.com/maps/place/Tech+Medics/@32.8407,-83.6324" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          Read Reviews
          <ExternalLink className="h-3 w-3" />
        </a>
      </Button>
    </div>
  );
};

export default CompactReviewDisplay;
