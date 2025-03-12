"use client";
import React, { FC } from "react";
import {
  ExperienceRoot,
  useFetchBySlug,
} from "@contentful/experiences-sdk-react";
import { Skeleton } from "@/components/ui/skeleton";

import { createClient } from "contentful";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { studioComponentAndTokenRegistration } from "@/lib/studio-component-registration";

interface IStudio {
  slug: string;
  locale?: string;
}

const client = createClient({
  space: process.env.NEXT_PUBLIC_CTF_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CTF_DELIVERY_TOKEN!,
  host: "preview.contentful.com",
});

const previewClient = createClient({
  space: process.env.NEXT_PUBLIC_CTF_SPACE_ID!,
  accessToken: process.env.NEXT_PUBLIC_CTF_PREVIEW_TOKEN!,
  host: "preview.contentful.com",
});

const StudioWrapper: FC<IStudio> = ({ slug, locale = "en-US" }) => {
  studioComponentAndTokenRegistration();
  const isPreviewMod = true; // TO DO
  const { experience, isLoading, error } = useFetchBySlug({
    client: isPreviewMod ? previewClient : client,
    slug,
    localeCode: locale,
    experienceTypeId:
      process.env.NEXT_PUBLIC_CTF_STUDIO_EXPERIENCE_TYPE_ID || "page",
  });

  if (isLoading) {
    return <PageSkeleton />;
  }
  if (error) {
    console.error(error);

    return notFound();
  }
  return (
    <Suspense fallback={<>ERROR!</>}>
      <ExperienceRoot locale={locale} experience={experience} />
    </Suspense>
  );
};

const PageSkeleton = () => {
  return (
    <div className="flex flex-col gap-4 p-10 min-h-screen">
      <Skeleton className=" w-full h-80 rounded-sm" />
      <div className="flex gap-4">
        <Skeleton className="w-full h-60 rounded-sm" />
        <Skeleton className="w-full h-60 rounded-sm" />
      </div>
      <Skeleton className="w-full h-[400px] rounded-sm" />
    </div>
  );
};

export default StudioWrapper;
