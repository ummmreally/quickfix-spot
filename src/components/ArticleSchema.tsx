import { Helmet } from "react-helmet";

interface ArticleSchemaProps {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
}

const ArticleSchema = ({ 
  headline, 
  description, 
  datePublished, 
  dateModified,
  image = "https://techmedicsmacon.com/logo.png"
}: ArticleSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "image": image,
    "author": {
      "@type": "Organization",
      "name": "Tech Medics Macon",
      "url": "https://techmedicsmacon.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tech Medics Macon",
      "url": "https://techmedicsmacon.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://techmedicsmacon.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://techmedicsmacon.com/blog"
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

export default ArticleSchema;
