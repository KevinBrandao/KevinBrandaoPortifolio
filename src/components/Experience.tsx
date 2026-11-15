import { experiences } from "@/data/career";
import { Reveal } from "./Reveal";
import { Timeline } from "./Timeline";
import { Section, Serif } from "./Section";

export function Experience() {
  return (
    <Section
      id="experiencia"
      index="02"
      label="experiência"
      title={
        <>
          Uma trajetória entre <Serif>testar e construir.</Serif>
        </>
      }
      lead="Seis anos em times de software, alternando entre qualidade, liderança e desenvolvimento."
    >
      <Timeline>
        {experiences.map((exp, i) => (
          <li key={`${exp.company}-${exp.period}`} className="relative pb-10 pl-8 last:pb-0 sm:grid sm:grid-cols-[11rem_1fr] sm:gap-0 sm:pl-0">
            <span
              className={`absolute left-0 top-1.5 z-10 size-[11px] rounded-full border-2 sm:left-[11rem] ${
                exp.current ? "border-ok bg-ok shadow-[0_0_0_4px_color-mix(in_srgb,var(--ok)_22%,transparent)]" : "border-line-strong bg-bg"
              }`}
              aria-hidden="true"
            />
            <p className="font-mono text-xs text-muted sm:pr-8 sm:pt-1">{exp.period}</p>

            <Reveal delay={Math.min(i * 0.04, 0.2)} className="mt-2 sm:mt-0 sm:pl-10">
              <div className={`card p-5 sm:p-6 ${exp.current ? "border-line-strong" : ""}`}>
                <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                  <div>
                    <h3 className="text-lg font-medium tracking-tight">{exp.role}</h3>
                    <p className="mt-0.5 text-sm text-muted">
                      <span className="text-fg">{exp.company}</span>
                      {exp.context && <span> · {exp.context}</span>}
                    </p>
                  </div>
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-ok/40 px-2.5 py-0.5 font-mono text-[0.7rem] text-ok">
                      <span className="pulse-dot size-1.5 rounded-full bg-ok" aria-hidden="true" /> atual
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{exp.description}</p>

                <ul className="mt-4 grid gap-x-6 gap-y-1.5 text-sm text-muted md:grid-cols-2">
                  {exp.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5">
                      <span className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Tecnologias e práticas">
                  {exp.tags.map((t) => (
                    <li key={t} className="chip">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </Timeline>
    </Section>
  );
}
