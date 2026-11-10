import type { Metadata } from "next";
import DeviceRepairPage, { type DevicePageData } from "../../components/DeviceRepairPage";

export const metadata: Metadata = {
  "title": "PS5 Repair in Macon, GA | HDMI & Controller Repair | Tech Medics",
  "description": "PS5 repair in Macon, GA. HDMI port, overheating, power, disc drive and controller repair. Walk-ins welcome. Call Tech Medics at (478) 259-6371.",
  "alternates": {
    "canonical": "https://techmedicsmacon.com/macon/ps5-repair/"
  },
  "openGraph": {
    "title": "PS5 Repair in Macon, GA | Tech Medics",
    "description": "PS5 repair in Macon, GA. HDMI port, overheating, power, disc drive and controller repair. Walk-ins welcome. Call Tech Medics at (478) 259-6371.",
    "url": "https://techmedicsmacon.com/macon/ps5-repair/",
    "images": [
      {
        "url": "/images/ps5-repair-hero.webp",
        "width": 1536,
        "height": 1024,
        "alt": "PS5 console and controller on a gaming desk"
      }
    ]
  }
};

const data: DevicePageData = {
  "device": "PS5",
  "slug": "ps5-repair",
  "image": "/images/ps5-repair-hero.webp",
  "intro": "No signal, overheating, or a controller that drifts? Tech Medics offers PlayStation 5 repair in Macon, GA. Bring in your console and we’ll help you understand your repair options.",
  "models": "We service PlayStation 5 consoles and DualSense controllers. Tell us which model you have and what it is doing.",
  "services": [
    {
      "title": "HDMI port repair",
      "desc": "A damaged HDMI port can cause a black screen, flickering, or no signal. We inspect the connection and discuss repair options."
    },
    {
      "title": "Overheating and fan issues",
      "desc": "If your PS5 is running loudly, getting hot, or shutting down, we can assess its cooling system."
    },
    {
      "title": "Power and startup problems",
      "desc": "A console that will not turn on or shuts down unexpectedly may need further diagnosis."
    },
    {
      "title": "Disc drive repair",
      "desc": "For disc-equipped models, we diagnose drives that will not accept, read, or eject discs properly."
    },
    {
      "title": "DualSense controller repair",
      "desc": "Ask about controller issues including stick drift, unresponsive buttons, and charging problems."
    },
    {
      "title": "Diagnostics",
      "desc": "Not sure what is wrong? Describe the symptoms and we can help identify the next step."
    }
  ],
  "faqs": [
    {
      "question": "How much does PS5 repair cost in Macon?",
      "answer": "The price depends on the model and problem. Call (478) 259-6371 to discuss your console and request a quote."
    },
    {
      "question": "How long does PS5 repair take?",
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
      "question": "Can you fix a PS5 with no signal?",
      "answer": "A damaged HDMI port is one possible cause. We can inspect the console and discuss a repair after diagnosis."
    },
    {
      "question": "Can you repair DualSense stick drift?",
      "answer": "Yes. Ask us about diagnosing and repairing drift on your DualSense controller."
    },
    {
      "question": "Can you help with a PS5 that overheats?",
      "answer": "Yes. We can assess overheating, fan noise, and unexpected shutdowns and recommend the appropriate service."
    }
  ]
};

export default function Page() {
  return <DeviceRepairPage data={data} />;
}
