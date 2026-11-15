import Link from "next/link";
import { ArrowUpRight, BrainCircuit } from "lucide-react";
import { moreRepos, projects } from "@/data/projects";
import { profile } from "@/data/profile";
import { GithubIcon } from "./icons";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "./Reveal";
import { Section, Serif } from "./Section";

export function Projects() {
  const aiProjects = projects.filter((p) => p.ai);
  const featured = projects.filter((p) => p.featured && !p.ai);
  const others = projects.filter((p) => !p.featured && !p.ai);

  return (
    <Section
      id="projetos"
      index="05"
      label="projetos"
      title={
        <>
          Projetos que mostram <Serif>como eu penso.</Serif>
        </>
      }
      lead="Uma seleção dos meus repositórios: Inteligência Artificial aplicada à saúde, automação, integração entre sistemas e qualidade."
    >
      {/* Destaque: Inteligência Artificial */}
      <Reveal>
        <div className="rounded-3xl border border-line bg-gradient-to-b from-accent/[0.07] to-transparent p-4 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-4 px-1 pb-5 sm:px-2">
            <div>
              <p className="inline-flex items-center gap-2 font-mono text-xs text-accent-2">
                <BrainCircuit className="size-4" aria-hidden="true" /> inteligência artificial
              </p>
              <h3 className="mt-2 max-w-xl text-xl font-medium tracking-tight sm:text-2xl">
                Machine Learning para apoiar decisões médicas
              </h3>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted">
              Dois projetos em sequência: do modelo acoplado à API ao processamento assíncrono com fila de mensagens.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {aiProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} large />
            ))}
          </div>
        </div>
      </Reveal>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {featured.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05} className="h-full">
            <ProjectCard project={p} large />
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {others.map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.04} className="h-full">
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-14">
        <h3 className="font-mono text-xs tracking-wider text-muted">
          <span className="text-accent">+</span> outros repositórios
        </h3>
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
          <Link href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GithubIcon className="size-4" /> Ver todos no GitHub
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
