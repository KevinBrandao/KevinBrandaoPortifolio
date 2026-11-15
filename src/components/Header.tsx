"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { FileText, Menu, Moon, Sun, X } from "lucide-react";
import { Monogram } from "./icons";

const nav = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
];

const isCurrent = (pathname: string, href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

function ThemeToggle() {
  const toggle = () => {
    const root = document.documentElement;
    const next = root.dataset.theme === "light" ? "dark" : "light";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Alternar entre tema claro e escuro"
      className="grid size-10 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-accent hover:text-fg"
    >
      <Sun className="hidden size-4 [[data-theme=dark]_&]:block" aria-hidden="true" />
      <Moon className="hidden size-4 [[data-theme=light]_&]:block" aria-hidden="true" />
    </button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open ? "border-b border-line bg-bg/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5 font-medium tracking-tight" onClick={() => setOpen(false)}>
          <Monogram className="size-7" />
          <span>Kevin Brandão</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-0.5 rounded-full border border-line bg-surface/50 p-1 backdrop-blur-md">
            {nav.map((item) => {
              const active = isCurrent(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`relative block rounded-full px-4 py-1.5 text-sm transition-colors hover:text-fg ${
                      active ? "text-fg" : "text-muted"
                    }`}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full border border-line-strong bg-fg/[0.07]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/curriculo"
            className="hidden h-10 items-center gap-2 rounded-lg border border-line px-3.5 text-sm text-muted transition-colors hover:border-accent hover:text-fg md:inline-flex"
          >
            <FileText className="size-4" aria-hidden="true" /> Currículo
          </Link>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="grid size-10 place-items-center rounded-lg border border-line text-fg md:hidden"
          >
            {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progress }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-accent to-accent-2"
        aria-hidden="true"
      />

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            aria-label="Navegação principal"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden md:hidden"
          >
            <ul className="mx-auto max-w-6xl px-5 pb-6 pt-2 sm:px-8">
              {[...nav, { href: "/curriculo", label: "Currículo" }].map((item, i) => {
                const active = isCurrent(pathname, item.href);
                return (
                  <li key={item.href} className="border-b border-line last:border-0">
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      aria-current={active ? "page" : undefined}
                      className={`flex items-center justify-between py-3.5 text-lg ${active ? "text-accent" : ""}`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-muted">0{i + 1}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
