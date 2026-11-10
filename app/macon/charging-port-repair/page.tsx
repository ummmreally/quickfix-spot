import type { Metadata } from "next";
import ServiceRepairPage, { type ServicePageData } from "../../components/ServiceRepairPage";

export const metadata: Metadata = {
  "title": "Charging Port Repair in Macon, GA | Tech Medics",
  "description": "Charging Port Repair in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device and request a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/charging-port-repair/"
  },
  "openGraph": {
    "title": "Charging Port Repair in Macon, GA | Tech Medics",
    "description": "Charging Port Repair in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device and request a quote.",
    "url": "https://techmedicsmacon.com/macon/charging-port-repair/",
    "images": [
      {
        "url": "/images/charging-port-repair-service-hero.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Charging Port Repair for mobile devices"
      }
    ]
  }
};

const data: ServicePageData = {
  "name": "Charging Port Repair",
  "headline": "Get connected to a reliable charge.",
  "intro": "Cable loose, charging intermittently, or no response at all? Tech Medics offers charging port repair and diagnostics in Macon, GA, for iPhone, iPad, and MacBook devices.",
  "sectionTitle": "Charging problems we can investigate",
  "noteTitle": "A repair starts with the right diagnosis",
  "note": "A charging problem does not always mean the port needs replacing. We’ll inspect the issue and discuss the appropriate options for your device.",
  "slug": "charging-port-repair",
  "image": "/images/charging-port-repair-service-hero.webp",
  "services": [
    {
      "title": "Device will not charge",
      "desc": "A damaged port, cable, battery, or another fault may be responsible. We can help identify the issue."
    },
    {
      "title": "Loose connection",
      "desc": "A cable that slips out or needs to be held at an angle may indicate a port issue."
    },
    {
      "title": "Intermittent charging",
      "desc": "If charging starts and stops, bring in your device so we can inspect the connection."
    },
    {
      "title": "Slow charging",
      "desc": "Charging speed can be affected by the cable, power source, battery, or port."
    },
    {
      "title": "Dust and debris",
      "desc": "Lint can prevent a secure connection. We can inspect and clean the port when appropriate."
    },
    {
      "title": "Port damage",
      "desc": "Bent contacts, a damaged connector, or corrosion may require additional repair."
    }
  ],
  "faqs": [
    {
      "question": "How much does charging port repair cost in Macon?",
      "answer": "Pricing depends on the device model and issue. Call (478) 259-6371 to discuss your device and request a quote."
    },
    {
      "question": "How long does charging port repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can provide an estimate after discussing or inspecting your device."
    },
    {
      "question": "Do I need an appointment?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your repair."
    },
    {
      "question": "Can a charging port be cleaned instead of replaced?",
      "answer": "Sometimes debris prevents a good connection. We can inspect the port and discuss cleaning or repair based on its condition."
    },
    {
      "question": "What if my phone charges wirelessly but not by cable?",
      "answer": "The cable, charging port, or another issue may be responsible. Bring it in for an assessment."
    }
  ]
};

export default function Page() {
  return <ServiceRepairPage data={data} />;
}
