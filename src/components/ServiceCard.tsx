import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  image: string;
}

const ServiceCard = ({ title, image }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden border-border bg-gradient-to-b from-card to-secondary/30 hover:shadow-[var(--shadow-card)] transition-all duration-300 hover:scale-[1.02]">
      <div className="aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={`${title} repair service`}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
      </div>
    </Card>
  );
};

export default ServiceCard;
