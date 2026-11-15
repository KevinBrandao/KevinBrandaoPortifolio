import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  lead?: string;
  children: ReactNode;
};

/** Cabeçalho padrão das seções: índice em mono (herança do "./projetos" do site antigo) + título editorial. */
export function Section({ id, index, label, title, lead, children }: Props) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <p className="font-mono text-xs tracking-wider text-muted">
          <span className="text-accent">{index}</span> <span aria-hidden="true">./</span>
          {label}
        </p>
        <h2 id={`${id}-title`} className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-balance sm:text-[2.6rem] sm:leading-[1.1]">
          {title}
        </h2>
        {lead && <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{lead}</p>}
      </Reveal>
      <div className="mt-10 sm:mt-14">{children}</div>
    </section>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <em className="font-serif text-[1.08em] font-normal italic text-gradient pr-1">{children}</em>;
}
