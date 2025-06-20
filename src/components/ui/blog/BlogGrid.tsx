import { BuilderContent } from "@builder.io/sdk";
import BlogCard from "./BlogCard";

interface BlogGridProps {
  blogs: BuilderContent[] | undefined;
  isPending: boolean;
}

export default function BlogGrid({ blogs, isPending }: BlogGridProps) {
  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!blogs) {
    return <div>No blogs found.</div>;
  }

  return (
    <div>
      {
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog) => {
            return (
              <BlogCard
                key={blog.data?.id}
                title={blog.data?.title}
                description={blog.data?.description}
                poster={blog.data?.poster}
                authorName={blog.data?.authorName}
                authorImage={blog.data?.authorImage}
                createdAt={blog.data?.publishedAt}
                alt={blog.data?.title}
                slug={blog.data?.slug}
                variant={blog.data?.variant}
                category={blog.data?.category}
              />
            );
          })}
        </div>
      }
    </div>
  );
}
