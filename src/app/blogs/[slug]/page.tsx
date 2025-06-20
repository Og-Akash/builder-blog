import BlogContent from "@/components/BuilderContent.Client";
import Header from "@/components/Header/Header";
import { builder } from "@builder.io/sdk";
import { notFound } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const blogs = await builder.getAll("blog", {
    fields: "data.slug",
  });

  return blogs.map((blog) => ({
    slug: blog.data?.slug,
  }));
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
      enrich: true,
    })
    .toPromise();

  if (!content) return notFound();

  return (
    <>
      <Header />
      <BlogContent content={content} />
    </>
  );
}
