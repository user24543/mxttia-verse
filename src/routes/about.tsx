import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Orbs } from "@/components/site/Orbs";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { TIMELINE, TOOLS } from "@/data/works";
import profile from "@/assets/profile.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — MATTIA / Digital Artist" },
      {
        name: "description",
        content:
          "Mattia is a digital artist exploring the intersection between technology, visual culture and futuristic experiences.",
      },
      { property: "og:title", content: "About — MATTIA / Digital Artist" },
      {
        property: "og:description",
        content: "Technology, visual culture and futuristic experiences — from Milan.",
      },
    ],
  }),
  component: AboutPage,
});

const SKILLS = [
  "3d design",
  "procedural systems",
  "realtime visuals",
  "art direction",
  "print & apparel",
  "color grading",
  "sound-reactive",
  "generative",
];

function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden pb-40 pt-32">
      <Orbs />
      <div className="relative mx-auto max-w-4xl px-6">
        <SectionLabel index="02" title="about" />

        <Reveal className="flex items-center gap-4">
          <img
            src={profile.url}
            alt="Mattia profile avatar"
            className="h-14 w-14 rounded-sm border border-primary/40 object-cover glow-neon"
          />
          <span className="label-xs">mattia · milan · 2026</span>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-10 font-display text-2xl leading-[1.35] tracking-[-0.01em] sm:text-4xl">
            <span className="text-chrome">Mattia is a digital artist exploring </span>
            <span className="text-holo">the intersection between technology, visual culture</span>
            <span className="text-chrome"> and futuristic experiences.</span>
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground">
            no studio, no agency. one machine, a render queue that never sleeps, and a growing
            archive of objects that shouldn't exist.
          </p>
        </Reveal>

        <div className="mt-24">
          <span className="label-xs">timeline</span>
          <div className="mt-6 space-y-0">
            {TIMELINE.map((t, i) => (
              <Reveal key={`${t.year}-${t.title}`} delay={i * 0.08}>
                <div className="group relative grid grid-cols-[4.5rem_1fr] gap-6 border-l border-border py-6 pl-6 transition-colors duration-500 hover:border-primary">
                  <motion.span
                    className="absolute -left-[3px] top-8 h-1.5 w-1.5 rounded-full bg-primary"
                    animate={{ opacity: [0.35, 1, 0.35] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
                  />
                  <span className="font-display text-lg text-primary">{t.year}</span>
                  <div>
                    <h3 className="text-sm uppercase tracking-[0.2em] text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{t.note}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <span className="label-xs">skills</span>
          <div className="mt-6 flex flex-wrap gap-2">
            {SKILLS.map((s, i) => (
              <Reveal key={s} delay={i * 0.04} y={10}>
                <span className="glass rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-500 hover:border-accent/60 hover:text-foreground">
                  {s}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <span className="label-xs">software</span>
          <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2">
            {TOOLS.map((t, i) => (
              <Reveal key={t} delay={i * 0.04} y={8}>
                <div className="group flex h-full items-center justify-between bg-background px-5 py-4 transition-colors duration-500 hover:bg-surface">
                  <span className="text-xs tracking-[0.14em] text-foreground">{t}</span>
                  <span className="text-[10px] text-muted-foreground transition-colors group-hover:text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
