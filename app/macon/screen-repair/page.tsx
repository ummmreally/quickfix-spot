import type { Metadata } from "next";
import ServiceRepairPage, { type ServicePageData } from "../../components/ServiceRepairPage";

export const metadata: Metadata = {
  "title": "Screen Repair in Macon, GA | Tech Medics",
  "description": "Screen Repair in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device and request a quote.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/screen-repair/"
  },
  "openGraph": {
    "title": "Screen Repair in Macon, GA | Tech Medics",
    "description": "Screen Repair in Macon, GA for iPhone, iPad and MacBook. Walk-ins welcome at Tech Medics. Call (478) 259-6371 to discuss your device and request a quote.",
    "url": "https://techmedicsmacon.com/macon/screen-repair/",
    "images": [
      {
        "url": "/images/screen-repair-service-hero.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Screen Repair for mobile devices"
      }
    ]
  }
};

const data: ServicePageData = {
  "name": "Screen Repair",
  "headline": "A clearer view starts here.",
  "intro": "Cracked glass, a dark display, or touch problems? Tech Medics offers iPhone, iPad, and MacBook screen repair in Macon, GA. Bring in your device and let us help you explore your options.",
  "sectionTitle": "Screen repair for the devices you use every day",
  "noteTitle": "Screen repair that fits your device",
  "note": "Screen assemblies differ by model. We’ll discuss the available parts, pricing, and estimated turnaround for your device before repair.",
  "slug": "screen-repair",
  "image": "/images/screen-repair-service-hero.webp",
  "services": [
    {
      "title": "iPhone screen repair",
      "desc": "We assess cracked screens, display problems, and unresponsive touch on compatible iPhone models."
    },
    {
      "title": "iPad screen repair",
      "desc": "From cracked glass to touch issues, we can discuss screen repair options for your iPad model."
    },
    {
      "title": "MacBook display repair",
      "desc": "A cracked display, dark screen, or lines across your MacBook may call for a display repair."
    },
    {
      "title": "Cracked or shattered glass",
      "desc": "A damaged screen can make everyday use difficult. Bring your device in for an assessment."
    },
    {
      "title": "Display issues",
      "desc": "Black spots, discoloration, or flickering can indicate display damage that needs attention."
    },
    {
      "title": "Touch problems",
      "desc": "If taps do not register or your screen responds on its own, we can investigate the cause."
    }
  ],
  "faqs": [
    {
      "question": "How much does screen repair cost in Macon?",
      "answer": "Pricing depends on the device model and issue. Call (478) 259-6371 to discuss your device and request a quote."
    },
    {
      "question": "How long does screen repair take?",
      "answer": "Timing depends on the issue, model, and parts availability. We can provide an estimate after discussing or inspecting your device."
    },
    {
      "question": "Do I need an appointment?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your repair."
    },
    {
      "question": "Can I request Genuine Apple Parts for an iPhone display?",
      "answer": "Genuine Apple Parts are available upon request for eligible iPhone display repairs, subject to availability. Ask us about your model."
    },
    {
      "question": "Can a cracked screen be repaired if touch still works?",
      "answer": "Often, yes. We can inspect the screen and explain replacement options for your device."
    }
  ]
};

export default function Page() {
  return <ServiceRepairPage data={data} />;
}
