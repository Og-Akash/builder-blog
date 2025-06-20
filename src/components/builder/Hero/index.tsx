"use client";

import React from "react";
import HeroHeader from "./_components/Header";
import BlogGrid from "@/components/ui/blog/BlogGrid";
import HeaderActions from "./_components/HeaderActions";
import { useQuery } from "@tanstack/react-query";
import { builder } from "@builder.io/sdk";

interface HeroProps {
  heading: string;
  subheadng: string;
}

const Hero = ({ heading, subheadng }: HeroProps) => {
  const { data: blogs, isPending } = useQuery({
    queryKey: ["blogs"],
    queryFn: () =>
      builder.getAll("blog", {
        enrich: true,
      }),
  });

  return (
    <div className="my-10">
      <HeroHeader heading={heading} subHeading={subheadng} />
      <HeaderActions />
      <BlogGrid blogs={blogs} isPending={isPending} />
    </div>
  );
};

export default Hero;
