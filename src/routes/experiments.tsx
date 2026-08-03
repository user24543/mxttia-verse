import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Orbs } from "@/components/site/Orbs";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { EXPERIMENTS } from "@/data/works";

export const Route = createFileRoute("/experiments")({
  head: () => ({
    meta: [
      { title: "Experiments — MATTIA / Digital Artist" },
      {
        name: "description",
        content:
          "An open archive of unfinished renders, procedural sketches and realtime systems by Mattia.",
      },
      { property: "og:title", content: "Experiments — MATTIA / Digital Artist" },
      {
        property: "og:description",
        content: "Unfinished renders, procedural sketches and realtime systems.",
      },
    ],
  }),
  component: ExperimentsPage,
});

function ExperimentsPage() {
  const [hover, setHover] = useState<string | null>(null);

  return (
    <main className="relative min-h-screen overflow-hidden pb-40 pt-32">
      <Orbs />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionLabel index="03" title="experiments" />

        <Reveal className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-md text-xs leading-relaxed text-muted-foreground">
            /archive/experiments — sketches, dead ends and systems still running. nothing here is
            finished, that's the point.
          </p>
          <span className="label-xs">
            {EXPERIMENTS.length} entries <span className="text-primary animate-blink">_</span>
          </span>
        </Reveal>

        <div className="overflow-hidden rounded-sm border border-border">
          <div className="grid grid-cols-[5.5rem_1fr_auto] gap-4 border-b border-border bg-surface/40 px-5 py-3">
            <span className="label-xs">id</span>
            <span className="label-xs">name</span>
            <span className="label-xs">state</span>
          </div>
          {EXPERIMENTS.map((e, i) => (
            <motion.div
              key={e.id}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onPointerEnter={() => setHover(e.id)}
              onPointerLeave={() => setHover(null)}
              className="relative grid grid-cols-[5.5rem_1fr_auto] items-center gap-4 border-b border-border/60 px-5 py-4 last:border-b-0 transition-colors duration-500 hover:bg-surface/60"
            >
              <span className="text-[10px] tracking-[0.18em] text-muted-foreground">{e.id}</span>
              <div className="min-w-0">
                <span className="block truncate text-xs tracking-[0.12em] text-foreground">
                  {e.title}
                </span>
                <span className="label-xs">
                  {e.tag} · {e.size}
                </span>
              </div>
              <span
                className={`rounded-full border px-3 py-1 text-[9px] uppercase tracking-[0.2em] ${
                  e.state === "live"
                    ? "border-primary/50 text-primary"
                    : e.state === "wip"
                      ? "border-accent/50 text-accent"
                      : "border-border text-muted-foreground"
                }`}
              >
                {e.state}
              </span>
              {hover === e.id && (
                <motion.span
                  layoutId="exp-scan"
                  className="pointer-events-none absolute inset-y-0 left-0 w-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10"
                />
              )}
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-8">
          <span className="label-xs">
            end of index · archive mirrored nightly · milan node
          </span>
        </Reveal>
      </div>
    </main>
  );
}
