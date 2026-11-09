import type { Metadata } from "next";
import { POSTS } from "./posts";
import PostCard from "./PostCard";
import CtaBand from "./CtaBand";
import { SITE_URL } from "../constants";

const TITLE = "The SaveFirst Blog: Saving First and Spending Clearly";
const DESCRIPTION =
  "Plain-English guides to paying yourself first, knowing what's safe to spend, sinking funds and mindful spending. Real numbers, no lectures.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: ["pay yourself first", "safe to spend", "sinking funds", "mindful spending", "money clarity", "how to save money"],
  alternates: {
    canonical: "/blog",
    types: { "application/rss+xml": [{ url: "/blog/rss.xml", title: "The SaveFirst Blog" }] },
  },
  openGraph: {
    type: "website",
    url: "/blog",
    siteName: "SaveFirst",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/assets/app-icon.png", width: 512, height: 512, alt: "SaveFirst" }],
  },
  twitter: { card: "summary", title: TITLE, description: DESCRIPTION, images: ["/assets/app-icon.png"] },
};

export default function BlogIndex() {
  const [featured, ...rest] = POSTS;
  const categories = Array.from(new Set(POSTS.map((p) => p.meta.category)));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    url: `${SITE_URL}/blog`,
    name: "The SaveFirst Blog",
    description: DESCRIPTION,
    inLanguage: "en-US",
    publisher: {
      "@type": "Organization",
      name: "Teak Software Studio LLC",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/assets/app-icon.png` },
    },
    blogPost: POSTS.map(({ meta }) => ({
      "@type": "BlogPosting",
      headline: meta.title,
      url: `${SITE_URL}/blog/${meta.slug}`,
      datePublished: meta.published,
      description: meta.description,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="blog-hero">
        <div className="wrap">
          <span className="eyebrow">The SaveFirst blog</span>
          <h1>
            Save first. <span className="hl">Spend clearly.</span>
          </h1>
          <p className="blog-hero-sub">
            Plain-English guides to paying yourself first, knowing what&rsquo;s safe to spend, and
            handling the costs you can see coming. Real numbers. No lectures.
          </p>
          <ul className="blog-cats" aria-label="Topics">
            {categories.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="blog-list">
        <div className="wrap">
          <PostCard meta={featured.meta} featured />
          {rest.length > 0 && (
            <>
              <h2 className="blog-list-head">More guides</h2>
              <div className="blog-grid">
                {rest.map(({ meta }) => (
                  <PostCard key={meta.slug} meta={meta} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
