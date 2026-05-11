import { StickyNav } from "@/components/sticky-nav";
import { Hero } from "@/components/hero";
import { Clients } from "@/components/clients";
import { Method } from "@/components/method";
import { Cases } from "@/components/cases";
import { Diagnostico } from "@/components/diagnostico";
import { Timeline } from "@/components/timeline";
import { Stack } from "@/components/stack";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <StickyNav />
      <main className="flex-1">
        <Hero />
        <Clients />
        <Method />
        <Cases />
        <Diagnostico />
        <Timeline />
        <Stack />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
