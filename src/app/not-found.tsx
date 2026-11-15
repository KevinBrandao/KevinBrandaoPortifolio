import type { Metadata } from "next";
import Link from "next/link";
import { X } from "lucide-react";

export const metadata: Metadata = { title: "Página não encontrada", robots: { index: false } };

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[80svh] w-full max-w-2xl place-items-center px-5 pt-24 sm:px-8">
      <div className="w-full">
        <div className="card p-5 font-mono text-sm">
          <div className="flex items-center justify-between border-b border-line pb-3 text-xs text-muted">
            <span>rota.spec.ts</span>
            <span className="text-red-400">1 failed</span>
          </div>
          <p className="mt-4 flex gap-2">
            <X className="mt-0.5 size-4 shrink-0 text-red-400" aria-hidden="true" />
            <span>deveria encontrar esta página</span>
          </p>
          <p className="mt-2 pl-6 text-xs text-muted">Expected: 200 · Received: 404</p>
        </div>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight sm:text-5xl">Esse teste falhou.</h1>
        <p className="mt-3 text-muted sm:text-lg">A página que você procura não existe ou mudou de endereço.</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Voltar ao início
          </Link>
          <Link href="/#projetos" className="btn btn-ghost">
            Ver projetos
          </Link>
        </div>
      </div>
    </div>
  );
}
