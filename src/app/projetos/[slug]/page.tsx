import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { ProjectCover } from "@/components/ProjectCard";
import { getProject, projects } from "@/data/projects";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: { title: `${project.name} — Kevin Brandão`, description: project.summary, url: `/projetos/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="mx-auto w-full max-w-5xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36">
      <Link href="/projetos" className="inline-flex items-center gap-2 py-2 text-sm text-muted hover:text-fg">
        <ArrowLeft className="size-4" aria-hidden="true" /> Todos os projetos
      </Link>

      <header className="mt-6">
        <p className="font-mono text-xs tracking-wider text-muted">
          <span className="text-accent">{project.category}</span> · {project.year}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">{project.name}</h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{project.tagline}</p>

        <div className="mt-7 flex flex-wrap gap-3">
          {project.links.demo && (
            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {project.links.demoLabel ?? "Ver demonstração"} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          )}
          <a href={project.links.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
            <GithubIcon className="size-4" /> Repositório
          </a>
          {project.links.extra?.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              {link.label} <ArrowUpRight className="size-4" aria-hidden="true" />
            </a>
          ))}
        </div>
      </header>

      <div className="card group mt-10 overflow-hidden">
        <ProjectCover project={project} priority />
      </div>

      <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_17rem] lg:gap-16">
        <div className="space-y-12">
          <section aria-labelledby="resumo">
            <h2 id="resumo" className="font-mono text-xs tracking-wider text-muted">
              <span className="text-accent">01</span> ./resumo
            </h2>
            <p className="mt-3 text-lg leading-relaxed">{project.summary}</p>
          </section>

          <section aria-labelledby="problema">
            <h2 id="problema" className="font-mono text-xs tracking-wider text-muted">
              <span className="text-accent">02</span> ./problema
            </h2>
            <p className="mt-3 leading-relaxed text-muted sm:text-lg">{project.problem}</p>
          </section>

          <section aria-labelledby="funcionalidades">
            <h2 id="funcionalidades" className="font-mono text-xs tracking-wider text-muted">
              <span className="text-accent">03</span> ./funcionalidades
            </h2>
            <ul className="mt-4 space-y-2.5">
              {project.features.map((f) => (
                <li key={f} className="flex gap-3 leading-relaxed">
                  <Check className="mt-1 size-4 shrink-0 text-ok" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="arquitetura">
            <h2 id="arquitetura" className="font-mono text-xs tracking-wider text-muted">
              <span className="text-accent">04</span> ./arquitetura
            </h2>
            <ol className="mt-4 grid gap-3 sm:grid-cols-2">
              {project.architecture.map((a, i) => (
                <li key={a.title} className="card p-5">
                  <p className="font-mono text-[0.7rem] text-muted">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 font-medium">{a.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{a.text}</p>
                </li>
              ))}
            </ol>
          </section>

          {project.gallery && project.gallery.length > 0 && (
            <section aria-labelledby="imagens">
              <h2 id="imagens" className="font-mono text-xs tracking-wider text-muted">
                <span className="text-accent">05</span> ./imagens
              </h2>
              <div className="mt-4 flex flex-wrap gap-4">
                {project.gallery.map((img) => (
                  <figure
                    key={img.src}
                    className={`overflow-hidden rounded-xl border border-line bg-white ${
                      img.kind === "mobile" ? "w-44 sm:w-56" : "w-full"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={img.width}
                      height={img.height}
                      sizes={img.kind === "mobile" ? "224px" : "(min-width: 1024px) 640px, 92vw"}
                      className="h-auto w-full"
                    />
                  </figure>
                ))}
              </div>
            </section>
          )}
        </div>

        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          <div>
            <h2 className="font-mono text-xs tracking-wider text-muted">contexto</h2>
            <p className="mt-2 text-sm leading-relaxed">{project.context}</p>
          </div>
          <div>
            <h2 className="font-mono text-xs tracking-wider text-muted">minha participação</h2>
            <p className="mt-2 text-sm leading-relaxed">{project.participation}</p>
          </div>
          <div>
            <h2 className="font-mono text-xs tracking-wider text-muted">tecnologias</h2>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>

      <nav aria-label="Próximo projeto" className="mt-16 border-t border-line pt-8">
        <Link href={`/projetos/${next.slug}`} className="group flex items-center justify-between gap-6">
          <span>
            <span className="block font-mono text-xs text-muted">próximo projeto</span>
            <span className="mt-1 block text-2xl font-medium tracking-tight sm:text-3xl">{next.name}</span>
          </span>
          <ArrowRight className="size-6 text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" aria-hidden="true" />
        </Link>
      </nav>
    </article>
  );
}
