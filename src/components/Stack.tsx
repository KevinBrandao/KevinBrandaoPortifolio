import { BrainCircuit, CodeXml, Database, ShieldCheck, Workflow } from "lucide-react";
import { stack } from "@/data/career";
import { Reveal } from "./Reveal";
import { Section, Serif } from "./Section";

const icons = [ShieldCheck, CodeXml, Database, Workflow, BrainCircuit];

export function Stack() {
  return (
    <Section
      id="stack"
      index="04"
      label="stack"
      title={
        <>
          Ferramentas que uso, <Serif>sem inflar a lista.</Serif>
        </>
      }
      lead="Nem tudo aqui tem o mesmo peso. O destaque marca o que uso no dia a dia profissional; o restante faz parte do meu repertório e de projetos acadêmicos e pessoais."
    >
      <Reveal>
        <p className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted">
          <span className="inline-flex items-center gap-2">
            <span className="chip chip-strong">Exemplo</span> uso profissional
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="chip">Exemplo</span> repertório e projetos
          </span>
        </p>
      </Reveal>

      <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
        {stack.map((group, i) => {
          const Icon = icons[i];
          return (
            <li key={group.category} className={i < 2 ? "lg:col-span-3" : "lg:col-span-2"}>
              <Reveal delay={i * 0.05} className="card h-full p-6">
                <h3 className="flex items-center gap-2.5 font-medium">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  {group.category}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.primary.map((t) => (
                    <li key={t} className="chip chip-strong">
                      {t}
                    </li>
                  ))}
                  {group.secondary.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
