"use client";

import { ChevronDown, Menu, Moon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Button from "../ui/Button";
import { Header } from "@/types/builder-types";
import { useBreakpointReset } from "@/hooks/useBreakpoint";

export default function NavigationBar({ headerData }: { headerData: Header }) {
  const [isOpen, setIsOpen] = useState(false);
  useBreakpointReset(() => setIsOpen(false));

  if (!headerData) return null;

  return (
    <header className="bg-white px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image width={100} height={100} src={headerData.logo || "/logo.png"} alt="Logo" />
        </Link>

        {/* Hamburger for small screens */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Nav */}
        <nav className="hidden gap-6 lg:flex">
          {headerData.navLinks.map((link, idx: number) => (
            <Link
              key={idx}
              href={link.url}
              className="text-tertiary inline-flex items-center gap-1 text-sm font-medium"
            >
              {link.label}
              {link.hasMore && <ChevronDown size={18} />}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="outline">Login</Button>
          <Button variant="solid">Register Now</Button>
          <Button className="border-foreground border px-4 py-3" variant="outline">
            <Moon />
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4">
          <nav className="flex flex-col gap-2">
            {headerData.navLinks.map(
              (link: { label: string; url: string; hasMore?: boolean }, idx: number) => (
                <Link
                  key={idx}
                  href={link.url}
                  className="text-tertiary inline-flex items-center gap-1 text-sm font-medium"
                >
                  {link.label}
                  {link.hasMore && <ChevronDown size={18} />}
                </Link>
              ),
            )}
          </nav>

          <div className="flex flex-col gap-2 border-t pt-4">
            <Button variant="outline">Login</Button>
            <Button variant="solid">Register Now</Button>
            <Button
              className="border-mint grid place-items-center border px-4 py-3"
              variant="outline"
            >
              <Moon />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
