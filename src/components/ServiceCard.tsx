import { Card } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  image: string;
  link: string;
}

const ServiceCard = ({ title, image, link }: ServiceCardProps) => {
  return (
    <a href={link} className="block">
      <Card className="overflow-hidden border-border bg-card hover:shadow-[var(--shadow-card)] transition-all duration-300 cursor-pointer">
        <div className="aspect-[4/3] overflow-hidden">
          <img 
            src={image} 
            alt={`${title} repair service`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-6 text-center">
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        </div>
      </Card>
    </a>
  );
};

export default ServiceCard;
