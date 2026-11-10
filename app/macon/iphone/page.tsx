import type { Metadata } from "next";
import DeviceRepairPage, { type DevicePageData } from "../../components/DeviceRepairPage";

export const metadata: Metadata = {
  "title": "iPhone Repair in Macon, GA | Tech Medics",
  "description": "iPhone repair in Macon, GA. screen repair, battery replacement, charging port repair. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/iphone/"
  },
  "openGraph": {
    "title": "iPhone Repair in Macon, GA | Tech Medics",
    "description": "iPhone repair in Macon, GA. screen repair, battery replacement, charging port repair. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
    "url": "https://techmedicsmacon.com/macon/iphone/",
    "images": [
      {
        "url": "/images/iphone-device-desk.webp",
        "width": 1536,
        "height": 1024,
        "alt": "iPhone on a desk"
      }
    ]
  }
};

const data: DevicePageData = {
  "device": "iPhone",
  "slug": "iphone",
  "image": "/images/iphone-device-desk.webp",
  "intro": "Cracked screen, weak battery, or a charging problem? Tech Medics offers iPhone repair in Macon, GA, with straightforward advice and repair options for your device.",
  "models": "We work on a range of iPhone models, including iPhone SE and recent and older iPhone generations.",
  "services": [
    {
      "title": "Screen repair",
      "desc": "Replace a cracked or unresponsive display and get back to using your phone comfortably."
    },
    {
      "title": "Battery replacement",
      "desc": "A battery that drains quickly or struggles to hold a charge may be ready for replacement."
    },
    {
      "title": "Charging port repair",
      "desc": "If your iPhone charges intermittently or not at all, we can inspect the charging port."
    },
    {
      "title": "Camera repair",
      "desc": "Get help with damaged cameras, blurry images, or a camera that will not open."
    },
    {
      "title": "Speaker and microphone",
      "desc": "We diagnose audio problems that make calls or media difficult to hear."
    },
    {
      "title": "Water damage assessment",
      "desc": "Bring in a liquid-exposed phone as soon as possible for an assessment and repair options."
    }
  ],
  "faqs": [
    {
      "question": "How much does iPhone repair cost in Macon?",
      "answer": "The price depends on your iPhone model and the repair needed. Call (478) 259-6371 for a quote."
    },
    {
      "question": "How long will my iPhone repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can give you an estimate after discussing your repair."
    },
    {
      "question": "Do I need an appointment for iPhone repair?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your device."
    },
    {
      "question": "Is my repair covered by a warranty?",
      "answer": "Our repairs include a 30-day parts and labor warranty. Ask us for details when you bring in your device."
    },
    {
      "question": "Can I request Genuine Apple Parts?",
      "answer": "Genuine Apple Parts are available upon request for eligible iPhone display repairs, subject to availability. Ask us about your specific model."
    }
  ]
};

export default function Page() {
  return <DeviceRepairPage data={data} />;
}
