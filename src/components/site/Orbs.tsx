import { motion, useReducedMotion } from "motion/react";

/** Abstract holographic shapes drifting behind content. */
export function Orbs() {
  const reduce = useReducedMotion();
  const shapes = [
    { c: "oklch(0.85 0.16 197 / 0.35)", size: 460, x: "-12%", y: "6%", d: 22 },
    { c: "oklch(0.7 0.25 330 / 0.28)", size: 380, x: "70%", y: "48%", d: 28 },
    { c: "oklch(0.62 0.22 292 / 0.3)", size: 520, x: "34%", y: "-18%", d: 34 },
  ];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {shapes.map((s, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[90px]"
          style={{
            width: s.size,
            height: s.size,
            left: s.x,
            top: s.y,
            background: `radial-gradient(circle at 35% 35%, ${s.c}, transparent 70%)`,
          }}
          animate={reduce ? {} : { y: [0, -40, 0], x: [0, 24, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: s.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      <motion.div
        className="absolute left-[8%] top-[58%] h-28 w-28 border border-primary/25"
        style={{ transformStyle: "preserve-3d" }}
        animate={reduce ? {} : { rotateX: 360, rotateY: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute right-[10%] top-[22%] h-20 w-20 rounded-full border border-accent/30"
        animate={reduce ? {} : { rotate: 360, scale: [1, 1.25, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}
