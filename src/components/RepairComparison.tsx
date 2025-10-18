import { Check, X } from "lucide-react";

interface ComparisonOption {
  feature: string;
  diy: boolean;
  competitor: boolean;
  us: boolean;
}

interface RepairComparisonProps {
  deviceType: string;
}

const RepairComparison = ({ deviceType }: RepairComparisonProps) => {
  const comparisonData: ComparisonOption[] = [
    { feature: "Warranty Included", diy: false, competitor: true, us: true },
    { feature: "Same-Day Service", diy: false, competitor: false, us: true },
    { feature: "Quality Parts", diy: false, competitor: true, us: true },
    { feature: "Expert Technicians", diy: false, competitor: true, us: true },
    { feature: "No Appointment Needed", diy: true, competitor: false, us: true },
    { feature: "30-Minute Repairs", diy: false, competitor: false, us: true },
    { feature: "Local Support", diy: false, competitor: false, us: true },
    { feature: "Price Match Guarantee", diy: false, competitor: false, us: true },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          Why Choose Us for {deviceType} Repair in Macon?
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Compare your repair options and see the Tech Medics difference
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-card rounded-lg overflow-hidden">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left p-4 font-bold text-foreground">Feature</th>
                <th className="text-center p-4 font-bold text-muted-foreground">DIY Repair</th>
                <th className="text-center p-4 font-bold text-muted-foreground">Other Shops</th>
                <th className="text-center p-4 font-bold text-primary bg-primary/5">Tech Medics</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-border last:border-0">
                  <td className="p-4 font-medium text-foreground">{row.feature}</td>
                  <td className="p-4 text-center">
                    {row.diy ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center">
                    {row.competitor ? (
                      <Check className="h-5 w-5 text-green-600 mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                  <td className="p-4 text-center bg-primary/5">
                    {row.us ? (
                      <Check className="h-5 w-5 text-primary mx-auto" />
                    ) : (
                      <X className="h-5 w-5 text-muted-foreground mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RepairComparison;
