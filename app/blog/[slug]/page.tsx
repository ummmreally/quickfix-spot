import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { posts, type BlogPost } from "../posts";

function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    
    alternates: { canonical: `https://techmedicsmacon.com/blog/${post.slug}/` },
    openGraph: { title: post.title, description: post.metaDescription, url: `https://techmedicsmacon.com/blog/${post.slug}/`, type: "article", images: [{ url: post.image, width: 1536, height: 1024, alt: post.title }] },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relatedPosts = post.relatedSlugs.map((s) => posts.find((p) => p.slug === s)).filter(Boolean) as BlogPost[];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishDate,
    dateModified: post.modifiedDate,
    author: { "@type": "Organization", name: "Tech Medics Macon", url: "https://techmedicsmacon.com" },
    publisher: { "@type": "Organization", name: "Tech Medics Macon", logo: { "@type": "ImageObject", url: "https://techmedicsmacon.com/images/logo.webp" } },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://techmedicsmacon.com/blog/${post.slug}/` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 py-3 text-sm text-muted-foreground">
        <ol className="flex items-center gap-2">
          <li><Link href="/" className="hover:text-primary">Home</Link></li><li>/</li>
          <li><Link href="/blog" className="hover:text-primary">Blog</Link></li><li>/</li>
          <li className="text-foreground font-medium truncate max-w-[200px]">{post.title}</li>
        </ol>
      </nav>

      <article className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">{post.category}</span>
            <span className="text-xs text-muted-foreground">{new Date(post.publishDate + "T12:00:00").toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-2 mb-8 text-foreground">{post.title}</h1>
          <p className="mb-6 text-sm text-muted-foreground">Updated October 30, 2026</p>
          <img src={post.image} alt="" width="1536" height="1024" className="mb-10 w-full rounded-2xl object-cover aspect-[2/1]" />
          <div className="prose prose-lg max-w-none text-muted-foreground [&_h2]:text-foreground [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-foreground [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_ul]:list-disc [&_ul]:ml-6 [&_ol]:list-decimal [&_ol]:ml-6 [&_li]:mb-2 [&_strong]:text-foreground [&_table]:w-full [&_table]:border-collapse [&_th]:border [&_th]:border-border [&_th]:p-2 [&_th]:text-left [&_th]:bg-secondary/30 [&_th]:text-foreground [&_td]:border [&_td]:border-border [&_td]:p-2"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Need a repair in Macon?</h2>
          <p className="text-lg text-muted-foreground mb-6">Visit Tech Medics at 3742 Eisenhower Parkway or call for a free quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground"><a href="tel:(478)259-6371"><Phone className="mr-2 h-5 w-5" />Call (478) 259-6371</a></Button>
            <Button asChild size="lg" variant="outline" className="border-2"><a href="https://www.google.com/maps/dir//3742+Eisenhower+Parkway,+Macon,+GA+31206" target="_blank" rel="noopener noreferrer"><MapPin className="mr-2 h-5 w-5" />Get Directions</a></Button>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Related Guides</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <span className="text-xs font-semibold text-primary uppercase">{rp.category}</span>
                  <h3 className="text-lg font-bold mt-1 mb-2 text-foreground">{rp.title}</h3>
                  <p className="text-muted-foreground text-sm">{rp.metaDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
