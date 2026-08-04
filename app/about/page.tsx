import { site } from "@/lib/site";
import { projects } from "@/lib/projects";
import StampBadge from "@/components/StampBadge";

export default function AboutPage() {
  return (
    <div>
      <section className="mx-auto max-w-3xl px-5 sm:px-8 pt-16 pb-14">
        <p className="font-display text-xs font-medium uppercase tracking-wider text-stamp-red">
          Why trust this
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink mt-3 leading-tight">
          You&apos;re about to send money to someone you found on Instagram.
          <br />
          Here&apos;s why that&apos;s reasonable.
        </h1>

        <div className="mt-10 space-y-6 text-ink-light leading-relaxed">
          <p>
            {/* TODO: replace this paragraph with your real background/credentials — this is a placeholder */}
            I&apos;m a software engineer who builds these project kits myself, end to
            end &mdash; the code, the report, the presentation, and the viva
            question bank. Every project on this site is one I&apos;ve personally
            built, tested, and used to write the documentation for. Nothing here
            is outsourced or resold.
          </p>
          <p>
            That matters because it means every kit comes with real, working
            code and documentation that matches it exactly &mdash; not a generic
            template with your name swapped in.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-3 gap-5">
          {site.trustPoints.map((t) => (
            <div key={t.label} className="rounded-lg border border-line bg-paper-raised p-5">
              <p className="font-display text-3xl font-bold text-ink">{t.stat}</p>
              <p className="text-sm text-ink-light mt-1">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
          <h2 className="font-display text-xl font-bold text-ink mb-6">
            Every kit passes the same bar before it&apos;s listed
          </h2>
          <div className="space-y-5">
            <ChecklistItem
              title="Working code, tested end to end"
              desc="Every project's test cases are documented in its report — you can see exactly what was tested before you buy."
            />
            <ChecklistItem
              title="Documentation that matches the code"
              desc="The report and slide deck are generated to describe the exact architecture in the codebase, not a generic template."
            />
            <ChecklistItem
              title="A viva question bank built for it"
              desc="Not generic interview questions — questions specific to the design decisions in that exact project, so you can actually defend it."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-5 sm:px-8 py-14">
        <h2 className="font-display text-xl font-bold text-ink mb-2">What&apos;s actually in a kit</h2>
        <p className="text-ink-light mb-6">
          Using {projects[0].title} as an example — every project follows the same structure.
        </p>
        <ul className="space-y-2.5">
          {projects[0].whatIncluded.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-ink-light">
              <span className="text-signal-green font-display mt-0.5">{"\u2713"}</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-paper-raised border-t border-line">
        <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="relative">
            <StampBadge text="STILL UNSURE?" className="w-32 h-32" />
          </div>
          <div className="flex-1">
            <p className="text-ink-light">
              Message us before paying &mdash; ask to see the actual report or
              a screen recording of the demo for the project you&apos;re
              considering. That&apos;s a completely reasonable ask.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChecklistItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex gap-3">
      <span className="text-signal-green font-display text-lg mt-0.5 shrink-0">{"\u2713"}</span>
      <div>
        <p className="font-medium text-ink">{title}</p>
        <p className="text-sm text-ink-light mt-1 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
