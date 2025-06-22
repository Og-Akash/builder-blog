import { builder } from "@builder.io/sdk";

export async function getBlogContent(slug: string) {
  return builder
    .get("blog", {
      query: {
        "data.slug": slug,
      },
      options: {
        noTargeting: true,
      },
      enrich: true,
    })
    .toPromise();
}

export type ContentWithMetadata = {
  data?: {
    title?: string;
    description?: string;
    poster?: string;
  };
};

export function getBlogMetadata<T extends ContentWithMetadata>(content: T) {
  if (!content) return {};

  return {
    title: content.data?.title || "Blog",
    description: content.data?.description || "",
    openGraph: {
      title: content.data?.title || "Blog",
      description: content.data?.description || "",
      images: content.data?.poster ? [content.data.poster] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: content.data?.title || "Blog",
      description: content.data?.description || "",
      images: content.data?.poster ? [content.data.poster] : [],
    },
  };
}
