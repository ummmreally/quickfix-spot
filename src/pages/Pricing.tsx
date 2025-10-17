import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Phone, Menu, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logo from "@/assets/logo.png";

type Step = "series" | "model" | "issue" | "price";

interface PricingData {
  series: string;
  model: string;
  issue: string;
  price: number;
}

const seriesData = {
  "iPhone 16 Series": ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max"],
  "iPhone 15 Series": ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
  "iPhone 14 Series": ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"],
  "iPhone 13 Series": ["iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max"],
  "iPhone 12 Series": ["iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max"],
  "iPhone 11 Series": ["iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"],
  "iPhone X Series": ["iPhone X", "iPhone XS", "iPhone XS Max", "iPhone XR"],
  "iPhone 8 & SE": ["iPhone 8", "iPhone SE / SE2"],
};

const issues = [
  { name: "LCD Screen", basePrice: 79.99 },
  { name: "Premium OLED Screen", basePrice: 119.99 },
  { name: "Apple Original Screen", basePrice: 359.99 },
  { name: "Back Glass", basePrice: 149.99 },
  { name: "Battery", basePrice: 69.99 },
];

const Pricing = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("series");
  const [selection, setSelection] = useState<Partial<PricingData>>({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleCall = () => {
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({
      event: 'phone_call',
      event_category: 'engagement',
      event_label: 'Phone Call Click',
      value: '478-259-6371'
    });
    window.location.href = "tel:478-259-6371";
  };

  const handleSeriesSelect = (series: string) => {
    setSelection({ series });
    setTimeout(() => setStep("model"), 300);
  };

  const handleModelSelect = (model: string) => {
    setSelection((prev) => ({ ...prev, model }));
    setTimeout(() => setStep("issue"), 300);
  };

  const handleIssueSelect = (issue: string, basePrice: number) => {
    // Map the actual pricing based on series and model
    const pricingMap: Record<string, any> = {
      "iPhone 16": { lcd: 199.99, premium: 279.99, apple: 399.99, backGlass: 229.99, battery: 129.99 },
      "iPhone 16 Plus": { lcd: 209.99, premium: 299.99, apple: 469.99, backGlass: 239.99, battery: 129.99 },
      "iPhone 16 Pro": { lcd: 259.99, premium: 389.99, apple: 479.99, backGlass: 249.99, battery: 129.99 },
      "iPhone 16 Pro Max": { lcd: 299.99, premium: 399.99, apple: 499.99, backGlass: 259.99, battery: 129.99 },
      "iPhone 15": { lcd: 159.99, premium: 189.99, apple: 389.99, backGlass: 209.99, battery: 129.99 },
      "iPhone 15 Plus": { lcd: 179.99, premium: 239.99, apple: 439.99, backGlass: 229.99, battery: 129.99 },
      "iPhone 15 Pro": { lcd: 199.99, premium: 249.99, apple: 459.99, backGlass: 239.99, battery: 129.99 },
      "iPhone 15 Pro Max": { lcd: 199.99, premium: 249.99, apple: 489.99, backGlass: 259.99, battery: 129.99 },
      "iPhone 14": { lcd: 129.99, premium: 199.99, apple: 399.99, backGlass: 219.99, battery: 129.99 },
      "iPhone 14 Plus": { lcd: 139.99, premium: 199.99, apple: 439.99, backGlass: 229.99, battery: 129.99 },
      "iPhone 14 Pro": { lcd: 169.99, premium: 229.99, apple: 449.99, backGlass: 239.99, battery: 129.99 },
      "iPhone 14 Pro Max": { lcd: 179.99, premium: 239.99, apple: 459.99, backGlass: 249.99, battery: 129.99 },
      "iPhone 13": { lcd: 139.99, premium: 159.99, apple: 399.99, backGlass: 229.99, battery: 129.99 },
      "iPhone 13 Mini": { lcd: 139.99, premium: 159.99, apple: 399.99, backGlass: 239.99, battery: 129.99 },
      "iPhone 13 Pro": { lcd: 149.99, premium: 169.99, apple: 429.99, backGlass: 249.99, battery: 129.99 },
      "iPhone 13 Pro Max": { lcd: 159.99, premium: 179.99, apple: 459.99, backGlass: 229.99, battery: 129.99 },
      "iPhone 12": { lcd: 89.99, premium: 139.99, apple: 359.99, backGlass: 209.99, battery: 79.99 },
      "iPhone 12 Mini": { lcd: 89.99, premium: 119.99, apple: 359.99, backGlass: 189.99, battery: 79.99 },
      "iPhone 12 Pro": { lcd: 99.99, premium: 139.99, apple: 399.99, backGlass: 239.99, battery: 79.99 },
      "iPhone 12 Pro Max": { lcd: 139.99, premium: 159.99, apple: 439.99, backGlass: 259.99, battery: 79.99 },
      "iPhone 11": { lcd: 79.99, backGlass: 149.99, battery: 79.99 },
      "iPhone 11 Pro": { lcd: 89.99, premium: 159.99, backGlass: 149.99, battery: 79.99 },
      "iPhone 11 Pro Max": { lcd: 129.99, premium: 139.99, backGlass: 159.99, battery: 79.99 },
      "iPhone X": { lcd: 89.99, premium: 119.99, backGlass: 149.99, battery: 69.99 },
      "iPhone XS": { lcd: 99.99, premium: 119.99, backGlass: 149.99, battery: 69.99 },
      "iPhone XS Max": { lcd: 119.99, premium: 129.99, backGlass: 159.99, battery: 69.99 },
      "iPhone XR": { lcd: 79.99, backGlass: 149.99, battery: 69.99 },
      "iPhone SE / SE2": { lcd: 79.99, backGlass: 149.99, battery: 69.99 },
      "iPhone 8": { lcd: 79.99, backGlass: 149.99, battery: 69.99 },
    };

    const modelPricing = pricingMap[selection.model || ""];
    let finalPrice = basePrice;

    if (modelPricing) {
      if (issue === "LCD Screen" && modelPricing.lcd) {
        finalPrice = modelPricing.lcd;
      } else if (issue === "Premium OLED Screen" && modelPricing.premium) {
        finalPrice = modelPricing.premium;
      } else if (issue === "Apple Original Screen" && modelPricing.apple) {
        finalPrice = modelPricing.apple;
      } else if (issue === "Back Glass" && modelPricing.backGlass) {
        finalPrice = modelPricing.backGlass;
      } else if (issue === "Battery" && modelPricing.battery) {
        finalPrice = modelPricing.battery;
      }
    }
    
    setSelection((prev) => ({ ...prev, issue, price: finalPrice }));
    setTimeout(() => setStep("price"), 300);
  };

  const handleReset = () => {
    setSelection({});
    setStep("series");
  };

  const handleBack = () => {
    if (step === "model") {
      setSelection((prev) => ({ series: prev.series }));
      setStep("series");
    } else if (step === "issue") {
      setSelection((prev) => ({ series: prev.series, model: prev.model }));
      setStep("model");
    } else if (step === "price") {
      setSelection((prev) => ({ series: prev.series, model: prev.model }));
      setStep("issue");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <img src={logo} alt="iTech Medics logo" className="h-12 w-auto" />

            <nav className="hidden md:flex items-center gap-8">
              <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </a>
              <a href="/macon/pricing" className="text-foreground hover:text-primary transition-colors font-medium">
                Quote
              </a>
              <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium">
                Price List
              </a>
              <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium">
                Business
              </a>
              <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium">
                Education
              </a>
              <a href="/macon/about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <Button onClick={handleCall} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Phone className="mr-2 h-4 w-4" />
                (478) 259-6371
              </Button>
            </nav>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a href="/macon" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Home
                  </a>
                  <a href="/macon/pricing" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Quote
                  </a>
                  <a href="/macon/pricing-chart" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Price List
                  </a>
                  <a href="/macon/business" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Business
                  </a>
                  <a href="/macon/education" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    Education
                  </a>
                  <a href="/macon/about" className="text-foreground hover:text-primary transition-colors font-medium text-lg" onClick={() => setMobileMenuOpen(false)}>
                    About
                  </a>
                  <Button onClick={() => { handleCall(); setMobileMenuOpen(false); }} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
                    <Phone className="mr-2 h-4 w-4" />
                    (478) 259-6371
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Get Your iPhone Repair Quote
            </h1>
            <p className="text-muted-foreground text-lg">
              Select your device and issue to see instant pricing
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 mb-12">
            {["series", "model", "issue", "price"].map((s, idx) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all duration-500 ${
                  ["series", "model", "issue", "price"].indexOf(step) >= idx
                    ? "bg-primary w-16"
                    : "bg-muted w-8"
                }`}
              />
            ))}
          </div>

          {/* Step 1: Series Selection */}
          {step === "series" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Select iPhone Series
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {Object.keys(seriesData).map((series) => (
                  <Card
                    key={series}
                    className="p-6 cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => handleSeriesSelect(series)}
                  >
                    <h3 className="text-lg font-semibold">{series}</h3>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Model Selection */}
          {step === "model" && selection.series && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Select Model</h2>
                <Button variant="ghost" onClick={handleBack} size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </div>
              <div className="mb-4 text-sm text-muted-foreground flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                {selection.series}
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {seriesData[selection.series as keyof typeof seriesData].map((model) => (
                  <Card
                    key={model}
                    className="p-6 cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => handleModelSelect(model)}
                  >
                    <h3 className="text-lg font-semibold">{model}</h3>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Issue Selection */}
          {step === "issue" && selection.model && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Select Issue</h2>
                <Button variant="ghost" onClick={handleBack} size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </div>
              <div className="mb-4 text-sm text-muted-foreground space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {selection.series}
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  {selection.model}
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {issues.map((issue) => (
                  <Card
                    key={issue.name}
                    className="p-6 cursor-pointer hover:shadow-lg hover:border-primary transition-all duration-300 hover:scale-[1.02]"
                    onClick={() => handleIssueSelect(issue.name, issue.basePrice)}
                  >
                    <h3 className="text-lg font-semibold mb-2">{issue.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Starting at ${issue.basePrice}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Price Display */}
          {step === "price" && selection.price && (
            <div className="animate-in fade-in zoom-in-50 duration-700">
              <Card className="p-12 text-center shadow-xl border-2 border-primary">
                <div className="mb-6">
                  <div className="text-sm text-muted-foreground space-y-2 mb-8">
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {selection.series}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {selection.model}
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      {selection.issue}
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-4">Your Repair Quote</h2>
                <div className="text-6xl font-bold text-primary mb-8 animate-in zoom-in duration-1000">
                  ${selection.price}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" onClick={() => window.location.href = "tel:478-259-6371"}>
                    Call to Book: (478) 259-6371
                  </Button>
                  <Button size="lg" variant="outline" onClick={handleReset}>
                    Get Another Quote
                  </Button>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Pricing;
