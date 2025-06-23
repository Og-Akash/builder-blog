import React from "react";

const BlogCardSkeleton = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="animate-pulse flex flex-col space-y-4 rounded-md shadow p-3"
        >
          <div className="h-[200px] w-full rounded-md bg-gray-200" />

          <div className="space-y-2 px-1">
            <div className="h-4 w-3/4 rounded bg-gray-200" />
            <div className="h-3 w-full rounded bg-gray-200" />
          </div>

          <div className="flex items-center gap-2 mt-2">
            <div className="relative flex h-8 w-8 shrink-0 rounded-full bg-gray-200" />
            <div className="h-3 w-20 rounded bg-gray-200" />
            <div className="bg-gray-200 h-5 w-16 rounded-full" />
            <div className="h-3 w-14 rounded bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogCardSkeleton;
