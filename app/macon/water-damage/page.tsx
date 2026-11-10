import type { Metadata } from "next";
import ServiceRepairPage, { type ServicePageData } from "../../components/ServiceRepairPage";

export const metadata: Metadata = {
  "title": "Water Damage Repair in Macon, GA | Tech Medics",
  "description": "Water Damage Repair in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device and request a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/water-damage/"
  },
  "openGraph": {
    "title": "Water Damage Repair in Macon, GA | Tech Medics",
    "description": "Water Damage Repair in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device and request a quote.",
    "url": "https://techmedicsmacon.com/macon/water-damage/",
    "images": [
      {
        "url": "/images/water-damage-service-hero.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Water Damage Repair for mobile devices"
      }
    ]
  }
};

const data: ServicePageData = {
  "name": "Water Damage Repair",
  "headline": "Liquid damage? Take the next step.",
  "intro": "Spill or splash affecting your iPhone, iPad, or MacBook? Tech Medics offers liquid damage assessment and repair options in Macon, GA. Contact us as soon as possible.",
  "sectionTitle": "Help for liquid-exposed devices",
  "noteTitle": "What to do after a spill",
  "note": "Disconnect the device from power and turn it off if you can do so safely. Do not charge it or try to turn it back on. Avoid rice, heat, and inserting objects into ports. Contact us promptly for an assessment.",
  "slug": "water-damage",
  "image": "/images/water-damage-service-hero.webp",
  "services": [
    {
      "title": "Liquid damage assessment",
      "desc": "We inspect your device and discuss the condition, possible repairs, and next steps."
    },
    {
      "title": "Corrosion and residue",
      "desc": "Liquid can leave residue or corrosion inside a device. We assess the affected areas and cleaning options."
    },
    {
      "title": "Power and charging issues",
      "desc": "If your device no longer starts or charges after a spill, we can investigate the issue."
    },
    {
      "title": "Display and touch issues",
      "desc": "Liquid exposure can affect the display or touch response. We can assess the damage."
    },
    {
      "title": "Data recovery options",
      "desc": "Ask about options for recovering important files. Recovery depends on the device and extent of damage."
    },
    {
      "title": "Component repair",
      "desc": "Depending on the damage and model, affected components may be repairable or replaceable."
    }
  ],
  "faqs": [
    {
      "question": "How much does water damage repair cost in Macon?",
      "answer": "Pricing depends on the device model and issue. Call (478) 259-6371 to discuss your device and request a quote."
    },
    {
      "question": "How long does water damage repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can provide an estimate after discussing or inspecting your device."
    },
    {
      "question": "Do I need an appointment?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your repair."
    },
    {
      "question": "Can a water-damaged device always be repaired?",
      "answer": "Not always. The outcome depends on the liquid, device, and extent of damage. We can assess it and discuss the options."
    },
    {
      "question": "Can you recover data after liquid damage?",
      "answer": "Data recovery may be possible, depending on the damage and device. Ask us about an assessment."
    }
  ]
};

export default function Page() {
  return <ServiceRepairPage data={data} />;
}
