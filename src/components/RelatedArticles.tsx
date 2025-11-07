import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface RelatedArticle {
  title: string;
  description: string;
  link: string;
  readTime: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

const RelatedArticles = ({ articles }: RelatedArticlesProps) => {
  return (
    <section className="py-12 bg-secondary/10 rounded-lg">
      <div className="px-6">
        <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <Link key={index} to={article.link} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary">
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {article.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">{article.description}</p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
