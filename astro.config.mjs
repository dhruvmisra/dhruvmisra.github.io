import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import robotsTxt from "astro-robots-txt";
import rehypePrettyCode from "rehype-pretty-code";
import {
    transformerNotationDiff,
    transformerNotationFocus,
} from "shikiji-transformers";
import { visit } from "unist-util-visit";
import { SITE_URL } from "./src/data/config";

const prettyCodeOptions = {
    // Shiki theme
    theme: "material-theme-ocean",
    wrap: false,
    transformers: [transformerNotationDiff(), transformerNotationFocus()],
};

const addRawCodeToMetaNode = () => (tree) => {
    visit(tree, (node) => {
        if (node?.type === "element" && node?.tagName === "pre") {
            const [codeEl] = node.children;
            if (codeEl.tagName !== "code") return;
            node.raw = codeEl.children?.[0].value;
        }
    });
};

const addRawCodeToChildProperties = () => (tree) => {
    visit(tree, (node) => {
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
    integrations: [mdx(), preact(), tailwind(), sitemap(), robotsTxt()],
    site: SITE_URL,
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [
            addRawCodeToMetaNode,
            [rehypePrettyCode, prettyCodeOptions],
            addRawCodeToChildProperties,
        ],
    },
});
