import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ParticleField } from "@/components/site/ParticleField";
import { Orbs } from "@/components/site/Orbs";
import { Magnetic } from "@/components/site/Magnetic";
import { Reveal } from "@/components/site/Reveal";
import { WORKS, CATEGORIES } from "@/data/works";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MATTIA — Digital Artist / Milan" },
      {
        name: "description",
        content:
          "Creating digital worlds, visuals and experiences. Selected 3D art, motion design and live visuals by Mattia, digital artist in Milan.",
      },
      { property: "og:title", content: "MATTIA — Digital Artist / Milan" },
      {
        property: "og:description",
        content: "Creating digital worlds, visuals and experiences.",
      },
    ],
  }),
  component: Index,
});

const TITLE = "MATTIA";

function Index() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <main className="relative">
      <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden">
        <div className="absolute inset-0 grid-lines opacity-30" />
        <Orbs />
        <motion.div style={{ scale }} className="absolute inset-0">
          <ParticleField />
        </motion.div>

        <motion.div
          style={{ y, opacity: fade }}
          className="relative mx-auto w-full max-w-6xl px-6 pb-28 pt-24"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="label-xs mb-6"
          >
            digital artist / milan, 2026
          </motion.p>

          <h1 className="font-display text-[18vw] font-bold leading-[0.82] tracking-[-0.04em] sm:text-[15vw] lg:text-[13rem]">
            <span className="sr-only">Mattia — digital artist</span>
            <span aria-hidden className="flex flex-wrap">
              {TITLE.split("").map((c, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 90, rotateX: -70, filter: "blur(14px)" }}
                  animate={{ opacity: 1, y: 0, rotateX: 0, filter: "blur(0px)" }}
                  transition={{
                    delay: 0.45 + i * 0.07,
                    duration: 1.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="inline-block text-chrome hover:text-holo"
                >
                  {c}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              creating digital worlds, visuals
              <br />
              and experiences.
            </p>

            <Magnetic className="self-start sm:self-auto">
              <Link
                to="/work"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-primary/40 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-primary transition-colors hover:bg-primary/10 glow-neon"
              >
                enter archive
                <span className="transition-transform duration-500 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <span className="label-xs">scroll</span>
        </motion.div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-40">
        <Reveal className="hairline pt-5">
          <div className="flex items-end justify-between gap-6">
            <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-holo sm:text-3xl">
              selected works
            </h2>
            <span className="label-xs shrink-0">[01]</span>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {WORKS.slice(0, 2).map((w, i) => (
            <Reveal key={w.id} delay={i * 0.1}>
              <Link to="/work" className="group block">
                <div className="relative overflow-hidden rounded-sm border border-border/70 transition-colors duration-500 group-hover:border-primary/60">
                  <img
                    src={w.image}
                    alt={w.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover opacity-80 transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06] group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 scanlines opacity-30" />
                </div>
                <div className="mt-3 flex items-baseline justify-between">
                  <span className="text-xs tracking-[0.2em] text-foreground">
                    [{w.code}] {w.title}
                  </span>
                  <span className="label-xs">{w.date}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <span
              key={c}
              className="glass rounded-full px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
            >
              {c}
            </span>
          ))}
        </Reveal>
      </section>
    </main>
  );
}
