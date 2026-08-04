// site.ts — edit this file for anything that isn't a specific project or
// blog post. Everything marked TODO is a placeholder — replace before deploying.

export type NavLink = { label: string; href: string };

export const categories = [
  { id: "ai-ml", label: "AI / ML", status: "live" as const },
  { id: "ecommerce", label: "E-commerce", status: "coming-soon" as const },
  { id: "mern", label: "MERN Stack", status: "coming-soon" as const },
];

export const site = {
  // TODO: replace with your real brand name
  brandName: "YourBrand",
  // Deliberately category-agnostic — this brand covers project kits across
  // categories (AI/ML today, more later), not just AI specifically.
  tagline: "Project kits built to actually work \u2014 and documented so you can defend them.",
  description:
    "Working, documented, viva-ready project kits across AI/ML today, with more categories on the way.",

  // TODO: replace with your real WhatsApp number, digits only, with country code
  whatsappNumber: "911234567890",
  whatsappDefaultMessage: "Hi! I'm interested in one of your project kits.",

  // TODO: replace with your real Instagram handle (without the @)
  instagramHandle: "your_handle",
  // TODO: fill in or remove any socials you don't actually have yet
  githubHandle: "your_handle",
  linkedinHandle: "your_handle",

  // TODO: replace with your real contact email
  email: "you@example.com",

  nav: [
    { label: "Products", href: "/#projects" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ] satisfies NavLink[],

  pricingTiers: [
    {
      name: "Code Only",
      price: "\u20b91,500",
      description: "The working application, source code, and setup instructions.",
      includes: ["Full source code", "Setup/run instructions", "requirements.txt"],
    },
    {
      name: "Code + Documentation",
      price: "\u20b92,500",
      description: "Everything in Code Only, plus the full submission report and slide deck.",
      includes: ["Everything in Code Only", "8-chapter Word report", "Presentation deck", "Architecture diagrams"],
      highlighted: true,
    },
    {
      name: "Full Package",
      price: "\u20b93,500",
      description: "Everything you need to submit and defend the project, viva-ready.",
      includes: ["Everything in Code + Documentation", "Viva question bank + cheat sheet", "Customized to your name/college", "WhatsApp support until submission"],
    },
  ],

  trustPoints: [
    { stat: "4", label: "product kits shipped, each with a full working codebase" },
    { stat: "10/10", label: "test cases passed on every project, documented in the report" },
    { stat: "100%", label: "customized to your name, college, and department" },
  ],

  footer: {
    columns: [
      {
        title: "Products",
        links: [
          { label: "AI / ML Kits", href: "/#projects" },
          { label: "E-commerce Kits", href: "#", badge: "Coming soon" },
          { label: "MERN Stack Kits", href: "#", badge: "Coming soon" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About & Trust", href: "/about" },
          { label: "Blog", href: "/blog" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "How it works", href: "/#how-it-works" },
          { label: "Pricing", href: "/#pricing" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
      {
        title: "Legal",
        // TODO: these currently point nowhere — write real policy pages before launch
        links: [
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Refund Policy", href: "#" },
        ],
      },
    ],
    disclaimer:
      "Project kits are provided as a learning and reference resource. Before submitting any work as your own, check your institution's academic integrity policy on using external resources \u2014 you are responsible for how you use what you purchase here.",
  },
} as const;
