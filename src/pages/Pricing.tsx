import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

type Step = "series" | "model" | "issue" | "price";

interface PricingData {
  series: string;
  model: string;
  issue: string;
  price: number;
}

const seriesData = {
  "iPhone 17 Series": ["iPhone 17", "iPhone 17 Plus", "iPhone 17 Pro", "iPhone 17 Pro Max"],
  "iPhone 16 Series": ["iPhone 16", "iPhone 16 Plus", "iPhone 16 Pro", "iPhone 16 Pro Max"],
  "iPhone 15 Series": ["iPhone 15", "iPhone 15 Plus", "iPhone 15 Pro", "iPhone 15 Pro Max"],
  "iPhone 14 Series": ["iPhone 14", "iPhone 14 Plus", "iPhone 14 Pro", "iPhone 14 Pro Max"],
  "iPhone 13 Series": ["iPhone 13", "iPhone 13 Mini", "iPhone 13 Pro", "iPhone 13 Pro Max"],
  "iPhone 12 Series": ["iPhone 12", "iPhone 12 Mini", "iPhone 12 Pro", "iPhone 12 Pro Max"],
  "iPhone 11 Series": ["iPhone 11", "iPhone 11 Pro", "iPhone 11 Pro Max"],
};

const issues = [
  { name: "Screen Replacement", basePrice: 120 },
  { name: "Battery Replacement", basePrice: 80 },
  { name: "Camera Repair", basePrice: 100 },
  { name: "Charging Port Repair", basePrice: 70 },
  { name: "Water Damage", basePrice: 150 },
  { name: "Back Glass Replacement", basePrice: 90 },
];

const Pricing = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>("series");
  const [selection, setSelection] = useState<Partial<PricingData>>({});

  const handleSeriesSelect = (series: string) => {
    setSelection({ series });
    setTimeout(() => setStep("model"), 300);
  };

  const handleModelSelect = (model: string) => {
    setSelection((prev) => ({ ...prev, model }));
    setTimeout(() => setStep("issue"), 300);
  };

  const handleIssueSelect = (issue: string, basePrice: number) => {
    const priceMultiplier = selection.series?.includes("17") ? 1.5 : 
                           selection.series?.includes("16") ? 1.4 : 
                           selection.series?.includes("15") ? 1.3 : 
                           selection.series?.includes("14") ? 1.2 : 
                           selection.series?.includes("13") ? 1.1 : 1;
    
    const finalPrice = Math.round(basePrice * priceMultiplier);
    
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
            <Button variant="ghost" onClick={() => navigate("/")} className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
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
