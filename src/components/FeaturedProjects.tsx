import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section, Serif } from "./Section";

// Três projetos de áreas diferentes para a página inicial.
const slugs = ["healthcheck", "ba-manicure", "data-weather"];
const featured = slugs.map((slug) => projects.find((p) => p.slug === slug)).filter((p) => p !== undefined);

export function FeaturedProjects() {
  return (
    <Section
      id="projetos"
      index="01"
      label="projetos"
      title={
        <>
          Projetos em <Serif>destaque.</Serif>
        </>
      }
      lead="Inteligência Artificial aplicada à saúde, automação e integração entre sistemas."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((p, i) => (
          <li key={p.slug}>
            <Reveal delay={i * 0.06} className="h-full">
              <ProjectCard project={p} />
            </Reveal>
          </li>
        ))}
      </ul>
      <Reveal className="mt-8">
        <Link href="/projetos" className="btn btn-ghost">
          Ver todos os {projects.length} projetos <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </Reveal>
    </Section>
  );
}
