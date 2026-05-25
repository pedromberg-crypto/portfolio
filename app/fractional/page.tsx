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
import { profileFractional } from "@/lib/data";

export const metadata: Metadata = {
  title: profileFractional.metaTitle,
  description: profileFractional.metaDescription,
  openGraph: {
    title: profileFractional.metaTitle,
    description: profileFractional.metaDescription,
    locale: "pt_BR",
    type: "website",
  },
};

export default function FractionalPage() {
  return (
    <>
      <StickyNav />
      <main className="flex-1">
        <Hero profile={profileFractional} />
        <Clients />
        <Method />
        <Cases pecas={profileFractional.pecas} />
        <Timeline />
        <Stack />
        <CTA profile={profileFractional} />
      </main>
      <Footer />
    </>
  );
}
