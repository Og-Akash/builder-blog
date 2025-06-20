"use client";

import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import { builder } from "@builder.io/sdk";

export default function BlogGrid() {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      builder.getAll("blog", {
        enrich: true,
      }),
  });

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!blogs || blogs.length === 0) {
    return <div>No blogs found.</div>;
  }

  return (
    <div>
      {
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
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
              category={blog.data?.category}
            />
          ))}
        </div>
      }
    </div>
  );
}
