// projects.ts — one entry per product. Add a new project by adding an object
// here; the homepage grid and /projects/[slug] detail pages both read from
// this file automatically.
//
// IMAGES/VIDEO: drop files into public/projects/<slug>/ using these names:
//   - cover.jpg          (used on the homepage card, ~4:3)
//   - screenshot-1.jpg, screenshot-2.jpg, screenshot-3.jpg  (detail page gallery)
//   - demo.mp4  OR  demoYoutubeId set below (detail page video)
// Placeholders are used until you add real files — see public/projects/README.md

export type Project = {
  slug: string;
  category: "ai-ml" | "ecommerce" | "mern";
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  features: string[];
  whatIncluded: string[];
  demoExchange: { question: string; answer: string; citation: string };
  demoYoutubeId?: string;
  faq: { q: string; a: string }[];
};

export const projects: Project[] = [
  {
    slug: "pdf-rag-chat",
    category: "ai-ml",
    title: "Chat with PDF",
    tagline: "Ask questions about any PDF, get answers cited by page number.",
    description:
      "A retrieval-augmented chat system: upload a PDF, ask questions in plain English, and get answers grounded in the actual document, with every answer citing the exact page it came from. Built with hybrid retrieval (exact-match + semantic search) so it handles both specific lookups and broad summary questions correctly.",
    techStack: ["Streamlit", "pymupdf4llm", "sentence-transformers", "FAISS", "Groq API"],
    features: [
      "Upload any PDF and start asking questions immediately",
      "Answers cited by exact page number",
      "Hybrid retrieval — correctly handles specific numeric/identifier questions, not just fuzzy topic matches",
      "Handles both narrow lookups and whole-document summary questions",
    ],
    whatIncluded: [
      "Full working Streamlit application",
      "8-chapter Word report (architecture, requirements, testing, references)",
      "13-14 slide presentation deck",
      "Viva question bank with cheat sheet and pitch script",
      "Architecture diagrams",
    ],
    demoExchange: {
      question: "What does section 3.2 say about the results?",
      answer: "Section 3.2 reports a 14% improvement in accuracy after the retrieval step was added, attributed mainly to reduced ambiguity in multi-part questions.",
      citation: "Source: page 12",
    },
    faq: [
      { q: "Does it work with scanned PDFs?", a: "It works best with text-based PDFs. Scanned/image-only PDFs need OCR, which isn't included by default but can be added." },
      { q: "How long does setup take?", a: "Under 10 minutes with the included instructions — it's a standard Python + pip install." },
    ],
  },
  {
    slug: "chat-with-youtube",
    category: "ai-ml",
    title: "Chat with YouTube",
    tagline: "Ask questions about any YouTube video, jump straight to the moment it's answered.",
    description:
      "Paste a YouTube link and ask questions about the video's content — every answer cites the exact timestamp, and clicking it jumps the embedded player straight there. Handles videos without captions too, using a three-layer fallback that includes automatic transcription.",
    techStack: ["Streamlit", "youtube-transcript-api", "yt-dlp", "Groq Whisper", "FAISS", "Groq API"],
    features: [
      "Works even on videos with captions disabled (automatic transcription fallback)",
      "Clickable timestamp citations that jump the video player",
      "Supports loading multiple videos into one session",
      "Hybrid retrieval — correctly matches years, dates, and quoted phrases",
    ],
    whatIncluded: [
      "Full working Streamlit application",
      "8-chapter Word report",
      "14-slide presentation deck",
      "Viva question bank with cheat sheet and pitch script",
      "Architecture + query-routing diagrams",
    ],
    demoExchange: {
      question: "What did the speaker say about scaling laws?",
      answer: "They describe how model performance improves predictably as compute, data, and parameters scale up together.",
      citation: "Source: \u201cScaling Laws Explained\u201d, at 14:22",
    },
    faq: [
      { q: "Does it work on any YouTube video?", a: "Yes — it uses YouTube's captions when available, and falls back to automatic transcription when they're not." },
      { q: "Can I load more than one video?", a: "Yes, and questions can pull answers from whichever video is actually relevant." },
    ],
  },
  {
    slug: "chat-with-data",
    category: "ai-ml",
    title: "Chat with Data",
    tagline: "Ask for a chart or a number, in plain English — over your own spreadsheet.",
    description:
      "Upload a CSV or multi-sheet Excel file and ask analytical questions directly: \u201cwhat % of contribution is male vs female this month\u201d becomes a working chart, computed from your actual data. Writes and safely runs real pandas/Plotly code for every question, rather than picking from fixed templates.",
    techStack: ["Streamlit", "pandas", "Plotly", "openpyxl", "Groq API"],
    features: [
      "Handles genuinely open-ended questions, not a fixed chart menu",
      "Multi-sheet Excel support — the system writes its own joins across sheets",
      "Answers as a chart or a direct number/table, whichever fits the question",
      "Shows the exact generated code behind every answer",
    ],
    whatIncluded: [
      "Full working Streamlit application",
      "8-chapter Word report",
      "14-slide presentation deck",
      "Viva question bank with cheat sheet and pitch script",
      "3 ready-made sample datasets for your demo",
    ],
    demoExchange: {
      question: "Male vs female % contribution this month?",
      answer: "Generates a pie chart: Female 59.5% / Male 40.5%, computed directly from your data.",
      citation: "Code shown alongside every answer",
    },
    faq: [
      { q: "Does it work with Excel files that have multiple sheets?", a: "Yes — every sheet becomes its own table, and it can join across them when a question needs it." },
      { q: "What if the question is ambiguous or the code fails?", a: "It automatically retries with the error message, up to 2 extra attempts, before reporting back clearly." },
    ],
  },
  {
    slug: "resume-jd-matcher",
    category: "ai-ml",
    title: "Resume / JD Matcher",
    tagline: "An explainable ATS match score — not just a number, a reason.",
    description:
      "Upload a resume and paste a job description to get a match score broken into four named, weighted components — skill match, semantic fit, experience, and education — plus specific missing skills and concrete improvement suggestions. Built to be auditable: every score traces back to a visible reason, not one opaque AI judgement.",
    techStack: ["Streamlit", "pymupdf4llm", "python-docx", "sentence-transformers", "Plotly", "Groq API"],
    features: [
      "Score breakdown shown as a radar chart across 4 components",
      "Semantic skill matching — recognizes \u201cML\u201d and \u201cMachine Learning\u201d as the same skill",
      "Lists specific missing must-have and nice-to-have skills by name",
      "Generates specific, non-generic improvement suggestions",
    ],
    whatIncluded: [
      "Full working Streamlit application",
      "8-chapter Word report (including the scoring methodology)",
      "14-slide presentation deck",
      "Viva question bank with cheat sheet and pitch script",
      "Sample resume + 2 job descriptions for your demo",
    ],
    demoExchange: {
      question: "Score my resume against this Backend Developer JD",
      answer: "82/100 \u2014 strong skill match, one gap: Docker isn't listed anywhere in your resume.",
      citation: "Full breakdown shown as a radar chart",
    },
    faq: [
      { q: "Does it work with any resume format?", a: "PDF and DOCX are both supported directly." },
      { q: "Is the score comparable to a real company's ATS?", a: "It's a documented, explainable estimate — not a copy of any specific company's proprietary system." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
