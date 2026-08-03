import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

const ITEMS = [
  { to: "/", label: "index", code: "00" },
  { to: "/work", label: "work", code: "01" },
  { to: "/about", label: "about", code: "02" },
  { to: "/experiments", label: "experiments", code: "03" },
  { to: "/contact", label: "contact", code: "04" },
] as const;

export function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [clock, setClock] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setClock(
        new Date().toLocaleTimeString("it-IT", {
          hour12: false,
          timeZone: "Europe/Rome",
        }),
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-[70] hidden items-center justify-between px-6 py-5 md:flex">
        <Link
          to="/"
          className="pointer-events-auto font-display text-sm font-semibold uppercase tracking-[0.4em] text-chrome"
        >
          mxttia
        </Link>
        <span className="label-xs pointer-events-none">
          milan · {clock} <span className="text-primary">●</span> online
        </span>
      </div>

      <motion.nav
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 bottom-4 z-[75] flex justify-center px-4 md:bottom-7"
      >
        <div className="glass-strong flex items-center gap-1 rounded-full px-2 py-2 shadow-[var(--shadow-panel)]">
          {ITEMS.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                className="relative rounded-full px-3 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors sm:px-4"
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-primary/50 bg-primary/10 glow-neon"
                  />
                )}
                <span
                  className={
                    active
                      ? "relative text-primary"
                      : "relative text-muted-foreground transition-colors hover:text-foreground"
                  }
                >
                  <span className="mr-1 hidden opacity-50 sm:inline">{item.code}</span>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
