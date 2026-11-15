import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  lead?: string;
  /** Primeira seção de uma página: o título vira h1 e ganha espaço para o cabeçalho fixo. */
  pageTitle?: boolean;
  children: ReactNode;
};

/** Cabeçalho padrão das seções: índice em mono (herança do "./projetos" do site antigo) + título editorial. */
export function Section({ id, index, label, title, lead, pageTitle = false, children }: Props) {
  const Heading = pageTitle ? "h1" : "h2";
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${pageTitle ? "pb-20 pt-28 sm:pb-28 sm:pt-40" : "py-20 sm:py-28"}`}
    >
      <Reveal>
        <p className="flex items-center gap-3 font-mono text-xs tracking-wider text-muted">
          <span>
            <span className="text-accent">{index}</span> <span aria-hidden="true">./</span>
            {label}
          </span>
          <span className="h-px w-16 bg-gradient-to-r from-accent/60 to-transparent" aria-hidden="true" />
        </p>
        <Heading
          id={`${id}-title`}
          className={`mt-4 max-w-3xl font-semibold tracking-tight text-balance ${
            pageTitle ? "text-4xl sm:text-6xl sm:leading-[1.05]" : "text-3xl sm:text-5xl sm:leading-[1.08]"
          }`}
        >
          {title}
        </Heading>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
      </Reveal>
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <em className="font-serif text-[1.08em] font-normal italic text-gradient pr-1">{children}</em>;
}
