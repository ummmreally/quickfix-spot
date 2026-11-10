import type { Metadata } from "next";
import DeviceRepairPage, { type DevicePageData } from "../../components/DeviceRepairPage";

export const metadata: Metadata = {
  "title": "iMac Repair in Macon, GA | Tech Medics",
  "description": "iMac repair in Macon, GA. display repair, power and startup issues, storage upgrades. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/imac/"
  },
  "openGraph": {
    "title": "iMac Repair in Macon, GA | Tech Medics",
    "description": "iMac repair in Macon, GA. display repair, power and startup issues, storage upgrades. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
    "url": "https://techmedicsmacon.com/macon/imac/",
    "images": [
      {
        "url": "/images/imac-device-desk.webp",
        "width": 1536,
        "height": 1024,
        "alt": "iMac on a desk"
      }
    ]
  }
};

const data: DevicePageData = {
  "device": "iMac",
  "slug": "imac",
  "image": "/images/imac-device-desk.webp",
  "intro": "Whether your iMac is slow, damaged, or will not turn on, Tech Medics offers local iMac repair and diagnostics in Macon, GA.",
  "models": "Ask us about service for iMac, iMac Pro, Apple silicon, and Intel-based desktop models.",
  "services": [
    {
      "title": "Display repair",
      "desc": "We assess cracked, flickering, or non-working iMac screens and discuss replacement options."
    },
    {
      "title": "Power and startup issues",
      "desc": "If your iMac will not start or shuts down unexpectedly, we can diagnose the problem."
    },
    {
      "title": "Storage upgrades",
      "desc": "An SSD upgrade may improve responsiveness on compatible older iMac models."
    },
    {
      "title": "Memory upgrades",
      "desc": "Ask whether your iMac supports a memory upgrade for your workload."
    },
    {
      "title": "Logic board repair",
      "desc": "We investigate logic board faults and discuss repair options based on the diagnosis."
    },
    {
      "title": "Data recovery",
      "desc": "If a drive is failing or your iMac will not start, ask about options for recovering your files."
    }
  ],
  "faqs": [
    {
      "question": "How much does iMac repair cost in Macon?",
      "answer": "The price depends on your iMac model and the repair needed. Call (478) 259-6371 for a quote."
    },
    {
      "question": "How long will my iMac repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can give you an estimate after discussing your repair."
    },
    {
      "question": "Do I need an appointment for iMac repair?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your device."
    },
    {
      "question": "Is my repair covered by a warranty?",
      "answer": "Our repairs include a 30-day parts and labor warranty. Ask us for details when you bring in your device."
    }
  ]
};

export default function Page() {
  return <DeviceRepairPage data={data} />;
}
