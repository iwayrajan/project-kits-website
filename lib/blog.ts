// blog.ts — placeholder posts so the homepage preview and nav have real
// content to point to. Replace with real posts when you start writing —
// add a full post-body renderer later; for now this just powers previews.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string; // ISO format
};

// TODO: these are placeholder titles/excerpts illustrating the kind of SEO
// content that fits this business (viva prep, architecture explainers,
// comparisons) — replace with real posts before launch, don't publish these
// exact placeholders as-is.
export const blogPosts: BlogPost[] = [
  {
    slug: "how-rag-works",
    title: "How RAG (Retrieval-Augmented Generation) actually works",
    excerpt:
      "A plain-English breakdown of chunking, embeddings, and vector search \u2014 and why it stops AI from making things up.",
    category: "Architecture",
    readTime: "6 min read",
    date: "2026-01-15",
  },
  {
    slug: "viva-questions-rag-projects",
    title: "20 viva questions every RAG project should be ready for",
    excerpt:
      "The questions examiners actually ask about retrieval-based AI projects \u2014 and how to answer them with confidence.",
    category: "Viva Prep",
    readTime: "8 min read",
    date: "2026-01-22",
  },
  {
    slug: "choosing-a-final-year-project",
    title: "How to choose a final-year project you won't regret",
    excerpt:
      "What separates a project that impresses a panel from one that's forgotten a week after submission.",
    category: "Guides",
    readTime: "5 min read",
    date: "2026-02-03",
  },
];
