import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

function SocialIcon({ href, label, path }: { href: string; label: string; path: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-text-muted hover:text-cyan hover:border-cyan/40 transition-colors"
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d={path} />
      </svg>
    </a>
  );
}

const ICONS = {
  instagram:
    "M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.9 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.35 2.63 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.63 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.35-2.63-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1 0 12 18.16 6.16 6.16 0 0 0 12 5.84zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.84a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  github:
    "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23.96-.27 1.98-.4 3-.4s2.04.13 3 .4c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z",
  linkedin:
    "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z",
  mail: "M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.24l8 6.66 8-6.66V18H4z",
};

export default function Footer() {
  return (
    <footer className="border-t border-border bg-void-raised mt-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10">
          <div>
            <Link href="/" className="font-display font-bold text-lg text-text flex items-center gap-2.5">
              <Image src="/logo-icon.svg" alt="" width={28} height={28} className="rounded-md" />
              Final<span className="text-gradient">Year</span>Kit
            </Link>
            <p className="text-sm text-text-muted mt-3 max-w-xs leading-relaxed">{site.tagline}</p>
            <div className="flex items-center gap-3 mt-5">
              <SocialIcon href={`https://instagram.com/${site.instagramHandle}`} label="Instagram" path={ICONS.instagram} />
              <SocialIcon href={`https://github.com/${site.githubHandle}`} label="GitHub" path={ICONS.github} />
              <SocialIcon href={`https://linkedin.com/in/${site.linkedinHandle}`} label="LinkedIn" path={ICONS.linkedin} />
              <SocialIcon href={`mailto:${site.email}`} label="Email" path={ICONS.mail} />
            </div>
          </div>

          {site.footer.columns.map((col) => (
            <div key={col.title}>
              <p className="font-display text-sm font-semibold text-text mb-4">{col.title}</p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-text-muted hover:text-cyan transition-colors inline-flex items-center gap-2">
                      {link.label}
                      {"badge" in link && link.badge && (
                        <span className="font-mono text-[10px] uppercase tracking-wider bg-violet/15 text-violet px-1.5 py-0.5 rounded-sm">
                          {link.badge}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-border flex flex-col gap-4">
          <p className="text-xs text-text-faint leading-relaxed max-w-3xl">{site.footer.disclaimer}</p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-xs text-text-faint font-mono">
              &copy; {new Date().getFullYear()} {site.brandName}. All rights reserved.
            </p>
            <p className="text-xs text-text-faint font-mono">Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
