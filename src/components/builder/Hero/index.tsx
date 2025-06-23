import React from "react";
import HeroHeader from "./_components/Header";
import HeaderActions from "./_components/HeaderActions";
import FilterProvider from "@/hooks/FilterProvider";
import AllBlogsGrid from "@/components/ui/blog/AllBlogsGrid";

interface HeroProps {
  heading: string;
  subheadng: string;
}

const Hero = ({ heading, subheadng }: HeroProps) => {
  return (
    <div className="my-10 space-y-6">
      <FilterProvider>
        <HeroHeader heading={heading} subHeading={subheadng} />
        <HeaderActions />
        <AllBlogsGrid />
      </FilterProvider>
    </div>
  );
};

export default Hero;
