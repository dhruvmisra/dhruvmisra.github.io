import Color from "color";

const offsetY = 200;
const layerHeight = 150;
const layerWidth = 600;
const baseColor = Color("#457cd6");
const layers = 5;

let sunX = Math.random() * 0.5 + 0.25;
let sunY = Math.random() * 0.1 + 0.1;

let defs = [];
let paths = [];

for (let layer = 1; layer <= layers; layer++) {
    let layerAnchorY = layer * (layerHeight / layers) + offsetY + Math.random() * (layerHeight / layers);
    let coord = `M 0 ${layerAnchorY} `;

    // back layers have higher peaks for more mountainous effect
    let amplitude = Math.random() * (layerHeight / layers) + layerHeight / layer / layers;
    let freq1 = (Math.random() * 0.02 * layer) / layers + 0.005;
    let freq2 = Math.random() * 0.01 + 0.005;
    let phase1 = Math.random() * 500;
    let phase2 = phase1 + Math.random() * 250;

    for (let i = 0; i < layerWidth + 1; i++) {
        coord += `H ${i} V ${
            Math.sin(freq1 * (i + phase1)) * amplitude + // base
            (Math.sin(freq2 * (i + phase2)) * amplitude) / 2 + // interference
            (Math.sin((i * layer) / 5) * Math.log(layer)) / 4 + // detail
            (Math.sin((i * layer) / 3) * Math.log(layer * 2, 10)) / 2 + // detail
            Math.sin((i * layer) / 2) * (Math.log(layer, 2) * 1.5) + // more detail
            (layerAnchorY - layerHeight)
        } `;
    }

    coord += `V ${layerAnchorY} L 0 ${layerAnchorY}`;
    defs.push(`<radialGradient id="${`fill${layer}`}" cx="${sunX}" cy="${sunY / 2 - (layer - 1) / Math.pow(layers, 2)}">
        <stop offset="0%" stop-color="${baseColor
            .rotate(120)
            .saturate(0.3)
            .lighten(0.3)
            .desaturate(0.1 * layer)
            .darken(0.1 * layer)
            .string()}" /> 
        <stop offset="${20 / layer}%" stop-color="${baseColor
        .saturate(0.3)
        .desaturate(layer / layers / 4)
        .darken(layer / layers / 2)
        .rotate(120 - 45 * (layer / layers))
        .string()}" />
        <stop offset="100%" stop-color="${baseColor
            .saturate(layer / layers / 2.5)
            .darken(layer / layers)
            .string()}" />
    </radialGradient>`);
    paths.push(`<path d="${coord}" fill="${`url('#fill${layer}')`}"/>`);
}

export const terrain = `<svg width="100%" height="300" viewBox="${`0 0 ${layerWidth} 100`}" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <radialGradient id="fillBg" cx="${sunX}" cy="${sunY}"> 
            <stop offset="0" stop-color="${baseColor.rotate(240).desaturate(1).lighten(1).string()}" /> 
            <stop offset="5%" stop-color="${baseColor.rotate(240).lighten(0.7).string()}" /> 
            <stop offset="20%" stop-color="${baseColor.rotate(120).desaturate(0.5).lighten(0.4).string()}" /> 
            <stop offset="60%" stop-color="${baseColor.rotate(0).desaturate(0.5).lighten(0.2).string()}" /> 
            <stop offset="90%" stop-color="${baseColor.rotate(0).desaturate(0.5).darken(0.1).string()}" />
            <stop offset="100%" stop-color="${baseColor.rotate(0).desaturate(0.5).darken(0.2).string()}" />
        </radialGradient>
        ${defs}
        <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="30" result="noisy" />
            <feColorMatrix type="saturate" values="0"/>
            <feBlend in="SourceGraphic" in2="noisy" mode="multiply" />
        </filter>
        <linearGradient id="fog" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stop-color="rgb(255,255,255)" stop-opacity="${1 - sunY * 3}" />
            <stop offset="100%" stop-color="rgb(255,255,255)" stop-opacity="0" />
        </linearGradient>
    </defs>
    <rect filter="url(#noise)" x="0" y="0" width="100%" height="300" fill="url(#fillBg)" />
    <circle cx="${sunX * layerWidth}" cy="${sunY * 300}" r="20" fill="${baseColor
    .rotate(180)
    .desaturate(0.8)
    .lighten(0.8)
    .string()}" />
    ${paths.slice(0, 3)}
    <rect x="0" y="0" width="100%" height="300" fill="url(#fog)" />
    ${paths.slice(3)}
</svg>`;
