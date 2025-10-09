import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

interface PriceData {
  model: string;
  lcd?: number;
  oled?: number;
  battery: number;
  camera: number;
  chargingPort: number;
  waterDamage: number;
  backGlass: number;
}

const pricingData: PriceData[] = [
  // iPhone 17 Series (iPhone 16 + $20)
  { model: "iPhone 17", lcd: 219.99, oled: 299.99, battery: 89, camera: 110, chargingPort: 79, waterDamage: 180, backGlass: 249.99 },
  { model: "iPhone 17 Plus", lcd: 229.99, oled: 319.99, battery: 95, camera: 115, chargingPort: 85, waterDamage: 190, backGlass: 259.99 },
  { model: "iPhone 17 Pro", lcd: 279.99, oled: 409.99, battery: 105, camera: 125, chargingPort: 95, waterDamage: 210, backGlass: 269.99 },
  { model: "iPhone 17 Pro Max", lcd: 319.99, oled: 419.99, battery: 115, camera: 135, chargingPort: 105, waterDamage: 230, backGlass: 279.99 },
  
  // iPhone 16 Series
  { model: "iPhone 16", lcd: 199.99, oled: 279.99, battery: 69, camera: 90, chargingPort: 59, waterDamage: 160, backGlass: 229.99 },
  { model: "iPhone 16 Plus", lcd: 209.99, oled: 299.99, battery: 75, camera: 95, chargingPort: 65, waterDamage: 170, backGlass: 239.99 },
  { model: "iPhone 16 Pro", lcd: 259.99, oled: 389.99, battery: 85, camera: 105, chargingPort: 75, waterDamage: 190, backGlass: 249.99 },
  { model: "iPhone 16 Pro Max", lcd: 299.99, oled: 399.99, battery: 95, camera: 115, chargingPort: 85, waterDamage: 210, backGlass: 259.99 },
  
  // iPhone 15 Series
  { model: "iPhone 15", lcd: 159.99, oled: 189.99, battery: 59, camera: 80, chargingPort: 49, waterDamage: 140, backGlass: 209.99 },
  { model: "iPhone 15 Plus", lcd: 179.99, oled: 239.99, battery: 65, camera: 85, chargingPort: 55, waterDamage: 150, backGlass: 229.99 },
  { model: "iPhone 15 Pro", lcd: 199.99, oled: 249.99, battery: 75, camera: 95, chargingPort: 65, waterDamage: 170, backGlass: 239.99 },
  { model: "iPhone 15 Pro Max", lcd: 199.99, oled: 249.99, battery: 85, camera: 105, chargingPort: 75, waterDamage: 190, backGlass: 259.99 },
  
  // iPhone 14 Series
  { model: "iPhone 14", lcd: 129.99, oled: 199.99, battery: 55, camera: 75, chargingPort: 45, waterDamage: 130, backGlass: 219.99 },
  { model: "iPhone 14 Plus", lcd: 139.99, oled: 199.99, battery: 59, camera: 79, chargingPort: 49, waterDamage: 135, backGlass: 229.99 },
  { model: "iPhone 14 Pro", lcd: 169.99, oled: 229.99, battery: 65, camera: 85, chargingPort: 55, waterDamage: 145, backGlass: 239.99 },
  { model: "iPhone 14 Pro Max", lcd: 179.99, oled: 239.99, battery: 69, camera: 89, chargingPort: 59, waterDamage: 150, backGlass: 249.99 },
  
  // iPhone 13 Series
  { model: "iPhone 13", lcd: 139.99, oled: 159.99, battery: 49, camera: 69, chargingPort: 39, waterDamage: 120, backGlass: 239.99 },
  { model: "iPhone 13 Mini", lcd: 139.99, oled: 159.99, battery: 45, camera: 65, chargingPort: 35, waterDamage: 115, backGlass: 239.99 },
  { model: "iPhone 13 Pro", lcd: 149.99, oled: 169.99, battery: 55, camera: 75, chargingPort: 45, waterDamage: 130, backGlass: 249.99 },
  { model: "iPhone 13 Pro Max", lcd: 159.99, oled: 179.99, battery: 59, camera: 79, chargingPort: 49, waterDamage: 135, backGlass: 229.99 },
  
  // iPhone 12 Series
  { model: "iPhone 12", lcd: 89.99, oled: 139.99, battery: 45, camera: 65, chargingPort: 35, waterDamage: 110, backGlass: 209.99 },
  { model: "iPhone 12 Mini", lcd: 89.99, oled: 139.99, battery: 40, camera: 60, chargingPort: 30, waterDamage: 105, backGlass: 209.99 },
  { model: "iPhone 12 Pro", lcd: 99.99, oled: 139.99, battery: 49, camera: 69, chargingPort: 39, waterDamage: 115, backGlass: 239.99 },
  { model: "iPhone 12 Pro Max", lcd: 139.99, oled: 159.99, battery: 55, camera: 75, chargingPort: 45, waterDamage: 125, backGlass: 259.99 },
  
  // iPhone 11 Series
  { model: "iPhone 11", lcd: 79.99, battery: 39, camera: 59, chargingPort: 29, waterDamage: 100, backGlass: 149.99 },
  { model: "iPhone 11 Pro", lcd: 89.99, oled: 159.99, battery: 45, camera: 65, chargingPort: 35, waterDamage: 110, backGlass: 169.99 },
  { model: "iPhone 11 Pro Max", lcd: 129.99, oled: 139.99, battery: 49, camera: 69, chargingPort: 39, waterDamage: 120, backGlass: 189.99 },
];

const PricingChart = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </div>
        </div>
      </header>

      {/* Pricing Chart Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Complete Pricing Guide
            </h1>
            <p className="text-muted-foreground text-lg mb-4">
              All prices include parts and labor
            </p>
            <p className="text-sm text-muted-foreground">
              Call us at <a href="tel:478-259-6371" className="text-primary hover:underline font-semibold">(478) 259-6371</a> for any questions
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="sticky top-[80px] z-30 bg-background">
                <TableRow className="bg-muted/50">
                  <TableHead className="font-bold text-foreground min-w-[160px] sticky left-0 bg-muted/50 z-10">
                    Model
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[100px] text-center bg-muted/50">
                    LCD Screen
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[100px] text-center bg-muted/50">
                    OLED Screen
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[100px] text-center bg-muted/50">
                    Battery
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[100px] text-center bg-muted/50">
                    Camera
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[120px] text-center bg-muted/50">
                    Charging Port
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[120px] text-center bg-muted/50">
                    Water Damage
                  </TableHead>
                  <TableHead className="font-bold text-foreground min-w-[110px] text-center bg-muted/50">
                    Back Glass
                  </TableHead>
                </TableRow>
              </TableHeader>
                <TableBody>
                  {pricingData.map((item, index) => (
                    <TableRow 
                      key={item.model}
                      className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}
                    >
                      <TableCell className="font-semibold sticky left-0 bg-inherit z-10">
                        {item.model}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.lcd ? `$${item.lcd}` : "—"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.oled ? `$${item.oled}` : "—"}
                      </TableCell>
                      <TableCell className="text-center">${item.battery}</TableCell>
                      <TableCell className="text-center">${item.camera}</TableCell>
                      <TableCell className="text-center">${item.chargingPort}</TableCell>
                      <TableCell className="text-center">${item.waterDamage}</TableCell>
                      <TableCell className="text-center">${item.backGlass}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

          <div className="mt-12 text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => window.location.href = "tel:478-259-6371"}>
                Call Now: (478) 259-6371
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate("/pricing")}>
                Get Interactive Quote
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              * Prices may vary based on device condition and parts availability
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingChart;
