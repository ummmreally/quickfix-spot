import type { Metadata } from "next";
import DeviceRepairPage, { type DevicePageData } from "../../components/DeviceRepairPage";

export const metadata: Metadata = {
  "title": "MacBook Repair in Macon, GA | Tech Medics",
  "description": "MacBook repair in Macon, GA. screen repair, battery replacement, keyboard repair. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/macbook/"
  },
  "openGraph": {
    "title": "MacBook Repair in Macon, GA | Tech Medics",
    "description": "MacBook repair in Macon, GA. screen repair, battery replacement, keyboard repair. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
    "url": "https://techmedicsmacon.com/macon/macbook/",
    "images": [
      {
        "url": "/images/macbook-device-desk.webp",
        "width": 1536,
        "height": 1024,
        "alt": "MacBook on a desk"
      }
    ]
  }
};

const data: DevicePageData = {
  "device": "MacBook",
  "slug": "macbook",
  "image": "/images/macbook-device-desk.webp",
  "intro": "A damaged display or unreliable battery should not stop your work. Tech Medics offers MacBook repair in Macon, GA, for screen, keyboard, power, and other issues.",
  "models": "We work with MacBook Air and MacBook Pro models, including Apple silicon and Intel-based laptops.",
  "services": [
    {
      "title": "Screen repair",
      "desc": "Get help with a cracked screen, display lines, or a screen that no longer shows an image."
    },
    {
      "title": "Battery replacement",
      "desc": "We assess batteries that drain quickly, fail to charge, or show signs of swelling."
    },
    {
      "title": "Keyboard repair",
      "desc": "Sticky, broken, or unresponsive keys can make work difficult. Ask about repair options for your model."
    },
    {
      "title": "Charging and ports",
      "desc": "We diagnose power issues and damaged or unreliable ports."
    },
    {
      "title": "Logic board diagnostics",
      "desc": "For a MacBook that will not turn on or shuts down unexpectedly, we can investigate board-level issues."
    },
    {
      "title": "Trackpad and storage",
      "desc": "Ask about trackpad repairs and storage upgrades for compatible models."
    }
  ],
  "faqs": [
    {
      "question": "How much does MacBook repair cost in Macon?",
      "answer": "The price depends on your MacBook model and the repair needed. Call (478) 259-6371 for a quote."
    },
    {
      "question": "How long will my MacBook repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can give you an estimate after discussing your repair."
    },
    {
      "question": "Do I need an appointment for MacBook repair?",
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
