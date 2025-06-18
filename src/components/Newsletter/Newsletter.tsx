import { ArrowUpRight } from "lucide-react";
import React from "react";

const Newsletter = ({ content }: { content: string }) => {
  return (
    <div className="bg-foreground text-background justify-center  p-3 font-thin inline-flex gap-1 items-center">
      {content}
      <ArrowUpRight className="text-teal" />
    </div>
  );
};

export default Newsletter;
