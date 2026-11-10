import type { Metadata } from "next";
import QuoteMachine from "./QuoteMachine";

export const metadata: Metadata = {
  title: "Repair Pricing & Quote | iPhone, iPad, MacBook & Console | Tech Medics Macon",
  description: "Get an instant repair quote for your iPhone, iPad, MacBook, or Game Console. Select your model to see exact prices. Walk-ins welcome at 3742 Eisenhower Pkwy, Macon GA. Call (478) 259-6371.",
  keywords: [
    "phone repair prices Macon GA", "iPhone repair cost Macon", "iPad repair price Macon",
    "MacBook repair cost Macon GA", "console repair price Macon", "repair quote Macon",
    "how much does iPhone screen repair cost Macon", "phone repair pricing Macon Georgia",
  ],
  alternates: { canonical: "https://techmedicsmacon.com/macon/pricing-chart/" },
  openGraph: {
    title: "Repair Pricing & Instant Quote | Tech Medics Macon GA",
    description: "Select your device model to get an instant repair price quote. iPhone, iPad, MacBook, Game Consoles & more. Walk-ins welcome.",
    url: "https://techmedicsmacon.com/macon/pricing-chart/",
  },
};

export default function PricingChartPage() {
  return <QuoteMachine />;
}
