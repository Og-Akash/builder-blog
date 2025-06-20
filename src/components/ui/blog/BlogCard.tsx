import Image from "next/image";
import Link from "next/link";
import React from "react";
import { formatDistanceToNow } from "date-fns";

interface BlogCardProps {
  title: string;
  description: string;
  authorName?: string;
  authorImage?: string;
  poster: string;
  createdAt: string;
  alt: string;
  slug: string;
  category: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  authorName,
  authorImage,
  poster,
  createdAt,
  alt,
  slug,
  category,
}) => {
  return (
    <div aria-label={title} className="relative flex w-[24rem] flex-col space-y-2 rounded-md p-3">
      <Link href={`/blogs/${slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">{title}</span>
      </Link>

      <div className="relative h-70 w-full overflow-hidden rounded-md">
        <Image src={poster} alt={alt} fill className="object-cover" />
      </div>

      <div className="flex flex-col gap-2 px-1">
        <h3 className="line-clamp-2 text-lg font-semibold tracking-tight">{title}</h3>
        <span className="text-tertiary line-clamp-2 text-sm">{description}</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="border-primary relative flex size-8 items-center gap-2 rounded-full border-1 text-sm text-gray-300">
          <Image
            src={authorImage || "/default-avatar.png"}
            alt="Author Avatar"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div>
          {authorName && <h3 className="text-secondary text-sm font-[500]">{authorName}</h3>}
        </div>
        <div className="bg-mint rounded-full px-2 py-1 text-sm text-white">{category}</div>
        <span className="text-[16px] text-secondary">
          {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
