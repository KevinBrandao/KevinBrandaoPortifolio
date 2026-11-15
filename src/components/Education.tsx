import { GraduationCap } from "lucide-react";
import { education, languages, learning } from "@/data/career";
import { Reveal } from "./Reveal";
import { Section, Serif } from "./Section";

export function Education() {
  return (
    <Section
      id="formacao"
      index="03"
      label="formação"
      title={
        <>
          Formação e <Serif>aprendizado contínuo.</Serif>
        </>
      }
      lead="Uma pós-graduação, duas graduações e um curso técnico, somados a cursos complementares ao longo do caminho."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {education.map((ed, i) => {
          const done = ed.status === "Concluído";
          return (
            <li key={ed.course}>
              <Reveal delay={i * 0.05} className="card flex h-full flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                    <GraduationCap className="size-4 text-accent" aria-hidden="true" />
                    {ed.level}
                  </span>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 font-mono text-[0.7rem] ${
                      done ? "border-line text-muted" : "border-accent/50 text-accent"
                    }`}
                  >
                    {done ? `Concluído · ${ed.year}` : "Em andamento"}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-medium tracking-tight text-balance">{ed.course}</h3>
                <p className="mt-auto pt-4 text-sm text-muted">
                  <span className="text-fg">{ed.short}</span> · {ed.institution}
                </p>
              </Reveal>
            </li>
          );
        })}
      </ul>

      <Reveal className="mt-14">
        <h3 className="font-mono text-xs tracking-wider text-muted">
          <span className="text-accent">+</span> cursos e especializações por área
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {learning.map((group) => (
          <div key={group.category} className="bg-surface p-6">
            <h4 className="font-medium">{group.category}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-baseline justify-between gap-4">
                  <span>{item.name}</span>
                  <span className="shrink-0 font-mono text-[0.7rem]">{item.year ?? item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="bg-surface p-6">
          <h4 className="font-medium">Idiomas</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {languages.map((lang) => (
              <li key={lang.name} className="flex items-baseline justify-between gap-4">
                <span>{lang.name}</span>
                <span className="shrink-0 font-mono text-[0.7rem]">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
