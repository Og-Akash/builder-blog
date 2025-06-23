"use client";

import BlogGrid from "@/components/ui/blog/BlogGrid";
import { Category } from "@/constants/categories";
import { Blog } from "@/types/builder-types";
import { builder } from "@builder.io/sdk";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface CaseStudiesProps {
  tag?: string;
  title?: string;
  description?: string;
}

const CaseStudies = ({ tag, title, description }: CaseStudiesProps) => {
  const { data, isPending } = useQuery({
    queryKey: ["case-studies"],
    queryFn: () =>
      builder.getAll("blog", {
        query: {
          "data.category": Category.CASE_STUDIES,
        },
        options: {
          noTargeting: true,
        },
      }),
  });

  return (
    <div className="p-2 lg:p-16">
      <div className="flex flex-col gap-8">
        <div className="mx-auto flex max-w-2xl flex-col space-y-2 max-md:text-center md:space-y-4">
          <div className="text-center">
            <span className="text-mint text-sm font-bold">{tag}</span>
          </div>
          <h1 className="text-primary text-3xl font-[700] md:text-5xl">{title}</h1>
          <p className="text-secondary text-base md:text-xl">{description}</p>
        </div>
        {/* Render all the insights blogs */}
        <BlogGrid blogs={data as Blog[]} isPending={isPending} variant="secondary" />
      </div>
    </div>
  );
};

export default CaseStudies;
