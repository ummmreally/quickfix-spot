import { Helmet } from "react-helmet";

interface NeighborhoodBusinessSchemaProps {
  neighborhoodName: string;
  pageDescription: string;
  landmarks?: string[];
  areaServed?: string[];
}

const NeighborhoodBusinessSchema = ({ 
  neighborhoodName,
  pageDescription,
  landmarks = [],
  areaServed = []
}: NeighborhoodBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `MyTechMedics - ${neighborhoodName} iPhone iPad MacBook Repair`,
    "image": "https://techmedicsmacon.com/logo.png",
    "description": pageDescription,
    "url": `https://techmedicsmacon.com/macon/${neighborhoodName.toLowerCase().replace(/\s+/g, '-')}`,
    "telephone": "(478) 259-6371",
    "email": "info@techmedicsmacon.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3742 Eisenhower Parkway",
      "addressLocality": "Macon",
      "addressRegion": "GA",
      "postalCode": "31206",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "32.8407",
      "longitude": "-83.6324"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "10:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Macon",
        "containedIn": {
          "@type": "State",
          "name": "Georgia"
        }
      },
      ...areaServed.map(area => ({
        "@type": "Place",
        "name": area
      }))
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${neighborhoodName} Repair Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Screen Repair",
            "description": `Professional iPhone screen replacement serving ${neighborhoodName} and surrounding areas`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "79.00",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPhone Battery Replacement",
            "description": `Fast iPhone battery replacement for ${neighborhoodName} residents`
          },
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "59.00",
            "priceCurrency": "USD"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "iPad Screen Repair",
            "description": `iPad screen and glass repair serving ${neighborhoodName}`
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "MacBook Repair",
            "description": `MacBook screen, keyboard, and battery repair for ${neighborhoodName} area`
          }
        }
      ]
    },
    ...(landmarks.length > 0 && {
      "makesOffer": landmarks.map(landmark => ({
        "@type": "Offer",
        "description": `Serving customers near ${landmark}`
      }))
    }),
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default NeighborhoodBusinessSchema;
