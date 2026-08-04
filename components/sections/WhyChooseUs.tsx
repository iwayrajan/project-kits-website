import FadeIn from "@/components/motion/FadeIn";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const COMPARISON = [
  {
    theirs: "A zip file with code and nothing else",
    ours: "Code, an 8-chapter report, a slide deck, and a viva question bank — one complete submission package",
  },
  {
    theirs: "Generic documentation that doesn't match the actual code",
    ours: "Every report and deck is written to describe the exact architecture in that specific codebase",
  },
  {
    theirs: "No way to verify it works before you pay",
    ours: "A real demo Q&A shown on every project page, and we'll show you more on request before you buy",
  },
  {
    theirs: "Silence after payment if something breaks",
    ours: "WhatsApp support included until you've actually submitted, not just until payment clears",
  },
  {
    theirs: "The same generic project every classmate can also buy",
    ours: "Guidance on customizing the demo domain, dataset, and framing so submissions don't look identical",
  },
  {
    theirs: "Generic interview-prep questions, if any",
    ours: "A question bank built from the specific design decisions in your exact project, not generic trivia",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-void-raised border-y border-border">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-24">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan">The difference</p>
          <h2 className="font-display text-3xl font-bold text-text mt-3 max-w-2xl">
            What you get here vs. a random project seller
          </h2>
          <p className="text-text-muted mt-3 max-w-2xl leading-relaxed">
            There&apos;s no shortage of people selling college project code online.
            The gap is almost never the code itself &mdash; it&apos;s everything around
            it: whether it actually runs, whether the documentation matches
            what you&apos;re submitting, and whether you can defend it when
            you&apos;re asked a direct question about it.
          </p>
        </FadeIn>

        <StaggerGroup className="grid sm:grid-cols-2 gap-4 mt-12">
          {COMPARISON.map((row, i) => (
            <StaggerItem key={i}>
              <div className="rounded-xl glass p-5 h-full">
                <div className="flex items-start gap-3 pb-3 border-b border-border">
                  <span className="text-text-faint font-mono text-xs mt-0.5 shrink-0">TYPICAL</span>
                  <p className="text-sm text-text-faint leading-relaxed">{row.theirs}</p>
                </div>
                <div className="flex items-start gap-3 pt-3">
                  <span className="text-cyan font-mono text-xs mt-0.5 shrink-0">HERE</span>
                  <p className="text-sm text-text leading-relaxed">{row.ours}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
