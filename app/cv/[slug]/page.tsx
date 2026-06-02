import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { allProfiles } from "@/lib/data";
import { CvDocument } from "@/components/cv/cv-document";
import { PrintButton } from "@/components/cv/print-button";
import "../cv.css";

type Slug = keyof typeof allProfiles;

export function generateStaticParams() {
  return Object.keys(allProfiles).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const profile = allProfiles[slug as Slug];
  if (!profile) return {};
  return {
    title: `CV · ${profile.cargo} · Pedro Maia Berg`,
    robots: { index: false, follow: false },
  };
}

export default async function CvPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const profile = allProfiles[slug as Slug];
  if (!profile) notFound();

  return (
    <div className="cv-screen">
      <PrintButton />
      <CvDocument profile={profile} />
    </div>
  );
}
