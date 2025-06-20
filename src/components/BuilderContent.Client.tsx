"use client";

import { BuilderContent } from "@builder.io/react";
import { RenderBuilderContent } from "@/components/builder";


interface Props {
  content: any;
}

export default function BlogContent({ content }: Props) {
  return (
    <BuilderContent model="blog" content={content}>
      {(data, loading, fullContent) => (
        <>
          <h1>{data.title}</h1>
          <p>{data.authorName}</p>
          <RenderBuilderContent model="blog" content={fullContent} />
        </>
      )}
    </BuilderContent>
  );
}
