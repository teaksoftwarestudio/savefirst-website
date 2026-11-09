import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { POSTS, getPost } from "../posts";
import PostCard, { PostByline } from "../PostCard";
import CtaBand from "../CtaBand";
import { SITE_URL } from "../../constants";

export const dynamicParams = false;

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.meta.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { meta } = post;
  const url = `/blog/${meta.slug}`;
  return {
    title: meta.seoTitle,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: "The SaveFirst team" }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      siteName: "SaveFirst",
      title: meta.seoTitle,
      description: meta.description,
      publishedTime: meta.published,
      modifiedTime: meta.updated ?? meta.published,
      section: meta.category,
      tags: meta.keywords,
    },
    twitter: { card: "summary_large_image", title: meta.seoTitle, description: meta.description },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  const { meta, Body } = post;
  const url = `${SITE_URL}/blog/${meta.slug}`;
  const related = POSTS.filter((p) => p.meta.slug !== meta.slug).slice(0, 2);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      mainEntityOfPage: url,
      url,
      headline: meta.title,
      description: meta.description,
      image: `${url}/opengraph-image`,
      datePublished: meta.published,
      dateModified: meta.updated ?? meta.published,
      articleSection: meta.category,
      keywords: meta.keywords.join(", "),
      inLanguage: "en-US",
      author: { "@type": "Organization", name: "The SaveFirst team", url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: "Teak Software Studio LLC",
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/app-icon.png` },
      },
      isPartOf: { "@id": `${SITE_URL}/blog#blog` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: meta.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: meta.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <article>
        <header className="post-hero">
          <div className="wrap">
            <nav className="post-crumbs" aria-label="Breadcrumb">
              <ol>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li aria-current="page">{meta.category}</li>
              </ol>
            </nav>
            <h1>{meta.title}</h1>
            <p className="post-standfirst">{meta.excerpt}</p>
            <PostByline meta={meta} />
          </div>
        </header>

        <div className="wrap post-layout">
          <aside className="legal-toc post-toc" aria-label="On this page">
            <h2>On this page</h2>
            <ol>
              {meta.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`}>{s.label}</a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="post-prose">
            <Body />

            <section id="faq">
              <h2>Frequently asked questions</h2>
              <div className="post-faq">
                {meta.faq.map((f, i) => (
                  <details key={f.q} open={i === 0}>
                    <summary>{f.q}</summary>
                    <p>{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <p className="post-disclaimer">
              This article explains a method for thinking about money. It isn&rsquo;t financial,
              tax or legal advice, and it doesn&rsquo;t tell you what to do with your money.
            </p>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="post-related">
          <div className="wrap">
            <h2 className="blog-list-head">Keep reading</h2>
            <div className="blog-grid">
              {related.map(({ meta: m }) => (
                <PostCard key={m.slug} meta={m} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand />
    </>
  );
}
