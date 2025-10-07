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
  // iPhone 17 Series
  { model: "iPhone 17", oled: 350, battery: 120, camera: 180, chargingPort: 105, waterDamage: 225, backGlass: 135 },
  { model: "iPhone 17 Plus", oled: 380, battery: 130, camera: 190, chargingPort: 110, waterDamage: 240, backGlass: 145 },
  { model: "iPhone 17 Pro", oled: 420, battery: 140, camera: 200, chargingPort: 115, waterDamage: 260, backGlass: 155 },
  { model: "iPhone 17 Pro Max", oled: 450, battery: 150, camera: 210, chargingPort: 120, waterDamage: 280, backGlass: 165 },
  
  // iPhone 16 Series
  { model: "iPhone 16", oled: 320, battery: 112, camera: 168, chargingPort: 98, waterDamage: 210, backGlass: 126 },
  { model: "iPhone 16 Plus", oled: 350, battery: 120, camera: 175, chargingPort: 102, waterDamage: 224, backGlass: 133 },
  { model: "iPhone 16 Pro", oled: 380, battery: 128, camera: 182, chargingPort: 105, waterDamage: 238, backGlass: 140 },
  { model: "iPhone 16 Pro Max", oled: 410, battery: 135, camera: 189, chargingPort: 108, waterDamage: 252, backGlass: 147 },
  
  // iPhone 15 Series
  { model: "iPhone 15", oled: 280, battery: 104, camera: 156, chargingPort: 91, waterDamage: 195, backGlass: 117 },
  { model: "iPhone 15 Plus", oled: 310, battery: 112, camera: 163, chargingPort: 95, waterDamage: 208, backGlass: 124 },
  { model: "iPhone 15 Pro", oled: 340, battery: 120, camera: 170, chargingPort: 98, waterDamage: 221, backGlass: 131 },
  { model: "iPhone 15 Pro Max", oled: 370, battery: 128, camera: 177, chargingPort: 101, waterDamage: 234, backGlass: 138 },
  
  // iPhone 14 Series
  { model: "iPhone 14", lcd: 180, oled: 240, battery: 96, camera: 144, chargingPort: 84, waterDamage: 180, backGlass: 108 },
  { model: "iPhone 14 Plus", lcd: 200, oled: 260, battery: 104, camera: 150, chargingPort: 88, waterDamage: 192, backGlass: 115 },
  { model: "iPhone 14 Pro", oled: 280, battery: 112, camera: 156, chargingPort: 91, waterDamage: 204, backGlass: 122 },
  { model: "iPhone 14 Pro Max", oled: 300, battery: 120, camera: 162, chargingPort: 94, waterDamage: 216, backGlass: 129 },
  
  // iPhone 13 Series
  { model: "iPhone 13", lcd: 165, oled: 220, battery: 88, camera: 132, chargingPort: 77, waterDamage: 165, backGlass: 99 },
  { model: "iPhone 13 Mini", lcd: 155, oled: 210, battery: 84, camera: 128, chargingPort: 74, waterDamage: 158, backGlass: 95 },
  { model: "iPhone 13 Pro", oled: 240, battery: 96, camera: 138, chargingPort: 80, waterDamage: 177, backGlass: 106 },
  { model: "iPhone 13 Pro Max", oled: 260, battery: 104, camera: 144, chargingPort: 84, waterDamage: 189, backGlass: 113 },
  
  // iPhone 12 Series
  { model: "iPhone 12", lcd: 150, oled: 200, battery: 80, camera: 120, chargingPort: 70, waterDamage: 150, backGlass: 90 },
  { model: "iPhone 12 Mini", lcd: 140, oled: 190, battery: 76, camera: 116, chargingPort: 67, waterDamage: 143, backGlass: 86 },
  { model: "iPhone 12 Pro", lcd: 165, oled: 220, battery: 88, camera: 128, chargingPort: 77, waterDamage: 165, backGlass: 99 },
  { model: "iPhone 12 Pro Max", lcd: 180, oled: 240, battery: 96, camera: 136, chargingPort: 84, waterDamage: 180, backGlass: 108 },
  
  // iPhone 11 Series
  { model: "iPhone 11", lcd: 130, battery: 72, camera: 108, chargingPort: 63, waterDamage: 135, backGlass: 81 },
  { model: "iPhone 11 Pro", oled: 180, battery: 80, camera: 116, chargingPort: 70, waterDamage: 150, backGlass: 90 },
  { model: "iPhone 11 Pro Max", oled: 200, battery: 88, camera: 124, chargingPort: 77, waterDamage: 165, backGlass: 99 },
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

          <Card className="overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="sticky top-20 z-20">
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
          </Card>

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
