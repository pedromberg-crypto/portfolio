"use client";

import * as React from "react";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";

const SECTIONS = [
  { id: "operacao", label: "Operação" },
  { id: "metodo", label: "Método" },
  { id: "casos", label: "Casos" },
  { id: "trajetoria", label: "Trajetória" },
  { id: "stack", label: "Stack" },
  { id: "contato", label: "Contato" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8 h-14 flex items-center justify-between">
        <a
          href="#topo"
          aria-label="Início"
          className="font-display font-bold text-base tracking-tight"
        >
          <span className="text-primary">PM</span>
          <span className="text-muted-foreground/70 ml-2 hidden sm:inline font-sans font-normal text-sm">
            Pedro Maia Berg
          </span>
        </a>

        <div className="flex items-center gap-1 sm:gap-3">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-5 text-sm text-muted-foreground">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className="hover:text-foreground transition-colors"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <ThemeToggle />

          {/* Mobile menu trigger */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full hover:bg-muted transition-colors"
              aria-label="Abrir menu"
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[78%] max-w-xs p-0 flex flex-col"
            >
              <div className="p-6 border-b border-border">
                <SheetTitle className="font-display text-lg tracking-tight">
                  <span className="text-primary">PM</span>
                  <span className="text-muted-foreground/70 ml-2 font-sans font-normal text-sm">
                    Pedro Maia Berg
                  </span>
                </SheetTitle>
              </div>
              <ul className="flex flex-col p-4 gap-1">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <SheetClose
                      render={
                        <a
                          href={`#${s.id}`}
                          className="block px-3 py-3 rounded-lg text-base text-foreground hover:bg-muted transition-colors"
                        />
                      }
                    >
                      {s.label}
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto p-6 border-t border-border text-xs text-muted-foreground font-mono">
                Contagem, MG · pedroberg.com.br
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
