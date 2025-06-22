import { builder } from "@builder.io/sdk";

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export async function getBuilderContentByModel(model: string) {
  try {
    const content = await builder
      .get(model, {
        options: {
          noTargeting: true,
        },
        enrich: true,
        cachebust: true,
      })
      .toPromise();

    return content;
  } catch (error) {
    console.error(`Error fetching Builder content for model "${model}":`, error);
    return null;
  }
}
