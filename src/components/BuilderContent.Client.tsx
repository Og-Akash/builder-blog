"use client";

import { BuilderContent } from "@builder.io/react";
import { RenderBuilderContent } from "@/components/builder";

interface Props {
  content: unknown;
}

export default function BlogContent({ content }: Props) {
  if (!content || typeof content !== "object") return null;
  
  return (
    <BuilderContent model="blog" content={content}>
      {(data, loading, fullContent) => (
        <>
          <RenderBuilderContent model="blog" content={fullContent} />
        </>
      )}
    </BuilderContent>
  );
}
