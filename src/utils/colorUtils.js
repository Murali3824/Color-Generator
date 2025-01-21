export const getLighterShade = (hex, percent) => {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.min(255, ((num >> 16) & 0xff) + amt);
    const G = Math.min(255, ((num >> 8) & 0xff) + amt);
    const B = Math.min(255, (num & 0xff) + amt);
    return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};

export const getDarkerShade = (hex, percent) => {
    const num = parseInt(hex.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = Math.max(0, ((num >> 16) & 0xff) - amt);
    const G = Math.max(0, ((num >> 8) & 0xff) - amt);
    const B = Math.max(0, (num & 0xff) - amt);
    return `#${((1 << 24) | (R << 16) | (G << 8) | B).toString(16).slice(1)}`;
};

export const tealPalette = {
    lighter: [
        "#ffffff",
        "#ecf2f2",
        "#d9e6e6",
        "#c6d9d9",
        "#b3cccc",
        "#a0c0c0",
        "#8cb3b3",
        "#79a6a6",
    ],
    darker: [
        "#669999",
        "#538d8d",
        "#408080",
        "#336666",
        "#264d4d",
        "#1a3333",
        "#0d1a1a",
        "#000000",
    ],
};
