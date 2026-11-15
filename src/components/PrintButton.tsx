"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className="btn btn-ghost">
      <Printer className="size-4" aria-hidden="true" /> Imprimir
    </button>
  );
}
