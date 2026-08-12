// faq.ts — homepage FAQ content, shared between the visible accordion
// (components/sections/Faq.tsx) and the FAQPage structured data on the
// homepage (which is what makes expandable FAQ rich results possible in
// Google search). Keep questions phrased the way people actually search —
// that's not just good UX, it's also what search engines match against.

export const HOME_FAQ = [
  {
    q: "Is this actually my own work if I buy it?",
    a: "You get the full source code and can (and should) understand it before submitting — the viva question bank exists specifically so you can defend it confidently. Check your own institution's academic integrity policy on using external resources before submitting; that policy varies by college and we can't make that call for you.",
  },
  {
    q: "Do you provide final year projects with source code and documentation?",
    a: "Yes — every kit includes the full working source code, an 8-chapter project report, a presentation deck, and a viva question bank, not just code on its own.",
  },
  {
    q: "Are these projects suitable for a mini project submission, not just final year?",
    a: "Yes — the same kits work for mini project and major/final year project submissions, since both need working code and matching documentation. Tell us which one you're submitting so the report and deck are framed correctly.",
  },
  {
    q: "What if it doesn't work on my machine?",
    a: "Every kit ships with exact setup instructions and a working requirements file, tested on a clean environment before it's listed. If you still get stuck — a Python version mismatch, a missing system dependency, whatever it is — message us on WhatsApp. Support is included until you've submitted, not just until payment clears.",
  },
  {
    q: "How is this different from a random GitHub repo?",
    a: "A GitHub repo doesn't come with a report, a presentation, or a viva question bank written for that exact codebase — and it definitely won't have your name and college on it. This is a complete submission package: code, documentation, and defense material, built together so they actually match.",
  },
  {
    q: "Do you only do AI/ML projects?",
    a: "AI/ML is what we've shipped so far, but the catalog is built to expand — e-commerce and MERN-stack kits are next, using the same standard: working code, matching documentation, and a real viva question bank. Message us if you need something in a category that isn't live yet.",
  },
  {
    q: "Can you customize the project further?",
    a: "Yes — message us on WhatsApp with what you need. Small customizations, like swapping the demo dataset or video domain so your submission doesn't look identical to a classmate's, are usually included. Larger structural changes may cost extra depending on scope.",
  },
  {
    q: "Will two students from the same college get an identical project?",
    a: "Not if you tell us — we can vary the demo domain, some copy in the report, or (for the more technical students) suggest one extra feature to implement for real. Worth flagging this to us before you buy if it matters for your class.",
  },
  {
    q: "How long does delivery take?",
    a: "Most kits are same-day, since the report and deck generation is largely automated once we have your details. Heavier customization requests may take longer — we'll tell you upfront, before you pay, if that's the case for what you're asking.",
  },
  {
    q: "What payment methods do you accept?",
    a: "UPI is the simplest for most students — confirm details directly over WhatsApp before paying. We don't currently support international payment methods.",
  },
  {
    q: "What if I need help understanding the code before my viva?",
    a: "That's exactly what the viva question bank and cheat sheet are for — they walk through the design decisions in plain language. If a specific part still isn't clicking, message us and we'll explain it directly.",
  },
];
