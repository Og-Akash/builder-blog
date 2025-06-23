import React from "react";

interface HeroHeadingProps {
  heading: string;
  subHeading: string;
}

const HeroHeader = ({ heading, subHeading }: HeroHeadingProps) => {
  return (
    <div
    className="space-y-4 p-2"
    >
      <h1
      className="font-poppins font-[500] text-foreground text-4xl md:text-5xl lg:text-7xl"
      >{heading}</h1>
      <p
       className="font-inter font-[400] text-secondary text-[1.2rem] md:text-[1.5rem] leading-8"
      >{subHeading}</p>
    </div>
  );
};

export default HeroHeader;
