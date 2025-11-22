import { Helmet } from "react-helmet";

interface ReviewSchemaProps {
  ratingValue?: string;
  reviewCount?: string;
  bestRating?: string;
}

const ReviewSchema = ({ ratingValue = "4.9", reviewCount = "55", bestRating = "5" }: ReviewSchemaProps) => {
  const aggregateRatingSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Tech Medics Macon",
    image: "https://techmedicsmacon.com/logo.png",
    telephone: "(478) 259-6371",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3742 Eisenhower Parkway",
      addressLocality: "Macon",
      addressRegion: "GA",
      postalCode: "31206",
      addressCountry: "US",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue,
      reviewCount: reviewCount,
      bestRating: bestRating,
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Sarah M.",
        },
        datePublished: "2024-10-15",
        reviewBody:
          "Fixed my iPhone screen in 30 minutes! Professional service and great pricing. Much better than going to the Apple Store.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "James T.",
        },
        datePublished: "2024-10-10",
        reviewBody:
          "My MacBook Pro was overheating and they cleaned it and replaced the thermal paste. Works like new now. Highly recommend!",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Emily R.",
        },
        datePublished: "2024-09-28",
        reviewBody:
          "Fast and affordable iPad screen repair. Great customer service and they explained everything clearly.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Michael D.",
        },
        datePublished: "2024-09-20",
        reviewBody:
          "Got my iPhone battery replaced. Quick service and fair price. Will definitely come back for any future repairs.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Lisa K.",
        },
        datePublished: "2024-09-15",
        reviewBody:
          "Excellent service! They recovered data from my water-damaged iPhone. Saved all my photos and contacts.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(aggregateRatingSchema)}</script>
    </Helmet>
  );
};

export default ReviewSchema;
