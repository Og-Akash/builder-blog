import { ArrowUpRight } from "lucide-react";
import React from "react";

const Newsletter = ({ content }: { content: string }) => {
  return (
    <div className="bg-accent text-white inline-flex items-center justify-center gap-1 p-3 font-thin">
      {content}
      <ArrowUpRight className="text-teal" />
    </div>
  );
};

export default Newsletter;
