import { ChevronDown, Moon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { use } from "react";
import Button from "../ui/Button";
import { getBuilderContentByModel } from "@/helpers/builder";

export default function Header() {
  const headerData = use(getBuilderContentByModel("global-header"));

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      <Link href={`/`}>
        <Image width={100} height={100} src={headerData.data.logo || "/logo.png"} alt="Logo" />
      </Link>
      <nav className="flex gap-6">
        {headerData.data?.navLinks.map(
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
