// seo.ts — shared helpers so every page builds metadata and structured data
// (JSON-LD) the same way, instead of each page reinventing it slightly
// differently. Structured data is what makes rich results (FAQ dropdowns,
// article cards, breadcrumbs) possible in Google search results — it doesn't
// change rankings directly, but it meaningfully improves click-through rate
// once you do rank.

import type { Metadata } from "next";
import { site } from "@/lib/site";

export function buildMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string;
  description: string;
  path: string; // e.g. "/blog/how-rag-works" — must start with "/"
  ogImage?: string;
}): Metadata {
  const url = `${site.siteUrl}${path}`;
  const image = ogImage ?? `${site.siteUrl}/og-image.png`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: site.brandName,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

// ---------- JSON-LD builders ----------
// Each returns a plain object; render with:
//   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brandName,
    url: site.siteUrl,
    logo: `${site.siteUrl}/logo-icon.svg`,
    sameAs: [
      `https://instagram.com/${site.instagramHandle}`,
      `https://github.com/${site.githubHandle}`,
      `https://linkedin.com/in/${site.linkedinHandle}`,
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brandName,
    url: site.siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${site.siteUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function productJsonLd(project: {
  slug: string;
  title: string;
  description: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: project.title,
    description: project.description,
    url: `${site.siteUrl}/projects/${project.slug}`,
    brand: { "@type": "Brand", name: site.brandName },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: "1500",
      highPrice: "3500",
      offerCount: "3",
      availability: "https://schema.org/InStock",
    },
  };
}

export function articleJsonLd(post: {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    url: `${site.siteUrl}/blog/${post.slug}`,
    author: { "@type": "Organization", name: site.brandName },
    publisher: {
      "@type": "Organization",
      name: site.brandName,
      logo: { "@type": "ImageObject", url: `${site.siteUrl}/logo-icon.svg` },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.siteUrl}${item.path}`,
    })),
  };
}
