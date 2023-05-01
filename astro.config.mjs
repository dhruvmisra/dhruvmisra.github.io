import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import { astroImageTools } from "astro-imagetools";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
    // Shiki theme
    theme: "material-palenight",
    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
        }
    },
    onVisitHighlightedLine(node) {
        node.properties.className.push("highlighted");
    },
    onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
    },
};

// https://astro.build/config
export default defineConfig({
    site: "https://example.com",
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
        extendDefaultPlugins: true,
    },
    integrations: [preact(), mdx(), sitemap(), tailwind(), astroImageTools, compress(), robotsTxt()],
});
