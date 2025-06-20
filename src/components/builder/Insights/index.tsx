"use client";

import BlogGrid from "@/components/ui/blog/BlogGrid";
import { Category } from "@/constants/categories";
import { builder } from "@builder.io/sdk";
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface InsightsProps {
  tag?: string;
  title?: string;
  description?: string;
}

const Insights = ({ tag, title, description }: InsightsProps) => {
  const { data, isPending } = useQuery({
    queryKey: ["insights"],
    queryFn: () =>
      builder.getAll("blog", {
        query: {
          "data.category": Category.AI_INSIGHTS,
        },
        options: {
          noTargeting: true,
        },
      }),
  });

  return (
    <div className="bg-surface-neutral p-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="mx-auto flex max-w-2xl flex-col space-y-4">
          <div className="text-center">
            <span className="text-mint text-sm font-bold">{tag}</span>
          </div>
          <h1 className="text-primary text-5xl font-[700]">{title}</h1>
          <p className="text-secondary text-xl">{description}</p>
        </div>
        {/* Render all the insights blogs */}
        <BlogGrid blogs={data} isPending={isPending} />
      </div>
    </div>
  );
};

export default Insights;
