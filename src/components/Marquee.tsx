import { stack } from "@/data/career";

// Somente ferramentas de uso profissional (grupo "primary", comprovado no currículo).
const skip = new Set(["Metodologias ágeis", "Integrações e APIs", "Automação de processos"]);
const items = stack.flatMap((g) => [...g.primary]).filter((t) => !skip.has(t));

export function Marquee() {
  return (
    <div className="marquee mt-10 sm:mt-14">
      <p className="sr-only">Ferramentas de uso profissional: {items.join(", ")}.</p>
      <div className="marquee-track" aria-hidden="true">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={item} className="flex items-center font-mono text-sm text-muted">
                <span className="px-5 sm:px-7">{item}</span>
                <span className="text-accent/60">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
