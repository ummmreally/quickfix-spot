import { Helmet } from "react-helmet";

interface LocalBusinessSchemaProps {
  pageName: string;
  pageDescription: string;
  serviceType?: string;
}

const LocalBusinessSchema = ({ pageName, pageDescription, serviceType }: LocalBusinessSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MyTechMedics",
    "image": "https://techmedicsmacon.com/logo.png",
    "@id": "https://techmedicsmacon.com",
    "url": "https://techmedicsmacon.com",
    "telephone": "(478) 259-6371",
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
      "latitude": 32.789098,
      "longitude": -83.686563
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
    "sameAs": [
      "https://www.facebook.com/mytechmedics",
      "https://www.google.com/maps/place/3742+Eisenhower+Pkwy,+Macon,+GA+31206"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "47"
    }
  };

  if (serviceType) {
    schema["service"] = {
      "@type": "Service",
      "name": serviceType,
      "description": pageDescription,
      "provider": {
        "@type": "LocalBusiness",
        "name": "MyTechMedics"
      },
      "areaServed": {
        "@type": "City",
        "name": "Macon",
        "containedIn": {
          "@type": "State",
          "name": "Georgia"
        }
      }
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
