// hooks/useBlogs.ts
import { useQuery } from "@tanstack/react-query";
import { builder } from "@builder.io/sdk";
import { useDebounce } from "./useDebouce";
import { Category } from "@/constants/categories";
import { BlogQuery } from "@/types/builder-types";
import { useEffect } from "react";

interface UseBlogsProps {
  page: number;
  limit: number;
  searchQuery?: string;
  category?: string;
}

export const useBlogs = ({ page, limit, searchQuery, category }: UseBlogsProps) => {
  // layout improvement: move to the top of the layout
  useEffect(() => {
    window.scrollTo({ top: 100, behavior: "smooth" });
  }, [page]);

  // call debounce fn
  const debouncedSearchTerm = useDebounce(searchQuery, 500);

  return useQuery({
    queryKey: ["blogs", { page, limit, debouncedSearchTerm, category }],
    queryFn: async () => {
      const query: BlogQuery = {};

      if (debouncedSearchTerm) {
        query["$or"] = [
          { "data.title": { $regex: debouncedSearchTerm, $options: "i" } },
          { "data.description": { $regex: debouncedSearchTerm, $options: "i" } },
        ];
      }

      if (category && category !== Category.ALL) {
        query["data.category"] = category;
      }

      const allBlogs = await builder.getAll("blog", {
        options: {
          noTargeting: true,
        },
        query,
      });

      const paginated = allBlogs.slice((page - 1) * limit, page * limit);

      return {
        blogs: paginated,
        total: allBlogs.length,
      };
    },
  });
};
