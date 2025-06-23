"use client";

import { useBlogFilters } from "@/hooks/FilterProvider";
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "../Button";

interface PaginationProps {
  total: number;
  perPage?: number;
}

export default function Pagination({ total, perPage = 3 }: PaginationProps) {
  const { page, setPage } = useBlogFilters();

  const totalPages = Math.ceil(total / perPage);
  const pages = getVisiblePages(page, totalPages);

  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center space-x-2">
      <PaginationButton onClick={() => setPage(1)} disabled={page === 1}>
        <ChevronsLeft size={16} />
      </PaginationButton>
      <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 1}>
        <ChevronLeft size={16} />
      </PaginationButton>

      {pages.map((p, i) =>
        p === "..." ? (
          <span key={i} className="px-2 text-sm text-gray-400">
            ...
          </span>
        ) : (
          <PaginationButton key={p} onClick={() => setPage(p)} isActive={p === page}>
            {p}
          </PaginationButton>
        ),
      )}

      <PaginationButton onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        <ChevronRight size={16} />
      </PaginationButton>
      <PaginationButton onClick={() => setPage(totalPages)} disabled={page === totalPages}>
        <ChevronsRight size={16} />
      </PaginationButton>
    </div>
  );
}

function PaginationButton({
  children,
  onClick,
  disabled,
  isActive = false,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isActive?: boolean;
}) {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "flex items-center justify-center rounded-full size-8 border text-sm p-2 transition-all",
        isActive ? "bg-mint text-white" : "text-foreground bg-white hover:bg-gray-100",
        disabled && "cursor-not-allowed opacity-50",
      )}
    >
      {children}
    </Button>
  );
}

function getVisiblePages(current: number, total: number): (number | "...")[] {
  const pages: (number | "...")[] = [];
  const delta = 2;

  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || (i >= current - delta && i <= current + delta)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== "...") {
      pages.push("...");
    }
  }

  return pages;
}
