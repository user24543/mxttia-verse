import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Orbs } from "@/components/site/Orbs";
import { Reveal, SectionLabel } from "@/components/site/Reveal";
import { CATEGORIES, WORKS, type Category } from "@/data/works";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — MATTIA / Digital Artist" },
      {
        name: "description",
        content:
          "Selected works by Mattia: apparel graphics, vinyl and CD 3D design, posters and live visuals.",
      },
      { property: "og:title", content: "Work — MATTIA / Digital Artist" },
      {
        property: "og:description",
        content: "Apparel graphics, vinyl and CD 3D design, posters and live visuals.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const items = WORKS.filter((w) => filter === "all" || w.category === filter);

  return (
    <main className="relative min-h-screen overflow-hidden pb-40 pt-32">
      <Orbs />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionLabel index="01" title="work" />

        <Reveal className="mb-12 flex flex-wrap gap-2">
          {(["all", ...CATEGORIES] as const).map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c as Category | "all")}
              className={`rounded-full border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                filter === c
                  ? "border-primary/60 bg-primary/10 text-primary glow-neon"
                  : "border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </Reveal>

        <div className="grid gap-8">
          <AnimatePresence mode="popLayout">
            {items.map((w, i) => (
              <motion.article
                key={w.id}
                layout
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div
                  className="relative overflow-hidden rounded-sm border border-border/70 transition-all duration-700 group-hover:border-primary/60 group-hover:shadow-[var(--shadow-panel)]"
                  style={{ perspective: "1200px" }}
                >
                  <img
                    src={w.image}
                    alt={w.alt}
                    loading="lazy"
                    className="max-h-[70vh] w-full object-cover opacity-75 transition-all duration-[1100ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] group-hover:opacity-100"
                  />
                  <div className="pointer-events-none absolute inset-0 scanlines opacity-30" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                  <div className="absolute left-5 top-5 flex items-center gap-3">
                    <span className="glass rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-primary">
                      {w.category}
                    </span>
                  </div>
                  <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-end justify-between gap-4">
                    <h3 className="font-display text-3xl font-semibold uppercase tracking-[0.06em] text-chrome sm:text-5xl">
                      [{w.code}] {w.title}
                    </h3>
                    <span className="label-xs">{w.date}</span>
                  </div>
                </div>

                <div className="mt-4 grid gap-2 text-xs text-muted-foreground sm:grid-cols-[10rem_1fr]">
                  <span className="label-xs">medium</span>
                  <span>{w.medium}</span>
                  <span className="label-xs">notes</span>
                  <span className="max-w-xl leading-relaxed">{w.notes}</span>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
