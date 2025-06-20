import React from "react";
import HeroHeader from "./_components/Header";
import BlogGrid from "../ui/blog/BlogGrid";
import HeaderActions from "./_components/HeaderActions";

interface HeroProps {
  heading: string;
  subheadng: string;
}

const Hero = ({ heading, subheadng }: HeroProps) => {
  
  return (
    <div className="my-10">
      <HeroHeader heading={heading} subHeading={subheadng} />
      <HeaderActions />
      <BlogGrid />
    </div>
  );
};

export default Hero;
