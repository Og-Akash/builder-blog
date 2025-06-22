import { ArrowUpRight } from "lucide-react";
import React from "react";

const Newsletter = ({
  content = "Subscribe to our Newsletter For New & latest Blogs and Resources",
}: {
  content?: string;
}) => {
  return (
    <div className="w-full bg-accent inline-flex items-center justify-center gap-1 p-3 font-thin text-white">
      {content}
      <ArrowUpRight className="text-teal" />
    </div>
  );
};

export default Newsletter;
