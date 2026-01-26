import { Helmet } from "react-helmet";

interface LocalBusinessSchemaProps {
  pageName: string;
  pageDescription: string;
  serviceType?: string;
}

/**
 * LocalBusinessSchema - Adds service-specific schema that references the main business
 * The primary LocalBusiness schema is defined in index.html as the single source of truth
 * This component only adds service-specific data to avoid duplication
 */
const LocalBusinessSchema = ({ pageName, pageDescription, serviceType }: LocalBusinessSchemaProps) => {
  // Only render service schema if a service type is specified
  // The main LocalBusiness schema is already in index.html
  if (!serviceType) {
    return null;
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceType,
    "description": pageDescription,
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://techmedicsmacon.com/#business",
      "name": "Tech Medics Macon"
    },
    "areaServed": {
      "@type": "City",
      "name": "Macon",
      "containedIn": {
        "@type": "State",
        "name": "Georgia"
      }
    },
    "serviceType": serviceType
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
    </Helmet>
  );
};

export default LocalBusinessSchema;
