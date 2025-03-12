import React from "react";
import StudioWrapper from "@/studio-components/studio-wrapper";
import { draftMode } from "next/headers";

export default async function ExperiencePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug, locale } = await params;
  const { isEnabled } = await draftMode();
  return <StudioWrapper slug={slug} locale={locale} />;
}
