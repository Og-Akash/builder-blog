import { cn } from "@/lib/utils";
import { ArrowDownNarrowWide, Search } from "lucide-react";
import React from "react";

interface SearchBarProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  className,
}) => {
  return (
    <div
      className={cn(
        "border-mint flex items-center rounded-md border bg-transparent p-2",
        className,
      )}
    >
      <Search className="text-mint" size={24} />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn("w-full border-none pl-3 text-sm outline-none")}
      />
      <ArrowDownNarrowWide className="text-mint" size={24} />
    </div>
  );
};

export default SearchBar;
