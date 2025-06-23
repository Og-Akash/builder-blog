"use client";

import SearchBar from "@/components/ui/SearchBar";
import { categories } from "@/constants/categories";
import { useBlogFilters } from "@/hooks/FilterProvider";
import { cn } from "@/lib/utils";
import React from "react";

const HeaderActions = () => {
  const { selectedCategory, setSelectedCategory, setSearchQuery } = useBlogFilters();
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 max-lg:flex-col">
      <div className="flex w-full max-w-fit items-center gap-3 scroll-smooth py-1 whitespace-nowrap max-lg:order-2 max-md:flex-nowrap max-md:overflow-x-auto">
        {categories?.map((category) => (
          <button
            onClick={() => setSelectedCategory(category.name)}
            className={cn(
              "bg-transparent outline-none",
              category.name === selectedCategory && "text-mint",
            )}
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
      <SearchBar onChange={(e) => setSearchQuery(e.target.value)} className="w-full max-w-96" />
    </div>
  );
};

export default HeaderActions;
