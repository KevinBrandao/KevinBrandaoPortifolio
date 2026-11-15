import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download, Mail, MapPin } from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/icons";
import { PrintButton } from "@/components/PrintButton";
import { education, experiences, languages, stack } from "@/data/career";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Currículo",
  description: "Currículo de Kevin Brandão: experiência, formação e competências em Qualidade de Software e desenvolvimento.",
  alternates: { canonical: "/curriculo" },
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-3 border-t border-line py-8 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <h2 className="font-mono text-xs tracking-wider text-muted">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function CurriculoPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-20 pt-28 sm:px-8 sm:pt-36 print:pt-0">
      <div className="no-print flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="inline-flex items-center gap-2 py-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="size-4" aria-hidden="true" /> Voltar ao portfólio
        </Link>
        <div className="flex flex-wrap gap-2">
          <PrintButton />
          <a href={profile.resumePdf} download className="btn btn-primary">
            <Download className="size-4" aria-hidden="true" /> Baixar PDF
          </a>
        </div>
      </div>

      <article className="card mt-6 px-6 py-8 sm:px-12 sm:py-12 print:border-0 print:p-0">
        <header className="pb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">{profile.fullName}</h1>
          <p className="mt-2 text-lg text-muted">{profile.currentRole}</p>
          <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li className="inline-flex items-center gap-2">
              <MapPin className="size-4" aria-hidden="true" /> {profile.location}
            </li>
            <li>
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 hover:text-fg">
                <Mail className="size-4" aria-hidden="true" /> {profile.email}
              </a>
            </li>
            <li>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-fg">
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-fg">
                <GithubIcon className="size-4" /> github.com/KevinBrandao
              </a>
            </li>
          </ul>
        </header>

        <Block title="PERFIL">
          <p className="leading-relaxed">{profile.intro}</p>
        </Block>

        <Block title="EXPERIÊNCIA">
          <ol className="space-y-7">
            {experiences.map((exp) => (
              <li key={`${exp.company}-${exp.period}`}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="font-mono text-xs text-muted">{exp.period}</p>
                </div>
                <p className="text-sm text-muted">
                  {exp.company}
                  {exp.context && ` · ${exp.context}`}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{exp.description}</p>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="FORMAÇÃO">
          <ul className="space-y-4">
            {education.map((ed) => (
              <li key={ed.course} className="flex flex-wrap items-baseline justify-between gap-x-4">
                <div>
                  <h3 className="font-medium">{ed.course}</h3>
                  <p className="text-sm text-muted">
                    {ed.level} · {ed.institution} ({ed.short})
                  </p>
                </div>
                <p className="font-mono text-xs text-muted">{ed.status === "Concluído" ? `Concluído · ${ed.year}` : "Em andamento"}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block title="COMPETÊNCIAS">
          <dl className="space-y-3 text-sm">
            {stack.map((group) => (
              <div key={group.category} className="grid gap-1 sm:grid-cols-[11rem_1fr]">
                <dt className="font-medium">{group.category}</dt>
                <dd className="leading-relaxed text-muted">{[...group.primary, ...group.secondary].join(" · ")}</dd>
              </div>
            ))}
          </dl>
        </Block>

        <Block title="IDIOMAS">
          <p className="text-sm">{languages.map((l) => `${l.name} (${l.level.toLowerCase()})`).join(" · ")}</p>
        </Block>
      </article>
    </div>
  );
}
