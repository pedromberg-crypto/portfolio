import { contato } from "@/lib/data";

export function Footer() {
  const ano = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between text-xs text-muted-foreground">
        <div className="space-y-1">
          <div className="font-display font-semibold text-foreground text-sm">
            {contato.nome}
          </div>
          <div>
            {contato.cidade} · pedroberg.com.br · © {ano}
          </div>
        </div>
        <div className="font-mono">
          Construído com Next.js + Claude Code · deploy Vercel
        </div>
      </div>
    </footer>
  );
}
