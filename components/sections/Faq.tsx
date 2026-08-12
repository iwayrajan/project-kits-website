import FaqAccordion from "@/components/FaqAccordion";
import FadeIn from "@/components/motion/FadeIn";
import { HOME_FAQ } from "@/lib/faq";

export default function Faq() {
  return (
    <section id="faq" className="bg-void-raised border-t border-border">
      <div className="mx-auto max-w-2xl px-5 sm:px-8 py-24">
        <FadeIn>
          <h2 className="font-display text-3xl font-bold text-text">Common questions</h2>
        </FadeIn>
        <FadeIn delay={0.1} className="mt-10">
          <FaqAccordion items={HOME_FAQ} />
        </FadeIn>
      </div>
    </section>
  );
}
