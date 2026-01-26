import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Helmet } from "react-helmet";

interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date: string;
  service: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  // Each review needs itemReviewed to be valid
  const reviewSchemas = testimonials.map((testimonial) => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": testimonial.name,
    },
    "datePublished": testimonial.date,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": testimonial.rating.toString(),
      "bestRating": "5",
    },
    "reviewBody": testimonial.text,
    "itemReviewed": {
      "@type": "LocalBusiness",
      "@id": "https://techmedicsmacon.com/#business",
      "name": "Tech Medics Macon"
    }
  }));

  return (
    <>
      <Helmet>
        {reviewSchemas.map((schema, index) => (
          <script key={index} type="application/ld+json">{JSON.stringify(schema)}</script>
        ))}
      </Helmet>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">What Our Customers Say</h2>
          <p className="text-center text-muted-foreground mb-12">Real reviews from satisfied customers in Macon, GA</p>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                  <p className="text-xs text-muted-foreground mt-1">{testimonial.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialSection;
