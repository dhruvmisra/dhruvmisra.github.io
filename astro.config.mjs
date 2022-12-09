import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    integrations: [preact(), mdx(), sitemap(), tailwind(), astroImageTools, compress(), robotsTxt()],
});
