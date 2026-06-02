import type { Metadata } from "next";
import { StickyNav } from "@/components/sticky-nav";
import { Hero } from "@/components/hero";
import { Clients } from "@/components/clients";
import { Method } from "@/components/method";
import { Cases } from "@/components/cases";
import { Timeline } from "@/components/timeline";
import { Stack } from "@/components/stack";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { profileCooAgencia } from "@/lib/data";

export const metadata: Metadata = {
  title: profileCooAgencia.metaTitle,
  description: profileCooAgencia.metaDescription,
  openGraph: {
    title: profileCooAgencia.metaTitle,
    description: profileCooAgencia.metaDescription,
    locale: "pt_BR",
    type: "website",
  },
};

export default function CooAgenciaPage() {
  return (
    <>
      <StickyNav />
      <main className="flex-1">
        <Hero profile={profileCooAgencia} />
        <Clients />
        <Method />
        <Cases pecas={profileCooAgencia.pecas} />
        <Timeline />
        <Stack />
        <CTA profile={profileCooAgencia} />
      </main>
      <Footer />
    </>
  );
}
