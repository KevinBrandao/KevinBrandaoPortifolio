"use client";

import { useState } from "react";
import type { Project } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

type Focus = Project["focus"][number];

const labels: Record<Focus, string> = {
  IA: "Inteligência Artificial",
  Saúde: "Saúde",
  Automação: "Automação",
  Integração: "Integração",
  QA: "Qualidade",
  Desenvolvimento: "Desenvolvimento",
};

/** Grade uniforme de projetos, com filtro por área. */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Focus | null>(null);
  const available = (Object.keys(labels) as Focus[]).filter((f) => projects.some((p) => p.focus.includes(f)));
  const visible = filter ? projects.filter((p) => p.focus.includes(filter)) : projects;

  const options: { value: Focus | null; label: string; count: number }[] = [
    { value: null, label: "Todos 119 + ", count: projects.length },
    ...available.map((f) => ({ value: f, label: labels[f], count: projects.filter((p) => p.focus.includes(f)).length })),
  ];

  return (
    <div>
      <div role="group" aria-label="Filtrar projetos por área" className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = filter === opt.value;
          return (
            <button
              key={opt.label}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(opt.value)}
              className={`inline-flex min-h-10 items-center gap-2 rounded-full border px-4 text-sm transition-colors ${
                active
                  ? "border-accent/60 bg-accent/10 text-fg"
                  : "border-line text-muted hover:border-line-strong hover:text-fg"
              }`}
            >
              {opt.label}
              <span className="font-mono text-[0.7rem] text-muted">{opt.count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? "projeto exibido" : "projetos exibidos"}
      </p>

      <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <ProjectCard project={p} />
          </li>
        ))}
      </ul>
    </div>
  );
}
