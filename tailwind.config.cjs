
const baseColors = {
    electricViolet: `#8F00FF`,
    mediumSlateBlue: `#8553F4`,
    raspberry: `#DD1155`,
    oxfordBlue: `#050824`,
    // oxfordBlue: `#11182C`,
    emerald: `#45D3A1`,
    ghostWhite: `#F4F4F9`,
    redPigment: `#F52C29`,
    mango: `#FFBD00`,
    capri: `#0DBDFD`,
    xiketic: `#050014`,
    russianViolet: `#15083B`,
    russianBlue: `#0A083B`,
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: baseColors.mediumSlateBlue,
                "light-bg": baseColors.ghostWhite,
                "dark-bg": baseColors.xiketic,
                highlight: baseColors.mango,
                ...baseColors
            },
        },
        container: {
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography")],
};
