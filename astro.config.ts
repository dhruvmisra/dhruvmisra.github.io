import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import robotsTxt from "astro-robots-txt";
import remarkToc from "remark-toc";
import rehypePrettyCode from "rehype-pretty-code";
import {
  transformerNotationDiff,
  transformerNotationFocus,
} from "shikiji-transformers";
import { visit } from "unist-util-visit";
import { SITE } from "./src/config";

const prettyCodeOptions = {
  // Shiki theme
  theme: "material-theme-ocean",
  wrap: false,
  transformers: [transformerNotationDiff(), transformerNotationFocus()],
};

const addRawCodeToChildProperties = () => tree => {
  visit(tree, node => {
    if (
      node &&
      node.type === "element" &&
      node.tagName === "figure" &&
      "data-rehype-pretty-code-figure" in node.properties
    ) {
      for (const child of node.children) {
        if (child.tagName === "pre") {
          child.properties["raw"] = node.raw;
        }
      }
    }
  });
};
// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx(),
    preact(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    robotsTxt(),
  ],
  site: SITE.website,
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkToc],
    rehypePlugins: [
      [rehypePrettyCode, prettyCodeOptions],
      addRawCodeToChildProperties,
    ],
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
