import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Repair Guides & Tips | Tech Medics Macon Blog",
  description: "Helpful guides to iPhone, iPad, MacBook and game console repair in Macon, GA. Learn about common problems and what to expect from a repair.",
  alternates: { canonical: "https://techmedicsmacon.com/blog/" },
};

export default function BlogIndex() {
  return <>
    <section className="bg-secondary/30 px-5 py-16 md:py-24"><div className="mx-auto max-w-7xl"><p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-primary">Tech Medics · Macon, GA</p><h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Repair guides for the devices you rely on.</h1><p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">Practical answers about screens, batteries, liquid damage, game consoles, and more—so you can make an informed decision about your repair.</p></div></section>
    <section className="px-5 py-16 md:py-20"><div className="mx-auto max-w-7xl"><div className="mb-8 flex items-end justify-between gap-4"><div><p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-primary">Explore the guides</p><h2 className="text-3xl font-bold tracking-tight">Advice for common device problems</h2></div><span className="hidden text-sm text-muted-foreground sm:block">{posts.length} articles</span></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{posts.map(post => <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"><img src={post.image} alt="" width="1536" height="1024" className="aspect-[16/9] w-full object-cover" loading="lazy" /><div className="flex flex-1 flex-col p-6"><span className="text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span><h3 className="mt-3 text-xl font-bold group-hover:text-primary">{post.title}</h3><p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{post.metaDescription}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">Read guide <ArrowRight className="h-4 w-4" /></span></div></Link>)}</div></div></section>
  </>;
}
