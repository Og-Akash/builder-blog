"use client";

import { Category } from "@/constants/categories";
import { BlogFilterContextProps } from "@/types/builder-types";
import React, { createContext, useContext, useState } from "react";

const filterContext = createContext<BlogFilterContextProps | undefined>(undefined);

const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState(Category.ALL as string);
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);

  return (
    <filterContext.Provider
      value={{
        setPage,
        page,
        selectedCategory,
        setSelectedCategory,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </filterContext.Provider>
  );
};

export default FilterProvider;

export const useBlogFilters = () => {
  const ctx = useContext(filterContext);
  if (!ctx) throw new Error("useBlogs must be used within a BlogProvider");
  return ctx;
};
