import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warranty Policy",
  description: "Tech Medics Macon warranty policy. All repairs include a 30-day warranty on parts and labor. Learn about coverage details.",
  alternates: { canonical: "https://techmedicsmacon.com/warranty-policy" },
};

export default function WarrantyPolicyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Warranty Policy</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3">
          <p>At Tech Medics Macon, we stand behind every repair we perform. All repairs include our comprehensive warranty.</p>
          <h2>30-Day Warranty Coverage</h2>
          <p>Every repair performed at Tech Medics Macon includes a 30-day warranty that covers:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li><strong className="text-foreground">Parts:</strong> Defective replacement parts will be replaced at no cost</li>
            <li><strong className="text-foreground">Labor:</strong> If the same issue recurs due to our workmanship, we will re-repair at no charge</li>
          </ul>
          <h2>What&apos;s Not Covered</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>New damage (drops, water exposure, impacts) after the repair</li>
            <li>Damage caused by unauthorized modifications or repairs by others</li>
            <li>Software issues unrelated to the hardware repair performed</li>
            <li>Normal wear and tear</li>
          </ul>
          <h2>How to Use Your Warranty</h2>
          <p>If you experience an issue covered by our warranty:</p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Bring your device back to our location at 3742 Eisenhower Parkway, Macon, GA 31206</li>
            <li>Our technician will inspect the device and determine if the issue is covered</li>
            <li>If covered, the repair will be performed at no additional cost</li>
          </ol>
          <h2>Contact Us</h2>
          <p>Questions about your warranty? Call us at <strong className="text-foreground">(478) 259-6371</strong> or visit us at 3742 Eisenhower Parkway, Macon, GA 31206.</p>
        </div>
      </div>
    </section>
  );
}
