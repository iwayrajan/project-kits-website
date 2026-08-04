import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProject } from "@/lib/projects";
import { site } from "@/lib/site";
import ChatMockup from "@/components/ChatMockup";
import StampBadge from "@/components/StampBadge";
import FaqAccordion from "@/components/FaqAccordion";
import PricingTiers from "@/components/PricingTiers";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return notFound();

  return (
    <div>
      {/* Breadcrumb */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-8">
        <Link href="/#projects" className="text-sm text-ink-light hover:text-ink transition-colors">
          &larr; All project kits
        </Link>
      </div>

      {/* Header */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-6 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              {project.title}
            </h1>
            <p className="text-ink-light mt-3 text-lg leading-relaxed">{project.tagline}</p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {project.techStack.map((t) => (
                <span
                  key={t}
                  className="font-display text-xs rounded-sm bg-paper-raised border border-line px-2 py-1 text-ink-light"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <WhatsAppButtonInline project={project.title} />
            </div>
          </div>
          <div className="relative">
            <ChatMockup {...project.demoExchange} />
            <StampBadge className="absolute -top-6 -right-4 sm:-right-8 bg-paper w-24 h-24 sm:w-28 sm:h-28" text="TESTED" />
          </div>
        </div>
      </section>

      {/* Screenshots gallery */}
      <section className="border-y border-line bg-paper-raised">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
          <h2 className="font-display text-xl font-bold text-ink mb-6">Screenshots</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[1, 2, 3].map((n) => (
              <div key={n} className="relative aspect-video rounded-lg border border-line bg-paper overflow-hidden">
                <Image
                  src={`/projects/${project.slug}/screenshot-${n}.jpg`}
                  alt={`${project.title} screenshot ${n}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + features */}
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="font-display text-xl font-bold text-ink mb-4">What it does</h2>
            <p className="text-ink-light leading-relaxed">{project.description}</p>

            <h2 className="font-display text-xl font-bold text-ink mt-10 mb-4">Features</h2>
            <ul className="space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-ink-light">
                  <span className="text-signal-green font-display mt-0.5">{"\u2713"}</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-line bg-paper-raised p-6 h-fit">
            <h3 className="font-display font-semibold text-ink mb-4">What&apos;s included</h3>
            <ul className="space-y-2.5 text-sm">
              {project.whatIncluded.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-ink-light">
                  <span className="text-stamp-red font-display mt-0.5">{"\u2713"}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <WhatsAppButtonInline project={project.title} full />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-paper-raised border-y border-line">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
          <h2 className="font-display text-xl font-bold text-ink mb-2">Pricing</h2>
          <p className="text-ink-light mb-8">Same pricing tiers across every project kit.</p>
          <PricingTiers />
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-2xl px-5 sm:px-8 py-16">
        <h2 className="font-display text-xl font-bold text-ink mb-6">Questions about this project</h2>
        <FaqAccordion items={project.faq} />
      </section>
    </div>
  );
}

function WhatsAppButtonInline({ project, full = false }: { project: string; full?: boolean }) {
  const text = encodeURIComponent(`Hi! I'm interested in the ${project} project kit.`);
  const href = `https://wa.me/${site.whatsappNumber}?text=${text}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-sm bg-signal-green text-paper-raised px-5 py-3 font-display text-sm font-medium hover:brightness-110 transition-all ${
        full ? "w-full" : ""
      }`}
    >
      Ask about this project on WhatsApp
    </a>
  );
}
