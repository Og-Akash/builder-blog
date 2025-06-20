import { builder } from "@builder.io/react";

export async function fetchCategories() {
  return await builder.getAll("category", {
    options: { noTargeting: true },
  });
}

/**
 * @param categorySlug get the cateogry slug to fetch all the blogs based on that
 * @param page the current page
 * @param pageSize the size of the page to load at once
 */
export async function getAllBlogs({
  categorySlug = "",
  page = 1,
  pageSize = 6,
}: {
  categorySlug?: string;
  page?: number;
  pageSize?: number;
}) {
  // if the user passed a categoryslug then get blogs according to the cateogry slug
  const query: Record<string, string> = {};

  if (categorySlug) {
    query["data.category.slug"] = categorySlug;
  }
  // get all the blogs
  const blogsResult = await builder.getAll("blog", {
    options: {
      noTargeting: true,
      limit: pageSize,
      offset: (page - 1) * pageSize,
    },
    query,
  });

  if (!blogsResult || blogsResult.length === 0) {
    return { data: [], totalResults: 0 };
  }

  const categoryIds = [
    ...new Set(
      blogsResult.map((blog) => blog?.data?.category.id).filter((id): id is string => Boolean(id)),
    ),
  ];

  const categories = await getAllCategoryById(categoryIds);

  const categoryMap = new Map(categories.map((category) => [category.id, category.data]));

  const mappedBlogs = blogsResult?.map((entry) => {
    const categoryId = entry.data?.category?.id;
    return {
      id: entry.id,
      title: entry.data?.title,
      description: entry.data?.description,
      slug: entry.data?.slug,
      poster: entry.data?.poster,
      publishedAt: entry.data?.publishedAt,
      authorName: entry.data?.authorName,
      authorImage: entry.data?.authorImage,
      content: entry.data?.content,
      variant: entry.data?.isPrimary?.Default ?? false,
      isPrimary: entry.data?.isPrimary?.Default ?? false,
      category: categoryMap.get(categoryId) ?? null,
    };
  });
  return {
    data: mappedBlogs,
    totalResults: blogsResult.length,
  };
}

async function getAllCategoryById(ids: string[]) {
  return await builder.getAll("category", {
    options: {
      noTargeting: true,
    },
    query: {
      id: { $in: ids },
    },
  });
}
