import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Tech Medics Macon. Learn how we handle your personal information and device data during repairs.",
  alternates: { canonical: "https://techmedicsmacon.com/privacy" },
};

export default function PrivacyPage() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-foreground">Privacy Policy</h1>
        <div className="prose prose-lg max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3">
          <p>Last updated: January 2026</p>
          <h2>Information We Collect</h2>
          <p>When you visit Tech Medics Macon or use our website, we may collect the following information:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Contact information (name, phone number, email) when you request service</li>
            <li>Device information related to your repair</li>
            <li>Website usage data through cookies and analytics</li>
          </ul>
          <h2>How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide repair services and communicate about your repair status</li>
            <li>Improve our website and services</li>
            <li>Send service-related communications</li>
          </ul>
          <h2>Device Data Privacy</h2>
          <p>We take your device data privacy seriously. Our technicians only access device functions necessary to complete your repair. We do not access, copy, or store any personal data from your device unless specifically requested for data recovery services.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about our privacy practices, contact us at:</p>
          <p>Tech Medics Macon<br />3742 Eisenhower Parkway<br />Macon, GA 31206<br />(478) 259-6371</p>
        </div>
      </div>
    </section>
  );
}
