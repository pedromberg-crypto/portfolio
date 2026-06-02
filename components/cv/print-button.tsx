"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="cv-print-btn no-print"
      aria-label="Imprimir ou salvar como PDF"
    >
      <Printer size={16} />
      Imprimir / Salvar PDF
    </button>
  );
}
