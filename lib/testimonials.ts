// testimonials.ts
//
// IMPORTANT: there are no real customer testimonials here on purpose. The
// entries below are clearly-labeled PLACEHOLDER TEMPLATES showing the shape
// and tone of a good testimonial, not real customer quotes. Do not present
// these as genuine reviews \u2014 replace every entry with a real testimonial
// (with the customer's permission) before this section goes live, or the
// section undermines the exact trust problem this site exists to solve.

export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  isPlaceholder: true;
};

export const testimonials: Testimonial[] = [
  {
    quote: "[Placeholder \u2014 replace with a real testimonial about the setup being straightforward and support being responsive.]",
    name: "[Student name, with permission]",
    meta: "[College / branch]",
    isPlaceholder: true,
  },
  {
    quote: "[Placeholder \u2014 replace with a real testimonial about the report/deck being genuinely useful for the viva.]",
    name: "[Student name, with permission]",
    meta: "[College / branch]",
    isPlaceholder: true,
  },
  {
    quote: "[Placeholder \u2014 replace with a real testimonial about the code actually working out of the box.]",
    name: "[Student name, with permission]",
    meta: "[College / branch]",
    isPlaceholder: true,
  },
];
