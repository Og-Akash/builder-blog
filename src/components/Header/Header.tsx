import { ChevronDown, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

interface HeaderProps {
  logoUrl?: string;
  links?: { label: string; url: string; hasmore: boolean }[];
}

export default function Header({ logoUrl, links }: HeaderProps) {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <Image width={100} height={100} src={logoUrl || "/logo.svg"} alt="Logo" />
      <nav className="flex gap-6">
        {links?.map((link, idx) => (
          <Link
            key={idx}
            href={link.url}
            className="text-tertiary inline-flex items-center gap-1 text-sm font-medium"
          >
            {link.label}
            {link.hasmore && <ChevronDown size={18} />}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-4">
        <Button variant="outline">Login</Button>
        <Button variant="solid">Register Now</Button>
        <Button className="border-foreground border px-4 py-3" variant="outline">
          <Moon />
        </Button>
      </div>
    </header>
  );
}
