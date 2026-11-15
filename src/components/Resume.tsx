import Link from "next/link";
import { Download, Eye, FileText } from "lucide-react";
import { education } from "@/data/career";
import { profile } from "@/data/profile";
import { LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { Section, Serif } from "./Section";

export function Resume() {
  const latest = education.find((e) => e.status === "Concluído");
  const facts = [
    { label: "Cargo atual", value: profile.currentRole },
    { label: "Formação mais recente", value: latest ? `${latest.level} em ${latest.course} · ${latest.short}` : "" },
    { label: "Localização", value: profile.location },
  ];

  return (
    <Section
      id="curriculo"
      index="06"
      label="currículo"
      title={
        <>
          O resumo, em <Serif>uma página.</Serif>
        </>
      }
    >
      <Reveal>
        <div className="card grid gap-8 p-6 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <FileText className="size-6 text-accent" aria-hidden="true" />
            <dl className="mt-5 grid gap-5 sm:grid-cols-3">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[0.7rem] tracking-wider text-muted">{f.label}</dt>
                  <dd className="mt-1 text-sm leading-relaxed sm:text-base">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link href="/curriculo" className="btn btn-primary">
              <Eye className="size-4" aria-hidden="true" /> Visualizar currículo
            </Link>
            <a href={profile.resumePdf} download className="btn btn-ghost">
              <Download className="size-4" aria-hidden="true" /> Baixar PDF
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
