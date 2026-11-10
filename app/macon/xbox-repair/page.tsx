import type { Metadata } from "next";
import DeviceRepairPage, { type DevicePageData } from "../../components/DeviceRepairPage";

export const metadata: Metadata = {
  "title": "Xbox Repair in Macon, GA | HDMI & Controller Repair | Tech Medics",
  "description": "Xbox repair in Macon, GA. HDMI port, overheating, power, disc drive and controller repair. Walk-ins welcome. Call Tech Medics at (478) 259-6371.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/xbox-repair/"
  },
  "openGraph": {
    "title": "Xbox Repair in Macon, GA | Tech Medics",
    "description": "Xbox repair in Macon, GA. HDMI port, overheating, power, disc drive and controller repair. Walk-ins welcome. Call Tech Medics at (478) 259-6371.",
    "url": "https://techmedicsmacon.com/macon/xbox-repair/",
    "images": [
      {
        "url": "/images/xbox-repair-hero.webp",
        "width": 1536,
        "height": 1024,
        "alt": "Xbox console and controller on a gaming desk"
      }
    ]
  }
};

const data: DevicePageData = {
  "device": "Xbox",
  "slug": "xbox-repair",
  "image": "/images/xbox-repair-hero.webp",
  "intro": "From HDMI trouble to overheating and controller drift, Tech Medics provides Xbox repair in Macon, GA. Bring in your console for help identifying the issue and your repair options.",
  "models": "Ask us about Xbox Series X, Xbox Series S, Xbox One, and compatible Xbox controllers.",
  "services": [
    {
      "title": "HDMI port repair",
      "desc": "A loose or damaged HDMI port can cause no signal or an intermittent picture. We inspect and repair eligible ports."
    },
    {
      "title": "Overheating and fan issues",
      "desc": "If your Xbox runs hot, gets unusually loud, or shuts down, we can assess its cooling system."
    },
    {
      "title": "Power and startup problems",
      "desc": "We diagnose consoles that will not power on, start properly, or stay on."
    },
    {
      "title": "Disc drive repair",
      "desc": "For disc-equipped Xbox models, we can diagnose drives that will not accept, read, or eject discs."
    },
    {
      "title": "Xbox controller repair",
      "desc": "Ask about stick drift, button issues, and other controller problems."
    },
    {
      "title": "Diagnostics",
      "desc": "Not sure what is wrong? Tell us the symptoms and we can help identify the next step."
    }
  ],
  "faqs": [
    {
      "question": "How much does Xbox repair cost in Macon?",
      "answer": "The price depends on the model and problem. Call (478) 259-6371 to discuss your console and request a quote."
    },
    {
      "question": "How long does Xbox repair take?",
      "answer": "Turnaround depends on the issue and parts availability. We can provide an estimate after discussing or inspecting your console."
    },
    {
      "question": "Do I need an appointment?",
      "answer": "Walk-ins are welcome at 3742 Eisenhower Parkway in Macon. You can also call ahead to discuss your repair."
    },
    {
      "question": "Is my repair covered by a warranty?",
      "answer": "Our repairs include a 30-day parts and labor warranty. Ask us for details when you bring in your console."
    },
    {
      "question": "Which Xbox models do you repair?",
      "answer": "Ask us about Xbox Series X, Series S, and Xbox One models. Repair options depend on the console and issue."
    },
    {
      "question": "Can you fix an Xbox with no signal?",
      "answer": "A damaged HDMI port is one possible cause. We can inspect your Xbox and discuss a repair after diagnosis."
    },
    {
      "question": "Can you repair Xbox controller stick drift?",
      "answer": "Yes. Ask us about diagnosing and repairing stick drift on your Xbox controller."
    }
  ]
};

export default function Page() {
  return <DeviceRepairPage data={data} />;
}
