export interface BlogData {
  id: string;
  title: string;
  description: string;
  poster: string;
  authorName: string;
  authorImage: string;
  publishedAt: string; // ISO string, can be parsed with new Date()
  alt: string;
  slug: string;
  variant?: "primary" | "secondary";
  category: string;
}

export interface Blog {
  id: string;
  data: BlogData[];
}
