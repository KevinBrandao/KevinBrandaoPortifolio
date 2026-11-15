import { ArrowUpRight, Mail } from "lucide-react";
import { profile, whatsappUrl } from "@/data/profile";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./icons";
import { Reveal } from "./Reveal";

const channels = [
  { label: "LinkedIn", value: "Kevin de Almeida Brandão", href: profile.links.linkedin, Icon: LinkedinIcon, external: true },
  { label: "E-mail", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail, external: false },
  { label: "WhatsApp", value: "(16) 99174-6516", href: whatsappUrl, Icon: WhatsappIcon, external: true },
  { label: "GitHub", value: "@KevinBrandao", href: profile.links.github, Icon: GithubIcon, external: true },
];

export function Contact() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface px-6 py-12 sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full blur-3xl"
            style={{ background: "var(--glow)" }}
            aria-hidden="true"
          />
          <p className="font-mono text-xs tracking-wider text-muted">
            <span className="text-accent">07</span> ./contato
          </p>
          <h2 id="contato-title" className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl sm:leading-[1.05]">
            Vamos construir soluções que <em className="font-serif font-normal italic text-gradient pr-2">geram impacto?</em>
          </h2>
          <p className="mt-5 max-w-xl leading-relaxed text-muted sm:text-lg">
            Estou aberto a conversar sobre oportunidades em qualidade de software, engenharia e inovação.
          </p>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {channels.map(({ label, value, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="card group flex items-center gap-4 bg-bg/40 p-4 sm:p-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line text-accent">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-mono text-[0.7rem] tracking-wider text-muted">{label}</span>
                    <span className="block truncate">{value}</span>
                  </span>
                  <ArrowUpRight
                    className="size-4 shrink-0 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
