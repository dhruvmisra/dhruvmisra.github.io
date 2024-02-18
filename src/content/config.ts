import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        publishedAt: z.date(),
        description: z.string(),
        isPublished: z.boolean(),
        isDraft: z.boolean().default(false),
    }),
});

export const collections = { posts: postsCollection };
