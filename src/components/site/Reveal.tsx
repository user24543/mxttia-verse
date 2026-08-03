import type { ReactNode } from "react";
import { motion } from "motion/react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Section heading rendered like a system readout. */
export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <Reveal className="mb-10 flex items-end justify-between gap-6 hairline pt-5">
      <h2 className="font-display text-2xl font-semibold uppercase tracking-[0.18em] text-holo sm:text-3xl">
        {title}
      </h2>
      <span className="label-xs shrink-0">[{index}]</span>
    </Reveal>
  );
}
