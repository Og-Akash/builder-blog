import BlogContent from "@/components/BuilderContent.Client";
import { getBlogContent, getBlogMetadata } from "@/helpers/seo";
import { builder } from "@builder.io/sdk";
import { notFound } from "next/navigation";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// export async function generateStaticParams() {
//   const blogs = await builder.getAll("blog", {
//     fields: "data.slug",
//   });

//   return blogs.map((blog) => ({
//     slug: blog.data?.slug,
//   }));
// }

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
      <BlogContent content={content} />
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const content = await getBlogContent(slug);
  return getBlogMetadata({
    data: {
      description: content.data?.description,
      title: content.data?.title,
      poster: content.data?.poster,
    },
  });
}
