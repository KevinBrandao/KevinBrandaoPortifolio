import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  return (
    <footer className="no-print border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. <span className="font-mono text-xs">Franca, SP.</span>
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2 hover:text-fg">
            <LinkedinIcon className="size-4" /> LinkedIn
          </a>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-2 hover:text-fg">
            <GithubIcon className="size-4" /> GitHub
          </a>
          <a href="#conteudo" className="py-2 hover:text-fg">
            Topo ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
