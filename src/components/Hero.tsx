import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Check, Download, MapPin } from "lucide-react";
import { indicators, profile } from "@/data/profile";
import { CountUp } from "./CountUp";
import { Marquee } from "./Marquee";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";

const checks = [
  "automação com Cypress, Playwright e Selenium",
  "estratégia e planejamento de testes",
  "desenvolvimento web em PHP, JavaScript e React",
  "liderança de time de qualidade",
];

export function Hero() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-10 pt-28 sm:px-8 sm:pt-36" aria-labelledby="hero-title">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-xs text-muted">
            <span className="pulse-dot size-1.5 rounded-full bg-ok" aria-hidden="true" />
            {profile.currentRole}
          </p>

          <h1 id="hero-title" className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl sm:leading-[1.02]">
            Kevin Brandão
          </h1>
          <p className="mt-4 text-xl text-balance sm:text-2xl">
            Qualidade de software com <em className="font-serif text-[1.12em] italic text-gradient pr-1">olhar de engenharia.</em>
          </p>

          <p className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-xs tracking-wide text-muted sm:text-[0.8rem]">
            <span>{profile.headline}</span>
            {profile.roles.map((role) => (
              <span key={role} className="flex items-center gap-2">
                <span aria-hidden="true" className="text-accent">/</span>
                {role}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl leading-relaxed text-muted sm:text-lg">{profile.intro}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/projetos" className="btn btn-primary">
              Ver projetos <ArrowDown className="size-4" aria-hidden="true" />
            </Link>
            <a href={profile.resumePdf} download className="btn btn-ghost">
              <Download className="size-4" aria-hidden="true" /> Baixar currículo
            </a>
            <div className="flex items-center gap-1">
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de Kevin Brandão"
                className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-fg"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub de Kevin Brandão"
                className="grid size-11 place-items-center rounded-lg text-muted transition-colors hover:text-fg"
              >
                <GithubIcon className="size-5" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.12} className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface">
            <Image
              src={profile.photo}
              alt="Retrato de Kevin Brandão"
              width={1259}
              height={1600}
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="aspect-[4/5] w-full object-cover object-[50%_18%]"
            />
            <p className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 font-mono text-[0.7rem] text-white backdrop-blur-sm">
              <MapPin className="size-3.5" aria-hidden="true" /> {profile.location}
            </p>
          </div>

          {/* Painel "spec": a identidade de QA do site */}
          <div className="card relative -mt-6 ml-auto w-[94%] p-4 shadow-2xl shadow-black/30 sm:absolute sm:-bottom-12 sm:-left-8 sm:mt-0 sm:w-72">
            <div className="flex items-center justify-between border-b border-line pb-2.5 font-mono text-[0.7rem] text-muted">
              <span>kevin-brandao.spec.ts</span>
              <span className="text-ok">4 passed</span>
            </div>
            <ul className="mt-3 space-y-1.5 font-mono text-[0.72rem] leading-relaxed">
              {checks.map((c) => (
                <li key={c} className="flex gap-2">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-ok" aria-hidden="true" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <dl className="mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:mt-28 lg:grid-cols-4">
          {indicators.map((item) => (
            <div key={item.label} className="bg-surface p-5 sm:p-6">
              <dt className="text-sm text-muted">{item.label}</dt>
              <dd className="text-hero mt-1 text-4xl font-semibold tracking-tight sm:text-5xl">
                <CountUp value={item.value} />
              </dd>
              <dd className="mt-2 font-mono text-[0.7rem] leading-snug text-muted">{item.detail}</dd>
            </div>
          ))}
        </dl>
      </Reveal>

      <Marquee />
    </section>
  );
}
