import { createFileRoute } from "@tanstack/react-router";
import { Orbs } from "@/components/site/Orbs";
import { ParticleField } from "@/components/site/ParticleField";
import { Magnetic } from "@/components/site/Magnetic";
import { Reveal, SectionLabel } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — MATTIA / Digital Artist" },
      {
        name: "description",
        content: "Let's create something impossible. Reach Mattia by email, Instagram or phone.",
      },
      { property: "og:title", content: "Contact — MATTIA / Digital Artist" },
      { property: "og:description", content: "Let's create something impossible." },
    ],
  }),
  component: ContactPage,
});

const LINKS = [
  { label: "email", value: "unhumanface@gmail.com", href: "mailto:unhumanface@gmail.com" },
  { label: "instagram", value: "@arteillegale", href: "https://www.instagram.com/arteillegale/" },
  { label: "phone", value: "+39 380 651 6673", href: "tel:+393806516673" },
];

function ContactPage() {
  return (
    <main className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-40 pt-32">
      <Orbs />
      <div className="absolute inset-0 opacity-70">
        <ParticleField density={0.7} />
      </div>

      <div className="relative mx-auto w-full max-w-4xl px-6">
        <SectionLabel index="04" title="contact" />

        <Reveal>
          <p className="font-display text-4xl leading-[1.05] tracking-[-0.03em] sm:text-7xl">
            <span className="text-holo">let&apos;s create</span>
            <br />
            <span className="text-chrome">something impossible.</span>
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border">
          {LINKS.map((l, i) => (
            <Reveal key={l.label} delay={i * 0.08}>
              <a
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between bg-background px-6 py-6 transition-colors duration-500 hover:bg-surface"
              >
                <span className="label-xs">{l.label}</span>
                <span className="flex items-center gap-3 text-xs tracking-[0.14em] text-foreground transition-colors group-hover:text-primary sm:text-sm">
                  {l.value}
                  <span className="inline-block transition-transform duration-500 group-hover:translate-x-1">
                    ↗
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14">
          <Magnetic className="inline-block">
            <a
              href="mailto:unhumanface@gmail.com"
              className="inline-flex items-center gap-3 rounded-full border border-accent/50 px-7 py-4 text-[11px] uppercase tracking-[0.28em] text-accent transition-colors hover:bg-accent/10 glow-magenta"
            >
              open transmission →
            </a>
          </Magnetic>
        </Reveal>

        <p className="mt-20 label-xs">© 2026 mattia · milan · all renders reserved</p>
      </div>
    </main>
  );
}
