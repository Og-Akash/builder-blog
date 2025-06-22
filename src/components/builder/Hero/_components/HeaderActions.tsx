"use client";

import SearchBar from "@/components/ui/SearchBar";
import { categories, Category } from "@/constants/categories";
import { cn } from "@/lib/utils";
import React from "react";

const HeaderActions = () => {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {categories?.map((category) => (
          <button
            className={cn("bg-transparent outline-none", category.name === Category.ALL && "text-mint")}
            key={category.id}
          >
            {category.name}
          </button>
        ))}
      </div>
      <SearchBar className="w-96" />
    </div>
  );
};

export default HeaderActions;
