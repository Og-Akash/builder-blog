import BlogCard from "./BlogCard";
import BlogCardSkeleton from "./BlogCardLoader";
import { useBlogFilters } from "@/hooks/FilterProvider";
import { useBlogs } from "@/hooks/useBlogs";
import Pagination from "./Pagination";

interface BlogGridProps {
  variant?: "primary" | "secondary";
}

export default function AllBlogsGrid({ variant = "primary" }: BlogGridProps) {
  const { searchQuery, selectedCategory, page } = useBlogFilters();
  const { data, isPending } = useBlogs({
    page,
    limit: 3,
    searchQuery,
    category: selectedCategory,
  });

  if (isPending) {
    return <BlogCardSkeleton />;
  }

  if (data && data.blogs.length === 0) {
    return <div>No blogs found.</div>;
  }
console.log("Total blogs:", data?.total);


  return (
    <div className="flex flex-col gap-3">
      {
        <div className="mx-auto grid max-w-6xl gap-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
          {data?.blogs?.map((blog) => {
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
      <Pagination total={Number(data?.total)} />
    </div>
  );
}
