import { getLighterShade } from "./colorUtils";

export const generateColorPalette = (baseColor) => {
    const colors = [];
    // Generate all percentages from 0 to 100
    for (let i = 100; i >= 0; i -= 5) {
        const hex = getLighterShade(baseColor, i);
        colors.push({
            percent: `${100 - i}%`,
            hex: hex,
        });
    }
    return colors;
};
