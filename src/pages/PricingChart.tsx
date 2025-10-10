import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
interface PriceData {
  model: string;
  lcd?: number;
  premium?: number;
  apple?: number;
  backGlass?: number;
  battery?: number;
}
const pricingData: PriceData[] = [
// iPhone 16 Series
{
  model: "iPhone 16",
  lcd: 199.99,
  premium: 279.99,
  apple: 399.99,
  backGlass: 229.99,
  battery: 129.99
}, {
  model: "iPhone 16 Plus",
  lcd: 209.99,
  premium: 299.99,
  apple: 469.99,
  backGlass: 239.99,
  battery: 129.99
}, {
  model: "iPhone 16 Pro",
  lcd: 259.99,
  premium: 389.99,
  apple: 479.99,
  backGlass: 249.99,
  battery: 129.99
}, {
  model: "iPhone 16 Pro Max",
  lcd: 299.99,
  premium: 399.99,
  apple: 499.99,
  backGlass: 259.99,
  battery: 129.99
},
// iPhone 15 Series
{
  model: "iPhone 15",
  lcd: 159.99,
  premium: 189.99,
  apple: 389.99,
  backGlass: 209.99,
  battery: 129.99
}, {
  model: "iPhone 15 Plus",
  lcd: 179.99,
  premium: 239.99,
  apple: 439.99,
  backGlass: 229.99,
  battery: 129.99
}, {
  model: "iPhone 15 Pro",
  lcd: 199.99,
  premium: 249.99,
  apple: 459.99,
  backGlass: 239.99,
  battery: 129.99
}, {
  model: "iPhone 15 Pro Max",
  lcd: 199.99,
  premium: 249.99,
  apple: 489.99,
  backGlass: 259.99,
  battery: 129.99
},
// iPhone 14 Series
{
  model: "iPhone 14",
  lcd: 129.99,
  premium: 199.99,
  apple: 399.99,
  backGlass: 219.99,
  battery: 129.99
}, {
  model: "iPhone 14 Plus",
  lcd: 139.99,
  premium: 199.99,
  apple: 439.99,
  backGlass: 229.99,
  battery: 129.99
}, {
  model: "iPhone 14 Pro",
  lcd: 169.99,
  premium: 229.99,
  apple: 449.99,
  backGlass: 239.99,
  battery: 129.99
}, {
  model: "iPhone 14 Pro Max",
  lcd: 179.99,
  premium: 239.99,
  apple: 459.99,
  backGlass: 249.99,
  battery: 129.99
},
// iPhone 13 Series
{
  model: "iPhone 13 Mini",
  lcd: 139.99,
  premium: 159.99,
  apple: 399.99,
  backGlass: 239.99,
  battery: 129.99
}, {
  model: "iPhone 13 Pro",
  lcd: 149.99,
  premium: 169.99,
  apple: 429.99,
  backGlass: 249.99,
  battery: 129.99
}, {
  model: "iPhone 13 Pro Max",
  lcd: 159.99,
  premium: 179.99,
  apple: 459.99,
  backGlass: 229.99,
  battery: 129.99
},
// iPhone 12 Series
{
  model: "iPhone 12",
  lcd: 89.99,
  premium: 139.99,
  apple: 359.99,
  backGlass: 209.99,
  battery: 79.99
}, {
  model: "iPhone 12 Pro",
  lcd: 99.99,
  premium: 139.99,
  apple: 399.99,
  backGlass: 239.99,
  battery: 79.99
}, {
  model: "iPhone 12 Pro Max",
  lcd: 139.99,
  premium: 159.99,
  apple: 439.99,
  backGlass: 259.99,
  battery: 79.99
},
// iPhone 11 Series
{
  model: "iPhone 11",
  lcd: 79.99,
  battery: 79.99
}, {
  model: "iPhone 11 Pro",
  lcd: 89.99,
  premium: 159.99,
  battery: 79.99
}, {
  model: "iPhone 11 Pro Max",
  lcd: 129.99,
  premium: 139.99,
  battery: 79.99
},
// iPhone X Series
{
  model: "iPhone X",
  lcd: 89.99,
  battery: 69.99
}, {
  model: "iPhone XS",
  lcd: 99.99,
  battery: 69.99
}, {
  model: "iPhone XS Max",
  lcd: 119.99,
  battery: 69.99
}, {
  model: "iPhone XR",
  lcd: 79.99,
  battery: 69.99
},
// iPhone 8 & SE
{
  model: "iPhone SE / SE2",
  lcd: 79.99,
  battery: 69.99
}, {
  model: "iPhone 8",
  lcd: 79.99,
  battery: 69.99
}];
const PricingChart = () => {
  const navigate = useNavigate();
  return <div className="min-h-screen bg-background">
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
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-bold text-foreground min-w-[160px] sticky left-0 bg-muted/50 z-10">
                      Model
                    </TableHead>
                    <TableHead className="font-bold text-foreground min-w-[120px] text-center">
                      LCD Screen
                    </TableHead>
                    <TableHead className="font-bold text-foreground min-w-[140px] text-center">Premium OLED Screen</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[130px] text-center">Apple Original Screen</TableHead>
                    <TableHead className="font-bold text-foreground min-w-[120px] text-center">
                      Back Glass
                    </TableHead>
                    <TableHead className="font-bold text-foreground min-w-[100px] text-center">
                      Battery
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pricingData.map((item, index) => <TableRow key={item.model} className={index % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                      <TableCell className="font-semibold sticky left-0 bg-inherit z-10">
                        {item.model}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.lcd ? `$${item.lcd}` : "—"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.premium ? `$${item.premium}` : "—"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.apple ? `$${item.apple}` : "—"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.backGlass ? `$${item.backGlass}` : "—"}
                      </TableCell>
                      <TableCell className="text-center">
                        {item.battery ? `$${item.battery}` : "—"}
                      </TableCell>
                    </TableRow>)}
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
    </div>;
};
export default PricingChart;