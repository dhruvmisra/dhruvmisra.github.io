import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import partytown from "@astrojs/partytown";
import { astroImageTools } from "astro-imagetools";
import rehypePrettyCode from "rehype-pretty-code";
import { visit } from "unist-util-visit";

const prettyCodeOptions = {
    // Shiki theme
    theme: "material-theme-palenight",

    onVisitLine(node) {
        if (node.children.length === 0) {
            node.children = [
                {
                    type: "text",
                    value: " ",
                },
            ];
        }
    },

    onVisitHighlightedLine(node) {
        node.properties.className.push("highlighted");
    },

    onVisitHighlightedWord(node) {
        node.properties.className = ["word"];
    },
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
        if (node?.type === "element" && node?.tagName === "div") {
            if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                return;
            }

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
    site: "https://dhruvmisra.com",
    markdown: {
        syntaxHighlight: false,
        rehypePlugins: [addRawCodeToMetaNode, [rehypePrettyCode, prettyCodeOptions], addRawCodeToChildProperties],
        extendDefaultPlugins: true,
    },
    integrations: [
        preact(),
        mdx(),
        sitemap(),
        tailwind(),
        astroImageTools,
        compress(),
        robotsTxt(),
        partytown({
            config: {
                forward: ["dataLayer.push"],
            },
        }),
    ],
    w,
});
