import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const LINES = [
  "BOOT /dev/mxttia — core online",
  "INITIALIZING DIGITAL ARCHIVE...",
  "MOUNTING VISUAL SYSTEMS...",
  "DECRYPTING 2024–2026 RENDER CACHE...",
  "CALIBRATING NEON SPECTRUM...",
  "READY.",
];

export function BootScreen() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("mxttia_boot") === "1") {
      setDone(true);
      return;
    }
    const timers: ReturnType<typeof setTimeout>[] = [];
    LINES.forEach((_, i) => {
      timers.push(setTimeout(() => setStep(i + 1), 220 + i * 320));
    });
    timers.push(
      setTimeout(
        () => {
          sessionStorage.setItem("mxttia_boot", "1");
          setDone(true);
        },
        260 + LINES.length * 320,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="boot"
          exit={{ opacity: 0, filter: "blur(14px)", scale: 1.04 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background scanlines"
        >
          <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />
          <div className="relative w-full max-w-lg px-8">
            <div className="mb-8 flex items-baseline justify-between">
              <span className="label-xs">mxttia.system</span>
              <span className="label-xs">v2.050</span>
            </div>
            <ul className="space-y-2">
              {LINES.slice(0, step).map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-mono text-[11px] tracking-[0.14em] text-muted-foreground"
                >
                  <span className="text-primary">{">"}</span> {l}
                  {i === LINES.length - 1 && (
                    <span className="ml-1 inline-block text-primary animate-blink">_</span>
                  )}
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 h-px w-full overflow-hidden bg-border">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${(step / LINES.length) * 100}%` }}
                transition={{ ease: "linear", duration: 0.3 }}
                className="h-px bg-primary glow-neon"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
