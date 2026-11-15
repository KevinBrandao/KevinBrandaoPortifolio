import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectGrid } from "@/components/ProjectGrid";
import { Reveal } from "@/components/Reveal";
import { Section, Serif } from "@/components/Section";
import { profile } from "@/data/profile";
import { moreRepos, projects } from "@/data/projects";

const description =
  "Projetos de Kevin Brandão: Inteligência Artificial aplicada à saúde, automação, integração entre sistemas e qualidade de software.";

export const metadata: Metadata = {
  title: "Projetos",
  description,
  alternates: { canonical: "/projetos" },
  openGraph: { title: "Projetos — Kevin Brandão", description, url: "/projetos" },
};

export default function ProjetosPage() {
  return (
    <Section
      id="projetos"
      index="01"
      label="projetos"
      pageTitle
      title={
        <>
         + 119 Projetos que mostram <Serif>como eu penso.</Serif>
        </>
      }
      lead="Uma seleção dos meus repositórios. Filtre por área ou abra um projeto para ver o problema, a arquitetura e as tecnologias."
    >
      <ProjectGrid projects={projects} />

      <Reveal className="mt-16">
        <h2 className="font-mono text-xs tracking-wider text-muted">
          <span className="text-accent">+ 119</span> outros repositórios
        </h2>
        <ul className="mt-5 divide-y divide-line border-y border-line">
          {moreRepos.map((repo) => (
            <li key={repo.name}>
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1 py-4 sm:grid-cols-[14rem_1fr_auto] sm:items-center sm:gap-6"
              >
                <span className="font-medium">{repo.name}</span>
                <span className="text-sm text-muted">{repo.text}</span>
                <ArrowUpRight
                  className="hidden size-4 text-muted transition-colors group-hover:text-accent sm:block"
                  aria-hidden="true"
                />
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GithubIcon className="size-4" /> Ver todos no GitHub
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
