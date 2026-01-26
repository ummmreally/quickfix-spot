import { Helmet } from "react-helmet";

interface ReviewSchemaProps {
  ratingValue?: string;
  reviewCount?: string;
  bestRating?: string;
}

/**
 * ReviewSchema - Adds individual review markup that references the main business
 * The aggregateRating is already defined in index.html LocalBusiness schema
 * This component adds individual review examples for rich snippets
 */
const ReviewSchema = ({ ratingValue = "4.9", reviewCount = "60", bestRating = "5" }: ReviewSchemaProps) => {
  // Reference the main business entity with @id - no duplicate LocalBusiness
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "PhoneRepair",
    "@id": "https://techmedicsmacon.com/#business",
    "name": "Tech Medics Macon",
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Sarah M."
        },
        "datePublished": "2026-01-15",
        "reviewBody": "Fixed my iPhone screen in 30 minutes! Professional service and great pricing. Much better than going to the Apple Store.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "James T."
        },
        "datePublished": "2026-01-10",
        "reviewBody": "My MacBook Pro was overheating and they cleaned it and replaced the thermal paste. Works like new now. Highly recommend!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Emily R."
        },
        "datePublished": "2025-12-28",
        "reviewBody": "Fast and affordable iPad screen repair. Great customer service and they explained everything clearly.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Michael D."
        },
        "datePublished": "2025-12-20",
        "reviewBody": "Got my iPhone battery replaced. Quick service and fair price. Will definitely come back for any future repairs.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Lisa K."
        },
        "datePublished": "2025-12-15",
        "reviewBody": "Excellent service! They recovered data from my water-damaged iPhone. Saved all my photos and contacts.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(reviewsSchema)}</script>
    </Helmet>
  );
};

export default ReviewSchema;
