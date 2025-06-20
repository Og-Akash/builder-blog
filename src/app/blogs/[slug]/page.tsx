import { builder } from "@builder.io/sdk";
import { notFound } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPage({ params }: Props) {
  const { slug } = await params;
  const content = await builder
    .get("blog", {
      query: {
        "data.slug": slug,
      },
      options: {
        noTargeting: true,
      },
    })
    .toPromise();

  if (!content) return notFound();

  return <div>{content.data.title}</div>;
}
