import { Bug, CodeXml, ScrollText, Users } from "lucide-react";
import { about } from "@/data/profile";
import { Reveal } from "./Reveal";
import { Section, Serif } from "./Section";

const icons = [CodeXml, ScrollText, Bug, Users];

export function About() {
  return (
    <Section
      id="sobre"
      index="01"
      label="sobre"
      pageTitle
      title={
        <>
          Da bancada de manutenção à <Serif>qualidade de software.</Serif>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted sm:text-lg">
          {about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "text-fg" : undefined}>
              {p}
            </p>
          ))}
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {about.highlights.map((h, i) => {
            const Icon = icons[i];
            return (
              <li key={h.title}>
                <Reveal delay={i * 0.06} className="card h-full p-5">
                  <Icon className="size-5 text-accent" aria-hidden="true" />
                  <h3 className="mt-3 font-medium">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </Section>
  );
}
