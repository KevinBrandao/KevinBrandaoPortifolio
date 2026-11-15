import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BrainCircuit } from "lucide-react";
import type { Project } from "@/data/projects";

/** Capa do projeto: screenshot real quando existe; caso contrário, uma capa tipográfica. */
export function ProjectCover({ project, priority = false }: { project: Project; priority?: boolean }) {
  const cover = project.cover;
  return (
    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-surface-2">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(28rem 14rem at 80% 0%, var(--glow), transparent 70%), linear-gradient(var(--grid) 1px, transparent 1px), linear-gradient(90deg, var(--grid) 1px, transparent 1px)",
          backgroundSize: "auto, 28px 28px, 28px 28px",
        }}
        aria-hidden="true"
      />
      {cover?.kind === "mobile" && (
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          priority={priority}
          sizes="220px"
          className="absolute left-1/2 top-[12%] w-[38%] max-w-[220px] -translate-x-1/2 rounded-xl border border-line-strong shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-2"
        />
      )}
      {cover && cover.kind !== "mobile" && (
        <div className="absolute inset-x-[7%] bottom-0 top-[14%] overflow-hidden rounded-t-xl border border-b-0 border-line-strong bg-white shadow-2xl shadow-black/40 transition-transform duration-500 group-hover:-translate-y-1.5">
          <Image
            src={cover.src}
            alt={cover.alt}
            width={cover.width}
            height={cover.height}
            priority={priority}
            sizes="(min-width: 1024px) 520px, 90vw"
            className="h-full w-full object-cover object-left-top"
          />
        </div>
      )}
      {!cover && (
        <div className="absolute inset-0 grid place-items-center p-6" aria-hidden="true">
          <div className="w-full max-w-[18rem] rounded-xl border border-line-strong bg-surface p-4 font-mono text-[0.7rem] text-muted shadow-xl shadow-black/20 transition-transform duration-500 group-hover:-translate-y-1.5">
            <p className="text-fg">~/{project.slug}</p>
            <p className="mt-2 truncate">
              <span className="text-accent">stack</span> {project.stack.slice(0, 3).join(" · ")}
            </p>
            <p className="truncate">
              <span className="text-accent">tipo</span> {project.category.toLowerCase()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectCard({ project, large = false }: { project: Project; large?: boolean }) {
  return (
    <Link
      href={`/projetos/${project.slug}`}
      className="card group flex h-full flex-col overflow-hidden focus-visible:outline-offset-4"
      aria-label={`${project.name}: ${project.tagline}. Ver detalhes`}
    >
      <ProjectCover project={project} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3 font-mono text-[0.7rem] text-muted">
          <span className="inline-flex items-center gap-1.5">
            {project.ai && <BrainCircuit className="size-3.5 text-accent-2" aria-hidden="true" />}
            {project.category}
          </span>
          <span>{project.year}</span>
        </div>
        <h3 className={`mt-3 font-medium tracking-tight ${large ? "text-2xl" : "text-xl"}`}>
          {project.name}
          <ArrowUpRight
            className="ml-1.5 inline size-4 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
            aria-hidden="true"
          />
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{large ? project.summary : project.tagline}</p>
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.slice(0, large ? 6 : 4).map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
