import { MessageCircle, Mail, Download } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { LinkedinIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

const ctaLink = cn(
  buttonVariants({ variant: "default", size: "lg" }),
  "rounded-full text-base h-12 px-6"
);
const ctaOutline = cn(
  buttonVariants({ variant: "outline", size: "lg" }),
  "rounded-full text-base h-12 px-6"
);
const ctaGhost = cn(
  buttonVariants({ variant: "ghost", size: "lg" }),
  "rounded-full text-base h-12 px-6"
);

export function CTA() {
  return (
    <section
      id="contato"
      className="py-20 sm:py-28 scroll-mt-16 bg-primary/5 border-y border-primary/10 relative overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20"
      >
        <div className="size-[420px] rounded-full bg-primary/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-3xl px-5 sm:px-8 text-center space-y-6">
        <div className="text-xs uppercase tracking-[0.18em] text-primary font-mono">
          §07 — Contato
        </div>
        <h2 className="font-display font-bold tracking-tight text-3xl sm:text-5xl leading-[1.05]">
          Vamos conversar?
        </h2>
        <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
          O que construí na Accellera está consolidado — método, equipe, 4
          squads em operação. Agora busco profundidade num produto único, em
          vez de amplitude em 4 clientes. Essa é a transição que estou
          buscando.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-4">
          <a
            href={`https://wa.me/${profile.telefoneLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaLink}
          >
            <MessageCircle className="size-4" />
            WhatsApp
          </a>
          <a href={`mailto:${profile.email}`} className={ctaOutline}>
            <Mail className="size-4" />
            E-mail
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaOutline}
          >
            <LinkedinIcon className="size-4" />
            LinkedIn
          </a>
          <a href="/cv-pedro-maia.pdf" download className={ctaGhost}>
            <Download className="size-4" />
            Baixar CV em PDF
          </a>
        </div>

        <div className="pt-6 text-sm text-muted-foreground font-mono">
          {profile.telefone} · {profile.cidade}
        </div>
      </div>
    </section>
  );
}
