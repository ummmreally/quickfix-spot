import type { Metadata } from "next";
import DeviceRepairPage, { type DevicePageData } from "../../components/DeviceRepairPage";

export const metadata: Metadata = {
  "title": "iPad Repair in Macon, GA | Tech Medics",
  "description": "iPad repair in Macon, GA. screen and glass repair, battery replacement, charging port repair. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/ipad/"
  },
  "openGraph": {
    "title": "iPad Repair in Macon, GA | Tech Medics",
    "description": "iPad repair in Macon, GA. screen and glass repair, battery replacement, charging port repair. Walk-ins welcome at Tech Medics. Call (478) 259-6371 for a quote.",
    "url": "https://techmedicsmacon.com/macon/ipad/",
    "images": [
      {
        "url": "/images/ipad-device-desk.webp",
        "width": 1536,
        "height": 1024,
        "alt": "iPad on a desk"
      }
    ]
  }
};

const data: DevicePageData = {
  "device": "iPad",
  "slug": "ipad",
  "image": "/images/ipad-device-desk.webp",
  "intro": "From cracked glass to charging trouble, Tech Medics provides iPad repair in Macon, GA. Bring your tablet in and let us help you find the right repair.",
  "models": "Ask us about repair options for iPad, iPad Air, iPad mini, and iPad Pro models.",
  "services": [
    {
      "title": "Screen and glass repair",
      "desc": "We assess cracked glass, display damage, and touch issues to recommend the right repair for your model."
    },
    {
      "title": "Battery replacement",
      "desc": "A worn battery can make your iPad less useful away from an outlet. Ask about replacement options."
    },
    {
      "title": "Charging port repair",
      "desc": "We diagnose charging issues involving Lightning and USB-C ports."
    },
    {
      "title": "Button repair",
      "desc": "Get help with a damaged or unresponsive button on compatible models."
    },
    {
      "title": "Camera and audio",
      "desc": "We can inspect camera, speaker, and microphone issues that interrupt everyday use."
    },
    {
      "title": "Liquid damage assessment",
      "desc": "If your iPad has been exposed to liquid, bring it in for an assessment as soon as possible."
    }
  ],
  "faqs": [
    {
      "question": "How much does iPad repair cost in Macon?",
      "answer": "The price depends on your iPad model and the repair needed. Call (478) 259-6371 for a quote."
    },
    {
      "question": "How long will my iPad repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can give you an estimate after discussing your repair."
    },
    {
      "question": "Do I need an appointment for iPad repair?",
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
