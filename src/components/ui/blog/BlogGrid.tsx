import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardLoader";
import { Blog } from "@/types/builder-types";
import NotFound from "./NotFound";

interface BlogGridProps {
  blogs: Blog[];
  isPending: boolean;
  variant?: "primary" | "secondary";
}

export default function BlogGrid({ blogs, isPending, variant = "primary" }: BlogGridProps) {
  if (isPending) {
    return <BlogCardSkeleton />;
  }

  if (blogs.length === 0) {
    return <NotFound />;
  }

  return (
    <div>
      {
        <div className="mx-auto grid max-w-6xl gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
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
                variant={variant}
                category={blog.data?.category}
              />
            );
          })}
        </div>
      }
    </div>
  );
}
