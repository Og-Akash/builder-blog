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
  data: BlogData;
}

export interface BlogFilterContextProps {
  isPending?: boolean;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  page: number;
  setPage: (val: number) => void;
}

export interface Header {
  logo: string;
  navLinks: {
    label: string;
    url: string;
    hasMore?: boolean;
  }[];
}
export interface Footer {
  footerlinks: {
    title: string;
    footerlink: {
      label: string;
      url: string;
    }[];
  }[];
  copyrightText: string;
  bottomlinks: {
    lable: string;
    url: string;
  }[];
}

export type BlogQuery = {
  [key: string]:
    | string
    | number
    | boolean
    | {
        [key: string]: {
          $regex: string;
          $options: string;
        };
      }[];
};
