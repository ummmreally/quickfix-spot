import type { Metadata } from "next";
import ServiceRepairPage, { type ServicePageData } from "../../components/ServiceRepairPage";

export const metadata: Metadata = {
  "title": "Battery Replacement in Macon, GA | Tech Medics",
  "description": "Battery Replacement in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/battery-replacement/"
  },
  "openGraph": {
    "title": "Battery Replacement in Macon, GA | Tech Medics",
    "description": "Battery Replacement in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device.",
    "url": "https://techmedicsmacon.com/macon/battery-replacement/",
    "images": [
      {
        "url": "/images/battery-replacement-service-hero.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Battery Replacement for mobile devices"
      }
    ]
  }
};

const data: ServicePageData = {
  "name": "Battery Replacement",
  "headline": "Give your device a fresh charge.",
  "intro": "Battery draining too quickly or struggling to hold a charge? Tech Medics offers iPhone, iPad, and MacBook battery replacement in Macon, GA. Ask us about options for your device.",
  "sectionTitle": "Battery problems we can help with",
  "noteTitle": "Know when to replace your battery",
  "note": "Battery life varies with age, use, and device condition. We can assess the symptoms and discuss whether replacement is appropriate for your model.",
  "slug": "battery-replacement",
  "image": "/images/battery-replacement-service-hero.webp",
  "services": [
    {
      "title": "Fast battery drain",
      "desc": "A worn battery can make it difficult to get through the day without a charger."
    },
    {
      "title": "Unexpected shutdowns",
      "desc": "If your device powers off unexpectedly, we can investigate the battery and other possible causes."
    },
    {
      "title": "Battery health warnings",
      "desc": "A service warning can be a sign that your battery needs attention."
    },
    {
      "title": "Charging problems",
      "desc": "If a device will not charge reliably, the battery is one of several possible causes we can assess."
    },
    {
      "title": "Swollen battery",
      "desc": "A lifting screen or bulging case may indicate swelling. Stop using and charging the device and contact us."
    },
    {
      "title": "MacBook battery service",
      "desc": "Ask about replacement options for a MacBook battery that no longer holds a charge."
    }
  ],
  "faqs": [
    {
      "question": "How long does battery replacement take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can provide an estimate after discussing or inspecting your device."
    },
    {
      "question": "Do I need an appointment?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your repair."
    },
    {
      "question": "What should I do if my battery looks swollen?",
      "answer": "Stop using and charging the device. Do not press on or puncture it; contact us for advice on bringing it in safely."
    },
    {
      "question": "Will my data be erased?",
      "answer": "Battery replacement generally does not require erasing your data, but it is a good idea to back up your device before any repair when possible."
    }
  ]
};

export default function Page() {
  return <ServiceRepairPage data={data} />;
}
