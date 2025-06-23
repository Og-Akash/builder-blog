"use client";

import SearchBar from "@/components/ui/SearchBar";
import { categories, Category } from "@/constants/categories";
import { cn } from "@/lib/utils";
import React from "react";

const HeaderActions = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 max-lg:flex-col">
      <div className="flex w-full max-w-fit items-center py-1 scroll-smooth whitespace-nowrap max-lg:order-2 max-md:flex-nowrap max-md:overflow-x-auto gap-3">
        {categories?.map((category) => (
          <button
            className={cn(
              "bg-transparent outline-none",
              category.name === Category.ALL && "text-mint",
            )}
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
      <SearchBar className="max-w-96 w-full" />
    </div>
  );
};

export default HeaderActions;
